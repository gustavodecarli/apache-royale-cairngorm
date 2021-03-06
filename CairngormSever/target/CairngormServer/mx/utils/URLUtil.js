/**
 * Generated by Apache Royale Compiler from mx/utils/URLUtil.as
 * mx.utils.URLUtil
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.URLUtil');
/* Royale Dependency List: mx.messaging.config.LoaderConfig,mx.utils.StringUtil,org.apache.royale.utils.Language,XML*/




/**
 *  @asprivate
 * @constructor
 */
mx.utils.URLUtil = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.URLUtil', mx.utils.URLUtil);


/**
 * @private
 * @const
 * @type {string}
 */
mx.utils.URLUtil.SQUARE_BRACKET_LEFT = "]";


/**
 * @private
 * @const
 * @type {string}
 */
mx.utils.URLUtil.SQUARE_BRACKET_RIGHT = "[";


/**
 * @private
 * @const
 * @type {string}
 */
mx.utils.URLUtil.SQUARE_BRACKET_LEFT_ENCODED;


/**
 * @private
 * @const
 * @type {string}
 */
mx.utils.URLUtil.SQUARE_BRACKET_RIGHT_ENCODED;


/**
 *  Returns the domain and port information from the specified URL.
 *  
 *  @asparam url The URL to analyze.
 *  @asreturn The server name and port of the specified URL.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} url
 * @return {string}
 */
mx.utils.URLUtil.getServerNameWithPort = function(url) {
  var /** @type {number} */ start = (url.indexOf("/") + 2) >> 0;
  var /** @type {number} */ length = (url.indexOf("/", start)) >> 0;
  return length == -1 ? url.substring(start) : url.substring(start, length);
};


/**
 *  Returns the server name from the specified URL.
 *  
 *  @asparam url The URL to analyze.
 *  @asreturn The server name of the specified URL.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} url
 * @return {string}
 */
mx.utils.URLUtil.getServerName = function(url) {
  var /** @type {string} */ sp = mx.utils.URLUtil.getServerNameWithPort(url);
  var /** @type {number} */ delim = mx.utils.URLUtil.indexOfLeftSquareBracket(sp);
  delim = ((delim > -1) ? sp.indexOf(":", delim) : sp.indexOf(":")) >> 0;
  if (delim > 0)
    sp = sp.substring(0, delim);
  return sp;
};


/**
 *  Returns the port number from the specified URL.
 *  
 *  @asparam url The URL to analyze.
 *  @asreturn The port number of the specified URL.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} url
 * @return {number}
 */
mx.utils.URLUtil.getPort = function(url) {
  var /** @type {string} */ sp = mx.utils.URLUtil.getServerNameWithPort(url);
  var /** @type {number} */ delim = mx.utils.URLUtil.indexOfLeftSquareBracket(sp);
  delim = ((delim > -1) ? sp.indexOf(":", delim) : sp.indexOf(":")) >> 0;
  var /** @type {number} */ port = 0;
  if (delim > 0) {
    var /** @type {number} */ p = Number(sp.substring(delim + 1));
    if (!isNaN(p))
      port = (org.apache.royale.utils.Language._int(p)) >>> 0;
  }
  return port;
};


/**
 *  Converts a potentially relative URL to a fully-qualified URL.
 *  If the URL is not relative, it is returned as is.
 *  If the URL starts with a slash, the host and port
 *  from the root URL are prepended.
 *  Otherwise, the host, port, and path are prepended.
 *
 *  @asparam rootURL URL used to resolve the URL specified by the <code>url</code> parameter, if <code>url</code> is relative.
 *  @asparam url URL to convert.
 *
 *  @asreturn Fully-qualified URL.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} rootURL
 * @param {string} url
 * @return {string}
 */
