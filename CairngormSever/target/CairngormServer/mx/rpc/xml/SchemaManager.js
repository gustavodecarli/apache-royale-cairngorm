/**
 * Generated by Apache Royale Compiler from mx/rpc/xml/SchemaManager.as
 * mx.rpc.xml.SchemaManager
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.xml.SchemaManager');
/* Royale Dependency List: Namespace,QName,XML,mx.rpc.xml.Schema,mx.rpc.xml.SchemaConstants,mx.rpc.xml.SchemaDatatypes,mx.rpc.xml.SchemaMarshaller,org.apache.royale.utils.Language*/

goog.require('mx.rpc.xml.QualifiedResourceManager');



/**
 * @constructor
 * @extends {mx.rpc.xml.QualifiedResourceManager}
 */
mx.rpc.xml.SchemaManager = function() {
  mx.rpc.xml.SchemaManager.base(this, 'constructor');
  this.mx_rpc_xml_SchemaManager_initialScope = [];
  this.mx_rpc_xml_SchemaManager_schemaStack = [];
};
goog.inherits(mx.rpc.xml.SchemaManager, mx.rpc.xml.QualifiedResourceManager);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.xml.SchemaManager', mx.rpc.xml.SchemaManager);


/**
 * @export
 * @param {Object} map
 */
mx.rpc.xml.SchemaManager.prototype.addNamespaces = function(map) {
  for (var /** @type {string} */ prefix in map) {
    var /** @type {Namespace} */ ns = org.apache.royale.utils.Language.as(map[prefix], Namespace);
    this.namespaces[prefix] = ns;
  }
};


/**
 * Adds a Schema to the current scope. If a Schema already exists in
 * the scope then the scope is promoted to an Array of Schemas.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.rpc.xml.Schema} schema
 * @param {boolean=} toCurrentScope
 */
mx.rpc.xml.SchemaManager.prototype.addSchema = function(schema, toCurrentScope) {
  toCurrentScope = typeof toCurrentScope !== 'undefined' ? toCurrentScope : true;
  this.addResource(schema.targetNamespace, schema);
  var /** @type {Array} */ schemaSet;
  if (toCurrentScope == true)
    schemaSet = this.mx_rpc_xml_SchemaManager_schemaStack.pop();
  if (schemaSet == null)
    schemaSet = [];
  schemaSet.push(schema);
  if (!schemaSet.hasOwnProperty("current"))
    schemaSet["current"] = schemaSet[0];
  this.mx_rpc_xml_SchemaManager_schemaStack.push(schemaSet);
  if (this.mx_rpc_xml_SchemaManager_schemaStack.length == 1)
    this.mx_rpc_xml_SchemaManager_initialScope = org.apache.royale.utils.Language.as(this.mx_rpc_xml_SchemaManager_schemaStack[0], Array);
};


/**
 * @export
 * @return {Array}
 */
mx.rpc.xml.SchemaManager.prototype.currentScope = function() {
  var /** @type {Array} */ current = this.mx_rpc_xml_SchemaManager_schemaStack.pop();
  if (current != null)
    this.mx_rpc_xml_SchemaManager_schemaStack.push(current);
  else
    current = [];
  return current;
};


/**
 * Look for the definition of the given QName in all schemas in the current
 * scope. If the definition could not be found the function returns null.
 * 
 * @asparam name The name of the component defined in a schema.
 * @asparam componentTypes A list of structural element types that may have
 * the name provided, such as &lt;element&gt;, &lt;complexType&gt;, &lt;simpleType&gt;,
 * &lt;attribute&gt; or &lt;attributeGroup&gt;. The first one found is returned.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {QName} name
 * @param {...} componentTypes
 * @return {XML}
 */
mx.rpc.xml.SchemaManager.prototype.getNamedDefinition = function(name, componentTypes) {
  componentTypes = Array.prototype.slice.call(arguments, 1);
  var /** @type {Array} */ schemas = this.currentScope();
  var /** @type {XML} */ definition = this.mx_rpc_xml_SchemaManager_findDefinition(schemas, name, componentTypes);
  if (definition == null && schemas != this.mx_rpc_xml_SchemaManager_initialScope) {
    definition = this.mx_rpc_xml_SchemaManager_findDefinition(this.mx_rpc_xml_SchemaManager_initialScope, name, componentTypes);
  }
  return definition;
};


