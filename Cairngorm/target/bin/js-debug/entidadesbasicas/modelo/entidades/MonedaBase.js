/**
 * Generated by Apache Royale Compiler from entidadesbasicas/modelo/entidades/MonedaBase.as
 * entidadesbasicas.modelo.entidades.MonedaBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('entidadesbasicas.modelo.entidades.MonedaBase');
/* Royale Dependency List: org.apache.royale.events.ValueChangeEvent*/

goog.require('org.apache.royale.events.EventDispatcher');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 */
entidadesbasicas.modelo.entidades.MonedaBase = function() {// Compiler generated Binding support implementation:
entidadesbasicas.modelo.entidades.MonedaBase.base(this, 'constructor');

};
// Compiler generated Binding support implementation:
goog.inherits(entidadesbasicas.modelo.entidades.MonedaBase, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('entidadesbasicas.modelo.entidades.MonedaBase', entidadesbasicas.modelo.entidades.MonedaBase);


/**
 * @private
 * @type {string}
 */
entidadesbasicas.modelo.entidades.MonedaBase.prototype.entidadesbasicas_modelo_entidades_MonedaBase__codigo = null;


/**
 * @private
 * @type {string}
 */
entidadesbasicas.modelo.entidades.MonedaBase.prototype.entidadesbasicas_modelo_entidades_MonedaBase__descripcion = null;/**
 * @export
 * @param {string} value
 */
entidadesbasicas.modelo.entidades.MonedaBase.prototype.__bindingWrappedSetter__codigo = function(value) {
this.entidadesbasicas_modelo_entidades_MonedaBase__codigo = value;
}
/**
 * @export
 * @param {string} value
 */
entidadesbasicas.modelo.entidades.MonedaBase.prototype.__bindingWrappedSetter__descripcion = function(value) {
this.entidadesbasicas_modelo_entidades_MonedaBase__descripcion = value;
}



entidadesbasicas.modelo.entidades.MonedaBase.prototype.get__codigo = function() {
return this.entidadesbasicas_modelo_entidades_MonedaBase__codigo;
};


entidadesbasicas.modelo.entidades.MonedaBase.prototype.bindable__set__codigo = function(value) {
var oldValue = this.codigo;
if (oldValue === value) return;
this.__bindingWrappedSetter__codigo(value);
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codigo", oldValue, value));
}

;


entidadesbasicas.modelo.entidades.MonedaBase.prototype.set__codigo = function(value) {
var oldValue = this.get__codigo();
if (oldValue != value) {
this.bindable__set__codigo(value);
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codigo", oldValue, value));
}
};


entidadesbasicas.modelo.entidades.MonedaBase.prototype.get__descripcion = function() {
return this.entidadesbasicas_modelo_entidades_MonedaBase__descripcion;
};


entidadesbasicas.modelo.entidades.MonedaBase.prototype.bindable__set__descripcion = function(value) {
var oldValue = this.descripcion;
if (oldValue === value) return;
this.__bindingWrappedSetter__descripcion(value);
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "descripcion", oldValue, value));
}

;


entidadesbasicas.modelo.entidades.MonedaBase.prototype.set__descripcion = function(value) {
var oldValue = this.get__descripcion();
if (oldValue != value) {
this.bindable__set__descripcion(value);
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "descripcion", oldValue, value));
}
};


Object.defineProperties(entidadesbasicas.modelo.entidades.MonedaBase.prototype, /** @lends {entidadesbasicas.modelo.entidades.MonedaBase.prototype} */ {
/**
  * @export
  * @type {string} */
codigo: {
get: entidadesbasicas.modelo.entidades.MonedaBase.prototype.get__codigo,
set: entidadesbasicas.modelo.entidades.MonedaBase.prototype.set__codigo},
/**
  * @export
  * @type {string} */
descripcion: {
get: entidadesbasicas.modelo.entidades.MonedaBase.prototype.get__descripcion,
set: entidadesbasicas.modelo.entidades.MonedaBase.prototype.set__descripcion}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
entidadesbasicas.modelo.entidades.MonedaBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MonedaBase', qName: 'entidadesbasicas.modelo.entidades.MonedaBase', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
entidadesbasicas.modelo.entidades.MonedaBase.prototype.ROYALE_REFLECTION_INFO = function () {
return {
  accessors: function () {
    return {
      'codigo': { type: 'String', access: 'readwrite', declaredBy: 'entidadesbasicas.modelo.entidades.MonedaBase', metadata: function () { return [ { name: 'Bindable' } ]; }},
      'descripcion': { type: 'String', access: 'readwrite', declaredBy: 'entidadesbasicas.modelo.entidades.MonedaBase', metadata: function () { return [ { name: 'Bindable' } ]; }}
    };
  },
  metadata: function () { return [ { name: 'Bindable' } ]; }
};
};
/**
 * @const
 * @type {number}
 */
entidadesbasicas.modelo.entidades.MonedaBase.prototype.ROYALE_COMPILE_FLAGS = 15;

//# sourceMappingURL=./MonedaBase.js.map