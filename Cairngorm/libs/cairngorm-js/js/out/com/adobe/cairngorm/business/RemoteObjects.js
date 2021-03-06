/**
 * Generated by Apache Royale Compiler from com/adobe/cairngorm/business/RemoteObjects.as
 * com.adobe.cairngorm.business.RemoteObjects
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('com.adobe.cairngorm.business.RemoteObjects');

goog.require('com.adobe.cairngorm.CairngormError');
goog.require('com.adobe.cairngorm.CairngormMessageCodes');
goog.require('com.adobe.cairngorm.business.AbstractServices');
goog.require('com.adobe.cairngorm.business.IServiceLocator');
goog.require('mx.rpc.remoting.RemoteObject');
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 * @extends {com.adobe.cairngorm.business.AbstractServices}
 */
com.adobe.cairngorm.business.RemoteObjects = function() {
  com.adobe.cairngorm.business.RemoteObjects.base(this, 'constructor');

this.com_adobe_cairngorm_business_RemoteObjects_services = {};
};
goog.inherits(com.adobe.cairngorm.business.RemoteObjects, com.adobe.cairngorm.business.AbstractServices);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('com.adobe.cairngorm.business.RemoteObjects', com.adobe.cairngorm.business.RemoteObjects);


/**
 * @private
 * @type {Object}
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.com_adobe_cairngorm_business_RemoteObjects_services = null;


/**
 * Register the services.
 * @asparam serviceLocator the IServiceLocator instance.
 * @export
 * @override
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.register = function(serviceLocator) {
  var /** @type {Array} */ accessors = this.getAccessors(serviceLocator);
  for (var /** @type {number} */ i = 0; i < accessors.length; i++) {
    var /** @type {string} */ name = org.apache.royale.utils.Language.string(accessors[i]);
    var /** @type {Object} */ obj = serviceLocator[name];
    if (org.apache.royale.utils.Language.is(obj, mx.rpc.remoting.RemoteObject)) {
      org.apache.royale.utils.Language.as(obj, mx.rpc.remoting.RemoteObject, true).requestTimeout = this.timeout;
      this.com_adobe_cairngorm_business_RemoteObjects_services[name] = obj;
    }
  }
};


/**
 * Return the service with the given name.
 * @asparam name the name of the service.
 * @asreturn the service.
 * @export
 * @override
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.getService = function(name) {
  var /** @type {mx.rpc.remoting.RemoteObject} */ service = /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_RemoteObjects_services[name], mx.rpc.remoting.RemoteObject, true);
  if (service == null) {
    throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.REMOTE_OBJECT_NOT_FOUND, name);
  }
  return service;
};


/**
 * Set the credentials for all registered services.
 * @asparam username the username to set.
 * @asparam password the password to set.
 * @export
 * @override
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.setCredentials = function(username, password) {
  for (var /** @type {string} */ name in this.com_adobe_cairngorm_business_RemoteObjects_services) {
    var /** @type {mx.rpc.remoting.RemoteObject} */ service = /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_RemoteObjects_services[name], mx.rpc.remoting.RemoteObject, true);
    service.setCredentials(username, password);
  }
};


/**
 * Set the remote credentials for all registered services.
 * @asparam username the username to set.
 * @asparam password the password to set.
 * @export
 * @override
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.setRemoteCredentials = function(username, password) {
  for (var /** @type {string} */ name in this.com_adobe_cairngorm_business_RemoteObjects_services) {
    var /** @type {mx.rpc.remoting.RemoteObject} */ service = /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_RemoteObjects_services[name], mx.rpc.remoting.RemoteObject, true);
    service.setRemoteCredentials(username, password);
  }
};


/**
 * Release the resources held by the service.
 * @export
 * @override
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.release = function() {
};


/**
 * Log the user out of all registered services.
 * @export
 * @override
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.logout = function() {
  for (var /** @type {string} */ name in this.com_adobe_cairngorm_business_RemoteObjects_services) {
    var /** @type {mx.rpc.remoting.RemoteObject} */ service = /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_RemoteObjects_services[name], mx.rpc.remoting.RemoteObject, true);
    this.serviceLogout(service);
  }
};


/**
 * @protected
 * @override
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.serviceLogout = function(service) {
  var /** @type {mx.rpc.remoting.RemoteObject} */ remoteService = org.apache.royale.utils.Language.as(service, mx.rpc.remoting.RemoteObject, true);
  if (remoteService.channelSet.authenticated) {
    remoteService.logout();
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'RemoteObjects', qName: 'com.adobe.cairngorm.business.RemoteObjects', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'register': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.RemoteObjects', parameters: function () { return [ 'com.adobe.cairngorm.business.IServiceLocator', false ]; }},
        'getService': { type: 'Object', declaredBy: 'com.adobe.cairngorm.business.RemoteObjects', parameters: function () { return [ 'String', false ]; }},
        'setCredentials': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.RemoteObjects', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'setRemoteCredentials': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.RemoteObjects', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'release': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.RemoteObjects'},
        'logout': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.RemoteObjects'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.adobe.cairngorm.business.RemoteObjects.prototype.ROYALE_COMPILE_FLAGS = 11;

//# sourceMappingURL=./RemoteObjects.js.map