/**
 * @asprivate
 * Look for the definition of the QName in the schemas provided.
 * @private
 * @param {Array} schemas
 * @param {QName} name
 * @param {Array} componentTypes
 * @return {XML}
 */
mx.rpc.xml.SchemaManager.prototype.mx_rpc_xml_SchemaManager_findDefinition = function(schemas, name, componentTypes) {
  for (var /** @type {number} */ s = 0; s < schemas.length; s++) {
    var /** @type {mx.rpc.xml.Schema} */ schema = schemas[s];
    componentTypes.unshift(name);
    var /** @type {Object} */ result = schema.getNamedDefinition.apply(schema, componentTypes);
    if (result != null) {
      var /** @type {XML} */ definition = org.apache.royale.utils.Language.as(result.definition, XML);
      this.pushSchemaInScope(result.schema);
      return definition;
    }
  }
  return null;
};


/**
 * Locate a schema for the given namespace and push it to a
 * new scope level.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {*} nsParam
 * @return {boolean}
 */
mx.rpc.xml.SchemaManager.prototype.pushNamespaceInScope = function(nsParam) {
  var /** @type {Namespace} */ ns = new Namespace(nsParam);
  var /** @type {Array} */ schemas = this.currentScope();
  for (var /** @type {number} */ s = 0; s < schemas.length; s++) {
    var /** @type {mx.rpc.xml.Schema} */ schema = schemas[s];
    if (schema.targetNamespace.uri == ns.uri) {
      this.pushSchemaInScope(schema);
      return true;
    }
  }
  return false;
};


/**
 * Push the given Schema to a new scope level, and set it as the
 * current schema for that scope.
 * 
 * @asparam schema The Schema to push to a new scope
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.rpc.xml.Schema} schema
 */
mx.rpc.xml.SchemaManager.prototype.pushSchemaInScope = function(schema) {
  if (schema != null) {
    var /** @type {Array} */ newSchemaSet = [schema];
    newSchemaSet["current"] = newSchemaSet[0];
    this.mx_rpc_xml_SchemaManager_schemaStack.push(newSchemaSet);
  }
};


/**
 * @asprivate FIXME: Find a better method name and/or document
 * @export
 * @param {string} uri
 * @return {string}
 */
mx.rpc.xml.SchemaManager.prototype.getOrCreatePrefix = function(uri) {
  var /** @type {string} */ result;
  var /** @type {Namespace} */ ns;
  var foreachiter0_target = this.namespaces;
  for (var foreachiter0 in foreachiter0_target) 
  {
  ns = foreachiter0_target[foreachiter0];
  {
    if (ns.uri == uri) {
      return org.apache.royale.utils.Language.string(ns.prefix);
    }
  }}
  
  if (this.currentSchema != null) {
    var /** @type {Object} */ schemaNamespaces = this.currentSchema.namespaces;
    var foreachiter1_target = schemaNamespaces;
    for (var foreachiter1 in foreachiter1_target) 
    {
    ns = foreachiter1_target[foreachiter1];
    {
      if (ns.uri == uri) {
        return org.apache.royale.utils.Language.string(ns.prefix);
      }
    }}
    
  }
  var /** @type {string} */ prefixString = "ns";
  var /** @type {Namespace} */ nameSpace;
  var /** @type {string} */ newPrefix = prefixString + this.mx_rpc_xml_SchemaManager_namespaceCount;
  if (this.namespaces[newPrefix] != null) {
    this.mx_rpc_xml_SchemaManager_namespaceCount++;
    newPrefix = prefixString + this.mx_rpc_xml_SchemaManager_namespaceCount;
    nameSpace = new Namespace(newPrefix, uri);
    this.namespaces[newPrefix] = nameSpace;
    return newPrefix;
  } else {
    nameSpace = new Namespace(newPrefix, uri);
    this.namespaces[newPrefix] = nameSpace;
    return newPrefix;
  }
  return null;
};


/**
 * @export
 * @param {string} ncname
 * @param {string=} form
 * @return {QName}
 */
mx.rpc.xml.SchemaManager.prototype.getQNameForAttribute = function(ncname, form) {
  form = typeof form !== 'undefined' ? form : null;
  var /** @type {QName} */ qname;
  if (form == "qualified" || (form == null && this.currentSchema.attributeFormDefault == "qualified")) {
    qname = new QName(this.currentSchema.targetNamespace.uri, ncname);
  } else {
    qname = new QName("", ncname);
  }
  return qname;
};


