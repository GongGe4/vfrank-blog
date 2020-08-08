# 深入浅出webpack

> `配置含义`

|配置        | 含义 |
|:---       |   :---          |
Entry       |   配置模块的入口
Output      |   配置如何输出最终想要的代码
Module      |   配置处理模块的规则
Resolve     |   配置寻找模块的规则
Plugins     |   配置扩展插件
DevServer   |   配置 DevServer

## `entry`

- Entry 类型 （Entry 类型可以是以下三种中的一种或者相互组合：）

|类型	|例子  |含义|
|:---   |:--- |:--- |
string  | './app/entry'   | 入口模块的文件路径，可以是相对路径。
array   | ['./app/entry1', './app/entry2']    | 入口模块的文件路径，可以是相对路径。
object  | { a: './app/entry-a', b: ['./app/entry-b1', './app/entry-b2']}  | 配置多个入口，每个入口生成一个 Chunk


## `output`

> `filename`

- output.filename 配置输出文件的名称，为string 类型。 如果只有一个输出文件，则可以把它写成静态不变的：

- 内置变量

|变量名	|含义 |
|:---       |   :---          |
id      |Chunk 的唯一标识，从0开始
name    |Chunk 的名称
hash    |Chunk 的唯一标识的 Hash 值
chunkhash    |Chunk 内容的 Hash 值

- 其中 hash 和 chunkhash 的长度是可指定的，[hash:8] 代表取8位 Hash 值，默认是20位。

```javascript
    // eg
     filename: '[name]_[hash].css'
```
> `chunkFilename`

- output.chunkFilename 配置无入口的 Chunk 在输出时的文件名称。 chunkFilename 和上面的 filename 非常类似，但 chunkFilename 只用于指定在运行过程中生成的 Chunk 在输出时的文件名称。 

> `path`

- output.path 配置输出文件存放在本地的目录，必须是 string 类型的绝对路径。通常通过 Node.js 的 path 模块去获取绝对路径：

```javascript
    // eg
     path: path.resolve(__dirname, 'dist_[hash]')
```

> `crossOriginLoading`

- output.crossOriginLoading 则是用于配置这个异步插入的标签的 crossorigin 值。

- script 标签的 crossorigin 属性可以取以下值：
1. anonymous(默认) 在加载此脚本资源时不会带上用户的 Cookies；
2. use-credentials 在加载此脚本资源时会带上用户的 Cookies。

> `libraryTarget 和 library`

- 当用 Webpack 去构建一个可以被其他模块导入使用的库时需要用到它们。
1. output.libraryTarget 配置以何种方式导出库。
2. output.library 配置导出库的名称。

- output.libraryTarget 是字符串的枚举类型，支持以下配置。

|变量名	|含义 |
|:---       |   :---          |
var(默认)   | 编写的库将通过 var 被赋值给通过 library 指定名称的变量。
commonjs    | 编写的库将通过 CommonJS 规范导出。
commonjs2   | 编写的库将通过 CommonJS2 规范导出，输出和使用的代码如下：
this        | 编写的库将通过 this 被赋值给通过 library 指定的名称
global      | 编写的库将通过 global 被赋值给通过 library 指定的名称，即把库挂载到 global 上


## `Module`

- module 配置如何处理模块。

> `rules`

- 配置模块的读取和解析规则，通常用来配置 Loader。其类型是一个数组，数组里每一项都描述了如何去处理部分文件。 配置一项 rules 时大致通过以下方式：
1. 条件匹配：通过 test、include、exclude 三个配置项来命中 Loader 要应用规则的文件。
2. 应用规则：对选中后的文件通过 use 配置项来应用 Loader，可以只应用一个 Loader 或者按照从后往前的顺序应用一组 Loader，同时还可以分别给 Loader 传入参数。
3. 重置顺序：一组 Loader 的执行顺序默认是从右到左执行，通过 enforce 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。


```javascript
module: {
    rules: [{
        // 命中 JavaScript 文件
        test: /\.js$/,
        // 用 babel-loader 转换 JavaScript 文件
        // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        use: ['babel-loader?cacheDirectory'],
        // 只命中src目录里的js文件，加快 Webpack 搜索速度
        include: path.resolve(__dirname, 'src')
    }, {
        // 命中 SCSS 文件
        test: /\.scss$/,
        // 使用一组 Loader 去处理 SCSS 文件。
        // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // 排除 node_modules 目录下的文件
        exclude: path.resolve(__dirname, 'node_modules'),
    }, {
        // 对非文本文件采用 file-loader 加载
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        use: ['file-loader'],
    }, ]
}
```

> `noParse`

- noParse 配置项可以让 Webpack 忽略对部分没采用模块化的文件的递归解析和处理，这样做的好处是能提高构建性能。 原因是一些库例如 jQuery 、ChartJS 它们庞大又没有采用模块化标准，让 Webpack 去解析这些文件耗时又没有意义。

- **注意被忽略掉的文件里不应该包含 import 、 require 、 define 等模块化语句，不然会导致构建出的代码中包含无法在浏览器环境下执行的模块化语句。**

> `parser`

-  因为 Webpack 是以模块化的 JavaScript 文件为入口，所以内置了对模块化 JavaScript 的解析功能，支持 AMD、CommonJS、SystemJS、ES6。 parser 属性可以更细粒度的配置哪些模块语法要解析哪些不解析，和 noParse 配置项的区别在于 parser 可以精确到语法层面， 而 noParse 只能控制哪些文件不被解析。 parser 使用如下：

