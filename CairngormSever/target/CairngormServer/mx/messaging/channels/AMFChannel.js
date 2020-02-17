/**
 * Generated by Apache Royale Compiler from mx/messaging/channels/AMFChannel.as
 * mx.messaging.channels.AMFChannel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.channels.AMFChannel');
/* Royale Dependency List: XML,mx.core.mx_internal,mx.events.IOErrorEvent,mx.events.NetStatusEvent,mx.events.SecurityErrorEvent,mx.logging.Log,mx.messaging.MessageResponder,mx.messaging.RoyaleClient,mx.messaging.config.ConfigMap,mx.messaging.config.ServerConfig,mx.messaging.events.ChannelFaultEvent,mx.messaging.messages.AbstractMessage,mx.messaging.messages.CommandMessage,mx.messaging.messages.ErrorMessage,mx.messaging.messages.IMessage,mx.net.Responder,mx.resources.IResourceManager,mx.resources.ResourceManager,org.apache.royale.utils.Language*/

goog.require('mx.messaging.channels.NetConnectionChannel');



/**
 *  Constructor.
 *
 *  @asparam id The id of this Channel.
 *
 *  @asparam uri The uri for this Channel.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {mx.messaging.channels.NetConnectionChannel}
 * @param {string=} id
 * @param {string=} uri
 */
