/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/models/DataProviderModel.as
 * org.apache.royale.html.beads.models.DataProviderModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.models.DataProviderModel');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.Event*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IDataProviderModel');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IDataProviderModel}
 */
org.apache.royale.html.beads.models.DataProviderModel = function() {
  org.apache.royale.html.beads.models.DataProviderModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.models.DataProviderModel, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.models.DataProviderModel', org.apache.royale.html.beads.models.DataProviderModel);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.models.DataProviderModel.prototype.org_apache_royale_html_beads_models_DataProviderModel__strand;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.beads.models.DataProviderModel.prototype.org_apache_royale_html_beads_models_DataProviderModel__dataProvider;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.beads.models.DataProviderModel.prototype.org_apache_royale_html_beads_models_DataProviderModel__labelField = null;


org.apache.royale.html.beads.models.DataProviderModel.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_models_DataProviderModel__strand = value;
};


org.apache.royale.html.beads.models.DataProviderModel.prototype.get__dataProvider = function() {
  return this.org_apache_royale_html_beads_models_DataProviderModel__dataProvider;
};


org.apache.royale.html.beads.models.DataProviderModel.prototype.set__dataProvider = function(value) {
  if (value === this.org_apache_royale_html_beads_models_DataProviderModel__dataProvider)
    return;
  this.org_apache_royale_html_beads_models_DataProviderModel__dataProvider = value;
  this.dispatchEvent(new org.apache.royale.events.Event("dataProviderChanged"));
};


org.apache.royale.html.beads.models.DataProviderModel.prototype.get__labelField = function() {
  return this.org_apache_royale_html_beads_models_DataProviderModel__labelField;
};


org.apache.royale.html.beads.models.DataProviderModel.prototype.set__labelField = function(value) {
  if (value != this.org_apache_royale_html_beads_models_DataProviderModel__labelField) {
    this.org_apache_royale_html_beads_models_DataProviderModel__labelField = value;
    this.dispatchEvent(new org.apache.royale.events.Event("labelFieldChanged"));
  }
};


Object.defineProperties(org.apache.royale.html.beads.models.DataProviderModel.prototype, /** @lends {org.apache.royale.html.beads.models.DataProviderModel.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.models.DataProviderModel.prototype.set__strand},
/**
  * @export
  * @type {Object} */
dataProvider: {
get: org.apache.royale.html.beads.models.DataProviderModel.prototype.get__dataProvider,
set: org.apache.royale.html.beads.models.DataProviderModel.prototype.set__dataProvider},
/**
  * @export
  * @type {string} */
labelField: {
get: org.apache.royale.html.beads.models.DataProviderModel.prototype.get__labelField,
set: org.apache.royale.html.beads.models.DataProviderModel.prototype.set__labelField}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.models.DataProviderModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataProviderModel', qName: 'org.apache.royale.html.beads.models.DataProviderModel', kind: 'class' }], interfaces: [org.apache.royale.core.IDataProviderModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.models.DataProviderModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.models.DataProviderModel'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.DataProviderModel'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.DataProviderModel'}
      };
    },
    methods: function () {
      return {
        'DataProviderModel': { type: '', declaredBy: 'org.apache.royale.html.beads.models.DataProviderModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.models.DataProviderModel.prototype.ROYALE_COMPILE_FLAGS = 10;