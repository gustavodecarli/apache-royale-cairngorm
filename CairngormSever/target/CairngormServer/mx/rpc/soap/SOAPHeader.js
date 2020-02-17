/**
 * Generated by Apache Royale Compiler from mx/rpc/soap/SOAPHeader.as
 * mx.rpc.soap.SOAPHeader
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.soap.SOAPHeader');
/* Royale Dependency List: QName,XML*/




/**
 * Constructs a new SOAPHeader. The qualified name and content for the
 * SOAP header are required.
 *
 * @asparam qname The qualified name of the SOAP header.
 *
 * @asparam content The content to send for the header value.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @param {QName} qname
 * @param {Object} content
 */
mx.rpc.soap.SOAPHeader = function(qname, content) {
  ;
  this.qname = qname;
  this.content = content;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.soap.SOAPHeader', mx.rpc.soap.SOAPHeader);


/**
 * @export
 * @type {Object}
 */
mx.rpc.soap.SOAPHeader.prototype.content;


/**
 * @export
 * @type {QName}
 */
mx.rpc.soap.SOAPHeader.prototype.qname;


/**
 * @export
 * @type {QName}
 */
mx.rpc.soap.SOAPHeader.prototype.xmlType;


/**
 * @export
 * @type {boolean}
 */
mx.rpc.soap.SOAPHeader.prototype.mustUnderstand;


/**
 * @export
 * @type {string}
 */
mx.rpc.soap.SOAPHeader.prototype.role;


/**
 * @asprivate
 * @export
 * @return {string}
 */
mx.rpc.soap.SOAPHeader.prototype.toString = function() {
  return this.qname + ", " + this.content + ", " + this.role;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.soap.SOAPHeader.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SOAPHeader', qName: 'mx.rpc.soap.SOAPHeader', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.soap.SOAPHeader.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'content': { type: 'Object', get_set: function (/** mx.rpc.soap.SOAPHeader */ inst, /** * */ v) {return v !== undefined ? inst.content = v : inst.content;}},
        'qname': { type: 'QName', get_set: function (/** mx.rpc.soap.SOAPHeader */ inst, /** * */ v) {return v !== undefined ? inst.qname = v : inst.qname;}},
        'xmlType': { type: 'QName', get_set: function (/** mx.rpc.soap.SOAPHeader */ inst, /** * */ v) {return v !== undefined ? inst.xmlType = v : inst.xmlType;}},
        'mustUnderstand': { type: 'Boolean', get_set: function (/** mx.rpc.soap.SOAPHeader */ inst, /** * */ v) {return v !== undefined ? inst.mustUnderstand = v : inst.mustUnderstand;}},
        'role': { type: 'String', get_set: function (/** mx.rpc.soap.SOAPHeader */ inst, /** * */ v) {return v !== undefined ? inst.role = v : inst.role;}}
      };
    },
    methods: function () {
      return {
        'SOAPHeader': { type: '', declaredBy: 'mx.rpc.soap.SOAPHeader', parameters: function () { return [ 'QName', false ,'Object', false ]; }},
        'toString': { type: 'String', declaredBy: 'mx.rpc.soap.SOAPHeader'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.soap.SOAPHeader.prototype.ROYALE_COMPILE_FLAGS = 26;