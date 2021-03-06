/**
 * Generated by Apache Royale Compiler from mx/logging/errors/InvalidCategoryError.as
 * mx.logging.errors.InvalidCategoryError
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.logging.errors.InvalidCategoryError');
/* Royale Dependency List: XML*/



/**
 *  Constructor.
 *
 *  @asparam message The message that describes this error.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {Error}
 * @param {string} message
 */
mx.logging.errors.InvalidCategoryError = function(message) {
  mx.logging.errors.InvalidCategoryError.base(this, 'constructor', message);
};
goog.inherits(mx.logging.errors.InvalidCategoryError, Error);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.logging.errors.InvalidCategoryError', mx.logging.errors.InvalidCategoryError);


/**
 *  Returns the messge as a String.
 *  
 *  @asreturn The message.
 *  
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {string}
 */
mx.logging.errors.InvalidCategoryError.prototype.toString = function() {
  return String(this.message);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.logging.errors.InvalidCategoryError.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'InvalidCategoryError', qName: 'mx.logging.errors.InvalidCategoryError', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.logging.errors.InvalidCategoryError.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'InvalidCategoryError': { type: '', declaredBy: 'mx.logging.errors.InvalidCategoryError', parameters: function () { return [ 'String', false ]; }},
        'toString': { type: 'String', declaredBy: 'mx.logging.errors.InvalidCategoryError'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.logging.errors.InvalidCategoryError.prototype.ROYALE_COMPILE_FLAGS = 26;
