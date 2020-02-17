/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/supportClasses/TextButtonItemRenderer.as
 * org.apache.royale.html.supportClasses.TextButtonItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.supportClasses.TextButtonItemRenderer');
/* Royale Dependency List: org.apache.royale.core.SimpleCSSStylesWithFlex,org.apache.royale.events.ItemClickedEvent,org.apache.royale.events.MouseEvent,org.apache.royale.html.util.getLabelFromData,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.TextButton');
goog.require('org.apache.royale.html.beads.ITextItemRenderer');



/**
 * @constructor
 * @extends {org.apache.royale.html.TextButton}
 * @implements {org.apache.royale.html.beads.ITextItemRenderer}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer = function() {
  org.apache.royale.html.supportClasses.TextButtonItemRenderer.base(this, 'constructor');
  this.style = new org.apache.royale.core.SimpleCSSStylesWithFlex();
  this.addEventListener('click', org.apache.royale.utils.Language.closure(this.handleClickEvent, this, 'handleClickEvent'));
};
goog.inherits(org.apache.royale.html.supportClasses.TextButtonItemRenderer, org.apache.royale.html.TextButton);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.supportClasses.TextButtonItemRenderer', org.apache.royale.html.supportClasses.TextButtonItemRenderer);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__data;


/**
 * @royaleignorecoercion String
 * @protected
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.updateButtonLabelFromData = function() {
  var /** @type {string} */ valueAsString;
  if (this.data == null)
    return;
  valueAsString = org.apache.royale.html.util.getLabelFromData(this, this.data);
  if (!valueAsString && this.data.hasOwnProperty("title")) {
    valueAsString = "" + this.data["title"];
  }
  if (valueAsString)
    this.text = valueAsString;
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.MouseEvent} event
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.handleClickEvent = function(event) {
  var /** @type {org.apache.royale.events.ItemClickedEvent} */ newEvent = new org.apache.royale.events.ItemClickedEvent("itemClicked");
  newEvent.index = this.index;
  newEvent.data = this.data;
  this.dispatchEvent(newEvent);
};


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__itemRendererParent;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__labelField = null;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__listData;


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__index = 0;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__selectable = true;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__hoverable = true;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__hovered;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__selected;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.org_apache_royale_html_supportClasses_TextButtonItemRenderer__down;


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__data = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__data;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__data = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__data = value;
  this.updateButtonLabelFromData();
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__itemRendererParent = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__itemRendererParent;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__itemRendererParent = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__itemRendererParent = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__labelField = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__labelField;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__labelField = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__labelField = value;
  this.updateButtonLabelFromData();
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__listData = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__listData;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__listData = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__listData = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__index = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__index;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__index = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__index = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__selectable = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__selectable;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__selectable = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__selectable = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__hoverable = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__hoverable;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__hoverable = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__hoverable = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__hovered = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__hovered;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__hovered = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__hovered = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__selected = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__selected;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__selected = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__selected = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__down = function() {
  return this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__down;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__down = function(value) {
  this.org_apache_royale_html_supportClasses_TextButtonItemRenderer__down = value;
};


Object.defineProperties(org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype, /** @lends {org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype} */ {
/**
  * @export
  * @type {Object} */
data: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__data,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__data},
/**
  * @export
  * @type {Object} */
itemRendererParent: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__itemRendererParent,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__itemRendererParent},
/**
  * @export
  * @type {string} */
labelField: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__labelField,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__labelField},
/**
  * @export
  * @type {Object} */
listData: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__listData,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__listData},
/**
  * @export
  * @type {number} */
index: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__index,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__index},
/**
  * @export
  * @type {boolean} */
selectable: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__selectable,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__selectable},
/**
  * @export
  * @type {boolean} */
hoverable: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__hoverable,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__hoverable},
/**
  * @export
  * @type {boolean} */
hovered: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__hovered,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__hovered},
/**
  * @export
  * @type {boolean} */
selected: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__selected,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__selected},
/**
  * @export
  * @type {boolean} */
down: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__down,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__down}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextButtonItemRenderer', qName: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer', kind: 'class' }], interfaces: [org.apache.royale.html.beads.ITextItemRenderer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'data': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'itemRendererParent': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'listData': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'index': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'selectable': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'hoverable': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'hovered': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'selected': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'down': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'}
      };
    },
    methods: function () {
      return {
        'TextButtonItemRenderer': { type: '', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 10;
