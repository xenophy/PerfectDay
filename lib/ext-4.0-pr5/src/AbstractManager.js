/**
 * @class Ext.AbstractManager
 * @extends Object
 * @ignore
 * Base Manager class
 */

Ext.define('Ext.AbstractManager', {

    /* Begin Definitions */

    requires: ['Ext.util.HashMap'],

    /* End Definitions */

    typeName: 'type',

    constructor: function(config) {
        Ext.apply(this, config || {});

        /**
         * Contains all of the items currently managed
         * @property all
         * @type Ext.util.MixedCollection
         */
        this.all = new Ext.util.HashMap();

        this.types = {};
    },

    /**
     * Returns an item by id.
     * For additional details see {@link Ext.util.HashMap#get}.
     * @param {String} id The id of the item
     * @return {Mixed} The item, <code>undefined</code> if not found.
     */
    get : function(id) {
        return this.all.get(id);
    },

    /**
     * Registers an item to be managed
     * @param {Mixed} item The item to register
     */
    register: function(item) {
        this.all.add(item);
    },

    /**
     * Unregisters an item by removing it from this manager
     * @param {Mixed} item The item to unregister
     */
    unregister: function(item) {
        this.all.remove(item);
    },

    /**
     * <p>Registers a new item constructor, keyed by a type key.
     * @param {String} type The mnemonic string by which the class may be looked up.
     * @param {Constructor} cls The new instance class.
     */
    registerType : function(type, cls) {
        this.types[type] = cls;
        cls[this.typeName] = type;
    },

    /**
     * Checks if an item type is registered.
     * @param {String} type The mnemonic string by which the class may be looked up
     * @return {Boolean} Whether the type is registered.
     */
    isRegistered : function(type){
        return this.types[type] !== undefined;
    },

    /**
     * Creates and returns an instance of whatever this manager manages, based on the supplied type and config object
     * @param {Object} config The config object
     * @param {String} defaultType If no type is discovered in the config object, we fall back to this type
     * @return {Mixed} The instance of whatever this manager is managing
     */
    create: function(config, defaultType) {
        var type        = config[this.typeName] || config.type || defaultType,
            Constructor = this.types[type];

        if (Constructor == undefined) {
            throw new Error(Ext.String.format("The '{0}' type has not been registered with this manager", type));
        }

        return new Constructor(config);
    },

    /**
     * Registers a function that will be called when an item with the specified id is added to the manager. This will happen on instantiation.
     * @param {String} id The item id
     * @param {Function} fn The callback function. Called with a single parameter, the item.
     * @param {Object} scope The scope (<code>this</code> reference) in which the callback is executed. Defaults to the item.
     */
    onAvailable : function(id, fn, scope){
        var all = this.all,
            item;
        
        if (all.containsKey(id)) {
            item = all.get(id);
            fn.call(scope || item, item);
        } else {
            all.on('add', function(map, key, item){
                if (key == id) {
                    fn.call(scope || item, item);
                    all.un('add', fn, scope);
                }
            });
        }
    },
    
    /**
     * Executes the specified function once for each item in the collection.
     * Returning false from the function will cease iteration.
     * 
     * The paramaters passed to the function are:
     * <div class="mdetail-params"><ul>
     * <li><b>key</b> : String<p class="sub-desc">The key of the item</p></li>
     * <li><b>value</b> : Number<p class="sub-desc">The value of the item</p></li>
     * <li><b>length</b> : Number<p class="sub-desc">The total number of items in the collection</p></li>
     * </ul></div>
     * @param {Object} fn The function to execute.
     * @param {Object} scope The scope to execute in. Defaults to <tt>this</tt>.
     */
    each: function(fn, scope){
        this.all.each(fn, scope || this);    
    },
    
    /**
     * Gets the number of items in the collection.
     * @return {Number} The number of items in the collection.
     */
    getCount: function(){
        return this.all.getCount();
    }
});
