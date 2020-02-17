/**
 * Generated by Apache Royale Compiler from mx/rpc/xml/SchemaConstants.as
 * mx.rpc.xml.SchemaConstants
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.xml.SchemaConstants');
/* Royale Dependency List: Namespace,QName,XML,mx.utils.URLUtil*/




/**
 * @constructor
 * @param {Namespace=} xsdNS
 * @param {Namespace=} xsiNS
 */
mx.rpc.xml.SchemaConstants = function(xsdNS, xsiNS) {
  xsdNS = typeof xsdNS !== 'undefined' ? xsdNS : null;
  xsiNS = typeof xsiNS !== 'undefined' ? xsiNS : null;
  ;
  if (xsdNS == null)
    xsdNS = new Namespace(mx.rpc.xml.SchemaConstants.XML_SCHEMA_PREFIX, mx.rpc.xml.SchemaConstants.XSD_URI_2001);
  if (xsiNS == null)
    xsiNS = new Namespace(mx.rpc.xml.SchemaConstants.XML_SCHEMA_INSTANCE_PREFIX, mx.rpc.xml.SchemaConstants.XSI_URI_2001);
  this.mx_rpc_xml_SchemaConstants__xsdNS = xsdNS;
  this.mx_rpc_xml_SchemaConstants__xsiNS = xsiNS;
  this.allQName = new QName(this.xsdURI, "all");
  this.annotationQName = new QName(this.xsdURI, "annotation");
  this.anyQName = new QName(this.xsdURI, "any");
  this.anyTypeQName = new QName(this.xsdURI, "anyType");
  this.anyAttributeQName = new QName(this.xsdURI, "anyAttribute");
  this.appinfoQName = new QName(this.xsdURI, "appinfo");
  this.attributeQName = new QName(this.xsdURI, "attribute");
  this.attributeGroupQName = new QName(this.xsdURI, "attributeGroup");
  this.choiceQName = new QName(this.xsdURI, "choice");
  this.complexContentQName = new QName(this.xsdURI, "complexContent");
  this.complexTypeQName = new QName(this.xsdURI, "complexType");
  this.documentationQName = new QName(this.xsdURI, "documentation");
  this.elementTypeQName = new QName(this.xsdURI, "element");
  this.enumerationTypeQName = new QName(this.xsdURI, "enumeration");
  this.extensionQName = new QName(this.xsdURI, "extension");
  this.fieldQName = new QName(this.xsdURI, "field");
  this.groupQName = new QName(this.xsdURI, "group");
  this.importQName = new QName(this.xsdURI, "import");
  this.includeQName = new QName(this.xsdURI, "include");
  this.keyQName = new QName(this.xsdURI, "key");
  this.keyrefQName = new QName(this.xsdURI, "keyref");
  this.lengthQName = new QName(this.xsdURI, "length");
  this.listQName = new QName(this.xsdURI, "list");
  this.maxInclusiveQName = new QName(this.xsdURI, "maxInclusive");
  this.maxLengthQName = new QName(this.xsdURI, "maxLength");
  this.minInclusiveQName = new QName(this.xsdURI, "minInclusive");
  this.minLengthQName = new QName(this.xsdURI, "minLength");
  this.nameQName = new QName(this.xsdURI, "name");
  this.patternQName = new QName(this.xsdURI, "pattern");
  this.redefineQName = new QName(this.xsdURI, "redefine");
  this.restrictionQName = new QName(this.xsdURI, "restriction");
  this.schemaQName = new QName(this.xsdURI, "schema");
  this.selectorQName = new QName(this.xsdURI, "selector");
  this.sequenceQName = new QName(this.xsdURI, "sequence");
  this.simpleContentQName = new QName(this.xsdURI, "simpleContent");
  this.simpleTypeQName = new QName(this.xsdURI, "simpleType");
  this.unionQName = new QName(this.xsdURI, "union");
  this.uniqueQName = new QName(this.xsdURI, "unique");
  var /** @type {string} */ nilStr = "nil";
  if (this.xsdURI == mx.rpc.xml.SchemaConstants.XSD_URI_1999)
    nilStr = "null";
  this.nilQName = new QName(this.xsiURI, nilStr);
  this.typeAttrQName = new QName(this.xsiURI, "type");
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.xml.SchemaConstants', mx.rpc.xml.SchemaConstants);


/**
 * @export
 * @param {QName} type
 * @return {string}
 */
mx.rpc.xml.SchemaConstants.prototype.getXSDToken = function(type) {
  return this.xsdNamespace.prefix + ":" + type.localName;
};


/**
 * @export
 * @param {QName} type
 * @return {string}
 */
mx.rpc.xml.SchemaConstants.prototype.getXSIToken = function(type) {
  return this.xsiNamespace.prefix + ":" + type.localName;
};


/**
 * @export
 * @param {string} localName
 * @return {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.getQName = function(localName) {
  if (localName == "type")
    return this.typeAttrQName;
  else
    return new QName(this.xsdURI, localName);
};


/**
 * @export
 * @param {XML=} xml
 * @return {mx.rpc.xml.SchemaConstants}
 */
mx.rpc.xml.SchemaConstants.getConstants = function(xml) {
  xml = typeof xml !== 'undefined' ? xml : null;
  var /** @type {Namespace} */ xsdNS;
  var /** @type {Namespace} */ xsiNS;
  if (xml != null) {
    var /** @type {Array} */ nsArray = xml.namespaceDeclarations();
    var foreachiter0_target = nsArray;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var ns = foreachiter0_target[foreachiter0];
    {
      if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.xml.SchemaConstants.XSD_URI_1999)) {
        xsdNS = ns;
      } else if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.xml.SchemaConstants.XSD_URI_2000)) {
        xsdNS = ns;
      } else if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.xml.SchemaConstants.XSD_URI_2001)) {
        xsdNS = ns;
      } else if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.xml.SchemaConstants.XSI_URI_1999)) {
        xsiNS = ns;
      } else if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.xml.SchemaConstants.XSI_URI_2000)) {
        xsiNS = ns;
      } else if (mx.utils.URLUtil.urisEqual(ns.uri, mx.rpc.xml.SchemaConstants.XSI_URI_2001)) {
        xsiNS = ns;
      }
    }}
    
  }
  if (xsdNS == null)
    xsdNS = new Namespace(mx.rpc.xml.SchemaConstants.XML_SCHEMA_PREFIX, mx.rpc.xml.SchemaConstants.XSD_URI_2001);
  if (xsiNS == null)
    xsiNS = new Namespace(mx.rpc.xml.SchemaConstants.XML_SCHEMA_INSTANCE_PREFIX, mx.rpc.xml.SchemaConstants.XSI_URI_2001);
  if (mx.rpc.xml.SchemaConstants.constantsCache == null)
    mx.rpc.xml.SchemaConstants.constantsCache = {};
  var /** @type {mx.rpc.xml.SchemaConstants} */ constants = mx.rpc.xml.SchemaConstants.constantsCache[xsdNS.uri];
  if (constants == null) {
    constants = new mx.rpc.xml.SchemaConstants(xsdNS, xsiNS);
    mx.rpc.xml.SchemaConstants.constantsCache[xsdNS.uri] = constants;
  }
  return constants;
};


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.allQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.anyTypeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.annotationQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.anyQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.anyAttributeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.appinfoQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.attributeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.attributeGroupQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.choiceQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.complexContentQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.complexTypeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.documentationQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.elementTypeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.enumerationTypeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.extensionQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.fieldQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.groupQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.importQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.includeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.keyQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.keyrefQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.lengthQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.listQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.maxInclusiveQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.maxLengthQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.minInclusiveQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.minLengthQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.nameQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.patternQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.redefineQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.restrictionQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.schemaQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.selectorQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.sequenceQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.simpleContentQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.simpleTypeQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.unionQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.uniqueQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.nilQName;


