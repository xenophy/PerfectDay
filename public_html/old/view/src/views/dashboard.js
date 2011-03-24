/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ dashboard

Ext.define('PerfectDay.views.Viewport', {

    // {{{ extend

    extend: 'Ext.Viewport',

    // }}}
    // {{{ layout

    layout : 'border',

    // }}}
    // {{{ initComponent

    initComponent: function() {

        var me = this;

        Ext.apply(me, {
            items: [{
                region: 'north',
                title: 'Header',
                html: 'Header'
            },{
                region: 'center',
                html: 'center',
                buttons: [{
                    text: 'ボタン'
                }]
            }]
        });

        // スーパークラスメソッドコール
        PerfectDay.views.Viewport.superclass.initComponent.apply(me, arguments);
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
