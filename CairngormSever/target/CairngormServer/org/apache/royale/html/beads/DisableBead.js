/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/DisableBead.as
 * org.apache.royale.html.beads.DisableBead
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DisableBead');
/* Royale Dependency List: org.apache.royale.core.HTMLElementWrapper,org.apache.royale.core.IStrand,org.apache.royale.core.IUIBase,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ValueEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBead');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 */
org.apache.royale.html.beads.DisableBead = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DisableBead', org.apache.royale.html.beads.DisableBead);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.DisableBead.prototype.org_apache_royale_html_beads_DisableBead__strand;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.beads.DisableBead.prototype.org_apache_royale_html_beads_DisableBead__disabled;


/**
 * @private
 * @param {org.apache.royale.events.Event} e
 */
org.apache.royale.html.beads.DisableBead.prototype.org_apache_royale_html_beads_DisableBead_disabledChangeHandler = function(e) {
  this.org_apache_royale_html_beads_DisableBead_updateHost();
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.beads.DisableBead.prototype.org_apache_royale_html_beads_DisableBead__lastTabVal;


/**
 * @royaleignorecoercion org.apache.royale.core.HTMLElementWrapper
 * @private
 */
org.apache.royale.html.beads.DisableBead.prototype.org_apache_royale_html_beads_DisableBead_updateHost = function() {
  if (!this.org_apache_royale_html_beads_DisableBead__strand)
    return;
  
  var /** @type {HTMLElement} */ elem = this.org_apache_royale_html_beads_DisableBead__strand.element;
  elem.style["pointerEvents"] = this.disabled ? "none" : "";
  if (this.disabled)
    elem.setAttribute("tabindex", "-1");
  else
    this.org_apache_royale_html_beads_DisableBead__lastTabVal ? elem.setAttribute("tabindex", this.org_apache_royale_html_beads_DisableBead__lastTabVal) : elem.removeAttribute("tabindex");
};


/**
 *  @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @private
 */
org.apache.royale.html.beads.DisableBead.prototype.org_apache_royale_html_beads_DisableBead_throwChangeEvent = function() {
  if (this.org_apache_royale_html_beads_DisableBead__strand) {
    this.org_apache_royale_html_beads_DisableBead__strand.dispatchEvent(new org.apache.royale.events.ValueEvent("disabledChange", this.disabled));
  }
};


org.apache.royale.html.beads.DisableBead.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_DisableBead__strand = value;
  this.org_apache_royale_html_beads_DisableBead_updateHost();
};


org.apache.royale.html.beads.DisableBead.prototype.get__disabled = function() {
  return this.org_apache_royale_html_beads_DisableBead__disabled;
};


org.apache.royale.html.beads.DisableBead.prototype.set__disabled = function(value) {
  if (value != this.org_apache_royale_html_beads_DisableBead__disabled) {
    if (value && this.org_apache_royale_html_beads_DisableBead__strand)
      this.org_apache_royale_html_beads_DisableBead__lastTabVal = this.org_apache_royale_html_beads_DisableBead__strand.element.getAttribute("tabindex");
    this.org_apache_royale_html_beads_DisableBead__disabled = value;
    this.org_apache_royale_html_beads_DisableBead_updateHost();
    this.org_apache_royale_html_beads_DisableBead_throwChangeEvent();
  }
};


org.apache.royale.html.beads.DisableBead.prototype.get__org_apache_royale_html_beads_DisableBead_host = function() {
  return org.apache.royale.utils.Language.as(this.org_apache_royale_html_beads_DisableBead__strand, org.apache.royale.core.IUIBase);
};


Object.defineProperties(org.apache.royale.html.beads.DisableBead.prototype, /** @lends {org.apache.royale.html.beads.DisableBead.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.DisableBead.prototype.set__strand},
/**
  * @export
  * @type {boolean} */
disabled: {
get: org.apache.royale.html.beads.DisableBead.prototype.get__disabled,
set: org.apache.royale.html.beads.DisableBead.prototype.set__disabled},
/**
  * @type {org.apache.royale.core.IUIBase} */
org_apache_royale_html_beads_DisableBead_host: {
get: org.apache.royale.html.beads.DisableBead.prototype.get__org_apache_royale_html_beads_DisableBead_host}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DisableBead.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DisableBead', qName: 'org.apache.royale.html.beads.DisableBead', kind: 'class' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DisableBead.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.DisableBead'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.DisableBead'}
      };
    },
    methods: function () {
      return {
        'DisableBead': { type: '', declaredBy: 'org.apache.royale.html.beads.DisableBead'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.DisableBead.prototype.ROYALE_COMPILE_FLAGS = 10;