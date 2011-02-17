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
                layout: 'fit',
                items: me.createView(),
                buttons: [{
                    text: 'ボタン'
                }]
            }]
        });

        // スーパークラスメソッドコール
        PerfectDay.views.Viewport.superclass.initComponent.apply(me, arguments);
    },

    // }}}
    // {{{ createView

    createView: function() {

        var me = this;

        me.view = Ext.create('widget.gridpanel', {
            store: PerfectDay.stores.book,
            items: [{
                headers: [{
                    text: 'Title',
                    dataIndex: 'title',
                    flex: 1
                }, {
                    text: 'Author',
                    dataIndex: 'author',
                    width: 200
                }]
            }]
        });

        return me.view;
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
