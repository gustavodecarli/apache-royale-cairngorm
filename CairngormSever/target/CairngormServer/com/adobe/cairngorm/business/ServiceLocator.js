/**
 * Generated by Apache Royale Compiler from com/adobe/cairngorm/business/ServiceLocator.as
 * com.adobe.cairngorm.business.ServiceLocator
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.adobe.cairngorm.business.ServiceLocator');
/* Royale Dependency List: com.adobe.cairngorm.CairngormError,com.adobe.cairngorm.CairngormMessageCodes,com.adobe.cairngorm.business.HTTPServices,com.adobe.cairngorm.business.RemoteObjects,com.adobe.cairngorm.business.WebServices,mx.rpc.AbstractInvoker,mx.rpc.AbstractService,mx.rpc.http.HTTPService,mx.rpc.remoting.RemoteObject,mx.rpc.soap.WebService,org.apache.royale.utils.MXMLDataInterpreter,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('com.adobe.cairngorm.business.IServiceLocator');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {com.adobe.cairngorm.business.IServiceLocator}
 */
com.adobe.cairngorm.business.ServiceLocator = function() {
  com.adobe.cairngorm.business.ServiceLocator.base(this, 'constructor');
  if (com.adobe.cairngorm.business.ServiceLocator._instance) {
    throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.SINGLETON_EXCEPTION, "ServiceLocator");
  }
  com.adobe.cairngorm.business.ServiceLocator._instance = this;
};
goog.inherits(com.adobe.cairngorm.business.ServiceLocator, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('com.adobe.cairngorm.business.ServiceLocator', com.adobe.cairngorm.business.ServiceLocator);


/**
 * @private
 * @type {com.adobe.cairngorm.business.ServiceLocator}
 */
com.adobe.cairngorm.business.ServiceLocator._instance = null;


/**
 * @private
 * @type {com.adobe.cairngorm.business.HTTPServices}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.com_adobe_cairngorm_business_ServiceLocator__httpServices = null;


/**
 * @private
 * @type {com.adobe.cairngorm.business.RemoteObjects}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.com_adobe_cairngorm_business_ServiceLocator__remoteObjects = null;


/**
 * @private
 * @type {com.adobe.cairngorm.business.WebServices}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.com_adobe_cairngorm_business_ServiceLocator__webServices = null;


/**
 * @private
 * @type {number}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.com_adobe_cairngorm_business_ServiceLocator__timeout = 0;


/**
 * Return the ServiceLocator instance.
 * @asreturn the instance.
 * @export
 * @return {com.adobe.cairngorm.business.ServiceLocator}
 */
com.adobe.cairngorm.business.ServiceLocator.getInstance = function() {
  return com.adobe.cairngorm.business.ServiceLocator["instance"];
};


/**
 * <p><strong>Deprecated as of Cairngorm 2.1</strong></p>
 * 
 * Returns the service defined for the id, to allow services to be looked up
 * using the ServiceLocator by a canonical name.
 *
 * <p>If no service exists for the service name, an Error will be thrown.</p>
 * @asparam The id of the service to be returned. This is the id defined in the
 * concrete service locator implementation.
 * @export
 * @param {string} serviceId
 * @return {mx.rpc.AbstractService}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.getService = function(serviceId) {
  return org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_ServiceLocator_getServiceForId(serviceId), mx.rpc.AbstractService, true);
};


/**
 * <p><strong>Deprecated as of Cairngorm 2.1</strong></p>
 * 
 * Returns an AbstractInvoker defined for the id, to allow services to be looked up
 * using the ServiceLocator by a canonical name.
 *
 * <p>If no service exists for the service name, an Error will be thrown.</p>
 * @asparam The id of the service to be returned. This is the id defined in the
 * concrete service locator implementation.
 * @export
 * @param {string} serviceId
 * @return {mx.rpc.AbstractInvoker}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.getInvokerService = function(serviceId) {
  return org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_ServiceLocator_getServiceForId(serviceId), mx.rpc.AbstractInvoker, true);
};


/**
 * Return the HTTPService for the given name.
 * @asparam name the name of the HTTPService
 * @asreturn the HTTPService.
 * @export
 * @param {string} name
 * @return {mx.rpc.http.HTTPService}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.getHTTPService = function(name) {
  return org.apache.royale.utils.Language.as(this.httpServices.getService(name), mx.rpc.http.HTTPService, true);
};


/**
 * Return the RemoteObject for the given name.
 * @asparam name the name of the RemoteObject.
 * @asreturn the RemoteObject.
 * @export
 * @param {string} name
 * @return {mx.rpc.remoting.RemoteObject}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.getRemoteObject = function(name) {
  return org.apache.royale.utils.Language.as(this.remoteObjects.getService(name), mx.rpc.remoting.RemoteObject, true);
};


/**
 * Return the WebService for the given name.
 * @asparam name the name of the WebService.
 * @asreturn the WebService.
 * @export
 * @param {string} name
 * @return {mx.rpc.soap.WebService}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.getWebService = function(name) {
  return org.apache.royale.utils.Language.as(this.webServices.getService(name), mx.rpc.soap.WebService, true);
};


/**
 * Set the credentials for all registered services.
 * @asparam username the username to set.
 * @asparam password the password to set.
 * @export
 * @param {string} username
 * @param {string} password
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.setCredentials = function(username, password) {
  this.httpServices.setCredentials(username, password);
  this.remoteObjects.setCredentials(username, password);
  this.webServices.setCredentials(username, password);
};


/**
 * Set the remote credentials for all registered services.
 * @asparam username the username to set.
 * @asparam password the password to set.
 * @export
 * @param {string} username
 * @param {string} password
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.setRemoteCredentials = function(username, password) {
  this.httpServices.setRemoteCredentials(username, password);
  this.remoteObjects.setRemoteCredentials(username, password);
  this.webServices.setRemoteCredentials(username, password);
};


/**
 * Logs the user out of all registered services.
 * @export
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.logout = function() {
  this.httpServices.release();
  this.remoteObjects.release();
  this.webServices.release();
  this.httpServices.logout();
  this.remoteObjects.logout();
  this.webServices.logout();
};


/**
 * Return the service with the given id.
 * @asparam serviceId the id of the service to return.
 * @asreturn the service.
 * @private
 * @param {string} serviceId
 * @return {Object}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.com_adobe_cairngorm_business_ServiceLocator_getServiceForId = function(serviceId) {
  if (this[serviceId] == null) {
    throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.SERVICE_NOT_FOUND, serviceId);
  }
  return this[serviceId];
};


/**
 * @export
 * @param {Array} descriptor
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.generateMXMLAttributes = function(descriptor) {
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties(this, descriptor);
};


com.adobe.cairngorm.business.ServiceLocator.prototype.get__timeout = function() {
  return this.com_adobe_cairngorm_business_ServiceLocator__timeout;
};


com.adobe.cairngorm.business.ServiceLocator.prototype.set__timeout = function(timeoutTime) {
  this.com_adobe_cairngorm_business_ServiceLocator__timeout = timeoutTime;
};


com.adobe.cairngorm.business.ServiceLocator.prototype.get__httpServices = function() {
  if (this.com_adobe_cairngorm_business_ServiceLocator__httpServices == null) {
    this.com_adobe_cairngorm_business_ServiceLocator__httpServices = new com.adobe.cairngorm.business.HTTPServices();
    this.com_adobe_cairngorm_business_ServiceLocator__httpServices.timeout = this.timeout;
    this.com_adobe_cairngorm_business_ServiceLocator__httpServices.register(this);
  }
  return this.com_adobe_cairngorm_business_ServiceLocator__httpServices;
};


com.adobe.cairngorm.business.ServiceLocator.prototype.get__remoteObjects = function() {
  if (this.com_adobe_cairngorm_business_ServiceLocator__remoteObjects == null) {
    this.com_adobe_cairngorm_business_ServiceLocator__remoteObjects = new com.adobe.cairngorm.business.RemoteObjects();
    this.com_adobe_cairngorm_business_ServiceLocator__remoteObjects.timeout = this.timeout;
    this.com_adobe_cairngorm_business_ServiceLocator__remoteObjects.register(this);
  }
  return this.com_adobe_cairngorm_business_ServiceLocator__remoteObjects;
};


com.adobe.cairngorm.business.ServiceLocator.prototype.get__webServices = function() {
  if (this.com_adobe_cairngorm_business_ServiceLocator__webServices == null) {
    this.com_adobe_cairngorm_business_ServiceLocator__webServices = new com.adobe.cairngorm.business.WebServices();
    this.com_adobe_cairngorm_business_ServiceLocator__webServices.timeout = this.timeout;
    this.com_adobe_cairngorm_business_ServiceLocator__webServices.register(this);
  }
  return this.com_adobe_cairngorm_business_ServiceLocator__webServices;
};


Object.defineProperties(com.adobe.cairngorm.business.ServiceLocator.prototype, /** @lends {com.adobe.cairngorm.business.ServiceLocator.prototype} */ {
/**
  * @export
  * @type {number} */
timeout: {
get: com.adobe.cairngorm.business.ServiceLocator.prototype.get__timeout,
set: com.adobe.cairngorm.business.ServiceLocator.prototype.set__timeout},
/**
  * @type {com.adobe.cairngorm.business.HTTPServices} */
httpServices: {
get: com.adobe.cairngorm.business.ServiceLocator.prototype.get__httpServices},
/**
  * @type {com.adobe.cairngorm.business.RemoteObjects} */
remoteObjects: {
get: com.adobe.cairngorm.business.ServiceLocator.prototype.get__remoteObjects},
/**
  * @type {com.adobe.cairngorm.business.WebServices} */
webServices: {
get: com.adobe.cairngorm.business.ServiceLocator.prototype.get__webServices}}
);


