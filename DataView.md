# DataView 是什么？

- 是一种能够使用自定义模板显示数据的组件。继承自Boxcomponent，相比之下多了几个内置事件( "click", "mouseenter","mouseleave","dblclick")。 

# 如何实现？

- initcomponent阶段添加事件("click","mouseenter","mouseleave","dblclick","selectionchange","beforeselect" 等);

- onRender阶段 继承父级创建一个div

- afterRender阶段 在el上面绑定，click，dbclick等事件，即绑定在最大父元素上面，相应的事件函数构造事件对象，比如点击对象的下标，点击的某个item，并fireEvent对应事件。最后会调用bindStore()方法，为store绑定事件，数据变化的时候触发模板的重渲染（调用的是refresh方法）
