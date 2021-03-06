/**
 * Generated by Apache Royale Compiler from mx/rpc/wsdl/WSDLMessagePart.as
 * mx.rpc.wsdl.WSDLMessagePart
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.wsdl.WSDLMessagePart');
/* Royale Dependency List: QName,XML*/




/**
 * @constructor
 * @param {QName} name
 * @param {QName=} element
 * @param {QName=} type
 */
mx.rpc.wsdl.WSDLMessagePart = function(name, element, type) {
  element = typeof element !== 'undefined' ? element : null;
  type = typeof type !== 'undefined' ? type : null;
  ;
  this.mx_rpc_wsdl_WSDLMessagePart__name = name;
  this.type = type;
  this.element = element;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.wsdl.WSDLMessagePart', mx.rpc.wsdl.WSDLMessagePart);


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLMessagePart.prototype.type;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLMessagePart.prototype.element;


/**
 * @export
 * @type {XML}
 */
mx.rpc.wsdl.WSDLMessagePart.prototype.definition;


/**
 * @export
 * @type {boolean}
 */
mx.rpc.wsdl.WSDLMessagePart.prototype.optional;


/**
 * @private
 * @type {QName}
 */
mx.rpc.wsdl.WSDLMessagePart.prototype.mx_rpc_wsdl_WSDLMessagePart__name;


mx.rpc.wsdl.WSDLMessagePart.prototype.get__name = function() {
  return this.mx_rpc_wsdl_WSDLMessagePart__name;
};


Object.defineProperties(mx.rpc.wsdl.WSDLMessagePart.prototype, /** @lends {mx.rpc.wsdl.WSDLMessagePart.prototype} */ {
/**
  * @export
  * @type {QName} */
name: {
get: mx.rpc.wsdl.WSDLMessagePart.prototype.get__name}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.wsdl.WSDLMessagePart.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'WSDLMessagePart', qName: 'mx.rpc.wsdl.WSDLMessagePart', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.wsdl.WSDLMessagePart.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'type': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLMessagePart */ inst, /** * */ v) {return v !== undefined ? inst.type = v : inst.type;}},
        'element': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLMessagePart */ inst, /** * */ v) {return v !== undefined ? inst.element = v : inst.element;}},
        'definition': { type: 'XML', get_set: function (/** mx.rpc.wsdl.WSDLMessagePart */ inst, /** * */ v) {return v !== undefined ? inst.definition = v : inst.definition;}},
        'optional': { type: 'Boolean', get_set: function (/** mx.rpc.wsdl.WSDLMessagePart */ inst, /** * */ v) {return v !== undefined ? inst.optional = v : inst.optional;}}
      };
    },
    accessors: function () {
      return {
        'name': { type: 'QName', access: 'readonly', declaredBy: 'mx.rpc.wsdl.WSDLMessagePart'}
      };
    },
    methods: function () {
      return {
        'WSDLMessagePart': { type: '', declaredBy: 'mx.rpc.wsdl.WSDLMessagePart', parameters: function () { return [ 'QName', false ,'QName', true ,'QName', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.wsdl.WSDLMessagePart.prototype.ROYALE_COMPILE_FLAGS = 26;
