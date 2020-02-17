/**
 * Generated by Apache Royale Compiler from mx/controls/beads/DataGridView.as
 * mx.controls.beads.DataGridView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.controls.beads.DataGridView');
/* Royale Dependency List: QName,mx.collections.CursorBookmark,mx.collections.IViewCursor,mx.controls.dataGridClasses.DataGridColumn,mx.controls.dataGridClasses.DataGridColumnList,mx.core.UIComponent,mx.core.mx_internal,mx.events.CollectionEvent,mx.utils.ObjectUtil,org.apache.royale.core.IBeadModel,org.apache.royale.core.IDataGrid,org.apache.royale.core.IDataGridModel,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.html.DataGridButtonBar,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.html.beads.DataGridView');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.DataGridView}
 */
mx.controls.beads.DataGridView = function() {
  mx.controls.beads.DataGridView.base(this, 'constructor');

this.columnClass = mx.controls.dataGridClasses.DataGridColumn;
this.visibleColumns = [];
};
goog.inherits(mx.controls.beads.DataGridView, org.apache.royale.html.beads.DataGridView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.controls.beads.DataGridView', mx.controls.beads.DataGridView);


/**
 * @export
 * @type {Object}
 */
mx.controls.beads.DataGridView.prototype.columnClass;


/**
 * @export
 * @type {Array}
 */
mx.controls.beads.DataGridView.prototype.visibleColumns;


/**
 * @export
 * @override
 */
mx.controls.beads.DataGridView.prototype.handleInitComplete = function(event) {
  var /** @type {org.apache.royale.core.IDataGrid} */ host = org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IDataGrid);
  if (host.model.columns == null && host.model.dataProvider != null) {
    this.mx_controls_beads_DataGridView_generateCols();
  }
  mx.controls.beads.DataGridView.superClass_.handleInitComplete.apply(this, [ event] );
  org.apache.royale.utils.Language.as(host, org.apache.royale.events.IEventDispatcher, true).addEventListener(mx.events.CollectionEvent.COLLECTION_CHANGE, org.apache.royale.utils.Language.closure(this.handleCollectionChanged, this, 'handleCollectionChanged'));
  if (host.model.dataProvider != null && host.model.dataProvider.length > 0) {
    this.handleCollectionChanged(event);
  } else if (host.model.dataProvider == null) {
    org.apache.royale.utils.Language.as(host.model, org.apache.royale.events.IEventDispatcher, true).addEventListener("dataProviderChanged", org.apache.royale.utils.Language.closure(this.handleCollectionChanged, this, 'handleCollectionChanged'));
  }
};


/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
mx.controls.beads.DataGridView.prototype.handleCollectionChanged = function(event) {
  if (this.columnLists == null)
    return;
  for (var /** @type {number} */ i = 0; i < this.columnLists.length; i++) {
    var /** @type {mx.controls.dataGridClasses.DataGridColumnList} */ list = org.apache.royale.utils.Language.as(this.columnLists[i], mx.controls.dataGridClasses.DataGridColumnList);
    list.model.dispatchEvent(new org.apache.royale.events.Event("dataProviderChanged"));
  }
  this.host.dispatchEvent(new org.apache.royale.events.Event("layoutNeeded"));
};


/**
 * @asprivate
 * @export
 * @override
 */
mx.controls.beads.DataGridView.prototype.handleDataProviderChanged = function(event) {
  var /** @type {org.apache.royale.core.IDataGridModel} */ sharedModel = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.IBeadModel), org.apache.royale.core.IDataGridModel);
  if (sharedModel.columns == null && sharedModel.dataProvider != null && sharedModel.dataProvider.length > 0) {
    this.mx_controls_beads_DataGridView_generateCols();
    this.createLists();
    org.apache.royale.utils.Language.as(this.header, org.apache.royale.html.DataGridButtonBar).dataProvider = sharedModel.columns;
  }
  if (sharedModel.columns == null)
    return;
  mx.controls.beads.DataGridView.superClass_.handleDataProviderChanged.apply(this, [ event] );
};


/**
 *  @asprivate
 *  Searches the iterator to determine columns.
 * @private
 */
mx.controls.beads.DataGridView.prototype.mx_controls_beads_DataGridView_generateCols = function() {
  var /** @type {org.apache.royale.core.IDataGridModel} */ sharedModel = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.IBeadModel), org.apache.royale.core.IDataGridModel);
  if (sharedModel.dataProvider.length > 0) {
    var /** @type {mx.controls.dataGridClasses.DataGridColumn} */ col;
    var /** @type {Array} */ newCols = [];
    var /** @type {Array} */ cols;
    if (sharedModel.dataProvider) {
      var /** @type {mx.collections.IViewCursor} */ iterator = sharedModel.dataProvider.createCursor();
      iterator.seek(mx.collections.CursorBookmark["FIRST"]);
      var /** @type {Object} */ info = mx.utils.ObjectUtil.getClassInfo(iterator.current, ["uid", "mx_internal_uid"]);
      if (info)
        cols = info.properties;
    }
    if (!cols) {
      var /** @type {number} */ index = 0;
      var /** @type {Object} */ itmObj = iterator.current;
      for (var /** @type {string} */ p in itmObj) {
        if (p != "uid") {
          col = org.apache.royale.utils.Language.as(new this.columnClass(), mx.controls.dataGridClasses.DataGridColumn);
          col.dataField = p;
          newCols.push(col);
          col.http_$$www_adobe_com$2006$flex$mx$internal__owner = org.apache.royale.utils.Language.as(this._strand, mx.core.UIComponent);
          col.http_$$www_adobe_com$2006$flex$mx$internal__colNum = index++;
        }
      }
    } else {
      var /** @type {number} */ n = (cols.length) >> 0;
      var /** @type {Object} */ colName;
      for (var /** @type {number} */ i = 0; i < n; i++) {
        colName = cols[i];
        if (org.apache.royale.utils.Language.is(colName, QName))
          colName = org.apache.royale.utils.Language.as(colName, QName, true).localName;
        col = org.apache.royale.utils.Language.as(new this.columnClass(), mx.controls.dataGridClasses.DataGridColumn);
        col.dataField = String(colName);
        col.http_$$www_adobe_com$2006$flex$mx$internal__owner = org.apache.royale.utils.Language.as(this._strand, mx.core.UIComponent);
        col.http_$$www_adobe_com$2006$flex$mx$internal__colNum = i;
        newCols.push(col);
      }
    }
    sharedModel.columns = newCols;
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.controls.beads.DataGridView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridView', qName: 'mx.controls.beads.DataGridView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.controls.beads.DataGridView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'visibleColumns': { type: 'Array', get_set: function (/** mx.controls.beads.DataGridView */ inst, /** * */ v) {return v !== undefined ? inst.visibleColumns = v : inst.visibleColumns;}}
      };
    },
    methods: function () {
      return {
        'DataGridView': { type: '', declaredBy: 'mx.controls.beads.DataGridView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.controls.beads.DataGridView.prototype.ROYALE_COMPILE_FLAGS = 26;
