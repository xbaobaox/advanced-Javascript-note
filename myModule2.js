(function (window) {
    //私有数据
    var msg = 'someTHING'
    //操作数据的函数
    function fn1() {
        console.log('fn1()' + msg.toUpperCase())
    }
    function fn2() {
        console.log('fn2()' + msg.toLowerCase())
    }
    //向外暴露对象(给外部使用的方法)
    window.myModule2 = {
        fn1: fn1,
        fn2: fn2
    }
})(window) //将实参传入形参 代码压缩的时候形参会变成w 局部变量的window也会变成w,为了防止出错