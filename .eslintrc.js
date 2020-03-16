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
        // "strict": 2,  //	要求或禁止使用严格模式指令
		// "no-const-assign": 2, //禁止修改 const 声明的变量
		// "no-dupe-keys": 2, //禁止对象字面量中出现重复的 key
		// "no-duplicate-case": 2,//	禁止出现重复的 case 标签
		// "no-else-return": 2, //禁止 if 语句中 return 语句之后有 else 块
		// "no-empty": 2, //禁止出现空语句块
		// "no-extra-parens": 2, //禁止不必要的括号
		// "no-extra-semi": 2, //	禁止不必要的分号
		// "no-irregular-whitespace": 2, //禁止不规则的空白
		// "no-mixed-spaces-and-tabs": [2, false],//禁止空格和 tab 的混合缩进
		// "no-multi-spaces": 1, //禁止使用多个空格
		// "no-multiple-empty-lines": [1, {"max": 2}],//禁止出现多行空行
		// "no-trailing-spaces": 1,//禁用行尾空格
		// "no-underscore-dangle": 1,// 禁止标识符中有悬空下划线
		// "no-unreachable": 2,//禁止在 return、throw、continue 和 break 语句之后出现不可达代码
		// "no-unused-expressions": 2,//禁止出现未使用过的表达式
		// "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//禁止出现未使用过的变量
		// "no-use-before-define": 2,//禁止在变量定义之前使用它们
		// "no-var": 0,// 要求使用 let 或 const 而不是 var
		// "comma-spacing": [2, {"before": false, "after": true}],//强制在逗号后使用一致的空格
		// "comma-style": [2, "last"],// 强制使用一致的逗号风格
		// "eol-last": 0,//要求或禁止文件末尾存在空行
		// "eqeqeq": 2,//要求使用 === 和 !==
		// "indent": [2, "tab"],//强制使用一致的缩进
		// "prefer-const": 0,//要求使用 const 声明那些声明后不再被修改的变量
		// "semi": [2, "always"],//要求在语句末尾使用分号
		// "quotes": [1, "single"],//要求尽可能地使用单引号
		// "quote-props":[2, "as-needed"],//当没有严格要求时，禁止对象字面量属性名称使用引号
		// "semi-spacing": [0, {"before": false, "after": true}], //分号之后强制有空格
        // "valid-typeof": 2,//强制 typeof 表达式与有效的字符串进行比较
        // "brace-style": [2, "stroustrup"],//强制在代码块中使用一致的大括号风格
        "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]//防止iview Row以及Col报错
    }
};