function myModule() {
    //私有数据
    var msg = 'someTHING'
    //操作数据的函数
    function fn1() {
        console.log('fn1()' + msg.toUpperCase())
    }
    function fn2() {
        console.log('fn2()' + msg.toLowerCase())
    }
    // return fn1
    //向外暴露对象(给外部使用的方法)
    return {
        fn1:fn1,
        fn2:fn2
    }
}