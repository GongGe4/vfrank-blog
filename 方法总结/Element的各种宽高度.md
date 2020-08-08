# Element的各种宽高度(摘自MDN)

|属性| 含义|
|:---|:---|
clientWidth | 表示元素的内部宽度，以像素计。该属性**包括内边距**，但**不包括垂直滚动条（如果有）、边框和外边距**。
clientHeight | 只读属性，对于**没有定义CSS或者内联布局盒子的元素为0**，否则，它是元素内部的高度(单位像素)，**包含内边距，但不包括水平滚动条、边框和外边距**。
clientTop | 一个元素**顶部边框的宽度**（以像素表示）。不包括顶部外边距或内边距。clientTop 是只读的。
clientLeft | 表示一个元素的左边框的宽度，以像素表示。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。clientLeft **不包括左外边距和左内边距**。

![Clientwidth](https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png)


|属性| 含义|
|:---|:---|
offsetParent |返回一个指向最近的（closest，指包含层级上的最近）包含该元素的定位元素。如果没有定位的元素，则 offsetParent 为最近的 table, table cell 或根元素（标准模式下为 html；quirks 模式下为 body）。当元素的 style.display 设置为 "none" 时，offsetParent 返回 null。offsetParent 很有用，因为 offsetTop 和 offsetLeft 都是相对于其内边距边界的。
offsetTop | 它返回当前元素相对于其 offsetParent 元素的顶部的距离。
offsetLeft | 返回当前元素左上角相对于 offsetParent 节点的左边界偏移的像素值。
offsetWidth | 只读属性，返回一个元素的布局宽度。一个典型的offsetWidth是测量**包含元素的边框(border)、水平线上的内边距(padding)、竖直方向滚动条(scrollbar)（如果存在的话）、以及CSS设置的宽度(width)的值**。
offsetHeight | 只读属性，它返回该元素的像素高度，高度**包含该元素的垂直内边距和边框，且是一个整数**。通常，元素的offsetHeight是一种元素CSS高度的衡量标准，**包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:before或:after等伪类元素的高度**。

- offsetParent在 Webkit 中，如果元素为隐藏的（该元素或其祖先元素的 style.display 为 "none"），或者该元素的 style.position 被设为 "fixed"，则该属性返回 null。

- offsetParent在IE9中，如果该元素的 style.position 被设置为 "fixed"，则该属性返回 null。（display:none 无影响。）

![offset](https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png)


|属性| 含义|
|:---|:---|
scrollTop | scrollTop 属性**可以获取或设置**一个元素的内容垂直滚动的像素数。一个元素的 scrollTop 值是这个元素的顶部到它的最顶部可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。
scrollLeft | scrollLeft 属性可以读取或设置元素滚动条到元素左边的距离。注意如果这个元素的内容排列方向（direction） 是rtl (right-to-left) ，那么滚动条会位于最右侧（内容开始处），并且scrollLeft值为0。此时，当你从右到左拖动滚动条时，scrollLeft会从0变为负数（这个特性在chrome浏览器中不存在）。
scrollWidth | 只读属性，表示元素内容的宽度，**包括由于滚动而未显示在屏幕中内容**.scrollWidth值等于元素在不使用水平滚动条的情况下适合视口中的所有内容所需的最小宽度。 宽度的测量方式与clientWidth相同：它包含元素的内边距，但不包括边框，外边距或垂直滚动条（如果存在）。 它还可以包括伪元素的宽度，例如::before或::after。 如果元素的内容可以适合而不需要水平滚动条，则其scrollWidth等于clientWidth
scrollHeight |只读属性是一个元素内容高度的度量，**包括由于溢出导致的视图中不可见内容。**scrollHeight 的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。 没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值clientHeight相同。**包括元素的padding，但不包括元素的border和margin**。**scrollHeight也包括 ::before 和 ::after这样的伪元素。**

![scrollTop](https://developer.mozilla.org/@api/deki/files/842/=ScrollTop.png) ![scrollHeight](https://developer.mozilla.org/@api/deki/files/840/=ScrollHeight.png)