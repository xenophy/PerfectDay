

Ext.onReady(function() {

    var els = Ext.select('p:first-child');

    console.log(els);

    els.highlight();

    var els = Ext.select('div p:first-child');

    els.highlight();
});



