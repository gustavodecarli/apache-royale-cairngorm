/**
 * Generated by Apache Royale Compiler from mx/rpc/wsdl/WSDLConstants.as
 * mx.rpc.wsdl.WSDLConstants
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.wsdl.WSDLConstants');
/* Royale Dependency List: Namespace,QName,XML,mx.utils.URLUtil*/




/**
 * @constructor
 * @param {Namespace=} wsdlNS
 * @param {Namespace=} soapNS
 */
mx.rpc.wsdl.WSDLConstants = function(wsdlNS, soapNS) {
  wsdlNS = typeof wsdlNS !== 'undefined' ? wsdlNS : null;
  soapNS = typeof soapNS !== 'undefined' ? soapNS : null;
  ;
  if (wsdlNS == null)
    wsdlNS = new Namespace(mx.rpc.wsdl.WSDLConstants.WSDL_PREFIX, mx.rpc.wsdl.WSDLConstants.WSDL_URI);
  if (soapNS == null)
    soapNS = new Namespace(mx.rpc.wsdl.WSDLConstants.WSDL_SOAP_PREFIX, mx.rpc.wsdl.WSDLConstants.WSDL_SOAP_URI);
  this.mx_rpc_wsdl_WSDLConstants__wsdlNS = wsdlNS;
  this.mx_rpc_wsdl_WSDLConstants__soapNS = soapNS;
  this.definitionsQName = new QName(this.wsdlURI, "definitions");
  this.importQName = new QName(this.wsdlURI, "import");
  this.typesQName = new QName(this.wsdlURI, "types");
  this.messageQName = new QName(this.wsdlURI, "message");
  this.portTypeQName = new QName(this.wsdlURI, "portType");
  this.bindingQName = new QName(this.wsdlURI, "binding");
  this.serviceQName = new QName(this.wsdlURI, "service");
  this.documentationQName = new QName(this.wsdlURI, "documentation");
  this.portQName = new QName(this.wsdlURI, "port");
  this.operationQName = new QName(this.wsdlURI, "operation");
  this.inputQName = new QName(this.wsdlURI, "input");
  this.outputQName = new QName(this.wsdlURI, "output");
  this.partQName = new QName(this.wsdlURI, "part");
  this.faultQName = new QName(this.wsdlURI, "fault");
  this.wsdlArrayTypeQName = new QName(this.wsdlURI, "arrayType");
  this.soapAddressQName = new QName(this.soapURI, "address");
  this.soapBindingQName = new QName(this.soapURI, "binding");
  this.soapOperationQName = new QName(this.soapURI, "operation");
  this.soapBodyQName = new QName(this.soapURI, "body");
  this.soapFaultQName = new QName(this.soapURI, "fault");
  this.soapHeaderQName = new QName(this.soapURI, "header");
  this.soapHeaderFaultQName = new QName(this.soapURI, "headerfault");
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.wsdl.WSDLConstants', mx.rpc.wsdl.WSDLConstants);


/**
 * @export
 * @param {XML} xml
 * @return {mx.rpc.wsdl.WSDLConstants}
 */
mx.rpc.wsdl.WSDLConstants.getConstants = function(xml) {
  var /** @type {Namespace} */ wsdlNS;
  var /** @type {Namespace} */ soapNS;
  if (xml != null) {
    var /** @type {Array} */ nsArray = xml.inScopeNamespaces();
    var foreachiter0_target = nsArray;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var ns = foreachiter0_target[foreachiter0];
    {
      if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.wsdl.WSDLConstants.WSDL_URI)) {
        wsdlNS = ns;
      } else if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.wsdl.WSDLConstants.WSDL20_URI)) {
        wsdlNS = ns;
      }
      if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.wsdl.WSDLConstants.WSDL_SOAP_URI)) {
        soapNS = ns;
      } else if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.wsdl.WSDLConstants.WSDL20_SOAP_URI)) {
        soapNS = ns;
      } else if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.wsdl.WSDLConstants.WSDL20_SOAP12_URI)) {
        soapNS = ns;
      }
    }}
    
  }
  if (wsdlNS == null)
    wsdlNS = new Namespace(mx.rpc.wsdl.WSDLConstants.WSDL_PREFIX, mx.rpc.wsdl.WSDLConstants.WSDL_URI);
  if (soapNS == null)
    soapNS = new Namespace(mx.rpc.wsdl.WSDLConstants.WSDL_SOAP_PREFIX, mx.rpc.wsdl.WSDLConstants.WSDL_SOAP_URI);
  if (mx.rpc.wsdl.WSDLConstants.constantsCache == null)
    mx.rpc.wsdl.WSDLConstants.constantsCache = {};
  var /** @type {mx.rpc.wsdl.WSDLConstants} */ constants = mx.rpc.wsdl.WSDLConstants.constantsCache[wsdlNS.uri];
  if (constants == null) {
    constants = new mx.rpc.wsdl.WSDLConstants(wsdlNS, soapNS);
    mx.rpc.wsdl.WSDLConstants.constantsCache[wsdlNS.uri] = constants;
  }
  return constants;
};


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.definitionsQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.typesQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.messageQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.portTypeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.bindingQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.serviceQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.importQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.documentationQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.portQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.operationQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.inputQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.outputQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.partQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.faultQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.wsdlArrayTypeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.soapAddressQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.soapBindingQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.soapOperationQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.soapBodyQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.soapFaultQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.soapHeaderQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.wsdl.WSDLConstants.prototype.soapHeaderFaultQName;


