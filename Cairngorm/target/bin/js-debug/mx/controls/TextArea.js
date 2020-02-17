/**
 * Generated by Apache Royale Compiler from mx/controls/TextArea.as
 * mx.controls.TextArea
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.controls.TextArea');
/* Royale Dependency List: mx.controls.listClasses.BaseListData,mx.events.FlexEvent,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.html.util.addElementToWrapper,org.apache.royale.utils.CSSUtils,org.apache.royale.utils.Language,XML*/

goog.require('mx.core.ScrollControlBase');
goog.require('mx.core.IDataRenderer');
goog.require('mx.managers.IFocusManagerComponent');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {mx.core.ScrollControlBase}
 * @implements {mx.core.IDataRenderer}
 * @implements {mx.managers.IFocusManagerComponent}
 */
mx.controls.TextArea = function() {
  mx.controls.TextArea.base(this, 'constructor');
  this.typeNames = "TextArea";
};
goog.inherits(mx.controls.TextArea, mx.core.ScrollControlBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.controls.TextArea', mx.controls.TextArea);


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_inSetter;


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @export
 * @override
 */
mx.controls.TextArea.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'textarea');
  goog.events.listen(this.element, 'input', org.apache.royale.utils.Language.closure(this.textChangeHandler, this, 'textChangeHandler'));
  return this.element;
};


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_enabledChanged = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__condenseWhite = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_condenseWhiteChanged = false;


/**
 * @private
 * @type {Object}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__data;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__displayAsPassword = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_displayAsPasswordChanged = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__editable = true;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_editableChanged = false;


/**
 * @private
 * @type {string}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__htmlText = "";


/**
 * @private
 * @type {string}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_explicitHTMLText = null;


/**
 * @private
 * @type {mx.controls.listClasses.BaseListData}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__listData;


/**
 * @private
 * @type {number}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__maxChars = 0;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_maxCharsChanged = false;


/**
 * @private
 * @type {string}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__restrict = null;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_restrictChanged = false;


/**
 * @private
 * @type {string}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__text = "";


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_textChanged = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea__wordWrap = true;


/**
 * @private
 * @type {boolean}
 */
mx.controls.TextArea.prototype.mx_controls_TextArea_wordWrapChanged = false;


/**
 *  @asprivate
 * @export
 * @override
 */
mx.controls.TextArea.prototype.commitProperties = function() {
  mx.controls.TextArea.superClass_.commitProperties.apply(this);
};


/**
 *  @asprivate
 * @export
 * @override
 */
mx.controls.TextArea.prototype.measure = function() {
  mx.controls.TextArea.superClass_.measure.apply(this);
};


/**
 *  @asprivate
 *  Position the internal textfield taking scrollbars into consideration.
 * @export
 * @override
 */
mx.controls.TextArea.prototype.updateDisplayList = function(unscaledWidth, unscaledHeight) {
  mx.controls.TextArea.superClass_.updateDisplayList.apply(this, [ unscaledWidth, unscaledHeight] );
};


/**
 *  dispatch change event in response to a textChange event
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.0
 * @export
 * @param {org.apache.royale.events.Event} event
 */
mx.controls.TextArea.prototype.textChangeHandler = function(event) {
  if (!this.mx_controls_TextArea_inSetter) {
    this.dispatchEvent(new org.apache.royale.events.Event("change"));
  }
};


mx.controls.TextArea.prototype.set__enabled = function(value) {
  if (value == this.enabled)
    return;
  mx.controls.TextArea.superClass_.set__enabled.apply(this, [ value] );
  this.mx_controls_TextArea_enabledChanged = true;
  this.element["disabled"] = !value;
};


mx.controls.TextArea.prototype.get__condenseWhite = function() {
  return this.mx_controls_TextArea__condenseWhite;
};


mx.controls.TextArea.prototype.set__condenseWhite = function(value) {
  if (value == this.mx_controls_TextArea__condenseWhite)
    return;
  this.mx_controls_TextArea__condenseWhite = value;
  this.mx_controls_TextArea_condenseWhiteChanged = true;
  this.dispatchEvent(new org.apache.royale.events.Event("condenseWhiteChanged"));
};


mx.controls.TextArea.prototype.get__data = function() {
  return this.mx_controls_TextArea__data;
};


