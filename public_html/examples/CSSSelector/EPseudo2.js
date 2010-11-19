

Ext.onReady(function() {

    var els = Ext.select('p:last-child');

    console.log(els);

    els.highlight();

    var els = Ext.select('div p:last-child');

    els.highlight();
});



