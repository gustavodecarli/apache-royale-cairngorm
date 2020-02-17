/**
 * Generated by Apache Royale Compiler from mx/utils/HexEncoder.as
 * mx.utils.HexEncoder
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.HexEncoder');
/* Royale Dependency List: mx.utils.ByteArray,org.apache.royale.utils.Language,XML*/




/**
 *  @asprivate
 *  Constructor.
 * @constructor
 */
mx.utils.HexEncoder = function() {
  ;
  this.mx_utils_HexEncoder__buffers = [];
  this.mx_utils_HexEncoder__buffers.push([]);
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.HexEncoder', mx.utils.HexEncoder);


/**
 * @export
 * @const
 * @type {string}
 */
mx.utils.HexEncoder.UPPER_CASE = "upper";


/**
 * @export
 * @const
 * @type {string}
 */
mx.utils.HexEncoder.LOWER_CASE = "lower";


/**
 * @export
 * @type {string}
 */
mx.utils.HexEncoder.encodingStyle;


/**
 * @export
 * @type {string}
 */
mx.utils.HexEncoder.prototype.encodingStyle;


/**
 *  @asprivate
 * @export
 * @param {mx.utils.ByteArray} data
 * @param {number=} offset
 * @param {number=} length
 */
mx.utils.HexEncoder.prototype.encode = function(data, offset, length) {
  offset = typeof offset !== 'undefined' ? offset : 0;
  length = typeof length !== 'undefined' ? length : 0;
  if (length == 0)
    length = (data.length) >>> 0;
  if (offset < length) {
    data.position = offset;
  }
  var /** @type {string} */ style = (this.encodingStyle != null) ? this.encodingStyle : mx.utils.HexEncoder.encodingStyle;
  if (style != mx.utils.HexEncoder.UPPER_CASE && style != mx.utils.HexEncoder.LOWER_CASE)
    style = mx.utils.HexEncoder.UPPER_CASE;
  var /** @type {Array} */ digits = (style == mx.utils.HexEncoder.UPPER_CASE) ? mx.utils.HexEncoder.UPPER_CHAR_CODES : mx.utils.HexEncoder.LOWER_CHAR_CODES;
  while (data.bytesAvailable > 0) {
    this.mx_utils_HexEncoder_encodeBlock(data.readByte(), digits);
  }
};


/**
 *  @asprivate
 * @export
 * @return {string}
 */
mx.utils.HexEncoder.prototype.drain = function() {
  var /** @type {string} */ result = "";
  for (var /** @type {number} */ i = 0; i < this.mx_utils_HexEncoder__buffers.length; i++) {
    var /** @type {Array} */ buffer = org.apache.royale.utils.Language.as(this.mx_utils_HexEncoder__buffers[i], Array);
    result += org.apache.royale.utils.Language.string(String.fromCharCode.apply(null, buffer));
  }
  this.mx_utils_HexEncoder__buffers = [];
  this.mx_utils_HexEncoder__buffers.push([]);
  return result;
};


/**
 *  @asprivate
 * @export
 * @return {string}
 */
mx.utils.HexEncoder.prototype.flush = function() {
  return this.drain();
};


/**
 *  @asprivate
 * @private
 * @param {number} _work
 * @param {Array} digits
 */
mx.utils.HexEncoder.prototype.mx_utils_HexEncoder_encodeBlock = function(_work, digits) {
  var /** @type {Array} */ currentBuffer = org.apache.royale.utils.Language.as(this.mx_utils_HexEncoder__buffers[this.mx_utils_HexEncoder__buffers.length - 1], Array);
  if (currentBuffer.length >= mx.utils.HexEncoder.MAX_BUFFER_SIZE) {
    currentBuffer = [];
    this.mx_utils_HexEncoder__buffers.push(currentBuffer);
  }
  currentBuffer.push(digits[(_work & 0xF0) >>> 4]);
  currentBuffer.push(digits[(_work & 0x0F)]);
};


/**
 * @private
 * @type {Array}
 */
mx.utils.HexEncoder.prototype.mx_utils_HexEncoder__buffers;


/**
 * @private
 * @type {number}
 */
mx.utils.HexEncoder.prototype.mx_utils_HexEncoder__work = 0;


/**
 * @export
 * @const
 * @type {number}
 */
mx.utils.HexEncoder.MAX_BUFFER_SIZE = 32767;


/**
 * @private
 * @const
 * @type {Array}
 */
mx.utils.HexEncoder.UPPER_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];


/**
 * @private
 * @const
 * @type {Array}
 */
mx.utils.HexEncoder.LOWER_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];

mx.utils.HexEncoder.encodingStyle = mx.utils.HexEncoder.UPPER_CASE;




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.HexEncoder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HexEncoder', qName: 'mx.utils.HexEncoder', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.HexEncoder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|encodingStyle': { type: 'String', get_set: function (/** * */ v) {return v !== undefined ? mx.utils.HexEncoder.encodingStyle = v : mx.utils.HexEncoder.encodingStyle;}},
        'encodingStyle': { type: 'String', get_set: function (/** mx.utils.HexEncoder */ inst, /** * */ v) {return v !== undefined ? inst.encodingStyle = v : inst.encodingStyle;}}
      };
    },
    methods: function () {
      return {
        'HexEncoder': { type: '', declaredBy: 'mx.utils.HexEncoder'},
        'encode': { type: 'void', declaredBy: 'mx.utils.HexEncoder', parameters: function () { return [ 'mx.utils.ByteArray', false ,'uint', true ,'uint', true ]; }},
        'drain': { type: 'String', declaredBy: 'mx.utils.HexEncoder'},
        'flush': { type: 'String', declaredBy: 'mx.utils.HexEncoder'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.HexEncoder.prototype.ROYALE_COMPILE_FLAGS = 26;