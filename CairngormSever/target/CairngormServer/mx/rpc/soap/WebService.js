/**
 * Generated by Apache Royale Compiler from mx/rpc/soap/WebService.as
 * mx.rpc.soap.WebService
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.soap.WebService');
/* Royale Dependency List: mx.core.mx_internal,mx.logging.ILogger,mx.logging.Log,mx.rpc.AbstractOperation,mx.rpc.Fault,mx.rpc.events.FaultEvent,mx.rpc.events.WSDLLoadEvent,mx.rpc.http.HTTPService,mx.rpc.soap.LoadEvent,mx.rpc.soap.Operation,mx.rpc.wsdl.WSDL,mx.rpc.wsdl.WSDLLoader,mx.rpc.wsdl.WSDLOperation,mx.rpc.wsdl.WSDLPort,mx.utils.URLUtil,org.apache.royale.utils.Language,XML*/

goog.require('mx.rpc.soap.AbstractWebService');



/**
 * Creates a new WebService.  The destination, if specified, should match
 * an entry in services-config.xml.  If unspecified, the WebService uses
 * the DefaultHTTP destination. The <code>rootURL</code> is required if you
 * intend to use a relative URL to find the WSDL document for this WebService.
 *
 * @asparam destination The destination of the WebService, should match a destination 
 * name in the services-config.xml file.
 *
 * @asparam rootURL The root URL of the WebService.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {mx.rpc.soap.AbstractWebService}
 * @param {string=} destination
 * @param {string=} rootURL
 */
mx.rpc.soap.WebService = function(destination, rootURL) {
  destination = typeof destination !== 'undefined' ? destination : null;
  rootURL = typeof rootURL !== 'undefined' ? rootURL : null;
  mx.rpc.soap.WebService.base(this, 'constructor', destination, rootURL);
  this._ready = false;
  this.mx_rpc_soap_WebService__log = mx.logging.Log.getLogger("mx.rpc.soap.WebService");
};
goog.inherits(mx.rpc.soap.WebService, mx.rpc.soap.AbstractWebService);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.soap.WebService', mx.rpc.soap.WebService);


/**
 * Returns a Boolean value that indicates whether the WebService is ready to
 * load a WSDL (does it have a valid destination or wsdl specified).
 *
 * @asreturn Returns <code>true</code> if the WebService is ready to load a WSDL;
 * otherwise, returns <code>false</code>.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @export
 * @return {boolean}
 */
mx.rpc.soap.WebService.prototype.canLoadWSDL = function() {
  if (this.wsdl)
    return true;
  if (this.destination != mx.rpc.soap.WebService.DEFAULT_DESTINATION_HTTP && this.destination != mx.rpc.soap.WebService.DEFAULT_DESTINATION_HTTPS)
    return true;
  return false;
};


/**
 * Returns an Operation of the given name. If the Operation wasn't
 * created beforehand, a new <code>mx.rpc.soap.Operation</code> is created
 * during this call. Operations are usually accessible by simply naming
 * them after the service variable (<code>myService.someOperation</code>),
 * but if your Operation name happens to match a defined method on the
 * service (like <code>setCredentials</code>), you can use this method to
 * get the Operation instead.
 * @asparam name Name of the Operation.
 * @asreturn Operation that executes for this name.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @export
 * @override
 */
mx.rpc.soap.WebService.prototype.getOperation = function(name) {
  var /** @type {mx.rpc.AbstractOperation} */ op = mx.rpc.soap.WebService.superClass_.getOperation.apply(this, [ name] );
  if (op == null) {
    op = new mx.rpc.soap.Operation(this, name);
    this.http_$$www_adobe_com$2006$flex$mx$internal___operations[name] = op;
    op.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest = this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest;
    op.http_$$www_adobe_com$2006$flex$mx$internal__setKeepLastResultIfNotSet(this._keepLastResult);
    this.initializeOperation(org.apache.royale.utils.Language.as(op, mx.rpc.soap.Operation));
  }
  return op;
};


