/**
 * Generated by Apache Royale Compiler from mx/core/UITextFormat.as
 * mx.core.UITextFormat
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.UITextFormat');
/* Royale Dependency List: mx.core.ITextFieldFactory,mx.core.Singleton,mx.core.mx_internal,mx.managers.ISystemManager,mx.managers.SystemManager,org.apache.royale.core.TextLineMetrics,org.apache.royale.utils.Language,XML*/

goog.require('mx.text.TextFormat');



/**
 *  Constructor.
 *
 *  @asparam systemManager A SystemManager object.
 *  The SystemManager keeps track of which fonts are embedded.
 *  Typically this is the SystemManager obtained from the
 *  <code>systemManager</code> property of UIComponent.
 *
 *  @asparam font A String specifying the name of a font,
 *  or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam size A Number specifying a font size in pixels,
 *  or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam color An unsigned integer specifying the RGB color of the text,
 *  such as 0xFF0000 for red, or <code>null</code> to indicate
 *  that is UITextFormat doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam bold A Boolean flag specifying whether the text is bold,
 *  or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam italic A Boolean flag specifying whether the text is italic,
 *  or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam italic A Boolean flag specifying whether the text is underlined,
 *  or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam urlString A String specifying the URL to which the text is
 *  hyperlinked, or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam target A String specifying the target window
 *  where the hyperlinked URL is displayed. 
 *  If the target window is <code>null</code> or an empty string,
 *  the hyperlinked page is displayed in the same browser window.
 *  If the <code>urlString</code> parameter is <code>null</code>
 *  or an empty string, this property has no effect.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam align A String specifying the alignment of the paragraph,
 *  as a flash.text.TextFormatAlign value, or <code>null</code> to indicate
 *  that this UITextFormat doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam leftMargin A Number specifying the left margin of the paragraph,
 *  in pixels, or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam rightMargin A Number specifying the right margin of the paragraph,
 *  in pixels, or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam indent A Number specifying the indentation from the left
 *  margin to the first character in the paragraph, in pixels,
 *  or <code>null</code> to indicate that this UITextFormat
 *  doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @asparam leading A Number specifying the amount of additional vertical
 *  space between lines, or <code>null</code> to indicate
 *  that this UITextFormat doesn't specify this property.
 *  This parameter is optional, with a default value of <code>null</code>.
 *
 *  @see flash.text.TextFormatAlign
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {mx.text.TextFormat}
 * @param {mx.managers.ISystemManager} systemManager
 * @param {string=} font
 * @param {Object=} size
 * @param {Object=} color
 * @param {Object=} bold
 * @param {Object=} italic
 * @param {Object=} underline
 * @param {string=} align
 * @param {Object=} leftMargin
 * @param {Object=} rightMargin
 */
mx.core.UITextFormat = function(systemManager, font, size, color, bold, italic, underline, align, leftMargin, rightMargin) {
  font = typeof font !== 'undefined' ? font : null;
  size = typeof size !== 'undefined' ? size : null;
  color = typeof color !== 'undefined' ? color : null;
  bold = typeof bold !== 'undefined' ? bold : null;
  italic = typeof italic !== 'undefined' ? italic : null;
  underline = typeof underline !== 'undefined' ? underline : null;
  align = typeof align !== 'undefined' ? align : null;
  leftMargin = typeof leftMargin !== 'undefined' ? leftMargin : null;
  rightMargin = typeof rightMargin !== 'undefined' ? rightMargin : null;
  this.mx_core_UITextFormat_systemManager = systemManager;
  mx.core.UITextFormat.base(this, 'constructor', font, size, color, bold, italic, underline, align, leftMargin, rightMargin);
};
goog.inherits(mx.core.UITextFormat, mx.text.TextFormat);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.UITextFormat', mx.core.UITextFormat);


/**
 * @private
 * @type {mx.core.ITextFieldFactory}
 */
mx.core.UITextFormat._textFieldFactory;


