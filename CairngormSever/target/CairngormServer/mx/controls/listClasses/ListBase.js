/**
 * Generated by Apache Royale Compiler from mx/controls/listClasses/ListBase.as
 * mx.controls.listClasses.ListBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.controls.listClasses.ListBase');
/* Royale Dependency List: XML,XMLList,mx.collections.ArrayCollection,mx.collections.ICollectionView,mx.collections.IList,mx.collections.ListCollectionView,mx.collections.XMLListCollection,mx.core.mx_internal,mx.utils.UIDUtil,org.apache.royale.core.ContainerBaseStrandChildren,org.apache.royale.core.IBead,org.apache.royale.core.IBeadLayout,org.apache.royale.core.IChild,org.apache.royale.core.IDataProviderItemRendererMapper,org.apache.royale.core.IFactory,org.apache.royale.core.IItemRendererClassFactory,org.apache.royale.core.ILayoutChild,org.apache.royale.core.ILayoutHost,org.apache.royale.core.IListPresentationModel,org.apache.royale.core.IParent,org.apache.royale.core.ISelectionModel,org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.events.ValueEvent,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.Language*/

goog.require('mx.core.ScrollControlBase');
goog.require('org.apache.royale.core.IContainer');
goog.require('org.apache.royale.core.IContainerBaseStrandChildrenHost');
goog.require('org.apache.royale.core.IItemRendererProvider');
goog.require('org.apache.royale.core.ILayoutParent');
goog.require('org.apache.royale.core.ILayoutView');
goog.require('org.apache.royale.core.IStrandWithPresentationModel');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {mx.core.ScrollControlBase}
 * @implements {org.apache.royale.core.IContainerBaseStrandChildrenHost}
 * @implements {org.apache.royale.core.IContainer}
 * @implements {org.apache.royale.core.ILayoutParent}
 * @implements {org.apache.royale.core.ILayoutView}
 * @implements {org.apache.royale.core.IItemRendererProvider}
 * @implements {org.apache.royale.core.IStrandWithPresentationModel}
 */
mx.controls.listClasses.ListBase = function() {
  mx.controls.listClasses.ListBase.base(this, 'constructor');
};
goog.inherits(mx.controls.listClasses.ListBase, mx.core.ScrollControlBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.controls.listClasses.ListBase', mx.controls.listClasses.ListBase);


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__dragEnabled = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__dragMoveEnabled = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__dropEnabled = false;


/**
 * @private
 * @type {Function}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__labelFunction;


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__variableRowHeight = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__allowMultipleSelection = false;


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__showDataTips = false;


/**
 * @private
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__rowCount = -1;


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase_rowCountChanged = true;


/**
 *  Sets the <code>rowCount</code> property without causing
 *  invalidation or setting the <code>explicitRowCount</code>
 *  property, which permanently locks in the number of rows.
 *
 *  @asparam v The row count.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {number} v
 */
mx.controls.listClasses.ListBase.prototype.setRowCount = function(v) {
  this.mx_controls_listClasses_ListBase__rowCount = v;
};


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__DCinitialized = true;


/**
 * @asprivate
 * @export
 * @override
 */
mx.controls.listClasses.ListBase.prototype.addedToParent = function() {
  if (!this.mx_controls_listClasses_ListBase__DCinitialized) {
    org.apache.royale.core.ValuesManager["valuesImpl"].init(this);
    this.mx_controls_listClasses_ListBase__DCinitialized = true;
  }
  mx.controls.listClasses.ListBase.superClass_.addedToParent.apply(this);
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadLayout, "iBeadLayout", this);
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IDataProviderItemRendererMapper, "iDataProviderItemRendererMapper", this);
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IItemRendererClassFactory, "iItemRendererClassFactory", this);
  this.dispatchEvent(new org.apache.royale.events.Event("initComplete"));
};


/**
 * @private
 * @type {org.apache.royale.core.IFactory}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__itemRenderer;


/**
 * @private
 * @type {org.apache.royale.core.ContainerBaseStrandChildren}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__strandChildren;


/**
 * @export
 * @param {number} index
 */
