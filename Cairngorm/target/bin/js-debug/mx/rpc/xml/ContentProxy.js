/**
 * Generated by Apache Royale Compiler from mx/rpc/xml/ContentProxy.as
 * mx.rpc.xml.ContentProxy
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.xml.ContentProxy');
/* Royale Dependency List: mx.utils.ObjectProxy,mx.utils.ObjectUtil,mx.utils.object_proxy,org.apache.royale.reflection.getQualifiedClassName,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.utils.Proxy');



/**
 * @constructor
 * @extends {org.apache.royale.utils.Proxy}
 * @param {*=} content
 * @param {boolean=} makeObjectsBindable
 * @param {boolean=} isSimple
 */
mx.rpc.xml.ContentProxy = function(content, makeObjectsBindable, isSimple) {
  content = typeof content !== 'undefined' ? content : undefined;
  makeObjectsBindable = typeof makeObjectsBindable !== 'undefined' ? makeObjectsBindable : false;
  isSimple = typeof isSimple !== 'undefined' ? isSimple : true;
  mx.rpc.xml.ContentProxy.base(this, 'constructor');
  this.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__content = content;
  this.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__makeObjectsBindable = makeObjectsBindable;
  this.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__isSimple = isSimple;
};
goog.inherits(mx.rpc.xml.ContentProxy, org.apache.royale.utils.Proxy);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.xml.ContentProxy', mx.rpc.xml.ContentProxy);


/**
 * @export
 * @override
 */
mx.rpc.xml.ContentProxy.prototype.getProperty = function(name) {
  return this.mx_rpc_xml_ContentProxy_proxy_getProperty(name);
};


/**
 * @private
 * @param {string} name
 * @return {*}
 */
mx.rpc.xml.ContentProxy.prototype.mx_rpc_xml_ContentProxy_proxy_getProperty = function(name) {
  if (this.mx_rpc_xml_ContentProxy__content != null)
    return this.mx_rpc_xml_ContentProxy__content[name];
  else
    return undefined;
};


/**
 * @export
 * @override
 */
mx.rpc.xml.ContentProxy.prototype.callProperty = function(name, rest) {
  rest = Array.prototype.slice.call(arguments, 1);
  if (this.mx_rpc_xml_ContentProxy__content != null)
    return this.mx_rpc_xml_ContentProxy__content[name].apply(this.mx_rpc_xml_ContentProxy__content, rest);
  else
    return undefined;
};


/**
 * @export
 * @override
 */
mx.rpc.xml.ContentProxy.prototype.deleteProperty = function(name) {
  this.mx_rpc_xml_ContentProxy_proxy_deleteProperty(name);
};


/**
 * @private
 * @param {*} name
 * @return {boolean}
 */
mx.rpc.xml.ContentProxy.prototype.mx_rpc_xml_ContentProxy_proxy_deleteProperty = function(name) {
  var /** @type {boolean} */ deleted;
  if (!this.mx_rpc_xml_ContentProxy__isSimple && this.mx_rpc_xml_ContentProxy__content != null) {
    var /** @type {Object} */ oldVal = this.mx_rpc_xml_ContentProxy__content[name];
    deleted = delete this.mx_rpc_xml_ContentProxy__content[name];
  }
  return deleted;
};


/**
 * @export
 * @override
 */
mx.rpc.xml.ContentProxy.prototype.hasProperty = function(name) {
  return this.mx_rpc_xml_ContentProxy_proxy_hasProperty(name);
};


/**
 * @private
 * @param {*} name
 * @return {boolean}
 */
mx.rpc.xml.ContentProxy.prototype.mx_rpc_xml_ContentProxy_proxy_hasProperty = function(name) {
  var /** @type {boolean} */ hasProperty;
  if (this.mx_rpc_xml_ContentProxy__content != null) {
    hasProperty = (name in this.mx_rpc_xml_ContentProxy__content);
  }
  return hasProperty;
};


/**
 * @export
 * @override
 */
mx.rpc.xml.ContentProxy.prototype.setProperty = function(name, value) {
  this.mx_rpc_xml_ContentProxy_proxy_setProperty(name, value);
};


/**
 * @private
 * @param {string} name
 * @param {*} value
 */
mx.rpc.xml.ContentProxy.prototype.mx_rpc_xml_ContentProxy_proxy_setProperty = function(name, value) {
  var /** @type {*} */ oldContent;
  if (this.mx_rpc_xml_ContentProxy__isSimple) {
    oldContent = this.mx_rpc_xml_ContentProxy__content;
    if (oldContent !== value) {
      this.mx_rpc_xml_ContentProxy__content = value;
    }
  } else {
    if (this.mx_rpc_xml_ContentProxy__content == null)
      this.mx_rpc_xml_ContentProxy__content = this.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__createObject();
    oldContent = this.mx_rpc_xml_ContentProxy__content[name];
    if (oldContent !== value) {
      this.mx_rpc_xml_ContentProxy__content[name] = value;
    }
  }
};


/**
 * @export
 */
mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__setupPropertyList = function() {
  if (org.apache.royale.reflection.getQualifiedClassName(this.mx_rpc_xml_ContentProxy__content) == "Object") {
    this.mx_rpc_xml_ContentProxy__propertyList = [];
    for (var /** @type {string} */ prop in this.mx_rpc_xml_ContentProxy__content)
      this.mx_rpc_xml_ContentProxy__propertyList.push(prop);
  } else {
    this.mx_rpc_xml_ContentProxy__propertyList = mx.utils.ObjectUtil.getClassInfo(this.mx_rpc_xml_ContentProxy__content, null, {includeReadOnly:false, uris:["*"]}).properties;
  }
};


