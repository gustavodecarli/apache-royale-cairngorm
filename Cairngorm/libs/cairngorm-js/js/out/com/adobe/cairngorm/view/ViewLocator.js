/**
 * Generated by Apache Royale Compiler from com/adobe/cairngorm/view/ViewLocator.as
 * com.adobe.cairngorm.view.ViewLocator
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('com.adobe.cairngorm.view.ViewLocator');

goog.require('com.adobe.cairngorm.CairngormError');
goog.require('com.adobe.cairngorm.CairngormMessageCodes');
goog.require('com.adobe.cairngorm.view.ViewHelper');
goog.require('org.apache.royale.utils.Language');



/**
 * The ViewLocator constructor should only be created
 * through the static singleton getInstance() method.  ViewLocator
 * maintains a hash map of ViewHelpers, keyed on viewName with a
 * particular view as the value stored in the hash map.
 * @constructor
 */
com.adobe.cairngorm.view.ViewLocator = function() {
  if (com.adobe.cairngorm.view.ViewLocator.viewLocator != null) {
    throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.SINGLETON_EXCEPTION, "ViewLocator");
  }
  this.com_adobe_cairngorm_view_ViewLocator_viewHelpers = {};
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('com.adobe.cairngorm.view.ViewLocator', com.adobe.cairngorm.view.ViewLocator);


/**
 * @private
 * @type {com.adobe.cairngorm.view.ViewLocator}
 */
com.adobe.cairngorm.view.ViewLocator.viewLocator = null;


/**
 * @private
 * @type {Object}
 */
com.adobe.cairngorm.view.ViewLocator.prototype.com_adobe_cairngorm_view_ViewLocator_viewHelpers = null;


/**
 * Singleton access to the ViewLocator is assured through the static getInstance()
 * method, which is used to retrieve the only ViewLocator instance in a Cairngorm
 * application.
 *
 * <p>Wherever there is a need to retreive the ViewLocator instance, it is achieved
 * using the following code:</p>
 *
 * <pre>
 * var viewLocator:ViewLocator = ViewLocator.getInstance();
 * </pre>
 * @export
 * @return {com.adobe.cairngorm.view.ViewLocator}
 */
com.adobe.cairngorm.view.ViewLocator.getInstance = function() {
  if (com.adobe.cairngorm.view.ViewLocator.viewLocator == null)
    com.adobe.cairngorm.view.ViewLocator.viewLocator = new com.adobe.cairngorm.view.ViewLocator();
  return com.adobe.cairngorm.view.ViewLocator.viewLocator;
};


/**
 * Registers a viewHelper under a canonical viewName.
 *
 * <p>In order that the application developer need not know
 * the implementation of the view, a ViewHelper capable of manipulating
 * a given view is registered under a simple canonical name.</p>
 * <p>
 * For example, a LoginViewHelper may allow the manipulation of a
 * Login window, that may start life as a PopUpWindow, but later be
 * changed to a screen in a ViewStack.  By registering the LoginViewHelper
 * with the viewName "login", then any code that fetches the ViewHelper
 * by it's name "login", and then calls methods on the ViewHelper, is
 * completely insulated from any changes in the implementation of the
 * view, and the implementation of the ViewHelper.
 * </p>
 * <p>
 * If a view is already registered with the canonical name, and Error
 * is thrown.
 * </p>
 * @asparam viewName A simple canonical name for the view that the ViewHelper
 * will manipulate, eg "login"
 * @asparam viewHelper An instance of a ViewHelper
 * @export
 * @param {string} viewName
 * @param {com.adobe.cairngorm.view.ViewHelper} viewHelper
 */
com.adobe.cairngorm.view.ViewLocator.prototype.register = function(viewName, viewHelper) {
  if (this.registrationExistsFor(viewName)) {
    throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.VIEW_ALREADY_REGISTERED, viewName);
  }
  this.com_adobe_cairngorm_view_ViewLocator_viewHelpers[viewName] = viewHelper;
};


/**
 * Unregisters a viewHelper using its canonical name.
 *
 * @asparam viewName The canonical name for the view to be removed
 * @export
 * @param {string} viewName
 */
com.adobe.cairngorm.view.ViewLocator.prototype.unregister = function(viewName) {
  if (!this.registrationExistsFor(viewName)) {
    throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.VIEW_NOT_FOUND, viewName);
  }
  delete this.com_adobe_cairngorm_view_ViewLocator_viewHelpers[viewName];
};


/**
 * Retrieves the ViewHelper instance that has previously been registered
 * with viewName.
 *
 * @asparam viewName The name of the view for which we wish to retrieve a
 * ViewHelper, eg "login"
 * @asreturns The ViewHelper instance that is required to manipulate the
 * view registered with viewName
 * @export
 * @param {string} viewName
 * @return {com.adobe.cairngorm.view.ViewHelper}
 */
com.adobe.cairngorm.view.ViewLocator.prototype.getViewHelper = function(viewName) {
  if (!this.registrationExistsFor(viewName)) {
    throw new com.adobe.cairngorm.CairngormError(com.adobe.cairngorm.CairngormMessageCodes.VIEW_NOT_FOUND, viewName);
  }
  return /* implicit cast */ org.apache.royale.utils.Language.as(this.com_adobe_cairngorm_view_ViewLocator_viewHelpers[viewName], com.adobe.cairngorm.view.ViewHelper, true);
};


/**
 * Returns whether a view has been registered with a canonical name.
 *
 * <p>If two views are registered with the same canonical name,
 * the second entry will overwrite the first. This method can be used to check
 * whether a view has already been registered with a canonical name.</p>
 *
 * @asparam The canonical name for the view that the ViewHelper will check, eg
 * "login"
 * @asreturn A Boolean that indicates if a view is already registered with that
 * view name
 * @export
 * @param {string} viewName
 * @return {boolean}
 */
com.adobe.cairngorm.view.ViewLocator.prototype.registrationExistsFor = function(viewName) {
  return this.com_adobe_cairngorm_view_ViewLocator_viewHelpers[viewName] != undefined;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.adobe.cairngorm.view.ViewLocator.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ViewLocator', qName: 'com.adobe.cairngorm.view.ViewLocator', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.adobe.cairngorm.view.ViewLocator.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getInstance': { type: 'com.adobe.cairngorm.view.ViewLocator', declaredBy: 'com.adobe.cairngorm.view.ViewLocator'},
        'ViewLocator': { type: '', declaredBy: 'com.adobe.cairngorm.view.ViewLocator'},
        'register': { type: 'void', declaredBy: 'com.adobe.cairngorm.view.ViewLocator', parameters: function () { return [ 'String', false ,'com.adobe.cairngorm.view.ViewHelper', false ]; }},
        'unregister': { type: 'void', declaredBy: 'com.adobe.cairngorm.view.ViewLocator', parameters: function () { return [ 'String', false ]; }},
        'getViewHelper': { type: 'com.adobe.cairngorm.view.ViewHelper', declaredBy: 'com.adobe.cairngorm.view.ViewLocator', parameters: function () { return [ 'String', false ]; }},
        'registrationExistsFor': { type: 'Boolean', declaredBy: 'com.adobe.cairngorm.view.ViewLocator', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.adobe.cairngorm.view.ViewLocator.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.adobe.cairngorm.view.ViewLocator.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.adobe.cairngorm.view.ViewLocator);

//# sourceMappingURL=./ViewLocator.js.map