mx.utils.URLUtil.getFullURL = function(rootURL, url) {
  if (url != null && !mx.utils.URLUtil.isHttpURL(url)) {
    if (url.indexOf("./") == 0) {
      url = url.substring(2);
    }
    if (mx.utils.URLUtil.isHttpURL(rootURL)) {
      var /** @type {number} */ slashPos;
      if (url.charAt(0) == '/') {
        slashPos = rootURL.indexOf("/", 8);
        if (slashPos == -1)
          slashPos = rootURL.length;
      } else {
        slashPos = rootURL.lastIndexOf("/") + 1;
        if (slashPos <= 8) {
          rootURL += "/";
          slashPos = rootURL.length;
        }
      }
      if (slashPos > 0)
        url = rootURL.substring(0, slashPos) + url;
    }
  }
  return url;
};


/**
 *  Determines if the URL uses the HTTP, HTTPS, or RTMP protocol. 
 *
 *  @asparam url The URL to analyze.
 * 
 *  @asreturn <code>true</code> if the URL starts with "http://", "https://", or "rtmp://".
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} url
 * @return {boolean}
 */
mx.utils.URLUtil.isHttpURL = function(url) {
  return url != null && (url.indexOf("http://") == 0 || url.indexOf("https://") == 0);
};


/**
 *  Determines if the URL uses the secure HTTPS protocol. 
 *
 *  @asparam url The URL to analyze.
 * 
 *  @asreturn <code>true</code> if the URL starts with "https://".
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} url
 * @return {boolean}
 */
mx.utils.URLUtil.isHttpsURL = function(url) {
  return url != null && url.indexOf("https://") == 0;
};


/**
 *  Returns the protocol section of the specified URL.
 *  The following examples show what is returned based on different URLs:
 *  
 *  <pre>
 *  getProtocol("https://localhost:2700/") returns "https"
 *  getProtocol("rtmp://www.myCompany.com/myMainDirectory/groupChatApp/HelpDesk") returns "rtmp"
 *  getProtocol("rtmpt:/sharedWhiteboardApp/June2002") returns "rtmpt"
 *  getProtocol("rtmp::1234/chatApp/room_name") returns "rtmp"
 *  </pre>
 *
 *  @asparam url String containing the URL to parse.
 *
 *  @asreturn The protocol or an empty String if no protocol is specified.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} url
 * @return {string}
 */
mx.utils.URLUtil.getProtocol = function(url) {
  var /** @type {number} */ slash = (url.indexOf("/")) >> 0;
  var /** @type {number} */ indx = (url.indexOf(":/")) >> 0;
  if (indx > -1 && indx < slash) {
    return url.substring(0, indx);
  } else {
    indx = (url.indexOf("::")) >> 0;
    if (indx > -1 && indx < slash)
      return url.substring(0, indx);
  }
  return "";
};


/**
 *  Replaces the protocol of the
 *  specified URI with the given protocol.
 *
 *  @asparam uri String containing the URI in which the protocol
 *  needs to be replaced.
 *
 *  @asparam newProtocol String containing the new protocol to use.
 *
 *  @asreturn The URI with the protocol replaced,
 *  or an empty String if the URI does not contain a protocol.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} uri
 * @param {string} newProtocol
 * @return {string}
 */
mx.utils.URLUtil.replaceProtocol = function(uri, newProtocol) {
  return uri.replace(mx.utils.URLUtil.getProtocol(uri), newProtocol);
};


/**
 *  Returns a new String with the port replaced with the specified port.
 *  If there is no port in the specified URI, the port is inserted.
 *  This method expects that a protocol has been specified within the URI.
 *
 *  @asparam uri String containing the URI in which the port is replaced.
 *  @asparam newPort uint containing the new port to subsitute.
 *
 *  @asreturn The URI with the new port.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} uri
 * @param {number} newPort
 * @return {string}
 */
mx.utils.URLUtil.replacePort = function(uri, newPort) {
  var /** @type {number} */ portEnd = 0;
  var /** @type {string} */ result = "";
  var /** @type {number} */ indx = (uri.indexOf("]")) >> 0;
  if (indx == -1)
    indx = (uri.indexOf(":")) >> 0;
  var /** @type {number} */ portStart = (uri.indexOf(":", indx + 1)) >> 0;
  //var /** @type {number} */ portEnd = 0;
  if (portStart > -1) {
    portStart++;
    portEnd = (uri.indexOf("/", portStart)) >> 0;
    result = uri.substring(0, portStart) + newPort.toString() + uri.substring(portEnd, uri.length);
  } else {
    portEnd = (uri.indexOf("/", indx)) >> 0;
    if (portEnd > -1) {
      if (uri.charAt(portEnd + 1) == "/")
        portEnd = (uri.indexOf("/", portEnd + 2)) >> 0;
      if (portEnd > 0) {
        result = uri.substring(0, portEnd) + ":" + newPort.toString() + uri.substring(portEnd, uri.length);
      } else {
        result = uri + ":" + newPort.toString();
      }
    } else {
      result = uri + ":" + newPort.toString();
    }
  }
  return result;
};


