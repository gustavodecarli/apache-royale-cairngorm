/**
 * Generated by Apache Royale Compiler from mx/core/FlexCSSStyles.as
 * mx.core.FlexCSSStyles
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.FlexCSSStyles');
/* Royale Dependency List: XML*/

goog.require('org.apache.royale.core.AllCSSStyles');



/**
 * @constructor
 * @extends {org.apache.royale.core.AllCSSStyles}
 */
mx.core.FlexCSSStyles = function() {
  mx.core.FlexCSSStyles.base(this, 'constructor');
};
goog.inherits(mx.core.FlexCSSStyles, org.apache.royale.core.AllCSSStyles);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.FlexCSSStyles', mx.core.FlexCSSStyles);


/**
 * @export
 * @type {*}
 */
mx.core.FlexCSSStyles.prototype.horizontalGap;


/**
 * @export
 * @type {*}
 */
mx.core.FlexCSSStyles.prototype.verticalGap;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.FlexCSSStyles.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FlexCSSStyles', qName: 'mx.core.FlexCSSStyles', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.FlexCSSStyles.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'horizontalGap': { type: '*', get_set: function f(/** mx.core.FlexCSSStyles */ inst, /** * */ v) {return v !== f ? inst.horizontalGap = v : inst.horizontalGap;}},
        'verticalGap': { type: '*', get_set: function f(/** mx.core.FlexCSSStyles */ inst, /** * */ v) {return v !== f ? inst.verticalGap = v : inst.verticalGap;}}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.FlexCSSStyles.prototype.ROYALE_COMPILE_FLAGS = 26;