/**
 * @export
 * @param {string} ncname
 * @param {string=} form
 * @return {QName}
 */
mx.rpc.xml.SchemaManager.prototype.getQNameForElement = function(ncname, form) {
  form = typeof form !== 'undefined' ? form : null;
  var /** @type {QName} */ qname;
  if (form == "qualified" || ((form == null || form == "") && this.currentSchema.elementFormDefault == "qualified")) {
    qname = new QName(this.currentSchema.targetNamespace.uri, ncname);
  } else {
    qname = new QName("", ncname);
  }
  return qname;
};


/**
 * Resolves a prefixed name back into a QName based on the prefix to
 * namespace mappings.
 * 
 * @asparam prefixedName The name to be resolved. Can be prefixed or unqualified.
 * @asparam parent The XML node where prefixedName appears. Allows local xmlns
 * declarations to be examined
 * @asparam qualifyToTargetNamespace A switch controlling the behavior for
 * unqualified names. If false, unqualified names are assumed to be prefixed
 * by "" and a xmlns="..." declaration is looked up. If no xmlns=".."
 * declaration is in scope, and the parent node is in the default namespace,
 * the prefixedName is resolved to the default namespace. Otherwise, it is
 * resolved to the targetNamespace of the current schema. If qualifyToTargetNamespace
 * is true, unqualified names are assumed to be in the target namespace of
 * the current schema, regardless of declarations for unprefixed namespaces.
 * qualifyToTargetNamespace should be true when resolving names coming from
 * the following schema attributes: name, ref.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} prefixedName
 * @param {XML=} parent
 * @param {boolean=} qualifyToTargetNamespace
 * @return {QName}
 */
mx.rpc.xml.SchemaManager.prototype.getQNameForPrefixedName = function(prefixedName, parent, qualifyToTargetNamespace) {
  parent = typeof parent !== 'undefined' ? parent : null;
  qualifyToTargetNamespace = typeof qualifyToTargetNamespace !== 'undefined' ? qualifyToTargetNamespace : false;
  var /** @type {QName} */ qname;
  var /** @type {string} */ prefix;
  var /** @type {string} */ localName;
  var /** @type {number} */ prefixIndex = (prefixedName.indexOf(":")) >> 0;
  if (prefixIndex > 0) {
    prefix = prefixedName.substr(0, prefixIndex);
    localName = prefixedName.substr(prefixIndex + 1);
  } else {
    localName = prefixedName;
  }
  var /** @type {Namespace} */ ns;
  if (prefix == null && qualifyToTargetNamespace == true) {
    ns = this.currentSchema.targetNamespace;
  }
  if (prefix == null) {
    prefix = "";
  }
  if (ns == null) {
    if (parent != null) {
      var /** @type {Array} */ localNamespaces = parent.inScopeNamespaces();
      var foreachiter2_target = localNamespaces;
      for (var foreachiter2 in foreachiter2_target) 
      {
      var localNS = foreachiter2_target[foreachiter2];
      {
        if (localNS.prefix == prefix) {
          ns = localNS;
          break;
        }
      }}
      
    }
  }
  if (ns == null) {
    ns = this.namespaces[prefix];
  }
  if (ns == null) {
    ns = this.currentSchema.namespaces[prefix];
  }
  if (ns == null) {
    var /** @type {Namespace} */ parentNS = (parent != null) ? parent.namespace() : null;
    if (parentNS != null && parentNS.prefix == "")
      ns = parentNS;
    else
      ns = this.currentSchema.targetNamespace;
  }
  if (ns != null)
    qname = new QName(ns.uri, localName);
  else
    qname = new QName("", localName);
  return qname;
};


/**
 * Converts ActionScript to XML based on default rules
 * established for each of the built-in XML Schema types.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {*} value
 * @param {QName=} type
 * @param {XML=} restriction
 * @return {string}
 */
mx.rpc.xml.SchemaManager.prototype.marshall = function(value, type, restriction) {
  type = typeof type !== 'undefined' ? type : null;
  restriction = typeof restriction !== 'undefined' ? restriction : null;
  return org.apache.royale.utils.Language.string(this.schemaMarshaller.marshall(value, type, restriction));
};


