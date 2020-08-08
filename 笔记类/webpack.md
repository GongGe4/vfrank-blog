## 全局安装并且配置过 json 文件后，想进行本地安装，输入命令行 npm i webpack --save-dev 后,Refusing to install package with name "webpack" under a package

- 找到目录下 package.json 文件，将文件中 "name": "webpack" 改为其他名字即可

## The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.

- webpack4 的打包已经不能用 webpack 文件a 文件b 的方式 使用（webpack --mode production）