mx.controls.listClasses.ListBase.prototype.scrollToIndex = function(index) {
  org.apache.royale.utils.Language.trace("ListBase:scrollToIndex not implemented");
};


/**
 *  @asprivate
 * @export
 */
mx.controls.listClasses.ListBase.prototype.childrenAdded = function() {
  this.dispatchEvent(new org.apache.royale.events.ValueEvent("childrenAdded"));
};


/**
 * Returns the ILayoutHost which is its view. From ILayoutParent.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.ILayoutHost
 * @export
 * @return {Object}
 */
mx.controls.listClasses.ListBase.prototype.getLayoutHost = function() {
  return this.view;
};


/**
 * @private
 * @type {org.apache.royale.core.IListPresentationModel}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__presentationModel;


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
mx.controls.listClasses.ListBase.prototype.$addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  mx.controls.listClasses.ListBase.superClass_.addElement.apply(this, [ c, dispatchEvent] );
};


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
mx.controls.listClasses.ListBase.prototype.$addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  mx.controls.listClasses.ListBase.superClass_.addElementAt.apply(this, [ c, index, dispatchEvent] );
};


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
mx.controls.listClasses.ListBase.prototype.$removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  mx.controls.listClasses.ListBase.superClass_.removeElement.apply(this, [ c, dispatchEvent] );
};


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
mx.controls.listClasses.ListBase.prototype.$getElementIndex = function(c) {
  return mx.controls.listClasses.ListBase.superClass_.getElementIndex.apply(this, [ c] );
};


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
mx.controls.listClasses.ListBase.prototype.$getElementAt = function(index) {
  return mx.controls.listClasses.ListBase.superClass_.getElementAt.apply(this, [ index] );
};


/**
 * @export
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.explicitColumnCount = -1;


/**
 * @export
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.explicitColumnWidth;


/**
 * @export
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.explicitRowHeight;


/**
 * @export
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.explicitRowCount = -1;


/**
 * @export
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.defaultColumnCount = 4;


/**
 * @export
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.defaultRowCount = 4;


/**
 * @private
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__rowHeight;


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase_rowHeightChanged = false;


/**
 * @private
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase__columnWidth;


/**
 * @private
 * @type {boolean}
 */
mx.controls.listClasses.ListBase.prototype.mx_controls_listClasses_ListBase_columnWidthChanged = false;


/**
 *  @royaleignorecoercion org.apache.royale.core.ILayoutChild
 * @export
 * @override
 */
mx.controls.listClasses.ListBase.prototype.measure = function() {
  mx.controls.listClasses.ListBase.superClass_.measure.apply(this);
  var /** @type {number} */ cc = this.explicitColumnCount < 1 ? this.defaultColumnCount : this.explicitColumnCount;
  var /** @type {number} */ rc = this.explicitRowCount < 1 ? this.defaultRowCount : this.explicitRowCount;
  if (!isNaN(this.explicitRowHeight)) {
    this.measuredHeight = this.explicitRowHeight * rc;
  } else {
    if (isNaN(this.rowHeight) && this.numChildren > 0) {
      this.rowHeight = this.getElementAt(0).height;
    }
    this.measuredHeight = this.rowHeight * rc;
  }
  if (!isNaN(this.explicitColumnWidth)) {
    this.measuredWidth = this.explicitColumnWidth * cc;
  } else {
    if (isNaN(this.columnWidth) && this.numChildren > 0) {
      this.columnWidth = this.getElementAt(0).width;
    }
    this.measuredWidth = this.columnWidth * cc;
  }
};


