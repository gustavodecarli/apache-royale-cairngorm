/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/CallLaterBead.as
 * org.apache.royale.core.CallLaterBead
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.CallLaterBead');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBead');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 */
org.apache.royale.core.CallLaterBead = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.CallLaterBead', org.apache.royale.core.CallLaterBead);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.CallLaterBead.prototype.org_apache_royale_core_CallLaterBead__strand;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.core.CallLaterBead.prototype.org_apache_royale_core_CallLaterBead_calls;


/**
 *  Calls a function after some amount of time.
 * 
 *  CallLater works a bit differently than in
 *  the Flex SDK.  The Flex SDK version was
 *  could use the Flash Player's RENDER event 
 *  to try to run code before the scren was
 *  updated.  Since there is no deferred rendering
 *  in HTML/JS/CSS, this version of callLater
 *  is almost always going to run after the
 *  screen is updated.
 *  
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Function} fn
 * @param {Array=} args
 * @param {Object=} thisArg
 */
org.apache.royale.core.CallLaterBead.prototype.callLater = function(fn, args, thisArg) {
  args = typeof args !== 'undefined' ? args : null;
  thisArg = typeof thisArg !== 'undefined' ? thisArg : null;
  
  if (this.org_apache_royale_core_CallLaterBead_calls == null)
    this.org_apache_royale_core_CallLaterBead_calls = [{thisArg:thisArg, fn:fn, args:args}];
  else
    this.org_apache_royale_core_CallLaterBead_calls.push({thisArg:thisArg, fn:fn, args:args});
  setTimeout(org.apache.royale.utils.Language.closure(this.org_apache_royale_core_CallLaterBead_makeCalls, this, 'makeCalls'), 0);
};


/**
 * @private
 */
org.apache.royale.core.CallLaterBead.prototype.org_apache_royale_core_CallLaterBead_makeCalls = function() {
  var /** @type {Array} */ list = this.org_apache_royale_core_CallLaterBead_calls;
  var /** @type {number} */ n = (list.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Object} */ call = list.shift();
    var /** @type {Function} */ fn = call.fn;
    fn.apply(call.thisArg, call.args);
  }
};


org.apache.royale.core.CallLaterBead.prototype.set__strand = function(value) {
  this.org_apache_royale_core_CallLaterBead__strand = value;
};


Object.defineProperties(org.apache.royale.core.CallLaterBead.prototype, /** @lends {org.apache.royale.core.CallLaterBead.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.core.CallLaterBead.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.CallLaterBead.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CallLaterBead', qName: 'org.apache.royale.core.CallLaterBead', kind: 'class' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.CallLaterBead.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.core.CallLaterBead'}
      };
    },
    methods: function () {
      return {
        'CallLaterBead': { type: '', declaredBy: 'org.apache.royale.core.CallLaterBead'},
        'callLater': { type: 'void', declaredBy: 'org.apache.royale.core.CallLaterBead', parameters: function () { return [ 'Function', false ,'Array', true ,'Object', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.CallLaterBead.prototype.ROYALE_COMPILE_FLAGS = 10;