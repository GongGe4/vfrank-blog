# ComboBox 是什么？

- 下拉框，支持自动完成，远程加载，分页和许多其他功能。 

# 如何实现？

- initcomponent阶段添加事件("expand","collapse","select");

- onRender阶段 调用initList方法

- initList方法中会创建一个layer组件，挂在body下,再实例化一个dataView在layer中，

- 监听expend事件，触发的时候将layer展示出来

# 常用方法

- getValue，setValue， clearValue

- expend，collapse事件，