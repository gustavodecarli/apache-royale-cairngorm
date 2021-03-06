/**
 * Generated by Apache Royale Compiler from mx/logging/Log.as
 * mx.logging.Log
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.logging.Log');
/* Royale Dependency List: mx.logging.ILogger,mx.logging.ILoggingTarget,mx.logging.LogEventLevel,mx.logging.LogLogger,mx.logging.errors.InvalidCategoryError,mx.messaging.errors.ArgumentError,mx.resources.IResourceManager,mx.resources.ResourceManager,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
mx.logging.Log = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.logging.Log', mx.logging.Log);


mx.logging.Log.get__NONE = function() {
  var value = 2147483648;
  Object.defineProperty(mx.logging.Log, 'NONE', { value: value, writable: true });
  return value;
};
mx.logging.Log.set__NONE = function(value) {
  Object.defineProperty(mx.logging.Log, 'NONE', { value: value, writable: true });
};
Object.defineProperties(mx.logging.Log, /** @lends {mx.logging.Log} */ {
/**
 * @private
 * @type {number}
 */
NONE: {
  get: mx.logging.Log.get__NONE,
  set: mx.logging.Log.set__NONE,
  configurable: true}});


/**
 * @private
 * @type {number}
 */
mx.logging.Log._targetLevel;


/**
 * @private
 * @type {Array}
 */
mx.logging.Log._loggers;


/**
 * @private
 * @type {Array}
 */
mx.logging.Log._targets = [];


/**
 * @private
 * @type {mx.resources.IResourceManager}
 */
mx.logging.Log._resourceManager;


/**
 *  Indicates whether a fatal level log event will be processed by a
 *  log target.
 *
 *  @asreturn true if a fatal level log event will be logged; otherwise false.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {boolean}
 */
mx.logging.Log.isFatal = function() {
  return (mx.logging.Log._targetLevel <= mx.logging.LogEventLevel.FATAL) ? true : false;
};


/**
 *  Indicates whether an error level log event will be processed by a
 *  log target.
 *
 *  @asreturn true if an error level log event will be logged; otherwise false.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {boolean}
 */
mx.logging.Log.isError = function() {
  return (mx.logging.Log._targetLevel <= mx.logging.LogEventLevel.ERROR) ? true : false;
};


/**
 *  Indicates whether a warn level log event will be processed by a
 *  log target.
 *
 *  @asreturn true if a warn level log event will be logged; otherwise false.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {boolean}
 */
mx.logging.Log.isWarn = function() {
  return (mx.logging.Log._targetLevel <= mx.logging.LogEventLevel.WARN) ? true : false;
};


/**
 *  Indicates whether an info level log event will be processed by a
 *  log target.
 *
 *  @asreturn true if an info level log event will be logged; otherwise false.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {boolean}
 */
mx.logging.Log.isInfo = function() {
  return (mx.logging.Log._targetLevel <= mx.logging.LogEventLevel.INFO) ? true : false;
};


/**
 *  Indicates whether a debug level log event will be processed by a
 *  log target.
 *
 *  @asreturn true if a debug level log event will be logged; otherwise false.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {boolean}
 */
mx.logging.Log.isDebug = function() {
  return (mx.logging.Log._targetLevel <= mx.logging.LogEventLevel.DEBUG) ? true : false;
};


/**
 *  Allows the specified target to begin receiving notification of log
 *  events.
 *
 *  @asparam The specific target that should capture log events.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.logging.ILoggingTarget} target
 */
mx.logging.Log.addTarget = function(target) {
  if (target) {
    var /** @type {Array} */ filters = target.filters;
    var /** @type {mx.logging.ILogger} */ logger;
    for (var /** @type {string} */ i in mx.logging.Log._loggers) {
      if (mx.logging.Log.categoryMatchInFilterList(i, filters))
        target.addLogger(org.apache.royale.utils.Language.as(mx.logging.Log._loggers[i], mx.logging.ILogger, true));
    }
    mx.logging.Log._targets.push(target);
    if (mx.logging.Log._targetLevel == mx.logging.Log.NONE)
      mx.logging.Log._targetLevel = target.level;
    else if (target.level < mx.logging.Log._targetLevel)
      mx.logging.Log._targetLevel = target.level;
  } else {
    var /** @type {string} */ message = mx.logging.Log["resourceManager"].getString("logging", "invalidTarget");
    throw new mx.messaging.errors.ArgumentError(message);
  }
};


