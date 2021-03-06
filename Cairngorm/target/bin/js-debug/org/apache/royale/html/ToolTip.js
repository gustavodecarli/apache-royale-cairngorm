/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/ToolTip.as
 * org.apache.royale.html.ToolTip
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.ToolTip');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement*/

goog.require('org.apache.royale.html.Label');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.Label}
 */
org.apache.royale.html.ToolTip = function() {
  org.apache.royale.html.ToolTip.base(this, 'constructor');
  this.typeNames = "ToolTip";
  
};
goog.inherits(org.apache.royale.html.ToolTip, org.apache.royale.html.Label);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.ToolTip', org.apache.royale.html.ToolTip);


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.royale.html.ToolTip.prototype.createElement = function() {
  org.apache.royale.html.ToolTip.superClass_.createElement.apply(this);
  this.positioner.style.position = 'absolute';
  this.positioner.style.pointerEvents = "none";
  return this.element;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.ToolTip.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ToolTip', qName: 'org.apache.royale.html.ToolTip', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.ToolTip.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'ToolTip': { type: '', declaredBy: 'org.apache.royale.html.ToolTip'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.ToolTip.prototype.ROYALE_COMPILE_FLAGS = 10;