/**
 * @export
 * @return {*}
 */
mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__createObject = function() {
  if (mx.utils.object_proxy.this.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__makeObjectsBindable) {
    return new mx.utils.ObjectProxy();
  } else {
    return {};
  }
};


/**
 * @private
 * @type {*}
 */
mx.rpc.xml.ContentProxy.prototype.mx_rpc_xml_ContentProxy__content;


/**
 * @private
 * @type {boolean}
 */
mx.rpc.xml.ContentProxy.prototype.mx_rpc_xml_ContentProxy__isSimple = true;


/**
 * @private
 * @type {boolean}
 */
mx.rpc.xml.ContentProxy.prototype.mx_rpc_xml_ContentProxy__makeObjectsBindable;


/**
 * @private
 * @type {Array}
 */
mx.rpc.xml.ContentProxy.prototype.mx_rpc_xml_ContentProxy__propertyList;


mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__get__makeObjectsBindable = function() {
  return this.mx_rpc_xml_ContentProxy__makeObjectsBindable;
};


mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__set__makeObjectsBindable = function(value) {
  this.mx_rpc_xml_ContentProxy__makeObjectsBindable = value;
  if (value && !this.mx_rpc_xml_ContentProxy__isSimple && !org.apache.royale.utils.Language.is(this.mx_rpc_xml_ContentProxy__content, mx.utils.ObjectProxy)) {
    this.mx_rpc_xml_ContentProxy__content = new mx.utils.ObjectProxy(this.mx_rpc_xml_ContentProxy__content);
  }
};


mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__get__isSimple = function() {
  return this.mx_rpc_xml_ContentProxy__isSimple;
};


mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__set__isSimple = function(value) {
  this.mx_rpc_xml_ContentProxy__isSimple = value;
};


mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__get__content = function() {
  return this.mx_rpc_xml_ContentProxy__content;
};


mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__set__content = function(value) {
  if (org.apache.royale.utils.Language.is(value, mx.rpc.xml.ContentProxy))
    value = org.apache.royale.utils.Language.as(value, mx.rpc.xml.ContentProxy, true).http_$$www_adobe_com$2006$actionscript$flash$objectproxy__content;
  this.mx_rpc_xml_ContentProxy__content = value;
};


Object.defineProperties(mx.rpc.xml.ContentProxy.prototype, /** @lends {mx.rpc.xml.ContentProxy.prototype} */ {
/**
  * @export
  * @type {boolean} */
http_$$www_adobe_com$2006$actionscript$flash$objectproxy__makeObjectsBindable: {
get: mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__get__makeObjectsBindable,
set: mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__set__makeObjectsBindable},
/**
  * @export
  * @type {boolean} */
http_$$www_adobe_com$2006$actionscript$flash$objectproxy__isSimple: {
get: mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__get__isSimple,
set: mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__set__isSimple},
/**
  * @export
  * @type {*} */
http_$$www_adobe_com$2006$actionscript$flash$objectproxy__content: {
get: mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__get__content,
set: mx.rpc.xml.ContentProxy.prototype.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__set__content}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.xml.ContentProxy.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ContentProxy', qName: 'mx.rpc.xml.ContentProxy', kind: 'class', isDynamic: true}] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.xml.ContentProxy.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'http://www.adobe.com/2006/actionscript/flash/objectproxy::makeObjectsBindable': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.xml.ContentProxy'},
        'http://www.adobe.com/2006/actionscript/flash/objectproxy::isSimple': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.xml.ContentProxy'},
        'http://www.adobe.com/2006/actionscript/flash/objectproxy::content': { type: '*', access: 'readwrite', declaredBy: 'mx.rpc.xml.ContentProxy'}
      };
    },
    methods: function () {
      return {
        'ContentProxy': { type: '', declaredBy: 'mx.rpc.xml.ContentProxy', parameters: function () { return [ '*', true ,'Boolean', true ,'Boolean', true ]; }},
        'getProperty': { type: '*', declaredBy: 'mx.rpc.xml.ContentProxy', parameters: function () { return [ 'String', false ]; }},
        'callProperty': { type: '*', declaredBy: 'mx.rpc.xml.ContentProxy', parameters: function () { return [ '*', false ,'Array', false ]; }},
        'deleteProperty': { type: 'void', declaredBy: 'mx.rpc.xml.ContentProxy', parameters: function () { return [ 'String', false ]; }},
        'hasProperty': { type: 'Boolean', declaredBy: 'mx.rpc.xml.ContentProxy', parameters: function () { return [ 'String', false ]; }},
        'setProperty': { type: 'void', declaredBy: 'mx.rpc.xml.ContentProxy', parameters: function () { return [ 'String', false ,'*', false ]; }},
        'http://www.adobe.com/2006/actionscript/flash/objectproxy::setupPropertyList': { type: 'void', declaredBy: 'mx.rpc.xml.ContentProxy'},
        'http://www.adobe.com/2006/actionscript/flash/objectproxy::createObject': { type: '*', declaredBy: 'mx.rpc.xml.ContentProxy'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.xml.ContentProxy.prototype.ROYALE_COMPILE_FLAGS = 26;