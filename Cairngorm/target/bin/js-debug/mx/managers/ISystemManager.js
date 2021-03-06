/**
 * Generated by Apache Royale Compiler from mx/managers/ISystemManager.as
 * mx.managers.ISystemManager
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.managers.ISystemManager');
/* Royale Dependency List: XML*/

goog.require('mx.core.IChildList');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 * @extends {mx.core.IChildList}
 */
mx.managers.ISystemManager = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.managers.ISystemManager', mx.managers.ISystemManager);
/**  * @type {Object}
 */mx.managers.ISystemManager.prototype.mxmlDocument;
/**  * @type {mx.core.IChildList}
 */mx.managers.ISystemManager.prototype.rawChildren;
/**  * @type {number}
 */mx.managers.ISystemManager.prototype.numModalWindows;
/**
 *  Gets the system manager that is the root of all
 *  top level system managers in this SecurityDomain.
 *
 *  @asreturn the highest-level systemManager in the sandbox
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.4
 * @export
 * @return {Object}
 */
mx.managers.ISystemManager.prototype.getSandboxRoot = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.managers.ISystemManager.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ISystemManager', qName: 'mx.managers.ISystemManager', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher, mx.core.IChildList] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.managers.ISystemManager.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'mxmlDocument': { type: 'Object', access: 'readwrite', declaredBy: 'mx.managers.ISystemManager'},
        'rawChildren': { type: 'mx.core.IChildList', access: 'readonly', declaredBy: 'mx.managers.ISystemManager'},
        'numModalWindows': { type: 'int', access: 'readwrite', declaredBy: 'mx.managers.ISystemManager'}
      };
    },
    methods: function () {
      return {
        'getSandboxRoot': { type: 'Object', declaredBy: 'mx.managers.ISystemManager'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.managers.ISystemManager.prototype.ROYALE_COMPILE_FLAGS = 26;
