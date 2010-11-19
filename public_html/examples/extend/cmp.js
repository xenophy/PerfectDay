

clsA = Ext.extend(Ext.Panel, {

    initComponent: function() {

        var me = this;

        Ext.apply(me, {
            title: 'Perfect Day',
            width: 500,
            height: 300
        });

        clsA.superclass.initComponent.apply(me, arguments);
    }

});


Ext.onReady(function() {

    var a = new clsA({
        html: 'Contents',
        renderTo: Ext.getBody()
    });


});
