/**
 * Generated by Apache Royale Compiler from mx/rpc/AbstractService.as
 * mx.rpc.AbstractService
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.AbstractService');
/* Royale Dependency List: QName,mx.core.mx_internal,mx.messaging.ChannelSet,mx.resources.IResourceManager,mx.resources.ResourceManager,mx.rpc.AbstractOperation,mx.rpc.AsyncRequest,mx.rpc.events.AbstractEvent,org.apache.royale.events.Event,org.apache.royale.events.EventDispatcher,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.utils.Proxy');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 *  Constructor.
 *  
 *  @asparam destination The destination of the service.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.royale.utils.Proxy}
 * @implements {org.apache.royale.events.IEventDispatcher}
 * @param {string=} destination
 */
mx.rpc.AbstractService = function(destination) {
  destination = typeof destination !== 'undefined' ? destination : null;
  
  this.mx_rpc_AbstractService_resourceManager = mx.resources.ResourceManager.getInstance();
  mx.rpc.AbstractService.base(this, 'constructor');
  this.mx_rpc_AbstractService_eventDispatcher = new org.apache.royale.events.EventDispatcher(this);
  this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest = new mx.rpc.AsyncRequest();
  if (destination) {
    this.destination = destination;
    this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.destination = destination;
  }
  this.http_$$www_adobe_com$2006$flex$mx$internal___operations = {};
};
goog.inherits(mx.rpc.AbstractService, org.apache.royale.utils.Proxy);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.AbstractService', mx.rpc.AbstractService);


/**
 * @private
 * @type {mx.resources.IResourceManager}
 */
mx.rpc.AbstractService.prototype.mx_rpc_AbstractService_resourceManager;


/**
 * @private
 * @type {Array}
 */
mx.rpc.AbstractService.prototype.mx_rpc_AbstractService__managers;


/**
 * @type {Object}
 */
mx.rpc.AbstractService.prototype.http_$$www_adobe_com$2006$flex$mx$internal___operations;


/**
 * @export
 * @type {boolean}
 */
mx.rpc.AbstractService.prototype._keepLastResult = true;


/**
 *  Called to initialize the service.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
mx.rpc.AbstractService.prototype.initialize = function() {
  if (!this.mx_rpc_AbstractService__initialized && this.mx_rpc_AbstractService__managers != null) {
    for (var /** @type {number} */ i = 0; i < this.mx_rpc_AbstractService__managers.length; i++) {
      var /** @type {Object} */ mgr = this.mx_rpc_AbstractService__managers[i];
      if (mgr.hasOwnProperty("initialize"))
        mgr.initialize();
    }
    this.mx_rpc_AbstractService__initialized = true;
  }
};


/**
 * @export
 * @override
 */
mx.rpc.AbstractService.prototype.getProperty = function(propName) {
  return this.getOperation(propName);
};


/**
 * @export
 * @override
 */
mx.rpc.AbstractService.prototype.setProperty = function(propName, value) {
  var /** @type {string} */ message = this.mx_rpc_AbstractService_resourceManager.getString("rpc", "operationsNotAllowedInService", [propName]);
  throw new Error(message);
};


/**
 * @export
 * @override
 */
mx.rpc.AbstractService.prototype.hasProperty = function(propName) {
  return this.getOperation(propName) != null;
};


/**
 * @export
 * @override
 */
mx.rpc.AbstractService.prototype.deleteProperty = function(propName) {
  var /** @type {string} */ message = this.mx_rpc_AbstractService_resourceManager.getString("rpc", "operationsNotAllowedInService", [propName]);
  throw new Error(message);
};


/**
 * @export
 * @override
 */
mx.rpc.AbstractService.prototype.callProperty = function(name, args) {
  args = Array.prototype.slice.call(arguments, 1);
  var /** @type {mx.rpc.AbstractOperation} */ op = this.getOperation(this.http_$$www_adobe_com$2006$flex$mx$internal__getLocalName(name));
  return op.send.apply(op, args);
};


/**
 * @private
 * @type {Array}
 */
mx.rpc.AbstractService.prototype.mx_rpc_AbstractService_nextNameArray;


/**
 * @export
 * @override
 */
