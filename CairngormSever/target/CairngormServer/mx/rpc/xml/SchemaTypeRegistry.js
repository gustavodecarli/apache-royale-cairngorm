/**
 * Generated by Apache Royale Compiler from mx/rpc/xml/SchemaTypeRegistry.as
 * mx.rpc.xml.SchemaTypeRegistry
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.xml.SchemaTypeRegistry');
/* Royale Dependency List: QName,org.apache.royale.reflection.getDefinitionByName,org.apache.royale.reflection.getQualifiedClassName,org.apache.royale.utils.Language,XML*/




/**
 * @asprivate
 * @constructor
 */
mx.rpc.xml.SchemaTypeRegistry = function() {
  
  this.mx_rpc_xml_SchemaTypeRegistry_classMap = {};
  this.mx_rpc_xml_SchemaTypeRegistry_collectionMap = {};
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.xml.SchemaTypeRegistry', mx.rpc.xml.SchemaTypeRegistry);


/**
 * Returns the sole instance of this singleton class, creating it if it
 * does not already exist.
 *
 * @asreturn Returns the sole instance of this singleton class, creating it
 * if it does not already exist.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {mx.rpc.xml.SchemaTypeRegistry}
 */
mx.rpc.xml.SchemaTypeRegistry.getInstance = function() {
  if (mx.rpc.xml.SchemaTypeRegistry._instance == null)
    mx.rpc.xml.SchemaTypeRegistry._instance = new mx.rpc.xml.SchemaTypeRegistry();
  return mx.rpc.xml.SchemaTypeRegistry._instance;
};


/**
 * Looks for a registered Class for the given type.
 * @asparam type The QName or String representing the type name.
 * @asreturn Returns the Class for the given type, or null of the type
 * has not been registered.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} type
 * @return {Object}
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.getClass = function(type) {
  var /** @type {Object} */ c;
  if (type != null) {
    var /** @type {string} */ key = this.mx_rpc_xml_SchemaTypeRegistry_getKey(type);
    var /** @type {string} */ definitionName = org.apache.royale.utils.Language.as(this.mx_rpc_xml_SchemaTypeRegistry_classMap[key], String);
    if (definitionName != null)
      c = org.apache.royale.utils.Language.as(org.apache.royale.reflection.getDefinitionByName(definitionName), org.apache.royale.utils.Language.synthType('Class'));
  }
  return c;
};


/**
 * Returns the Class for the collection type represented by the given
 * Qname or String.
 *
 * @asparam type The QName or String representing the collection type name.
 *
 * @asreturn Returns the Class for the collection type represented by 
 * the given Qname or String.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} type
 * @return {Object}
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.getCollectionClass = function(type) {
  var /** @type {Object} */ c;
  if (type != null) {
    var /** @type {string} */ key = this.mx_rpc_xml_SchemaTypeRegistry_getKey(type);
    var /** @type {string} */ definitionName = org.apache.royale.utils.Language.as(this.mx_rpc_xml_SchemaTypeRegistry_collectionMap[key], String);
    if (definitionName != null)
      c = org.apache.royale.utils.Language.as(org.apache.royale.reflection.getDefinitionByName(definitionName), org.apache.royale.utils.Language.synthType('Class'));
  }
  return c;
};


/**
 * Maps a type QName to a Class definition. The definition can be a String
 * representation of the fully qualified class name or an instance of the
 * Class itself.
 * @asparam type The QName or String representation of the type name.
 * @asparam definition The Class itself or class name as a String.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} type
 * @param {Object} definition
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.registerClass = function(type, definition) {
  this.mx_rpc_xml_SchemaTypeRegistry_register(type, definition, this.mx_rpc_xml_SchemaTypeRegistry_classMap);
};


/**
 * Maps a type name to a collection Class. A collection is either the 
 * top level Array type, or an implementation of <code>mx.collections.IList</code>. 
 * The definition can be a String representation of the fully qualified
 * class name or an instance of the Class itself.
 *
 * @asparam type The QName or String representation of the type name.
 *
 * @asparam definition The Class itself or class name as a String.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} type
 * @param {Object} definition
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.registerCollectionClass = function(type, definition) {
  this.mx_rpc_xml_SchemaTypeRegistry_register(type, definition, this.mx_rpc_xml_SchemaTypeRegistry_collectionMap);
};


/**
 * Removes a Class from the registry for the given type.
 * @asparam type The QName or String representation of the type name.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} type
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.unregisterClass = function(type) {
  if (type != null) {
    var /** @type {string} */ key = this.mx_rpc_xml_SchemaTypeRegistry_getKey(type);
    delete this.mx_rpc_xml_SchemaTypeRegistry_classMap[key];
  }
};


