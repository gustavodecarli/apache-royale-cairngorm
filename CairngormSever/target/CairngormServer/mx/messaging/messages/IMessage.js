/**
 * Generated by Apache Royale Compiler from mx/messaging/messages/IMessage.as
 * mx.messaging.messages.IMessage
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.messages.IMessage');
/* Royale Dependency List: XML*/



/**
 * @interface
 */
mx.messaging.messages.IMessage = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.messages.IMessage', mx.messaging.messages.IMessage);
/**  * @type {Object}
 */mx.messaging.messages.IMessage.prototype.body;
/**  * @type {string}
 */mx.messaging.messages.IMessage.prototype.clientId;
/**  * @type {string}
 */mx.messaging.messages.IMessage.prototype.destination;
/**  * @type {Object}
 */mx.messaging.messages.IMessage.prototype.headers;
/**  * @type {string}
 */mx.messaging.messages.IMessage.prototype.messageId;
/**  * @type {number}
 */mx.messaging.messages.IMessage.prototype.timestamp;
/**  * @type {number}
 */mx.messaging.messages.IMessage.prototype.timeToLive;
/**
 *  This method will return a string representation of the message.
 *
 *  @asreturn String representation of the message.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @return {string}
 */
mx.messaging.messages.IMessage.prototype.toString = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.messages.IMessage.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IMessage', qName: 'mx.messaging.messages.IMessage', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.messages.IMessage.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'body': { type: 'Object', access: 'readwrite', declaredBy: 'mx.messaging.messages.IMessage'},
        'clientId': { type: 'String', access: 'readwrite', declaredBy: 'mx.messaging.messages.IMessage'},
        'destination': { type: 'String', access: 'readwrite', declaredBy: 'mx.messaging.messages.IMessage'},
        'headers': { type: 'Object', access: 'readwrite', declaredBy: 'mx.messaging.messages.IMessage'},
        'messageId': { type: 'String', access: 'readwrite', declaredBy: 'mx.messaging.messages.IMessage'},
        'timestamp': { type: 'Number', access: 'readwrite', declaredBy: 'mx.messaging.messages.IMessage'},
        'timeToLive': { type: 'Number', access: 'readwrite', declaredBy: 'mx.messaging.messages.IMessage'}
      };
    },
    methods: function () {
      return {
        'toString': { type: 'String', declaredBy: 'mx.messaging.messages.IMessage'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.messages.IMessage.prototype.ROYALE_COMPILE_FLAGS = 26;
