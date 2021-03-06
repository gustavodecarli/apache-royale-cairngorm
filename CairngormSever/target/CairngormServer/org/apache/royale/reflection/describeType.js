/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/describeType.as
 * org.apache.royale.reflection.describeType
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.describeType');
/* Royale Dependency List: org.apache.royale.reflection.ExtraData,org.apache.royale.reflection.TypeDefinition,org.apache.royale.reflection.getDefinitionByName,org.apache.royale.reflection.getQualifiedClassName,org.apache.royale.utils.Language*/




/**
 *  The equivalent of flash.utils.describeType.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  
 *  @royaleignorecoercion Class
 * @export
 * @param {Object} value
 * @return {org.apache.royale.reflection.TypeDefinition}
 */
org.apache.royale.reflection.describeType = function(value) {
  
  
/**
 * @const
 * @type {string}
 */
var qname = org.apache.royale.reflection.getQualifiedClassName(value);
  var /** @type {Object} */ clazz = value ?  /** @type {Object|null} */ ((value.prototype ? value : value.constructor)) : null;
  var /** @type {Object} */ data = value.ROYALE_CLASS_INFO || (value.prototype ? value.prototype.ROYALE_CLASS_INFO : null);
  if (!data) {
    if (org.apache.royale.reflection.ExtraData.hasData(qname)) {
      data = org.apache.royale.reflection.ExtraData.getData(qname)['ROYALE_CLASS_INFO'];
    } else {
      var /** @type {*} */ key = (value.constructor && value.constructor != Function && !org.apache.royale.utils.Language.isSynthType(value)) ? value.constructor : value;
      data = org.apache.royale.reflection.ExtraData.hasData(key) ? org.apache.royale.reflection.ExtraData.getData(key)['ROYALE_CLASS_INFO'] : null;
      if (!data) {
        key = org.apache.royale.reflection.getDefinitionByName(qname);
        data = org.apache.royale.reflection.ExtraData.hasData(key) ? org.apache.royale.reflection.ExtraData.getData(key)['ROYALE_CLASS_INFO'] : null;
      }
    }
  }
  return org.apache.royale.reflection.TypeDefinition.getDefinition(qname, data, clazz);
}