/**
 *  Determines the UID for a data provider item.  All items
 *  in a data provider must either have a unique ID (UID)
 *  or one will be generated and associated with it.  This
 *  means that you cannot have an object or scalar value
 *  appear twice in a data provider. 
 *
 *  <p>For example, the following
 *  data provider is not supported because the value "foo"
 *  appears twice and the UID for a string is the string itself:</p>
 *
 *  <pre>var sampleDP:Array = ["foo", "bar", "foo"]</pre>
 *
 *  <p>Simple dynamic objects can appear twice if they are two
 *  separate instances. The following is supported because
 *  each of the instances will be given a different UID because
 *  they are different objects:</p>
 *
 *  <pre>var sampleDP:Array = [{label: "foo"}, {label: "foo"}]</pre>
 *
 *  <p>Note that the following is not supported because the same instance
 *  appears twice.</p>
 *
 *  <pre>
 *  var foo:Object = {label: "foo"};
 *  sampleDP:Array = [foo, foo];</pre>
 *
 *  @asparam data The data provider item.
 *
 *  @asreturn The UID as a string.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} data
 * @return {string}
 */
mx.controls.listClasses.ListBase.prototype.itemToUID = function(data) {
  if (data == null)
    return "null";
  return mx.utils.UIDUtil.getUID(data);
};


/**
 *  Returns the string the renderer would display for the given data object
 *  based on the labelField and labelFunction properties.
 *  If the method cannot convert the parameter to a string, it returns a
 *  single space.
 *
 *  @asparam data Object to be rendered.
 *
 *  @asreturn The string to be displayed based on the data.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} data
 * @return {string}
 */
mx.controls.listClasses.ListBase.prototype.itemToLabel = function(data) {
  if (data == null)
    return " ";
  if (org.apache.royale.utils.Language.is(data, XML)) {
    try {
      if (org.apache.royale.utils.Language.as(data, XML).child(this.labelField).length() != 0)
        data = org.apache.royale.utils.Language.as(data, XML).child(this.labelField);
    } catch (e) {
    }
  } else if (org.apache.royale.utils.Language.is(data, Object)) {
    try {
      if (data[this.labelField] != null)
        data = data[this.labelField];
    } catch (e) {
    }
  }
  if (org.apache.royale.utils.Language.is(data, String))
    return String(data);
  try {
    return data.toString();
  } catch (e) {
  }
  return " ";
};


mx.controls.listClasses.ListBase.prototype.get__value = function() {
  return null;
};


mx.controls.listClasses.ListBase.prototype.get__dragEnabled = function() {
  return this.mx_controls_listClasses_ListBase__dragEnabled;
};


mx.controls.listClasses.ListBase.prototype.set__dragEnabled = function(value) {
  this.mx_controls_listClasses_ListBase__dragEnabled = value;
};


mx.controls.listClasses.ListBase.prototype.get__dragMoveEnabled = function() {
  return this.mx_controls_listClasses_ListBase__dragMoveEnabled;
};


mx.controls.listClasses.ListBase.prototype.set__dragMoveEnabled = function(value) {
  this.mx_controls_listClasses_ListBase__dragMoveEnabled = value;
};


mx.controls.listClasses.ListBase.prototype.get__dataProvider = function() {
  return this.model.dataProvider;
};


mx.controls.listClasses.ListBase.prototype.set__dataProvider = function(value) {
  if (org.apache.royale.utils.Language.is(value, Array)) {
    value = new mx.collections.ArrayCollection(org.apache.royale.utils.Language.as(value, Array));
  } else if (org.apache.royale.utils.Language.is(value, mx.collections.ICollectionView)) {
    value = org.apache.royale.utils.Language.as(value, mx.collections.ICollectionView, true);
  } else if (org.apache.royale.utils.Language.is(value, mx.collections.IList)) {
    value = new mx.collections.ListCollectionView(org.apache.royale.utils.Language.as(value, mx.collections.IList, true));
  } else if (org.apache.royale.utils.Language.is(value, XMLList)) {
    value = new mx.collections.XMLListCollection(org.apache.royale.utils.Language.as(value, XMLList));
  } else if (org.apache.royale.utils.Language.is(value, XML)) {
    var /** @type {XMLList} */ xl = new XMLList();
    xl = xl.plus(value);
    value = new mx.collections.XMLListCollection(xl);
  } else {
    var /** @type {Array} */ tmp = [];
    if (value != null)
      tmp.push(value);
    value = new mx.collections.ArrayCollection(tmp);
  }
  this.model.dataProvider = value;
};