/**
 * Removes a collection Class from the registry for the given type.
 * @asparam type The QName or String representation of the collection type
 * name.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} type
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.unregisterCollectionClass = function(type) {
  if (type != null) {
    var /** @type {string} */ key = this.mx_rpc_xml_SchemaTypeRegistry_getKey(type);
    delete this.mx_rpc_xml_SchemaTypeRegistry_collectionMap[key];
  }
};


/**
 * @asprivate
 * Converts the given type name into a consistent String representation
 * that serves as the key to the type map.
 * @asparam type The QName or String representation of the type name.
 * @private
 * @param {Object} type
 * @return {string}
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.mx_rpc_xml_SchemaTypeRegistry_getKey = function(type) {
  var /** @type {string} */ key;
  if (org.apache.royale.utils.Language.is(type, QName)) {
    var /** @type {QName} */ typeQName = org.apache.royale.utils.Language.as(type, QName);
    if (typeQName.uri == null || typeQName.uri == "")
      key = typeQName.localName;
    else
      key = typeQName.toString();
  } else {
    key = type.toString();
  }
  return key;
};


/**
 * @asprivate
 * @private
 * @param {Object} type
 * @param {Object} definition
 * @param {Object} map
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.mx_rpc_xml_SchemaTypeRegistry_register = function(type, definition, map) {
  var /** @type {string} */ key = this.mx_rpc_xml_SchemaTypeRegistry_getKey(type);
  var /** @type {string} */ definitionName;
  if (org.apache.royale.utils.Language.is(definition, String))
    definitionName = org.apache.royale.utils.Language.as(definition, String);
  else
    definitionName = org.apache.royale.reflection.getQualifiedClassName(definition);
  map[key] = definitionName;
};


/**
 * @private
 * @type {Object}
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.mx_rpc_xml_SchemaTypeRegistry_classMap;


/**
 * @private
 * @type {Object}
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.mx_rpc_xml_SchemaTypeRegistry_collectionMap;


/**
 * @private
 * @type {mx.rpc.xml.SchemaTypeRegistry}
 */
mx.rpc.xml.SchemaTypeRegistry._instance;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SchemaTypeRegistry', qName: 'mx.rpc.xml.SchemaTypeRegistry', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getInstance': { type: 'mx.rpc.xml.SchemaTypeRegistry', declaredBy: 'mx.rpc.xml.SchemaTypeRegistry'},
        'SchemaTypeRegistry': { type: '', declaredBy: 'mx.rpc.xml.SchemaTypeRegistry'},
        'getClass': { type: 'Class', declaredBy: 'mx.rpc.xml.SchemaTypeRegistry', parameters: function () { return [ 'Object', false ]; }},
        'getCollectionClass': { type: 'Class', declaredBy: 'mx.rpc.xml.SchemaTypeRegistry', parameters: function () { return [ 'Object', false ]; }},
        'registerClass': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaTypeRegistry', parameters: function () { return [ 'Object', false ,'Object', false ]; }},
        'registerCollectionClass': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaTypeRegistry', parameters: function () { return [ 'Object', false ,'Object', false ]; }},
        'unregisterClass': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaTypeRegistry', parameters: function () { return [ 'Object', false ]; }},
        'unregisterCollectionClass': { type: 'void', declaredBy: 'mx.rpc.xml.SchemaTypeRegistry', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.xml.SchemaTypeRegistry.prototype.ROYALE_COMPILE_FLAGS = 26;