/**
 * Instructs the WebService to download the WSDL document.  The WebService
 * calls this method automatically WebService when specified in the
 * WebService MXML tag, but it must be called manually if you create the
 * WebService object in ActionScript after you have specified the
 * <code>destination</code> or <code>wsdl</code> property value.
 *
 * @asparam uri If the wsdl hasn't been specified previously, it may be
 * specified here.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @export
 * @param {string=} uri
 */
mx.rpc.soap.WebService.prototype.loadWSDL = function(uri) {
  uri = typeof uri !== 'undefined' ? uri : null;
  if (uri != null) {
    this.wsdl = uri;
  }
  if (!this.wsdl) {
    var /** @type {string} */ message;
    if (!this.useProxy) {
      message = "mustSpecifyWSDLLocation";
      var /** @type {mx.rpc.Fault} */ fault = new mx.rpc.Fault("Client.WSDL", message);
      this.dispatchEvent(mx.rpc.events.FaultEvent.createEvent(fault));
      return;
    } else if ((this.destination == null) || !this.destinationSet || (this.destination == mx.rpc.soap.WebService.DEFAULT_DESTINATION_HTTP) || (this.destination == mx.rpc.soap.WebService.DEFAULT_DESTINATION_HTTPS)) {
      message = "destinationOrWSDLNotSpecified";
      var /** @type {mx.rpc.Fault} */ fault1 = new mx.rpc.Fault("Client.WSDL", message);
      this.dispatchEvent(mx.rpc.events.FaultEvent.createEvent(fault1));
      return;
    }
  }
  if (!this.destinationSet && mx.utils.URLUtil.isHttpsURL(this.wsdl)) {
    this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.destination = mx.rpc.soap.WebService.DEFAULT_DESTINATION_HTTPS;
    this.destinationSet = true;
  }
  this.mx_rpc_soap_WebService__wsdlLoader = new mx.rpc.wsdl.WSDLLoader(this.http_$$www_adobe_com$2006$flex$mx$internal__deriveHTTPService());
  this.mx_rpc_soap_WebService__wsdlLoader.addEventListener(mx.rpc.events.WSDLLoadEvent.LOAD, org.apache.royale.utils.Language.closure(this.http_$$www_adobe_com$2006$flex$mx$internal__wsdlHandler, this, 'http://www.adobe.com/2006/flex/mx/internal::wsdlHandler'));
  this.mx_rpc_soap_WebService__wsdlLoader.addEventListener(mx.rpc.events.FaultEvent.FAULT, org.apache.royale.utils.Language.closure(this.http_$$www_adobe_com$2006$flex$mx$internal__wsdlFaultHandler, this, 'http://www.adobe.com/2006/flex/mx/internal::wsdlFaultHandler'));
  this.mx_rpc_soap_WebService__wsdlFault = false;
  this.mx_rpc_soap_WebService__wsdlLoader.load(this.wsdl);
};


/**
 * Represents an instance of WebService as a String, describing
 * important properties such as the destination id and the set of
 * channels assigned.
 *
 * @asreturn Returns a String representation of the WebService.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @export
 * @return {string}
 */
mx.rpc.soap.WebService.prototype.toString = function() {
  var /** @type {string} */ s = "[WebService ";
  s += " destination=\"" + this.destination + "\"";
  if (this.wsdl)
    s += " wsdl=\"" + this.wsdl + "\"";
  s += " channelSet=\"" + this.channelSet + "\"]";
  return s;
};


/**
 * @export
 * @param {mx.rpc.events.FaultEvent} event
 */
mx.rpc.soap.WebService.prototype.http_$$www_adobe_com$2006$flex$mx$internal__wsdlFaultHandler = function(event) {
  this.mx_rpc_soap_WebService__wsdlFault = true;
  this.dispatchEvent(event);
  this.unEnqueueCalls(event.fault);
};


/**
 * @export
 * @param {mx.rpc.events.WSDLLoadEvent} event
 */
