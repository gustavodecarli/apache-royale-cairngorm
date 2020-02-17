/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/models/DataGridModel.as
 * org.apache.royale.html.beads.models.DataGridModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.models.DataGridModel');
/* Royale Dependency List: org.apache.royale.core.IBeadModel,org.apache.royale.events.Event,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.models.ArraySelectionModel');
goog.require('org.apache.royale.core.IDataGridModel');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.models.ArraySelectionModel}
 * @implements {org.apache.royale.core.IDataGridModel}
 */
org.apache.royale.html.beads.models.DataGridModel = function() {
  org.apache.royale.html.beads.models.DataGridModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.models.DataGridModel, org.apache.royale.html.beads.models.ArraySelectionModel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.models.DataGridModel', org.apache.royale.html.beads.models.DataGridModel);


/**
 * @private
 * @type {Array}
 */
org.apache.royale.html.beads.models.DataGridModel.prototype.org_apache_royale_html_beads_models_DataGridModel__columns;


/**
 * @private
 * @type {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.html.beads.models.DataGridModel.prototype.org_apache_royale_html_beads_models_DataGridModel__headerModel;


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.models.DataGridModel.prototype.org_apache_royale_html_beads_models_DataGridModel_handleHeaderModelChange = function(event) {
  this.dispatchEvent(new org.apache.royale.events.Event("headerModelChanged"));
};


org.apache.royale.html.beads.models.DataGridModel.prototype.get__columns = function() {
  return this.org_apache_royale_html_beads_models_DataGridModel__columns;
};


org.apache.royale.html.beads.models.DataGridModel.prototype.set__columns = function(value) {
  if (this.org_apache_royale_html_beads_models_DataGridModel__columns != value) {
    this.org_apache_royale_html_beads_models_DataGridModel__columns = value;
    this.dispatchEvent(new org.apache.royale.events.Event("columnsChanged"));
  }
};


org.apache.royale.html.beads.models.DataGridModel.prototype.get__headerModel = function() {
  return this.org_apache_royale_html_beads_models_DataGridModel__headerModel;
};


org.apache.royale.html.beads.models.DataGridModel.prototype.set__headerModel = function(value) {
  if (this.org_apache_royale_html_beads_models_DataGridModel__headerModel != value) {
    this.org_apache_royale_html_beads_models_DataGridModel__headerModel = value;
    this.dispatchEvent(new org.apache.royale.events.Event("headerModelChanged"));
    this.org_apache_royale_html_beads_models_DataGridModel__headerModel.addEventListener("dataProviderChanged", org.apache.royale.utils.Language.closure(this.org_apache_royale_html_beads_models_DataGridModel_handleHeaderModelChange, this, 'handleHeaderModelChange'));
  }
};


Object.defineProperties(org.apache.royale.html.beads.models.DataGridModel.prototype, /** @lends {org.apache.royale.html.beads.models.DataGridModel.prototype} */ {
/**
  * @export
  * @type {Array} */
columns: {
get: org.apache.royale.html.beads.models.DataGridModel.prototype.get__columns,
set: org.apache.royale.html.beads.models.DataGridModel.prototype.set__columns},
/**
  * @export
  * @type {org.apache.royale.core.IBeadModel} */
headerModel: {
get: org.apache.royale.html.beads.models.DataGridModel.prototype.get__headerModel,
set: org.apache.royale.html.beads.models.DataGridModel.prototype.set__headerModel}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.models.DataGridModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridModel', qName: 'org.apache.royale.html.beads.models.DataGridModel', kind: 'class' }], interfaces: [org.apache.royale.core.IDataGridModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.models.DataGridModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'columns': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.DataGridModel'},
        'headerModel': { type: 'org.apache.royale.core.IBeadModel', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.DataGridModel'}
      };
    },
    methods: function () {
      return {
        'DataGridModel': { type: '', declaredBy: 'org.apache.royale.html.beads.models.DataGridModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.models.DataGridModel.prototype.ROYALE_COMPILE_FLAGS = 10;
