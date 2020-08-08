// 找出未配置的策略字段

let policy = {
    "ips": 0,
    "waf": 0,
    "pvs": 1
};
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