```javascript
module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        parser: {
            amd: false, // 禁用 AMD
            commonjs: false, // 禁用 CommonJS
            system: false, // 禁用 SystemJS
            harmony: false, // 禁用 ES6 import/export
            requireInclude: false, // 禁用 require.include
            requireEnsure: false, // 禁用 require.ensure
            requireContext: false, // 禁用 require.context
            browserify: false, // 禁用 browserify
            requireJs: false, // 禁用 requirejs
        }
    }]
}
```

## `Resolve`

- Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块，Resolve 配置 Webpack 如何寻找模块所对应的文件。 

|Resolve配置项	|作用 |
|:---       |   :---          |
alias       | resolve.alias 配置项通过别名来把原导入路径映射成一个新的导入路径
mainFields  | Webpack 会根据 mainFields 的配置去决定优先采用那份代码，mainFields 默认为['browser', 'main']
extensions  | Webpack 会自动带上后缀后去尝试访问文件是否存在。 resolve.extensions 用于配置在尝试过程中用到的后缀列表，默认是：['.js', '.json']
modules     | resolve.modules配置 Webpack 去哪些目录下寻找第三方模块，默认是只会去 node_modules 目录下寻找
descriptionFiles        | resolve.descriptionFiles 配置描述第三方模块的文件名称，也就是 package.json 文件
enforceExtension        | resolve.enforceExtension 如果配置为 true 所有导入语句都必须要带文件后缀，
enforceModuleExtension  | enforceModuleExtension 和 enforceExtension 作用类似，但 enforceModuleExtension 只对 node_modules 下的模块生效。


## `Plugin`

- Plugin 用于扩展 Webpack 功能，各种各样的 Plugin 几乎让 Webpack 可以做任何构建相关的事情。

- plugins 配置项接受一个数组，数组里每一项都是一个要使用的 Plugin 的实例，Plugin 需要的参数通过构造函数传入。


## `devServer`

-  要配置 DevServer ，除了在配置文件里通过 devServer 传入参数外，还可以通过命令行参数传入。 注意只有在通过 DevServer 去启动 Webpack 时配置文件里 devServer 才会生效，因为这些参数所对应的功能都是 DevServer 提供的，Webpack 本身并不认识 devServer 配置项。

|devServer配置项	|作用 |
|:---       |   :---          |
hot         |   devServer.hot 配置是否启用 使用DevServer 中的模块热替换功能
inline      |   devServer.inline 用于配置是否自动注入这个代理客户端到将运行在页面里的 Chunk 里去，默认是会自动注入。
historyApiFallback  |   devServer.historyApiFallback 控制返回的路由，用于方便的开发使用了 HTML5 History API 的单页应用
contentBase         |   devServer.contentBase 配置 DevServer HTTP 服务器的文件根目录。
headers             |   devServer.headers 配置项可以在 HTTP 响应中注入一些 HTTP 响应头
host                |   devServer.host 配置项用于配置 DevServer 服务监听的地址。
port                |   devServer.port 配置项用于配置 DevServer 服务监听的端口，默认使用 8080 端口
allowedHosts        |   devServer.allowedHosts 配置一个白名单列表，只有 HTTP 请求的 HOST 在列表里才正常返回。
disableHostCheck    |   devServer.disableHostCheck 配置项用于配置是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查。 DevServer 默认只接受来自本地的请求，关闭后可以接受来自任何 HOST 的请求。
https               |   DevServer 默认使用 HTTP 协议服务，它也能通过 HTTPS 协议服务。
clientLogLevel      |   devServer.clientLogLevel 配置在客户端的日志等级，这会影响到你在浏览器开发者工具控制台里看到的日志内容。 clientLogLevel 是枚举类型，可取如下之一的值 none、error、warning、info。 默认为 info 级别
compress            |   devServer.compress 配置是否启用 gzip 压缩。boolean 为类型，默认为 false。
open                |   devServer.open 用于在 DevServer 启动且第一次构建完时自动用你系统上默认的浏览器去打开要开发的网页。 同时还提供 devServer.openPage 配置项用于打开指定 URL 的网页。

## 其他配置

> devtool

```javascript

/**
 * devtool 配置 Webpack 如何生成 Source Map，默认值是 false 即不生成 Source Map，
 * 想为构建出的代码生成 Source Map 以方便调试，可以这样配置：
 */
module.export = {
    devtool: 'source-map'
}
module.export = {
  devtool: 'source-map'
}

```

> Watch 和 WatchOptions

- 支持监听文件更新，在文件发生变化时重新编译。在使用 Webpack 时监听模式默认是关闭的，想打开需要如下配置：

```javascript
module.export = {
    watch: true
}

//   在使用 DevServer 时，监听模式默认是开启的。
//   除此之外，Webpack 还提供了 watchOptions 配置项去更灵活的控制监听模式，使用如下：

module.export = {
    // 只有在开启监听模式时，watchOptions 才有意义
    // 默认为 false，也就是不开启
    watch: true,
    // 监听模式运行时的参数
    // 在开启监听模式时，才有意义
    watchOptions: {
        // 不监听的文件或文件夹，支持正则匹配
        // 默认为空
        ignored: /node_modules/,
        // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
        // 默认为 300ms  
        aggregateTimeout: 300,
        // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
        // 默认每隔1000毫秒询问一次
        poll: 1000
    }
}

```

> Externals

- Externals 用来告诉 Webpack 要构建的代码中使用了哪些不用被打包的模块，也就是说这些模版是外部环境提供的，Webpack 在打包时可以忽略它们。

