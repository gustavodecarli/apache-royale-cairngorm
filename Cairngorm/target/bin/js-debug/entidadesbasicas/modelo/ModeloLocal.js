/**
 * Generated by Apache Royale Compiler from entidadesbasicas/modelo/ModeloLocal.as
 * entidadesbasicas.modelo.ModeloLocal
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('entidadesbasicas.modelo.ModeloLocal');
/* Royale Dependency List: entidadesbasicas.modelo.ModeloCRUD,entidadesbasicas.modelo.entidades.Moneda,mx.collections.ArrayCollection,mx.collections.Sort,mx.collections.SortField,org.apache.royale.events.ValueChangeEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('entidadesbasicas.modelo.interfaces.IModeloLocal');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {entidadesbasicas.modelo.interfaces.IModeloLocal}
 */
entidadesbasicas.modelo.ModeloLocal = function() {
  // Compiler generated Binding support implementation:
  entidadesbasicas.modelo.ModeloLocal.base(this, 'constructor');
  
  
  this.errores_ = new mx.collections.ArrayCollection();
  this.monedaCRUD_ = new entidadesbasicas.modelo.ModeloCRUD(entidadesbasicas.modelo.entidades.Moneda, "srvMonedas", false);
  if (entidadesbasicas.modelo.ModeloLocal.modelLocator != null)
    throw new Error("Only one ModelLocator instance should be instantiated");
};
// Compiler generated Binding support implementation:
goog.inherits(entidadesbasicas.modelo.ModeloLocal, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('entidadesbasicas.modelo.ModeloLocal', entidadesbasicas.modelo.ModeloLocal);


/**
 * @private
 * @type {entidadesbasicas.modelo.ModeloLocal}
 */
entidadesbasicas.modelo.ModeloLocal.modelLocator = null;


/**
 * @export
 * @type {mx.collections.ArrayCollection}
 */
entidadesbasicas.modelo.ModeloLocal.prototype.errores_ = null;


/**
 * @export
 * @type {string}
 */
entidadesbasicas.modelo.ModeloLocal.MONEDA_ABM_ = "monedaCRUD";


/**
 * @export
 * @type {entidadesbasicas.modelo.ModeloCRUD}
 */
entidadesbasicas.modelo.ModeloLocal.prototype.monedaCRUD_ = null;


/**
 * @export
 * @param {string} modelType
 * @return {entidadesbasicas.modelo.ModeloCRUD}
 */
entidadesbasicas.modelo.ModeloLocal.getModelInstance = function(modelType) {
  entidadesbasicas.modelo.ModeloLocal.getInstance()[modelType]["modeloTipo"] = modelType;
  return /* implicit cast */ org.apache.royale.utils.Language.as(entidadesbasicas.modelo.ModeloLocal.modelLocator[modelType], entidadesbasicas.modelo.ModeloCRUD, true);
};


/**
 * @export
 * @return {entidadesbasicas.modelo.ModeloLocal}
 */
entidadesbasicas.modelo.ModeloLocal.getInstance = function() {
  if (entidadesbasicas.modelo.ModeloLocal.modelLocator == null)
    entidadesbasicas.modelo.ModeloLocal.modelLocator = new entidadesbasicas.modelo.ModeloLocal();
  return entidadesbasicas.modelo.ModeloLocal.modelLocator;
};


/**
 * @export
 * @param {string} unMensaje
 */
entidadesbasicas.modelo.ModeloLocal.prototype.agregarError = function(unMensaje) {
  var /** @type {mx.collections.SortField} */ orden = new mx.collections.SortField();
  orden.name = "messageId";
  orden.numeric = true;
  orden.descending = true;
  var /** @type {mx.collections.Sort} */ sort = new mx.collections.Sort();
  sort.fields = [orden];
};
/**
 * Compiler generated
 * Static Binding support
 * @private
 * @type {org.apache.royale.events.EventDispatcher}
*/
entidadesbasicas.modelo.ModeloLocal._bindingEventDispatcher;

Object.defineProperties(entidadesbasicas.modelo.ModeloLocal, /** @lends {entidadesbasicas.modelo.ModeloLocal} */ {
/** @export
  * @type {org.apache.royale.events.EventDispatcher} */
staticEventDispatcher: {
  get: function() {
  		return entidadesbasicas.modelo.ModeloLocal._bindingEventDispatcher
    	|| (entidadesbasicas.modelo.ModeloLocal._bindingEventDispatcher = new org.apache.royale.events.EventDispatcher());
    }
  },
/** @export
  * @type {string} */
MONEDA_ABM: {
  get: function() {
    return entidadesbasicas.modelo.ModeloLocal.MONEDA_ABM_;
  },
  
  set: function(value) {
    	var oldValue = entidadesbasicas.modelo.ModeloLocal.MONEDA_ABM_;
    	if (value != oldValue) {
      		entidadesbasicas.modelo.ModeloLocal.MONEDA_ABM_ = value;
      		var dispatcher = entidadesbasicas.modelo.ModeloLocal._bindingEventDispatcher;
      		if (dispatcher) dispatcher.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
      			entidadesbasicas.modelo.ModeloLocal, "MONEDA_ABM", oldValue, value));
      }
    }
  }
});

