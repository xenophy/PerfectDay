
Ext.onReady(function() {


    var func = function() {

        var isSSL = true;

        return {
            isSSL : function() {
                return isSSL;
            }
        };

    }();

    var ret;
    ret = func();
    console.log(ret.isSSL);

    /*




    var func = function() {
        var x = 1;

        return x;
    }

    var ret;
    ret = func();
    alert(ret); // 1

    ret = func();
    alert(ret); // 2

    ret = func();
    alert(ret); // 3










    /*

    var f = function() {

        var x = 0;

        return function() {

            return x++;

        };
    }

    func = f();

    // 0
    ret = func();
    console.log(ret);

    // 1
    ret = func();
    console.log(ret);

    // 2
    ret = func();
    console.log(ret);

    */

    /*

    var o = {
        foo: 'bar'
    };

    var f = function() {

        console.log(arguments);

        console.log(this);
    }

//    f.call(o, 123, 456);
    f.apply(o, [123, 456]);
    */










});


