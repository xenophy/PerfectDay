

Ext.onReady(function() {

    var els = Ext.select('div#foo * a');

    /*
    els.each(function(el) {
        el.highlight();
    });
    */

    els.highlight().frame().ghost();

});



