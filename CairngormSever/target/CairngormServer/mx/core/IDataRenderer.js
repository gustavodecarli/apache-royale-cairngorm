/**
 * Generated by Apache Royale Compiler from mx/core/IDataRenderer.as
 * mx.core.IDataRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.IDataRenderer');
/* Royale Dependency List: XML*/



/**
 * @interface
 */
mx.core.IDataRenderer = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.IDataRenderer', mx.core.IDataRenderer);
/**  * @type {Object}
 */mx.core.IDataRenderer.prototype.data;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.IDataRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IDataRenderer', qName: 'mx.core.IDataRenderer', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.IDataRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'data': { type: 'Object', access: 'readwrite', declaredBy: 'mx.core.IDataRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.IDataRenderer.prototype.ROYALE_COMPILE_FLAGS = 26;