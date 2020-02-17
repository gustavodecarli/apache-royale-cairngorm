/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/MetaDataArgDefinition.as
 * org.apache.royale.reflection.MetaDataArgDefinition
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.MetaDataArgDefinition');
/* Royale Dependency List: */

goog.require('org.apache.royale.reflection.DefinitionBase');



/**
 * @constructor
 * @extends {org.apache.royale.reflection.DefinitionBase}
 * @param {string} name
 * @param {string} value
 */
org.apache.royale.reflection.MetaDataArgDefinition = function(name, value) {
  org.apache.royale.reflection.MetaDataArgDefinition.base(this, 'constructor', name);
  this.org_apache_royale_reflection_MetaDataArgDefinition__value = value;
};
goog.inherits(org.apache.royale.reflection.MetaDataArgDefinition, org.apache.royale.reflection.DefinitionBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.reflection.MetaDataArgDefinition', org.apache.royale.reflection.MetaDataArgDefinition);


/**
 * @private
 * @type {string}
 */
org.apache.royale.reflection.MetaDataArgDefinition.prototype.org_apache_royale_reflection_MetaDataArgDefinition__value;


/**
 * @export
 * @return {string}
 */
org.apache.royale.reflection.MetaDataArgDefinition.prototype.toString = function() {
  return "arg: key:'" + this._name + "', value:'" + this.org_apache_royale_reflection_MetaDataArgDefinition__value + "'";
};


org.apache.royale.reflection.MetaDataArgDefinition.prototype.get__value = function() {
  return this.org_apache_royale_reflection_MetaDataArgDefinition__value;
};


org.apache.royale.reflection.MetaDataArgDefinition.prototype.get__key = function() {
  return this._name;
};


Object.defineProperties(org.apache.royale.reflection.MetaDataArgDefinition.prototype, /** @lends {org.apache.royale.reflection.MetaDataArgDefinition.prototype} */ {
/**
  * @export
  * @type {string} */
value: {
get: org.apache.royale.reflection.MetaDataArgDefinition.prototype.get__value},
/**
  * @export
  * @type {string} */
key: {
get: org.apache.royale.reflection.MetaDataArgDefinition.prototype.get__key}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.reflection.MetaDataArgDefinition.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MetaDataArgDefinition', qName: 'org.apache.royale.reflection.MetaDataArgDefinition', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.reflection.MetaDataArgDefinition.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'value': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.reflection.MetaDataArgDefinition'},
        'key': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.reflection.MetaDataArgDefinition'}
      };
    },
    methods: function () {
      return {
        'MetaDataArgDefinition': { type: '', declaredBy: 'org.apache.royale.reflection.MetaDataArgDefinition', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.reflection.MetaDataArgDefinition'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.reflection.MetaDataArgDefinition.prototype.ROYALE_COMPILE_FLAGS = 10;
