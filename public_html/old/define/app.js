/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */


Ext.define('My.Class1', {

    config: {
        name: 'Awesome',
        isAwesome: true
    },

    constructor: function(config) {
        this.initConfig(config);
        console.log("Class1 constructor called.");
        return this;
    },

    applyName : function(val) {
        return "[" + val + "]";
    }

});

var cls = new My.Class1();

console.log(cls.getName());
console.log(cls.getIsAwesome());

cls.setName('PerfectDay');
console.log(cls.getName());

cls.resetName();
console.log(cls.getName());

Ext.define('My.Class2', {
    extend: 'My.Class1',
    constructor : function() {
        this.callParent(arguments);
    }
});

var cls2 = new My.Class2();

console.log(" ");




Ext.define('My.Cat', {
    statics: {
        speciciesName: 'Cat' // My.Cat.speciciesName = 'Cat'
    },

    constructor: function() {
        console.log("[My.Cat constructor]");
        console.log(this.self.speciciesName);
        console.log(Ext.getClassName(this.self));
        console.log("-------------------");

        return this;
    },

    clone: function() {
        return new this.self();
    }
});


Ext.define('My.SnowLeopard', {
    extend: 'My.Cat',
    statics: {
        speciciesName: 'Snow Leopard' // My.SnowLeopard.speciciesName = 'Snow Leopard'
    }
});

var kitty = new My.Cat();
var katty = new My.SnowLeopard();
var cutie = katty.clone();

console.log(Ext.getClassName(cutie));






Ext.define('My.Cat', {
    statics: {
        speciciesName: 'Cat' // My.Cat.speciciesName = 'Cat'
    },

    constructor: function() {

        console.log(this.statics().speciciesName); // always equals to 'Cat' no matter what 'this' refers to
        console.log(this.self.speciciesName);      // dependent on 'this'

        return this;
    },

    clone: function() {
        var cloned = new this.self;                      // dependent on 'this'

        cloned.groupName = this.statics().speciciesName; // equivalent to: My.Cat.speciciesName

        return cloned;
    }
});


Ext.define('My.SnowLeopard', {
    extend: 'My.Cat',
    statics: {
        speciciesName: 'Snow Leopard' // My.SnowLeopard.speciciesName = 'Snow Leopard'
    },

    constructor: function() {
        this.callParent();
    }
});

var kitty = new My.Cat();         // alerts 'Cat', then alerts 'Cat'
var katty = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
var cutie = katty.clone();

console.log(Ext.getClassName(cutie));   // alerts 'My.SnowLeopard'
console.log(cutie.groupName);           // alerts 'Cat'




/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
