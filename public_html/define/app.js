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





/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
