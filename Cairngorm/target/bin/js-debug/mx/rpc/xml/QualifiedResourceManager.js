/**
 * Generated by Apache Royale Compiler from mx/rpc/xml/QualifiedResourceManager.as
 * mx.rpc.xml.QualifiedResourceManager
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.xml.QualifiedResourceManager');
/* Royale Dependency List: Namespace,org.apache.royale.utils.Language,XML*/




/**
 * Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 */
mx.rpc.xml.QualifiedResourceManager = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.xml.QualifiedResourceManager', mx.rpc.xml.QualifiedResourceManager);


/**
 * Adds a resource to a potential Array of resources for a
 * given namespace.
 *
 * @asparam ns The namespace for the Array of resources.
 *
 * @asparam resource The resource to add.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Namespace} ns
 * @param {Object} resource
 */
mx.rpc.xml.QualifiedResourceManager.prototype.addResource = function(ns, resource) {
  if (this.resources == null)
    this.resources = [];
  this.resources.push(resource);
  if (this.resourcesMap == null)
    this.resourcesMap = {};
  var /** @type {string} */ uri = ns.uri;
  if (uri == null)
    uri = "";
  var /** @type {Array} */ existingResources = org.apache.royale.utils.Language.as(this.resourcesMap[uri], Array);
  if (existingResources == null)
    existingResources = [];
  existingResources.push(resource);
  this.resourcesMap[uri] = existingResources;
};


/**
 * Returns an Array of resources for a given target namespace.
 *
 * @asparam The namespace for the Array of resources.
 *
 * @asreturn An Array of resources.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Namespace} ns
 * @return {Array}
 */
mx.rpc.xml.QualifiedResourceManager.prototype.getResourcesForNamespace = function(ns) {
  return this.getResourcesForURI(ns.uri);
};


/**
 * Returns an Array of resources for a given target URI.
 *
 * @asparam uri The URI for the Array of resources.
 *
 * @asreturn An Array of resources.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} uri
 * @return {Array}
 */
mx.rpc.xml.QualifiedResourceManager.prototype.getResourcesForURI = function(uri) {
  if (this.resourcesMap == null)
    return null;
  if (uri == null)
    uri = "";
  var /** @type {Array} */ resourcesArray = this.resourcesMap[uri];
  return resourcesArray;
};


/**
 * Gets an Array of all resources.
 *
 * @asreturn An Array of resources.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {Array}
 */
mx.rpc.xml.QualifiedResourceManager.prototype.getResources = function() {
  return this.resources;
};


/**
 * @export
 * @type {Array}
 */
mx.rpc.xml.QualifiedResourceManager.prototype.resources;


/**
 * @export
 * @type {Object}
 */
mx.rpc.xml.QualifiedResourceManager.prototype.resourcesMap;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.xml.QualifiedResourceManager.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'QualifiedResourceManager', qName: 'mx.rpc.xml.QualifiedResourceManager', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.xml.QualifiedResourceManager.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'QualifiedResourceManager': { type: '', declaredBy: 'mx.rpc.xml.QualifiedResourceManager'},
        'addResource': { type: 'void', declaredBy: 'mx.rpc.xml.QualifiedResourceManager', parameters: function () { return [ 'Namespace', false ,'Object', false ]; }},
        'getResourcesForNamespace': { type: 'Array', declaredBy: 'mx.rpc.xml.QualifiedResourceManager', parameters: function () { return [ 'Namespace', false ]; }},
        'getResourcesForURI': { type: 'Array', declaredBy: 'mx.rpc.xml.QualifiedResourceManager', parameters: function () { return [ 'String', false ]; }},
        'getResources': { type: 'Array', declaredBy: 'mx.rpc.xml.QualifiedResourceManager'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.xml.QualifiedResourceManager.prototype.ROYALE_COMPILE_FLAGS = 26;