/**
 *  Returns a new String with the port and server tokens replaced with
 *  the port and server from the currently running application.
 *
 *  @asparam url String containing the <code>SERVER_NAME_TOKEN</code> and/or <code>SERVER_NAME_PORT</code>
 *  which should be replaced by the port and server from the application.
 *
 *  @asreturn The URI with the port and server replaced.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} url
 * @return {string}
 */
mx.utils.URLUtil.replaceTokens = function(url) {
  var /** @type {string} */ loaderURL = mx.messaging.config.LoaderConfig["url"] == null ? "" : mx.messaging.config.LoaderConfig["url"];
  if (url.indexOf(mx.utils.URLUtil.SERVER_NAME_TOKEN) > 0) {
    loaderURL = mx.utils.URLUtil.replaceEncodedSquareBrackets(loaderURL);
    var /** @type {string} */ loaderProtocol = mx.utils.URLUtil.getProtocol(loaderURL);
    var /** @type {string} */ loaderServerName = "localhost";
    if (loaderProtocol.toLowerCase() != "file")
      loaderServerName = mx.utils.URLUtil.getServerName(loaderURL);
    url = url.replace(mx.utils.URLUtil.SERVER_NAME_REGEX, loaderServerName);
  }
  var /** @type {number} */ portToken = (url.indexOf(mx.utils.URLUtil.SERVER_PORT_TOKEN)) >> 0;
  if (portToken > 0) {
    var /** @type {number} */ loaderPort = mx.utils.URLUtil.getPort(loaderURL);
    if (loaderPort > 0) {
      url = url.replace(mx.utils.URLUtil.SERVER_PORT_REGEX, loaderPort);
    } else {
      if (url.charAt(portToken - 1) == ":")
        url = url.substring(0, portToken - 1) + url.substring(portToken);
      url = url.replace(mx.utils.URLUtil.SERVER_PORT_REGEX, "");
    }
  }
  if (url.indexOf(mx.utils.URLUtil.CONTEXT_ROOT_TOKEN) > 0) {
    var /** @type {string} */ contextRoot = mx.messaging.config.LoaderConfig["contextRoot"];
    url = url.replace(mx.utils.URLUtil.CONTEXT_ROOT_REGEX, contextRoot);
  }
  return url;
};


/**
 * Tests whether two URI Strings are equivalent, ignoring case and
 * differences in trailing slashes.
 * 
 *  @asparam uri1 The first URI to compare.
 *  @asparam uri2 The second URI to compare.
 *  
 *  @asreturn <code>true</code> if the URIs are equal. Otherwise, <code>false</code>.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} uri1
 * @param {string} uri2
 * @return {boolean}
 */
mx.utils.URLUtil.urisEqual = function(uri1, uri2) {
  if (uri1 != null && uri2 != null) {
    uri1 = mx.utils.StringUtil.trim(uri1).toLowerCase();
    uri2 = mx.utils.StringUtil.trim(uri2).toLowerCase();
    if (uri1.charAt(uri1.length - 1) != "/")
      uri1 = uri1 + "/";
    if (uri2.charAt(uri2.length - 1) != "/")
      uri2 = uri2 + "/";
  }
  return uri1 == uri2;
};


/**
 *  Given a url, determines whether the url contains the server.name and
 *  server.port tokens.
 *
 *  @asparam url A url string. 
 * 
 *  @asreturn <code>true</code> if the url contains server.name and server.port tokens.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Flex 4
 * @export
 * @param {string} url
 * @return {boolean}
 */
