/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ PerfectDay

Ext.regApplication({

    // {{{ name

    name : 'PerfectDay',

    // }}}
    // {{{ autoInitViewport

    autoInitViewport: false,

    // }}}
    // {{{ defaultUrl

    defaultUrl: 'dashboard',

    // }}}
    // {{{ launch

    launch : function() {
        console.log("launch!");
    }

    // }}}

});

console.log(PerfectDay);
// }}}
// {{{ Ext.Router.draw

Ext.Router.draw(function(map) {
    map.connect("dashboard", {controller: 'dashboard', action: 'index'});
});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
