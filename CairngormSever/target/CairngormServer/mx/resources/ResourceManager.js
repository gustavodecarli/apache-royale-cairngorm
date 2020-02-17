/**
 * Generated by Apache Royale Compiler from mx/resources/ResourceManager.as
 * mx.resources.ResourceManager
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.resources.ResourceManager');
/* Royale Dependency List: mx.resources.IResourceManager,mx.resources.ResourceManagerImpl,XML*/




/**
 * @constructor
 */
mx.resources.ResourceManager = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.resources.ResourceManager', mx.resources.ResourceManager);


/**
 * @private
 * @type {mx.resources.ResourceManagerImpl}
 */
mx.resources.ResourceManager.implClassDependency;


/**
 * @private
 * @type {mx.resources.IResourceManager}
 */
mx.resources.ResourceManager.instance;


/**
 *  Gets the single instance of the ResourceManager class.
 *  This object manages all localized resources for a Flex application.
 *  
 *  @asreturn An object implementing IResourceManager.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {mx.resources.IResourceManager}
 */
mx.resources.ResourceManager.getInstance = function() {
  if (!mx.resources.ResourceManager.instance) {
    if (!mx.resources.ResourceManager.instance)
      mx.resources.ResourceManager.instance = new mx.resources.ResourceManagerImpl();
  }
  return mx.resources.ResourceManager.instance;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.resources.ResourceManager.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ResourceManager', qName: 'mx.resources.ResourceManager', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.resources.ResourceManager.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getInstance': { type: 'mx.resources.IResourceManager', declaredBy: 'mx.resources.ResourceManager'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.resources.ResourceManager.prototype.ROYALE_COMPILE_FLAGS = 26;