/**
 * @export
 * @type {QName}
 */
mx.rpc.xml.SchemaConstants.prototype.typeAttrQName;


/**
 * @private
 * @type {Namespace}
 */
mx.rpc.xml.SchemaConstants.prototype.mx_rpc_xml_SchemaConstants__xsdNS;


/**
 * @private
 * @type {Namespace}
 */
mx.rpc.xml.SchemaConstants.prototype.mx_rpc_xml_SchemaConstants__xsiNS;


/**
 * @private
 * @type {Object}
 */
mx.rpc.xml.SchemaConstants.constantsCache;


/**
 * @export
 * @const
 * @type {number}
 */
mx.rpc.xml.SchemaConstants.MODE_TYPE = 0;


/**
 * @export
 * @const
 * @type {number}
 */
mx.rpc.xml.SchemaConstants.MODE_ELEMENT = 1;


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XSD_URI_1999 = "http://www.w3.org/1999/XMLSchema";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XSD_URI_2000 = "http://www.w3.org/2000/10/XMLSchema";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XSD_URI_2001 = "http://www.w3.org/2001/XMLSchema";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XSI_URI_1999 = "http://www.w3.org/1999/XMLSchema-instance";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XSI_URI_2000 = "http://www.w3.org/2000/10/XMLSchema-instance";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XSI_URI_2001 = "http://www.w3.org/2001/XMLSchema-instance";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XML_SCHEMA_PREFIX = "xsd";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XML_SCHEMA_INSTANCE_PREFIX = "xsi";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XML_SCHEMA_URI = "http://www.w3.org/2001/XMLSchema";


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaConstants.XML_SCHEMA_INSTANCE_URI = "http://www.w3.org/2001/XMLSchema-instance";


