/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/MXMLDataInterpreter.as
 * org.apache.royale.utils.MXMLDataInterpreter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.MXMLDataInterpreter');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.IChild,org.apache.royale.core.IContainer,org.apache.royale.core.IDocument,org.apache.royale.core.IMXMLDocument,org.apache.royale.core.IParent,org.apache.royale.core.IStrand,org.apache.royale.utils.Language*/




/**
 *  Constructor.  All methods are static so should not be instantiated.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 */
org.apache.royale.utils.MXMLDataInterpreter = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.MXMLDataInterpreter', org.apache.royale.utils.MXMLDataInterpreter);


/**
 *  Generates an object based on the encoded data.
 *  
 *  @asparam document The MXML document.  If the object has an id
 *  it will be assigned in this document in this method.
 *  @asparam data The encoded data.
 *  @asreturn The object.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 *  @royaleignorecoercion Array
 *  @royaleignorecoercion String
 * @export
 * @param {Object} document
 * @param {Array} data
 * @return {Object}
 */
org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject = function(document, data) {
  var /** @type {number} */ j = 0;
  var /** @type {number} */ m = 0;
  var /** @type {number} */ i = 0;
  var /** @type {Object} */ cls = data[i++];
  var /** @type {Object} */ comp = new cls();
  if (org.apache.royale.utils.Language.is(comp, org.apache.royale.core.IStrand))
    org.apache.royale.utils.MXMLDataInterpreter.initializeStrandBasedObject(document, null, comp, data, i); else {
    //var /** @type {number} */ m = 0;
    //var /** @type {number} */ j = 0;
    var /** @type {string} */ name;
    var /** @type {*} */ simple;
    var /** @type {Object} */ value;
    var /** @type {string} */ id;
    m = (data[i++]) >> 0;
    for (j = 0; j < m; j++) {
      name = org.apache.royale.utils.Language.string(data[i++]);
      simple = data[i++];
      value = data[i++];
      if (simple == null)
        value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(document, null, value);
      else if (simple == false)
        value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject(document, value);
      if (name == "id")
        id = value;
      if (name == "document" && !comp.document)
        comp.document = document;
      else if (name == "_id")
        id = value; else if (name == "id") {
        try {
          comp["id"] = value;
        } catch (e) {
        }
      }
      else
        comp[name] = value;
    }
    if (id)
      document[id] = comp;
    if (org.apache.royale.utils.Language.is(comp, org.apache.royale.core.IDocument))
      comp.setDocument(document, id);
  }
  return comp;
};


/**
 *  Generates an Array of objects based on the encoded data.
 *  
 *  @asparam document The MXML document.  If the object has an id
 *  it will be assigned in this document in this method.
 *  @asparam parent The parent for any display objects encoded in the array.
 *  @asparam data The encoded data.
 *  @asreturn The Array.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} document
 * @param {org.apache.royale.core.IParent} parent
 * @param {Array} data
 * @return {Array}
 */
org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray = function(document, parent, data) {
  var /** @type {Array} */ comps = [];
  var /** @type {number} */ n = (data.length) >> 0;
  var /** @type {number} */ i = 0;
  while (i < n) {
    var /** @type {Object} */ cls = data[i++];
    var /** @type {Object} */ comp = new cls();
    i = org.apache.royale.utils.MXMLDataInterpreter.initializeStrandBasedObject(document, parent, comp, data, i);
    comps.push(comp);
  }
  return comps;
};


/**
 * @royaleignorecoercion Array
 * @royaleignorecoercion Function
 * @royaleignorecoercion String
 * @royaleignorecoercion org.apache.royale.core.IChild
 * @royaleignorecoercion org.apache.royale.core.IParent
 * @royaleignorecoercion org.apache.royale.core.IStrand
 * @royaleignorecoercion org.apache.royale.core.IBead
 * @private
 * @param {Object} document
 * @param {Object} parent
 * @param {Object} comp
 * @param {Array} data
 * @param {number} i
 * @return {number}
 */
org.apache.royale.utils.MXMLDataInterpreter.initializeStrandBasedObject = function(document, parent, comp, data, i) {
  var /** @type {number} */ j = 0;
  var /** @type {number} */ m = 0;
  //var /** @type {number} */ m = 0;
  //var /** @type {number} */ j = 0;
  var /** @type {string} */ name;
  var /** @type {*} */ simple;
  var /** @type {Object} */ value;
  var /** @type {string} */ id = null;
  m = (data[i++]) >> 0;
  if (m > 0 && data[0] == "model") {
    m--;
    name = org.apache.royale.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(document, parent, value);
    else if (simple == false)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject(document, value);
    comp[name] = value;
    if (org.apache.royale.utils.Language.is(value, org.apache.royale.core.IBead) && org.apache.royale.utils.Language.is(comp, org.apache.royale.core.IStrand))
      comp.addBead(value);
  }
  var /** @type {number} */ beadOffset = (i + (m - 1) * 3) >> 0;
  if (m > 0 && data[beadOffset] == "beads") {
    m--;
  }
  else
    beadOffset = -1;
  for (j = 0; j < m; j++) {
    name = org.apache.royale.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(document, null, value);
    else if (simple == false)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject(document, value);
    if (name == "id")
      id = value;
    if (name == "document" && !comp.document)
      comp.document = document;
    else if (name == "_id")
      id = value; else if (name == "id") {
      try {
        comp["id"] = value;
      } catch (e) {
      }
    }
    else
      comp[name] = value;
  }
  if (beadOffset > -1) {
    name = org.apache.royale.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(document, null, value);
    else if (simple == false)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject(document, value);
    comp[name] = value;
  }
  m = (data[i++]) >> 0;
  for (j = 0; j < m; j++) {
    name = org.apache.royale.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(document, null, value);
    else if (simple == false)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject(document, value);
    comp.setStyle(name, value);
  }
  
  m = (data[i++]) >> 0;
  for (j = 0; j < m; j++) {
    name = org.apache.royale.utils.Language.string(data[i++]);
    value = data[i++];
    
    comp.addEventListener(name, goog.bind( /** @type {Function} */ (value), document));
  }
  if (id)
    document[id] = comp;
  if (org.apache.royale.utils.Language.is(comp, org.apache.royale.core.IDocument))
    comp.setDocument(document, id);
  var /** @type {boolean} */ knownIMXMLDoc;
  var /** @type {Array} */ children = data[i++];
  if (children && org.apache.royale.utils.Language.is(comp, org.apache.royale.core.IMXMLDocument)) {
    comp.setMXMLDescriptor(document, children);
    knownIMXMLDoc = true;
  }
  if (parent && org.apache.royale.utils.Language.is(comp, org.apache.royale.core.IChild))
    parent.addElement(comp, !org.apache.royale.utils.Language.is(parent, org.apache.royale.core.IContainer));
  if (children) {
    if (!(knownIMXMLDoc || org.apache.royale.utils.Language.is(comp, org.apache.royale.core.IMXMLDocument))) {
      org.apache.royale.utils.MXMLDataInterpreter.generateMXMLInstances(document, comp, children);
    }
  }
  return i;
};


