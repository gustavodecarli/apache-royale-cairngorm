/**
 * Generated by Apache Royale Compiler from mx/core/IFlexModule.as
 * mx.core.IFlexModule
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.IFlexModule');
/* Royale Dependency List: mx.core.IFlexModuleFactory,XML*/




/**
 * @interface
 */
mx.core.IFlexModule = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.IFlexModule', mx.core.IFlexModule);
/**  * @type {mx.core.IFlexModuleFactory}
 */mx.core.IFlexModule.prototype.moduleFactory;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.IFlexModule.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFlexModule', qName: 'mx.core.IFlexModule', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.IFlexModule.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'moduleFactory': { type: 'mx.core.IFlexModuleFactory', access: 'readwrite', declaredBy: 'mx.core.IFlexModule'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.IFlexModule.prototype.ROYALE_COMPILE_FLAGS = 26;
