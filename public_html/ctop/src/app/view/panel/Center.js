
Ext.define('PD.view.panel.Center', {

    extend: 'Ext.panel.Panel',

    alias: 'widget.PD.center',

    initComponent: function() {

        var me = this;

        Ext.apply(me, {
            title: 'Center'
        });

        me.callParent(arguments);
    }

});

