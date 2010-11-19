

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


});
