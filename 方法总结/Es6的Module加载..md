# ES6 模块加载

## export，import的语法

```javascript   

    let module1 = 'GongGe4',
        module2 = 'VFrank',
        module3 = 'No Bugs';


    //  原名输出
    export {
        module1,
        module2,
        module3
    };

    // 改名输出
    export {
        v1 as module1,
        v2 as module2,
        v3 as module3
    };

    // 对应的引入方式
    import { module1, module2, module3} from './vfrank.js';

    // 改名引入方式
    import { module1 as vfrank } from './vfrank.js';

    // 直接全部引入
    import * as vfrank from './vfrank.js';

```

> 需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。(其他脚本可以通过这个接口，取到值1。它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。)

```javascript   

    // 两种报错，因为没有提供对外的接口，直接输出。
    export 2018;

    let MX = 'Can not forget';
    export MX;

```

```javascript   

    // 三种正确写法
    export let  MX = 2018;

    let  MX = 2018;
    export {MX };

    let MX = 1;
    export { name as MX };

```


## export default 、import的语法

```javascript   

    export default function() {
        console.log('Whatever you like');
    }

    // 可以随意取名引入
    import gongge from './vfrank.js';
    import vfrank from './vfrank.js';
```


## 跨模块变量使用

- 使用模块引入的方式，可以很好地实现深层组件传值，类似于观察者设计模式

```javascript   

    let commonData = {};

    function setJsonValue(jaon = {}) {
        commonData = json;
    }

    function getJsonValue() {
        return commonData;
    }

    export default {
        setJsonValue,
        getJsonValue
    }   
    // 不同模块之间引用这个模块文件的时候，能够共享得到这个commonData，一个模块修改之后，另外一个模块同时也能够拿到这个修改值
```

> 经典案例，全局生成唯一id

```javascript

    let baseID = 0;

    export default function(prefix){
        return (prefix ? prefix : 'vfrank-') + baseID++
    }
```