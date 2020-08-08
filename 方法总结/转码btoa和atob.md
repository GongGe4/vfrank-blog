# btoa()和atob()转码方法 --IE10+

> window.btoa()从 String 对象中创建一个 base-64 编码的 ASCII 字符串，其中字符串中的每个字符都被视为一个二进制数据字节。

- 字符的码位不能超出 0x00 ~ 0xFF 范围，否则会引发 InvalidCharacterError 异常

```javascript

    window.btoa('abcd'); // "YWJjZA=="
    
    window.btoa('1234'); // "MTIzNA=="

    window.btoa('汉字'); // Uncaught DOMException: Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.

```

> window.atob() 对用base-64编码过的字符串进行解码 。

- 如果传入字符串的长度不是4的倍数，则抛出DOMException。

```javascript

    window.atob('YWJjZA=='); // "abcd"
    
    window.atob('MTIzNA=='); // "1234"

```

## 解决用 window.btoa 对Unicode字符串进行编码都会触发一个字符越界的异常问题

```javascript

    function utf8_to_b64(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    function b64_to_utf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }

```
