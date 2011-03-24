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

        // 設定適用
        Ext.apply(me, {

            // アイテム設定
            items: [{

                // リージョン設定
                region: 'north',

                // タイトル設定
                title: 'Header',

                // マージン設定
                margin: '5 5 0 5',

                // HTML設定
                html: 'Header'

            },{
                // マージン設定
                margin: '5 5 5 5',

                // リージョン設定
                region: 'center',

                // レイアウト設定
                layout: 'fit',

                // アイテム設定
                items: me.createView(),

                // ボタン設定
                buttons: [{

                    // テキスト設定
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

        me.view = Ext.create('widget.grid', {

            // ストア設定
            store: PerfectDay.stores.book,

            // ボーダー設定
            border: false,

            // ヘッダー設定
            headers: [{

                // テキスト設定
                text     : 'タイトル',

                // サイズ設定
                flex     : 1,

                // データインデックス設定
                dataIndex: 'title'

            },{

                // テキスト設定
                text     : '作者',

                // サイズ設定
                width    : 175,

                // データインデックス設定
                dataIndex: 'author'

            }],

            // ビュー設定
            viewConfig: {

                // 行ストライプ設定
                stripeRows: true

            }

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