mx.rpc.xml.SchemaConstants.prototype.get__xsdURI = function() {
  return this.xsdNamespace.uri;
};


mx.rpc.xml.SchemaConstants.prototype.get__xsdNamespace = function() {
  return this.mx_rpc_xml_SchemaConstants__xsdNS;
};


mx.rpc.xml.SchemaConstants.prototype.get__xsiURI = function() {
  return this.xsiNamespace.uri;
};


mx.rpc.xml.SchemaConstants.prototype.get__xsiNamespace = function() {
  return this.mx_rpc_xml_SchemaConstants__xsiNS;
};


Object.defineProperties(mx.rpc.xml.SchemaConstants.prototype, /** @lends {mx.rpc.xml.SchemaConstants.prototype} */ {
/**
  * @export
  * @type {string} */
xsdURI: {
get: mx.rpc.xml.SchemaConstants.prototype.get__xsdURI},
/**
  * @export
  * @type {Namespace} */
xsdNamespace: {
get: mx.rpc.xml.SchemaConstants.prototype.get__xsdNamespace},
/**
  * @export
  * @type {string} */
xsiURI: {
get: mx.rpc.xml.SchemaConstants.prototype.get__xsiURI},
/**
  * @export
  * @type {Namespace} */
xsiNamespace: {
get: mx.rpc.xml.SchemaConstants.prototype.get__xsiNamespace}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.xml.SchemaConstants.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SchemaConstants', qName: 'mx.rpc.xml.SchemaConstants', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.xml.SchemaConstants.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'allQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.allQName = v : inst.allQName;}},
        'anyTypeQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.anyTypeQName = v : inst.anyTypeQName;}},
        'annotationQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.annotationQName = v : inst.annotationQName;}},
        'anyQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.anyQName = v : inst.anyQName;}},
        'anyAttributeQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.anyAttributeQName = v : inst.anyAttributeQName;}},
        'appinfoQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.appinfoQName = v : inst.appinfoQName;}},
        'attributeQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.attributeQName = v : inst.attributeQName;}},
        'attributeGroupQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.attributeGroupQName = v : inst.attributeGroupQName;}},
        'choiceQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.choiceQName = v : inst.choiceQName;}},
        'complexContentQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.complexContentQName = v : inst.complexContentQName;}},
        'complexTypeQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.complexTypeQName = v : inst.complexTypeQName;}},
        'documentationQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.documentationQName = v : inst.documentationQName;}},
        'elementTypeQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.elementTypeQName = v : inst.elementTypeQName;}},
        'enumerationTypeQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.enumerationTypeQName = v : inst.enumerationTypeQName;}},
        'extensionQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.extensionQName = v : inst.extensionQName;}},
        'fieldQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.fieldQName = v : inst.fieldQName;}},
        'groupQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.groupQName = v : inst.groupQName;}},
        'importQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.importQName = v : inst.importQName;}},
        'includeQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.includeQName = v : inst.includeQName;}},
        'keyQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.keyQName = v : inst.keyQName;}},
        'keyrefQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.keyrefQName = v : inst.keyrefQName;}},
        'lengthQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.lengthQName = v : inst.lengthQName;}},
        'listQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.listQName = v : inst.listQName;}},
        'maxInclusiveQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.maxInclusiveQName = v : inst.maxInclusiveQName;}},
        'maxLengthQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.maxLengthQName = v : inst.maxLengthQName;}},
        'minInclusiveQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.minInclusiveQName = v : inst.minInclusiveQName;}},
        'minLengthQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.minLengthQName = v : inst.minLengthQName;}},
        'nameQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.nameQName = v : inst.nameQName;}},
        'patternQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.patternQName = v : inst.patternQName;}},
        'redefineQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.redefineQName = v : inst.redefineQName;}},
        'restrictionQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.restrictionQName = v : inst.restrictionQName;}},
        'schemaQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.schemaQName = v : inst.schemaQName;}},
        'selectorQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.selectorQName = v : inst.selectorQName;}},
        'sequenceQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.sequenceQName = v : inst.sequenceQName;}},
        'simpleContentQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.simpleContentQName = v : inst.simpleContentQName;}},
        'simpleTypeQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.simpleTypeQName = v : inst.simpleTypeQName;}},
        'unionQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.unionQName = v : inst.unionQName;}},
        'uniqueQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.uniqueQName = v : inst.uniqueQName;}},
        'nilQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.nilQName = v : inst.nilQName;}},
        'typeAttrQName': { type: 'QName', get_set: function (/** mx.rpc.xml.SchemaConstants */ inst, /** * */ v) {return v !== undefined ? inst.typeAttrQName = v : inst.typeAttrQName;}}
      };
    },
    accessors: function () {
      return {
        'xsdURI': { type: 'String', access: 'readonly', declaredBy: 'mx.rpc.xml.SchemaConstants'},
        'xsdNamespace': { type: 'Namespace', access: 'readonly', declaredBy: 'mx.rpc.xml.SchemaConstants'},
        'xsiURI': { type: 'String', access: 'readonly', declaredBy: 'mx.rpc.xml.SchemaConstants'},
        'xsiNamespace': { type: 'Namespace', access: 'readonly', declaredBy: 'mx.rpc.xml.SchemaConstants'}
      };
    },
    methods: function () {
      return {
        'SchemaConstants': { type: '', declaredBy: 'mx.rpc.xml.SchemaConstants', parameters: function () { return [ 'Namespace', true ,'Namespace', true ]; }},
        'getXSDToken': { type: 'String', declaredBy: 'mx.rpc.xml.SchemaConstants', parameters: function () { return [ 'QName', false ]; }},
        'getXSIToken': { type: 'String', declaredBy: 'mx.rpc.xml.SchemaConstants', parameters: function () { return [ 'QName', false ]; }},
        'getQName': { type: 'QName', declaredBy: 'mx.rpc.xml.SchemaConstants', parameters: function () { return [ 'String', false ]; }},
        '|getConstants': { type: 'mx.rpc.xml.SchemaConstants', declaredBy: 'mx.rpc.xml.SchemaConstants', parameters: function () { return [ 'XML', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.xml.SchemaConstants.prototype.ROYALE_COMPILE_FLAGS = 26;
