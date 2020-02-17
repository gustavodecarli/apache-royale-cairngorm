/**
 * Generated by Apache Royale Compiler from mx/messaging/channels/PollingChannel.as
 * mx.messaging.channels.PollingChannel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.channels.PollingChannel');
/* Royale Dependency List: XML,mx.core.mx_internal,mx.events.PropertyChangeEvent,mx.logging.ILogger,mx.logging.Log,mx.messaging.ChannelSet,mx.messaging.Consumer,mx.messaging.ConsumerMessageDispatcher,mx.messaging.MessageAgent,mx.messaging.errors.ArgumentError,mx.messaging.events.ChannelFaultEvent,mx.messaging.events.MessageEvent,mx.messaging.messages.AcknowledgeMessage,mx.messaging.messages.CommandMessage,mx.messaging.messages.ErrorMessage,mx.messaging.messages.IMessage,mx.messaging.messages.MessagePerformanceUtils,mx.resources.IResourceManager,mx.resources.ResourceManager,org.apache.royale.events.Event,org.apache.royale.utils.Timer,org.apache.royale.utils.Language*/
goog.provide('mx.messaging.channels.PollingChannel.PollCommandMessageResponder');

goog.require('mx.messaging.Channel');
goog.require('mx.messaging.MessageResponder');



/**
 *  Creates a new PollingChannel instance with the specified id. Once a PollingChannel is
 *  connected and begins polling, it will issue a poll request once every three seconds
 *  by default.
 *
 *  <p><b>Note</b>: The PollingChannel type should not be constructed directly. Instead
 *  create instances of protocol specific subclasses such as HTTPChannel or
 *  AMFChannel that extend it.</p>
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
 * @extends {mx.messaging.Channel}
 * @param {string=} id
 * @param {string=} uri
 */
