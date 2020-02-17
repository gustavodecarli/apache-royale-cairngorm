/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/styles/BorderStyles.as
 * org.apache.royale.core.styles.BorderStyles
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.styles.BorderStyles');
/* Royale Dependency List: */



/**
 * @constructor
 */
org.apache.royale.core.styles.BorderStyles = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.styles.BorderStyles', org.apache.royale.core.styles.BorderStyles);


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.styles.BorderStyles.prototype.org_apache_royale_core_styles_BorderStyles__style;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.styles.BorderStyles.prototype.org_apache_royale_core_styles_BorderStyles__color = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.styles.BorderStyles.prototype.org_apache_royale_core_styles_BorderStyles__width;


org.apache.royale.core.styles.BorderStyles.prototype.get__style = function() {
  return this.org_apache_royale_core_styles_BorderStyles__style;
};


org.apache.royale.core.styles.BorderStyles.prototype.set__style = function(value) {
  this.org_apache_royale_core_styles_BorderStyles__style = value;
};


org.apache.royale.core.styles.BorderStyles.prototype.get__color = function() {
  return this.org_apache_royale_core_styles_BorderStyles__color;
};


org.apache.royale.core.styles.BorderStyles.prototype.set__color = function(value) {
  this.org_apache_royale_core_styles_BorderStyles__color = value;
};


org.apache.royale.core.styles.BorderStyles.prototype.get__width = function() {
  return this.org_apache_royale_core_styles_BorderStyles__width;
};


org.apache.royale.core.styles.BorderStyles.prototype.set__width = function(value) {
  this.org_apache_royale_core_styles_BorderStyles__width = value;
};


Object.defineProperties(org.apache.royale.core.styles.BorderStyles.prototype, /** @lends {org.apache.royale.core.styles.BorderStyles.prototype} */ {
/**
  * @export
  * @type {string} */
style: {
get: org.apache.royale.core.styles.BorderStyles.prototype.get__style,
set: org.apache.royale.core.styles.BorderStyles.prototype.set__style},
/**
  * @export
  * @type {number} */
color: {
get: org.apache.royale.core.styles.BorderStyles.prototype.get__color,
set: org.apache.royale.core.styles.BorderStyles.prototype.set__color},
/**
  * @export
  * @type {number} */
width: {
get: org.apache.royale.core.styles.BorderStyles.prototype.get__width,
set: org.apache.royale.core.styles.BorderStyles.prototype.set__width}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.styles.BorderStyles.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BorderStyles', qName: 'org.apache.royale.core.styles.BorderStyles', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.styles.BorderStyles.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'style': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.styles.BorderStyles'},
        'color': { type: 'uint', access: 'readwrite', declaredBy: 'org.apache.royale.core.styles.BorderStyles'},
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.styles.BorderStyles'}
      };
    },
    methods: function () {
      return {
        'BorderStyles': { type: '', declaredBy: 'org.apache.royale.core.styles.BorderStyles'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.styles.BorderStyles.prototype.ROYALE_COMPILE_FLAGS = 10;