mx.rpc.soap.WebService.prototype.http_$$www_adobe_com$2006$flex$mx$internal__wsdlHandler = function(event) {
  this.mx_rpc_soap_WebService__log.debug("WSDL loaded");
  this.mx_rpc_soap_WebService__wsdl = event.wsdl;
  try {
    var /** @type {mx.rpc.wsdl.WSDLPort} */ wsdlPort = this.mx_rpc_soap_WebService__wsdl.getPort(this.service, this.port);
    this._endpointURI = wsdlPort.endpointURI;
    if (!mx.utils.URLUtil.isHttpURL(this._endpointURI) && event.location != null)
      this._endpointURI = mx.utils.URLUtil.getFullURL(event.location, this._endpointURI);
    this._service = wsdlPort.service.name;
    this._port = wsdlPort.name;
    var foreachiter0_target = this.http_$$www_adobe_com$2006$flex$mx$internal___operations;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var op = foreachiter0_target[foreachiter0];
    {
      this.initializeOperation(op);
    }}
    
    this._ready = true;
    var /** @type {mx.rpc.soap.LoadEvent} */ loadEvent = mx.rpc.soap.LoadEvent.createEvent(event.wsdl, event.location);
    this.dispatchEvent(loadEvent);
    this.unEnqueueCalls();
  } catch (obj) {
    var /** @type {mx.rpc.Fault} */ fault;
    if (org.apache.royale.utils.Language.is(obj, mx.rpc.Fault)) {
      fault = org.apache.royale.utils.Language.as(obj, mx.rpc.Fault);
      var /** @type {mx.rpc.events.FaultEvent} */ faultEvent = mx.rpc.events.FaultEvent.createEvent(fault);
      this.dispatchEvent(faultEvent);
      mx.rpc.soap.WebService.superClass_.unEnqueueCalls.apply(this, [ fault] );
      return;
    } else if (org.apache.royale.utils.Language.is(obj, Error)) {
      var /** @type {Error} */ error = org.apache.royale.utils.Language.as(obj, Error);
      var /** @type {string} */ errorMessage = error.message ? error.message : "";
      var /** @type {string} */ message = "unexpectedException";
      fault = new mx.rpc.Fault("WSDLError", message);
      fault.rootCause = error;
      var /** @type {mx.rpc.events.FaultEvent} */ faultEvent2 = mx.rpc.events.FaultEvent.createEvent(fault);
      this.dispatchEvent(faultEvent2);
      mx.rpc.soap.WebService.superClass_.unEnqueueCalls.apply(this, [ fault] );
      return;
    }
    throw obj;
  }
};


/**
 * @asprivate
 * @export
 * @return {mx.rpc.http.HTTPService}
 */
mx.rpc.soap.WebService.prototype.http_$$www_adobe_com$2006$flex$mx$internal__deriveHTTPService = function() {
  var /** @type {mx.rpc.http.HTTPService} */ httpService = new mx.rpc.http.HTTPService();
  httpService.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest = this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest;
  httpService.http_$$www_adobe_com$2006$flex$mx$internal__setKeepLastResultIfNotSet(this._keepLastResult);
  if (this.destination)
    httpService.destination = this.destination;
  httpService.useProxy = this.useProxy;
  httpService.rootURL = this.rootURL;
  httpService.headers = this.httpHeaders;
  return httpService;
};


/**
 * Initializes a new Operation.
 *
 * @asparam operation The Operation to initialize.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @export
 * @param {mx.rpc.soap.Operation} operation
 */
mx.rpc.soap.WebService.prototype.initializeOperation = function(operation) {
  if (this.mx_rpc_soap_WebService__wsdl != null) {
    var /** @type {mx.rpc.wsdl.WSDLOperation} */ wsdlOp = this.mx_rpc_soap_WebService__wsdl.getOperation(operation.name, this.service, this.port);
    if (operation.endpointURI == null)
      operation.endpointURI = this.endpointURI;
    operation.http_$$www_adobe_com$2006$flex$mx$internal__wsdlOperation = wsdlOp;
  }
};


/**
 * @private
 * @param {string} faultCode
 * @param {string} faultString
 * @param {string=} faultDetail
 */
