# JavaScript常用数组操作方法。

## concat()

> concat() 方法用于连接两个或多个数组，返回被连接数组的一个副本。

- 不改变原数组。

```javascript
    let arr1 = [2, 3, 4],
        arr2 = [4, 5, 6];

    let arr3 = arr1.concat(arr2);
    console.log(arr3);
    // [ 2, 3, 4, 4, 5, 6 ]
```

## join()

> join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的，默认使用','号分割。

- 不改变原数组。

```javascript
    let arr1 = [10, 20, 30];

    console.log(arr1.join()); // 10,20,30
    console.log(arr1); // [ 10, 20, 30 ]
```

## push()

> push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。末尾添加，返回的是长度，会改变原数组。

- 改变原数组。

- 返回值为新的长度

- 可以添加多个元素

```javascript
    let arr1 = [10, 20, 30];

    console.log(arr1.push(50)); // 4
    console.log(arr1); // [ 10, 20, 30, 50 ]
    arr1.push(60, 70)
    console.log(arr1); // [ 10, 20, 30, 50, 60, 70 ]
```

## pop()

> pop() 方法用于删除并返回数组的最后一个元素。返回最后一个元素，会改变原数组。

- 改变原数组。

- 返回值为最后一个元素（被删除的那个元素）

```javascript
    let arr1 = [10, 20, 30];

    console.log(arr1.pop()); // 30
    console.log(arr1); // [ 10, 20 ]
```

## shift()

> shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。返回第一个元素，改变原数组。

- 改变原数组。

- 返回值为第一个元素（被删除的那个元素）

```javascript
    let arr1 = [10, 20, 30];

    console.log(arr1.shift()); // 10
    console.log(arr1); // [ 20, 30 ]
```

## unshift()

> unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。返回新长度，改变原数组。

- 改变原数组。

- 返回值为新的长度

- 可以添加多个元素

```javascript
    let arr1 = [10, 20, 30];

    console.log(arr1.unshift(50)); // 4
    console.log(arr1); // [ 50, 10, 20, 30 ]

    arr1.unshift(60, 70);
    console.log(arr1); //[ 60, 70, 50, 10, 20, 30 ]
```

## slice(start, end)

> 返回一个新的数组，包含从 start 到 end （不包括该元素）的元素。返回选定的元素，该方法不会修改原数组。

- 不改变原数组。

- 返回值为选定的元素（含前不含后）。

```javascript
    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.slice(1, 3)); // [ 20, 30 ]
    console.log(arr1); // [ 10, 20, 30, 40, 50, 60 ]
```

## splice(start, deleteCount, item1, item2)

> splice() 方法可删除从 start 处开始的零个或 deleteCount 个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从数组中删除了元素，则返回的是含有被删除的元素的数组。splice() 方法会直接对数组进行修改。

- start: 指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

- deleteCount: 如果 deleteCount 是 0或者负数，则不移除元素。这种情况下，至少应添加一个新元素。如果 deleteCount 大于start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。如果deleteCount被省略，则其相当于(arr.length - start)。

- item: 要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。

- 改变原数组

- 返回值为删除了的元素组成的数组，若没有返回空数组。

```javascript

    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.splice(1, 1)); // [ 20 ]
    console.log(arr1); // [ 10, 30, 40, 50, 60 ]

    console.log(arr1.splice(1, 0, 'append')); // []
    console.log(arr1); // [ 10, 'append', 30, 40, 50, 60 ]

    console.log(arr1.splice(1, 2, 'append1', 'append2')); // []
    console.log(arr1); // [ 10, 'append1', 'append2', 40, 50, 60 ]
```

## sort(compare)

> 按照 Unicode code 位置排序，默认升序

- compare(a,b) (可选)用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。如果返回值大于0，则b会排到a的前面

- 改变原数组

- 返回值为排序后的数组

```javascript
    let arr1 = [40, 20, 50, 10, 30];
    console.log(arr1.sort((a, b) => { return a - b; }));// [ 10, 20, 30, 40, 50 ]
    console.log(arr1);// [ 10, 20, 30, 40, 50 ]

    let strArr = ['a', 'c', 'e', 'b', 'd'];
    console.log(strArr.sort()); // [ 'a', 'b', 'c', 'd', 'e' ]
    console.log(strArr); // [ 'a', 'b', 'c', 'd', 'e' ]
```

## reverse()

> reverse() 方法用于颠倒数组中元素的顺序。返回的是颠倒后的数组，会改变原数组。

- 改变原数组

- 返回值为颠倒后的数组

```javascript
    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.reverse()); // [ 60, 50, 40, 30, 20, 10 ]
    console.log(arr1); // [ 60, 50, 40, 30, 20, 10 ]
```

## indexOf() 和 lastIndexOf()

> 接受两个参数：查找的值、查找起始位置。不存在，返回 -1 ；存在，返回位置。indexOf 是从前往后查找， lastIndexOf 是从后往前查找。

- 不改变原数组

- 返回值：不存在返回 -1 ，存在返回位置下标

```javascript
    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.indexOf(20)); // 1
    console.log(arr1.lastIndexOf(20)); // 1
    console.log(arr1); // [ 10, 20, 30, 40, 50, 60 ]

    console.log(arr1.indexOf(20, 2)); // -1
    console.log(arr1.lastIndexOf(40, 2)); // -1
```


# 遍历数组的方法

- 都接收三个参数 currentValue：数组中正在处理的元素。index：数组中正在处理的元素的索引值。array：被调用的数组。

