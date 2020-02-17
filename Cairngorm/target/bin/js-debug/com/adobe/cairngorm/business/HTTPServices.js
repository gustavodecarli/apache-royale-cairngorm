/**
 * Generated by Apache Royale Compiler from com/adobe/cairngorm/business/HTTPServices.as
 * com.adobe.cairngorm.business.HTTPServices
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.adobe.cairngorm.business.HTTPServices');
/* Royale Dependency List: com.adobe.cairngorm.CairngormError,com.adobe.cairngorm.CairngormMessageCodes,com.adobe.cairngorm.business.IServiceLocator,mx.rpc.http.HTTPService,org.apache.royale.utils.Language*/

goog.require('com.adobe.cairngorm.business.AbstractServices');



/**
 * @constructor
 * @extends {com.adobe.cairngorm.business.AbstractServices}
 */
com.adobe.cairngorm.business.HTTPServices = function() {
  com.adobe.cairngorm.business.HTTPServices.base(this, 'constructor');

this.com_adobe_cairngorm_business_HTTPServices_services = {};
};
goog.inherits(com.adobe.cairngorm.business.HTTPServices, com.adobe.cairngorm.business.AbstractServices);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('com.adobe.cairngorm.business.HTTPServices', com.adobe.cairngorm.business.HTTPServices);


/**
 * @private
 * @type {Object}
 */
com.adobe.cairngorm.business.HTTPServices.prototype.com_adobe_cairngorm_business_HTTPServices_services = null;


/**
 * Register the services.
 * @asparam serviceLocator the IServiceLocator instance.
 * @export
 * @override
 */
com.adobe.cairngorm.business.HTTPServices.prototype.register = function(serviceLocator) {
  var /** @type {Array} */ accessors = this.getAccessors(serviceLocator);
  for (var /** @type {number} */ i = 0; i < accessors.length; i++) {
    var /** @type {string} */ name = org.apache.royale.utils.Language.string(accessors[i]);
    var /** @type {Object} */ obj = serviceLocator[name];
    if (org.apache.royale.utils.Language.is(obj, mx.rpc.http.HTTPService)) {
      org.apache.royale.utils.Language.as(obj, mx.rpc.http.HTTPService, true).requestTimeout = this.timeout;
      this.com_adobe_cairngorm_business_HTTPServices_services[name] = obj;
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
com.adobe.cairngorm.business.HTTPServices.prototype.getService = function(name) {
  var /** @type {mx.rpc.http.HTTPService} */ service = /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_HTTPServices_services[name], mx.rpc.http.HTTPService, true);
  if (service == null) {
    throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.HTTP_SERVICE_NOT_FOUND, name);
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
com.adobe.cairngorm.business.HTTPServices.prototype.setCredentials = function(username, password) {
  for (var /** @type {string} */ name in this.com_adobe_cairngorm_business_HTTPServices_services) {
    var /** @type {mx.rpc.http.HTTPService} */ service = /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_HTTPServices_services[name], mx.rpc.http.HTTPService, true);
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
com.adobe.cairngorm.business.HTTPServices.prototype.setRemoteCredentials = function(username, password) {
  for (var /** @type {string} */ name in this.com_adobe_cairngorm_business_HTTPServices_services) {
    var /** @type {mx.rpc.http.HTTPService} */ service = /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_HTTPServices_services[name], mx.rpc.http.HTTPService, true);
    service.setRemoteCredentials(username, password);
  }
};


/**
 * Release the resources held by the service.
 * @export
 * @override
 */
com.adobe.cairngorm.business.HTTPServices.prototype.release = function() {
};


/**
 * Log the user out of all registered services.
 * @export
 * @override
 */
com.adobe.cairngorm.business.HTTPServices.prototype.logout = function() {
  for (var /** @type {string} */ name in this.com_adobe_cairngorm_business_HTTPServices_services) {
    var /** @type {mx.rpc.http.HTTPService} */ service = /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_business_HTTPServices_services[name], mx.rpc.http.HTTPService, true);
    this.serviceLogout(service);
  }
};


/**
 * @protected
 * @override
 */
com.adobe.cairngorm.business.HTTPServices.prototype.serviceLogout = function(service) {
  var /** @type {mx.rpc.http.HTTPService} */ httpService = org.apache.royale.utils.Language.as(service, mx.rpc.http.HTTPService, true);
  if (httpService.channelSet.authenticated) {
    httpService.logout();
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.adobe.cairngorm.business.HTTPServices.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HTTPServices', qName: 'com.adobe.cairngorm.business.HTTPServices', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.adobe.cairngorm.business.HTTPServices.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'register': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.HTTPServices', parameters: function () { return [ 'com.adobe.cairngorm.business.IServiceLocator', false ]; }},
        'getService': { type: 'Object', declaredBy: 'com.adobe.cairngorm.business.HTTPServices', parameters: function () { return [ 'String', false ]; }},
        'setCredentials': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.HTTPServices', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'setRemoteCredentials': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.HTTPServices', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'release': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.HTTPServices'},
        'logout': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.HTTPServices'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.adobe.cairngorm.business.HTTPServices.prototype.ROYALE_COMPILE_FLAGS = 11;

//# sourceMappingURL=./HTTPServices.js.map
