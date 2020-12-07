module.exports = { // 这里只列一部分，具体配置参考文档
                   // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上,例如 https://www.my-app.com/.
                   // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/", // 部署生产环境和开发环境下的URL
    outputDir: "dist", // npm run build或 yarn build时，生成文件的目录名称,要和baseUrl的生产环境路径一致
    assetsDir: "assets", // 用于放置生成的静态资源 (js、css、img、fonts)
    // indexPath: "", // 指定生成的 index.html 的输出路径
    filenameHashing: false, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    // pages: {
    //   index: {
    //     entry: 'src/main.js',
    //     template: 'public/index.html',
    //     filename: 'index.html',
    //     title: 'Index Page', // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //     // chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk。
    //   }
    //   // subpage: 'src/multi-page/sub/main.js' // 当使用只有入口的字符串格式时，模板会被推导为 `public/subpage.html`,如果找不到的话，就会退到 `public/index.html`。
    // },
    lintOnSave: true,
    // runtimeCompiler: false, // 是否使用包含运行时编译器的Vue构建版本,设置为true后你就可以在Vue组件中使用template选项。
    productionSourceMap: true,
    devServer: { // 支持webPack-dev-server的所有选项
        host: "",
        port: 8888,
        https: false,
        open: true, // 配置自动启动浏览器
        proxy: {
            "/ga": {
                // target: "http://10.11.41.32:7777", // 本地服务
                // target: "http://10.11.42.225:7777", // jinming本地
                // target: "http://10.11.39.182:7777", // liuwei本地
                //  target: "http://10.11.40.233:8808", // sd本地
                target: "http://10.50.1.221:8808", // 测试环境
                // ws: false,
                changeOrigin: true
            }
        }
    },
};
