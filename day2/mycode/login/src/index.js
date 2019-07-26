//引入第三方模块
var $ =require('jquery');
//引入css模块，非JS模块
require('./css/bootstrap.css');
require('./css/signin.css')
var template = require('./html/index.html')
//引入自定义模块
var {
    plus,
    sub
} = require('./tools')
//引入内置模块
console.log(plus(123,678))
$('body').html(template);