mx.utils.URLUtil.hasTokens = function(url) {
  if (url == null || url == "")
    return false;
  if (url.indexOf(mx.utils.URLUtil.SERVER_NAME_TOKEN) > 0)
    return true;
  if (url.indexOf(mx.utils.URLUtil.SERVER_PORT_TOKEN) > 0)
    return true;
  return false;
};


/**
 * If the <code>LoaderConfig.url</code> property is not available, the <code>replaceTokens()</code> method will not 
 * replace the server name and port properties properly.
 * 
 * @asreturn <code>true</code> if the <code>LoaderConfig.url</code> property is not available. Otherwise, <code>false</code>.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {boolean}
 */
mx.utils.URLUtil.hasUnresolvableTokens = function() {
  return mx.messaging.config.LoaderConfig["url"] != null;
};


/**
 * @export
 * @const
 * @type {string}
 */
mx.utils.URLUtil.SERVER_NAME_TOKEN = "{server.name}";


/**
 * @export
 * @const
 * @type {string}
 */
mx.utils.URLUtil.SERVER_PORT_TOKEN = "{server.port}";


/**
 * @export
 * @const
 * @type {string}
 */
mx.utils.URLUtil.CONTEXT_ROOT_TOKEN = "{context.root}";


/**
 *  Enumerates an object's dynamic properties (by using a <code>for..in</code> loop)
 *  and returns a String. You typically use this method to convert an ActionScript object to a String that you then append to the end of a URL.
 *  By default, invalid URL characters are URL-encoded (converted to the <code>%XX</code> format).
 *
 *  <p>For example:
 *  <pre>
 *  var o:Object = { name: "Alex", age: 21 };
 *  var s:String = URLUtil.objectToString(o,";",true);
 *  trace(s);
 *  </pre>
 *  Prints "name=Alex;age=21" to the trace log.
 *  </p>
 *  
 *  @asparam object The object to convert to a String.
 *  @asparam separator The character that separates each of the object's <code>property:value</code> pair in the String.
 *  @asparam encodeURL Whether or not to URL-encode the String.
 *  
 *  @asreturn The object that was passed to the method.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} object
 * @param {string=} separator
 * @param {boolean=} encodeURL
 * @return {string}
 */
mx.utils.URLUtil.objectToString = function(object, separator, encodeURL) {
  separator = typeof separator !== 'undefined' ? separator : ';';
  encodeURL = typeof encodeURL !== 'undefined' ? encodeURL : true;
  var /** @type {string} */ s = mx.utils.URLUtil.internalObjectToString(object, separator, null, encodeURL);
  return s;
};


/**
 * @private
 * @param {string} value
 * @return {number}
 */
mx.utils.URLUtil.indexOfLeftSquareBracket = function(value) {
  var /** @type {number} */ delim = (value.indexOf(mx.utils.URLUtil.SQUARE_BRACKET_LEFT)) >> 0;
  if (delim == -1)
    delim = (value.indexOf(mx.utils.URLUtil.SQUARE_BRACKET_LEFT_ENCODED)) >> 0;
  return delim;
};


/**
 * @private
 * @param {Object} object
 * @param {string} separator
 * @param {string} prefix
 * @param {boolean} encodeURL
 * @return {string}
 */
mx.utils.URLUtil.internalObjectToString = function(object, separator, prefix, encodeURL) {
  var /** @type {string} */ s = "";
  var /** @type {boolean} */ first = true;
  for (var /** @type {string} */ p in object) {
    if (first) {
      first = false;
    }
    else
      s += separator;
    var /** @type {Object} */ value = object[p];
    var /** @type {string} */ name = prefix ? prefix + "." + p : p;
    if (encodeURL)
      name = encodeURIComponent(name);
    if (org.apache.royale.utils.Language.is(value, String)) {
      s += name + '=' + (encodeURL ? encodeURIComponent(org.apache.royale.utils.Language.as(value, String)) : value);
    } else if (org.apache.royale.utils.Language.is(value, Number)) {
      value = value.toString();
      if (encodeURL)
        value = encodeURIComponent(org.apache.royale.utils.Language.as(value, String));
      s += name + '=' + value;
    } else if (org.apache.royale.utils.Language.is(value, Boolean)) {
      s += name + '=' + (value ? "true" : "false");
    } else {
      if (org.apache.royale.utils.Language.is(value, Array)) {
        s += mx.utils.URLUtil.internalArrayToString(org.apache.royale.utils.Language.as(value, Array), separator, name, encodeURL);
      } else {
        s += mx.utils.URLUtil.internalObjectToString(value, separator, name, encodeURL);
      }
    }
  }
  return s;
};


