/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Index

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext': '../../ext/src',
        'Ext.ux': './src/ux/'
    }
});

Ext.application({
    name: 'PD',
    appFolder: Ext.Loader.getPath('PD') + '/app',
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