mx.controls.TextArea.prototype.set__data = function(value) {
  var /** @type {*} */ newText;
  this.mx_controls_TextArea__data = value;
  this.dispatchEvent(new mx.events.FlexEvent(mx.events.FlexEvent.DATA_CHANGE));
};


mx.controls.TextArea.prototype.get__displayAsPassword = function() {
  return this.mx_controls_TextArea__displayAsPassword;
};


mx.controls.TextArea.prototype.set__displayAsPassword = function(value) {
  if (value == this.mx_controls_TextArea__displayAsPassword)
    return;
  this.mx_controls_TextArea__displayAsPassword = value;
  this.mx_controls_TextArea_displayAsPasswordChanged = true;
  org.apache.royale.utils.Language.trace("displayAsPassword not implemented");
  this.dispatchEvent(new org.apache.royale.events.Event("displayAsPasswordChanged"));
};


mx.controls.TextArea.prototype.get__editable = function() {
  return this.mx_controls_TextArea__editable;
};


mx.controls.TextArea.prototype.set__editable = function(value) {
  if (value == this.mx_controls_TextArea__editable)
    return;
  this.mx_controls_TextArea__editable = value;
  this.mx_controls_TextArea_editableChanged = true;
  this.element["readOnly"] = !value;
  this.dispatchEvent(new org.apache.royale.events.Event("editableChanged"));
};


mx.controls.TextArea.prototype.get__htmlText = function() {
  
  return org.apache.royale.utils.Language.as(this.element, HTMLInputElement).value;
};


mx.controls.TextArea.prototype.set__htmlText = function(value) {
  
  org.apache.royale.utils.Language.as(this.element, HTMLInputElement).value = value;
  this.dispatchEvent(new org.apache.royale.events.Event('htmlTextChanged'));
};


mx.controls.TextArea.prototype.get__mx_controls_TextArea_isHTML = function() {
  return this.mx_controls_TextArea_explicitHTMLText != null;
};


mx.controls.TextArea.prototype.get__length = function() {
  return (this.text != null ? this.text.length : -1) >> 0;
};


mx.controls.TextArea.prototype.get__listData = function() {
  return this.mx_controls_TextArea__listData;
};


mx.controls.TextArea.prototype.set__listData = function(value) {
  this.mx_controls_TextArea__listData = value;
};


mx.controls.TextArea.prototype.get__maxChars = function() {
  return this.mx_controls_TextArea__maxChars;
};


mx.controls.TextArea.prototype.set__maxChars = function(value) {
  if (value == this.mx_controls_TextArea__maxChars)
    return;
  this.mx_controls_TextArea__maxChars = value;
  this.mx_controls_TextArea_maxCharsChanged = true;
  this.element["maxLength"] = value;
  this.dispatchEvent(new org.apache.royale.events.Event("maxCharsChanged"));
};


mx.controls.TextArea.prototype.get__restrict = function() {
  return this.mx_controls_TextArea__restrict;
};


mx.controls.TextArea.prototype.set__restrict = function(value) {
  if (value == this.mx_controls_TextArea__restrict)
    return;
  this.mx_controls_TextArea__restrict = value;
  this.mx_controls_TextArea_restrictChanged = true;
  org.apache.royale.utils.Language.trace("restrict not implemented");
  this.dispatchEvent(new org.apache.royale.events.Event("restrictChanged"));
};


mx.controls.TextArea.prototype.get__text = function() {
  
  return this.element.value;
};


mx.controls.TextArea.prototype.set__text = function(value) {
  
  org.apache.royale.utils.Language.as(this.element, HTMLTextAreaElement).value = value;
  this.verticalScrollSize = org.apache.royale.utils.CSSUtils.toNumber(getComputedStyle(this.element).lineHeight.toString(), this.width);
  if (this.verticalScrollPosition)
    this.element.scrollTop = this.verticalScrollPosition * this.verticalScrollSize;
  this.dispatchEvent(new org.apache.royale.events.Event('textChange'));
  this.dispatchEvent(new mx.events.FlexEvent(mx.events.FlexEvent.VALUE_COMMIT));
};


mx.controls.TextArea.prototype.get__wordWrap = function() {
  return this.mx_controls_TextArea__wordWrap;
};


