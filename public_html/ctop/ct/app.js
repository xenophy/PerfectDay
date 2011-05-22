/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Vergina
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Index

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext': '../../ext/src',
        'Ext.ux': '../../src/ux',
        'PD': '../src/app'
    }
});

Ext.Loader.require('PD.view.panel.Center');
Ext.Loader.require('PD.view.panel.West');

Ext.application({
    name: 'PD',
    appFolder: /*Ext.Loader.getPath('PD')*/ '../src/app',
    controllers: ['Index']
});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
