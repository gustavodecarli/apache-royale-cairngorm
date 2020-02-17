/**
 * Generated by Apache Royale Compiler from mx/rpc/remoting/RemoteObject.as
 * mx.rpc.remoting.RemoteObject
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.remoting.RemoteObject');
/* Royale Dependency List: mx.core.mx_internal,mx.messaging.Channel,mx.messaging.ChannelSet,mx.messaging.channels.AMFChannel,mx.messaging.channels.SecureAMFChannel,mx.rpc.AbstractOperation,mx.rpc.mxml.Concurrency,mx.rpc.remoting.Operation,XML*/

goog.require('mx.rpc.AbstractService');



/**
 * Creates a new RemoteObject.
 * @asparam destination [optional] Destination of the RemoteObject; should match a destination name in the services-config.xml file.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {mx.rpc.AbstractService}
 * @param {string=} destination
 */
mx.rpc.remoting.RemoteObject = function(destination) {
  destination = typeof destination !== 'undefined' ? destination : null;
  mx.rpc.remoting.RemoteObject.base(this, 'constructor', destination);
  this.concurrency = mx.rpc.mxml.Concurrency.MULTIPLE;
  this.makeObjectsBindable = false;
  this.showBusyCursor = false;
};
goog.inherits(mx.rpc.remoting.RemoteObject, mx.rpc.AbstractService);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.remoting.RemoteObject', mx.rpc.remoting.RemoteObject);


/**
 * @private
 * @type {string}
 */
mx.rpc.remoting.RemoteObject.prototype.mx_rpc_remoting_RemoteObject__concurrency;


/**
 * @private
 * @type {string}
 */
mx.rpc.remoting.RemoteObject.prototype.mx_rpc_remoting_RemoteObject__endpoint;


/**
 * @private
 * @type {string}
 */
mx.rpc.remoting.RemoteObject.prototype.mx_rpc_remoting_RemoteObject__source;


/**
 * @private
 * @type {boolean}
 */
mx.rpc.remoting.RemoteObject.prototype.mx_rpc_remoting_RemoteObject__makeObjectsBindable;


/**
 * @private
 * @type {boolean}
 */
mx.rpc.remoting.RemoteObject.prototype.mx_rpc_remoting_RemoteObject__showBusyCursor;


/**
 * @export
 * @type {Function}
 */
mx.rpc.remoting.RemoteObject.prototype.convertParametersHandler;


/**
 * @export
 * @type {Function}
 */
mx.rpc.remoting.RemoteObject.prototype.convertResultHandler;


/**
 *@asprivate
 * @export
 */
mx.rpc.remoting.RemoteObject.prototype.http_$$www_adobe_com$2006$flex$mx$internal__initEndpoint = function() {
  if (this.endpoint != null) {
    var /** @type {mx.messaging.Channel} */ chan;
    if (this.endpoint.indexOf("https") == 0) {
      chan = new mx.messaging.channels.SecureAMFChannel(null, this.endpoint);
    } else {
      chan = new mx.messaging.channels.AMFChannel(null, this.endpoint);
    }
    chan.requestTimeout = this.requestTimeout;
    this.channelSet = new mx.messaging.ChannelSet();
    this.channelSet.addChannel(chan);
  }
};


/**
 * Returns an Operation of the given name. If the Operation wasn't
 * created beforehand, a new <code>mx.rpc.remoting.Operation</code> is
 * created during this call. Operations are usually accessible by simply
 * naming them after the service variable
 * (<code>myService.someOperation</code>), but if your Operation name
 * happens to match a defined method on the service
 * (like <code>setCredentials</code>), you can use this method to get the
 * Operation instead.
 * @asparam name Name of the Operation.
 * @asreturn Operation that executes for this name.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @override
 */
mx.rpc.remoting.RemoteObject.prototype.getOperation = function(name) {
  var /** @type {mx.rpc.AbstractOperation} */ op = mx.rpc.remoting.RemoteObject.superClass_.getOperation.apply(this, [ name] );
  if (op == null) {
    op = new mx.rpc.remoting.Operation(this, name);
    this.http_$$www_adobe_com$2006$flex$mx$internal___operations[name] = op;
    op.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest = this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest;
    op.http_$$www_adobe_com$2006$flex$mx$internal__setKeepLastResultIfNotSet(this._keepLastResult);
  }
  return op;
};


/**
 * If a remote object is managed by an external service, such a ColdFusion Component (CFC),
 * a username and password can be set for the authentication mechanism of that remote service.
 *
 * @asparam remoteUsername the username to pass to the remote endpoint
 * @asparam remotePassword the password to pass to the remote endpoint
 * @asparam charset The character set encoding to use while encoding the
 * remote credentials. The default is null, which implies the legacy charset
 * of ISO-Latin-1. The only other supported charset is &quot;UTF-8&quot;.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @override
 */
mx.rpc.remoting.RemoteObject.prototype.setRemoteCredentials = function(remoteUsername, remotePassword, charset) {
  charset = typeof charset !== 'undefined' ? charset : null;
  mx.rpc.remoting.RemoteObject.superClass_.setRemoteCredentials.apply(this, [ remoteUsername, remotePassword, charset] );
};


/**
 * Represents an instance of RemoteObject as a String, describing
 * important properties such as the destination id and the set of
 * channels assigned.
 *
 * @asreturn Returns a String representing an instance of a RemoteObject.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {string}
 */
