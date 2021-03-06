/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/IDataGridView.as
 * org.apache.royale.html.beads.IDataGridView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.IDataGridView');
/* Royale Dependency List: org.apache.royale.core.IUIBase*/

goog.require('org.apache.royale.core.IBeadView');



/**
 * @interface
 * @extends {org.apache.royale.core.IBeadView}
 */
org.apache.royale.html.beads.IDataGridView = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.IDataGridView', org.apache.royale.html.beads.IDataGridView);
/**  * @type {Array}
 */org.apache.royale.html.beads.IDataGridView.prototype.columnLists;
/**  * @type {org.apache.royale.core.IUIBase}
 */org.apache.royale.html.beads.IDataGridView.prototype.listArea;
/**  * @type {org.apache.royale.core.IUIBase}
 */org.apache.royale.html.beads.IDataGridView.prototype.header;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.IDataGridView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IDataGridView', qName: 'org.apache.royale.html.beads.IDataGridView', kind: 'interface' }], interfaces: [org.apache.royale.core.IBeadView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.IDataGridView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'columnLists': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.IDataGridView'},
        'listArea': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.IDataGridView'},
        'header': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.IDataGridView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.IDataGridView.prototype.ROYALE_COMPILE_FLAGS = 10;
