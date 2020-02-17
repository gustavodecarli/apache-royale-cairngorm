/**
 * Generated by Apache Royale Compiler from mx/logging/ILogger.as
 * mx.logging.ILogger
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.logging.ILogger');
/* Royale Dependency List: XML*/

goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
mx.logging.ILogger = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.logging.ILogger', mx.logging.ILogger);
/**  * @type {string}
 */mx.logging.ILogger.prototype.category;
/**
 *  Logs the specified data at the given level.
 *  
 *  <p>The String specified for logging can contain braces with an index
 *  indicating which additional parameter should be inserted
 *  into the String before it is logged.
 *  For example "the first additional parameter was {0} the second was {1}"
 *  is translated into "the first additional parameter was 10 the
 *  second was 15" when called with 10 and 15 as parameters.</p>
 *  
 *  @asparam level The level this information should be logged at.
 *  Valid values are:
 *  <ul>
 *    <li><code>LogEventLevel.FATAL</code> designates events that are very
 *    harmful and will eventually lead to application failure</li>
 *
 *    <li><code>LogEventLevel.ERROR</code> designates error events
 *    that might still allow the application to continue running.</li>
 *
 *    <li><code>LogEventLevel.WARN</code> designates events that could be
 *    harmful to the application operation</li>
 *
 *    <li><code>LogEventLevel.INFO</code> designates informational messages
 *    that highlight the progress of the application at
 *    coarse-grained level.</li>
 *
 *    <li><code>LogEventLevel.DEBUG</code> designates informational
 *    level messages that are fine grained and most helpful when
 *    debugging an application.</li>
 *  </ul>
 *
 *  @asparam message The information to log.
 *  This String can contain special marker characters of the form {x},
 *  where x is a zero based index that will be replaced with
 *  the additional parameters found at that index if specified.
 *
 *  @asparam rest Additional parameters that can be subsituted in the str
 *  parameter at each "{<code>x</code>}" location, where <code>x</code>
 *  is an integer (zero based) index value into the Array of values
 *  specified.  
 *
 *  @example
 *  <pre>
 *  // Get the logger for the mx.messaging.Channel "category"
 *  // and send some data to it.
 *  var logger:ILogger = Log.getLogger("mx.messaging.Channel");
 *  logger.log(LogEventLevel.DEBUG, "here is some channel info {0} and {1}", LogEventLevel.DEBUG, 15.4, true);
 *
 *  // This will log the following String as a DEBUG log message:
 *  //   "here is some channel info 15.4 and true"
 *  </pre>
 *
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {number} level
 * @param {string} message
 * @param {...} rest
 */
mx.logging.ILogger.prototype.log = function(level, message, rest) {
};
/**
 *  Logs the specified data using the <code>LogEventLevel.DEBUG</code>
 *  level.
 *  <code>LogEventLevel.DEBUG</code> designates informational level
 *  messages that are fine grained and most helpful when debugging
 *  an application.
 *  
 *  <p>The string specified for logging can contain braces with an index
 *  indicating which additional parameter should be inserted
 *  into the string before it is logged.
 *  For example "the first additional parameter was {0} the second was {1}"
 *  will be translated into "the first additional parameter was 10 the
 *  second was 15" when called with 10 and 15 as parameters.</p>
 *
 *  @asparam message The information to log.
 *  This string can contain special marker characters of the form {x},
 *  where x is a zero based index that will be replaced with
 *  the additional parameters found at that index if specified.
 *
 *  @asparam rest Additional parameters that can be subsituted in the str
 *  parameter at each "{<code>x</code>}" location, where <code>x</code>
 *  is an integer (zero based) index value into the Array of values
 *  specified.
 *
 *  @example
 *  <pre>
 *  // Get the logger for the mx.messaging.Channel "category"
 *  // and send some data to it.
 *  var logger:ILogger = Log.getLogger("mx.messaging.Channel");
 *  logger.debug("here is some channel info {0} and {1}", 15.4, true);
 *
 *  // This will log the following String:
 *  //   "here is some channel info 15.4 and true"
 *  </pre>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} message
 * @param {...} rest
 */
mx.logging.ILogger.prototype.debug = function(message, rest) {
};
/**
 *  Logs the specified data using the <code>LogEventLevel.ERROR</code>
 *  level.
 *  <code>LogEventLevel.ERROR</code> designates error events
 *  that might still allow the application to continue running.
 *  
 *  <p>The string specified for logging can contain braces with an index
 *  indicating which additional parameter should be inserted
 *  into the string before it is logged.
 *  For example "the first additional parameter was {0} the second was {1}"
 *  will be translated into "the first additional parameter was 10 the
 *  second was 15" when called with 10 and 15 as parameters.</p>
 *
 *  @asparam message The information to log.
 *  This String can contain special marker characters of the form {x},
 *  where x is a zero based index that will be replaced with
 *  the additional parameters found at that index if specified.
 *
 *  @asparam rest Additional parameters that can be subsituted in the str
 *  parameter at each "{<code>x</code>}" location, where <code>x</code>
 *  is an integer (zero based) index value into the Array of values
 *  specified.
 *
 *  @example
 *  <pre>
 *  // Get the logger for the mx.messaging.Channel "category"
 *  // and send some data to it.
 *  var logger:ILogger = Log.getLogger("mx.messaging.Channel");
 *  logger.error("here is some channel info {0} and {1}", 15.4, true);
 *
 *  // This will log the following String:
 *  //   "here is some channel info 15.4 and true"
 *  </pre>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} message
 * @param {...} rest
 */
