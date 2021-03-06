/**
 * Generated by Apache Royale Compiler from mx/rpc/xml/SchemaLoader.as
 * mx.rpc.xml.SchemaLoader
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.xml.SchemaLoader');
/* Royale Dependency List: Namespace,QName,XML,XMLList,mx.rpc.AsyncToken,mx.rpc.events.ResultEvent,mx.rpc.events.SchemaLoadEvent,mx.rpc.http.HTTPService,mx.rpc.xml.Schema,mx.rpc.xml.SchemaManager,org.apache.royale.utils.Language*/

goog.require('mx.rpc.xml.XMLLoader');



/**
 * @constructor
 * @extends {mx.rpc.xml.XMLLoader}
 * @param {mx.rpc.http.HTTPService=} httpService
 */
mx.rpc.xml.SchemaLoader = function(httpService) {
  httpService = typeof httpService !== 'undefined' ? httpService : null;
  mx.rpc.xml.SchemaLoader.base(this, 'constructor', httpService);
  this.mx_rpc_xml_SchemaLoader_locationMap = {};
};
goog.inherits(mx.rpc.xml.SchemaLoader, mx.rpc.xml.XMLLoader);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.xml.SchemaLoader', mx.rpc.xml.SchemaLoader);


/**
 * Asynchronously loads an XSD Schema for a given URL including any
 * XSD imports and includes.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @override
 */
mx.rpc.xml.SchemaLoader.prototype.load = function(url) {
  url = this.getQualifiedLocation(url);
  this.mx_rpc_xml_SchemaLoader_loadSchema(url);
};


/**
 * @export
 * @param {mx.rpc.xml.Schema} schema
 * @param {string} parentLocation
 * @param {mx.rpc.xml.SchemaManager=} schemaManager
 */
mx.rpc.xml.SchemaLoader.prototype.schemaImports = function(schema, parentLocation, schemaManager) {
  schemaManager = typeof schemaManager !== 'undefined' ? schemaManager : null;
  var /** @type {QName} */ importQName = schema.schemaConstants.importQName;
  var /** @type {XML} */ schemaXML = schema.xml;
  var /** @type {XMLList} */ imports = schemaXML.elements(importQName);
  var foreachiter0_target = imports;
  for (var foreachiter0 in foreachiter0_target.elementNames()) 
  {
  var importNode = foreachiter0_target[foreachiter0];
  {
    var /** @type {string} */ location = importNode.attribute("schemaLocation").toString();
    var /** @type {string} */ importURI = importNode.attribute("namespace").toString();
    var /** @type {Namespace} */ importNS = new Namespace(importURI);
    var /** @type {Namespace} */ nsSchema = new Namespace(schema.schemaConstants.xsdURI);
    if (location == "") {
      if (schemaManager != null) {
        var /** @type {Array} */ importedSchemas = schemaManager.getResourcesForURI(importURI);
        if (importedSchemas != null) {
          var foreachiter1_target = importedSchemas;
          for (var foreachiter1 in foreachiter1_target) 
          {
          var importedSchema = foreachiter1_target[foreachiter1];
          {
            schema.addImport(importNS, importedSchema);
          }}
          
          delete schemaXML.child(importQName).filter(function(/** @type {XML} */ node){return (node.attribute('namespace') == importURI)})[0];
          schema.xml = schemaXML;
        }
      }
    } else {
      delete schemaXML.child(importQName).filter(function(/** @type {XML} */ node){return (node.attribute('namespace') == importURI)})[0];
      schema.xml = schemaXML;
      location = this.getQualifiedLocation(location, parentLocation);
      var /** @type {mx.rpc.xml.Schema} */ existing = this.mx_rpc_xml_SchemaLoader_locationMap[location];
      if (existing == null) {
        this.mx_rpc_xml_SchemaLoader_loadSchema(location, schema, importNS, mx.rpc.xml.SchemaLoader.LOAD_IMPORT);
      } else {
        schema.addImport(importNS, existing);
      }
    }
  }}
  
};


/**
 * @export
 * @param {mx.rpc.xml.Schema} schema
 * @param {string} parentLocation
 */
mx.rpc.xml.SchemaLoader.prototype.schemaIncludes = function(schema, parentLocation) {
  var /** @type {XMLList} */ schemaINCList = schema.xml.elements(schema.schemaConstants.includeQName);
  var foreachiter2_target = schemaINCList;
  for (var foreachiter2 in foreachiter2_target.elementNames()) 
  {
  var schemaINCXML = foreachiter2_target[foreachiter2];
  {
    var /** @type {string} */ location = org.apache.royale.utils.Language.string(schemaINCXML.attribute('schemaLocation'));
    location = this.getQualifiedLocation(location, parentLocation);
    var /** @type {XMLList} */ existing = org.apache.royale.utils.Language.as(this.mx_rpc_xml_SchemaLoader_locationMap[location], XMLList);
    var /** @type {QName} */ schemaQName = org.apache.royale.utils.Language.as(schemaINCXML.name(), QName);
    var /** @type {XML} */ schemaXML = schema.xml;
    var /** @type {Namespace} */ nsSchema = new Namespace(schema.schemaConstants.xsdURI);
    var /** @type {QName} */ includeQName = schema.schemaConstants.includeQName;
    delete schemaXML.child(includeQName).filter(function(/** @type {XML} */ node){return (node.attribute('schemaLocation') == location)})[0];
    schema.xml = schemaXML;
    if (existing == null) {
      this.mx_rpc_xml_SchemaLoader_loadSchema(location, schema, schema.targetNamespace, mx.rpc.xml.SchemaLoader.LOAD_INCLUDE);
    } else {
      schema.addInclude(existing);
    }
  }}
  
};


