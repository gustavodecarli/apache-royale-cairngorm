/**
 * Generated by Apache Royale Compiler from mx/utils/XMLNotifier.as
 * mx.utils.XMLNotifier
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.XMLNotifier');
/* Royale Dependency List: XML,XMLList,mx.core.mx_internal,mx.utils.IXMLNotifiable,org.apache.royale.utils.Language*/
goog.provide('mx.utils.XMLNotifier.XMLNotifierSingleton');




/**
 *  Constructor.
 *
 *  XMLNotifier is a singleton class, so you do not use
 *  the <code>new</code> operator to create multiple instances of it.
 *  Instead, call the static method <code>XMLNotifider.getInstance()</code>
 *  to get the sole instance of this class.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @param {mx.utils.XMLNotifier.XMLNotifierSingleton} x
 */
mx.utils.XMLNotifier = function(x) {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.XMLNotifier', mx.utils.XMLNotifier);


/**
 * @private
 * @type {mx.utils.XMLNotifier}
 */
mx.utils.XMLNotifier.instance;


/**
 *  Get the singleton instance of the XMLNotifier.
 *
 *  @asreturn The XMLNotifier object.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {mx.utils.XMLNotifier}
 */
mx.utils.XMLNotifier.getInstance = function() {
  if (!mx.utils.XMLNotifier.instance)
    mx.utils.XMLNotifier.instance = new mx.utils.XMLNotifier(new mx.utils.XMLNotifier.XMLNotifierSingleton());
  return mx.utils.XMLNotifier.instance;
};


/**
 *  @asprivate
 *  Decorates an XML node with a notification function
 *  that can fan out to multiple targets.
 * @export
 * @return {Function}
 */
mx.utils.XMLNotifier.http_$$www_adobe_com$2006$flex$mx$internal__initializeXMLForNotification = function() {
  var /** @type {Function} */ notificationFunction = function(currentTarget, ty, tar, value, detail) {
    
  };
  return notificationFunction;
};


/**
 *  Given an XML or XMLList, add the notification function
 *  to watch for changes.
 *
 *  @asparam xml XML/XMLList object to watch.
 *  @asparam notification Function that needs to be called.
 *  @asparam optional UID for object
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} xml
 * @param {mx.utils.IXMLNotifiable} notifiable
 * @param {string=} uid
 */
mx.utils.XMLNotifier.prototype.watchXML = function(xml, notifiable, uid) {
  uid = typeof uid !== 'undefined' ? uid : null;
  if (org.apache.royale.utils.Language.is(xml, XMLList) && xml.length() > 1) {
    var foreachiter0_target = xml;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var item = foreachiter0_target[foreachiter0];
    {
      this.watchXML(item, notifiable, uid);
    }}
    
  } else {
    var /** @type {XML} */ xmlItem = XML.conversion(xml);
    
  }
};


/**
 *  Given an XML or XMLList, remove the specified notification function.
 *
 *  @asparam xml XML/XMLList object to un-watch.
 *  @asparam notification Function notification function.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} xml
 * @param {mx.utils.IXMLNotifiable} notifiable
 */
mx.utils.XMLNotifier.prototype.unwatchXML = function(xml, notifiable) {
  if (org.apache.royale.utils.Language.is(xml, XMLList) && xml.length() > 1) {
    var foreachiter1_target = xml;
    for (var foreachiter1 in foreachiter1_target) 
    {
    var item = foreachiter1_target[foreachiter1];
    {
      this.unwatchXML(item, notifiable);
    }}
    
  } else {
    var /** @type {XML} */ xmlItem = XML.conversion(xml);
    
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.XMLNotifier.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'XMLNotifier', qName: 'mx.utils.XMLNotifier', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.XMLNotifier.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getInstance': { type: 'mx.utils.XMLNotifier', declaredBy: 'mx.utils.XMLNotifier'},
        '|http://www.adobe.com/2006/flex/mx/internal::initializeXMLForNotification': { type: 'Function', declaredBy: 'mx.utils.XMLNotifier'},
        'XMLNotifier': { type: '', declaredBy: 'mx.utils.XMLNotifier', parameters: function () { return [ 'XMLNotifierSingleton', false ]; }},
        'watchXML': { type: 'void', declaredBy: 'mx.utils.XMLNotifier', parameters: function () { return [ 'Object', false ,'mx.utils.IXMLNotifiable', false ,'String', true ]; }},
        'unwatchXML': { type: 'void', declaredBy: 'mx.utils.XMLNotifier', parameters: function () { return [ 'Object', false ,'mx.utils.IXMLNotifiable', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.XMLNotifier.prototype.ROYALE_COMPILE_FLAGS = 26;



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 */
mx.utils.XMLNotifier.XMLNotifierSingleton = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.XMLNotifier.XMLNotifierSingleton', mx.utils.XMLNotifier.XMLNotifierSingleton);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.XMLNotifier.XMLNotifierSingleton.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'XMLNotifierSingleton', qName: 'mx.utils.XMLNotifier.XMLNotifierSingleton', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.XMLNotifier.XMLNotifierSingleton.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'XMLNotifierSingleton': { type: '', declaredBy: 'mx.utils.XMLNotifier.XMLNotifierSingleton'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.XMLNotifier.XMLNotifierSingleton.prototype.ROYALE_COMPILE_FLAGS = 26;