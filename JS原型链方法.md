# JavaScript 原型链常用方法

## 对象属性类型

> 数据属性

1. **Configurable**(表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性)

2. **Enumerable**(表示能否通过 for-in 循环返回属性)

3.  **Writable**(表示能否修改属性的值)

4. **Value**(这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值为 undefined)

- **把 configurable 设置为 false**，表示不能从对象中删除属性。如果对这个属性调用 delete，则在非严格模式下什么也不会发生，而在严格模式下会导致错误。**一旦把属性定义为不可配置的，就不能再把它变回可配置了**。此时，再调用 Object.defineProperty()方法修改**除 writable 之外**的特性，都会导致错误

> 访问器属性

- 访问器属性不包含数据值；它们包含一对儿 getter 和 setter 函数（不过，这两个函数都不是必需的）。在**读取访问器属性时，会调用 getter 函数**，这个函数负责返回有效的值；在**写入访问器属性时，会调用setter 函数并传入新值**，这个函数负责决定如何处理数据

- 访问器属性不能直接定义，**必须使用 Object.defineProperty()来定义**。**在不支持 Object.defineProperty() 方法的浏览器中不能修改 Configurable 和Enumerable**

1. **Configurable**(表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。默认值为true)

2. **Enumerable**(表示能否通过 for-in 循环返回属性。对于直接在对象上定义的属性)

3. **Get**(在读取属性时调用的函数。默认值为 undefined)

4. **Set**(在写入属性时调用的函数。默认值为 undefined)

> 注意事项：

- 共同点：数据属性 和 访问器属性均具有以下可选键值：

1. configurable 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。

2. enumerable 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。

- 如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。

- 考虑特性被赋予的默认特性值非常重要，通常，使用**点运算符和Object.defineProperty()**为对象的属性赋值时，数据描述符中的属性默认值是不同的，如下例所示。

```javascript

    var obj = {};

    obj.vfrank = 1;
    // 等同于 :
    Object.defineProperty(obj, "vfrank", {
        value: 1,
        writable: true,
        configurable: true,
        enumerable: true
    });

    // 另一方面，
    Object.defineProperty(obj, "vfrank", { value: 1 });
    // 等同于 :
    Object.defineProperty(obj, "vfrank", {
        value: 1,
        writable: false,
        configurable: false,
        enumerable: false
    });

```
| |configurable | enumerable | value | writable | get | set |
|:---|:---|:---|:---|:---|:---|:---|
数据属性(数据描述符) | Yes | Yes | Yes | Yes | No | No
访问器属性(存取描述符) | Yes | Yes | No | No | Yes | Yes


## Object.defineProperty() 和 Object.defineProperties()

-  定义

1. Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象**（IE8 部分支持）**。

2. Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象（IE9+）。

- IE8 是第一个实现 Object.defineProperty()方法的浏览器版本。然而，这个版本的实现存在诸多限制：**只能在 DOM 对象**上使用这个方法，而且**只能创建访问器属性**。由于实现不彻底，建议不要在 IE8 中使用 Object.defineProperty()方法


## Object.getOwnPropertyDescriptor()

- 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，**不需要从原型链上进行查找的属性**）

- 可以取得给定属性的描述符。这个方法接收两个参数：属性所在的对象和要读取其描述符的属性名称。返回值是一个对象，如果是**访问器属性，这个对象的属性有 configurable、enumerable、get 和 set**；如果是**数据属性，这个对象的属性有 configurable、enumerable、writable 和 value**。

```javascript

    var vfrank = {};
    Object.defineProperties(vfrank, {
        _year: {
            value: 2019
        },
        edition: {
            value: 1
        },
        year: {
            get: function() {
                return this._year;
            },
            set: function(newValue) {
                if (newValue > 2019) {
                    this._year = newValue;
                    this.edition += newValue - 2019;
                }
            }
        }
    });

    // 数据属性
    var descriptor = Object.getOwnPropertyDescriptor(vfrank, "_year");
    console.log(descriptor.value); //2019 
    console.log(descriptor.configurable); //false 
    console.log(typeof descriptor.get); //"undefined" 

    // 访问器属性
    var descriptor = Object.getOwnPropertyDescriptor(vfrank, "year");
    console.log(descriptor.value); //undefined 
    console.log(descriptor.enumerable); //false 
    console.log(typeof descriptor.get); //"function"

```

