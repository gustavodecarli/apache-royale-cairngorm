/**
 * Generated by Apache Royale Compiler from com/adobe/cairngorm/control/CairngormEventDispatcher.as
 * com.adobe.cairngorm.control.CairngormEventDispatcher
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('com.adobe.cairngorm.control.CairngormEventDispatcher');

goog.require('com.adobe.cairngorm.control.CairngormEvent');
goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * Constructor.
 * @constructor
 * @param {org.apache.royale.events.IEventDispatcher=} target
 */
com.adobe.cairngorm.control.CairngormEventDispatcher = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  this.com_adobe_cairngorm_control_CairngormEventDispatcher_eventDispatcher = new org.apache.royale.events.EventDispatcher(target);
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('com.adobe.cairngorm.control.CairngormEventDispatcher', com.adobe.cairngorm.control.CairngormEventDispatcher);


/**
 * @private
 * @type {com.adobe.cairngorm.control.CairngormEventDispatcher}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.instance = null;


/**
 * @private
 * @type {org.apache.royale.events.IEventDispatcher}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.com_adobe_cairngorm_control_CairngormEventDispatcher_eventDispatcher = null;


/**
 * Returns the single instance of the dispatcher
 * @export
 * @return {com.adobe.cairngorm.control.CairngormEventDispatcher}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.getInstance = function() {
  if (com.adobe.cairngorm.control.CairngormEventDispatcher.instance == null)
    com.adobe.cairngorm.control.CairngormEventDispatcher.instance = new com.adobe.cairngorm.control.CairngormEventDispatcher();
  return com.adobe.cairngorm.control.CairngormEventDispatcher.instance;
};


/**
 * Adds an event listener.
 * @export
 * @param {string} type
 * @param {Function} listener
 * @param {boolean=} useCapture
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.addEventListener = function(type, listener, useCapture) {
  useCapture = typeof useCapture !== 'undefined' ? useCapture : false;
  this.com_adobe_cairngorm_control_CairngormEventDispatcher_eventDispatcher.addEventListener(type, listener, useCapture);
};


/**
 * Removes an event listener.
 * @export
 * @param {string} type
 * @param {Function} listener
 * @param {boolean=} useCapture
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.removeEventListener = function(type, listener, useCapture) {
  useCapture = typeof useCapture !== 'undefined' ? useCapture : false;
  this.com_adobe_cairngorm_control_CairngormEventDispatcher_eventDispatcher.removeEventListener(type, listener, useCapture);
};


/**
 * Dispatches a cairngorm event.
 * @export
 * @param {com.adobe.cairngorm.control.CairngormEvent} event
 * @return {boolean}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.dispatchEvent = function(event) {
  return this.com_adobe_cairngorm_control_CairngormEventDispatcher_eventDispatcher.dispatchEvent(event);
};


/**
 * Returns whether an event listener exists.
 * @export
 * @param {string} type
 * @return {boolean}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.hasEventListener = function(type) {
  return this.com_adobe_cairngorm_control_CairngormEventDispatcher_eventDispatcher.hasEventListener(type);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CairngormEventDispatcher', qName: 'com.adobe.cairngorm.control.CairngormEventDispatcher', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getInstance': { type: 'com.adobe.cairngorm.control.CairngormEventDispatcher', declaredBy: 'com.adobe.cairngorm.control.CairngormEventDispatcher'},
        'CairngormEventDispatcher': { type: '', declaredBy: 'com.adobe.cairngorm.control.CairngormEventDispatcher', parameters: function () { return [ 'org.apache.royale.events.IEventDispatcher', true ]; }},
        'addEventListener': { type: 'void', declaredBy: 'com.adobe.cairngorm.control.CairngormEventDispatcher', parameters: function () { return [ 'String', false ,'Function', false ,'Boolean', true ]; }},
        'removeEventListener': { type: 'void', declaredBy: 'com.adobe.cairngorm.control.CairngormEventDispatcher', parameters: function () { return [ 'String', false ,'Function', false ,'Boolean', true ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'com.adobe.cairngorm.control.CairngormEventDispatcher', parameters: function () { return [ 'com.adobe.cairngorm.control.CairngormEvent', false ]; }},
        'hasEventListener': { type: 'Boolean', declaredBy: 'com.adobe.cairngorm.control.CairngormEventDispatcher', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.adobe.cairngorm.control.CairngormEventDispatcher.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.adobe.cairngorm.control.CairngormEventDispatcher);

//# sourceMappingURL=./CairngormEventDispatcher.js.map