mx.rpc.soap.WebService.prototype.mx_rpc_soap_WebService_dispatchFault = function(faultCode, faultString, faultDetail) {
  faultDetail = typeof faultDetail !== 'undefined' ? faultDetail : null;
  var /** @type {mx.rpc.Fault} */ fault = new mx.rpc.Fault(faultCode, faultString, faultDetail);
  var /** @type {mx.rpc.events.FaultEvent} */ event = mx.rpc.events.FaultEvent.createEvent(fault);
  this.dispatchEvent(event);
};


/**
 * @private
 * @type {string}
 */
mx.rpc.soap.WebService.prototype.mx_rpc_soap_WebService__wsdlURL;


/**
 * @private
 * @type {mx.logging.ILogger}
 */
mx.rpc.soap.WebService.prototype.mx_rpc_soap_WebService__log;


/**
 * @private
 * @type {boolean}
 */
mx.rpc.soap.WebService.prototype.mx_rpc_soap_WebService__wsdlFault;


/**
 * @private
 * @type {mx.rpc.wsdl.WSDL}
 */
mx.rpc.soap.WebService.prototype.mx_rpc_soap_WebService__wsdl;


/**
 * @private
 * @type {mx.rpc.wsdl.WSDLLoader}
 */
mx.rpc.soap.WebService.prototype.mx_rpc_soap_WebService__wsdlLoader;


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.soap.WebService.DEFAULT_DESTINATION_HTTP = "DefaultHTTP";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.soap.WebService.DEFAULT_DESTINATION_HTTPS = "DefaultHTTPS";


mx.rpc.soap.WebService.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__wsdlFault = function() {
  return this.mx_rpc_soap_WebService__wsdlFault;
};


mx.rpc.soap.WebService.prototype.get__wsdl = function() {
  return this.mx_rpc_soap_WebService__wsdlURL;
};


mx.rpc.soap.WebService.prototype.set__wsdl = function(w) {
  this.mx_rpc_soap_WebService__wsdlURL = w;
};


Object.defineProperties(mx.rpc.soap.WebService.prototype, /** @lends {mx.rpc.soap.WebService.prototype} */ {
/**
  * @export
  * @type {boolean} */
http_$$www_adobe_com$2006$flex$mx$internal__wsdlFault: {
get: mx.rpc.soap.WebService.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__wsdlFault},
/**
  * @export
  * @type {string} */
wsdl: {
get: mx.rpc.soap.WebService.prototype.get__wsdl,
set: mx.rpc.soap.WebService.prototype.set__wsdl}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.soap.WebService.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'WebService', qName: 'mx.rpc.soap.WebService', kind: 'class', isDynamic: true}] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.soap.WebService.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::wsdlFault': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.rpc.soap.WebService'},
        'wsdl': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.soap.WebService'}
      };
    },
    methods: function () {
      return {
        'WebService': { type: '', declaredBy: 'mx.rpc.soap.WebService', parameters: function () { return [ 'String', true ,'String', true ]; }},
        'canLoadWSDL': { type: 'Boolean', declaredBy: 'mx.rpc.soap.WebService'},
        'getOperation': { type: 'mx.rpc.AbstractOperation', declaredBy: 'mx.rpc.soap.WebService', parameters: function () { return [ 'String', false ]; }},
        'loadWSDL': { type: 'void', declaredBy: 'mx.rpc.soap.WebService', parameters: function () { return [ 'String', true ]; }},
        'toString': { type: 'String', declaredBy: 'mx.rpc.soap.WebService'},
        'http://www.adobe.com/2006/flex/mx/internal::wsdlFaultHandler': { type: 'void', declaredBy: 'mx.rpc.soap.WebService', parameters: function () { return [ 'mx.rpc.events.FaultEvent', false ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::wsdlHandler': { type: 'void', declaredBy: 'mx.rpc.soap.WebService', parameters: function () { return [ 'mx.rpc.events.WSDLLoadEvent', false ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::deriveHTTPService': { type: 'mx.rpc.http.HTTPService', declaredBy: 'mx.rpc.soap.WebService'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.soap.WebService.prototype.ROYALE_COMPILE_FLAGS = 26;
