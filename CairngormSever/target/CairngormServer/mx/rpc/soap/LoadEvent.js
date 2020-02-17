/**
 * Generated by Apache Royale Compiler from mx/rpc/soap/LoadEvent.as
 * mx.rpc.soap.LoadEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.soap.LoadEvent');
/* Royale Dependency List: mx.rpc.wsdl.WSDL,org.apache.royale.events.IRoyaleEvent,XML*/

goog.require('mx.rpc.events.WSDLLoadEvent');



/**
 * Creates a new WSDLLoadEvent.
 * @asparam type The event type; indicates the action that triggered the event.
 * @asparam bubbles Specifies whether the event can bubble up the display list hierarchy.
 * @asparam cancelable Specifies whether the behavior associated with the event can be prevented.
 * @asparam wsdl Object that contains the WSDL document.
 * @asparam location URL of the WSDL document.     
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {mx.rpc.events.WSDLLoadEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {mx.rpc.wsdl.WSDL=} wsdl
 * @param {string=} location
 */
mx.rpc.soap.LoadEvent = function(type, bubbles, cancelable, wsdl, location) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : true;
  wsdl = typeof wsdl !== 'undefined' ? wsdl : null;
  location = typeof location !== 'undefined' ? location : null;
  mx.rpc.soap.LoadEvent.base(this, 'constructor', type == null ? mx.rpc.soap.LoadEvent.LOAD : type, bubbles, cancelable, wsdl, location);
};
goog.inherits(mx.rpc.soap.LoadEvent, mx.rpc.events.WSDLLoadEvent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.soap.LoadEvent', mx.rpc.soap.LoadEvent);


/**
 * Returns a copy of this LoadEvent.
 *
 * @asreturn Returns a copy of this LoadEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @override
 */
mx.rpc.soap.LoadEvent.prototype.cloneEvent = function() {
  return new mx.rpc.soap.LoadEvent(this.type, this.bubbles, this.cancelable, this.wsdl, this.location);
};


/**
 * Returns a String representation of this LoadEvent.
 *
 * @asreturn Returns a String representation of this LoadEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @override
 */
mx.rpc.soap.LoadEvent.prototype.toString = function() {
  return this.formatToString("LoadEvent", "location", "type", "bubbles", "cancelable", "eventPhase");
};


/**
 * A helper method to create a new LoadEvent.
 * @asprivate
 * @export
 * @param {mx.rpc.wsdl.WSDL} wsdl
 * @param {string=} location
 * @return {mx.rpc.soap.LoadEvent}
 */
mx.rpc.soap.LoadEvent.createEvent = function(wsdl, location) {
  location = typeof location !== 'undefined' ? location : null;
  return new mx.rpc.soap.LoadEvent(mx.rpc.soap.LoadEvent.LOAD, false, true, wsdl, location);
};


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.soap.LoadEvent.LOAD = "load";


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.soap.LoadEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'LoadEvent', qName: 'mx.rpc.soap.LoadEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.soap.LoadEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'LoadEvent': { type: '', declaredBy: 'mx.rpc.soap.LoadEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'mx.rpc.wsdl.WSDL', true ,'String', true ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'mx.rpc.soap.LoadEvent'},
        'toString': { type: 'String', declaredBy: 'mx.rpc.soap.LoadEvent'},
        '|createEvent': { type: 'mx.rpc.soap.LoadEvent', declaredBy: 'mx.rpc.soap.LoadEvent', parameters: function () { return [ 'mx.rpc.wsdl.WSDL', false ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.soap.LoadEvent.prototype.ROYALE_COMPILE_FLAGS = 26;
