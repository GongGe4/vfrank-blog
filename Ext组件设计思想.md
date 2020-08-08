　
# 第一阶段：初始化 creation
　　
> 包括初始配置设定、事件注册、预渲染处理等。

- 1、应用组件的配置： // Ext.apply(this, config)

- 2、注册事件: (click, mouseover等)

- 3、在ComponentMgr注册组件实例: 生成唯一ID值，供Ext.Cmp()方法来获得该实例的引用。

- 4、调用initComponent()方法：继承了Ext.Component基类的组件中，通常使用的时候会覆盖父类的initComponent()方法。可以使用this.callParent()来回调父类函数。

- 5、加载插件和组件渲染：　　　　

# 第二阶段：组件呈现 rendering

> 创建页面dom元素

- 1、触发beforerender事件：组件被render渲染前被调用的。用以提供处理函数或者阻止组件的继续渲染。

- 2、调用onReader方法：组件一个比较重要的方法，在子类组件中可以根据需要重写覆盖。通过superclass.onRender 来调用父类的 onRender 方法。

- 3、触发render事件:通知组件已经被成功的呈现了。 

- 、调用 afterRender :根据逻辑需要可以重新实现或覆盖该方法。可以通过调 superclass.afterRender.来调用父类的方法。

# 第三阶段：销毁　　

- 1、触发事件 beforedestroy  　　　　

- 2、调用 beforeDestroy 方法 　　　　
　
- 3、移除事件监听者 ：移除元素的事件监听列表，然后将元素从 DOM中移除。 

- 4、onDestroy 被调用 

- 5、组件实例从 ComponentMgr 中反注册 ：不可以再通过 Ext.getCmp 获取到对象实例。 

- 6、触发destroy 事件

　　　　组件可以独立于元素，自己拥有事件代理，如果存在则移除它们。
```javascript
    Ext.Component = function(config) {

        this.initialConfig = config;
        Ext.apply(this, config);

        this.addEvents();

        this.getId();
        Ext.ComponentMgr.register(this);
        Ext.Component.superclass.constructor.call(this);

        this.initComponent();

        if (this.plugins) {
            this.plugins = this.initPlugin(this.plugins);
        }

        this.render(this.renderTo);

        // render: function(container, position) {
        //     this.fireEvent('beforerender', this)

        //     this.onRender(this.container, position || null);
        //     this.fireEvent('render', this);

        //     this.afterRender(this.container);
        //     this.fireEvent('afterrender', this);
        //     return this;
        // },

        // destroy: function() {
        //     this.fireEvent('beforedestroy', this)

        //     this.beforeDestroy();
        //     this.ownerCt.remove(this, false);

        //     this.container.remove();

        //     this.onDestroy();
        //     Ext.ComponentMgr.unregister(this);

        //     this.fireEvent('destroy', this);
        //     this.isDestroyed = true;
        // }
    };

```