/**
 * @private
 * @type {Namespace}
 */
mx.rpc.wsdl.WSDLConstants.prototype.mx_rpc_wsdl_WSDLConstants__soapNS;


/**
 * @private
 * @type {Namespace}
 */
mx.rpc.wsdl.WSDLConstants.prototype.mx_rpc_wsdl_WSDLConstants__wsdlNS;


/**
 * @private
 * @type {Object}
 */
mx.rpc.wsdl.WSDLConstants.constantsCache;


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.SOAP_HTTP_URI = "http://schemas.xmlsoap.org/soap/http/";


/**
 * @export
 * @const
 * @type {number}
 */
mx.rpc.wsdl.WSDLConstants.MODE_IN = 0;


/**
 * @export
 * @const
 * @type {number}
 */
mx.rpc.wsdl.WSDLConstants.MODE_OUT = 1;


/**
 * @export
 * @const
 * @type {number}
 */
mx.rpc.wsdl.WSDLConstants.MODE_FAULT = 2;


/**
 * @export
 * @const
 * @type {number}
 */
mx.rpc.wsdl.WSDLConstants.MODE_HEADER = 3;


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL_URI = "http://schemas.xmlsoap.org/wsdl/";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL_SOAP_URI = "http://schemas.xmlsoap.org/wsdl/soap/";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL_SOAP12_URI = "http://schemas.xmlsoap.org/wsdl/soap12/";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL_HTTP_URI = "http://schemas.xmlsoap.org/wsdl/http/";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL20_URI = "http://www.w3.org/2006/01/wsdl";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL20_SOAP_URI = "http://www.w3.org/2006/01/wsdl/soap";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL20_SOAP12_URI = "http://www.w3.org/2006/01/wsdl/soap";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL20_HTTP_URI = "http://www.w3.org/2006/01/wsdl/http";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL_PREFIX = "wsdl";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.WSDL_SOAP_PREFIX = "wsoap";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.DEFAULT_STYLE = "document";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.wsdl.WSDLConstants.DEFAULT_WSDL_VERSION = "1.1";


mx.rpc.wsdl.WSDLConstants.prototype.get__soapURI = function() {
  return this.soapNamespace.uri;
};


mx.rpc.wsdl.WSDLConstants.prototype.get__wsdlURI = function() {
  return this.wsdlNamespace.uri;
};


mx.rpc.wsdl.WSDLConstants.prototype.get__soapNamespace = function() {
  return this.mx_rpc_wsdl_WSDLConstants__soapNS;
};


mx.rpc.wsdl.WSDLConstants.prototype.get__wsdlNamespace = function() {
  return this.mx_rpc_wsdl_WSDLConstants__wsdlNS;
};


