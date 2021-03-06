/**
 * Generated by Apache Royale Compiler from mx/events/MouseEvent.as
 * mx.events.MouseEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.events.MouseEvent');
/* Royale Dependency List: XML*/

goog.require('org.apache.royale.events.MouseEvent');



/**
 *  Constructor.
 *
 *  @asparam type The event type; indicates the action that caused the event.
 *
 *  @asparam bubbles Specifies whether the event can bubble
 *  up the display list hierarchy.
 *
 *  @asparam cancelable Specifies whether the behavior
 *  associated with the event can be prevented.
 *
 *  @asparam localX The x coordinate of the mouse relative to the target, in pixels.
 *
 *  @asparam localY The y coordinate of the mouse relative to the target, in pixels.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @constructor
 * @extends {org.apache.royale.events.MouseEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {number=} localX
 * @param {number=} localY
 */
mx.events.MouseEvent = function(type, bubbles, cancelable, localX, localY) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  localX = typeof localX !== 'undefined' ? localX : NaN;
  localY = typeof localY !== 'undefined' ? localY : NaN;
  mx.events.MouseEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.localX = localX;
  this.localY = localY;
};
goog.inherits(mx.events.MouseEvent, org.apache.royale.events.MouseEvent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.events.MouseEvent', mx.events.MouseEvent);


mx.events.MouseEvent.get__MOUSE_DOWN = function() {
  var value = org.apache.royale.events.MouseEvent.MOUSE_DOWN;
  Object.defineProperty(mx.events.MouseEvent, 'MOUSE_DOWN', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
MOUSE_DOWN: {
  get: mx.events.MouseEvent.get__MOUSE_DOWN,
  configurable: true}});


mx.events.MouseEvent.get__MOUSE_MOVE = function() {
  var value = org.apache.royale.events.MouseEvent.MOUSE_MOVE;
  Object.defineProperty(mx.events.MouseEvent, 'MOUSE_MOVE', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
MOUSE_MOVE: {
  get: mx.events.MouseEvent.get__MOUSE_MOVE,
  configurable: true}});


mx.events.MouseEvent.get__MOUSE_UP = function() {
  var value = org.apache.royale.events.MouseEvent.MOUSE_UP;
  Object.defineProperty(mx.events.MouseEvent, 'MOUSE_UP', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
MOUSE_UP: {
  get: mx.events.MouseEvent.get__MOUSE_UP,
  configurable: true}});


mx.events.MouseEvent.get__MOUSE_OUT = function() {
  var value = org.apache.royale.events.MouseEvent.MOUSE_OUT;
  Object.defineProperty(mx.events.MouseEvent, 'MOUSE_OUT', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
MOUSE_OUT: {
  get: mx.events.MouseEvent.get__MOUSE_OUT,
  configurable: true}});


mx.events.MouseEvent.get__MOUSE_OVER = function() {
  var value = org.apache.royale.events.MouseEvent.MOUSE_OVER;
  Object.defineProperty(mx.events.MouseEvent, 'MOUSE_OVER', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
MOUSE_OVER: {
  get: mx.events.MouseEvent.get__MOUSE_OVER,
  configurable: true}});


mx.events.MouseEvent.get__ROLL_OVER = function() {
  var value = org.apache.royale.events.MouseEvent.ROLL_OVER;
  Object.defineProperty(mx.events.MouseEvent, 'ROLL_OVER', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
ROLL_OVER: {
  get: mx.events.MouseEvent.get__ROLL_OVER,
  configurable: true}});


mx.events.MouseEvent.get__ROLL_OUT = function() {
  var value = org.apache.royale.events.MouseEvent.ROLL_OUT;
  Object.defineProperty(mx.events.MouseEvent, 'ROLL_OUT', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
ROLL_OUT: {
  get: mx.events.MouseEvent.get__ROLL_OUT,
  configurable: true}});


mx.events.MouseEvent.get__CLICK = function() {
  var value = org.apache.royale.events.MouseEvent.CLICK;
  Object.defineProperty(mx.events.MouseEvent, 'CLICK', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
CLICK: {
  get: mx.events.MouseEvent.get__CLICK,
  configurable: true}});


mx.events.MouseEvent.get__DOUBLE_CLICK = function() {
  var value = org.apache.royale.events.MouseEvent.DOUBLE_CLICK;
  Object.defineProperty(mx.events.MouseEvent, 'DOUBLE_CLICK', { value: value, writable: false });
  return value;
};
Object.defineProperties(mx.events.MouseEvent, /** @lends {mx.events.MouseEvent} */ {
/**
 * @export
 * @const
 * @type {string}
 */
DOUBLE_CLICK: {
  get: mx.events.MouseEvent.get__DOUBLE_CLICK,
  configurable: true}});


/**
 * @export
 */
mx.events.MouseEvent.prototype.updateAfterEvent = function() {
};


mx.events.MouseEvent.prototype.get__stageX = function() {
  return this.screenX;
};


mx.events.MouseEvent.prototype.get__stageY = function() {
  return this.screenY;
};


Object.defineProperties(mx.events.MouseEvent.prototype, /** @lends {mx.events.MouseEvent.prototype} */ {
/**
  * @export
  * @type {number} */
stageX: {
get: mx.events.MouseEvent.prototype.get__stageX},
/**
  * @export
  * @type {number} */
stageY: {
get: mx.events.MouseEvent.prototype.get__stageY}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.events.MouseEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MouseEvent', qName: 'mx.events.MouseEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.events.MouseEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'stageX': { type: 'Number', access: 'readonly', declaredBy: 'mx.events.MouseEvent'},
        'stageY': { type: 'Number', access: 'readonly', declaredBy: 'mx.events.MouseEvent'}
      };
    },
    methods: function () {
      return {
        'updateAfterEvent': { type: 'void', declaredBy: 'mx.events.MouseEvent'},
        'MouseEvent': { type: '', declaredBy: 'mx.events.MouseEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'Number', true ,'Number', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.events.MouseEvent.prototype.ROYALE_COMPILE_FLAGS = 26;
