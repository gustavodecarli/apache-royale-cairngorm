/**
 * Generated by Apache Royale Compiler from mx/rpc/mxml/IMXMLSupport.as
 * mx.rpc.mxml.IMXMLSupport
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.mxml.IMXMLSupport');
/* Royale Dependency List: XML*/



/**
 * @interface
 */
mx.rpc.mxml.IMXMLSupport = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.mxml.IMXMLSupport', mx.rpc.mxml.IMXMLSupport);
/**  * @type {string}
 */mx.rpc.mxml.IMXMLSupport.prototype.concurrency;
/**  * @type {boolean}
 */mx.rpc.mxml.IMXMLSupport.prototype.showBusyCursor;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.mxml.IMXMLSupport.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IMXMLSupport', qName: 'mx.rpc.mxml.IMXMLSupport', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.mxml.IMXMLSupport.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'concurrency': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.mxml.IMXMLSupport'},
        'showBusyCursor': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.mxml.IMXMLSupport'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.mxml.IMXMLSupport.prototype.ROYALE_COMPILE_FLAGS = 26;
