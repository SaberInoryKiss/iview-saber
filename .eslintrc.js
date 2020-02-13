module.exports = {
    "root": true, //默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果发现配置文件中有 “root”: true，它就会停止在父级目录中寻找
    "env": {
        "node": true, // Node.js 全局变量和 Node.js 作用域
        "browser": true, // 浏览器全局变量
        "es6": true // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
    },
    "extends": [
        "plugin:vue/essential",
        // "eslint:recommended" //会启动推荐的规则，建议关闭
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module", // 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        "parser": "babel-eslint" // 解析器，默认使用Espree
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]//防止iview Row以及Col报错
    }
};