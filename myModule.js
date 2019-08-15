function myModule() {
    //私有数据
    var msg = 'someTHING'
    function fn1() {
        console.log('fn1()' + msg.toUpperCase())
    }
    function fn2() {
        console.log('fn2()' + msg.toLowerCase())
    }
    return fn1
}