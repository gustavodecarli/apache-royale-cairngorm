/**
 * Generated by Apache Royale Compiler from mx/styles/CSSStyleDeclaration.as
 * mx.styles.CSSStyleDeclaration
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.styles.CSSStyleDeclaration');
/* Royale Dependency List: mx.styles.IStyleManager2,org.apache.royale.core.ValuesManager,XML*/

goog.require('org.apache.royale.events.EventDispatcher');



/**
 *  Constructor.
 *
 *  @asparam selector - If the selector is a CSSSelector then advanced
 *  CSS selectors are supported. If a String is used for the selector then
 *  only simple CSS selectors are supported. If the String starts with a
 *  dot it is interpreted as a universal class selector, otherwise it must
 *  represent a simple type selector. If not null, this CSSStyleDeclaration
 *  will be registered with StyleManager. 
 *  
 *  @asparam styleManager - The style manager to set this declaration into. If the
 *  styleManager is null the top-level style manager will be used.
 * 
 *  @asparam autoRegisterWithStyleManager - If true set the selector in the styleManager. The selector
 *  will only be set if both <code>selector</code> and <code>styleManager</code> are
 *  both non-null.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @param {Object=} selector
 * @param {mx.styles.IStyleManager2=} styleManager
 * @param {boolean=} autoRegisterWithStyleManager
 */
