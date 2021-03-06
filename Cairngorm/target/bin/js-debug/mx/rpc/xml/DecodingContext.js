/**
 * Generated by Apache Royale Compiler from mx/rpc/xml/DecodingContext.as
 * mx.rpc.xml.DecodingContext
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.xml.DecodingContext');
/* Royale Dependency List: XML*/



/**
 * @constructor
 */
mx.rpc.xml.DecodingContext = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.xml.DecodingContext', mx.rpc.xml.DecodingContext);


/**
 * @export
 * @type {number}
 */
mx.rpc.xml.DecodingContext.prototype.index = 0;


/**
 * @export
 * @type {boolean}
 */
mx.rpc.xml.DecodingContext.prototype.hasContextSiblings = false;


/**
 * @export
 * @type {number}
 */
mx.rpc.xml.DecodingContext.prototype.anyIndex = -1;


/**
 * @export
 * @type {boolean}
 */
mx.rpc.xml.DecodingContext.prototype.laxSequence = false;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.xml.DecodingContext.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DecodingContext', qName: 'mx.rpc.xml.DecodingContext', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.xml.DecodingContext.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'index': { type: 'int', get_set: function (/** mx.rpc.xml.DecodingContext */ inst, /** * */ v) {return v !== undefined ? inst.index = v : inst.index;}},
        'hasContextSiblings': { type: 'Boolean', get_set: function (/** mx.rpc.xml.DecodingContext */ inst, /** * */ v) {return v !== undefined ? inst.hasContextSiblings = v : inst.hasContextSiblings;}},
        'anyIndex': { type: 'int', get_set: function (/** mx.rpc.xml.DecodingContext */ inst, /** * */ v) {return v !== undefined ? inst.anyIndex = v : inst.anyIndex;}},
        'laxSequence': { type: 'Boolean', get_set: function (/** mx.rpc.xml.DecodingContext */ inst, /** * */ v) {return v !== undefined ? inst.laxSequence = v : inst.laxSequence;}}
      };
    },
    methods: function () {
      return {
        'DecodingContext': { type: '', declaredBy: 'mx.rpc.xml.DecodingContext'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.xml.DecodingContext.prototype.ROYALE_COMPILE_FLAGS = 26;