/**
 * @private
 * @type {mx.managers.ISystemManager}
 */
mx.core.UITextFormat.prototype.mx_core_UITextFormat_systemManager;


/**
 * @export
 * @type {string}
 */
mx.core.UITextFormat.prototype.antiAliasType;


/**
 * @export
 * @type {string}
 */
mx.core.UITextFormat.prototype.direction;


/**
 * @export
 * @type {string}
 */
mx.core.UITextFormat.prototype.gridFitType;


/**
 * @export
 * @type {string}
 */
mx.core.UITextFormat.prototype.locale;


/**
 * @export
 * @type {number}
 */
mx.core.UITextFormat.prototype.sharpness;


/**
 * @export
 * @type {number}
 */
mx.core.UITextFormat.prototype.thickness;


/**
 * @export
 * @type {boolean}
 */
mx.core.UITextFormat.prototype.useFTE = false;


/**
 *  Returns measurement information for the specified text, 
 *  assuming that it is displayed in a single-line UITextField component, 
 *  and using this UITextFormat object to define the text format. 
 *
 *  @asparam text A String specifying the text to measure.
 *  
 *  @asparam roundUp A Boolean flag specifying whether to round up the
 *  the measured width and height to the nearest integer.
 *  Rounding up is appropriate in most circumstances.
 *  
 *  @asreturn A TextLineMetrics object containing the text measurements.
 *
 *  @see flash.text.TextLineMetrics
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} text
 * @param {boolean=} roundUp
 * @return {org.apache.royale.core.TextLineMetrics}
 */
mx.core.UITextFormat.prototype.measureText = function(text, roundUp) {
  roundUp = typeof roundUp !== 'undefined' ? roundUp : true;
  return this.mx_core_UITextFormat_measure(text, false, roundUp);
};


/**
 *  Returns measurement information for the specified HTML text, 
 *  which may contain HTML tags such as <code>&lt;font&gt;</code>
 *  and <code>&lt;b&gt;</code>, assuming that it is displayed
 *  in a single-line UITextField, and using this UITextFormat object
 *  to define the text format.
 *
 *  @asparam text A String specifying the HTML text to measure.
 *  
 *  @asparam roundUp A Boolean flag specifying whether to round up the
 *  the measured width and height to the nearest integer.
 *  Rounding up is appropriate in most circumstances.
 * 
 *  @asreturn A TextLineMetrics object containing the text measurements.
 *
 *  @see flash.text.TextLineMetrics
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} htmlText
 * @param {boolean=} roundUp
 * @return {org.apache.royale.core.TextLineMetrics}
 */
mx.core.UITextFormat.prototype.measureHTMLText = function(htmlText, roundUp) {
  roundUp = typeof roundUp !== 'undefined' ? roundUp : true;
  return this.mx_core_UITextFormat_measure(htmlText, true, roundUp);
};


/**
 * @royaleignorecoercion mx.managers.SystemManager;
 * @royaleignorecoercion HTMLSpanElement; 
 * @private
 * @param {string} s
 * @param {boolean} html
 * @param {boolean} roundUp
 * @return {org.apache.royale.core.TextLineMetrics}
 */
mx.core.UITextFormat.prototype.mx_core_UITextFormat_measure = function(s, html, roundUp) {
  var /** @type {mx.managers.SystemManager} */ sm = org.apache.royale.utils.Language.as(this.mx_core_UITextFormat_systemManager, mx.managers.SystemManager);
  if (sm.measuringElement == null) {
    sm.measuringElement = org.apache.royale.utils.Language.as(document.createElement("span"), HTMLSpanElement);
    sm.measuringElement.style.opacity = 0;
    sm.measuringElement.style["pointer-events"] = "none";
    sm.element.appendChild(sm.measuringElement);
  }
  if (s.indexOf("&nbsp;") >= 0)
    sm.measuringElement.innerHTML = s;
  else
    sm.measuringElement.textContent = s;
  var /** @type {org.apache.royale.core.TextLineMetrics} */ tlm = new org.apache.royale.core.TextLineMetrics();
  tlm.width = sm.measuringElement.offsetWidth;
  tlm.height = sm.measuringElement.offsetHeight;
  return tlm;
};


