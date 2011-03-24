/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ PD.Main

/**
 * PD.Mainクラスを作成します。
 * flexSetterでsetter/getterが自動的に作成される様を確認
 */
Ext.define('PD.Main', {

    // {{{ config

    config: {

        // getCount / setCount
        count: 4,

        // getCount / setCount
        amount: 1000
    },

    // }}}
    // {{{ constructor

    constructor : function(config) {

        var me = this;

        // コンフィグオプション初期化
        me.initConfig(config);
    },

    // }}}
    // {{{ applyCount

    applyCount : function(val) {
        return val + '回目';
    }

    // }}}

});

// }}}
// {{{ create PD.Main

var main = new PD.Main({amount: 6000});

// config.count値取得
console.log(main.getCount());   // 4

// config.amount値取得
console.log(main.getAmount()); // 6000

// config.count値設定
main.setCount(100);
console.log(main.getCount());   // 100

// config.amount値設定
main.setCount(3000);
console.log(main.getCount());   // 3000

// config.count値リセット
main.resetCount();
console.log(main.getCount());   // 4

// config.amount値リセット
main.resetAmount();
console.log(main.getAmount());   // 6000

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
