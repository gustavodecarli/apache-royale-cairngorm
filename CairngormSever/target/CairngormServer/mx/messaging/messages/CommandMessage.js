/**
 * Generated by Apache Royale Compiler from mx/messaging/messages/CommandMessage.as
 * mx.messaging.messages.CommandMessage
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.messages.CommandMessage');
/* Royale Dependency List: mx.messaging.messages.CommandMessageExt,mx.messaging.messages.IMessage,org.apache.royale.utils.net.IDataInput,org.apache.royale.utils.net.IDataOutput,org.apache.royale.utils.Language,XML*/

goog.require('mx.messaging.messages.AsyncMessage');



/**
 *  Constructs an instance of a CommandMessage with an empty body and header
 *  and a default <code>operation</code> of <code>UNKNOWN_OPERATION</code>.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3
 * @constructor
 * @extends {mx.messaging.messages.AsyncMessage}
 */
mx.messaging.messages.CommandMessage = function() {
  mx.messaging.messages.CommandMessage.base(this, 'constructor');
  this.operation = mx.messaging.messages.CommandMessage.UNKNOWN_OPERATION;
};
goog.inherits(mx.messaging.messages.CommandMessage, mx.messaging.messages.AsyncMessage);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.messages.CommandMessage', mx.messaging.messages.CommandMessage);


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.SUBSCRIBE_OPERATION = 0;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.UNSUBSCRIBE_OPERATION = 1;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.POLL_OPERATION = 2;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.CLIENT_SYNC_OPERATION = 4;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.CLIENT_PING_OPERATION = 5;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.CLUSTER_REQUEST_OPERATION = 7;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.LOGIN_OPERATION = 8;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.LOGOUT_OPERATION = 9;


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.MESSAGING_VERSION = "DSMessagingVersion";


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.SUBSCRIPTION_INVALIDATE_OPERATION = 10;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.MULTI_SUBSCRIBE_OPERATION = 11;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.DISCONNECT_OPERATION = 12;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.TRIGGER_CONNECT_OPERATION = 13;


/**
 * @export
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.UNKNOWN_OPERATION = 10000;


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.AUTHENTICATION_MESSAGE_REF_TYPE = "flex.messaging.messages.AuthenticationMessage";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.SELECTOR_HEADER = "DSSelector";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.PRESERVE_DURABLE_HEADER = "DSPreserveDurable";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.NEEDS_CONFIG_HEADER = "DSNeedsConfig";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.ADD_SUBSCRIPTIONS = "DSAddSub";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.REMOVE_SUBSCRIPTIONS = "DSRemSub";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.SUBTOPIC_SEPARATOR = "_;_";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.POLL_WAIT_HEADER = "DSPollWait";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.NO_OP_POLL_HEADER = "DSNoOpPoll";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.CREDENTIALS_CHARSET_HEADER = "DSCredentialsCharset";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.MAX_FREQUENCY_HEADER = "DSMaxFrequency";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.messages.CommandMessage.HEARTBEAT_HEADER = "DS<3";


/**
 * @private
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.OPERATION_FLAG = 1;


/**
 * @private
 * @type {Object}
 */
mx.messaging.messages.CommandMessage.operationTexts = null;


/**
 * @private
 * @type {number}
 */
mx.messaging.messages.CommandMessage.prototype.mx_messaging_messages_CommandMessage__operation = 0;


/**
 * @asprivate
 * @export
 * @override
 */
mx.messaging.messages.CommandMessage.prototype.getSmallMessage = function() {
  if (this.operation == mx.messaging.messages.CommandMessage.POLL_OPERATION) {
    return new mx.messaging.messages.CommandMessageExt(this);
  }
  return null;
};


/**
 *  @asprivate
 * @export
 * @override
 */
mx.messaging.messages.CommandMessage.prototype.addDebugAttributes = function(attributes) {
  mx.messaging.messages.CommandMessage.superClass_.addDebugAttributes.apply(this, [ attributes] );
  attributes["operation"] = mx.messaging.messages.CommandMessage.getOperationAsString(this.operation);
};


/**
 *  Provides a description of the operation specified.
 *  This method is used in <code>toString()</code> operations on this
 *  message.
 *
 *  @asparam op One of the CommandMessage operation constants.
 *
 *  @asreturn Short name for the operation.
 *
 *  @example
 *  <code><pre>
 *     var msg:CommandMessage = CommandMessage(event.message);
 *     trace("Current operation -'"+
 *            CommandMessage.getOperationAsString(msg.operation)+ "'.");
 *  </pre></code>
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3
 * @export
 * @param {number} op
 * @return {string}
 */
