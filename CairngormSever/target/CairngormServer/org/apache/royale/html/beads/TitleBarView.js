/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/TitleBarView.mxml
 * org.apache.royale.html.beads.TitleBarView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.TitleBarView');
/* Royale Dependency List: org.apache.royale.binding.MXMLBeadViewDataBinding,org.apache.royale.html.beads.layouts.LayoutChangeNotifier,org.apache.royale.html.beads.TitleBarTitle,org.apache.royale.html.CloseButton,org.apache.royale.core.ITitleBarModel,org.apache.royale.core.UIBase,org.apache.royale.events.Event,org.apache.royale.events.MouseEvent*/

goog.require('org.apache.royale.html.MXMLBeadView');



/**
 * @constructor
 * @extends {org.apache.royale.html.MXMLBeadView}
 */
org.apache.royale.html.beads.TitleBarView = function() {
  org.apache.royale.html.beads.TitleBarView.base(this, 'constructor');
  
  /**
   * @private
   * @type {org.apache.royale.binding.MXMLBeadViewDataBinding}
   */
  this.$ID0_;
  
  /**
   * @private
   * @type {org.apache.royale.html.beads.layouts.LayoutChangeNotifier}
   */
  this.$ID1_;
  
  /**
   * @private
   * @type {org.apache.royale.html.beads.TitleBarTitle}
   */
  this.titleLabel_;
  
  /**
   * @private
   * @type {org.apache.royale.html.CloseButton}
   */
  this.closeButton_;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;

  this.generateMXMLAttributes
  ([1,
'beads',
null, [org.apache.royale.binding.MXMLBeadViewDataBinding, 1, '_id', true, '$ID0', 0, 0, null, org.apache.royale.html.beads.layouts.LayoutChangeNotifier, 1, '_id', true, '$ID1', 0, 0, null],
0,
0
  ]);
  
};
goog.inherits(org.apache.royale.html.beads.TitleBarView, org.apache.royale.html.MXMLBeadView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.TitleBarView', org.apache.royale.html.beads.TitleBarView);



/**
 * @private
 */
org.apache.royale.html.beads.TitleBarView.prototype.org_apache_royale_html_beads_TitleBarView_clickHandler = function() {
  var /** @type {org.apache.royale.events.Event} */ newEvent = new org.apache.royale.events.Event('close');
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.UIBase, true).dispatchEvent(newEvent);
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
org.apache.royale.html.beads.TitleBarView.prototype.$EH0 = function(event)
{
  this.org_apache_royale_html_beads_TitleBarView_clickHandler();
};


Object.defineProperties(org.apache.royale.html.beads.TitleBarView.prototype, /** @lends {org.apache.royale.html.beads.TitleBarView.prototype} */ {
/** @export */
    titleLabel: {
    /** @this {org.apache.royale.html.beads.TitleBarView} */
    get: function() {
      return this.titleLabel_;
    },
    /** @this {org.apache.royale.html.beads.TitleBarView} */
    set: function(value) {
      if (value != this.titleLabel_) {
        this.titleLabel_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'titleLabel', null, value));
      }
    }
  },
  /** @export */
    closeButton: {
    /** @this {org.apache.royale.html.beads.TitleBarView} */
    get: function() {
      return this.closeButton_;
    },
    /** @this {org.apache.royale.html.beads.TitleBarView} */
    set: function(value) {
      if (value != this.closeButton_) {
        this.closeButton_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'closeButton', null, value));
      }
    }
  },
  'MXMLDescriptor': {
    /** @this {org.apache.royale.html.beads.TitleBarView} */
    get: function() {
      {
        if (this.mxmldd == undefined)
        {
          /** @type {Array} */
          var arr = org.apache.royale.html.beads.TitleBarView.superClass_.get__MXMLDescriptor.apply(this);
          /** @type {Array} */
          var data = [
      org.apache.royale.html.beads.TitleBarTitle,
1,
'id',
true,
'titleLabel',
0,
0,
null,
org.apache.royale.html.CloseButton,
2,
'id',
true,
'closeButton',
'className',
true,
'TitleBarCloseButton',
0,
1,
'click',
this.$EH0,
null
      ];
        
          if (arr)
            this.mxmldd = arr.concat(data);
          else
            this.mxmldd = data;
        }
        return this.mxmldd;
      }
      }
    }
  });
  /**
   * @export
   */
  org.apache.royale.html.beads.TitleBarView.prototype._bindings = [
  3,
  ["titleLabel", "text"],
  null,
  ["$ID1", "watchedProperty"],
  function() { return org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.ITitleBarModel, true).title; },
  null,
  ["titleLabel", "text"],
  function() { return org.apache.royale.utils.Language.as(this.model, org.apache.royale.core.ITitleBarModel, true).showCloseButton; },
  null,
  ["closeButton", "visible"],
  0,
  2,
  "titleLabel",
  "valueChange",
  0,
  null,
  [
  1,
  2,
  "text",
  "textChange",
  0,
  null,
  null,
  null],
  2,
  2,
  "model",
  "__NoChangeEvent__",
  [1,2],
  null,
  [
  3,
  2,
  "title",
  "titleChange",
  1,
  null,
  null,
  4,
  2,
  "showCloseButton",
  "showCloseButtonChange",
  2,
  null,
  null,
  null]];
  /**
   * Metadata
   *
   * @type {Object.<string, Array.<Object>>}
   */
  org.apache.royale.html.beads.TitleBarView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TitleBarView', qName: 'org.apache.royale.html.beads.TitleBarView', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.TitleBarView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'titleLabel': { type: 'org.apache.royale.html.beads.TitleBarTitle', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.TitleBarView'},
        'closeButton': { type: 'org.apache.royale.html.CloseButton', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.TitleBarView'}
      };
    },
    methods: function () {
      return {
        'TitleBarView': { type: '', declaredBy: 'org.apache.royale.html.beads.TitleBarView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.TitleBarView.prototype.ROYALE_COMPILE_FLAGS = 10;

  
  
