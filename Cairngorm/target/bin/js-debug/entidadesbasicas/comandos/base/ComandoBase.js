/**
 * Generated by Apache Royale Compiler from entidadesbasicas/comandos/base/ComandoBase.as
 * entidadesbasicas.comandos.base.ComandoBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('entidadesbasicas.comandos.base.ComandoBase');
/* Royale Dependency List: com.adobe.cairngorm.control.CairngormEvent,entidadesbasicas.modelo.interfaces.IModeloLocal*/

goog.require('com.adobe.cairngorm.commands.ICommand');



/**
 * @constructor
 * @implements {com.adobe.cairngorm.commands.ICommand}
 */
entidadesbasicas.comandos.base.ComandoBase = function() {
  this.model = null;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('entidadesbasicas.comandos.base.ComandoBase', entidadesbasicas.comandos.base.ComandoBase);


/**
 * @export
 * @type {entidadesbasicas.modelo.interfaces.IModeloLocal}
 */
entidadesbasicas.comandos.base.ComandoBase.prototype.model = null;


/**
 * @export
 * @type {string}
 */
entidadesbasicas.comandos.base.ComandoBase.prototype.modelType = null;


/**
 * @export
 * @type {string}
 */
entidadesbasicas.comandos.base.ComandoBase.prototype.serviceName = null;


/**
 * @export
 * @param {com.adobe.cairngorm.control.CairngormEvent} event
 */
entidadesbasicas.comandos.base.ComandoBase.prototype.execute = function(event) {
};


/**
 * @export
 * @return {string}
 */
entidadesbasicas.comandos.base.ComandoBase.prototype.getServiceName = function() {
  return this.serviceName;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
entidadesbasicas.comandos.base.ComandoBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ComandoBase', qName: 'entidadesbasicas.comandos.base.ComandoBase', kind: 'class' }], interfaces: [com.adobe.cairngorm.commands.ICommand] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
entidadesbasicas.comandos.base.ComandoBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'model': { type: 'entidadesbasicas.modelo.interfaces.IModeloLocal', get_set: function (/** entidadesbasicas.comandos.base.ComandoBase */ inst, /** * */ v) {return v !== undefined ? inst.model = v : inst.model;}},
        'modelType': { type: 'String', get_set: function (/** entidadesbasicas.comandos.base.ComandoBase */ inst, /** * */ v) {return v !== undefined ? inst.modelType = v : inst.modelType;}},
        'serviceName': { type: 'String', get_set: function (/** entidadesbasicas.comandos.base.ComandoBase */ inst, /** * */ v) {return v !== undefined ? inst.serviceName = v : inst.serviceName;}}
      };
    },
    methods: function () {
      return {
        'ComandoBase': { type: '', declaredBy: 'entidadesbasicas.comandos.base.ComandoBase'},
        'execute': { type: 'void', declaredBy: 'entidadesbasicas.comandos.base.ComandoBase', parameters: function () { return [ 'com.adobe.cairngorm.control.CairngormEvent', false ]; }},
        'getServiceName': { type: 'String', declaredBy: 'entidadesbasicas.comandos.base.ComandoBase'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
entidadesbasicas.comandos.base.ComandoBase.prototype.ROYALE_COMPILE_FLAGS = 15;

//# sourceMappingURL=./ComandoBase.js.map
