/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ OldCls

OldCls = Ext.extend(Object, {

    // {{{ dynamicMethod

    dynamicMethod : function() {
        console.log('dynamicMethod called.');
    }

    // }}}

});

// set static member
OldCls.staticMethod = function() {
    console.log('staticMethod called.');
};

OldCls.staticMethod(); // "staticMethod called."

// OldCls.dynamicMethod(); // no create method.

var old = new OldCls();
old.dynamicMethod(); // "dynamicMethod called."

// }}}
// {{{ NewCls

Ext.define('NewCls', {

    // {{{ statics

    statics: {

        // {{{ staticMethod

        staticMethod : function() {
            console.log('staticMethod called.');
        }

        // }}}

    },

    // }}}
    // {{{ dynamicMethod

    dynamicMethod : function() {
        console.log('dynamicMethod called.');
    }

    // }}}

});

NewCls.staticMethod(); // "staticMethod called."

var NC = new NewCls();
NC.dynamicMethod(); // "dynamicMethod called."

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
