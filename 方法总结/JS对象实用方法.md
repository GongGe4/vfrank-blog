# JS Object实用的方法

## Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组

- IE完全不兼容

- node中使用会报错(TypeError: Object.values is not a function)

```javascript

    var obj = { foo: 'bar', baz: 42 };
    console.log(Object.values(obj)); // ['bar', 42]
    
    // 如果不存在对象的时候，会强制转换为一个对象
    console.log(Object.values('abcd')); // ["a", "b", "c", "d"]

    // 函数getFoo 不是一个可枚举的属性，输出的时候不被value取值取到
    var my_obj = Object.create({}, {
        getFoo: {
            value: function() { return this.foo; }
        }
    });
    my_obj.foo = 'bar';
    console.log(Object.values(my_obj)); // ['bar']


```

## Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组

- IE9+ 兼容

- 如果你想获取一个对象的所有属性,，甚至包括不可枚举的，可以使用Object.getOwnPropertyNames。

```javascript

   // 数组会输出下标
    var arr = ['a', 'b', 'c'];
    console.log(Object.keys(arr)); // console: ['0', '1', '2']

    // Object输出键
    var obj = { 0: 'a', key: 'b', key2: 'c' };
    console.log(Object.keys(obj)); // console: ['0', 'key', 'key2']

    // 不可枚举属性不输出
    var myObj = Object.create({}, {
    getFoo: {
        value: function () { return this.foo; }
    } 
    });
    myObj.foo = 1;
    console.log(Object.keys(myObj)); // console: ['foo']

```

```javascript

    // 非对象的情况下载ES5会报错
    Object.keys("foo");
    // TypeError: "foo" is not an object

    // 在ES2015中会潜质·强制转为对象
    Object.keys("foo");
    // ["0", "1", "2"]  

```

## Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组

- IE 完全不兼容

```javascript

    const obj = { foo: 'bar', baz: 42 };
    console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

    // 对于不可枚举属性不输出
    const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
    myObj.foo = 'bar';
    console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

    // 不是对象的时候会被强制转为对象
    console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]


```


## Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

- 如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。类似于Ext.apply()

```javascript 

    const obj1 = {
        a: 1,
        b: 2,
        c: 3
    };
    const obj2 = Object.assign({ c: 4, d: 5 }, obj1);
    console.log(objt2);

    // expected output:{c: 3, d: 5, a: 1, b: 2}

```

- 针对深拷贝，需要使用其他方法，因为 Object.assign()拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。


```javascript   

    let obj1 = { a: 0, b: { c: 0 } };
    let obj2 = Object.assign({}, obj1);

    console.log(obj2); // { a: 0, b: { c: 0 } }

    obj2.a = 2;
    console.log(obj1); // { a: 0, b: { c: 0}}
    console.log(obj2); // { a: 2, b: { c: 0}}

    obj2.b.c = 3;
    console.log(obj1); // { a: 1, b: { c: 3}}
    console.log(obj2); // { a: 2, b: { c: 3}}


    // 深拷贝
    objTest = { a: 5, b: { c: 10 } };
    let objDeep = JSON.parse(JSON.stringify(objTest));
    objTest.a = 20;
    objTest.b.c = 30;
    console.log(objDeep); // { a: 5, b: { c: 10 } }

```
