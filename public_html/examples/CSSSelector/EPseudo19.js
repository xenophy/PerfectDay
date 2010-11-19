

Ext.onReady(function() {

    var els = Ext.select('p.any(.x-foo|.x-bar)');

    console.log(els);

    els.highlight();

});