mx.messaging.channels.AMFChannel = function(id, uri) {
  id = typeof id !== 'undefined' ? id : null;
  uri = typeof uri !== 'undefined' ? uri : null;
  
  this.mx_messaging_channels_AMFChannel_resourceManager = mx.resources.ResourceManager.getInstance();
  mx.messaging.channels.AMFChannel.base(this, 'constructor', id, uri);
};
goog.inherits(mx.messaging.channels.AMFChannel, mx.messaging.channels.NetConnectionChannel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.channels.AMFChannel', mx.messaging.channels.AMFChannel);


/**
 * @export
 * @type {boolean}
 */
mx.messaging.channels.AMFChannel.prototype._reconnectingWithSessionId;


/**
 * @private
 * @type {boolean}
 */
mx.messaging.channels.AMFChannel.prototype.mx_messaging_channels_AMFChannel__ignoreNetStatusEvents;


/**
 * @private
 * @type {mx.resources.IResourceManager}
 */
mx.messaging.channels.AMFChannel.prototype.mx_messaging_channels_AMFChannel_resourceManager;


/**
 *  @asprivate
 *  Processes polling related configuration settings.
 * @export
 * @override
 */
mx.messaging.channels.AMFChannel.prototype.applySettings = function(settings) {
  mx.messaging.channels.AMFChannel.superClass_.applySettings.apply(this, [ settings] );
  this.applyPollingSettings(settings);
};


/**
 *  @asprivate
 *  Overriding to be able to keep track of the fact that the Channel is in
 *  the process of reconnecting with the session id, so the initial
 *  NetConnection call can be discarded properly in the resultHandler.
 * @export
 * @override
 */
mx.messaging.channels.AMFChannel.prototype.AppendToGatewayUrl = function(value) {
  if (value != null && value != "" && this.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL != value) {
    mx.messaging.channels.AMFChannel.superClass_.AppendToGatewayUrl.apply(this, [ value] );
    this._reconnectingWithSessionId = true;
  }
};


/**
 *  @asprivate
 *  Attempts to connect to the endpoint specified for this channel.
 * @export
 * @override
 */
mx.messaging.channels.AMFChannel.prototype.internalConnect = function() {
  mx.messaging.channels.AMFChannel.superClass_.internalConnect.apply(this);
  this.mx_messaging_channels_AMFChannel__ignoreNetStatusEvents = false;
  var /** @type {mx.messaging.messages.CommandMessage} */ msg = new mx.messaging.messages.CommandMessage();
  if (this.credentials != null) {
    msg.operation = mx.messaging.messages.CommandMessage.LOGIN_OPERATION;
    msg.body = this.credentials;
  } else {
    msg.operation = mx.messaging.messages.CommandMessage.CLIENT_PING_OPERATION;
  }
  msg.headers[mx.messaging.messages.CommandMessage.MESSAGING_VERSION] = this.messagingVersion;
  if (mx.messaging.config.ServerConfig.http_$$www_adobe_com$2006$flex$mx$internal__needsConfig(this))
    msg.headers[mx.messaging.messages.CommandMessage.NEEDS_CONFIG_HEADER] = true;
  this.setRoyaleClientIdOnMessage(msg);
  this.netConnection.call(null, new mx.net.Responder(org.apache.royale.utils.Language.closure(this.resultHandler, this, 'resultHandler'), org.apache.royale.utils.Language.closure(this.faultHandler, this, 'faultHandler')), msg);
  if (mx.logging.Log.isDebug())
    this._log.debug("'{0}' pinging endpoint.", this.id);
};


/**
 *  @asprivate
 *  Disconnects from the remote destination.
 *  Because this channel uses a stateless HTTP connection, it sends a fire-and-forget
 *  message to the server as it disconnects to allow the server to shut down any
 *  session or other resources that it may be managing on behalf of this channel.
 * @export
 * @override
 */
mx.messaging.channels.AMFChannel.prototype.internalDisconnect = function(rejected) {
  rejected = typeof rejected !== 'undefined' ? rejected : false;
  if (!rejected && !this.shouldBeConnected) {
    var /** @type {mx.messaging.messages.CommandMessage} */ msg = new mx.messaging.messages.CommandMessage();
    msg.operation = mx.messaging.messages.CommandMessage.DISCONNECT_OPERATION;
    this.internalSend(new mx.messaging.MessageResponder(null, msg, null));
  }
  this.setConnected(false);
  mx.messaging.channels.AMFChannel.superClass_.internalDisconnect.apply(this, [ rejected] );
};


/**
 *  @asprivate
 * @export
 * @override
 */
mx.messaging.channels.AMFChannel.prototype.internalSend = function(msgResp) {
  this.handleReconnectWithSessionId();
  mx.messaging.channels.AMFChannel.superClass_.internalSend.apply(this, [ msgResp] );
};


/**
 *  @asprivate
 *  Shuts down the underlying NetConnection for the AMFChannel.
 *  The reason this override is necessary is because the NetConnection may dispatch
 *  a NetStatusEvent after it has been closed and if we're not registered to listen for
 *  that event the Player will throw an RTE.
 *  The only time this can occur when the channel has been shut down due to a connect
 *  timeout but an error (i.e. 404) response from the server returns later.
 * @export
 * @override
 */
mx.messaging.channels.AMFChannel.prototype.shutdownNetConnection = function() {
  this._nc.removeEventListener(mx.events.SecurityErrorEvent.SECURITY_ERROR, org.apache.royale.utils.Language.closure(this.securityErrorHandler, this, 'securityErrorHandler'));
  this._nc.removeEventListener(mx.events.IOErrorEvent.IO_ERROR, org.apache.royale.utils.Language.closure(this.ioErrorHandler, this, 'ioErrorHandler'));
  this.mx_messaging_channels_AMFChannel__ignoreNetStatusEvents = true;
  this._nc.close();
};


/**
 *  @asprivate
 *  Called on the status event of the associated NetConnection when there is a
 *  problem with the connection for this channel.
 * @export
 * @override
 */
mx.messaging.channels.AMFChannel.prototype.statusHandler = function(event) {
  if (this.mx_messaging_channels_AMFChannel__ignoreNetStatusEvents)
    return;
  var /** @type {mx.messaging.events.ChannelFaultEvent} */ channelFault;
  if (mx.logging.Log.isDebug())
    this._log.debug("'{0}' channel got status. {1}", this.id, event.info.toString());
  var /** @type {boolean} */ handled = true;
  if (event.info != null) {
    var /** @type {Object} */ info = event.info;
    if (info.level == "error") {
      if (info.code == "Client.Data.UnderFlow") {
        if (mx.logging.Log.isDebug())
          this._log.debug("'{0}' channel received a 'Client.Data.Underflow' status event.");
        return;
      }
      if (this.connected) {
        if (info.code.indexOf("Call.Failed") != -1) {
          channelFault = mx.messaging.events.ChannelFaultEvent.createEvent(this, false, "Channel.Call.Failed", org.apache.royale.utils.Language.string(info.level), info.code + ": " + info.description);
          channelFault.rootCause = info;
          this.dispatchEvent(channelFault);
        }
        this.internalDisconnect();
      } else {
        channelFault = mx.messaging.events.ChannelFaultEvent.createEvent(this, false, "Channel.Connect.Failed", org.apache.royale.utils.Language.string(info.level), info.code + ": " + info.description + ": url: '" + this.endpoint + "'");
        channelFault.rootCause = info;
        this.connectFailed(channelFault);
      }
    } else {
      if (!this.connected)
        handled = (info.level == "status" && info.code.indexOf("Connect.Closed") != -1);
      else
        handled = false;
    }
  } else {
    handled = false;
  }
  if (!handled) {
    var /** @type {string} */ errorText = this.mx_messaging_channels_AMFChannel_resourceManager.getString("messaging", "invalidURL");
    this.connectFailed(mx.messaging.events.ChannelFaultEvent.createEvent(this, false, "Channel.Connect.Failed", "error", errorText + " url: '" + this.endpoint + "'"));
  }
};


/**
 *  @asprivate
 *  Used by result and fault handlers to update the url of the underlying
 *  NetConnection with session id.
 * @export
 */
mx.messaging.channels.AMFChannel.prototype.handleReconnectWithSessionId = function() {
  if (this._reconnectingWithSessionId) {
    this._reconnectingWithSessionId = false;
    this.shutdownNetConnection();
    mx.messaging.channels.AMFChannel.superClass_.internalConnect.apply(this);
    this.mx_messaging_channels_AMFChannel__ignoreNetStatusEvents = false;
  }
};


/**
 *  @asprivate
 *  Called in response to the server ping to check connectivity.
 *  An error indicates that although the endpoint uri is reachable the Channel
 *  is still not able to connect.
 * @export
 * @param {mx.messaging.messages.ErrorMessage} msg
 */
mx.messaging.channels.AMFChannel.prototype.faultHandler = function(msg) {
  if (msg != null) {
    var /** @type {mx.messaging.events.ChannelFaultEvent} */ faultEvent = null;
    if (msg.faultCode == "Client.Authentication") {
      this.resultHandler(msg);
      faultEvent = mx.messaging.events.ChannelFaultEvent.createEvent(this, false, "Channel.Authentication.Error", "warn", msg.faultString);
      faultEvent.rootCause = msg;
      this.dispatchEvent(faultEvent);
    } else {
      this._log.debug("'{0}' fault handler called. {1}", this.id, msg.toString());
      if (mx.messaging.RoyaleClient.getInstance().id == null && msg["headers"] != undefined && msg.headers[mx.messaging.messages.AbstractMessage.FLEX_CLIENT_ID_HEADER] != null)
        mx.messaging.RoyaleClient.getInstance().id = org.apache.royale.utils.Language.string(msg.headers[mx.messaging.messages.AbstractMessage.FLEX_CLIENT_ID_HEADER]);
      if (msg["headers"] != undefined && msg.headers[mx.messaging.messages.CommandMessage.MESSAGING_VERSION] != null) {
        var /** @type {number} */ serverVersion = org.apache.royale.utils.Language.as(msg.headers[mx.messaging.messages.CommandMessage.MESSAGING_VERSION], Number);
        this.handleServerMessagingVersion(serverVersion);
      }
      faultEvent = mx.messaging.events.ChannelFaultEvent.createEvent(this, false, "Channel.Ping.Failed", "error", msg.faultString + " url: '" + this.endpoint + (this.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL == null ? "" : this.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL + "'") + "'");
      faultEvent.rootCause = msg;
      this.connectFailed(faultEvent);
    }
  }
  this.handleReconnectWithSessionId();
};


/**
 *  @asprivate
 *  This method will be called if the ping message sent to test connectivity
 *  to the server during the connection attempt succeeds.
 * @export
 * @param {mx.messaging.messages.IMessage} msg
 */
mx.messaging.channels.AMFChannel.prototype.resultHandler = function(msg) {
  if (msg != null) {
    mx.messaging.config.ServerConfig.http_$$www_adobe_com$2006$flex$mx$internal__updateServerConfigData(org.apache.royale.utils.Language.as(msg.body, mx.messaging.config.ConfigMap), this.endpoint);
    if (mx.messaging.RoyaleClient.getInstance().id == null && msg.headers[mx.messaging.messages.AbstractMessage.FLEX_CLIENT_ID_HEADER] != null)
      mx.messaging.RoyaleClient.getInstance().id = org.apache.royale.utils.Language.string(msg.headers[mx.messaging.messages.AbstractMessage.FLEX_CLIENT_ID_HEADER]);
    if (msg.headers[mx.messaging.messages.CommandMessage.MESSAGING_VERSION] != null) {
      var /** @type {number} */ serverVersion = org.apache.royale.utils.Language.as(msg.headers[mx.messaging.messages.CommandMessage.MESSAGING_VERSION], Number);
      this.handleServerMessagingVersion(serverVersion);
    }
  }
  this.handleReconnectWithSessionId();
  this.connectSuccess();
  if (this.credentials != null && !org.apache.royale.utils.Language.is(msg, mx.messaging.messages.ErrorMessage))
    this.http_$$www_adobe_com$2006$flex$mx$internal__setAuthenticated(true);
};


mx.messaging.channels.AMFChannel.prototype.get__piggybackingEnabled = function() {
  return this.internalPiggybackingEnabled;
};


mx.messaging.channels.AMFChannel.prototype.set__piggybackingEnabled = function(value) {
  this.internalPiggybackingEnabled = value;
};


mx.messaging.channels.AMFChannel.prototype.get__pollingEnabled = function() {
  return this.internalPollingEnabled;
};


mx.messaging.channels.AMFChannel.prototype.set__pollingEnabled = function(value) {
  this.internalPollingEnabled = value;
};


mx.messaging.channels.AMFChannel.prototype.get__pollingInterval = function() {
  return this.http_$$www_adobe_com$2006$flex$mx$internal__internalPollingInterval;
};


mx.messaging.channels.AMFChannel.prototype.set__pollingInterval = function(value) {
  this.http_$$www_adobe_com$2006$flex$mx$internal__internalPollingInterval = value;
};


mx.messaging.channels.AMFChannel.prototype.get__polling = function() {
  return this.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding;
};


mx.messaging.channels.AMFChannel.prototype.get__protocol = function() {
  return "http";
};


Object.defineProperties(mx.messaging.channels.AMFChannel.prototype, /** @lends {mx.messaging.channels.AMFChannel.prototype} */ {
/**
  * @export
  * @type {boolean} */
piggybackingEnabled: {
get: mx.messaging.channels.AMFChannel.prototype.get__piggybackingEnabled,
set: mx.messaging.channels.AMFChannel.prototype.set__piggybackingEnabled},
/**
  * @export
  * @type {boolean} */
pollingEnabled: {
get: mx.messaging.channels.AMFChannel.prototype.get__pollingEnabled,
set: mx.messaging.channels.AMFChannel.prototype.set__pollingEnabled},
/**
  * @export
  * @type {number} */
pollingInterval: {
get: mx.messaging.channels.AMFChannel.prototype.get__pollingInterval,
set: mx.messaging.channels.AMFChannel.prototype.set__pollingInterval},
/**
  * @export
  * @type {boolean} */
polling: {
get: mx.messaging.channels.AMFChannel.prototype.get__polling},
/**
  * @export
  * @type {string} */
protocol: {
get: mx.messaging.channels.AMFChannel.prototype.get__protocol}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.channels.AMFChannel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AMFChannel', qName: 'mx.messaging.channels.AMFChannel', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.channels.AMFChannel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'piggybackingEnabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.messaging.channels.AMFChannel'},
        'pollingEnabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.messaging.channels.AMFChannel'},
        'pollingInterval': { type: 'Number', access: 'readwrite', declaredBy: 'mx.messaging.channels.AMFChannel'},
        'polling': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.messaging.channels.AMFChannel'},
        'protocol': { type: 'String', access: 'readonly', declaredBy: 'mx.messaging.channels.AMFChannel'}
      };
    },
    methods: function () {
      return {
        'AMFChannel': { type: '', declaredBy: 'mx.messaging.channels.AMFChannel', parameters: function () { return [ 'String', true ,'String', true ]; }},
        'applySettings': { type: 'void', declaredBy: 'mx.messaging.channels.AMFChannel', parameters: function () { return [ 'XML', false ]; }},
        'AppendToGatewayUrl': { type: 'void', declaredBy: 'mx.messaging.channels.AMFChannel', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.channels.AMFChannel.prototype.ROYALE_COMPILE_FLAGS = 26;