mx.controls.listClasses.ListBase.prototype.get__dropEnabled = function() {
  return this.mx_controls_listClasses_ListBase__dropEnabled;
};


mx.controls.listClasses.ListBase.prototype.set__dropEnabled = function(value) {
  this.mx_controls_listClasses_ListBase__dropEnabled = value;
};


mx.controls.listClasses.ListBase.prototype.get__labelField = function() {
  return this.model.labelField;
};


mx.controls.listClasses.ListBase.prototype.set__labelField = function(value) {
  this.model.labelField = value;
};


mx.controls.listClasses.ListBase.prototype.get__labelFunction = function() {
  return this.mx_controls_listClasses_ListBase__labelFunction;
};


mx.controls.listClasses.ListBase.prototype.set__labelFunction = function(value) {
  this.mx_controls_listClasses_ListBase__labelFunction = value;
};


mx.controls.listClasses.ListBase.prototype.get__selectedIndex = function() {
  return this.model.selectedIndex;
};


mx.controls.listClasses.ListBase.prototype.bindable__set__selectedIndex = function(value) {
  this.model.selectedIndex = value;
  return;
};


mx.controls.listClasses.ListBase.prototype.set__selectedIndex = function(value) {
var oldValue = this.get__selectedIndex();
if (oldValue != value) {
this.bindable__set__selectedIndex(value);
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "selectedIndex", oldValue, value));
}
};


mx.controls.listClasses.ListBase.prototype.get__selectedIndices = function() {
  org.apache.royale.utils.Language.trace("selectedIndices not implemented");
  return null;
};


mx.controls.listClasses.ListBase.prototype.bindable__set__selectedIndices = function(indices) {
  org.apache.royale.utils.Language.trace("selectedIndices not implemented");
};


mx.controls.listClasses.ListBase.prototype.set__selectedIndices = function(value) {
var oldValue = this.get__selectedIndices();
if (oldValue != value) {
this.bindable__set__selectedIndices(value);
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "selectedIndices", oldValue, value));
}
};


mx.controls.listClasses.ListBase.prototype.get__selectedItem = function() {
  return org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.ISelectionModel).selectedItem;
};


mx.controls.listClasses.ListBase.prototype.bindable__set__selectedItem = function(item) {
  org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.ISelectionModel).selectedItem = item;
};


mx.controls.listClasses.ListBase.prototype.set__selectedItem = function(value) {
var oldValue = this.get__selectedItem();
if (oldValue != value) {
this.bindable__set__selectedItem(value);
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "selectedItem", oldValue, value));
}
};


mx.controls.listClasses.ListBase.prototype.get__selectedItems = function() {
  org.apache.royale.utils.Language.trace("selectedItems not implemented");
  return null;
};


mx.controls.listClasses.ListBase.prototype.bindable__set__selectedItems = function(items) {
  org.apache.royale.utils.Language.trace("selectedItems not implemented");
};


mx.controls.listClasses.ListBase.prototype.set__selectedItems = function(value) {
var oldValue = this.get__selectedItems();
if (oldValue != value) {
this.bindable__set__selectedItems(value);
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "selectedItems", oldValue, value));
}
};


mx.controls.listClasses.ListBase.prototype.get__variableRowHeight = function() {
  return this.mx_controls_listClasses_ListBase__variableRowHeight;
};


mx.controls.listClasses.ListBase.prototype.set__variableRowHeight = function(value) {
  this.mx_controls_listClasses_ListBase__variableRowHeight = value;
};


mx.controls.listClasses.ListBase.prototype.get__allowMultipleSelection = function() {
  return this.mx_controls_listClasses_ListBase__allowMultipleSelection;
};