/**
 *  Stops the specified target from receiving notification of log
 *  events.
 *
 *  @asparam The specific target that should capture log events.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.logging.ILoggingTarget} target
 */
mx.logging.Log.removeTarget = function(target) {
  if (target) {
    var /** @type {Array} */ filters = target.filters;
    var /** @type {mx.logging.ILogger} */ logger;
    for (var /** @type {string} */ i in mx.logging.Log._loggers) {
      if (mx.logging.Log.categoryMatchInFilterList(i, filters)) {
        target.removeLogger(org.apache.royale.utils.Language.as(mx.logging.Log._loggers[i], mx.logging.ILogger, true));
      }
    }
    for (var /** @type {number} */ j = 0; j < mx.logging.Log._targets.length; j++) {
      if (target == mx.logging.Log._targets[j]) {
        mx.logging.Log._targets.splice(j, 1);
        j--;
      }
    }
    mx.logging.Log.resetTargetLevel();
  } else {
    var /** @type {string} */ message = mx.logging.Log["resourceManager"].getString("logging", "invalidTarget");
    throw new mx.messaging.errors.ArgumentError(message);
  }
};


/**
 *  Returns the logger associated with the specified category.
 *  If the category given doesn't exist a new instance of a logger will be
 *  returned and associated with that category.
 *  Categories must be at least one character in length and may not contain
 *  any blanks or any of the following characters:
 *  []~$^&amp;\/(){}&lt;&gt;+=`!#%?,:;'"&#64;
 *  This method will throw an <code>InvalidCategoryError</code> if the
 *  category specified is malformed.
 *
 *  @asparam category The category of the logger that should be returned.
 *
 *  @asreturn An instance of a logger object for the specified name.
 *  If the name doesn't exist, a new instance with the specified
 *  name is returned.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} category
 * @return {mx.logging.ILogger}
 */
mx.logging.Log.getLogger = function(category) {
  mx.logging.Log.checkCategory(category);
  if (!mx.logging.Log._loggers)
    mx.logging.Log._loggers = [];
  var /** @type {mx.logging.ILogger} */ result = mx.logging.Log._loggers[category];
  if (result == null) {
    result = new mx.logging.LogLogger(category);
    mx.logging.Log._loggers[category] = result;
  }
  var /** @type {mx.logging.ILoggingTarget} */ target;
  for (var /** @type {number} */ i = 0; i < mx.logging.Log._targets.length; i++) {
    target = org.apache.royale.utils.Language.as(mx.logging.Log._targets[i], mx.logging.ILoggingTarget, true);
    if (mx.logging.Log.categoryMatchInFilterList(category, target.filters))
      target.addLogger(result);
  }
  return result;
};


/**
 *  This method removes all of the current loggers from the cache.
 *  Subsquent calls to the <code>getLogger()</code> method return new instances
 *  of loggers rather than any previous instances with the same category.
 *  This method is intended for use in debugging only.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
mx.logging.Log.flush = function() {
  mx.logging.Log._loggers = [];
  mx.logging.Log._targets = [];
  mx.logging.Log._targetLevel = mx.logging.Log.NONE;
};


/**
 *  This method checks the specified string value for illegal characters.
 *
 *  @asparam value The String to check for illegal characters.
 *            The following characters are not valid:
 *                []~$^&amp;\/(){}&lt;&gt;+=`!#%?,:;'"&#64;
 *  @asreturn   <code>true</code> if there are any illegal characters found,
 *            <code>false</code> otherwise
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} value
 * @return {boolean}
 */