mx.logging.ILogger.prototype.error = function(message, rest) {
};
/**
 *  Logs the specified data using the <code>LogEventLevel.FATAL</code> 
 *  level.
 *  <code>LogEventLevel.FATAL</code> designates events that are very 
 *  harmful and will eventually lead to application failure
 *
 *  <p>The string specified for logging can contain braces with an index
 *  indicating which additional parameter should be inserted
 *  into the string before it is logged.
 *  For example "the first additional parameter was {0} the second was {1}"
 *  will be translated into "the first additional parameter was 10 the
 *  second was 15" when called with 10 and 15 as parameters.</p>
 *
 *  @asparam message The information to log.
 *  This String can contain special marker characters of the form {x},
 *  where x is a zero based index that will be replaced with
 *  the additional parameters found at that index if specified.
 *
 *  @asparam rest Additional parameters that can be subsituted in the str
 *  parameter at each "{<code>x</code>}" location, where <code>x</code>
 *  is an integer (zero based) index value into the Array of values
 *  specified.
 *
 *  @example
 *  <pre>
 *  // Get the logger for the mx.messaging.Channel "category"
 *  // and send some data to it.
 *  var logger:ILogger = Log.getLogger("mx.messaging.Channel");
 *  logger.fatal("here is some channel info {0} and {1}", 15.4, true);
 *
 *  // This will log the following String:
 *  //   "here is some channel info 15.4 and true"
 *  </pre>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} message
 * @param {...} rest
 */
mx.logging.ILogger.prototype.fatal = function(message, rest) {
};
/**
 *  Logs the specified data using the <code>LogEvent.INFO</code> level.
 *  <code>LogEventLevel.INFO</code> designates informational messages that 
 *  highlight the progress of the application at coarse-grained level.
 *  
 *  <p>The string specified for logging can contain braces with an index
 *  indicating which additional parameter should be inserted
 *  into the string before it is logged.
 *  For example "the first additional parameter was {0} the second was {1}"
 *  will be translated into "the first additional parameter was 10 the
 *  second was 15" when called with 10 and 15 as parameters.</p>
 *
 *  @asparam message The information to log.
 *  This String can contain special marker characters of the form {x},
 *  where x is a zero based index that will be replaced with
 *  the additional parameters found at that index if specified.
 *
 *  @asparam rest Additional parameters that can be subsituted in the str
 *  parameter at each "{<code>x</code>}" location, where <code>x</code>
 *  is an integer (zero based) index value into the Array of values
 *  specified.
 *
 *  @example
 *  <pre>
 *  // Get the logger for the mx.messaging.Channel "category"
 *  // and send some data to it.
 *  var logger:ILogger = Log.getLogger("mx.messaging.Channel");
 *  logger.info("here is some channel info {0} and {1}", 15.4, true);
 *
 *  // This will log the following String:
 *  //   "here is some channel info 15.4 and true"
 *  </pre>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} message
 * @param {...} rest
 */
mx.logging.ILogger.prototype.info = function(message, rest) {
};
/**
 *  Logs the specified data using the <code>LogEventLevel.WARN</code> level.
 *  <code>LogEventLevel.WARN</code> designates events that could be harmful 
 *  to the application operation.
 *      
 *  <p>The string specified for logging can contain braces with an index
 *  indicating which additional parameter should be inserted
 *  into the string before it is logged.
 *  For example "the first additional parameter was {0} the second was {1}"
 *  will be translated into "the first additional parameter was 10 the
 *  second was 15" when called with 10 and 15 as parameters.</p>
 *  
 *  @asparam message The information to log.
 *  This String can contain special marker characters of the form {x},
 *  where x is a zero based index that will be replaced with
 *  the additional parameters found at that index if specified.
 *
 *  @asparam rest Aadditional parameters that can be subsituted in the str
 *  parameter at each "{<code>x</code>}" location, where <code>x</code>
 *  is an integer (zero based) index value into the Array of values
 *  specified.
 *
 *  @example
 *  <pre>
 *  // Get the logger for the mx.messaging.Channel "category"
 *  // and send some data to it.
 *  var logger:ILogger = Log.getLogger("mx.messaging.Channel");
 *  logger.warn("here is some channel info {0} and {1}", 15.4, true);
 *
 *  // This will log the following String:
 *  //   "here is some channel info 15.4 and true"
 *  </pre>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} message
 * @param {...} rest
 */
mx.logging.ILogger.prototype.warn = function(message, rest) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.logging.ILogger.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ILogger', qName: 'mx.logging.ILogger', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.logging.ILogger.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'category': { type: 'String', access: 'readonly', declaredBy: 'mx.logging.ILogger'}
      };
    },
    methods: function () {
      return {
        'log': { type: 'void', declaredBy: 'mx.logging.ILogger', parameters: function () { return [ 'int', false ,'String', false ,'Array', false ]; }},
        'debug': { type: 'void', declaredBy: 'mx.logging.ILogger', parameters: function () { return [ 'String', false ,'Array', false ]; }},
        'error': { type: 'void', declaredBy: 'mx.logging.ILogger', parameters: function () { return [ 'String', false ,'Array', false ]; }},
        'fatal': { type: 'void', declaredBy: 'mx.logging.ILogger', parameters: function () { return [ 'String', false ,'Array', false ]; }},
        'info': { type: 'void', declaredBy: 'mx.logging.ILogger', parameters: function () { return [ 'String', false ,'Array', false ]; }},
        'warn': { type: 'void', declaredBy: 'mx.logging.ILogger', parameters: function () { return [ 'String', false ,'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.logging.ILogger.prototype.ROYALE_COMPILE_FLAGS = 26;
