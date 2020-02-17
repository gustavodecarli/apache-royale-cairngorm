/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/AlertView.as
 * org.apache.royale.html.beads.AlertView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.AlertView');
/* Royale Dependency List: org.apache.royale.core.IAlertModel,org.apache.royale.core.IParent,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.events.CloseEvent,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.MouseEvent,org.apache.royale.html.Alert,org.apache.royale.html.ControlBar,org.apache.royale.html.Group,org.apache.royale.html.Label,org.apache.royale.html.TextButton,org.apache.royale.html.TitleBar,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.GroupView');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.GroupView}
 */
org.apache.royale.html.beads.AlertView = function() {
  org.apache.royale.html.beads.AlertView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.AlertView, org.apache.royale.html.beads.GroupView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.AlertView', org.apache.royale.html.beads.AlertView);


/**
 * @protected
 * @type {org.apache.royale.html.TitleBar}
 */
org.apache.royale.html.beads.AlertView.prototype.titleBar;


/**
 * @protected
 * @type {org.apache.royale.core.UIBase}
 */
org.apache.royale.html.beads.AlertView.prototype.controlBar;


/**
 * @protected
 * @type {org.apache.royale.html.Label}
 */
org.apache.royale.html.beads.AlertView.prototype.label;


/**
 * @protected
 * @type {org.apache.royale.html.Group}
 */
org.apache.royale.html.beads.AlertView.prototype.labelContent;


/**
 * @protected
 * @type {org.apache.royale.html.TextButton}
 */
org.apache.royale.html.beads.AlertView.prototype.okButton;


/**
 * @protected
 * @type {org.apache.royale.html.TextButton}
 */
org.apache.royale.html.beads.AlertView.prototype.cancelButton;


/**
 * @protected
 * @type {org.apache.royale.html.TextButton}
 */
org.apache.royale.html.beads.AlertView.prototype.yesButton;


/**
 * @protected
 * @type {org.apache.royale.html.TextButton}
 */
org.apache.royale.html.beads.AlertView.prototype.noButton;


/**
 * @protected
 * @type {org.apache.royale.core.IAlertModel}
 */
org.apache.royale.html.beads.AlertView.prototype.alertModel;


/**
 * @private
 */
org.apache.royale.html.beads.AlertView.prototype.org_apache_royale_html_beads_AlertView_createButtons = function() {
  
  this.controlBar = new org.apache.royale.html.ControlBar();
  var /** @type {number} */ flags = this.alertModel.flags;
  if (flags & org.apache.royale.html.Alert.OK) {
    this.okButton = new org.apache.royale.html.TextButton();
    this.okButton.className = "AlertButton";
    this.okButton.text = this.alertModel.okLabel;
    this.okButton.addEventListener("click", org.apache.royale.utils.Language.closure(this.org_apache_royale_html_beads_AlertView_handleOK, this, 'handleOK'));
    this.controlBar.addElement(this.okButton);
    this.okButton.element.style["height"] = "intrinsic";
    this.okButton.element.style["margin-left"] = "2px";
    this.okButton.element.style["margin-right"] = "2px";
  }
  if (flags & org.apache.royale.html.Alert.CANCEL) {
    this.cancelButton = new org.apache.royale.html.TextButton();
    this.cancelButton.className = "AlertButton";
    this.cancelButton.text = this.alertModel.cancelLabel;
    this.cancelButton.addEventListener("click", org.apache.royale.utils.Language.closure(this.org_apache_royale_html_beads_AlertView_handleCancel, this, 'handleCancel'));
    this.controlBar.addElement(this.cancelButton);
    this.cancelButton.element.style["height"] = "intrinsic";
    this.cancelButton.element.style["margin-left"] = "2px";
    this.cancelButton.element.style["margin-right"] = "2px";
  }
  if (flags & org.apache.royale.html.Alert.YES) {
    this.yesButton = new org.apache.royale.html.TextButton();
    this.yesButton.className = "AlertButton";
    this.yesButton.text = this.alertModel.yesLabel;
    this.yesButton.addEventListener("click", org.apache.royale.utils.Language.closure(this.org_apache_royale_html_beads_AlertView_handleYes, this, 'handleYes'));
    this.controlBar.addElement(this.yesButton);
    this.yesButton.element.style["height"] = "intrinsic";
    this.yesButton.element.style["margin-left"] = "2px";
    this.yesButton.element.style["margin-right"] = "2px";
  }
  if (flags & org.apache.royale.html.Alert.NO) {
    this.noButton = new org.apache.royale.html.TextButton();
    this.noButton.className = "AlertButton";
    this.noButton.text = this.alertModel.noLabel;
    this.noButton.addEventListener("click", org.apache.royale.utils.Language.closure(this.org_apache_royale_html_beads_AlertView_handleNo, this, 'handleNo'));
    this.controlBar.addElement(this.noButton);
    this.noButton.element.style["height"] = "intrinsic";
    this.noButton.element.style["margin-left"] = "2px";
    this.noButton.element.style["margin-right"] = "2px";
  }
};


/**
 * @asprivate
 * @private
 * @param {org.apache.royale.events.MouseEvent} event
 */
org.apache.royale.html.beads.AlertView.prototype.org_apache_royale_html_beads_AlertView_handleOK = function(event) {
  this.dispatchCloseEvent(org.apache.royale.html.Alert.OK);
};


/**
 * @asprivate
 * @private
 * @param {org.apache.royale.events.MouseEvent} event
 */
org.apache.royale.html.beads.AlertView.prototype.org_apache_royale_html_beads_AlertView_handleCancel = function(event) {
  this.dispatchCloseEvent(org.apache.royale.html.Alert.CANCEL);
};


/**
 * @asprivate
 * @private
 * @param {org.apache.royale.events.MouseEvent} event
 */
org.apache.royale.html.beads.AlertView.prototype.org_apache_royale_html_beads_AlertView_handleYes = function(event) {
  this.dispatchCloseEvent(org.apache.royale.html.Alert.YES);
};


/**
 * @asprivate
 * @private
 * @param {org.apache.royale.events.MouseEvent} event
 */
org.apache.royale.html.beads.AlertView.prototype.org_apache_royale_html_beads_AlertView_handleNo = function(event) {
  this.dispatchCloseEvent(org.apache.royale.html.Alert.NO);
};


/**
 * @asprivate
 * @export
 * @param {number} buttonFlag
 */
org.apache.royale.html.beads.AlertView.prototype.dispatchCloseEvent = function(buttonFlag) {
  var /** @type {org.apache.royale.events.CloseEvent} */ closeEvent = new org.apache.royale.events.CloseEvent("close", false, false, buttonFlag);
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.events.IEventDispatcher, true).dispatchEvent(closeEvent);
};


