/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/Strand.as
 * org.apache.royale.core.Strand
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.Strand');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.IBeadModel,org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IStrand');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.Strand = function() {
  org.apache.royale.core.Strand.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.Strand, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.Strand', org.apache.royale.core.Strand);


/**
 * @private
 * @type {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.core.Strand.prototype.org_apache_royale_core_Strand__model;


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.Strand.prototype.org_apache_royale_core_Strand__id;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.core.Strand.prototype.beads;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.core.Strand.prototype.org_apache_royale_core_Strand__beads;


/**
 *  @copy org.apache.royale.core.IStrand#addBead()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 *  @royaleignorecoercion org.apache.royale.core.IBeadModel
 * @export
 * @param {org.apache.royale.core.IBead} bead
 */
org.apache.royale.core.Strand.prototype.addBead = function(bead) {
  if (!this.org_apache_royale_core_Strand__beads)
    this.org_apache_royale_core_Strand__beads = [];
  this.org_apache_royale_core_Strand__beads.push(bead);
  if (org.apache.royale.utils.Language.is(bead, org.apache.royale.core.IBeadModel))
    this.org_apache_royale_core_Strand__model = bead;
  bead.strand = this;
};


/**
 *  @copy org.apache.royale.core.IStrand#getBeadByType()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} classOrInterface
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.Strand.prototype.getBeadByType = function(classOrInterface) {
  var foreachiter0_target = this.org_apache_royale_core_Strand__beads;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var bead = foreachiter0_target[foreachiter0];
  {
    if (org.apache.royale.utils.Language.is(bead, classOrInterface))
      return bead;
  }}
  
  return null;
};


/**
 *  @copy org.apache.royale.core.IStrand#removeBead()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IBead} value
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.Strand.prototype.removeBead = function(value) {
  var /** @type {number} */ n = (this.org_apache_royale_core_Strand__beads.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.royale.core.IBead} */ bead = this.org_apache_royale_core_Strand__beads[i];
    if (bead == value) {
      this.org_apache_royale_core_Strand__beads.splice(i, 1);
      return bead;
    }
  }
  return null;
};


org.apache.royale.core.Strand.prototype.get__model = function() {
  if (this.org_apache_royale_core_Strand__model == null) {
    this.addBead(new (org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "iBeadModel"))());
  }
  return this.org_apache_royale_core_Strand__model;
};


org.apache.royale.core.Strand.prototype.set__model = function(value) {
  if (this.org_apache_royale_core_Strand__model != value) {
    this.addBead(value);
    this.dispatchEvent(new org.apache.royale.events.Event("modelChanged"));
  }
};


org.apache.royale.core.Strand.prototype.get__id = function() {
  return this.org_apache_royale_core_Strand__id;
};


org.apache.royale.core.Strand.prototype.set__id = function(value) {
  if (this.org_apache_royale_core_Strand__id != value) {
    this.org_apache_royale_core_Strand__id = value;
    this.dispatchEvent(new org.apache.royale.events.Event("idChanged"));
  }
};


Object.defineProperties(org.apache.royale.core.Strand.prototype, /** @lends {org.apache.royale.core.Strand.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IBeadModel} */
model: {
get: org.apache.royale.core.Strand.prototype.get__model,
set: org.apache.royale.core.Strand.prototype.set__model},
/**
  * @export
  * @type {string} */
id: {
get: org.apache.royale.core.Strand.prototype.get__id,
set: org.apache.royale.core.Strand.prototype.set__id}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.Strand.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Strand', qName: 'org.apache.royale.core.Strand', kind: 'class' }], interfaces: [org.apache.royale.core.IStrand] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.Strand.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'beads': { type: 'Array', get_set: function (/** org.apache.royale.core.Strand */ inst, /** * */ v) {return v !== undefined ? inst.beads = v : inst.beads;}}
      };
    },
    accessors: function () {
      return {
        'model': { type: 'org.apache.royale.core.IBeadModel', access: 'readwrite', declaredBy: 'org.apache.royale.core.Strand'},
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.Strand'}
      };
    },
    methods: function () {
      return {
        'Strand': { type: '', declaredBy: 'org.apache.royale.core.Strand'},
        'addBead': { type: 'void', declaredBy: 'org.apache.royale.core.Strand', parameters: function () { return [ 'org.apache.royale.core.IBead', false ]; }},
        'getBeadByType': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.Strand', parameters: function () { return [ 'Class', false ]; }},
        'removeBead': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.Strand', parameters: function () { return [ 'org.apache.royale.core.IBead', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.Strand.prototype.ROYALE_COMPILE_FLAGS = 10;
