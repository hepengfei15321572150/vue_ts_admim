// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        //首行缩进一个table
        'indent':['error',4],
        //强制使用双引号
        "quotes": [0],
        // //结尾必须添加分号
        "semi": ['error','always'],
        //  // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        // 关闭函数名称后面的空格
        'space-before-function-paren':0,
        //未使用变量不报错
        'no-unused-vars':0,


        // // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
