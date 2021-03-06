/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/DataGridColumnChangePropagator.as
 * org.apache.royale.html.beads.DataGridColumnChangePropagator
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataGridColumnChangePropagator');
/* Royale Dependency List: org.apache.royale.core.IBeadModel,org.apache.royale.core.IDataGridModel,org.apache.royale.core.ISelectionModel,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.html.beads.IDataGridView,org.apache.royale.html.supportClasses.DataGridColumnList,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IChangePropagator');



/**
 * @constructor
 * @implements {org.apache.royale.core.IChangePropagator}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DataGridColumnChangePropagator', org.apache.royale.html.beads.DataGridColumnChangePropagator);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.org_apache_royale_html_beads_DataGridColumnChangePropagator__strand;


/**
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @param {org.apache.royale.events.Event} e
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.finishSetup = function(e) {
  var /** @type {Object} */ model = this.org_apache_royale_html_beads_DataGridColumnChangePropagator__strand.getBeadByType(org.apache.royale.core.IBeadModel);
  model.addEventListener('dataProviderChanged', org.apache.royale.utils.Language.closure(this.handleDataProviderChanged, this, 'handleDataProviderChanged'));
};


/**
 * @royaleignorecoercion org.apache.royale.core.IDataGridModel
 * @royaleignorecoercion org.apache.royale.core.ISelectionModel
 * @royaleignorecoercion org.apache.royale.html.beads.IDataGridView
 * @royaleignorecoercion org.apache.royale.html.supportClasses.DataGridColumnList
 * @protected
 * @param {org.apache.royale.events.Event} e
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.handleDataProviderChanged = function(e) {
  var /** @type {Object} */ dataGridView = this.org_apache_royale_html_beads_DataGridColumnChangePropagator__strand.getBeadByType(org.apache.royale.html.beads.IDataGridView);
  var /** @type {Array} */ lists = dataGridView.columnLists;
  if (lists == null)
    return;
  var /** @type {Object} */ sharedModel = this.org_apache_royale_html_beads_DataGridColumnChangePropagator__strand.getBeadByType(org.apache.royale.core.IBeadModel);
  for (var /** @type {number} */ i = 0; i < lists.length; i++) {
    var /** @type {Object} */ list = lists[i];
    var /** @type {Object} */ listModel = list.getBeadByType(org.apache.royale.core.IBeadModel);
    listModel.dataProvider = sharedModel.dataProvider;
  }
};


org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_DataGridColumnChangePropagator__strand = value;
  this.org_apache_royale_html_beads_DataGridColumnChangePropagator__strand.addEventListener("beadsAdded", org.apache.royale.utils.Language.closure(this.finishSetup, this, 'finishSetup'));
};


Object.defineProperties(org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype, /** @lends {org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridColumnChangePropagator', qName: 'org.apache.royale.html.beads.DataGridColumnChangePropagator', kind: 'class' }], interfaces: [org.apache.royale.core.IChangePropagator] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.DataGridColumnChangePropagator'}
      };
    },
    methods: function () {
      return {
        'DataGridColumnChangePropagator': { type: '', declaredBy: 'org.apache.royale.html.beads.DataGridColumnChangePropagator'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.ROYALE_COMPILE_FLAGS = 10;
