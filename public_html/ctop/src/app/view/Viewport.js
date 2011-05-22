/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ PD.view.Viewport

Ext.define('PD.view.Viewport', {

    // {{{ requires

    requires: [
    ],

    // }}}
    // {{{ uses

    uses: [
    ],

    // }}}
    // {{{ extend

    extend: 'Ext.container.Viewport',

    // }}}
    // {{{ alias

    alias: 'widget.PD.viewport',

    // }}}
    // {{{ initComponent

    initComponent: function() {

        var me = this

        // 設定適用
        Ext.apply(me, {
            id: 'PD.Viewport',
            layout: 'border',
            items: [{
                region: 'west',
                width: 250,
                xtype: 'PD.west'
            },{
                region: 'center',
                xtype: 'PD.center'
            }]
        });

        // スーパークラスメソッドコール
        me.callParent(arguments);

    },

    // }}}
    // {{{ initEvents

    initEvents: function() {

        var me = this;

        // スーパークラスメソッドコール
        me.callParent(arguments);

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
