/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/models/ImageAndTextModel.as
 * org.apache.royale.html.beads.models.ImageAndTextModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.models.ImageAndTextModel');
/* Royale Dependency List: org.apache.royale.events.Event*/

goog.require('org.apache.royale.html.beads.models.TextModel');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.models.TextModel}
 */
org.apache.royale.html.beads.models.ImageAndTextModel = function() {
  org.apache.royale.html.beads.models.ImageAndTextModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.models.ImageAndTextModel, org.apache.royale.html.beads.models.TextModel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.models.ImageAndTextModel', org.apache.royale.html.beads.models.ImageAndTextModel);


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.beads.models.ImageAndTextModel.prototype.org_apache_royale_html_beads_models_ImageAndTextModel__image;


org.apache.royale.html.beads.models.ImageAndTextModel.prototype.get__image = function() {
  return this.org_apache_royale_html_beads_models_ImageAndTextModel__image;
};


org.apache.royale.html.beads.models.ImageAndTextModel.prototype.set__image = function(value) {
  this.org_apache_royale_html_beads_models_ImageAndTextModel__image = value;
  this.dispatchEvent(new org.apache.royale.events.Event("imageChange"));
};


Object.defineProperties(org.apache.royale.html.beads.models.ImageAndTextModel.prototype, /** @lends {org.apache.royale.html.beads.models.ImageAndTextModel.prototype} */ {
/**
  * @export
  * @type {string} */
image: {
get: org.apache.royale.html.beads.models.ImageAndTextModel.prototype.get__image,
set: org.apache.royale.html.beads.models.ImageAndTextModel.prototype.set__image}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.models.ImageAndTextModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ImageAndTextModel', qName: 'org.apache.royale.html.beads.models.ImageAndTextModel', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.models.ImageAndTextModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'image': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.ImageAndTextModel'}
      };
    },
    methods: function () {
      return {
        'ImageAndTextModel': { type: '', declaredBy: 'org.apache.royale.html.beads.models.ImageAndTextModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.models.ImageAndTextModel.prototype.ROYALE_COMPILE_FLAGS = 10;