/**
 * @export
 * @override
 */
mx.rpc.xml.SchemaLoader.prototype.resultHandler = function(event) {
  mx.rpc.xml.SchemaLoader.superClass_.resultHandler.apply(this, [ event] );
  var /** @type {XML} */ xml = XML.conversion(event.result);
  var /** @type {mx.rpc.AsyncToken} */ token = event.token;
  var /** @type {string} */ location = org.apache.royale.utils.Language.string(token == null ? null : token.location);
  if (token.parent != null) {
    var /** @type {mx.rpc.xml.Schema} */ parentSchema = org.apache.royale.utils.Language.as(token.parent, mx.rpc.xml.Schema);
    if (token.loadType == mx.rpc.xml.SchemaLoader.LOAD_INCLUDE) {
      var /** @type {Array} */ nsINC = xml.namespaceDeclarations();
      var foreachiter3_target = nsINC;
      for (var foreachiter3 in foreachiter3_target) 
      {
      var nsSchema = foreachiter3_target[foreachiter3];
      {
        parentSchema.xml.addNamespace(nsSchema);
      }}
      
      var /** @type {XMLList} */ children = xml.children();
      parentSchema.addInclude(children);
      this.mx_rpc_xml_SchemaLoader_locationMap[location] = children;
      this.schemaIncludes(parentSchema, location);
      this.schemaImports(parentSchema, location);
    } else {
      var /** @type {mx.rpc.xml.Schema} */ schema = new mx.rpc.xml.Schema(xml);
      this.mx_rpc_xml_SchemaLoader_locationMap[location] = schema;
      var /** @type {Namespace} */ ns = org.apache.royale.utils.Language.as(token.importNamespace, Namespace);
      parentSchema.addImport(ns, schema);
      this.schemaIncludes(schema, location);
      this.schemaImports(schema, location);
    }
  } else {
    this.mx_rpc_xml_SchemaLoader_topLevelSchema = new mx.rpc.xml.Schema(xml);
    this.mx_rpc_xml_SchemaLoader_locationMap[location] = this.mx_rpc_xml_SchemaLoader_topLevelSchema;
    this.schemaIncludes(this.mx_rpc_xml_SchemaLoader_topLevelSchema, location);
    this.schemaImports(this.mx_rpc_xml_SchemaLoader_topLevelSchema, location);
  }
  if (this.loadsOutstanding <= 0) {
    var /** @type {mx.rpc.events.SchemaLoadEvent} */ loadEvent = mx.rpc.events.SchemaLoadEvent.createEvent(this.mx_rpc_xml_SchemaLoader_topLevelSchema, location);
    this.dispatchEvent(loadEvent);
  }
};


/**
 * @private
 * @param {string} location
 * @param {mx.rpc.xml.Schema=} parent
 * @param {Namespace=} ns
 * @param {string=} loadType
 * @return {mx.rpc.AsyncToken}
 */
mx.rpc.xml.SchemaLoader.prototype.mx_rpc_xml_SchemaLoader_loadSchema = function(location, parent, ns, loadType) {
  parent = typeof parent !== 'undefined' ? parent : null;
  ns = typeof ns !== 'undefined' ? ns : null;
  loadType = typeof loadType !== 'undefined' ? loadType : null;
  var /** @type {mx.rpc.AsyncToken} */ token = this.internalLoad(location);
  if (token != null) {
    token.parent = parent;
    token.importNamespace = ns;
    token.loadType = loadType;
  }
  return token;
};


/**
 * @private
 * @type {mx.rpc.xml.Schema}
 */
mx.rpc.xml.SchemaLoader.prototype.mx_rpc_xml_SchemaLoader_topLevelSchema;


/**
 * @private
 * @type {Object}
 */
mx.rpc.xml.SchemaLoader.prototype.mx_rpc_xml_SchemaLoader_locationMap;


/**
 * @private
 * @type {mx.rpc.xml.SchemaManager}
 */
mx.rpc.xml.SchemaLoader.prototype.mx_rpc_xml_SchemaLoader__schemaManager;


/**
 * @private
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaLoader.LOAD_INCLUDE = "include";


/**
 * @private
 * @const
 * @type {string}
 */
mx.rpc.xml.SchemaLoader.LOAD_IMPORT = "import";


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.xml.SchemaLoader.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SchemaLoader', qName: 'mx.rpc.xml.SchemaLoader', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.xml.SchemaLoader.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'SchemaLoader': { type: '', declaredBy: 'mx.rpc.xml.SchemaLoader', parameters: function () { return [ 'mx.rpc.http.HTTPService', true ]; }},
        'load': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaLoader', parameters: function () { return [ 'String', false ]; }},
        'schemaImports': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaLoader', parameters: function () { return [ 'mx.rpc.xml.Schema', false ,'String', false ,'mx.rpc.xml.SchemaManager', true ]; }},
        'schemaIncludes': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaLoader', parameters: function () { return [ 'mx.rpc.xml.Schema', false ,'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.xml.SchemaLoader.prototype.ROYALE_COMPILE_FLAGS = 26;