mx.messaging.messages.CommandMessage.getOperationAsString = function(op) {
  if (mx.messaging.messages.CommandMessage.operationTexts == null) {
    mx.messaging.messages.CommandMessage.operationTexts = {};
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.SUBSCRIBE_OPERATION] = "subscribe";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.UNSUBSCRIBE_OPERATION] = "unsubscribe";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.POLL_OPERATION] = "poll";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.CLIENT_SYNC_OPERATION] = "client sync";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.CLIENT_PING_OPERATION] = "client ping";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.CLUSTER_REQUEST_OPERATION] = "cluster request";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.LOGIN_OPERATION] = "login";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.LOGOUT_OPERATION] = "logout";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.SUBSCRIPTION_INVALIDATE_OPERATION] = "subscription invalidate";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.MULTI_SUBSCRIBE_OPERATION] = "multi-subscribe";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.DISCONNECT_OPERATION] = "disconnect";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.TRIGGER_CONNECT_OPERATION] = "trigger connect";
    mx.messaging.messages.CommandMessage.operationTexts[mx.messaging.messages.CommandMessage.UNKNOWN_OPERATION] = "unknown";
  }
  var /** @type {*} */ result = mx.messaging.messages.CommandMessage.operationTexts[op];
  return result == undefined ? op.toString() : String(result);
};


/**
 * @asprivate
 * @export
 * @override
 */
mx.messaging.messages.CommandMessage.prototype.readExternal = function(input) {
  mx.messaging.messages.CommandMessage.superClass_.readExternal.apply(this, [ input] );
  var /** @type {Array} */ flagsArray = this.readFlags(input);
  for (var /** @type {number} */ i = 0; i < flagsArray.length; i++) {
    var /** @type {number} */ flags = (org.apache.royale.utils.Language.as(flagsArray[i], org.apache.royale.utils.Language.synthType('uint'))) >>> 0;
    var /** @type {number} */ reservedPosition = 0;
    if (i == 0) {
      if ((flags & mx.messaging.messages.CommandMessage.OPERATION_FLAG) != 0)
        this.operation = (org.apache.royale.utils.Language.as(input.readObject(), org.apache.royale.utils.Language.synthType('uint'))) >>> 0;
      reservedPosition = 1;
    }
    if ((flags >> reservedPosition) != 0) {
      for (var /** @type {number} */ j = reservedPosition; j < 6; j++) {
        if (((flags >> j) & 1) != 0) {
          input.readObject();
        }
      }
    }
  }
};


/**
 * @asprivate
 * @export
 * @override
 */
mx.messaging.messages.CommandMessage.prototype.writeExternal = function(output) {
  mx.messaging.messages.CommandMessage.superClass_.writeExternal.apply(this, [ output] );
  var /** @type {number} */ flags = 0;
  if (this.operation != 0)
    flags |= mx.messaging.messages.CommandMessage.OPERATION_FLAG;
  output.writeByte((flags) >> 0);
  if (this.operation != 0)
    output.writeObject(this.operation);
};


mx.messaging.messages.CommandMessage.prototype.get__operation = function() {
  return this.mx_messaging_messages_CommandMessage__operation;
};


mx.messaging.messages.CommandMessage.prototype.set__operation = function(value) {
  this.mx_messaging_messages_CommandMessage__operation = value;
};


Object.defineProperties(mx.messaging.messages.CommandMessage.prototype, /** @lends {mx.messaging.messages.CommandMessage.prototype} */ {
/**
  * @export
  * @type {number} */
operation: {
get: mx.messaging.messages.CommandMessage.prototype.get__operation,
set: mx.messaging.messages.CommandMessage.prototype.set__operation}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.messages.CommandMessage.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CommandMessage', qName: 'mx.messaging.messages.CommandMessage', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.messages.CommandMessage.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'operation': { type: 'uint', access: 'readwrite', declaredBy: 'mx.messaging.messages.CommandMessage'}
      };
    },
    methods: function () {
      return {
        'CommandMessage': { type: '', declaredBy: 'mx.messaging.messages.CommandMessage'},
        'getSmallMessage': { type: 'mx.messaging.messages.IMessage', declaredBy: 'mx.messaging.messages.CommandMessage'},
        '|getOperationAsString': { type: 'String', declaredBy: 'mx.messaging.messages.CommandMessage', parameters: function () { return [ 'uint', false ]; }},
        'readExternal': { type: 'void', declaredBy: 'mx.messaging.messages.CommandMessage', parameters: function () { return [ 'org.apache.royale.utils.net.IDataInput', false ]; }},
        'writeExternal': { type: 'void', declaredBy: 'mx.messaging.messages.CommandMessage', parameters: function () { return [ 'org.apache.royale.utils.net.IDataOutput', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessage.prototype.ROYALE_COMPILE_FLAGS = 26;
