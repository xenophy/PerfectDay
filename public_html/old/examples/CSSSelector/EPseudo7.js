

Ext.onReady(function() {

    new Ext.Button({
        text: '実行',
        handler: function() {

            var els = Ext.select('div input:checked + span');

            console.log(els);

            els.highlight();
        },
        renderTo: Ext.getBody()

    });

});



