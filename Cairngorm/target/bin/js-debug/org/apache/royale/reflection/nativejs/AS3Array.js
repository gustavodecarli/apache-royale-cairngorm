/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/nativejs/AS3Array.as
 * org.apache.royale.reflection.nativejs.AS3Array
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.nativejs.AS3Array');
/* Royale Dependency List: */



/**
 * Provides data for a stand-in TypeDefinition of the native as3 type for javascript
 * @export
 * @return {Object}
 */
org.apache.royale.reflection.nativejs.AS3Array = function() {
  var /** @type {Object} */ ret = {};
  ret['classRef'] = Array;
  ret['name'] = 'Array';
  ret['NATIVE_TYPE'] = true;
  ret['ROYALE_CLASS_INFO'] = {names:[{name:'Array', qName:'Array', kind:'class', isDynamic:true}]};
  ret['ROYALE_REFLECTION_INFO'] = function() {
    return {'accessors':function() {
      return {'length':{'access':'readwrite', 'type':'uint', 'declaredBy':'Array'}};
    }, 'methods':function() {
      return {'Array':{'declaredBy':'Array', 'type':''}};
    }};
  };
  return ret;
}
