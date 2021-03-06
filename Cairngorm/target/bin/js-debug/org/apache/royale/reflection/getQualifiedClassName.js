/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/getQualifiedClassName.as
 * org.apache.royale.reflection.getQualifiedClassName
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.getQualifiedClassName');
/* Royale Dependency List: org.apache.royale.reflection.ExtraData,org.apache.royale.utils.Language*/




/**
 *  The equivalent of flash.utils.getQualifiedClassName.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {*} value
 * @return {string}
 */
org.apache.royale.reflection.getQualifiedClassName = function(value) {
  
  var /** @type {string} */ defName = typeof(value);
  if (defName === "string")
    return "String";
  if (defName === "number") {
    if (value === value >> 0 && org.apache.royale.reflection.ExtraData.hasData('int') && (value >= -268435456 && value <= 268435455))
      return 'int';
    return "Number";
  }
  if (defName === "boolean")
    return "Boolean";
  if (defName === "undefined")
    return null;
  if (value === null)
    return null;
  if (Array.isArray(value)) {
    if (org.apache.royale.utils.Language.SYNTH_TAG_FIELD in value)
      return org.apache.royale.utils.Language.string(value[org.apache.royale.utils.Language.SYNTH_TAG_FIELD]['type']);
    return "Array";
  }
  var /** @type {Object} */ classInfo = value.ROYALE_CLASS_INFO;
  if (!classInfo) {
    if (!value.prototype) {
      if (org.apache.royale.reflection.ExtraData.hasData(value.constructor)) {
        classInfo = org.apache.royale.reflection.ExtraData.getData(value.constructor)['ROYALE_CLASS_INFO'];
      } else {
        if (org.apache.royale.utils.Language.isSynthType(value.constructor)) {
          return org.apache.royale.utils.Language.string(value.constructor['type']);
        }
      }
    } else {
      classInfo = value.prototype.ROYALE_CLASS_INFO;
      if (!classInfo) {
        if (org.apache.royale.reflection.ExtraData.hasData(value)) {
          classInfo = org.apache.royale.reflection.ExtraData.getData(value)['ROYALE_CLASS_INFO'];
        }
      }
      if (!classInfo) {
        if (org.apache.royale.utils.Language.isSynthType(value)) {
          return org.apache.royale.utils.Language.string(value['type']);
        }
      }
    }
    if (!classInfo) {
      return "Object";
    }
  }
  return org.apache.royale.utils.Language.string(classInfo.names[0].qName);
}