/**
 *  @asprivate
 * @export
 * @param {mx.text.TextFormat} source
 */
mx.core.UITextFormat.prototype.http_$$www_adobe_com$2006$flex$mx$internal__copyFrom = function(source) {
  this.font = source.font;
  this.size = source.size;
  this.color = source.color;
  this.bold = source.bold;
  this.italic = source.italic;
  this.underline = source.underline;
  this.align = source.align;
  this.leftMargin = source.leftMargin;
  this.rightMargin = source.rightMargin;
  this.leading = source.leading;
};


mx.core.UITextFormat.get__textFieldFactory = function() {
  if (!mx.core.UITextFormat._textFieldFactory) {
    mx.core.UITextFormat._textFieldFactory = org.apache.royale.utils.Language.as(mx.core.Singleton.getInstance("mx.core::ITextFieldFactory"), mx.core.ITextFieldFactory, true);
  }
  return mx.core.UITextFormat._textFieldFactory;
};


Object.defineProperties(mx.core.UITextFormat, /** @lends {mx.core.UITextFormat} */ {
/**
  * @export
  * @type {mx.core.ITextFieldFactory} */
textFieldFactory: {
get: mx.core.UITextFormat.get__textFieldFactory}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.UITextFormat.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'UITextFormat', qName: 'mx.core.UITextFormat', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.UITextFormat.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'antiAliasType': { type: 'String', get_set: function (/** mx.core.UITextFormat */ inst, /** * */ v) {return v !== undefined ? inst.antiAliasType = v : inst.antiAliasType;}},
        'direction': { type: 'String', get_set: function (/** mx.core.UITextFormat */ inst, /** * */ v) {return v !== undefined ? inst.direction = v : inst.direction;}},
        'gridFitType': { type: 'String', get_set: function (/** mx.core.UITextFormat */ inst, /** * */ v) {return v !== undefined ? inst.gridFitType = v : inst.gridFitType;}},
        'locale': { type: 'String', get_set: function (/** mx.core.UITextFormat */ inst, /** * */ v) {return v !== undefined ? inst.locale = v : inst.locale;}},
        'sharpness': { type: 'Number', get_set: function (/** mx.core.UITextFormat */ inst, /** * */ v) {return v !== undefined ? inst.sharpness = v : inst.sharpness;}},
        'thickness': { type: 'Number', get_set: function (/** mx.core.UITextFormat */ inst, /** * */ v) {return v !== undefined ? inst.thickness = v : inst.thickness;}},
        'useFTE': { type: 'Boolean', get_set: function (/** mx.core.UITextFormat */ inst, /** * */ v) {return v !== undefined ? inst.useFTE = v : inst.useFTE;}}
      };
    },
    methods: function () {
      return {
        'UITextFormat': { type: '', declaredBy: 'mx.core.UITextFormat', parameters: function () { return [ 'mx.managers.ISystemManager', false ,'String', true ,'Object', true ,'Object', true ,'Object', true ,'Object', true ,'Object', true ,'String', true ,'Object', true ,'Object', true ]; }},
        'measureText': { type: 'org.apache.royale.core.TextLineMetrics', declaredBy: 'mx.core.UITextFormat', parameters: function () { return [ 'String', false ,'Boolean', true ]; }},
        'measureHTMLText': { type: 'org.apache.royale.core.TextLineMetrics', declaredBy: 'mx.core.UITextFormat', parameters: function () { return [ 'String', false ,'Boolean', true ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::copyFrom': { type: 'void', declaredBy: 'mx.core.UITextFormat', parameters: function () { return [ 'mx.text.TextFormat', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.UITextFormat.prototype.ROYALE_COMPILE_FLAGS = 26;
