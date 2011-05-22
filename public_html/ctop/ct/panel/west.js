/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ settings

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext': '../../../ext/src',
        'PD': '../../src/app'
    }
});

Ext.Loader.require('PD.view.panel.West');

// }}}
// {{{ main

Ext.onReady(function() {

    Ext.widget('PD.west', {
        height: 500,
        renderTo: document.body
    });

    /*
    // VGN.button.FileMenu生成
    var btn = Ext.create('VGN.view.button.FileMenu', {
        listeners: {
            'decision': function(id) {
                Ext.example.msg('Button Click', 'ID = {0}', id);
            }
        },
        renderTo: document.body
    });
    */

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
