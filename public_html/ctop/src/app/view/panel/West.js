
Ext.define('PD.view.panel.West', {

    extend: 'Ext.panel.Panel',

    alias: 'widget.PD.west',

    initComponent: function() {

        var me = this;

        Ext.apply(me, {
            title: 'West'
        });

        me.callParent(arguments);
    }

});

