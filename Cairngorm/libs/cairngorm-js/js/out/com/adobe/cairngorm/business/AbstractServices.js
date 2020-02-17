/**
 * Generated by Apache Royale Compiler from com/adobe/cairngorm/business/AbstractServices.as
 * com.adobe.cairngorm.business.AbstractServices
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('com.adobe.cairngorm.business.AbstractServices');

goog.require('com.adobe.cairngorm.CairngormError');
goog.require('com.adobe.cairngorm.CairngormMessageCodes');
goog.require('com.adobe.cairngorm.business.IServiceLocator');
goog.require('org.apache.royale.reflection.AccessorDefinition');
goog.require('org.apache.royale.reflection.TypeDefinition');
goog.require('org.apache.royale.reflection.describeType');
goog.require('com.adobe.cairngorm.business.IServices');



/**
 * @constructor
 * @implements {com.adobe.cairngorm.business.IServices}
 */
com.adobe.cairngorm.business.AbstractServices = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('com.adobe.cairngorm.business.AbstractServices', com.adobe.cairngorm.business.AbstractServices);


/**
 * @private
 * @const
 * @type {string}
 */
com.adobe.cairngorm.business.AbstractServices.FLEX_VERSION = "FlexVersion";


/**
 * @private
 * @const
 * @type {string}
 */
com.adobe.cairngorm.business.AbstractServices.AUTHENTICATED = "authenticated";


/**
 * @private
 * @type {number}
 */
com.adobe.cairngorm.business.AbstractServices.prototype.com_adobe_cairngorm_business_AbstractServices__timeout = 0;


/**
 * Register the services.
 * @asparam serviceLocator the IServiceLocator isntance.
 * @export
 * @param {com.adobe.cairngorm.business.IServiceLocator} serviceLocator
 */
com.adobe.cairngorm.business.AbstractServices.prototype.register = function(serviceLocator) {
  throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.ABSTRACT_METHOD_CALLED, "register");
};


/**
 * Return the service with the given name.
 * @asparam name the name of the service.
 * @asreturn the service.
 * @export
 * @param {string} name
 * @return {Object}
 */
com.adobe.cairngorm.business.AbstractServices.prototype.getService = function(name) {
  throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.ABSTRACT_METHOD_CALLED, "getService");
};


/**
 * Set the credentials for all registered services.
 * @asparam username the username to set.
 * @asparam password the password to set.
 * @export
 * @param {string} username
 * @param {string} password
 */
com.adobe.cairngorm.business.AbstractServices.prototype.setCredentials = function(username, password) {
  throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.ABSTRACT_METHOD_CALLED, "setCredentials");
};


/**
 * Set the remote credentials for all registered services.
 * @asparam username the username to set.
 * @asparam password the password to set.
 * @export
 * @param {string} username
 * @param {string} password
 */
com.adobe.cairngorm.business.AbstractServices.prototype.setRemoteCredentials = function(username, password) {
  throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.ABSTRACT_METHOD_CALLED, "setRemoteCredentials");
};


/**
 * Release the resources held by the service.
 * @export
 */
com.adobe.cairngorm.business.AbstractServices.prototype.release = function() {
  throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.ABSTRACT_METHOD_CALLED, "release");
};


/**
 * Log the user out of all registered services.
 * @export
 */
com.adobe.cairngorm.business.AbstractServices.prototype.logout = function() {
  throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.ABSTRACT_METHOD_CALLED, "logout");
};


/**
 * Return all the accessors on this object.
 * @asparam serviceLocator the IServiceLocator instance.
 * @asreturn this object's accessors.
 *
 * @royaleignorecoercion org.apache.royale.reflection.AccessorDefinition
 * @protected
 * @param {com.adobe.cairngorm.business.IServiceLocator} serviceLocator
 * @return {Array}
 */
com.adobe.cairngorm.business.AbstractServices.prototype.getAccessors = function(serviceLocator) {
  var /** @type {org.apache.royale.reflection.TypeDefinition} */ description = org.apache.royale.reflection.describeType(serviceLocator);
  var /** @type {Array} */ accessors = description.accessors;
  var /** @type {Array} */ filtered = [];
  while (accessors.length) {
    var /** @type {Object} */ accessor = accessors.shift();
    if (accessor.access == 'readwrite')
      filtered.push(accessor.name);
  }
  return filtered;
};


/**
 * @protected
 * @param {Object} service
 */
com.adobe.cairngorm.business.AbstractServices.prototype.serviceLogout = function(service) {
  throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.ABSTRACT_METHOD_CALLED, "serviceLogout");
};


com.adobe.cairngorm.business.AbstractServices.prototype.get__timeout = function() {
  return this.com_adobe_cairngorm_business_AbstractServices__timeout;
};


com.adobe.cairngorm.business.AbstractServices.prototype.set__timeout = function(timeoutTime) {
  this.com_adobe_cairngorm_business_AbstractServices__timeout = timeoutTime;
};


Object.defineProperties(com.adobe.cairngorm.business.AbstractServices.prototype, /** @lends {com.adobe.cairngorm.business.AbstractServices.prototype} */ {
/**
  * @export
  * @type {number} */
timeout: {
get: com.adobe.cairngorm.business.AbstractServices.prototype.get__timeout,
set: com.adobe.cairngorm.business.AbstractServices.prototype.set__timeout}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.adobe.cairngorm.business.AbstractServices.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AbstractServices', qName: 'com.adobe.cairngorm.business.AbstractServices', kind: 'class' }], interfaces: [com.adobe.cairngorm.business.IServices] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.adobe.cairngorm.business.AbstractServices.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'timeout': { type: 'int', access: 'readwrite', declaredBy: 'com.adobe.cairngorm.business.AbstractServices'}
      };
    },
    methods: function () {
      return {
        'register': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.AbstractServices', parameters: function () { return [ 'com.adobe.cairngorm.business.IServiceLocator', false ]; }},
        'getService': { type: 'Object', declaredBy: 'com.adobe.cairngorm.business.AbstractServices', parameters: function () { return [ 'String', false ]; }},
        'setCredentials': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.AbstractServices', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'setRemoteCredentials': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.AbstractServices', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'release': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.AbstractServices'},
        'logout': { type: 'void', declaredBy: 'com.adobe.cairngorm.business.AbstractServices'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.adobe.cairngorm.business.AbstractServices.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.adobe.cairngorm.business.AbstractServices.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.adobe.cairngorm.business.AbstractServices);

//# sourceMappingURL=./AbstractServices.js.map