mx.rpc.remoting.RemoteObject.prototype.toString = function() {
  var /** @type {string} */ s = "[RemoteObject ";
  s += " destination=\"" + this.destination + "\"";
  if (this.source)
    s += " source=\"" + this.source + "\"";
  s += " channelSet=\"" + this.channelSet + "\"]";
  return s;
};


mx.rpc.remoting.RemoteObject.prototype.get__concurrency = function() {
  return this.mx_rpc_remoting_RemoteObject__concurrency;
};


mx.rpc.remoting.RemoteObject.prototype.set__concurrency = function(c) {
  this.mx_rpc_remoting_RemoteObject__concurrency = c;
};


mx.rpc.remoting.RemoteObject.prototype.get__endpoint = function() {
  return this.mx_rpc_remoting_RemoteObject__endpoint;
};


mx.rpc.remoting.RemoteObject.prototype.set__endpoint = function(url) {
  if (this.mx_rpc_remoting_RemoteObject__endpoint != url || url == null) {
    this.mx_rpc_remoting_RemoteObject__endpoint = url;
    this.channelSet = null;
  }
};


mx.rpc.remoting.RemoteObject.prototype.get__makeObjectsBindable = function() {
  return this.mx_rpc_remoting_RemoteObject__makeObjectsBindable;
};


mx.rpc.remoting.RemoteObject.prototype.set__makeObjectsBindable = function(b) {
  this.mx_rpc_remoting_RemoteObject__makeObjectsBindable = b;
};


mx.rpc.remoting.RemoteObject.prototype.get__showBusyCursor = function() {
  return this.mx_rpc_remoting_RemoteObject__showBusyCursor;
};


mx.rpc.remoting.RemoteObject.prototype.set__showBusyCursor = function(sbc) {
  this.mx_rpc_remoting_RemoteObject__showBusyCursor = sbc;
};


mx.rpc.remoting.RemoteObject.prototype.get__source = function() {
  return this.mx_rpc_remoting_RemoteObject__source;
};


mx.rpc.remoting.RemoteObject.prototype.set__source = function(s) {
  this.mx_rpc_remoting_RemoteObject__source = s;
};


Object.defineProperties(mx.rpc.remoting.RemoteObject.prototype, /** @lends {mx.rpc.remoting.RemoteObject.prototype} */ {
/**
  * @export
  * @type {string} */
concurrency: {
get: mx.rpc.remoting.RemoteObject.prototype.get__concurrency,
set: mx.rpc.remoting.RemoteObject.prototype.set__concurrency},
/**
  * @export
  * @type {string} */
endpoint: {
get: mx.rpc.remoting.RemoteObject.prototype.get__endpoint,
set: mx.rpc.remoting.RemoteObject.prototype.set__endpoint},
/**
  * @export
  * @type {boolean} */
makeObjectsBindable: {
get: mx.rpc.remoting.RemoteObject.prototype.get__makeObjectsBindable,
set: mx.rpc.remoting.RemoteObject.prototype.set__makeObjectsBindable},
/**
  * @export
  * @type {boolean} */
showBusyCursor: {
get: mx.rpc.remoting.RemoteObject.prototype.get__showBusyCursor,
set: mx.rpc.remoting.RemoteObject.prototype.set__showBusyCursor},
/**
  * @export
  * @type {string} */
source: {
get: mx.rpc.remoting.RemoteObject.prototype.get__source,
set: mx.rpc.remoting.RemoteObject.prototype.set__source}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.remoting.RemoteObject.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'RemoteObject', qName: 'mx.rpc.remoting.RemoteObject', kind: 'class', isDynamic: true}] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.remoting.RemoteObject.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'convertParametersHandler': { type: 'Function', get_set: function (/** mx.rpc.remoting.RemoteObject */ inst, /** * */ v) {return v !== undefined ? inst.convertParametersHandler = v : inst.convertParametersHandler;}},
        'convertResultHandler': { type: 'Function', get_set: function (/** mx.rpc.remoting.RemoteObject */ inst, /** * */ v) {return v !== undefined ? inst.convertResultHandler = v : inst.convertResultHandler;}}
      };
    },
    accessors: function () {
      return {
        'concurrency': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.remoting.RemoteObject'},
        'endpoint': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.remoting.RemoteObject'},
        'makeObjectsBindable': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.remoting.RemoteObject'},
        'showBusyCursor': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.remoting.RemoteObject'},
        'source': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.remoting.RemoteObject'}
      };
    },
    methods: function () {
      return {
        'RemoteObject': { type: '', declaredBy: 'mx.rpc.remoting.RemoteObject', parameters: function () { return [ 'String', true ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::initEndpoint': { type: 'void', declaredBy: 'mx.rpc.remoting.RemoteObject'},
        'getOperation': { type: 'mx.rpc.AbstractOperation', declaredBy: 'mx.rpc.remoting.RemoteObject', parameters: function () { return [ 'String', false ]; }},
        'setRemoteCredentials': { type: 'void', declaredBy: 'mx.rpc.remoting.RemoteObject', parameters: function () { return [ 'String', false ,'String', false ,'String', true ]; }},
        'toString': { type: 'String', declaredBy: 'mx.rpc.remoting.RemoteObject'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.remoting.RemoteObject.prototype.ROYALE_COMPILE_FLAGS = 26;
