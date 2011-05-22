
Ext.define('PD.view.window.Window', {

    extend: 'Ext.window.Window',

    initComponent: function() {

        var me = this;

        Ext.apply(me, {
            title: 'Perfect Day',
            width :500,
            height: 300
        });

        me.callParent(arguments);
    }

});