## instanceof 运算符

- obj instanceof classConstructor

- instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置(即：**object是否属于classConstructor**)

```javascript
    function VFrank(name, work, age) {
        this.name = name;
        this.work = work;
        this.age = age;
    }
    var person = new VFrank('VFrank', 'Web engineer', 24);

    console.log(person instanceof VFrank); // true
    console.log(person instanceof Object); // true
```


## isPrototypeOf() 

- prototypeObj.isPrototypeOf(obj)

- 用于测试一个对象是否存在于另一个对象的原型链上。**在obj对象原型链上搜寻**

```javascript

    function VFrank() {}

    VFrank.prototype.name = "vfrank";
    VFrank.prototype.age = 29;
    VFrank.prototype.job = "Web Engineer";

    var person = new VFrank();

    console.log(VFrank.prototype.isPrototypeOf(person));// true

```


##  Object.getPrototypeOf()

- Object.getPrototypeOf(obj)

- 返回指定对象的原型（内部[[Prototype]]属性的值）

```javascript

    function VFrank() {}
    VFrank.prototype.name = "vfrank";
    VFrank.prototype.age = 29;
    VFrank.prototype.job = "Web Engineer";

    var person = new VFrank();

    console.log(Object.getPrototypeOf(person));
    // {name: "vfrank", age: 29, job: "Web Engineer"}

```


## hasOwnProperty()

- obj.hasOwnProperty(prop) 

- obj对象自身属性中是否具有prop的属性

```javascript

    function VFrank() {}
    VFrank.prototype.name = "vfrank";
    VFrank.prototype.age = 29;
    VFrank.prototype.job = "Web Engineer";

    var person = new VFrank();

    console.log(person.name); //"vfrank"  来自原型链
    console.log(person.hasOwnProperty("name")); //false 

    person.name = "GongGe";
    console.log(person.name); //"GongGe"——来自实例
    console.log(person.hasOwnProperty("name")); //true 

    delete person.name;
    console.log(person.name); //"vfrank"——来自原型
    console.log(person.hasOwnProperty("name")); //false

```


## in 操作符

```javascript

    function VFrank() {}
    VFrank.prototype.name = "vfrank";
    VFrank.prototype.age = 29;
    VFrank.prototype.job = "Web Engineer";

    var person = new VFrank();

    console.log(person.name); //"vfrank" ——来自实例
    console.log(person.hasOwnProperty("name")); //false 
    console.log("name" in person); //true 

    person.name = "GongGe";
    console.log(person.name); //"GongGe" ——来自实例
    console.log(person.hasOwnProperty("name")); //true 
    console.log("name" in person); //true 

    delete person.name;
    console.log(person.name); //"vfrank" ——来自原型
    console.log(person.hasOwnProperty("name")); //false 
    console.log("name" in person); //true

```

- 同时使用 hasOwnProperty()方法和 in 操作符，就可以确定该属性到底是存在于对象中，还是存在于原型中

- IE 早期版本的实现中存在一个 bug，即屏蔽不可枚举属性的实例属性不会出现在 for-in 循环中

```javascript

    var obj = {
        toString: function() {
            return "Hellp VFrank";
        }
    };
    for (var prop in obj) {
        if (prop == "toString") {
            console.log("Found toString Hellp VFrank"); //在 IE 中不会显示（书上写的）
           // 真实测试IE11 edge中还是会有，使用仿真的也会出来，需要用真实版IE低版本测试下
        }
    }

```


## getOwnPropertyNames()

- Object.getOwnPropertyNames(obj)

- 返回一个由指定对象的所有自身属性的属性名（**包括不可枚举属性**但不包括Symbol值作为名称的属性）组成的数组。(Object.keys()是列举可枚举属性)

-  数组中枚举属性的顺序与通过 for...in 循环（或 Object.keys）迭代该对象属性时一致。数组中不可枚举属性的顺序未定义。

```javascript

    function VFrank() {}
    VFrank.prototype.name = "vfrank";
    VFrank.prototype.age = 29;
    VFrank.prototype.job = "Web Engineer";

    var person = new VFrank();

    console.log(Object.getOwnPropertyNames(VFrank.prototype)); // ["constructor", "name", "age", "job"]
    console.log(Object.keys(VFrank.prototype)); //  ["name", "age", "job"]

```