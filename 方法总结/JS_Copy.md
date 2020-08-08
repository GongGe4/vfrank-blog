# JS实现一键复制操作

```javascript
 function copy(text) {

     // chrome 和 IE都可以使用
     var textArea = document.createElement("textarea");
     document.body.appendChild(textArea);

     textArea.style.position = "absolute";
     textArea.style.left = "-9999px";
     textArea.style.top = "-1000px";
     textArea.value = text;

     textArea.select();
     document.execCommand("Copy");
     document.body.removeChild(textArea);
 }


 function copyIE(text) {

     //  只有IE支持这个方法
     window.clipboardData.clearData();
     window.clipboardData.setData("Text", text);

 }
 ```