mx.messaging.channels.PollingChannel = function(id, uri) {
  id = typeof id !== 'undefined' ? id : null;
  uri = typeof uri !== 'undefined' ? uri : null;
  
  this.mx_messaging_channels_PollingChannel_resourceManager = mx.resources.ResourceManager.getInstance();
  mx.messaging.channels.PollingChannel.base(this, 'constructor', id, uri);
  this.mx_messaging_channels_PollingChannel__pollingEnabled = true;
  this.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll = false;
  if (this.timerRequired()) {
    this.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval = mx.messaging.channels.PollingChannel.DEFAULT_POLLING_INTERVAL;
    this.http_$$www_adobe_com$2006$flex$mx$internal___timer = new org.apache.royale.utils.Timer(this.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval, 1);
    this.http_$$www_adobe_com$2006$flex$mx$internal___timer.addEventListener(org.apache.royale.utils.Timer.TIMER, org.apache.royale.utils.Language.closure(this.internalPoll, this, 'internalPoll'));
  }
};
goog.inherits(mx.messaging.channels.PollingChannel, mx.messaging.Channel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.channels.PollingChannel', mx.messaging.channels.PollingChannel);


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.channels.PollingChannel.POLLING_ENABLED = "polling-enabled";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.channels.PollingChannel.POLLING_INTERVAL_MILLIS = "polling-interval-millis";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.channels.PollingChannel.POLLING_INTERVAL_LEGACY = "polling-interval-seconds";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.channels.PollingChannel.PIGGYBACKING_ENABLED = "piggybacking-enabled";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.channels.PollingChannel.LOGIN_AFTER_DISCONNECT = "login-after-disconnect";


/**
 * @type {number}
 */
mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval = 0;


/**
 * @type {boolean}
 */
mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll;


/**
 * @private
 * @type {number}
 */
mx.messaging.channels.PollingChannel.prototype.mx_messaging_channels_PollingChannel__pollingRef = -1;


/**
 * @type {boolean}
 */
mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding;


/**
 * @type {org.apache.royale.utils.Timer}
 */
mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal___timer;


/**
 * @private
 * @type {mx.resources.IResourceManager}
 */
mx.messaging.channels.PollingChannel.prototype.mx_messaging_channels_PollingChannel_resourceManager;


/**
 *  @asprivate
 *  Reset polling state following a transient disconnect if possible.
 * 
 *  @asparam value The new connected state.
 * @export
 * @override
 */
mx.messaging.channels.PollingChannel.prototype.setConnected = function(value) {
  if (this.connected != value) {
    if (value) {
      var foreachiter0_target = this.channelSets;
      for (var foreachiter0 in foreachiter0_target) 
      {
      var channelSet = foreachiter0_target[foreachiter0];
      {
        var foreachiter1_target = channelSet.messageAgents;
        for (var foreachiter1 in foreachiter1_target) 
        {
        var agent = foreachiter1_target[foreachiter1];
        {
          if (org.apache.royale.utils.Language.is(agent, mx.messaging.Consumer) && org.apache.royale.utils.Language.as(agent, mx.messaging.Consumer).subscribed) {
            this.enablePolling();
          }
        }}
        
      }}
      
    }
    mx.messaging.channels.PollingChannel.superClass_.setConnected.apply(this, [ value] );
  }
};


/**
 * @export
 * @type {boolean}
 */
mx.messaging.channels.PollingChannel.prototype._loginAfterDisconnect;


/**
 * @private
 * @type {boolean}
 */
mx.messaging.channels.PollingChannel.prototype.mx_messaging_channels_PollingChannel__piggybackingEnabled;


/**
 * @private
 * @type {boolean}
 */
mx.messaging.channels.PollingChannel.prototype.mx_messaging_channels_PollingChannel__pollingEnabled;


/**
 *  Sends the specified message to its target destination.
 *  Subclasses must override the <code>internalSend()</code> method to
 *  perform the actual send.
 *  <code>PollingChannel</code> will wrap outbound messages in poll requests if a poll
 *  is not currently outstanding.
 *
 *  @asparam agent The MessageAgent that is sending the message.
 * 
 *  @asparam message The Message to send.
 * 
 *  @throws mx.messaging.errors.InvalidDestinationError If neither the MessageAgent nor the
 *                                  message specify a destination.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @override
 */
mx.messaging.channels.PollingChannel.prototype.send = function(agent, message) {
  var /** @type {boolean} */ piggyback = false;
  if (!this.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding && this.mx_messaging_channels_PollingChannel__piggybackingEnabled && !org.apache.royale.utils.Language.is(message, mx.messaging.messages.CommandMessage)) {
    if (this.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll) {
      piggyback = true;
    } else {
      var /** @type {mx.messaging.ConsumerMessageDispatcher} */ consumerDispatcher = mx.messaging.ConsumerMessageDispatcher.getInstance();
      if (consumerDispatcher.isChannelUsedForSubscriptions(this))
        piggyback = true;
    }
  }
  if (piggyback)
    this.internalPoll();
  mx.messaging.channels.PollingChannel.superClass_.send.apply(this, [ agent, message] );
  if (piggyback) {
    var /** @type {mx.messaging.messages.CommandMessage} */ msg = new mx.messaging.messages.CommandMessage();
    msg.operation = mx.messaging.messages.CommandMessage.POLL_OPERATION;
    if (mx.logging.Log.isDebug())
      this._log.debug("'{0}' channel sending poll message\n{1}\n", this.id, msg.toString());
    try {
      this.internalSend(new mx.messaging.channels.PollingChannel.PollCommandMessageResponder(null, msg, this, this._log));
    } catch (e) {
      this.http_$$www_adobe_com$2006$flex$mx$internal__stopPolling();
      throw e;
    }
  }
};


/**
 *  @asprivate
 *  This method prevents polling from continuing when the Channel can not connect.
 * 
 *  @asparam event The ChannelFaultEvent.
 * @export
 * @override
 */
mx.messaging.channels.PollingChannel.prototype.connectFailed = function(event) {
  this.http_$$www_adobe_com$2006$flex$mx$internal__stopPolling();
  mx.messaging.channels.PollingChannel.superClass_.connectFailed.apply(this, [ event] );
};


/**
 *  @asprivate
 *  If a consumer sends a subscribe message to the server, we need to
 *  track that polling should occur.  In addition, we don't however, want
 *  to begin polling before we actually receive the acknowledgement that
 *  we have successfully subscribed.  This method is used to return a
 *  special message handler that will notify us when we have a successful
 *  subscribe and can safely begin polling.  This case is the reverse for
 *  unsubscribe, we need to track that we successfully unsubscribed and
 *  there are no more consumers attached that need polling.
 * 
 *  In addition to handling this case, this method also returns a special
 *  responder to handle the results or fault for a poll request.
 *
 *  @asparam agent MessageAgent that requested the message be sent.
 * 
 *  @asparam msg Message to be sent.
 * 
 *  @asreturn A PollSyncMessageResponder for subscribe/unsubscriber requests or a
 *          PollCommandMessageResponder for poll requests; otherwise the default
 *          message responder.
 * @export
 * @override
 */
mx.messaging.channels.PollingChannel.prototype.getMessageResponder = function(agent, msg) {
  if (org.apache.royale.utils.Language.is(msg, mx.messaging.messages.CommandMessage) && (org.apache.royale.utils.Language.as(msg, mx.messaging.messages.CommandMessage).operation == mx.messaging.messages.CommandMessage.POLL_OPERATION)) {
    return new mx.messaging.channels.PollingChannel.PollCommandMessageResponder(agent, msg, this, this._log);
  }
  return this.getDefaultMessageResponder(agent, msg);
};


/**
 *  @asprivate 
 *  Disconnects from the remote destination.
 * @export
 * @override
 */
mx.messaging.channels.PollingChannel.prototype.internalDisconnect = function(rejected) {
  rejected = typeof rejected !== 'undefined' ? rejected : false;
  this.http_$$www_adobe_com$2006$flex$mx$internal__stopPolling();
  mx.messaging.channels.PollingChannel.superClass_.internalDisconnect.apply(this, [ rejected] );
};


/**
 *  Enables polling based on the number of times <code>enablePolling()</code>
 *  and <code>disablePolling()</code> have been invoked. If the net result is to enable
 *  polling the channel will poll the server on behalf of connected MessageAgents.
 *  <p>Invoked automatically based upon subscribing or unsubscribing from a remote
 *  destination over a PollingChannel.</p>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 */
mx.messaging.channels.PollingChannel.prototype.enablePolling = function() {
  this.mx_messaging_channels_PollingChannel__pollingRef++;
  if (this.mx_messaging_channels_PollingChannel__pollingRef == 0)
    this.startPolling();
};


/**
 *  Disables polling based on the number of times <code>enablePolling()</code>
 *  and <code>disablePolling()</code> have been invoked. If the net result is to disable
 *  polling the channel stops polling.
 *  <p>Invoked automatically based upon subscribing or unsubscribing from a remote
 *  destination over a PollingChannel.</p>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 */
mx.messaging.channels.PollingChannel.prototype.disablePolling = function() {
  this.mx_messaging_channels_PollingChannel__pollingRef--;
  if (this.mx_messaging_channels_PollingChannel__pollingRef < 0)
    this.http_$$www_adobe_com$2006$flex$mx$internal__stopPolling();
};


/**
 *  Initiates a poll operation if there are consumers subscribed to this channel, 
 *  and polling is enabled for this channel.
 *
 *  Note that this method will not start a new poll if one is currently in progress.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 */
mx.messaging.channels.PollingChannel.prototype.poll = function() {
  this.internalPoll();
};


/**
 *  @asprivate
 *  This method allows a PollCommandMessageResponder to indicate that the 
 *  channel has lost its connectivity.
 * 
 *  @asparam rejected Channel will be rejected and will not attempt to reconnect if 
 *  this flag is true
 * @export
 * @param {boolean=} rejected
 */
mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__pollFailed = function(rejected) {
  rejected = typeof rejected !== 'undefined' ? rejected : false;
  this.internalDisconnect(rejected);
};


/**
 *  @asprivate
 *  This method is invoked automatically when <code>disablePolling()</code>
 *  is called and it results in a net negative number of requests to poll.
 *  
 *  mx_internal to allow the poll responder to shut down polling if a general,
 *  fatal error occurs.
 * @export
 */
mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__stopPolling = function() {
  if (mx.logging.Log.isInfo())
    this._log.info("'{0}' channel polling stopped.", this.id);
  if (this.http_$$www_adobe_com$2006$flex$mx$internal___timer != null)
    this.http_$$www_adobe_com$2006$flex$mx$internal___timer.stop();
  this.mx_messaging_channels_PollingChannel__pollingRef = -1;
  this.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll = false;
  this.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding = false;
};


/**
 *  @asprivate
 *  Processes polling related configuration settings.
 *  
 *  @asparam settings The Channel settings.
 * @export
 * @param {XML} settings
 */
mx.messaging.channels.PollingChannel.prototype.applyPollingSettings = function(settings) {
  if (settings.child('properties').length() == 0)
    return;
  var /** @type {XML} */ props = settings.child('properties')[0];
  if (props.child(mx.messaging.channels.PollingChannel.POLLING_ENABLED).length() != 0)
    this.internalPollingEnabled = props.child(mx.messaging.channels.PollingChannel.POLLING_ENABLED).toString() == mx.messaging.Channel.TRUE;
  if (props.child(mx.messaging.channels.PollingChannel.POLLING_INTERVAL_MILLIS).length() != 0)
    this.http_$$www_adobe_com$2006$flex$mx$internal__internalPollingInterval = parseInt(props.child(mx.messaging.channels.PollingChannel.POLLING_INTERVAL_MILLIS).toString(), undefined);
  else if (props.child(mx.messaging.channels.PollingChannel.POLLING_INTERVAL_LEGACY).length() != 0)
    this.http_$$www_adobe_com$2006$flex$mx$internal__internalPollingInterval = parseInt(props.child(mx.messaging.channels.PollingChannel.POLLING_INTERVAL_LEGACY).toString(), undefined) * 1000;
  if (props.child(mx.messaging.channels.PollingChannel.PIGGYBACKING_ENABLED).length() != 0)
    this.internalPiggybackingEnabled = props.child(mx.messaging.channels.PollingChannel.PIGGYBACKING_ENABLED).toString() == mx.messaging.Channel.TRUE;
  if (props.child(mx.messaging.channels.PollingChannel.LOGIN_AFTER_DISCONNECT).length() != 0)
    this._loginAfterDisconnect = props.child(mx.messaging.channels.PollingChannel.LOGIN_AFTER_DISCONNECT).toString() == mx.messaging.Channel.TRUE;
};


/**
 *  @asprivate
 * @export
 * @param {mx.messaging.MessageAgent} agent
 * @param {mx.messaging.messages.IMessage} msg
 * @return {mx.messaging.MessageResponder}
 */
mx.messaging.channels.PollingChannel.prototype.getDefaultMessageResponder = function(agent, msg) {
  return mx.messaging.channels.PollingChannel.superClass_.getMessageResponder.apply(this, [ agent, msg] );
};


/**
 *  @asprivate 
 *  Requests the server return any messages queued since the last poll request for this FlexClient.
 *
 *  @asparam event Event dispatched by the polling Timer.
 * @export
 * @param {org.apache.royale.events.Event=} event
 */
mx.messaging.channels.PollingChannel.prototype.internalPoll = function(event) {
  event = typeof event !== 'undefined' ? event : null;
  if (!this.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding) {
    if (mx.logging.Log.isInfo())
      this._log.info("'{0}' channel requesting queued messages.", this.id);
    if (this.http_$$www_adobe_com$2006$flex$mx$internal__timerRunning)
      this.http_$$www_adobe_com$2006$flex$mx$internal___timer.stop();
    var /** @type {mx.messaging.messages.CommandMessage} */ poll = new mx.messaging.messages.CommandMessage();
    poll.operation = mx.messaging.messages.CommandMessage.POLL_OPERATION;
    if (mx.logging.Log.isDebug())
      this._log.debug("'{0}' channel sending poll message\n{1}\n", this.id, poll.toString());
    try {
      this.internalSend(new mx.messaging.channels.PollingChannel.PollCommandMessageResponder(null, poll, this, this._log));
      this.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding = true;
    } catch (e) {
      this.http_$$www_adobe_com$2006$flex$mx$internal__stopPolling();
      throw e;
    }
  } else {
    if (mx.logging.Log.isInfo())
      this._log.info("'{0}' channel waiting for poll response.", this.id);
  }
};


/**
 *  @asprivate
 *  This method is invoked automatically when <code>enablePolling()</code>
 *  is called and it results in net positive number of requests to poll.
 * @export
 */
mx.messaging.channels.PollingChannel.prototype.startPolling = function() {
  if (this.mx_messaging_channels_PollingChannel__pollingEnabled) {
    if (mx.logging.Log.isInfo())
      this._log.info("'{0}' channel polling started.", this.id);
    this.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll = true;
    this.poll();
  }
};


/**
 *  @asprivate
 *  Returns true if this channel requires a timer for polling.
 * @export
 * @return {boolean}
 */
mx.messaging.channels.PollingChannel.prototype.timerRequired = function() {
  return true;
};


/**
 * @private
 * @const
 * @type {number}
 */
mx.messaging.channels.PollingChannel.DEFAULT_POLLING_INTERVAL = 3000;


mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__loginAfterDisconnect = function() {
  return this._loginAfterDisconnect;
};


mx.messaging.channels.PollingChannel.prototype.get__internalPiggybackingEnabled = function() {
  return this.mx_messaging_channels_PollingChannel__piggybackingEnabled;
};


mx.messaging.channels.PollingChannel.prototype.set__internalPiggybackingEnabled = function(value) {
  this.mx_messaging_channels_PollingChannel__piggybackingEnabled = value;
};


mx.messaging.channels.PollingChannel.prototype.get__internalPollingEnabled = function() {
  return this.mx_messaging_channels_PollingChannel__pollingEnabled;
};


mx.messaging.channels.PollingChannel.prototype.set__internalPollingEnabled = function(value) {
  this.mx_messaging_channels_PollingChannel__pollingEnabled = value;
  if (!value && (this.http_$$www_adobe_com$2006$flex$mx$internal__timerRunning || (!this.http_$$www_adobe_com$2006$flex$mx$internal__timerRunning && (this.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval == 0)))) {
    this.http_$$www_adobe_com$2006$flex$mx$internal__stopPolling();
  } else if (value && this.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll && !this.http_$$www_adobe_com$2006$flex$mx$internal__timerRunning) {
    this.startPolling();
  }
};


mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__internalPollingInterval = function() {
  return Number((this.http_$$www_adobe_com$2006$flex$mx$internal___timer == null) ? 0 : this.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval);
};


mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__set__internalPollingInterval = function(value) {
  if (value == 0) {
    this.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval = (value) >> 0;
    if (this.http_$$www_adobe_com$2006$flex$mx$internal___timer != null) {
      this.http_$$www_adobe_com$2006$flex$mx$internal___timer.stop();
    }
    if (this.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll) {
      this.startPolling();
    }
  } else if (value > 0) {
    if (this.http_$$www_adobe_com$2006$flex$mx$internal___timer != null) {
      this.http_$$www_adobe_com$2006$flex$mx$internal___timer.delay = this.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval = (value) >> 0;
      if (!this.http_$$www_adobe_com$2006$flex$mx$internal__timerRunning && this.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll) {
        this.startPolling();
      }
    }
  } else {
    var /** @type {string} */ message = this.mx_messaging_channels_PollingChannel_resourceManager.getString("messaging", "pollingIntervalNonPositive");
    throw new mx.messaging.errors.ArgumentError(message);
  }
};


mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__realtime = function() {
  return this.mx_messaging_channels_PollingChannel__pollingEnabled;
};


mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__timerRunning = function() {
  return !!((this.http_$$www_adobe_com$2006$flex$mx$internal___timer != null) && org.apache.royale.utils.Language.closure(this.http_$$www_adobe_com$2006$flex$mx$internal___timer.running, this.http_$$www_adobe_com$2006$flex$mx$internal___timer, 'running'));
};


Object.defineProperties(mx.messaging.channels.PollingChannel.prototype, /** @lends {mx.messaging.channels.PollingChannel.prototype} */ {
/**
  * @export
  * @type {boolean} */
http_$$www_adobe_com$2006$flex$mx$internal__loginAfterDisconnect: {
get: mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__loginAfterDisconnect},
/**
  * @type {boolean} */
internalPiggybackingEnabled: {
get: mx.messaging.channels.PollingChannel.prototype.get__internalPiggybackingEnabled,
set: mx.messaging.channels.PollingChannel.prototype.set__internalPiggybackingEnabled},
/**
  * @type {boolean} */
internalPollingEnabled: {
get: mx.messaging.channels.PollingChannel.prototype.get__internalPollingEnabled,
set: mx.messaging.channels.PollingChannel.prototype.set__internalPollingEnabled},
/**
  * @export
  * @type {number} */
http_$$www_adobe_com$2006$flex$mx$internal__internalPollingInterval: {
get: mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__internalPollingInterval,
set: mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__set__internalPollingInterval},
/**
  * @export
  * @type {boolean} */
http_$$www_adobe_com$2006$flex$mx$internal__realtime: {
get: mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__realtime},
/**
  * @export
  * @type {boolean} */
http_$$www_adobe_com$2006$flex$mx$internal__timerRunning: {
get: mx.messaging.channels.PollingChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal__get__timerRunning}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.channels.PollingChannel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PollingChannel', qName: 'mx.messaging.channels.PollingChannel', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.channels.PollingChannel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::_pollingInterval': { type: 'int', get_set: function (/** mx.messaging.channels.PollingChannel */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval;}},
        'http://www.adobe.com/2006/flex/mx/internal::_shouldPoll': { type: 'Boolean', get_set: function (/** mx.messaging.channels.PollingChannel */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll;}},
        'http://www.adobe.com/2006/flex/mx/internal::pollOutstanding': { type: 'Boolean', get_set: function (/** mx.messaging.channels.PollingChannel */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding = v : inst.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding;}},
        'http://www.adobe.com/2006/flex/mx/internal::_timer': { type: 'org.apache.royale.utils.Timer', get_set: function (/** mx.messaging.channels.PollingChannel */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___timer = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___timer;}}
      };
    },
    accessors: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::loginAfterDisconnect': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.messaging.channels.PollingChannel'},
        'http://www.adobe.com/2006/flex/mx/internal::internalPollingInterval': { type: 'Number', access: 'readwrite', declaredBy: 'mx.messaging.channels.PollingChannel'},
        'http://www.adobe.com/2006/flex/mx/internal::realtime': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.messaging.channels.PollingChannel'},
        'http://www.adobe.com/2006/flex/mx/internal::timerRunning': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.messaging.channels.PollingChannel'}
      };
    },
    methods: function () {
      return {
        'PollingChannel': { type: '', declaredBy: 'mx.messaging.channels.PollingChannel', parameters: function () { return [ 'String', true ,'String', true ]; }},
        'send': { type: 'void', declaredBy: 'mx.messaging.channels.PollingChannel', parameters: function () { return [ 'mx.messaging.MessageAgent', false ,'mx.messaging.messages.IMessage', false ]; }},
        'enablePolling': { type: 'void', declaredBy: 'mx.messaging.channels.PollingChannel'},
        'disablePolling': { type: 'void', declaredBy: 'mx.messaging.channels.PollingChannel'},
        'poll': { type: 'void', declaredBy: 'mx.messaging.channels.PollingChannel'},
        'http://www.adobe.com/2006/flex/mx/internal::pollFailed': { type: 'void', declaredBy: 'mx.messaging.channels.PollingChannel', parameters: function () { return [ 'Boolean', true ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::stopPolling': { type: 'void', declaredBy: 'mx.messaging.channels.PollingChannel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.channels.PollingChannel.prototype.ROYALE_COMPILE_FLAGS = 26;



/**
 *  @asprivate 
 *  Initializes an instance of the message responder that handles
 *  multiple messages received from a poll request that a Channel makes.
 *
 *  @asparam channel PollingChannel.
 * @constructor
 * @extends {mx.messaging.MessageResponder}
 * @param {mx.messaging.MessageAgent} agent
 * @param {mx.messaging.messages.IMessage} msg
 * @param {mx.messaging.channels.PollingChannel} channel
 * @param {mx.logging.ILogger} log
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder = function(agent, msg, channel, log) {
  
  this.PollCommandMessageResponder_resourceManager = mx.resources.ResourceManager.getInstance();
  mx.messaging.channels.PollingChannel.PollCommandMessageResponder.base(this, 'constructor', agent, msg, channel);
  this.PollCommandMessageResponder__log = log;
  channel.addEventListener(mx.events.PropertyChangeEvent.PROPERTY_CHANGE, org.apache.royale.utils.Language.closure(this.PollCommandMessageResponder_channelPropertyChangeHandler, this, 'channelPropertyChangeHandler'));
};
goog.inherits(mx.messaging.channels.PollingChannel.PollCommandMessageResponder, mx.messaging.MessageResponder);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.channels.PollingChannel.PollCommandMessageResponder', mx.messaging.channels.PollingChannel.PollCommandMessageResponder);


/**
 * @private
 * @type {mx.logging.ILogger}
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.PollCommandMessageResponder__log;


/**
 * @private
 * @type {mx.resources.IResourceManager}
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.PollCommandMessageResponder_resourceManager;


/**
 * @private
 * @type {boolean}
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.PollCommandMessageResponder_suppressHandlers;


/**
 *  @asprivate
 *  Handles a poll command result from the server which is either an empty acknowledgement
 *  if there were no messages to deliver or a response containing a list of messages to 
 *  dispatch in its body.
 * 
 *  @asparam msg The result message.
 * @export
 * @override
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.resultHandler = function(msg) {
  var /** @type {mx.messaging.channels.PollingChannel} */ pollingChannel = org.apache.royale.utils.Language.as(this.channel, mx.messaging.channels.PollingChannel);
  this.channel.removeEventListener(mx.events.PropertyChangeEvent.PROPERTY_CHANGE, org.apache.royale.utils.Language.closure(this.PollCommandMessageResponder_channelPropertyChangeHandler, this, 'channelPropertyChangeHandler'));
  if (this.PollCommandMessageResponder_suppressHandlers) {
    if (mx.logging.Log.isDebug()) {
      this.PollCommandMessageResponder__log.debug("'{0}' channel ignoring response for poll request preceeding most recent disconnect.\n", this.channel.id);
    }
    this.PollCommandMessageResponder_doPoll();
    return;
  }
  if (org.apache.royale.utils.Language.is(msg, mx.messaging.messages.CommandMessage)) {
    pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding = false;
    if (msg.headers[mx.messaging.messages.CommandMessage.NO_OP_POLL_HEADER] == true)
      return;
    if (msg.body != null) {
      var /** @type {Array} */ messageList = org.apache.royale.utils.Language.as(msg.body, Array);
      var /** @type {number} */ l = (messageList.length) >>> 0;
      var /** @type {number} */ i = 0;
      for (; i < l; i++) {
        var /** @type {mx.messaging.messages.IMessage} */ message = messageList[i];
        if (mx.logging.Log.isDebug()) {
          this.PollCommandMessageResponder__log.debug("'{0}' channel got message\n{1}\n", this.channel.id, message.toString());
          if (this.channel.mpiEnabled) {
            try {
              var /** @type {mx.messaging.messages.MessagePerformanceUtils} */ mpiutil = new mx.messaging.messages.MessagePerformanceUtils(message);
              this.PollCommandMessageResponder__log.debug(mpiutil.prettyPrint());
            } catch (e) {
              this.PollCommandMessageResponder__log.debug("Could not get message performance information for: " + msg.toString());
            }
          }
        }
        this.channel.dispatchEvent(mx.messaging.events.MessageEvent.createEvent(mx.messaging.events.MessageEvent.MESSAGE, message));
      }
    }
  } else if (org.apache.royale.utils.Language.is(msg, mx.messaging.messages.AcknowledgeMessage)) {
    pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal__pollOutstanding = false;
  } else {
    var /** @type {mx.messaging.messages.ErrorMessage} */ errMsg = new mx.messaging.messages.ErrorMessage();
    errMsg.faultDetail = this.PollCommandMessageResponder_resourceManager.getString("messaging", "receivedNull");
    this.status(errMsg);
    return;
  }
  if (msg.headers[mx.messaging.messages.CommandMessage.POLL_WAIT_HEADER] != null) {
    this.PollCommandMessageResponder_doPoll((msg.headers[mx.messaging.messages.CommandMessage.POLL_WAIT_HEADER]) >> 0);
  } else {
    this.PollCommandMessageResponder_doPoll();
  }
};


/**
 *  @asprivate
 *  Handles a fault while attempting to poll.
 * 
 *  @asparam msg The ErrorMessage from the remote destination.
 * @export
 * @override
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.statusHandler = function(msg) {
  this.channel.removeEventListener(mx.events.PropertyChangeEvent.PROPERTY_CHANGE, org.apache.royale.utils.Language.closure(this.PollCommandMessageResponder_channelPropertyChangeHandler, this, 'channelPropertyChangeHandler'));
  if (this.PollCommandMessageResponder_suppressHandlers) {
    if (mx.logging.Log.isDebug()) {
      this.PollCommandMessageResponder__log.debug("'{0}' channel ignoring response for poll request preceeding most recent disconnect.\n", this.channel.id);
    }
    return;
  }
  var /** @type {mx.messaging.channels.PollingChannel} */ pollingChannel = org.apache.royale.utils.Language.as(this.channel, mx.messaging.channels.PollingChannel, true);
  pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal__stopPolling();
  var /** @type {mx.messaging.messages.ErrorMessage} */ errMsg = org.apache.royale.utils.Language.as(msg, mx.messaging.messages.ErrorMessage);
  var /** @type {string} */ details = (errMsg != null) ? errMsg.faultDetail : "";
  var /** @type {mx.messaging.events.ChannelFaultEvent} */ faultEvent = mx.messaging.events.ChannelFaultEvent.createEvent(pollingChannel, false, "Channel.Polling.Error", "error", details);
  faultEvent.rootCause = msg;
  pollingChannel.dispatchEvent(faultEvent);
  if (errMsg != null && errMsg.faultCode == "Server.PollNotSupported") {
    pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal__pollFailed(true);
  } else {
    pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal__pollFailed(false);
  }
};


/**
 *  @asprivate
 *  Watch for 'connected' property change and in the event of a disconnect,
 *  suppress poll result/fault handling.
 * 
 *  @asparam event A PropertyChangeEvent dispatched by the underlying channel.
 * @private
 * @param {mx.events.PropertyChangeEvent} event
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.PollCommandMessageResponder_channelPropertyChangeHandler = function(event) {
  if (event.property == "connected" && !event.newValue) {
    this.PollCommandMessageResponder_suppressHandlers = true;
  }
};


/**
 *  @asprivate
 *  Helper method to run or schedule the next poll for the underlying channel.
 * 
 *  @asparam adaptivePollWait The optional wait time before the next poll should be issued.
 * @private
 * @param {number=} adaptivePollWait
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.PollCommandMessageResponder_doPoll = function(adaptivePollWait) {
  adaptivePollWait = typeof adaptivePollWait !== 'undefined' ? adaptivePollWait : 0;
  var /** @type {mx.messaging.channels.PollingChannel} */ pollingChannel = org.apache.royale.utils.Language.as(this.channel, mx.messaging.channels.PollingChannel, true);
  if (pollingChannel.connected && pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal___shouldPoll) {
    if (adaptivePollWait == 0) {
      if (pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal__internalPollingInterval == 0) {
        pollingChannel.poll();
      } else if (!pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal__timerRunning) {
        pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal___timer.delay = pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal___pollingInterval;
        pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal___timer.start();
      }
    } else {
      pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal___timer.delay = adaptivePollWait;
      pollingChannel.http_$$www_adobe_com$2006$flex$mx$internal___timer.start();
    }
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PollCommandMessageResponder', qName: 'mx.messaging.channels.PollingChannel.PollCommandMessageResponder', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'PollCommandMessageResponder': { type: '', declaredBy: 'mx.messaging.channels.PollingChannel.PollCommandMessageResponder', parameters: function () { return [ 'mx.messaging.MessageAgent', false ,'mx.messaging.messages.IMessage', false ,'mx.messaging.channels.PollingChannel', false ,'mx.logging.ILogger', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.channels.PollingChannel.PollCommandMessageResponder.prototype.ROYALE_COMPILE_FLAGS = 26;
