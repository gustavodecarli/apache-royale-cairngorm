/**
 * Generated by Apache Royale Compiler from com/adobe/cairngorm/commands/ICommand.as
 * com.adobe.cairngorm.commands.ICommand
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.adobe.cairngorm.commands.ICommand');
/* Royale Dependency List: com.adobe.cairngorm.control.CairngormEvent*/




/**
 * @interface
 */
com.adobe.cairngorm.commands.ICommand = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('com.adobe.cairngorm.commands.ICommand', com.adobe.cairngorm.commands.ICommand);
/** Called by the Front Controller to execute the command.
 * 
 * <p>The single entry point into an ICommand, the 
 * execute() method is called by the Front Controller when a 
 * user-gesture indicates that the user wishes to perform a 
 * task for which a particularconcrete command class has been 
 * provided.</p>
 *
 * @asparam event When the Front Controller receives notification
 * of a user gesture, the Event that it receives contains both the
 * type of the event (indicating which command should handle the
 * work) but also any data associated with the event.
 *
 * <p>
 * For instance, if a "login" event has been broadcasted,
 * to which the controller has registered the LoginCommand,
 * the event may also contain some associated data, such as
 * the number of prior attempts at login have been made
 * already. In this case, the event.type would be set to
 * "login" while other properties define in the custom login 
 * event object would contain (by way of example)
 * an attribute such as attemptedLogins. 
 * </p>
 *
 * <p>
 * By careful use of custom event objects, the same
 * concrete command class is capable of responding in slightly
 * different ways to similar user gesture requests.
 * </p>
 * @export
 * @param {com.adobe.cairngorm.control.CairngormEvent} event
 */
com.adobe.cairngorm.commands.ICommand.prototype.execute = function(event) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.adobe.cairngorm.commands.ICommand.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ICommand', qName: 'com.adobe.cairngorm.commands.ICommand', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.adobe.cairngorm.commands.ICommand.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'execute': { type: 'void', declaredBy: 'com.adobe.cairngorm.commands.ICommand', parameters: function () { return [ 'com.adobe.cairngorm.control.CairngormEvent', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.adobe.cairngorm.commands.ICommand.prototype.ROYALE_COMPILE_FLAGS = 11;

//# sourceMappingURL=./ICommand.js.map
