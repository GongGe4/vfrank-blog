```javascript
function download(url, config, newTab) {
    var doc = document,
        form = doc.createElement('form'),
        input = doc.createElement('input'),
        iframe = doc.createElement('iframe'),
        field;

    form.action = url;
    form.method = 'post';
    form.style.display = 'none';

    iframe.style.display = 'none';
    iframe.id = 'download';
    iframe.name = 'download';

    if (newTab !== false) {
        form.target = Ext.isString(newTab) ? newTab : '_blank';
    } else {
        form.target = 'download';
    }

    input.type = 'hidden';

    Ext.iterate(config, function(name, value) {
        field = input.cloneNode(false);
        field.name = name;
        field.value = value;
        form.appendChild(field);
    });
    doc.body.appendChild(iframe);
    doc.body.appendChild(form);
    form.submit;
    doc.body.removeChild(form);
    doc.body.removeChild(iframe);



}
```