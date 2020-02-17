/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/DefinitionBase.as
 * org.apache.royale.reflection.DefinitionBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.DefinitionBase');
/* Royale Dependency List: */



/**
 * @constructor
 * @param {string} name
 * @param {Object=} rawData
 */
org.apache.royale.reflection.DefinitionBase = function(name, rawData) {
  rawData = typeof rawData !== 'undefined' ? rawData : null;
  this._name = name;
  this._rawData = rawData;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.reflection.DefinitionBase', org.apache.royale.reflection.DefinitionBase);


/**
 * @protected
 * @type {string}
 */
org.apache.royale.reflection.DefinitionBase.prototype._name;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.reflection.DefinitionBase.prototype._rawData;


org.apache.royale.reflection.DefinitionBase.prototype.get__name = function() {
  return this._name;
};


org.apache.royale.reflection.DefinitionBase.prototype.get__rawData = function() {
  return this._rawData;
};


Object.defineProperties(org.apache.royale.reflection.DefinitionBase.prototype, /** @lends {org.apache.royale.reflection.DefinitionBase.prototype} */ {
/**
  * @export
  * @type {string} */
name: {
get: org.apache.royale.reflection.DefinitionBase.prototype.get__name},
/**
  * @type {Object} */
rawData: {
get: org.apache.royale.reflection.DefinitionBase.prototype.get__rawData}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.reflection.DefinitionBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DefinitionBase', qName: 'org.apache.royale.reflection.DefinitionBase', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.reflection.DefinitionBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'name': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.reflection.DefinitionBase'}
      };
    },
    methods: function () {
      return {
        'DefinitionBase': { type: '', declaredBy: 'org.apache.royale.reflection.DefinitionBase', parameters: function () { return [ 'String', false ,'Object', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.reflection.DefinitionBase.prototype.ROYALE_COMPILE_FLAGS = 10;