mx.controls.listClasses.ListBase.prototype.set__allowMultipleSelection = function(value) {
  this.mx_controls_listClasses_ListBase__allowMultipleSelection = value;
};


mx.controls.listClasses.ListBase.prototype.get__showDataTips = function() {
  return this.mx_controls_listClasses_ListBase__showDataTips;
};


mx.controls.listClasses.ListBase.prototype.set__showDataTips = function(value) {
  this.mx_controls_listClasses_ListBase__showDataTips = value;
  this.invalidateDisplayList();
  this.dispatchEvent(new org.apache.royale.events.Event("showDataTipsChanged"));
};


mx.controls.listClasses.ListBase.prototype.get__rowCount = function() {
  return this.mx_controls_listClasses_ListBase__rowCount;
};


mx.controls.listClasses.ListBase.prototype.set__rowCount = function(value) {
  this.explicitRowCount = value;
  if (this.mx_controls_listClasses_ListBase__rowCount != value) {
    this.setRowCount(value);
    this.mx_controls_listClasses_ListBase_rowCountChanged = true;
    this.invalidateProperties();
    this.invalidateSize();
    this.invalidateDisplayList();
    this.dispatchEvent(new org.apache.royale.events.Event("rowCountChanged"));
  }
};


mx.controls.listClasses.ListBase.prototype.get__itemRenderer = function() {
  return this.mx_controls_listClasses_ListBase__itemRenderer;
};


mx.controls.listClasses.ListBase.prototype.set__itemRenderer = function(value) {
  this.mx_controls_listClasses_ListBase__itemRenderer = value;
};


mx.controls.listClasses.ListBase.prototype.get__strandChildren = function() {
  if (this.mx_controls_listClasses_ListBase__strandChildren == null) {
    this.mx_controls_listClasses_ListBase__strandChildren = new org.apache.royale.core.ContainerBaseStrandChildren(this);
  }
  return this.mx_controls_listClasses_ListBase__strandChildren;
};


mx.controls.listClasses.ListBase.prototype.get__presentationModel = function() {
  if (this.mx_controls_listClasses_ListBase__presentationModel == null) {
    var /** @type {org.apache.royale.core.IBead} */ bead = this.getBeadByType(org.apache.royale.core.IListPresentationModel);
    if (bead)
      this.mx_controls_listClasses_ListBase__presentationModel = bead; else {
      var /** @type {Object} */ c = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "iListPresentationModel");
      if (c) {
        this.mx_controls_listClasses_ListBase__presentationModel = new c();
        this.addBead(this.mx_controls_listClasses_ListBase__presentationModel);
      }
    }
  }
  return this.mx_controls_listClasses_ListBase__presentationModel;
};


mx.controls.listClasses.ListBase.prototype.get__$numElements = function() {
  return mx.controls.listClasses.ListBase.superClass_.get__numElements.apply(this);
};


mx.controls.listClasses.ListBase.prototype.get__rowHeight = function() {
  return this.mx_controls_listClasses_ListBase__rowHeight;
};


mx.controls.listClasses.ListBase.prototype.set__rowHeight = function(value) {
  this.explicitRowHeight = value;
  if (this.mx_controls_listClasses_ListBase__rowHeight != value) {
    this.mx_controls_listClasses_ListBase__rowHeight = value;
    this.presentationModel.rowHeight = value;
  }
};


mx.controls.listClasses.ListBase.prototype.get__columnWidth = function() {
  return this.mx_controls_listClasses_ListBase__columnWidth;
};


mx.controls.listClasses.ListBase.prototype.set__columnWidth = function(value) {
  this.explicitColumnWidth = value;
  if (this.mx_controls_listClasses_ListBase__columnWidth != value) {
    this.mx_controls_listClasses_ListBase__columnWidth = value;
  }
};


