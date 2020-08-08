# flex布局

## 容器属性配置

|参数| 含义| 可选值
|:---|:---|:---|
flex-direction | 决定**主轴**的方向（即项目的排列方向）| row、row-reverse、column、column-reverse
flex-wrap      | 定义如果一条**主轴线**排不下，如何换行 | nowrap、wrap、wrap-reverse
flex-flow      | flex-direction属性和flex-wrap属性的简写形式 | 语法：flex-flow: <flex-direction> <flex-wrap>
justify-content| 定义了项目在**主轴**上的对齐方式 | flex-start、flex-end、center、space-between、space-around
align-items    | 定义项目在**交叉轴**上如何对齐 | flex-start、flex-end、center、baseline、stretch
align-content  | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 | flex-start、flex-end、center、space-between、space-around、stretch

> justify-content属性注意

```css
    .vfrank {
        justify-content: flex-start | flex-end | center | space-between | space-around;
    }
    /* 
    - flex-start（默认值）：左对齐
    - flex-end：右对齐
    - center： 居中
    - space-between：两端对齐，项目之间的间隔都相等。
    - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 
    */

```


> align-items属性注意

```css 

    .vfrank {
        align-items: flex-start | flex-end | center | baseline | stretch;
    }
    /* 
    - flex-start：交叉轴的起点对齐。
    - flex-end：交叉轴的终点对齐。
    - center：交叉轴的中点对齐。
    - baseline: 项目的第一行文字的基线对齐。
    - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
     */

```



## 子元素配置

|参数| 含义| 可选值
|:---|:---|:---|
order     | 定义项目的排列顺序。数值越小，排列越靠前 | 数字（默认为0）
flex-grow | 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大（可以控制元素占父容器剩余空间大小） | 数字（默认为0）
flex-shrink | 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小，**负值对该属性无效** | 数字（默认为1）
flex-basis | 定义了在分配多余空间之前，项目占据的**主轴**空间 | 默认值为auto， 可以设置width一样的值（eg: 50px）
flex | flex-grow, flex-shrink 和 flex-basis的简写 | 默认值为0 1 auto
align-self | 允许单个项目有与其他项目不一样的对齐方式**覆盖align-items属性** | 默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。auto、flex-start、flex-end、center、baseline、stretch


>  flex-grow属性

- 控制子元素占父元素剩余空间多少，假设只有一个元素，设置 flex-grow 为 1 的话，可以占满父元素**主轴**

- 如果一个子元素的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

## 深入学习地址

- 张鑫旭[https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/]

- 阮一峰[http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html]