Object.defineProperties(mx.rpc.wsdl.WSDLConstants.prototype, /** @lends {mx.rpc.wsdl.WSDLConstants.prototype} */ {
/**
  * @export
  * @type {string} */
soapURI: {
get: mx.rpc.wsdl.WSDLConstants.prototype.get__soapURI},
/**
  * @export
  * @type {string} */
wsdlURI: {
get: mx.rpc.wsdl.WSDLConstants.prototype.get__wsdlURI},
/**
  * @export
  * @type {Namespace} */
soapNamespace: {
get: mx.rpc.wsdl.WSDLConstants.prototype.get__soapNamespace},
/**
  * @export
  * @type {Namespace} */
wsdlNamespace: {
get: mx.rpc.wsdl.WSDLConstants.prototype.get__wsdlNamespace}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.wsdl.WSDLConstants.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'WSDLConstants', qName: 'mx.rpc.wsdl.WSDLConstants', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.wsdl.WSDLConstants.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'definitionsQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.definitionsQName = v : inst.definitionsQName;}},
        'typesQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.typesQName = v : inst.typesQName;}},
        'messageQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.messageQName = v : inst.messageQName;}},
        'portTypeQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.portTypeQName = v : inst.portTypeQName;}},
        'bindingQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.bindingQName = v : inst.bindingQName;}},
        'serviceQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.serviceQName = v : inst.serviceQName;}},
        'importQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.importQName = v : inst.importQName;}},
        'documentationQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.documentationQName = v : inst.documentationQName;}},
        'portQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.portQName = v : inst.portQName;}},
        'operationQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.operationQName = v : inst.operationQName;}},
        'inputQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.inputQName = v : inst.inputQName;}},
        'outputQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.outputQName = v : inst.outputQName;}},
        'partQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.partQName = v : inst.partQName;}},
        'faultQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.faultQName = v : inst.faultQName;}},
        'wsdlArrayTypeQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.wsdlArrayTypeQName = v : inst.wsdlArrayTypeQName;}},
        'soapAddressQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.soapAddressQName = v : inst.soapAddressQName;}},
        'soapBindingQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.soapBindingQName = v : inst.soapBindingQName;}},
        'soapOperationQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.soapOperationQName = v : inst.soapOperationQName;}},
        'soapBodyQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.soapBodyQName = v : inst.soapBodyQName;}},
        'soapFaultQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.soapFaultQName = v : inst.soapFaultQName;}},
        'soapHeaderQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.soapHeaderQName = v : inst.soapHeaderQName;}},
        'soapHeaderFaultQName': { type: 'QName', get_set: function (/** mx.rpc.wsdl.WSDLConstants */ inst, /** * */ v) {return v !== undefined ? inst.soapHeaderFaultQName = v : inst.soapHeaderFaultQName;}}
      };
    },
    accessors: function () {
      return {
        'soapURI': { type: 'String', access: 'readonly', declaredBy: 'mx.rpc.wsdl.WSDLConstants'},
        'wsdlURI': { type: 'String', access: 'readonly', declaredBy: 'mx.rpc.wsdl.WSDLConstants'},
        'soapNamespace': { type: 'Namespace', access: 'readonly', declaredBy: 'mx.rpc.wsdl.WSDLConstants'},
        'wsdlNamespace': { type: 'Namespace', access: 'readonly', declaredBy: 'mx.rpc.wsdl.WSDLConstants'}
      };
    },
    methods: function () {
      return {
        'WSDLConstants': { type: '', declaredBy: 'mx.rpc.wsdl.WSDLConstants', parameters: function () { return [ 'Namespace', true ,'Namespace', true ]; }},
        '|getConstants': { type: 'mx.rpc.wsdl.WSDLConstants', declaredBy: 'mx.rpc.wsdl.WSDLConstants', parameters: function () { return [ 'XML', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.wsdl.WSDLConstants.prototype.ROYALE_COMPILE_FLAGS = 26;
