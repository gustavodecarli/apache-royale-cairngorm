/**
 * Generated by Apache Royale Compiler from mx/core/ITextInput.as
 * mx.core.ITextInput
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.ITextInput');
/* Royale Dependency List: XML*/

goog.require('mx.core.IDataRenderer');
goog.require('mx.core.IUIComponent');
goog.require('mx.managers.IFocusManagerComponent');
goog.require('org.apache.royale.core.ITextInput');



/**
 * @interface
 * @extends {mx.core.IDataRenderer}
 * @extends {mx.core.IUIComponent}
 * @extends {mx.managers.IFocusManagerComponent}
 * @extends {org.apache.royale.core.ITextInput}
 */
mx.core.ITextInput = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.ITextInput', mx.core.ITextInput);
/**  * @type {number}
 */mx.core.ITextInput.prototype.selectionActivePosition;
/**  * @type {number}
 */mx.core.ITextInput.prototype.selectionAnchorPosition;
/**  * @type {boolean}
 */mx.core.ITextInput.prototype.editable;
/**  * @type {number}
 */mx.core.ITextInput.prototype.horizontalScrollPosition;
/**  * @type {number}
 */mx.core.ITextInput.prototype.maxChars;
/**  * @type {boolean}
 */mx.core.ITextInput.prototype.parentDrawsFocus;
/**  * @type {string}
 */mx.core.ITextInput.prototype.restrict;
/**  * @type {boolean}
 */mx.core.ITextInput.prototype.selectable;
/**
 *  Selects the text in the range specified by the parameters.
 *
 *  @asparam anchorPosition The zero-based character index value
 *  of the first character in the current selection.
 *
 *  @asparam activePosition The zero-based index of the position
 *  after the last character in the current selection
 *  (equivalent to the one-based index of the last character).
 *
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Flex 4
 * @export
 * @param {number} anchorPosition
 * @param {number} activePosition
 */
mx.core.ITextInput.prototype.selectRange = function(anchorPosition, activePosition) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.ITextInput.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITextInput', qName: 'mx.core.ITextInput', kind: 'interface' }], interfaces: [mx.core.IDataRenderer, mx.core.IUIComponent, mx.managers.IFocusManagerComponent, org.apache.royale.core.ITextInput] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.ITextInput.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'selectionActivePosition': { type: 'int', access: 'readonly', declaredBy: 'mx.core.ITextInput'},
        'selectionAnchorPosition': { type: 'int', access: 'readonly', declaredBy: 'mx.core.ITextInput'},
        'editable': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.core.ITextInput'},
        'horizontalScrollPosition': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.ITextInput'},
        'maxChars': { type: 'int', access: 'readwrite', declaredBy: 'mx.core.ITextInput'},
        'parentDrawsFocus': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.core.ITextInput'},
        'restrict': { type: 'String', access: 'readwrite', declaredBy: 'mx.core.ITextInput'},
        'selectable': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.core.ITextInput'}
      };
    },
    methods: function () {
      return {
        'selectRange': { type: 'void', declaredBy: 'mx.core.ITextInput', parameters: function () { return [ 'int', false ,'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.ITextInput.prototype.ROYALE_COMPILE_FLAGS = 26;
