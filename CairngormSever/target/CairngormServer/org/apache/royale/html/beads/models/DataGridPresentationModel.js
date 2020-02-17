/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/models/DataGridPresentationModel.as
 * org.apache.royale.html.beads.models.DataGridPresentationModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.models.DataGridPresentationModel');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.Event*/

goog.require('org.apache.royale.html.beads.models.ListPresentationModel');
goog.require('org.apache.royale.core.IDataGridPresentationModel');



/**
 *  constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.models.ListPresentationModel}
 * @implements {org.apache.royale.core.IDataGridPresentationModel}
 */
org.apache.royale.html.beads.models.DataGridPresentationModel = function() {
  org.apache.royale.html.beads.models.DataGridPresentationModel.base(this, 'constructor');
  this.separatorThickness = 1;
};
goog.inherits(org.apache.royale.html.beads.models.DataGridPresentationModel, org.apache.royale.html.beads.models.ListPresentationModel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.models.DataGridPresentationModel', org.apache.royale.html.beads.models.DataGridPresentationModel);


/**
 * @private
 * @type {Array}
 */
org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.org_apache_royale_html_beads_models_DataGridPresentationModel__columnLabels;


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.org_apache_royale_html_beads_models_DataGridPresentationModel__strand;


org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.get__columnLabels = function() {
  return this.org_apache_royale_html_beads_models_DataGridPresentationModel__columnLabels;
};


org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.set__columnLabels = function(value) {
  if (value != this.org_apache_royale_html_beads_models_DataGridPresentationModel__columnLabels) {
    this.org_apache_royale_html_beads_models_DataGridPresentationModel__columnLabels = value;
    this.dispatchEvent(new org.apache.royale.events.Event("columnsChanged"));
  }
};


org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_models_DataGridPresentationModel__strand = value;
};


Object.defineProperties(org.apache.royale.html.beads.models.DataGridPresentationModel.prototype, /** @lends {org.apache.royale.html.beads.models.DataGridPresentationModel.prototype} */ {
/**
  * @export
  * @type {Array} */
columnLabels: {
get: org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.get__columnLabels,
set: org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.set__columnLabels},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridPresentationModel', qName: 'org.apache.royale.html.beads.models.DataGridPresentationModel', kind: 'class' }], interfaces: [org.apache.royale.core.IDataGridPresentationModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'columnLabels': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.DataGridPresentationModel'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.models.DataGridPresentationModel'}
      };
    },
    methods: function () {
      return {
        'DataGridPresentationModel': { type: '', declaredBy: 'org.apache.royale.html.beads.models.DataGridPresentationModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.models.DataGridPresentationModel.prototype.ROYALE_COMPILE_FLAGS = 10;