/**
 * @private
 * @param {string} value
 * @return {string}
 */
mx.utils.URLUtil.replaceEncodedSquareBrackets = function(value) {
  var /** @type {number} */ rightIndex = (value.indexOf(mx.utils.URLUtil.SQUARE_BRACKET_RIGHT_ENCODED)) >> 0;
  if (rightIndex > -1) {
    value = value.replace(mx.utils.URLUtil.SQUARE_BRACKET_RIGHT_ENCODED, mx.utils.URLUtil.SQUARE_BRACKET_RIGHT);
    var /** @type {number} */ leftIndex = (value.indexOf(mx.utils.URLUtil.SQUARE_BRACKET_LEFT_ENCODED)) >> 0;
    if (leftIndex > -1)
      value = value.replace(mx.utils.URLUtil.SQUARE_BRACKET_LEFT_ENCODED, mx.utils.URLUtil.SQUARE_BRACKET_LEFT);
  }
  return value;
};


/**
 * @private
 * @param {Array} array
 * @param {string} separator
 * @param {string} prefix
 * @param {boolean} encodeURL
 * @return {string}
 */
mx.utils.URLUtil.internalArrayToString = function(array, separator, prefix, encodeURL) {
  var /** @type {string} */ s = "";
  var /** @type {boolean} */ first = true;
  var /** @type {number} */ n = (array.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (first) {
      first = false;
    }
    else
      s += separator;
    var /** @type {Object} */ value = array[i];
    var /** @type {string} */ name = prefix + "." + i;
    if (encodeURL)
      name = encodeURIComponent(name);
    if (org.apache.royale.utils.Language.is(value, String)) {
      s += name + '=' + (encodeURL ? encodeURIComponent(org.apache.royale.utils.Language.as(value, String)) : value);
    } else if (org.apache.royale.utils.Language.is(value, Number)) {
      value = value.toString();
      if (encodeURL)
        value = encodeURIComponent(org.apache.royale.utils.Language.as(value, String));
      s += name + '=' + value;
    } else if (org.apache.royale.utils.Language.is(value, Boolean)) {
      s += name + '=' + (value ? "true" : "false");
    } else {
      if (org.apache.royale.utils.Language.is(value, Array)) {
        s += mx.utils.URLUtil.internalArrayToString(org.apache.royale.utils.Language.as(value, Array), separator, name, encodeURL);
      } else {
        s += mx.utils.URLUtil.internalObjectToString(value, separator, name, encodeURL);
      }
    }
  }
  return s;
};


/**
 *  Returns an object from a String. The String contains <code>name=value</code> pairs, which become dynamic properties
 *  of the returned object. These property pairs are separated by the specified <code>separator</code>.
 *  This method converts Numbers and Booleans, Arrays (defined by "[]"), 
 *  and sub-objects (defined by "{}"). By default, URL patterns of the format <code>%XX</code> are converted
 *  to the appropriate String character.
 *
 *  <p>For example:
 *  <pre>
 *  var s:String = "name=Alex;age=21";
 *  var o:Object = URLUtil.stringToObject(s, ";", true);
 *  </pre>
 *  
 *  Returns the object: <code>{ name: "Alex", age: 21 }</code>.
 *  </p>
 *  
 *  @asparam string The String to convert to an object.
 *  @asparam separator The character that separates <code>name=value</code> pairs in the String.
 *  @asparam decodeURL Whether or not to decode URL-encoded characters in the String.
 * 
 *  @asreturn The object containing properties and values extracted from the String passed to this method.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} string
 * @param {string=} separator
 * @param {boolean=} decodeURL
 * @return {Object}
 */