mx.rpc.AbstractService.prototype.propertyNames = function() {
  this.mx_rpc_AbstractService_nextNameArray = [];
  for (var /** @type {string} */ op in this.http_$$www_adobe_com$2006$flex$mx$internal___operations) {
    this.mx_rpc_AbstractService_nextNameArray.push(op);
  }
  return this.mx_rpc_AbstractService_nextNameArray;
};


/**
 * @export
 * @param {Object} name
 * @return {string}
 */
mx.rpc.AbstractService.prototype.http_$$www_adobe_com$2006$flex$mx$internal__getLocalName = function(name) {
  if (org.apache.royale.utils.Language.is(name, QName)) {
    return org.apache.royale.utils.Language.as(name, QName, true).localName;
  } else {
    return String(name);
  }
};


/**
 * Returns an Operation of the given name. If the Operation wasn't
 * created beforehand, subclasses are responsible for creating it during
 * this call. Operations are usually accessible by simply naming them after
 * the service variable (<code>myService.someOperation</code>), but if your
 * Operation name happens to match a defined method on the service (like
 * <code>setCredentials</code>), you can use this method to get the
 * Operation instead.
 * @asparam name Name of the Operation.
 * @asreturn Operation that executes for this name.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} name
 * @return {mx.rpc.AbstractOperation}
 */
mx.rpc.AbstractService.prototype.getOperation = function(name) {
  var /** @type {Object} */ o = this.http_$$www_adobe_com$2006$flex$mx$internal___operations[name];
  var /** @type {mx.rpc.AbstractOperation} */ op = org.apache.royale.utils.Language.is(o, mx.rpc.AbstractOperation) ? org.apache.royale.utils.Language.as(o, mx.rpc.AbstractOperation, true) : null;
  return op;
};


/**
 *  Disconnects the service's network connection and removes any pending
 *  request responders.
 *  This method does not wait for outstanding network operations to complete.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
mx.rpc.AbstractService.prototype.disconnect = function() {
  this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.disconnect();
};


/**
 * Sets the credentials for the destination accessed by the service when using Data Services on the server side.
 * The credentials are applied to all services connected over the same
 * ChannelSet. Note that services that use a proxy or a third-party adapter
 * to a remote endpoint will need to setRemoteCredentials instead.
 * 
 * @asparam username The username for the destination.
 * @asparam password The password for the destination.
 * @asparam charset The character set encoding to use while encoding the
 * credentials. The default is null, which implies the legacy charset of
 * ISO-Latin-1. The only other supported charset is &quot;UTF-8&quot;.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} username
 * @param {string} password
 * @param {string=} charset
 */
mx.rpc.AbstractService.prototype.setCredentials = function(username, password, charset) {
  charset = typeof charset !== 'undefined' ? charset : null;
  this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.setCredentials(username, password, charset);
};


/**
 * Logs the user out of the destination. 
 * Logging out of a destination applies to everything connected using the
 * same ChannelSet as specified in the server configuration. For example,
 * if you're connected over the my-rtmp channel and you log out using one
 * of your RPC components, anything that was connected over the same
 * ChannelSet is logged out.
 *
 *  <p><b>Note:</b> Adobe recommends that you use the mx.messaging.ChannelSet.logout() method
 *  rather than this method. </p>
 *
 *  @see mx.messaging.ChannelSet#logout()   
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
mx.rpc.AbstractService.prototype.logout = function() {
  this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.logout();
};


/**
 * The username and password to be used to authenticate a user when
 * accessing a remote, third-party endpoint such as a web service through a
 * proxy or a remote object through a custom adapter when using Data Services on the server side.
 *
 * @asparam remoteUsername The username to pass to the remote endpoint
 * @asparam remotePassword The password to pass to the remote endpoint
 * @asparam charset The character set encoding to use while encoding the
 * remote credentials. The default is null, which implies the legacy charset
 * of ISO-Latin-1. The only other supported charset is &quot;UTF-8&quot;.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} remoteUsername
 * @param {string} remotePassword
 * @param {string=} charset
 */
mx.rpc.AbstractService.prototype.setRemoteCredentials = function(remoteUsername, remotePassword, charset) {
  charset = typeof charset !== 'undefined' ? charset : null;
  this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.setRemoteCredentials(remoteUsername, remotePassword, charset);
};


