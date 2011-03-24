/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ BaseCls1

Ext.define('BaseCls1', {

    // {{{ basecls1method

    basecls1method: function() {
        console.log("basecls1method");
    }

    // }}}

});

// }}}
// {{{ BaseCls2

Ext.define('BaseCls2', {

    // {{{ basecls2method

    basecls2method: function() {
        console.log("basecls2method");
    }

    // }}}

});

// }}}
// {{{ SubCls

Ext.define('SubCls', {

    // {{{ mixin

    mixins : {
        base1 : 'BaseCls1',
        base2 : 'BaseCls2'
    },

    // }}}
    // {{{ subclsmethod

    subclsmethod: function() {
        console.log("subclsmethod");
    }

    // }}}

});

// {{{ createAlias

SubCls.createAlias('aliasmethod', 'subclsmethod');

// }}}
// {{{ use

var sub = new SubCls();

sub.subclsmethod(); // "subclsmethod"
sub.basecls1method(); // "basecls1method"
sub.basecls2method(); // "basecls2method"
sub.aliasmethod(); // "subclsmethod"

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