/**
 *  Generates the instances of objects in an MXML document based on the encoded data.
 *  
 *  @asparam document The MXML document.  If the object has an id
 *  it will be assigned in this document in this method.
 *  @asparam parent The parent for any display objects encoded in the array.
 *  @asparam data The encoded data.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 *  @royaleignorecoercion org.apache.royale.core.IContainer
 * @export
 * @param {Object} document
 * @param {org.apache.royale.core.IParent} parent
 * @param {Array} data
 */
org.apache.royale.utils.MXMLDataInterpreter.generateMXMLInstances = function(document, parent, data) {
  if (data != null) {
    org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(document, parent, data);
  }
  if (org.apache.royale.utils.Language.is(parent, org.apache.royale.core.IContainer)) {
    parent.childrenAdded();
  }
};


/**
 *  Generates the properties of the top-level object in an MXML document 
 *  based on the encoded data.  This basically means setting the attributes
 *  found on the tag and child tags that aren't in the default property.
 *  
 *  @asparam host The MXML document.  If the object has an id
 *  it will be assigned in this document in this method.
 *  @asparam data The encoded data.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 *  @royaleignorecoercion Array
 *  @royaleignorecoercion Function
 *  @royaleignorecoercion String
 * @export
 * @param {Object} host
 * @param {Array} data
 */
org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties = function(host, data) {
  var /** @type {number} */ j = 0;
  var /** @type {number} */ m = 0;
  if (!data)
    return;
  var /** @type {number} */ i = 0;
  //var /** @type {number} */ m = 0;
  //var /** @type {number} */ j = 0;
  var /** @type {string} */ name;
  var /** @type {*} */ simple;
  var /** @type {Object} */ value;
  var /** @type {string} */ id = null;
  m = (data[i++]) >> 0;
  var /** @type {number} */ beadOffset = (i + (m - 1) * 3) >> 0;
  if (m > 0 && data[beadOffset] == "beads") {
    m--;
  }
  else
    beadOffset = -1;
  for (j = 0; j < m; j++) {
    name = org.apache.royale.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(host, null, value);
    else if (simple == false)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject(host, value);
    if (name == "id")
      id = value;
    if (name == "_id")
      id = value;
    else
      host[name] = value;
  }
  if (beadOffset > -1) {
    name = org.apache.royale.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(host, null, value);
    else if (simple == false)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject(host, value);
    host[name] = value;
  }
  m = (data[i++]) >> 0;
  for (j = 0; j < m; j++) {
    name = org.apache.royale.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLArray(host, null, value);
    else if (simple == false)
      value = org.apache.royale.utils.MXMLDataInterpreter.generateMXMLObject(host, value);
    host[name] = value;
  }
  
  m = (data[i++]) >> 0;
  for (j = 0; j < m; j++) {
    name = org.apache.royale.utils.Language.string(data[i++]);
    value = data[i++];
    
    host.addEventListener(name, goog.bind( /** @type {Function} */ (value), host));
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.MXMLDataInterpreter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MXMLDataInterpreter', qName: 'org.apache.royale.utils.MXMLDataInterpreter', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.MXMLDataInterpreter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'MXMLDataInterpreter': { type: '', declaredBy: 'org.apache.royale.utils.MXMLDataInterpreter'},
        '|generateMXMLObject': { type: 'Object', declaredBy: 'org.apache.royale.utils.MXMLDataInterpreter', parameters: function () { return [ 'Object', false ,'Array', false ]; }},
        '|generateMXMLArray': { type: 'Array', declaredBy: 'org.apache.royale.utils.MXMLDataInterpreter', parameters: function () { return [ 'Object', false ,'org.apache.royale.core.IParent', false ,'Array', false ]; }},
        '|generateMXMLInstances': { type: 'void', declaredBy: 'org.apache.royale.utils.MXMLDataInterpreter', parameters: function () { return [ 'Object', false ,'org.apache.royale.core.IParent', false ,'Array', false ]; }},
        '|generateMXMLProperties': { type: 'void', declaredBy: 'org.apache.royale.utils.MXMLDataInterpreter', parameters: function () { return [ 'Object', false ,'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.utils.MXMLDataInterpreter.prototype.ROYALE_COMPILE_FLAGS = 10;
