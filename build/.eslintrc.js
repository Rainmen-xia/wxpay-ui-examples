module.exports = {
    env: {
        browser: true,
        es6: true
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true
        }
    },

    //启用默认核心规则
    extends: 'eslint:recommended',

    // add your custom rules here
    rules: {
        //禁止重复模块的导入
        'no-duplicate-imports': 1,

        //禁用不必要的构造函数
        'no-useless-constructor': 1,

        //ES6模式禁用var
        'no-var': 1,

        //要求使用模板字面量而非字符串连接
        // 'prefer-template': 1,

        //允许混合使用空格和 tab, 但是当 tab 是为了对齐则允许
        'no-mixed-spaces-and-tabs': ["error", "smart-tabs"],

        //命名使用驼峰
        // 'camelcase': 1,

        //末尾不允许出现逗号
        'comma-dangle': ["error", "never"],

        //禁止在计算属性内使用空格
        'computed-property-spacing': ["error", "never"],

        //当获取当前执行环境的上下文时，强制使用一致的命名(that)
        'consistent-this': ["error", "that"],

        //调用function时不允许出现间隔
        'func-call-spacing': ["error", "never"],

        //强制缩进使用tab，并且switch/case多缩进一层
        'indent': ["error", "tab", { "SwitchCase": 1 }],

        //字符串强制使用单引号
        'quotes': ["error", "single"],

        //要求操作符周围有空格
        'space-infix-ops': "error",

        //一元操作符周围要求有空格，除++和--
        'space-unary-ops': [2, {
                "words": true,
                "nonwords": true,
                "overrides": {
                    "~": false,
                    "~~": false,
                    "--": false,
                    "++": false,
                    "!": false,
                    "!!": false,
                    "-": false
                }
        }],

        //大括号放在控制语句或声明语句同一行的位置
        'brace-style': 'error',

        //用作代码块起始的左花括号 { 前必须有一个空格
        'space-before-blocks': 'error',

        //if / else / for / while / function / switch / do / try / catch / finally 关键字后，必须有一个空格
        // 'keyword-spacing': ['error', { 'before': true }],

        //属性中的 : 之后必须有空格，: 之前不允许有空格。
        'key-spacing': ['error', { 'beforeColon': false }],

        //在函数调用、函数声明、括号表达式、属性访问、if / for / while / switch / catch 等语句中，() 和 [] 内紧贴括号部分不允许有空格
        'space-in-parens': ['error', 'never'],

        //箭头函数的参数强制使用圆括号
        'arrow-parens': 0,

        //非开发模式禁用debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        //非开发模式禁用console
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
    },

    //配置小程序内全局函数，避免报错
    globals: {
        //mocha chai
        describe: true,
        it: true,

        global: true,
        process: true,
        require: true,
        Page: true,
        wx: true,
        App: true,
        getApp: true
    }
}