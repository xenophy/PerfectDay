Ext.require([
    'Ext.tree.*',
    'Ext.data.*'
]);

Ext.onReady(function() {    
    var store = new Ext.data.TreeStore({
        proxy: {
            type: 'ajax',
            url: 'get-nodes.php'
        },
        root: {
            text: 'Ext JS',
            id: 'src',
            expanded: true
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'fileName',
            direction: 'ASC'
        }]
    });
    
    var tree = new Ext.tree.TreePanel({
        //autoScroll: true,
        //enableDD: true,
        //containerScroll: true,
        animate: true,
        border: false,
        store: store,
        viewConfig: {plugins: [{ptype: 'treeviewdd'}]},
        renderTo: 'tree-div',
        height: 300
    });
});