mx.styles.CSSStyleDeclaration = function(selector, styleManager, autoRegisterWithStyleManager) {
  selector = typeof selector !== 'undefined' ? selector : null;
  styleManager = typeof styleManager !== 'undefined' ? styleManager : null;
  autoRegisterWithStyleManager = typeof autoRegisterWithStyleManager !== 'undefined' ? autoRegisterWithStyleManager : true;
  mx.styles.CSSStyleDeclaration.base(this, 'constructor');
};
goog.inherits(mx.styles.CSSStyleDeclaration, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.styles.CSSStyleDeclaration', mx.styles.CSSStyleDeclaration);


/**
 * @private
 * @type {Function}
 */
mx.styles.CSSStyleDeclaration.prototype.mx_styles_CSSStyleDeclaration__defaultFactory;


/**
 * @private
 * @type {Object}
 */
mx.styles.CSSStyleDeclaration.prototype.mx_styles_CSSStyleDeclaration_o;


/**
 *  Gets the value for a specified style property,
 *  as determined solely by this CSSStyleDeclaration.
 *
 *  <p>The returned value may be of any type.</p>
 *
 *  <p>The values <code>null</code>, <code>""</code>, <code>false</code>,
 *  <code>NaN</code>, and <code>0</code> are all valid style values,
 *  but the value <code>undefined</code> is not; it indicates that
 *  the specified style is not set on this CSSStyleDeclaration.
 *  You can use the method <code>StyleManager.isValidStyleValue()</code>
 *  to test the value that is returned.</p>
 *
 *  @asparam styleProp The name of the style property.
 *
 *  @asreturn The value of the specified style property if set,
 *  or <code>undefined</code> if not.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} styleProp
 * @return {*}
 */
mx.styles.CSSStyleDeclaration.prototype.getStyle = function(styleProp) {
  var /** @type {*} */ v;
  if (this.mx_styles_CSSStyleDeclaration_o == null) {
    if (this.defaultFactory != null) {
      this.defaultFactory.prototype = {};
      this.mx_styles_CSSStyleDeclaration_o = new this.defaultFactory();
    }
  }
  if (this.mx_styles_CSSStyleDeclaration_o != null) {
    v = this.mx_styles_CSSStyleDeclaration_o[styleProp];
    if (v !== undefined)
      return v;
  }
  var /** @type {Object} */ values = org.apache.royale.core.ValuesManager["valuesImpl"]["values"];
  return v;
};


/**
 *  Sets a style property on this CSSStyleDeclaration.
 *
 *  @asparam styleProp The name of the style property.
 *
 *  @asparam newValue The value of the style property.
 *  The value may be of any type.
 *  The values <code>null</code>, <code>""</code>, <code>false</code>,
 *  <code>NaN</code>, and <code>0</code> are all valid style values,
 *  but the value <code>undefined</code> is not.
 *  Setting a style property to the value <code>undefined</code>
 *  is the same as calling the <code>clearStyle()</code> method.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} styleProp
 * @param {*} newValue
 */
mx.styles.CSSStyleDeclaration.prototype.setStyle = function(styleProp, newValue) {
  if (this.mx_styles_CSSStyleDeclaration_o == null) {
    if (this.defaultFactory != null) {
      this.defaultFactory.prototype = {};
      this.mx_styles_CSSStyleDeclaration_o = new this.defaultFactory();
    }
    else
      this.mx_styles_CSSStyleDeclaration_o = {};
  }
  this.mx_styles_CSSStyleDeclaration_o[styleProp] = newValue;
};


/**
 * @private
 * @type {string}
 */
mx.styles.CSSStyleDeclaration.prototype.mx_styles_CSSStyleDeclaration__name;


mx.styles.CSSStyleDeclaration.prototype.get__defaultFactory = function() {
  return this.mx_styles_CSSStyleDeclaration__defaultFactory;
};


mx.styles.CSSStyleDeclaration.prototype.set__defaultFactory = function(f) {
  this.mx_styles_CSSStyleDeclaration__defaultFactory = f;
};


mx.styles.CSSStyleDeclaration.prototype.set__name = function(value) {
  this.mx_styles_CSSStyleDeclaration__name = value;
  this.mx_styles_CSSStyleDeclaration_o = org.apache.royale.core.ValuesManager["valuesImpl"]["values"][value];
  if (this.mx_styles_CSSStyleDeclaration_o == null) {
    if (this.defaultFactory != null) {
      this.defaultFactory.prototype = {};
      this.mx_styles_CSSStyleDeclaration_o = new this.defaultFactory();
    }
    else
      this.mx_styles_CSSStyleDeclaration_o = {};
    org.apache.royale.core.ValuesManager["valuesImpl"]["values"][value] = this.mx_styles_CSSStyleDeclaration_o;
  }
};


Object.defineProperties(mx.styles.CSSStyleDeclaration.prototype, /** @lends {mx.styles.CSSStyleDeclaration.prototype} */ {
/**
  * @export
  * @type {Function} */
defaultFactory: {
get: mx.styles.CSSStyleDeclaration.prototype.get__defaultFactory,
set: mx.styles.CSSStyleDeclaration.prototype.set__defaultFactory},
/**
  * @export
  * @type {string} */
name: {
set: mx.styles.CSSStyleDeclaration.prototype.set__name}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.styles.CSSStyleDeclaration.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CSSStyleDeclaration', qName: 'mx.styles.CSSStyleDeclaration', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.styles.CSSStyleDeclaration.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'defaultFactory': { type: 'Function', access: 'readwrite', declaredBy: 'mx.styles.CSSStyleDeclaration'},
        'name': { type: 'String', access: 'writeonly', declaredBy: 'mx.styles.CSSStyleDeclaration'}
      };
    },
    methods: function () {
      return {
        'CSSStyleDeclaration': { type: '', declaredBy: 'mx.styles.CSSStyleDeclaration', parameters: function () { return [ 'Object', true ,'mx.styles.IStyleManager2', true ,'Boolean', true ]; }},
        'getStyle': { type: '*', declaredBy: 'mx.styles.CSSStyleDeclaration', parameters: function () { return [ 'String', false ]; }},
        'setStyle': { type: 'void', declaredBy: 'mx.styles.CSSStyleDeclaration', parameters: function () { return [ 'String', false ,'*', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.styles.CSSStyleDeclaration.prototype.ROYALE_COMPILE_FLAGS = 26;