## some()

> 对数组的每一项都运行给定的函数，任意一项返回 ture,则返回 true。

- 不改变原数组

```javascript
    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.some((value) => {
        return value > 30;
    })); // true
    console.log(arr1); // [ 10, 20, 30, 40, 50, 60 ]
    console.log(arr1.some((value) => {
        return value > 70;
    })); // false
```

## every()

> 对数组的每一项都运行给定的函数，每一项都返回 ture,则返回 true

- 不改变原数组

```javascript
    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.every((value) => {
        return value > 1;
    })); // true
    console.log(arr1); // [ 10, 20, 30, 40, 50, 60 ]
    console.log(arr1.every((value) => {
        return value > 40;
    })); // false

```

## filter()

> 对数组的每一项都运行给定的函数，返回 结果为 ture 的项组成的数组

- 不改变原数组

- 返回值为数组

```javascript

    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.filter((value) => {
        return value > 40;
    })); // [ 50, 60 ]
    console.log(arr1); // [ 10, 20, 30, 40, 50, 60 ]

```

## find()

> 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索。

- ES6新增

- 不改变原数组

- 返回值为数组中符合条件的第一个元素

```javascript
    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.find((value) => {
        return value > 40;
    })); // 50
    console.log(arr1); // [ 10, 20, 30, 40, 50, 60 ]

```

## findIndex()

> 找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索。

- ES6新增

- 不改变原数组

- 返回值为数组中符合条件的第一个元素的下标

```javascript

    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.findIndex((value) => {
        return value > 40;
    })); // 4
    console.log(arr1); // [ 10, 20, 30, 40, 50, 60 ]
```

## fill(value, start, end)

> 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

- ES6新增

- 改变原数组

- 返回值为改变后的新数组

```javascript

    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.fill(99, 2, 4)); // [ 10, 20, 99, 99, 50, 60 ]
    console.log(arr1); // [ 10, 20, 99, 99, 50, 60 ]

```

## includes()

> 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

- ES6 新增语法

- 不改变原数组

- 返回值为布尔值

- 可以替换 ES5的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误。

```javascript

let arr1 = [10, 20, 30, 40, 50, 60];

console.log(arr1.includes(30)); // true
console.log(arr1.includes(55)); // false
console.log(arr1); // [ 10, 20, 99, 99, 50, 60 ]

```
```javascript
    let arr1 = [10, 20, 30, 40, 50, 60, NaN];

    console.log(arr1.includes(NaN)); // true
    console.log(arr1.indexOf(NaN)); // -1
    console.log(arr1); // [ 10, 20, 99, 99, 50, 60 ]
```

## reduce(callback(Accumulator, currentValue, index, arr), initialValue)

> 对累计器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。

- 不改变原数组

- 返回值为函数累计处理的结果

- 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。如果数组为空且没有提供initialValue，会抛出TypeError 。


```javascript
    // 求和
    let arr1 = [10, 20, 30, 40, 50, 60];

    console.log(arr1.reduce((calculate, value) => {
        return calculate += value;
    }, 0)); // 210
    console.log(arr1); // [ 10, 20, 99, 99, 50, 60 ]

```

```javascript
    // 二维数组转一维数组
    let arr1 = [[10, 20], [30, 40],[50, 60]];

    console.log(arr1.reduce((calculate, value) => {
        return calculate.concat(value);
    }, [])); // [ 10, 20, 30, 40, 50, 60 ]
    console.log(arr1); // [ [ 10, 20 ], [ 30, 40 ], [ 50, 60 ] ]

```

# 遍历方式对比


```javascript

    // 找出未配置的策略字段
    let policy = {"ips": 0,"waf": 0,"pvs": 1};
    
    let filterArr = Object.keys(policy).filter((key) => {
        return policy[key] === 0;
    });
    /*****************对比forEach************/
    // let filterArr = [];
    // Object.keys(policy).forEach((key) => {
    //     if (policy[key] === 0) {
    //         filterArr.push(key);
    //     }
    // });
    console.log(filterArr); // [ 'ips', 'waf' ]

    /***********************************分割线**********************************************/

    const TEXT_TYPE = {
        ips: '未配置漏洞攻击防护策略',
        waf: '未配置WEB应用防护策略',
        pvs: '未配置实时漏洞分析策略'
    };

    // 找出未配置策略对应的文案信息
    let mapArr = filterArr.map((key) => {
        return TEXT_TYPE[key];
    });
    /*****************对比forEach************/
    // let mapArr = [];
    // filterArr.forEach((key) => {
    //     mapArr.push(TEXT_TYPE[key]);
    // });

    console.log(mapArr); // [ '未配置漏洞攻击防护策略', '未配置WEB应用防护策略' ]

    /***********************************分割线**********************************************/

    // 判定是否是立体防护完备
    let someBoolean = Object.keys(policy).some((key) => {
        return policy[key] === 0;
    });

    /*****************对比forEach************/
    // let someBoolean = false;
    // Object.keys(policy).forEach((key) => {
    //     if (policy[key] === 0) {
    //         someBoolean = true;
    //         return false;
    //     }
    // });
    console.log(someBoolean); // true

    /***********************************分割线**********************************************/

    // 判定是否是立体防护完备
    let everyBoolean = Object.keys(policy).every((key) => {
        return policy[key] > 0;
    });
    console.log(everyBoolean); // false

    /***********************************分割线**********************************************/

```

