/**
 * Generated by Apache Royale Compiler from mx/messaging/events/ChannelFaultEvent.as
 * mx.messaging.events.ChannelFaultEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.events.ChannelFaultEvent');
/* Royale Dependency List: mx.messaging.Channel,mx.messaging.messages.ErrorMessage,org.apache.royale.events.Event,XML*/

goog.require('mx.messaging.events.ChannelEvent');



/**
 *  Constructs an instance of this event with the specified type.
 *  Note that the <code>rejected</code> and <code>connected</code> arguments that correspond to properties
 *  defined by the super-class <code>ChannelEvent</code> were not originally included in this method signature and have been 
 *  added at the end of the argument list to preserve backward compatibility even though this signature differs from 
 *  <code>ChannelEvent</code>'s constructor.
 * 
 *  @asparam type The type of the event.
 *
 *  @asparam bubbles Indicates whether the event can bubble up the display list hierarchy.
 *
 *  @asparam cancelable Indicates whether the behavior associated with the event can be prevented.
 *
 *  @asparam channel The Channel generating the event.
 * 
 *  @asparam reconnecting Indicates whether the Channel is in the process of
 *                      reconnecting or not.
 * 
 *  @asparam code The fault code.
 * 
 *  @asparam level The fault level.
 * 
 *  @asparam description The fault description.
 * 
 *  @asparam rejected Indicates whether the Channel's connection has been rejected,
 *  which suppresses automatic reconnection.
 * 
 *  @asparam connected Indicates whether the Channel that generated this event 
 *  is already connected.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {mx.messaging.events.ChannelEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {mx.messaging.Channel=} channel
 * @param {boolean=} reconnecting
 * @param {string=} code
 * @param {string=} level
 * @param {string=} description
 * @param {boolean=} rejected
 * @param {boolean=} connected
 */