/**
 * Informs the SchemaManager that the current definition is no
 * longer being processed so we release the associated Schema from the
 * current scope of qualified definitions.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {*}
 */
mx.rpc.xml.SchemaManager.prototype.releaseScope = function() {
  return this.mx_rpc_xml_SchemaManager_schemaStack.pop();
};


/**
 * Reverts to initialScope.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
mx.rpc.xml.SchemaManager.prototype.reset = function() {
  this.mx_rpc_xml_SchemaManager_namespaceCount = 0;
  this.mx_rpc_xml_SchemaManager_schemaStack = [];
  this.mx_rpc_xml_SchemaManager_schemaStack.push(this.mx_rpc_xml_SchemaManager_initialScope);
};


/**
 * Converts XML to ActionScript based on default rules
 * established for each of the built-in XML Schema types.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {*} value
 * @param {QName=} type
 * @param {XML=} restriction
 * @return {*}
 */
mx.rpc.xml.SchemaManager.prototype.unmarshall = function(value, type, restriction) {
  type = typeof type !== 'undefined' ? type : null;
  restriction = typeof restriction !== 'undefined' ? restriction : null;
  return this.schemaMarshaller.unmarshall(value, type, restriction);
};


/**
 * @private
 * @type {number}
 */
mx.rpc.xml.SchemaManager.prototype.mx_rpc_xml_SchemaManager_namespaceCount = 0;


/**
 * @private
 * @type {Array}
 */
mx.rpc.xml.SchemaManager.prototype.mx_rpc_xml_SchemaManager_schemaStack;


/**
 * @private
 * @type {Array}
 */
mx.rpc.xml.SchemaManager.prototype.mx_rpc_xml_SchemaManager_initialScope;


/**
 * @private
 * @type {Object}
 */
mx.rpc.xml.SchemaManager.prototype.mx_rpc_xml_SchemaManager__namespaces;


/**
 * @private
 * @type {mx.rpc.xml.SchemaMarshaller}
 */
mx.rpc.xml.SchemaManager.prototype.mx_rpc_xml_SchemaManager__schemaMarshaller;


/**
 * @private
 * @type {mx.rpc.xml.SchemaConstants}
 */
mx.rpc.xml.SchemaManager.prototype.mx_rpc_xml_SchemaManager__schemaConstants;


/**
 * @private
 * @type {mx.rpc.xml.SchemaDatatypes}
 */
mx.rpc.xml.SchemaManager.prototype.mx_rpc_xml_SchemaManager__schemaDatatypes;


mx.rpc.xml.SchemaManager.prototype.get__namespaces = function() {
  if (this.mx_rpc_xml_SchemaManager__namespaces == null)
    this.mx_rpc_xml_SchemaManager__namespaces = {};
  return this.mx_rpc_xml_SchemaManager__namespaces;
};


mx.rpc.xml.SchemaManager.prototype.set__namespaces = function(value) {
  this.mx_rpc_xml_SchemaManager__namespaces = value;
};


mx.rpc.xml.SchemaManager.prototype.get__schemaConstants = function() {
  if (this.mx_rpc_xml_SchemaManager__schemaConstants == null)
    this.mx_rpc_xml_SchemaManager__schemaConstants = mx.rpc.xml.SchemaConstants.getConstants();
  return this.mx_rpc_xml_SchemaManager__schemaConstants;
};


mx.rpc.xml.SchemaManager.prototype.set__schemaConstants = function(value) {
  this.mx_rpc_xml_SchemaManager__schemaConstants = value;
};


mx.rpc.xml.SchemaManager.prototype.get__schemaMarshaller = function() {
  if (this.mx_rpc_xml_SchemaManager__schemaMarshaller == null) {
    this.mx_rpc_xml_SchemaManager__schemaMarshaller = new mx.rpc.xml.SchemaMarshaller(this.schemaConstants, this.schemaDatatypes);
  }
  return this.mx_rpc_xml_SchemaManager__schemaMarshaller;
};


mx.rpc.xml.SchemaManager.prototype.get__schemaDatatypes = function() {
  if (this.mx_rpc_xml_SchemaManager__schemaDatatypes == null) {
    this.mx_rpc_xml_SchemaManager__schemaDatatypes = mx.rpc.xml.SchemaDatatypes.getConstants(this.schemaConstants.xsdURI);
  }
  return this.mx_rpc_xml_SchemaManager__schemaDatatypes;
};