mx.controls.TextArea.prototype.set__wordWrap = function(value) {
  if (value == this.mx_controls_TextArea__wordWrap)
    return;
  this.mx_controls_TextArea__wordWrap = value;
  this.mx_controls_TextArea_wordWrapChanged = true;
  this.invalidateProperties();
  this.invalidateDisplayList();
  this.dispatchEvent(new org.apache.royale.events.Event("wordWrapChanged"));
};


Object.defineProperties(mx.controls.TextArea.prototype, /** @lends {mx.controls.TextArea.prototype} */ {
/**
  * @export
  * @type {boolean} */
enabled: {
get: mx.core.UIComponent.prototype.get__enabled,
set: mx.controls.TextArea.prototype.set__enabled},
/**
  * @export
  * @type {boolean} */
condenseWhite: {
get: mx.controls.TextArea.prototype.get__condenseWhite,
set: mx.controls.TextArea.prototype.set__condenseWhite},
/**
  * @export
  * @type {Object} */
data: {
get: mx.controls.TextArea.prototype.get__data,
set: mx.controls.TextArea.prototype.set__data},
/**
  * @export
  * @type {boolean} */
displayAsPassword: {
get: mx.controls.TextArea.prototype.get__displayAsPassword,
set: mx.controls.TextArea.prototype.set__displayAsPassword},
/**
  * @export
  * @type {boolean} */
editable: {
get: mx.controls.TextArea.prototype.get__editable,
set: mx.controls.TextArea.prototype.set__editable},
/**
  * @export
  * @type {string} */
htmlText: {
get: mx.controls.TextArea.prototype.get__htmlText,
set: mx.controls.TextArea.prototype.set__htmlText},
/**
  * @type {boolean} */
mx_controls_TextArea_isHTML: {
get: mx.controls.TextArea.prototype.get__mx_controls_TextArea_isHTML},
/**
  * @export
  * @type {number} */
length: {
get: mx.controls.TextArea.prototype.get__length},
/**
  * @export
  * @type {mx.controls.listClasses.BaseListData} */
listData: {
get: mx.controls.TextArea.prototype.get__listData,
set: mx.controls.TextArea.prototype.set__listData},
/**
  * @export
  * @type {number} */
maxChars: {
get: mx.controls.TextArea.prototype.get__maxChars,
set: mx.controls.TextArea.prototype.set__maxChars},
/**
  * @export
  * @type {string} */
restrict: {
get: mx.controls.TextArea.prototype.get__restrict,
set: mx.controls.TextArea.prototype.set__restrict},
/**
  * @export
  * @type {string} */
text: {
get: mx.controls.TextArea.prototype.get__text,
set: mx.controls.TextArea.prototype.set__text},
/**
  * @export
  * @type {boolean} */
wordWrap: {
get: mx.controls.TextArea.prototype.get__wordWrap,
set: mx.controls.TextArea.prototype.set__wordWrap}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.controls.TextArea.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextArea', qName: 'mx.controls.TextArea', kind: 'class' }], interfaces: [mx.core.IDataRenderer, mx.managers.IFocusManagerComponent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.controls.TextArea.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'enabled': { type: 'Boolean', access: 'writeonly', declaredBy: 'mx.controls.TextArea'},
        'condenseWhite': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'condenseWhiteChanged' } ] } ]; }},
        'data': { type: 'Object', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'dataChange' } ] } ]; }},
        'displayAsPassword': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'displayAsPasswordChanged' } ] } ]; }},
        'editable': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'editableChanged' } ] } ]; }},
        'htmlText': { type: 'String', access: 'readwrite', declaredBy: 'mx.controls.TextArea'},
        'length': { type: 'int', access: 'readonly', declaredBy: 'mx.controls.TextArea'},
        'listData': { type: 'mx.controls.listClasses.BaseListData', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'dataChange' } ] } ]; }},
        'maxChars': { type: 'int', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'maxCharsChanged' } ] } ]; }},
        'restrict': { type: 'String', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'restrictChanged' } ] } ]; }},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'textChanged' } ] }, { name: 'NonCommittingChangeEvent', args: [ { key: '', value: 'change' } ] } ]; }},
        'wordWrap': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.TextArea', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'wordWrapChanged' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'TextArea': { type: '', declaredBy: 'mx.controls.TextArea'},
        'textChangeHandler': { type: 'void', declaredBy: 'mx.controls.TextArea', parameters: function () { return [ 'org.apache.royale.events.Event', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.controls.TextArea.prototype.ROYALE_COMPILE_FLAGS = 26;
