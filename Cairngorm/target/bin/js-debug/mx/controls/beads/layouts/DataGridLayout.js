/**
 * Generated by Apache Royale Compiler from mx/controls/beads/layouts/DataGridLayout.as
 * mx.controls.beads.layouts.DataGridLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.controls.beads.layouts.DataGridLayout');
/* Royale Dependency List: mx.controls.beads.DataGridView,mx.controls.dataGridClasses.DataGridColumn,mx.core.ScrollControlBase,mx.core.ScrollPolicy,org.apache.royale.core.IBorderPaddingMarginValuesImpl,org.apache.royale.core.IUIBase,org.apache.royale.core.ValuesManager,org.apache.royale.core.layout.EdgeData,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.html.beads.layouts.DataGridLayout');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.layouts.DataGridLayout}
 */
mx.controls.beads.layouts.DataGridLayout = function() {
  mx.controls.beads.layouts.DataGridLayout.base(this, 'constructor');
};
goog.inherits(mx.controls.beads.layouts.DataGridLayout, org.apache.royale.html.beads.layouts.DataGridLayout);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.controls.beads.layouts.DataGridLayout', mx.controls.beads.layouts.DataGridLayout);


/**
 * @export
 * @override
 */
mx.controls.beads.layouts.DataGridLayout.prototype.getColumnsForLayout = function() {
  var /** @type {mx.controls.beads.DataGridView} */ view = org.apache.royale.utils.Language.as(this.uiHost.view, mx.controls.beads.DataGridView);
  return view.visibleColumns;
};


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 * @royaleignorecoercion org.apache.royale.core.IBorderPaddingMarginValuesImpl
 * @royaleignorecoercion org.apache.royale.core.IDataGridModel
 * @royaleignorecoercion org.apache.royale.core.IUIBase
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @royaleignorecoercion org.apache.royale.html.beads.IDataGridView
 * @royaleignorecoercion org.apache.royale.html.beads.models.ButtonBarModel
 * @royaleignorecoercion org.apache.royale.html.supportClasses.IDataGridColumn
 * @export
 * @override
 */
mx.controls.beads.layouts.DataGridLayout.prototype.layout = function() {
  var /** @type {mx.controls.beads.DataGridView} */ view = org.apache.royale.utils.Language.as(this.uiHost.view, mx.controls.beads.DataGridView);
  var /** @type {org.apache.royale.core.layout.EdgeData} */ borderMetrics = org.apache.royale.core.ValuesManager["valuesImpl"].getBorderMetrics(this._strand);
  var /** @type {number} */ useWidth = this.uiHost.width - (borderMetrics.left + borderMetrics.right);
  var /** @type {number} */ useHeight = this.uiHost.height - (borderMetrics.top + borderMetrics.bottom);
  var /** @type {number} */ totalWidths = 0;
  var /** @type {number} */ unspecifiedWidths = 0;
  if (view.visibleColumns) {
    for (var /** @type {number} */ i = 0; i < view.visibleColumns.length; i++) {
      var /** @type {mx.controls.dataGridClasses.DataGridColumn} */ columnDef = org.apache.royale.utils.Language.as(view.visibleColumns[i], mx.controls.dataGridClasses.DataGridColumn);
      if (!isNaN(columnDef.width))
        totalWidths += columnDef.width;
      else
        unspecifiedWidths++;
    }
  } else {
    return true;
  }
  if (org.apache.royale.utils.Language.as(this.uiHost, mx.core.ScrollControlBase).horizontalScrollPolicy == mx.core.ScrollPolicy.OFF) {
    if (unspecifiedWidths > 0 && totalWidths > 0) {
      var /** @type {number} */ remainingSpace = useWidth - totalWidths;
      var /** @type {number} */ proportionateShare = remainingSpace / unspecifiedWidths;
      for (i = 0; i < view.visibleColumns.length; i++) {
        columnDef = org.apache.royale.utils.Language.as(view.visibleColumns[i], mx.controls.dataGridClasses.DataGridColumn);
        if (!isNaN(columnDef.width))
          columnDef.columnWidth = columnDef.width;
        else
          columnDef.columnWidth = proportionateShare;
      }
    } else if (totalWidths > 0) {
      if (totalWidths != useWidth) {
        var /** @type {number} */ factor = useWidth / totalWidths;
        for (i = 0; i < view.visibleColumns.length; i++) {
          columnDef = org.apache.royale.utils.Language.as(view.visibleColumns[i], mx.controls.dataGridClasses.DataGridColumn);
          columnDef.columnWidth = columnDef.width * factor;
        }
      }
    }
  } else {
    view.header.element.scrollLeft = view.listArea.element.scrollLeft;
    for (i = 0; i < view.visibleColumns.length; i++) {
      columnDef = org.apache.royale.utils.Language.as(view.visibleColumns[i], mx.controls.dataGridClasses.DataGridColumn);
      if (!isNaN(columnDef.width))
        columnDef.columnWidth = 100;
      else
        columnDef.columnWidth = columnDef.width;
    }
  }
  return mx.controls.beads.layouts.DataGridLayout.superClass_.layout.apply(this);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.controls.beads.layouts.DataGridLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridLayout', qName: 'mx.controls.beads.layouts.DataGridLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.controls.beads.layouts.DataGridLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'DataGridLayout': { type: '', declaredBy: 'mx.controls.beads.layouts.DataGridLayout'},
        'layout': { type: 'Boolean', declaredBy: 'mx.controls.beads.layouts.DataGridLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.controls.beads.layouts.DataGridLayout.prototype.ROYALE_COMPILE_FLAGS = 26;