org.apache.royale.html.beads.AlertView.prototype.set__strand = function(value) {
  org.apache.royale.html.beads.AlertView.superClass_.set__strand.apply(this, [ value] );
  
  this.alertModel = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.UIBase).model, org.apache.royale.core.IAlertModel);
  this.org_apache_royale_html_beads_AlertView_createButtons();
  if (this.alertModel.title) {
    this.titleBar = new org.apache.royale.html.TitleBar();
    this.titleBar.height = 25;
    this.titleBar.title = this.alertModel.title;
    org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IParent, true).addElement(this.titleBar);
  }
  this.label = new org.apache.royale.html.Label();
  this.label.text = this.alertModel.message;
  this.labelContent = new org.apache.royale.html.Group();
  this.labelContent.className = "AlertContent";
  this.labelContent.addElement(this.label);
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IParent, true).addElement(this.labelContent);
  this.label.element.style["white-space"] = "unset";
  this.controlBar.element.style["flex-direction"] = "row";
  this.controlBar.element.style["justify-content"] = "center";
  this.controlBar.element.style["border"] = "none";
  this.controlBar.element.style["background-color"] = "#FFFFFF";
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IParent, true).addElement(this.controlBar);
  
};


Object.defineProperties(org.apache.royale.html.beads.AlertView.prototype, /** @lends {org.apache.royale.html.beads.AlertView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.AlertView.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.AlertView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AlertView', qName: 'org.apache.royale.html.beads.AlertView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.AlertView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.AlertView'}
      };
    },
    methods: function () {
      return {
        'AlertView': { type: '', declaredBy: 'org.apache.royale.html.beads.AlertView'},
        'dispatchCloseEvent': { type: 'void', declaredBy: 'org.apache.royale.html.beads.AlertView', parameters: function () { return [ 'uint', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.AlertView.prototype.ROYALE_COMPILE_FLAGS = 10;