mx.logging.Log.hasIllegalCharacters = function(value) {
  return value.search(/[\[\]\~\$\^\&\\(\)\{\}\+\?\/=`!@#%,:;'"<>\s]/) != -1;
};


/**
 *  This method checks that the specified category matches any of the filter
 *  expressions provided in the <code>filters</code> Array.
 *
 *  @asparam category The category to match against
 *  @asparam filters A list of Strings to check category against.
 *  @asreturn <code>true</code> if the specified category matches any of the
 *            filter expressions found in the filters list, <code>false</code>
 *            otherwise.
 *  @asprivate
 * @private
 * @param {string} category
 * @param {Array} filters
 * @return {boolean}
 */
mx.logging.Log.categoryMatchInFilterList = function(category, filters) {
  var /** @type {boolean} */ result = false;
  var /** @type {string} */ filter;
  var /** @type {number} */ index = -1;
  for (var /** @type {number} */ i = 0; i < filters.length; i++) {
    filter = org.apache.royale.utils.Language.string(filters[i]);
    index = (filter.indexOf("*")) >> 0;
    if (index == 0)
      return true;
    index = (index < 0 ? index = (category.length) >> 0 : index - 1) >> 0;
    if (category.substring(0, index) == filter.substring(0, index))
      return true;
  }
  return false;
};


/**
 *  This method will ensure that a valid category string has been specified.
 *  If the category is not valid an <code>InvalidCategoryError</code> will
 *  be thrown.
 *  Categories can not contain any blanks or any of the following characters:
 *    []`*~,!#$%^&amp;()]{}+=\|'";?&gt;&lt;./&#64; or be less than 1 character in length.
 *  @asprivate
 * @private
 * @param {string} category
 */
mx.logging.Log.checkCategory = function(category) {
  var /** @type {string} */ message;
  if (category == null || category.length == 0) {
    message = mx.logging.Log["resourceManager"].getString("logging", "invalidLen");
    throw new mx.logging.errors.InvalidCategoryError(message);
  }
  if (mx.logging.Log.hasIllegalCharacters(category) || (category.indexOf("*") != -1)) {
    message = mx.logging.Log["resourceManager"].getString("logging", "invalidChars");
    throw new mx.logging.errors.InvalidCategoryError(message);
  }
};


/**
 *  @asprivate
 *  This method resets the Log's target level to the most verbose log level
 *  for the currently registered targets.
 * @private
 */
mx.logging.Log.resetTargetLevel = function() {
  var /** @type {number} */ minLevel = mx.logging.Log.NONE;
  for (var /** @type {number} */ i = 0; i < mx.logging.Log._targets.length; i++) {
    if (minLevel == mx.logging.Log.NONE || mx.logging.Log._targets[i].level < minLevel)
      minLevel = (mx.logging.Log._targets[i].level) >> 0;
  }
  mx.logging.Log._targetLevel = minLevel;
};


mx.logging.Log.get__resourceManager = function() {
  if (!mx.logging.Log._resourceManager)
    mx.logging.Log._resourceManager = mx.resources.ResourceManager.getInstance();
  return mx.logging.Log._resourceManager;
};


Object.defineProperties(mx.logging.Log, /** @lends {mx.logging.Log} */ {
/**
  * @export
  * @type {mx.resources.IResourceManager} */
resourceManager: {
get: mx.logging.Log.get__resourceManager}}
);

mx.logging.Log._targetLevel = mx.logging.Log.NONE;




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.logging.Log.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Log', qName: 'mx.logging.Log', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.logging.Log.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|isFatal': { type: 'Boolean', declaredBy: 'mx.logging.Log'},
        '|isError': { type: 'Boolean', declaredBy: 'mx.logging.Log'},
        '|isWarn': { type: 'Boolean', declaredBy: 'mx.logging.Log'},
        '|isInfo': { type: 'Boolean', declaredBy: 'mx.logging.Log'},
        '|isDebug': { type: 'Boolean', declaredBy: 'mx.logging.Log'},
        '|addTarget': { type: 'void', declaredBy: 'mx.logging.Log', parameters: function () { return [ 'mx.logging.ILoggingTarget', false ]; }},
        '|removeTarget': { type: 'void', declaredBy: 'mx.logging.Log', parameters: function () { return [ 'mx.logging.ILoggingTarget', false ]; }},
        '|getLogger': { type: 'mx.logging.ILogger', declaredBy: 'mx.logging.Log', parameters: function () { return [ 'String', false ]; }},
        '|flush': { type: 'void', declaredBy: 'mx.logging.Log'},
        '|hasIllegalCharacters': { type: 'Boolean', declaredBy: 'mx.logging.Log', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.logging.Log.prototype.ROYALE_COMPILE_FLAGS = 26;