Object.defineProperties(mx.controls.listClasses.ListBase.prototype, /** @lends {mx.controls.listClasses.ListBase.prototype} */ {
/**
  * @export
  * @type {Object} */
value: {
get: mx.controls.listClasses.ListBase.prototype.get__value},
/**
  * @export
  * @type {boolean} */
dragEnabled: {
get: mx.controls.listClasses.ListBase.prototype.get__dragEnabled,
set: mx.controls.listClasses.ListBase.prototype.set__dragEnabled},
/**
  * @export
  * @type {boolean} */
dragMoveEnabled: {
get: mx.controls.listClasses.ListBase.prototype.get__dragMoveEnabled,
set: mx.controls.listClasses.ListBase.prototype.set__dragMoveEnabled},
/**
  * @export
  * @type {Object} */
dataProvider: {
get: mx.controls.listClasses.ListBase.prototype.get__dataProvider,
set: mx.controls.listClasses.ListBase.prototype.set__dataProvider},
/**
  * @export
  * @type {boolean} */
dropEnabled: {
get: mx.controls.listClasses.ListBase.prototype.get__dropEnabled,
set: mx.controls.listClasses.ListBase.prototype.set__dropEnabled},
/**
  * @export
  * @type {string} */
labelField: {
get: mx.controls.listClasses.ListBase.prototype.get__labelField,
set: mx.controls.listClasses.ListBase.prototype.set__labelField},
/**
  * @export
  * @type {Function} */
labelFunction: {
get: mx.controls.listClasses.ListBase.prototype.get__labelFunction,
set: mx.controls.listClasses.ListBase.prototype.set__labelFunction},
/**
  * @export
  * @type {number} */
selectedIndex: {
get: mx.controls.listClasses.ListBase.prototype.get__selectedIndex,
set: mx.controls.listClasses.ListBase.prototype.set__selectedIndex},
/**
  * @export
  * @type {Array} */
selectedIndices: {
get: mx.controls.listClasses.ListBase.prototype.get__selectedIndices,
set: mx.controls.listClasses.ListBase.prototype.set__selectedIndices},
/**
  * @export
  * @type {Object} */
selectedItem: {
get: mx.controls.listClasses.ListBase.prototype.get__selectedItem,
set: mx.controls.listClasses.ListBase.prototype.set__selectedItem},
/**
  * @export
  * @type {Array} */
selectedItems: {
get: mx.controls.listClasses.ListBase.prototype.get__selectedItems,
set: mx.controls.listClasses.ListBase.prototype.set__selectedItems},
/**
  * @export
  * @type {boolean} */
variableRowHeight: {
get: mx.controls.listClasses.ListBase.prototype.get__variableRowHeight,
set: mx.controls.listClasses.ListBase.prototype.set__variableRowHeight},
/**
  * @export
  * @type {boolean} */
allowMultipleSelection: {
get: mx.controls.listClasses.ListBase.prototype.get__allowMultipleSelection,
set: mx.controls.listClasses.ListBase.prototype.set__allowMultipleSelection},
/**
  * @export
  * @type {boolean} */
showDataTips: {
get: mx.controls.listClasses.ListBase.prototype.get__showDataTips,
set: mx.controls.listClasses.ListBase.prototype.set__showDataTips},
/**
  * @export
  * @type {number} */
rowCount: {
get: mx.controls.listClasses.ListBase.prototype.get__rowCount,
set: mx.controls.listClasses.ListBase.prototype.set__rowCount},
/**
  * @export
  * @type {org.apache.royale.core.IFactory} */
itemRenderer: {
get: mx.controls.listClasses.ListBase.prototype.get__itemRenderer,
set: mx.controls.listClasses.ListBase.prototype.set__itemRenderer},
/**
  * @export
  * @type {org.apache.royale.core.IParent} */
strandChildren: {
get: mx.controls.listClasses.ListBase.prototype.get__strandChildren},
/**
  * @export
  * @type {org.apache.royale.core.IBead} */
presentationModel: {
get: mx.controls.listClasses.ListBase.prototype.get__presentationModel},
/**
  * @export
  * @type {number} */
$numElements: {
get: mx.controls.listClasses.ListBase.prototype.get__$numElements},
/**
  * @export
  * @type {number} */
rowHeight: {
get: mx.controls.listClasses.ListBase.prototype.get__rowHeight,
set: mx.controls.listClasses.ListBase.prototype.set__rowHeight},
/**
  * @export
  * @type {number} */
columnWidth: {
get: mx.controls.listClasses.ListBase.prototype.get__columnWidth,
set: mx.controls.listClasses.ListBase.prototype.set__columnWidth}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.controls.listClasses.ListBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListBase', qName: 'mx.controls.listClasses.ListBase', kind: 'class' }], interfaces: [org.apache.royale.core.IContainerBaseStrandChildrenHost, org.apache.royale.core.IContainer, org.apache.royale.core.ILayoutParent, org.apache.royale.core.ILayoutView, org.apache.royale.core.IItemRendererProvider, org.apache.royale.core.IStrandWithPresentationModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.controls.listClasses.ListBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'value': { type: 'Object', access: 'readonly', declaredBy: 'mx.controls.listClasses.ListBase'},
        'dragEnabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'dragMoveEnabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'collectionChange' } ] } ]; }},
        'dropEnabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'labelFieldChanged' } ] } ]; }},
        'labelFunction': { type: 'Function', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] }, { name: 'Bindable', args: [ { key: '', value: 'valueCommit' } ] } ]; }},
        'selectedIndices': { type: 'Array', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] }, { name: 'Bindable', args: [ { key: '', value: 'valueCommit' } ] } ]; }},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] }, { name: 'Bindable', args: [ { key: '', value: 'valueCommit' } ] } ]; }},
        'selectedItems': { type: 'Array', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] }, { name: 'Bindable', args: [ { key: '', value: 'valueCommit' } ] } ]; }},
        'variableRowHeight': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'allowMultipleSelection': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'showDataTips': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'showDataTipsChanged' } ] } ]; }},
        'rowCount': { type: 'int', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'itemRenderer': { type: 'org.apache.royale.core.IFactory', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'strandChildren': { type: 'org.apache.royale.core.IParent', access: 'readonly', declaredBy: 'mx.controls.listClasses.ListBase'},
        'presentationModel': { type: 'org.apache.royale.core.IBead', access: 'readonly', declaredBy: 'mx.controls.listClasses.ListBase'},
        '$numElements': { type: 'int', access: 'readonly', declaredBy: 'mx.controls.listClasses.ListBase'},
        'rowHeight': { type: 'Number', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'},
        'columnWidth': { type: 'Number', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListBase'}
      };
    },
    methods: function () {
      return {
        'ListBase': { type: '', declaredBy: 'mx.controls.listClasses.ListBase'},
        'addedToParent': { type: 'void', declaredBy: 'mx.controls.listClasses.ListBase'},
        'scrollToIndex': { type: 'void', declaredBy: 'mx.controls.listClasses.ListBase', parameters: function () { return [ 'int', false ]; }},
        'childrenAdded': { type: 'void', declaredBy: 'mx.controls.listClasses.ListBase'},
        'getLayoutHost': { type: 'org.apache.royale.core.ILayoutHost', declaredBy: 'mx.controls.listClasses.ListBase'},
        '$addElement': { type: 'void', declaredBy: 'mx.controls.listClasses.ListBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        '$addElementAt': { type: 'void', declaredBy: 'mx.controls.listClasses.ListBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'int', false ,'Boolean', true ]; }},
        '$removeElement': { type: 'void', declaredBy: 'mx.controls.listClasses.ListBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        '$getElementIndex': { type: 'int', declaredBy: 'mx.controls.listClasses.ListBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ]; }},
        '$getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'mx.controls.listClasses.ListBase', parameters: function () { return [ 'int', false ]; }},
        'itemToLabel': { type: 'String', declaredBy: 'mx.controls.listClasses.ListBase', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.controls.listClasses.ListBase.prototype.ROYALE_COMPILE_FLAGS = 26;