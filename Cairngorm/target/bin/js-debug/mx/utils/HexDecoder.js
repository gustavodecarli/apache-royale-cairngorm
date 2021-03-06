/**
 * Generated by Apache Royale Compiler from mx/utils/HexDecoder.as
 * mx.utils.HexDecoder
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.HexDecoder');
/* Royale Dependency List: mx.utils.ByteArray,XML*/




/**
 *  @asprivate
 *  Constructor.
 * @constructor
 */
mx.utils.HexDecoder = function() {
  
  this.mx_utils_HexDecoder__work = [0, 0];
  ;
  this.mx_utils_HexDecoder__output = new mx.utils.ByteArray();
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.HexDecoder', mx.utils.HexDecoder);


/**
 *  @asprivate
 * @export
 * @param {string} encoded
 */
mx.utils.HexDecoder.prototype.decode = function(encoded) {
  for (var /** @type {number} */ i = 0; i < encoded.length; i++) {
    this.mx_utils_HexDecoder__work[0] = this.digit(encoded.charAt(i));
    i++;
    this.mx_utils_HexDecoder__work[1] = this.digit(encoded.charAt(i));
    this.mx_utils_HexDecoder__output.writeByte(((this.mx_utils_HexDecoder__work[0] << 4) | this.mx_utils_HexDecoder__work[1]) & 0xff);
  }
};


/**
 * Returns the decimal representation of a hex digit.
 * @asprivate 
 * @export
 * @param {string} char
 * @return {number}
 */
mx.utils.HexDecoder.prototype.digit = function(char) {
  switch (char) {
    case "A":
    
    case "a":
      return 10;
    case "B":
    
    case "b":
      return 11;
    case "C":
    
    case "c":
      return 12;
    case "D":
    
    case "d":
      return 13;
    case "E":
    
    case "e":
      return 14;
    case "F":
    
    case "f":
      return 15;
    default:
      return (Number(char)) >> 0;
  }
};


/**
 *  @asprivate
 * @export
 * @return {mx.utils.ByteArray}
 */
mx.utils.HexDecoder.prototype.drain = function() {
  var /** @type {mx.utils.ByteArray} */ result = this.mx_utils_HexDecoder__output;
  this.mx_utils_HexDecoder__output = new mx.utils.ByteArray();
  result.position = 0;
  return result;
};


/**
 *  @asprivate
 * @export
 * @return {mx.utils.ByteArray}
 */
mx.utils.HexDecoder.prototype.flush = function() {
  return this.drain();
};


/**
 * @private
 * @type {mx.utils.ByteArray}
 */
mx.utils.HexDecoder.prototype.mx_utils_HexDecoder__output;


/**
 * @private
 * @type {Array}
 */
mx.utils.HexDecoder.prototype.mx_utils_HexDecoder__work;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.HexDecoder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HexDecoder', qName: 'mx.utils.HexDecoder', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.HexDecoder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'HexDecoder': { type: '', declaredBy: 'mx.utils.HexDecoder'},
        'decode': { type: 'void', declaredBy: 'mx.utils.HexDecoder', parameters: function () { return [ 'String', false ]; }},
        'digit': { type: 'int', declaredBy: 'mx.utils.HexDecoder', parameters: function () { return [ 'String', false ]; }},
        'drain': { type: 'mx.utils.ByteArray', declaredBy: 'mx.utils.HexDecoder'},
        'flush': { type: 'mx.utils.ByteArray', declaredBy: 'mx.utils.HexDecoder'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.HexDecoder.prototype.ROYALE_COMPILE_FLAGS = 26;