com.adobe.cairngorm.business.ServiceLocator.get__instance = function() {
  if (!com.adobe.cairngorm.business.ServiceLocator._instance) {
    com.adobe.cairngorm.business.ServiceLocator._instance = new com.adobe.cairngorm.business.ServiceLocator();
  }
  return com.adobe.cairngorm.business.ServiceLocator._instance;
};


Object.defineProperties(com.adobe.cairngorm.business.ServiceLocator, /** @lends {com.adobe.cairngorm.business.ServiceLocator} */ {
/**
  * @export
  * @type {com.adobe.cairngorm.business.ServiceLocator} */
instance: {
get: com.adobe.cairngorm.business.ServiceLocator.get__instance}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ServiceLocator', qName: 'com.adobe.cairngorm.business.ServiceLocator', kind: 'class' }], interfaces: [com.adobe.cairngorm.business.IServiceLocator] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        '|instance': { type: 'com.adobe.cairngorm.business.ServiceLocator', access: 'readonly', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator'},
        'timeout': { type: 'int', access: 'readwrite', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator'}
      };
    },
    methods: function () {
      return {
        '|getInstance': { type: 'com.adobe.cairngorm.business.ServiceLocator', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator'},
        'ServiceLocator': { type: '', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator'},
        'getService': { type: 'mx.rpc.AbstractService', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator', parameters: function () { return [ 'String', false ]; }},
        'getInvokerService': { type: 'mx.rpc.AbstractInvoker', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator', parameters: function () { return [ 'String', false ]; }},
        'getHTTPService': { type: 'mx.rpc.http.HTTPService', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator', parameters: function () { return [ 'String', false ]; }},
        'getRemoteObject': { type: 'mx.rpc.remoting.RemoteObject', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator', parameters: function () { return [ 'String', false ]; }},
        'getWebService': { type: 'mx.rpc.soap.WebService', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator', parameters: function () { return [ 'String', false ]; }},
        'setCredentials': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'setRemoteCredentials': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'logout': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator'},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.ServiceLocator', parameters: function () { return [ 'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.adobe.cairngorm.business.ServiceLocator.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.adobe.cairngorm.business.ServiceLocator);

//# sourceMappingURL=./ServiceLocator.js.map
