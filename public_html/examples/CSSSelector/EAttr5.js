

Ext.onReady(function() {

    var els = Ext.select('p[class*="foo"]');

    console.log(els);

    els.highlight();

});



