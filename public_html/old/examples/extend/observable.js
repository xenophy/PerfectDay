

clsA = Ext.extend(Ext.util.Observable, {

    constructor: function(){

        this.addEvents('tesevent', 'testevent2');

    },

    func1 : function() {

        this.fireEvent('testevent', 123);

    }

});


Ext.onReady(function() {

    var a = new clsA();

    a.on('testevent', function(num) {

        alert(num);

    });

    a.func1();


});