mx.messaging.events.ChannelFaultEvent = function(type, bubbles, cancelable, channel, reconnecting, code, level, description, rejected, connected) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  channel = typeof channel !== 'undefined' ? channel : null;
  reconnecting = typeof reconnecting !== 'undefined' ? reconnecting : false;
  code = typeof code !== 'undefined' ? code : null;
  level = typeof level !== 'undefined' ? level : null;
  description = typeof description !== 'undefined' ? description : null;
  rejected = typeof rejected !== 'undefined' ? rejected : false;
  connected = typeof connected !== 'undefined' ? connected : false;
  mx.messaging.events.ChannelFaultEvent.base(this, 'constructor', type, bubbles, cancelable, channel, reconnecting, rejected, connected);
  this.faultCode = code;
  this.faultString = level;
  this.faultDetail = description;
};
goog.inherits(mx.messaging.events.ChannelFaultEvent, mx.messaging.events.ChannelEvent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.events.ChannelFaultEvent', mx.messaging.events.ChannelFaultEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.events.ChannelFaultEvent.FAULT = "channelFault";


/**
 *  Utility method to create a new ChannelFaultEvent that doesn't bubble and
 *  is not cancelable.
 *  
 *  @asparam channel The Channel generating the event.
 * 
 *  @asparam reconnecting Indicates whether the Channel is in the process of
 *  reconnecting or not.
 * 
 *  @asparam code The fault code.
 * 
 *  @asparam level The fault level.
 * 
 *  @asparam description The fault description.
 * 
 *  @asparam rejected Indicates whether the Channel's connection has been rejected,
 *  which suppresses automatic reconnection.
 * 
 *  @asparam connected Indicates whether the Channel that generated this event 
 *  is already connected.
 * 
 *  @asreturn New ChannelFaultEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @param {mx.messaging.Channel} channel
 * @param {boolean=} reconnecting
 * @param {string=} code
 * @param {string=} level
 * @param {string=} description
 * @param {boolean=} rejected
 * @param {boolean=} connected
 * @return {mx.messaging.events.ChannelFaultEvent}
 */
mx.messaging.events.ChannelFaultEvent.createEvent = function(channel, reconnecting, code, level, description, rejected, connected) {
  reconnecting = typeof reconnecting !== 'undefined' ? reconnecting : false;
  code = typeof code !== 'undefined' ? code : null;
  level = typeof level !== 'undefined' ? level : null;
  description = typeof description !== 'undefined' ? description : null;
  rejected = typeof rejected !== 'undefined' ? rejected : false;
  connected = typeof connected !== 'undefined' ? connected : false;
  return new mx.messaging.events.ChannelFaultEvent(mx.messaging.events.ChannelFaultEvent.FAULT, false, false, channel, reconnecting, code, level, description, rejected, connected);
};


/**
 * @export
 * @type {string}
 */
mx.messaging.events.ChannelFaultEvent.prototype.faultCode;


/**
 * @export
 * @type {string}
 */
mx.messaging.events.ChannelFaultEvent.prototype.faultDetail;


/**
 * @export
 * @type {string}
 */
mx.messaging.events.ChannelFaultEvent.prototype.faultString;


/**
 * @export
 * @type {Object}
 */
mx.messaging.events.ChannelFaultEvent.prototype.rootCause;


/**
 *  Clones the ChannelFaultEvent.
 *
 *  @asreturn Copy of this ChannelFaultEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @override
 */
mx.messaging.events.ChannelFaultEvent.prototype.clone = function() {
  var /** @type {mx.messaging.events.ChannelFaultEvent} */ faultEvent = new mx.messaging.events.ChannelFaultEvent(this.type, this.bubbles, this.cancelable, this.channel, this.reconnecting, this.faultCode, this.faultString, this.faultDetail, this.rejected, this.connected);
  faultEvent.rootCause = this.rootCause;
  return faultEvent;
};


/**
 *  Returns a string representation of the ChannelFaultEvent.
 *
 *  @asreturn String representation of the ChannelFaultEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @override
 */
mx.messaging.events.ChannelFaultEvent.prototype.toString = function() {
  return this.formatToString("ChannelFaultEvent", "faultCode", "faultString", "faultDetail", "channelId", "type", "bubbles", "cancelable", "eventPhase");
};


/**
 *  Creates an ErrorMessage based on the ChannelFaultEvent by copying over
 *  the faultCode, faultString, faultDetail and rootCause to the new ErrorMessage.
 * 
 *  @asreturn The ErrorMessage.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @return {mx.messaging.messages.ErrorMessage}
 */
mx.messaging.events.ChannelFaultEvent.prototype.createErrorMessage = function() {
  var /** @type {mx.messaging.messages.ErrorMessage} */ result = new mx.messaging.messages.ErrorMessage();
  result.faultCode = this.faultCode;
  result.faultString = this.faultString;
  result.faultDetail = this.faultDetail;
  result.rootCause = this.rootCause;
  return result;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.events.ChannelFaultEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ChannelFaultEvent', qName: 'mx.messaging.events.ChannelFaultEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.events.ChannelFaultEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'faultCode': { type: 'String', get_set: function (/** mx.messaging.events.ChannelFaultEvent */ inst, /** * */ v) {return v !== undefined ? inst.faultCode = v : inst.faultCode;}},
        'faultDetail': { type: 'String', get_set: function (/** mx.messaging.events.ChannelFaultEvent */ inst, /** * */ v) {return v !== undefined ? inst.faultDetail = v : inst.faultDetail;}},
        'faultString': { type: 'String', get_set: function (/** mx.messaging.events.ChannelFaultEvent */ inst, /** * */ v) {return v !== undefined ? inst.faultString = v : inst.faultString;}},
        'rootCause': { type: 'Object', get_set: function (/** mx.messaging.events.ChannelFaultEvent */ inst, /** * */ v) {return v !== undefined ? inst.rootCause = v : inst.rootCause;}}
      };
    },
    methods: function () {
      return {
        '|createEvent': { type: 'mx.messaging.events.ChannelFaultEvent', declaredBy: 'mx.messaging.events.ChannelFaultEvent', parameters: function () { return [ 'mx.messaging.Channel', false ,'Boolean', true ,'String', true ,'String', true ,'String', true ,'Boolean', true ,'Boolean', true ]; }},
        'ChannelFaultEvent': { type: '', declaredBy: 'mx.messaging.events.ChannelFaultEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'mx.messaging.Channel', true ,'Boolean', true ,'String', true ,'String', true ,'String', true ,'Boolean', true ,'Boolean', true ]; }},
        'clone': { type: 'org.apache.royale.events.Event', declaredBy: 'mx.messaging.events.ChannelFaultEvent'},
        'toString': { type: 'String', declaredBy: 'mx.messaging.events.ChannelFaultEvent'},
        'createErrorMessage': { type: 'mx.messaging.messages.ErrorMessage', declaredBy: 'mx.messaging.events.ChannelFaultEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.events.ChannelFaultEvent.prototype.ROYALE_COMPILE_FLAGS = 26;
