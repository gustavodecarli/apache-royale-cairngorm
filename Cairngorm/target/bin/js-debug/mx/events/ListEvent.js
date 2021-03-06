/**
 * Generated by Apache Royale Compiler from mx/events/ListEvent.as
 * mx.events.ListEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.events.ListEvent');
/* Royale Dependency List: org.apache.royale.events.IRoyaleEvent,XML*/

goog.require('org.apache.royale.events.Event');



/**
 *  Constructor.
 *  Normally called by the Flex control and not used in application code.
 *
 *  @asparam type The event type; indicates the action that caused the event.
 *
 *  @asparam bubbles Specifies whether the event can bubble
 *  up the display list hierarchy.
 *
 *  @asparam cancelable Specifies whether the behavior
 *  associated with the event can be prevented.
 *
 *  @asparam columnIndex The zero-based index of the column that contains
 *  the renderer.
 *
 *  @asparam rowIndex The zero-based index of the row that contains
 *  the renderer, or for editing events, the index of the item in
 *  the data provider that is being edited
 *
 *  @asparam reason The reason for an <code>itemEditEnd</code> event.
 *
 *  @asparam itemRenderer The item renderer for the data provider item.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {number=} columnIndex
 * @param {number=} rowIndex
 * @param {string=} reason
 * @param {Object=} itemRenderer
 */
mx.events.ListEvent = function(type, bubbles, cancelable, columnIndex, rowIndex, reason, itemRenderer) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  columnIndex = typeof columnIndex !== 'undefined' ? columnIndex : -1;
  rowIndex = typeof rowIndex !== 'undefined' ? rowIndex : -1;
  reason = typeof reason !== 'undefined' ? reason : null;
  itemRenderer = typeof itemRenderer !== 'undefined' ? itemRenderer : null;
  mx.events.ListEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.columnIndex = columnIndex;
  this.rowIndex = rowIndex;
  this.reason = reason;
  this.itemRenderer = itemRenderer;
};
goog.inherits(mx.events.ListEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.events.ListEvent', mx.events.ListEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.CHANGE = "change";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_EDIT_BEGIN = "itemEditBegin";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_EDIT_END = "itemEditEnd";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_FOCUS_IN = "itemFocusIn";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_FOCUS_OUT = "itemFocusOut";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_EDIT_BEGINNING = "itemEditBeginning";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_CLICK = "itemClick";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_DOUBLE_CLICK = "itemDoubleClick";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_ROLL_OUT = "itemRollOut";


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.ListEvent.ITEM_ROLL_OVER = "itemRollOver";


/**
 * @export
 * @type {number}
 */
mx.events.ListEvent.prototype.columnIndex = 0;


/**
 * @export
 * @type {Object}
 */
mx.events.ListEvent.prototype.itemRenderer;


/**
 * @export
 * @type {string}
 */
mx.events.ListEvent.prototype.reason;


/**
 * @export
 * @type {number}
 */
mx.events.ListEvent.prototype.rowIndex = 0;


/**
 *  @asprivate
 * @export
 * @override
 */
mx.events.ListEvent.prototype.cloneEvent = function() {
  return new mx.events.ListEvent(this.type, this.bubbles, this.cancelable, this.columnIndex, this.rowIndex, this.reason);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.events.ListEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListEvent', qName: 'mx.events.ListEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.events.ListEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'columnIndex': { type: 'int', get_set: function (/** mx.events.ListEvent */ inst, /** * */ v) {return v !== undefined ? inst.columnIndex = v : inst.columnIndex;}},
        'itemRenderer': { type: 'Object', get_set: function (/** mx.events.ListEvent */ inst, /** * */ v) {return v !== undefined ? inst.itemRenderer = v : inst.itemRenderer;}},
        'reason': { type: 'String', get_set: function (/** mx.events.ListEvent */ inst, /** * */ v) {return v !== undefined ? inst.reason = v : inst.reason;}},
        'rowIndex': { type: 'int', get_set: function (/** mx.events.ListEvent */ inst, /** * */ v) {return v !== undefined ? inst.rowIndex = v : inst.rowIndex;}}
      };
    },
    methods: function () {
      return {
        'ListEvent': { type: '', declaredBy: 'mx.events.ListEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'int', true ,'int', true ,'String', true ,'Object', true ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'mx.events.ListEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.events.ListEvent.prototype.ROYALE_COMPILE_FLAGS = 26;
