

clsA = Ext.extend(Object, {

    constructor : function(cfg) {

        var me = this;

        cfg = cfg || {};

        var test = function() {
            console.log(me.cfg);
        }

        me.message1 = cfg.msg1;
        me.message2 = cfg.msg2;
    },

    foo : function() {
        var me = this;
        console.log(me.message1);
    },

    bar : function() {
        var me = this;
        console.log(me.message2);
    }
});

var func = new clsA({
    msg1: 'foo',
    msg2: 'bar'
});

func.foo();
func.bar();

/*













clsA = Ext.extend(Object, {

    constructor : function(cfg) {

        cfg = cfg || {};

        alert(cfg.foo);
    }

});


Ext.onReady(function() {

    var a = new clsA({
        foo: 'bar'
    });

    a.foo = 123;
    a.bar = 'test';


});
*/