Object.defineProperties(entidadesbasicas.modelo.ModeloLocal.prototype, /** @lends {entidadesbasicas.modelo.ModeloLocal.prototype} */ {
/** @export
  * @type {mx.collections.ArrayCollection} */
errores: {
/** @this {entidadesbasicas.modelo.ModeloLocal} */
  get: function() {
  return this.errores_;
  },

/** @this {entidadesbasicas.modelo.ModeloLocal} */
set: function(value) {
if (value != this.errores_) {
    var oldValue = this.errores_;
    this.errores_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "errores", oldValue, value));
}
}},/** @export
  * @type {entidadesbasicas.modelo.ModeloCRUD} */
monedaCRUD: {
/** @this {entidadesbasicas.modelo.ModeloLocal} */
  get: function() {
  return this.monedaCRUD_;
  },

/** @this {entidadesbasicas.modelo.ModeloLocal} */
set: function(value) {
if (value != this.monedaCRUD_) {
    var oldValue = this.monedaCRUD_;
    this.monedaCRUD_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "monedaCRUD", oldValue, value));
}
}}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
entidadesbasicas.modelo.ModeloLocal.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ModeloLocal', qName: 'entidadesbasicas.modelo.ModeloLocal', kind: 'class' }], interfaces: [entidadesbasicas.modelo.interfaces.IModeloLocal] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
entidadesbasicas.modelo.ModeloLocal.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'errores': { type: 'mx.collections.ArrayCollection', access: 'readwrite', declaredBy: 'entidadesbasicas.modelo.ModeloLocal'},
        '|MONEDA_ABM': { type: 'String', access: 'readwrite', declaredBy: 'entidadesbasicas.modelo.ModeloLocal'},
        'monedaCRUD': { type: 'entidadesbasicas.modelo.ModeloCRUD', access: 'readwrite', declaredBy: 'entidadesbasicas.modelo.ModeloLocal'},
        '|staticEventDispatcher': { type: 'org.apache.royale.events.EventDispatcher', access: 'readonly', declaredBy: 'entidadesbasicas.modelo.ModeloLocal'}
      };
    },
    methods: function () {
      return {
        'ModeloLocal': { type: '', declaredBy: 'entidadesbasicas.modelo.ModeloLocal'},
        '|getModelInstance': { type: 'entidadesbasicas.modelo.ModeloCRUD', declaredBy: 'entidadesbasicas.modelo.ModeloLocal', parameters: function () { return [ 'String', false ]; }, metadata: function () { return [ { name: 'Bindable' } ]; }},
        '|getInstance': { type: 'entidadesbasicas.modelo.ModeloLocal', declaredBy: 'entidadesbasicas.modelo.ModeloLocal'},
        'agregarError': { type: 'void', declaredBy: 'entidadesbasicas.modelo.ModeloLocal', parameters: function () { return [ 'String', false ]; }}
      };
    },
    metadata: function () { return [ { name: 'Bindable' } ]; }
  };
};
/**
 * @const
 * @type {number}
 */
entidadesbasicas.modelo.ModeloLocal.prototype.ROYALE_COMPILE_FLAGS = 15;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
entidadesbasicas.modelo.ModeloLocal.prototype.ROYALE_INITIAL_STATICS = Object.keys(entidadesbasicas.modelo.ModeloLocal);

//# sourceMappingURL=./ModeloLocal.js.map