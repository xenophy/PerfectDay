/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ settings

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext': '../../../ext/src',
        'PD': '../../src/app'
    }
});

// }}}
// {{{ main

Ext.onReady(function() {

    var win = Ext.create('PD.view.window.Window');
    win.show();








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