/**
 * @asprivate
 * @export
 * @param {org.apache.royale.events.Event} event
 * @return {boolean}
 */
mx.rpc.AbstractService.prototype.http_$$www_adobe_com$2006$flex$mx$internal__hasTokenResponders = function(event) {
  if (org.apache.royale.utils.Language.is(event, mx.rpc.events.AbstractEvent)) {
    var /** @type {mx.rpc.events.AbstractEvent} */ rpcEvent = org.apache.royale.utils.Language.as(event, mx.rpc.events.AbstractEvent);
    if (rpcEvent.token != null && rpcEvent.token.hasResponder()) {
      return true;
    }
  }
  return false;
};


/**
 * @type {Array}
 */
mx.rpc.AbstractService.prototype.http_$$www_adobe_com$2006$flex$mx$internal___availableChannelIds;


/**
 * @type {mx.rpc.AsyncRequest}
 */
mx.rpc.AbstractService.prototype.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest;


/**
 * @private
 * @type {org.apache.royale.events.EventDispatcher}
 */
mx.rpc.AbstractService.prototype.mx_rpc_AbstractService_eventDispatcher;


/**
 * @private
 * @type {boolean}
 */
mx.rpc.AbstractService.prototype.mx_rpc_AbstractService__initialized = false;


mx.rpc.AbstractService.prototype.get__channelSet = function() {
  return this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.channelSet;
};


mx.rpc.AbstractService.prototype.set__channelSet = function(value) {
  if (this.channelSet != value) {
    this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.channelSet = value;
  }
};


mx.rpc.AbstractService.prototype.get__destination = function() {
  return this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.destination;
};


mx.rpc.AbstractService.prototype.set__destination = function(name) {
  this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.destination = name;
};


mx.rpc.AbstractService.prototype.get__managers = function() {
  return this.mx_rpc_AbstractService__managers;
};


mx.rpc.AbstractService.prototype.set__managers = function(mgrs) {
  if (this.mx_rpc_AbstractService__managers != null) {
    for (var /** @type {number} */ i = 0; i < this.mx_rpc_AbstractService__managers.length; i++) {
      var /** @type {Object} */ mgr = this.mx_rpc_AbstractService__managers[i];
      if (mgr.hasOwnProperty("service"))
        mgr.service = null;
    }
  }
  this.mx_rpc_AbstractService__managers = mgrs;
  for (i = 0; i < mgrs.length; i++) {
    mgr = this.mx_rpc_AbstractService__managers[i];
    if (mgr.hasOwnProperty("service"))
      mgr.service = this;
    if (this.mx_rpc_AbstractService__initialized && mgr.hasOwnProperty("initialize"))
      mgr.initialize();
  }
};


mx.rpc.AbstractService.prototype.get__operations = function() {
  return this.http_$$www_adobe_com$2006$flex$mx$internal___operations;
};


mx.rpc.AbstractService.prototype.set__operations = function(ops) {
  var /** @type {mx.rpc.AbstractOperation} */ op;
  for (var /** @type {string} */ i in ops) {
    op = org.apache.royale.utils.Language.as(ops[i], mx.rpc.AbstractOperation, true);
    op.http_$$www_adobe_com$2006$flex$mx$internal__setService(this);
    if (!op.name)
      op.name = i;
    op.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest = this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest;
    op.http_$$www_adobe_com$2006$flex$mx$internal__setKeepLastResultIfNotSet(this._keepLastResult);
  }
  this.http_$$www_adobe_com$2006$flex$mx$internal___operations = ops;
  this.dispatchEvent(new org.apache.royale.events.Event("operationsChange"));
};


mx.rpc.AbstractService.prototype.get__requestTimeout = function() {
  return this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.requestTimeout;
};


mx.rpc.AbstractService.prototype.set__requestTimeout = function(value) {
  if (this.requestTimeout != value) {
    this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.requestTimeout = value;
  }
};


mx.rpc.AbstractService.prototype.get__keepLastResult = function() {
  return this._keepLastResult;
};


mx.rpc.AbstractService.prototype.set__keepLastResult = function(value) {
  this._keepLastResult = value;
};


