

clsA = Ext.extend(Ext.Panel, {

    initComponent: function() {

        var me = this;

        Ext.apply(me, {
            title: 'Perfect Day',
            width: 500,
            height: 300
        });

        clsA.superclass.initComponent.apply(me, arguments);
    }

});


Ext.onReady(function() {

    /*
    var a = new clsA({
        html: 'Contents',
        renderTo: Ext.getBody()
    });
    */

    //var arr = [1,2,3,4,5];

    /*
    for(var i=0; i<arr.length; i++) {
        alert(arr[i]);
    }
    */

    /*
    Ext.each(arr, function(v, t, arr) {
        console.log(v);
    });
    */

    /*

    var o = {
        key1: 1,
        key2: 2,
        key3: 3,
        key4: 4,
        key5: 5
    };

    /*
    for(index in o) {
        console.log(o[index]);
    }
    */

    /*
    Ext.iterate(o, function(k, v, o) {
        console.log(v);
    });


    Ext.iterate(arr, function(v, i, arr) {
        console.log(arguments);
    });


    var arr = [
        [1,2,3,4,5],
        [6,7,8,9,10]
    ];

    console.log(Ext.flatten(arr));

    */


//    var foo = document.getElementById('foo');

/*
    var foo = Ext.get('foo');

    console.log(foo.dom);

    foo.frame();


    var bar = Ext.fly('foo');
    bar.highlight();
    */


    /* 
    var data = [{
        num: 20000
    },{
        num: 5000
    }];

    var tpl = new Ext.XTemplate(
        '<tpl for=".">',
        '<p>¥{num:number("0,000")}</p>',
        '<p>{num:this.myNumber}</p>',
        '</tpl>', {
            myNumber: function(v) {

                if(v < 10000) {
                    v = '10,000円以下は、指定できません。';
                    return v;
                } else {
                    v = Ext.util.Format.number(v, '0,000');
                }
                return '¥' + v;
            }
        }
    );
    tpl.compile();
    //tpl.overwrite(Ext.fly('foo'),data);

    tpl.append(Ext.getBody(), data);

    */

    /*
    var win = new Ext.Window({
        closeAction: 'hide',
        title: 'test',
        width :500,
        height: 200
    });

    var el = Ext.get('foo');

    el.on('click', function(e, t) {

        if(e.getTarget('.open')) {

            win.show();

            e.stopEvent();

        } else if(e.getTarget('.close')) {

            win.hide();

            e.stopEvent();

        } else {

            win.getEl().frame();
        }

    });
    */

    Ext.preg('testPlugin',function() {
        this.init = function(p) {
            p.setTitle("test");
        }
    });




    var p = new Ext.Panel({
        title: 'Perfect Day',
        plugins:['testPlugin'],
        renderTo: Ext.getBody(),
        width: 500,
        height: 300
    });




































































































});