mx.utils.URLUtil.stringToObject = function(string, separator, decodeURL) {
  separator = typeof separator !== 'undefined' ? separator : ";";
  decodeURL = typeof decodeURL !== 'undefined' ? decodeURL : true;
  var /** @type {Object} */ o = {};
  var /** @type {Array} */ arr = string.split(separator);
  var /** @type {number} */ n = (arr.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Array} */ pieces = arr[i].split('=');
    var /** @type {string} */ name = org.apache.royale.utils.Language.string(pieces[0]);
    if (decodeURL)
      name = decodeURIComponent(name);
    var /** @type {Object} */ value = pieces[1];
    if (decodeURL)
      value = decodeURIComponent(org.apache.royale.utils.Language.as(value, String));
    if (value == "true")
      value = true;
    else if (value == "false")
      value = false; else {
      var /** @type {Object} */ temp = org.apache.royale.utils.Language._int(value);
      if (temp.toString() == value)
        value = temp; else {
        temp = Number(value);
        if (temp.toString() == value)
          value = temp;
      }
    }
    var /** @type {Object} */ obj = o;
    pieces = name.split('.');
    var /** @type {number} */ m = (pieces.length) >> 0;
    for (var /** @type {number} */ j = 0; j < m - 1; j++) {
      var /** @type {string} */ prop = org.apache.royale.utils.Language.string(pieces[j]);
      if (obj[prop] == null && j < m - 1) {
        var /** @type {string} */ subProp = org.apache.royale.utils.Language.string(pieces[j + 1]);
        var /** @type {Object} */ idx = org.apache.royale.utils.Language._int(subProp);
        if (idx.toString() == subProp)
          obj[prop] = [];
        else
          obj[prop] = {};
      }
      obj = obj[prop];
    }
    obj[pieces[j]] = value;
  }
  return o;
};


/**
 * @private
 * @const
 * @type {RegExp}
 */
mx.utils.URLUtil.SERVER_NAME_REGEX = new RegExp("\\{server.name\\}", "g");


/**
 * @private
 * @const
 * @type {RegExp}
 */
mx.utils.URLUtil.SERVER_PORT_REGEX = new RegExp("\\{server.port\\}", "g");


/**
 * @private
 * @const
 * @type {RegExp}
 */
mx.utils.URLUtil.CONTEXT_ROOT_REGEX = new RegExp("\\{context.root\\}", "g");

mx.utils.URLUtil.SQUARE_BRACKET_LEFT_ENCODED = encodeURIComponent(mx.utils.URLUtil.SQUARE_BRACKET_LEFT);
mx.utils.URLUtil.SQUARE_BRACKET_RIGHT_ENCODED = encodeURIComponent(mx.utils.URLUtil.SQUARE_BRACKET_RIGHT);




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.URLUtil.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'URLUtil', qName: 'mx.utils.URLUtil', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.URLUtil.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'URLUtil': { type: '', declaredBy: 'mx.utils.URLUtil'},
        '|getServerNameWithPort': { type: 'String', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ]; }},
        '|getServerName': { type: 'String', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ]; }},
        '|getPort': { type: 'uint', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ]; }},
        '|getFullURL': { type: 'String', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ,'String', false ]; }},
        '|isHttpURL': { type: 'Boolean', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ]; }},
        '|isHttpsURL': { type: 'Boolean', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ]; }},
        '|getProtocol': { type: 'String', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ]; }},
        '|replaceProtocol': { type: 'String', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ,'String', false ]; }},
        '|replacePort': { type: 'String', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ,'uint', false ]; }},
        '|replaceTokens': { type: 'String', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ]; }},
        '|urisEqual': { type: 'Boolean', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ,'String', false ]; }},
        '|hasTokens': { type: 'Boolean', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ]; }},
        '|hasUnresolvableTokens': { type: 'Boolean', declaredBy: 'mx.utils.URLUtil'},
        '|objectToString': { type: 'String', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'Object', false ,'String', true ,'Boolean', true ]; }},
        '|stringToObject': { type: 'Object', declaredBy: 'mx.utils.URLUtil', parameters: function () { return [ 'String', false ,'String', true ,'Boolean', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.URLUtil.prototype.ROYALE_COMPILE_FLAGS = 26;
