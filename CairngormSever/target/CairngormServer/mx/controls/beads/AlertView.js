/**
 * Generated by Apache Royale Compiler from mx/controls/beads/AlertView.as
 * mx.controls.beads.AlertView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.controls.beads.AlertView');
/* Royale Dependency List: org.apache.royale.core.IParent,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.html.TitleBar,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.html.beads.AlertView');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.AlertView}
 */
mx.controls.beads.AlertView = function() {
  mx.controls.beads.AlertView.base(this, 'constructor');
};
goog.inherits(mx.controls.beads.AlertView, org.apache.royale.html.beads.AlertView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.controls.beads.AlertView', mx.controls.beads.AlertView);


mx.controls.beads.AlertView.prototype.set__strand = function(value) {
  mx.controls.beads.AlertView.superClass_.set__strand.apply(this, [ value] );
  if (!this.alertModel.title) {
    this.titleBar = new org.apache.royale.html.TitleBar();
    this.titleBar.height = 25;
    this.titleBar.title = this.alertModel.title;
    org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IParent, true).addElementAt(this.titleBar, 0);
  }
};


mx.controls.beads.AlertView.prototype.get__contentArea = function() {
  return this._strand;
};


Object.defineProperties(mx.controls.beads.AlertView.prototype, /** @lends {mx.controls.beads.AlertView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: mx.controls.beads.AlertView.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.UIBase} */
contentArea: {
get: mx.controls.beads.AlertView.prototype.get__contentArea}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.controls.beads.AlertView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AlertView', qName: 'mx.controls.beads.AlertView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.controls.beads.AlertView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'mx.controls.beads.AlertView'},
        'contentArea': { type: 'org.apache.royale.core.UIBase', access: 'readonly', declaredBy: 'mx.controls.beads.AlertView'}
      };
    },
    methods: function () {
      return {
        'AlertView': { type: '', declaredBy: 'mx.controls.beads.AlertView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.controls.beads.AlertView.prototype.ROYALE_COMPILE_FLAGS = 26;