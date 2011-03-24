/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ extendCls

Ext.define('extendCls', {
});

// }}}
// {{{ afterAddedStaticMethod

extendCls.extend('afterAddedStaticMethod', function() {
    console.log("afterAddedStaticMethod");
});

// }}}
// {{{ Object Style

extendCls.extend({

    // {{{ afterAddedStaticMethodObjectStyle

    afterAddedStaticMethodObjectStyle :function() {
        console.log("afterAddedStaticMethodObjectStyle");
    }

    // }}}

});

extendCls.afterAddedStaticMethod(); // "afterAddedStaticMethod"
extendCls.afterAddedStaticMethodObjectStyle(); // "afterAddedStaticMethodObjectStyle"

// }}}
// {{{ afterAddedDynamicMethod

extendCls.implement('afterAddedDynamicMethod', function() {
    console.log("afterAddedDynamicMethod");
});

// }}}
// {{{ Object Style

extendCls.implement({

    // {{{ afterAddedDynamicMethodObjectStyle

    afterAddedDynamicMethodObjectStyle : function() {
        console.log("afterAddedDynamicMethodObjectStyle");
    }

    // }}}

});

var EC = new extendCls();
EC.afterAddedDynamicMethod();   // "afterAddedDynamicMethod"
EC.afterAddedDynamicMethodObjectStyle();    // "afterAddedDynamicMethodObjectStyle"

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
