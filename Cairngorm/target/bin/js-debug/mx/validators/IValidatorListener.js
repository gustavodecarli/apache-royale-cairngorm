/**
 * Generated by Apache Royale Compiler from mx/validators/IValidatorListener.as
 * mx.validators.IValidatorListener
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.validators.IValidatorListener');
/* Royale Dependency List: mx.events.ValidationResultEvent,XML*/




/**
 * @interface
 */
mx.validators.IValidatorListener = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.validators.IValidatorListener', mx.validators.IValidatorListener);
/**  * @type {string}
 */mx.validators.IValidatorListener.prototype.errorString;
/**  * @type {string}
 */mx.validators.IValidatorListener.prototype.validationSubField;
/**
 *  Handles both the <code>valid</code> and <code>invalid</code> events
 *  from a  validator assigned to this component.  
 *
 *  <p>You typically handle the <code>valid</code> and <code>invalid</code>
 *  events dispatched by a validator by assigning event listeners
 *  to the validators. 
 *  If you want to handle validation events directly in the component
 *  that is being validated, you can override this method
 *  to handle the <code>valid</code> and <code>invalid</code> events.
 *  From within your implementation, you can use the
 *  <code>dispatchEvent()</code> method to dispatch the 
 *  <code>valid</code> and <code>invalid</code> events
 *  in the case where a validator is also listening for them.</p>
 *
 *  @asparam event The event object for the validation.
 *
 *  @see mx.events.ValidationResultEvent
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.events.ValidationResultEvent} event
 */
mx.validators.IValidatorListener.prototype.validationResultHandler = function(event) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.validators.IValidatorListener.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IValidatorListener', qName: 'mx.validators.IValidatorListener', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.validators.IValidatorListener.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'errorString': { type: 'String', access: 'readwrite', declaredBy: 'mx.validators.IValidatorListener'},
        'validationSubField': { type: 'String', access: 'readwrite', declaredBy: 'mx.validators.IValidatorListener'}
      };
    },
    methods: function () {
      return {
        'validationResultHandler': { type: 'void', declaredBy: 'mx.validators.IValidatorListener', parameters: function () { return [ 'mx.events.ValidationResultEvent', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.validators.IValidatorListener.prototype.ROYALE_COMPILE_FLAGS = 26;
