# Array的reduce

- reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。

- reduce为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：

> accumulator 累加器
> currentValue 当前值
> currentIndex 当前索引
> array 数组

- 回调函数第一次执行时，**accumulator 和currentValue的取值有两种情况**：如果调用reduce()时**提供了initialValue，accumulator取值为initialValue**，currentValue取数组中的第一个值；**如果没有提供 initialValue，那么accumulator取数组中的第一个值**，currentValue取数组中的第二个值。

```javascript

    // 求和
   var total = [0, 1, 2, 3].reduce(
        (acc, cur) => acc + cur,
        0
    );
    // sum is 6

 ```

 ```javascript

    // 将二维数组转化为一维
  var arr = [
        [0, 1],
        [2, 3],
        [4, 5]
    ].reduce(
        (acc, cur) => acc.concat(cur),
         []
    );
    // arr is [0, 1, 2, 3, 4, 5]

 ```

  ```javascript

  // 计算数组中每个元素出现的次数
    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
    var count = names.reduce(function(allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        } else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});
    console.log(count);

    // count is:
    // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

 ```

   ```javascript

   // 数组去重
    let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
    let result = arr.sort().reduce((init, current) => {
        if (init.length === 0 || init[init.length - 1] !== current) {
            init.push(current);
        }
        return init;
    }, []);

    //[1,2,3,4,5]

 ```

 
   ```javascript

    //对象取值

  let getValue = (source, target) => {
        let reg = /{{([^}]+)}}/g;
        return reg.exec(target)[1].split('.').reduce((pre, next) => {
            return pre[next];
        }, source);
    };

    let test = {
        author: 'Somebody',
        title: 'Title of article',
        category: {
            ngCached: true,
            ngxCachedTime: 1536311340,
            title: 'frontend'
        },
        user: {
            isAuthor: false,
            role: 'guest',
            community: {
                uid: 19499773,
                updateAt: '2018-09-05T02:27:13.630Z'
            }
        }
    };

    let uid = '{{ user.community.uid }}';

    let date = getValue(test, uid);

    console.log(uid); // 19499773

 ```