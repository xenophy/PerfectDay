/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ overrideCls

Ext.define('overrideCls', {

    // {{{ originMethod

    originMethod : function() {
        console.log("originMethod called.");
    }

    // }}}

});

overrideCls.override({

    // {{{ originMethod

    originMethod : function() {

        var me = this;

        console.log("overrided method called.");

        // call original method.
        me.callOverridden();

    }

    // }}}

});

var OC = new overrideCls();
OC.originMethod();  // "overrided method called."
                    // "originMethod called."

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