Object.defineProperties(mx.rpc.AbstractService.prototype, /** @lends {mx.rpc.AbstractService.prototype} */ {
/**
  * @export
  * @type {mx.messaging.ChannelSet} */
channelSet: {
get: mx.rpc.AbstractService.prototype.get__channelSet,
set: mx.rpc.AbstractService.prototype.set__channelSet},
/**
  * @export
  * @type {string} */
destination: {
get: mx.rpc.AbstractService.prototype.get__destination,
set: mx.rpc.AbstractService.prototype.set__destination},
/**
  * @export
  * @type {Array} */
managers: {
get: mx.rpc.AbstractService.prototype.get__managers,
set: mx.rpc.AbstractService.prototype.set__managers},
/**
  * @export
  * @type {Object} */
operations: {
get: mx.rpc.AbstractService.prototype.get__operations,
set: mx.rpc.AbstractService.prototype.set__operations},
/**
  * @export
  * @type {number} */
requestTimeout: {
get: mx.rpc.AbstractService.prototype.get__requestTimeout,
set: mx.rpc.AbstractService.prototype.set__requestTimeout},
/**
  * @export
  * @type {boolean} */
keepLastResult: {
get: mx.rpc.AbstractService.prototype.get__keepLastResult,
set: mx.rpc.AbstractService.prototype.set__keepLastResult}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.AbstractService.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AbstractService', qName: 'mx.rpc.AbstractService', kind: 'class', isDynamic: true}], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.AbstractService.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::_operations': { type: 'Object', get_set: function (/** mx.rpc.AbstractService */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___operations = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___operations;}},
        'http://www.adobe.com/2006/flex/mx/internal::_availableChannelIds': { type: 'Array', get_set: function (/** mx.rpc.AbstractService */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___availableChannelIds = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___availableChannelIds;}},
        'http://www.adobe.com/2006/flex/mx/internal::asyncRequest': { type: 'mx.rpc.AsyncRequest', get_set: function (/** mx.rpc.AbstractService */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest = v : inst.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest;}}
      };
    },
    accessors: function () {
      return {
        'channelSet': { type: 'mx.messaging.ChannelSet', access: 'readwrite', declaredBy: 'mx.rpc.AbstractService'},
        'destination': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.AbstractService'},
        'managers': { type: 'Array', access: 'readwrite', declaredBy: 'mx.rpc.AbstractService'},
        'operations': { type: 'Object', access: 'readwrite', declaredBy: 'mx.rpc.AbstractService'},
        'requestTimeout': { type: 'int', access: 'readwrite', declaredBy: 'mx.rpc.AbstractService'},
        'keepLastResult': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.AbstractService'}
      };
    },
    methods: function () {
      return {
        'AbstractService': { type: '', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'String', true ]; }},
        'initialize': { type: 'void', declaredBy: 'mx.rpc.AbstractService'},
        'getProperty': { type: '*', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'String', false ]; }},
        'setProperty': { type: 'void', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'String', false ,'*', false ]; }},
        'hasProperty': { type: 'Boolean', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'String', false ]; }},
        'deleteProperty': { type: 'void', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'String', false ]; }},
        'callProperty': { type: '*', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ '*', false ,'Array', false ]; }},
        'propertyNames': { type: 'Array', declaredBy: 'mx.rpc.AbstractService'},
        'http://www.adobe.com/2006/flex/mx/internal::getLocalName': { type: 'String', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'Object', false ]; }},
        'getOperation': { type: 'mx.rpc.AbstractOperation', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'String', false ]; }},
        'disconnect': { type: 'void', declaredBy: 'mx.rpc.AbstractService'},
        'setCredentials': { type: 'void', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'String', false ,'String', false ,'String', true ]; }},
        'logout': { type: 'void', declaredBy: 'mx.rpc.AbstractService'},
        'setRemoteCredentials': { type: 'void', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'String', false ,'String', false ,'String', true ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::hasTokenResponders': { type: 'Boolean', declaredBy: 'mx.rpc.AbstractService', parameters: function () { return [ 'org.apache.royale.events.Event', false ]; }}
      };
    },
    metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'operationsChange' } ] } ]; }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.AbstractService.prototype.ROYALE_COMPILE_FLAGS = 26;