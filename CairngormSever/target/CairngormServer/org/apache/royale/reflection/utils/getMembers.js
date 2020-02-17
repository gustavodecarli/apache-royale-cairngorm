/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/utils/getMembers.as
 * org.apache.royale.reflection.utils.getMembers
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.utils.getMembers');
/* Royale Dependency List: org.apache.royale.reflection.TypeDefinition,org.apache.royale.reflection.utils.MemberTypes*/




/**
 *  A utility method to retrieve all members
 *  It will return variables, accessors or methods by default
 *  
 *  @asparam fromDefinition the definition to retrieve the member definitions from
 *  @asparam includeStatics true if static members should be returned. Defaults to false, so only instance members are returned
 *  @asparam memberTypes a bitwise combination of MemberTypes constants to restrict returned items
 *  to VARIABLES, ACCESSORS, METHODS or specific combinations thereof, defaults to VARIABLES | ACCESSORS | METHODS
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.reflection.TypeDefinition} fromDefinition
 * @param {boolean=} includeStatics
 * @param {number=} memberTypes
 * @return {Array}
 */
org.apache.royale.reflection.utils.getMembers = function(fromDefinition, includeStatics, memberTypes) {
  includeStatics = typeof includeStatics !== 'undefined' ? includeStatics : false;
  memberTypes = typeof memberTypes !== 'undefined' ? memberTypes : 7;
  var /** @type {Array} */ ret = [];
  if (!fromDefinition)
    return ret;
  if (includeStatics) {
    if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.VARIABLES) != 0)
      ret = ret.concat(fromDefinition.staticVariables);
    if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.ACCESSORS) != 0)
      ret = ret.concat(fromDefinition.staticAccessors);
    if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.METHODS) != 0)
      ret = ret.concat(fromDefinition.staticMethods);
  }
  if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.STATIC_ONLY) != 0) {
    if (!includeStatics)
      throw new Error('Request for only static values requires includeStatics to be true');
    return ret;
  }
  if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.VARIABLES) != 0)
    ret = ret.concat(fromDefinition.variables);
  if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.ACCESSORS) != 0)
    ret = ret.concat(fromDefinition.accessors);
  if ((memberTypes & org.apache.royale.reflection.utils.MemberTypes.METHODS) != 0)
    ret = ret.concat(fromDefinition.methods);
  return ret;
}