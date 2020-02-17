/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/ItemRendererEvent.as
 * org.apache.royale.events.ItemRendererEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.ItemRendererEvent');
/* Royale Dependency List: org.apache.royale.core.IItemRenderer,org.apache.royale.events.IRoyaleEvent*/

goog.require('org.apache.royale.events.CustomEvent');



/**
 * Constructor.
 *
 * @asparam type The name of the event.
 * @asparam bubbles Whether the event bubbles.
 * @asparam cancelable Whether the event can be canceled.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.CustomEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 */
org.apache.royale.events.ItemRendererEvent = function(type, bubbles, cancelable) {
  org.apache.royale.events.ItemRendererEvent.base(this, 'constructor');
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  
  org.apache.royale.events.ItemRendererEvent.base(this, 'constructor', type);
  this.itemRenderer = null;
};
goog.inherits(org.apache.royale.events.ItemRendererEvent, org.apache.royale.events.CustomEvent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.ItemRendererEvent', org.apache.royale.events.ItemRendererEvent);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.ItemRendererEvent.CREATED = "itemRendererCreated";


/**
 * @export
 * @type {org.apache.royale.core.IItemRenderer}
 */
org.apache.royale.events.ItemRendererEvent.prototype.itemRenderer;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.events.ItemRendererEvent.prototype.cloneEvent = function() {
  var /** @type {org.apache.royale.events.ItemRendererEvent} */ newEvent = new org.apache.royale.events.ItemRendererEvent(this.type);
  newEvent.itemRenderer = this.itemRenderer;
  return newEvent;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.ItemRendererEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ItemRendererEvent', qName: 'org.apache.royale.events.ItemRendererEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.ItemRendererEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'itemRenderer': { type: 'org.apache.royale.core.IItemRenderer', get_set: function (/** org.apache.royale.events.ItemRendererEvent */ inst, /** * */ v) {return v !== undefined ? inst.itemRenderer = v : inst.itemRenderer;}}
      };
    },
    methods: function () {
      return {
        'ItemRendererEvent': { type: '', declaredBy: 'org.apache.royale.events.ItemRendererEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.ItemRendererEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.events.ItemRendererEvent.prototype.ROYALE_COMPILE_FLAGS = 10;