mx.rpc.xml.SchemaManager.prototype.get__currentSchema = function() {
  var /** @type {mx.rpc.xml.Schema} */ schema;
  var /** @type {Array} */ schemaSet = this.currentScope();
  if (schemaSet.hasOwnProperty("current"))
    schema = schemaSet["current"];
  return schema;
};


Object.defineProperties(mx.rpc.xml.SchemaManager.prototype, /** @lends {mx.rpc.xml.SchemaManager.prototype} */ {
/**
  * @export
  * @type {Object} */
namespaces: {
get: mx.rpc.xml.SchemaManager.prototype.get__namespaces,
set: mx.rpc.xml.SchemaManager.prototype.set__namespaces},
/**
  * @export
  * @type {mx.rpc.xml.SchemaConstants} */
schemaConstants: {
get: mx.rpc.xml.SchemaManager.prototype.get__schemaConstants,
set: mx.rpc.xml.SchemaManager.prototype.set__schemaConstants},
/**
  * @export
  * @type {mx.rpc.xml.SchemaMarshaller} */
schemaMarshaller: {
get: mx.rpc.xml.SchemaManager.prototype.get__schemaMarshaller},
/**
  * @export
  * @type {mx.rpc.xml.SchemaDatatypes} */
schemaDatatypes: {
get: mx.rpc.xml.SchemaManager.prototype.get__schemaDatatypes},
/**
  * @export
  * @type {mx.rpc.xml.Schema} */
currentSchema: {
get: mx.rpc.xml.SchemaManager.prototype.get__currentSchema}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.xml.SchemaManager.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SchemaManager', qName: 'mx.rpc.xml.SchemaManager', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.xml.SchemaManager.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'namespaces': { type: 'Object', access: 'readwrite', declaredBy: 'mx.rpc.xml.SchemaManager'},
        'schemaConstants': { type: 'mx.rpc.xml.SchemaConstants', access: 'readwrite', declaredBy: 'mx.rpc.xml.SchemaManager'},
        'schemaMarshaller': { type: 'mx.rpc.xml.SchemaMarshaller', access: 'readonly', declaredBy: 'mx.rpc.xml.SchemaManager'},
        'schemaDatatypes': { type: 'mx.rpc.xml.SchemaDatatypes', access: 'readonly', declaredBy: 'mx.rpc.xml.SchemaManager'},
        'currentSchema': { type: 'mx.rpc.xml.Schema', access: 'readonly', declaredBy: 'mx.rpc.xml.SchemaManager'}
      };
    },
    methods: function () {
      return {
        'SchemaManager': { type: '', declaredBy: 'mx.rpc.xml.SchemaManager'},
        'addNamespaces': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ 'Object', false ]; }},
        'addSchema': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ 'mx.rpc.xml.Schema', false ,'Boolean', true ]; }},
        'currentScope': { type: 'Array', declaredBy: 'mx.rpc.xml.SchemaManager'},
        'getNamedDefinition': { type: 'XML', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ 'QName', false ,'Array', false ]; }},
        'pushNamespaceInScope': { type: 'Boolean', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ '*', false ]; }},
        'pushSchemaInScope': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ 'mx.rpc.xml.Schema', false ]; }},
        'getOrCreatePrefix': { type: 'String', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ 'String', false ]; }},
        'getQNameForAttribute': { type: 'QName', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ 'String', false ,'String', true ]; }},
        'getQNameForElement': { type: 'QName', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ 'String', false ,'String', true ]; }},
        'getQNameForPrefixedName': { type: 'QName', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ 'String', false ,'XML', true ,'Boolean', true ]; }},
        'marshall': { type: 'String', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ '*', false ,'QName', true ,'XML', true ]; }},
        'releaseScope': { type: '*', declaredBy: 'mx.rpc.xml.SchemaManager'},
        'reset': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaManager'},
        'unmarshall': { type: '*', declaredBy: 'mx.rpc.xml.SchemaManager', parameters: function () { return [ '*', false ,'QName', true ,'XML', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.xml.SchemaManager.prototype.ROYALE_COMPILE_FLAGS = 26;
