/**
 * Generated by Apache Royale Compiler from mx/rpc/soap/ISOAPEncoder.as
 * mx.rpc.soap.ISOAPEncoder
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.soap.ISOAPEncoder');
/* Royale Dependency List: XML,mx.rpc.wsdl.WSDLOperation*/

goog.require('mx.rpc.xml.IXMLEncoder');



/**
 * @interface
 * @extends {mx.rpc.xml.IXMLEncoder}
 */
mx.rpc.soap.ISOAPEncoder = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.soap.ISOAPEncoder', mx.rpc.soap.ISOAPEncoder);
/**  * @type {boolean}
 */mx.rpc.soap.ISOAPEncoder.prototype.ignoreWhitespace;
/**  * @type {mx.rpc.wsdl.WSDLOperation}
 */mx.rpc.soap.ISOAPEncoder.prototype.wsdlOperation;
/**
 * Creates a SOAP-encoded request to an operation from the given input
 * parameters and headers.
 * 
 * @asparam args values to be encoded in the body of the SOAP request.
 * 
 * @asparam headers header values to be encoded in the SOAP envelope.
 * 
 * @asreturn SOAP-encoded XML representation of the passed in arguments and headers.
 * @export
 * @param {*=} args
 * @param {Array=} headers
 * @return {XML}
 */
mx.rpc.soap.ISOAPEncoder.prototype.encodeRequest = function(args, headers) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.soap.ISOAPEncoder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ISOAPEncoder', qName: 'mx.rpc.soap.ISOAPEncoder', kind: 'interface' }], interfaces: [mx.rpc.xml.IXMLEncoder] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.soap.ISOAPEncoder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'ignoreWhitespace': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.soap.ISOAPEncoder'},
        'wsdlOperation': { type: 'mx.rpc.wsdl.WSDLOperation', access: 'readwrite', declaredBy: 'mx.rpc.soap.ISOAPEncoder'}
      };
    },
    methods: function () {
      return {
        'encodeRequest': { type: 'XML', declaredBy: 'mx.rpc.soap.ISOAPEncoder', parameters: function () { return [ '*', true ,'Array', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.soap.ISOAPEncoder.prototype.ROYALE_COMPILE_FLAGS = 26;