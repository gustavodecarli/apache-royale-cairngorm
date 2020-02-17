/**
 * Generated by Apache Royale Compiler from mx/collections/XMLListCollection.as
 * mx.collections.XMLListCollection
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.collections.XMLListCollection');
/* Royale Dependency List: XMLList,mx.collections.XMLListAdapter,org.apache.royale.utils.Language,XML*/

goog.require('mx.collections.ListCollectionView');



/**
 *  Constructor.
 *
 *  <p>Creates a new XMLListCollection object
 *  using the specified XMLList object.</p>
 * 
 *  @asparam source The XMLList object containing the data to be represented
 *                by the XMLListCollection object.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {mx.collections.ListCollectionView}
 * @param {XMLList=} source
 */
mx.collections.XMLListCollection = function(source) {
  source = typeof source !== 'undefined' ? source : null;
  mx.collections.XMLListCollection.base(this, 'constructor');
  this.source = source;
};
goog.inherits(mx.collections.XMLListCollection, mx.collections.ListCollectionView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.collections.XMLListCollection', mx.collections.XMLListCollection);


/**
 *  Calls the <code>attribute()</code> method of each XML object in the
 *  XMLList and returns an XMLList of the results, which
 *  match the given <code>attributeName</code>.
 *
 *  @asparam attributeName The attribute that you want to match in the XML
 *                       objects of the XMLList.
 *
 *  @asreturn The XMLList of matching XML objects.
 *
 *  @see XML#attribute()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} attributeName
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.attribute = function(attributeName) {
  var self = this;
  return this.mx_collections_XMLListCollection_execXMLListFunction(function(obj) {
    return obj.attribute(attributeName);
  });
};


/**
 *  Calls the <code>attributes()</code> method of each XML object in the
 *  XMLList object and returns an XMList of attributes for each XML object.
 *
 *  @asreturn The XMLList containing the resulting XML objects, listing
 *          the attributes.
 *
 *  @see XML#attributes()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.attributes = function() {
  var self = this;
  return this.mx_collections_XMLListCollection_execXMLListFunction(function(obj) {
    return obj.attributes();
  });
};


/**
 *  Calls the <code>child()</code> method of each XML object in the XMLList
 *  and returns an XMLList containing the children of with the specified property
 *  name, in order.
 *
 *  @asparam propertyName The propery to match.
 *
 *  @asreturn An XMLList of matching children of the XML objects in the
 *          original XMLList.
 *
 *  @see XML#child()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} propertyName
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.child = function(propertyName) {
  var self = this;
  return this.mx_collections_XMLListCollection_execXMLListFunction(function(obj) {
    return obj.child(propertyName);
  });
};


/**
 *  Calls the children() method of each XML object in the XMLList and
 *  returns an XMLList containing the results.
 *
 *  @asreturn An XMLList of children of the XML objects in the original XMLList.
 *
 *  @see XML#children()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.children = function() {
  var self = this;
  return this.mx_collections_XMLListCollection_execXMLListFunction(function(obj) {
    return obj.children();
  });
};


/**
 *  Returns a deep copy of the XMLList object.
 *
 *  @asreturn The copy of the XMLList object.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.copy = function() {
  var self = this;
  return this.mx_collections_XMLListCollection_execXMLListFunction(function(obj) {
    return XMLList.conversion(obj.copy());
  });
};


/**
 *  Calls the <code>descendants()</code> method of each XML object in the
 *  XMLList and returns an XMLList containing the results.
 *  The <code>name</code> parameter is passed to the XML object's 
 *  <code>descendants()</code> method. 
 *  If you do not specify a parameter, the string "~~" is passed to the
 *  <code>descendants()</code> method.
 *
 *  @asparam name The name of the elements to match.
 *
 *  @asreturn XMLList of the matching descendents (children, grandchildren,
 *  etc.) of the XML objects in the original XMLList.
 *
 *  @see XML#descendants()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object=} name
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.descendants = function(name) {
  var self = this;
  name = typeof name !== 'undefined' ? name : "*";
  return this.mx_collections_XMLListCollection_execXMLListFunction(function(obj) {
    return obj.descendants(name);
  });
};


/**
 *  Calls the <code>elements()</code> method of each XML object in the XMLList.
 *  The <code>name</code> parameter is passed to the XML object's 
 *  <code>elements()</code> method. 
 *  If you do not specify a parameter, the string "~~" is passed to the
 *  <code>elements()</code> method.
 *
 *  @asparam name The name of the elements to match.
 *
 *  @asreturn XMLList of the matching child elements of the XML objects in the
 *          original XMLList.
 *
 *  @see XML#elements()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string=} name
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.elements = function(name) {
  var self = this;
  name = typeof name !== 'undefined' ? name : "*";
  return this.mx_collections_XMLListCollection_execXMLListFunction(function(obj) {
    return obj.elements(name);
  });
};


/**
 * Calls the <code>text()</code> method of each XML object in
 *  the XMLList and returns an XMLList containing the results.
 *  
 *  @asreturn The XMLList that contains the result.
 *
 *  @see XML#text()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.text = function() {
  var self = this;
  return this.mx_collections_XMLListCollection_execXMLListFunction(function(obj) {
    return obj.text();
  });
};


/**
 *  Returns a string representation of the XMLList by calling the
 *  <code>toString()</code> method for each XML object in the XMLList.
 *  If the <code>prettyPrinting</code> property of the <code>XML</code>
 *  class is set to <code>true</code>, then the results for each XML object
 *  in the XMLList are separated by the return character.
 *  Otherwise, if <code>prettyPrinting</code> is set to <code>false</code>,
 *  then the results are simply concatenated, without separating return characters.
 *
 *  <p>The <code>toString()</code> method strips out the following
 *  in the returned string for an XML object that has simple content:
 *  the start tag, attributes, namespace declarations, and the end tag.
 *  Use the <code>toXMLString()</code> method if you want to preserve these
 *  in the returned string for XML objects with simple content.</p>
 * 
 *  @asreturn The string representation of the XMLList object.
 *  
 *  @see XML#prettyPrinting
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @override
 */
mx.collections.XMLListCollection.prototype.toString = function() {
  if (!this.localIndex) {
    return this.source.toString();
  } else {
    var /** @type {string} */ str = "";
    for (var /** @type {number} */ i = 0; i < this.localIndex.length; i++) {
      if (i > 0)
        str += "\n";
      str += this.localIndex[i].toString();
    }
    return str;
  }
};


/**
 *  Returns a string representation of the XMLList by calling the
 *  <code>toXMLString()</code> method for each XML object in the XMLList.
 *  If the <code>prettyPrinting</code> property of the <code>XML</code>
 *  class is set to <code>true</code>, then the results for each XML object
 *  in the XMLList are separated by the return character.
 *  Otherwise, if <code>prettyPrinting</code> is set to <code>false</code>,
 *  then the results are concatenated, without separating return
 *  characters.
 *
 *  <p>The <code>toXMLString()</code> method preserves the
 *  following in the returned string for an XML object that has simple content:
 *  the start tag, attributes, namespace declarations, and the end tag.
 *  Use the <code>toString()</code> method if you want to strip these from
 *  the returned string for XML objects with simple content.</p>
 *
 *  @asreturn The string representation of the XMLList.
 *
 *  @see XML#prettyPrinting
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {string}
 */
mx.collections.XMLListCollection.prototype.toXMLString = function() {
  if (!this.localIndex) {
    return this.source.toXMLString();
  } else {
    var /** @type {string} */ str = "";
    for (var /** @type {number} */ i = 0; i < this.localIndex.length; i++) {
      if (i > 0)
        str += "\n";
      str += org.apache.royale.utils.Language.string(this.localIndex[i].toXMLString());
    }
    return str;
  }
};


/**
 * XMLList doesn't allow you to do myList[funcName](arg) because
 * it will attempt to lookup a node named funcName instead (despite
 * the fact that it should be a callProperty()).  So instead
 * the above methods will build little functions that call the
 * right thing, but the looping logic has been factored into here.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @private
 * @param {Function} func
 * @return {XMLList}
 */
mx.collections.XMLListCollection.prototype.mx_collections_XMLListCollection_execXMLListFunction = function(func) {
  if (!this.localIndex) {
    return func(this.source);
  } else {
    var /** @type {number} */ length = (this.localIndex.length) >> 0;
    var /** @type {XMLList} */ ret = new XMLList();
    for (var /** @type {number} */ i = 0; i < length; i++) {
      var /** @type {Object} */ xml = this.localIndex[i];
      ret = ret.plus(func(xml));
    }
    return ret;
  }
};


mx.collections.XMLListCollection.prototype.get__source = function() {
  return this.list ? org.apache.royale.utils.Language.as(this.list, mx.collections.XMLListAdapter, true).source : null;
};


mx.collections.XMLListCollection.prototype.set__source = function(s) {
  if (this.list)
    org.apache.royale.utils.Language.as(this.list, mx.collections.XMLListAdapter, true).source = null;
  this.list = new mx.collections.XMLListAdapter(s);
};


Object.defineProperties(mx.collections.XMLListCollection.prototype, /** @lends {mx.collections.XMLListCollection.prototype} */ {
/**
  * @export
  * @type {XMLList} */
source: {
get: mx.collections.XMLListCollection.prototype.get__source,
set: mx.collections.XMLListCollection.prototype.set__source}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.collections.XMLListCollection.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'XMLListCollection', qName: 'mx.collections.XMLListCollection', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.collections.XMLListCollection.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'source': { type: 'XMLList', access: 'readwrite', declaredBy: 'mx.collections.XMLListCollection', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'listChanged' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'XMLListCollection': { type: '', declaredBy: 'mx.collections.XMLListCollection', parameters: function () { return [ 'XMLList', true ]; }},
        'attribute': { type: 'XMLList', declaredBy: 'mx.collections.XMLListCollection', parameters: function () { return [ 'Object', false ]; }},
        'attributes': { type: 'XMLList', declaredBy: 'mx.collections.XMLListCollection'},
        'child': { type: 'XMLList', declaredBy: 'mx.collections.XMLListCollection', parameters: function () { return [ 'Object', false ]; }},
        'children': { type: 'XMLList', declaredBy: 'mx.collections.XMLListCollection'},
        'copy': { type: 'XMLList', declaredBy: 'mx.collections.XMLListCollection'},
        'descendants': { type: 'XMLList', declaredBy: 'mx.collections.XMLListCollection', parameters: function () { return [ 'Object', true ]; }},
        'elements': { type: 'XMLList', declaredBy: 'mx.collections.XMLListCollection', parameters: function () { return [ 'String', true ]; }},
        'text': { type: 'XMLList', declaredBy: 'mx.collections.XMLListCollection'},
        'toString': { type: 'String', declaredBy: 'mx.collections.XMLListCollection'},
        'toXMLString': { type: 'String', declaredBy: 'mx.collections.XMLListCollection'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.collections.XMLListCollection.prototype.ROYALE_COMPILE_FLAGS = 26;