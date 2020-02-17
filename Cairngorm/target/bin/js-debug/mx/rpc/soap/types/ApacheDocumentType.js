/**
 * Generated by Apache Royale Compiler from mx/rpc/soap/types/ApacheDocumentType.as
 * mx.rpc.soap.types.ApacheDocumentType
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.soap.types.ApacheDocumentType');
/* Royale Dependency List: QName,XML,mx.rpc.soap.SOAPDecoder,mx.rpc.soap.SOAPEncoder,mx.utils.object_proxy*/

goog.require('mx.rpc.soap.types.ICustomSOAPType');



/**
 * @constructor
 * @implements {mx.rpc.soap.types.ICustomSOAPType}
 */
mx.rpc.soap.types.ApacheDocumentType = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.soap.types.ApacheDocumentType', mx.rpc.soap.types.ApacheDocumentType);


/**
 * @export
 * @param {mx.rpc.soap.SOAPEncoder} encoder
 * @param {XML} parent
 * @param {QName} name
 * @param {*} value
 * @param {XML=} restriction
 */
mx.rpc.soap.types.ApacheDocumentType.prototype.encode = function(encoder, parent, name, value, restriction) {
  restriction = typeof restriction !== 'undefined' ? restriction : null;
  encoder.setValue(parent, value);
};


/**
 * @export
 * @param {mx.rpc.soap.SOAPDecoder} decoder
 * @param {*} parent
 * @param {*} name
 * @param {*} value
 * @param {XML=} restriction
 */
mx.rpc.soap.types.ApacheDocumentType.prototype.decode = function(decoder, parent, name, value, restriction) {
  restriction = typeof restriction !== 'undefined' ? restriction : null;
  decoder.setValue(parent, name, XML.conversion(value).elements());
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.soap.types.ApacheDocumentType.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ApacheDocumentType', qName: 'mx.rpc.soap.types.ApacheDocumentType', kind: 'class' }], interfaces: [mx.rpc.soap.types.ICustomSOAPType] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.soap.types.ApacheDocumentType.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'ApacheDocumentType': { type: '', declaredBy: 'mx.rpc.soap.types.ApacheDocumentType'},
        'encode': { type: 'void', declaredBy: 'mx.rpc.soap.types.ApacheDocumentType', parameters: function () { return [ 'mx.rpc.soap.SOAPEncoder', false ,'XML', false ,'QName', false ,'*', false ,'XML', true ]; }},
        'decode': { type: 'void', declaredBy: 'mx.rpc.soap.types.ApacheDocumentType', parameters: function () { return [ 'mx.rpc.soap.SOAPDecoder', false ,'*', false ,'*', false ,'*', false ,'XML', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.soap.types.ApacheDocumentType.prototype.ROYALE_COMPILE_FLAGS = 26;
