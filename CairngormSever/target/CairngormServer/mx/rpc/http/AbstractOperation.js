/**
 * Generated by Apache Royale Compiler from mx/rpc/http/AbstractOperation.as
 * mx.rpc.http.AbstractOperation
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.http.AbstractOperation');
/* Royale Dependency List: XML,XMLList,mx.collections.ArrayCollection,mx.core.mx_internal,mx.logging.ILogger,mx.logging.Log,mx.messaging.ChannelSet,mx.messaging.channels.DirectHTTPChannel,mx.messaging.config.LoaderConfig,mx.messaging.errors.ArgumentError,mx.messaging.events.MessageEvent,mx.messaging.messages.AsyncMessage,mx.messaging.messages.HTTPRequestMessage,mx.messaging.messages.IMessage,mx.netmon.NetworkMonitor,mx.resources.IResourceManager,mx.resources.ResourceManager,mx.rpc.AbstractService,mx.rpc.AsyncDispatcher,mx.rpc.AsyncToken,mx.rpc.Fault,mx.rpc.events.FaultEvent,mx.rpc.http.SerializationFilter,mx.rpc.mxml.Concurrency,mx.rpc.xml.SimpleXMLDecoder,mx.utils.ObjectProxy,mx.utils.ObjectUtil,mx.utils.StringUtil,mx.utils.URLUtil,org.apache.royale.utils.Language*/

goog.require('mx.rpc.AbstractOperation');



/**
 *  Creates a new Operation. 
 * 
 *  @asparam service The object defining the type of service, such as 
 *  HTTPMultiService, WebService, or RemoteObject.
 *
 *  @asparam name The name of the service.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 
 *  Creates a new Operation. 
 *
 *  @asparam service The object defining the type of service, such as 
 *  HTTPMultiService, WebService, or RemoteObject.
 *
 *  @asparam name The name of the service.
 * @constructor
 * @extends {mx.rpc.AbstractOperation}
 * @param {mx.rpc.AbstractService=} service
 * @param {string=} name
 */
mx.rpc.http.AbstractOperation = function(service, name) {
  service = typeof service !== 'undefined' ? service : null;
  name = typeof name !== 'undefined' ? name : null;
  
  this.mx_rpc_http_AbstractOperation__resultFormat = mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_OBJECT;
  this.mx_rpc_http_AbstractOperation__request = {};
  this.mx_rpc_http_AbstractOperation__headers = {};
  this.mx_rpc_http_AbstractOperation__contentType = mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__CONTENT_TYPE_FORM;
  this.http_$$www_adobe_com$2006$flex$mx$internal__resourceManager = mx.resources.ResourceManager.getInstance();
  this.mx_rpc_http_AbstractOperation__method = mx.messaging.messages.HTTPRequestMessage.GET_METHOD;
  mx.rpc.http.AbstractOperation.base(this, 'constructor', service, name);
  this.http_$$www_adobe_com$2006$flex$mx$internal___log = mx.logging.Log.getLogger("mx.rpc.http.HTTPService");
  this.concurrency = mx.rpc.mxml.Concurrency.MULTIPLE;
};
goog.inherits(mx.rpc.http.AbstractOperation, mx.rpc.AbstractOperation);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.http.AbstractOperation', mx.rpc.http.AbstractOperation);


/**
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_E4X = "e4x";


/**
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_FLASHVARS = "flashvars";


/**
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_OBJECT = "object";


/**
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_ARRAY = "array";


/**
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_TEXT = "text";


/**
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__CONTENT_TYPE_XML = "application/xml";


/**
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__CONTENT_TYPE_FORM = "application/x-www-form-urlencoded";


/**
 * @private
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.ERROR_URL_REQUIRED = "Client.URLRequired";


/**
 * @private
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.ERROR_DECODING = "Client.CouldNotDecode";


/**
 * @private
 * @const
 * @type {string}
 */
mx.rpc.http.AbstractOperation.ERROR_ENCODING = "Client.CouldNotEncode";


/**
 * @private
 * @type {Array}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__argumentNames;


/**
 * @private
 * @type {number}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__requestTimeout = -1;


/**
 * @private
 * @type {string}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__resultFormat;


/**
 * @private
 * @type {mx.rpc.http.SerializationFilter}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__serializationFilter;


/** 
 *  Returns the serialization filter.
 *  Subclasses can override this method to control 
 *  the retrieval of the HTTP request headers. 
 *
 *  @asreturn The serialization filter.
 * @export
 * @return {mx.rpc.http.SerializationFilter}
 */
mx.rpc.http.AbstractOperation.prototype.getSerializationFilter = function() {
  return this.serializationFilter;
};


/**
 * @private
 * @type {Object}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__request;


/**
 * @private
 * @type {string}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__url;


/**
 * @private
 * @type {boolean}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__useProxy = false;


/**
 * @private
 * @type {Function}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__xmlDecode;


/**
 * @private
 * @type {Function}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__xmlEncode;


/**
 * @private
 * @type {Object}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__headers;


/**
 * @private
 * @type {string}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__contentType;


/**
 * @type {string}
 */
mx.rpc.http.AbstractOperation.prototype.http_$$www_adobe_com$2006$flex$mx$internal___rootURL;


/**
 * @asprivate
 * @export
 * @override
 */
mx.rpc.http.AbstractOperation.prototype.cancel = function(id) {
  id = typeof id !== 'undefined' ? id : null;
  return mx.rpc.http.AbstractOperation.superClass_.cancel.apply(this, [ id] );
};


/**
 * @export
 * @param {Object} parameters
 * @return {mx.rpc.AsyncToken}
 */
mx.rpc.http.AbstractOperation.prototype.sendBody = function(parameters) {
  var /** @type {mx.rpc.http.SerializationFilter} */ filter = this.getSerializationFilter();
  var /** @type {Object} */ paramsToSend;
  var /** @type {mx.rpc.AsyncToken} */ token;
  var /** @type {mx.rpc.Fault} */ fault;
  var /** @type {mx.rpc.events.FaultEvent} */ faultEvent;
  var /** @type {string} */ msg;
  if (mx.rpc.mxml.Concurrency.SINGLE == this.concurrency && this.http_$$www_adobe_com$2006$flex$mx$internal__activeCalls.hasActiveCalls()) {
    token = new mx.rpc.AsyncToken(null);
    var /** @type {string} */ m = this.http_$$www_adobe_com$2006$flex$mx$internal__resourceManager.getString("rpc", "pendingCallExists");
    fault = new mx.rpc.Fault("ConcurrencyError", m);
    faultEvent = mx.rpc.events.FaultEvent.createEvent(fault, token);
    new mx.rpc.AsyncDispatcher(org.apache.royale.utils.Language.closure(this.http_$$www_adobe_com$2006$flex$mx$internal__dispatchRpcEvent, this, 'http://www.adobe.com/2006/flex/mx/internal::dispatchRpcEvent'), [faultEvent], 10);
    return token;
  }
  var /** @type {string} */ ctype = this.contentType;
  var /** @type {string} */ urlToUse = this.url;
  if (urlToUse && urlToUse != '') {
    urlToUse = mx.utils.URLUtil.getFullURL(this.rootURL, urlToUse);
  }
  if (filter != null) {
    ctype = filter.getRequestContentType(this, parameters, ctype);
    urlToUse = filter.serializeURL(this, parameters, urlToUse);
    parameters = filter.serializeBody(this, parameters);
  }
  if (ctype == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__CONTENT_TYPE_XML) {
    if (org.apache.royale.utils.Language.is(parameters, String) && this.xmlEncode == null) {
      paramsToSend = org.apache.royale.utils.Language.as(parameters, String);
    } else {
      paramsToSend = parameters.toXMLString();
    }
  } else if (ctype == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__CONTENT_TYPE_FORM) {
    paramsToSend = {};
    var /** @type {Object} */ val;
    if (typeof(parameters) == "object") {
      var /** @type {Object} */ classinfo = mx.utils.ObjectUtil.getClassInfo(parameters);
      var foreachiter0_target = classinfo.properties;
      for (var foreachiter0 in foreachiter0_target) 
      {
      var p = foreachiter0_target[foreachiter0];
      {
        val = parameters[p];
        if (val != null) {
          if (org.apache.royale.utils.Language.is(val, Array))
            paramsToSend[p] = val;
          else
            paramsToSend[p] = val.toString();
        }
      }}
      
    } else {
      paramsToSend = parameters;
    }
  } else {
    paramsToSend = parameters;
  }
  var /** @type {mx.messaging.messages.HTTPRequestMessage} */ message = new mx.messaging.messages.HTTPRequestMessage();
  if (this.useProxy) {
    if (urlToUse && urlToUse != '') {
      message.url = urlToUse;
    }
    if (mx.netmon.NetworkMonitor.isMonitoring()) {
      message.recordHeaders = true;
    }
  } else {
    if (!urlToUse) {
      token = new mx.rpc.AsyncToken(null);
      msg = this.http_$$www_adobe_com$2006$flex$mx$internal__resourceManager.getString("rpc", "urlNotSpecified");
      fault = new mx.rpc.Fault(mx.rpc.http.AbstractOperation.ERROR_URL_REQUIRED, msg);
      faultEvent = mx.rpc.events.FaultEvent.createEvent(fault, token);
      new mx.rpc.AsyncDispatcher(org.apache.royale.utils.Language.closure(this.http_$$www_adobe_com$2006$flex$mx$internal__dispatchRpcEvent, this, 'http://www.adobe.com/2006/flex/mx/internal::dispatchRpcEvent'), [faultEvent], 10);
      return token;
    }
    if (!this.useProxy) {
      var /** @type {mx.messaging.ChannelSet} */ dcs = this.mx_rpc_http_AbstractOperation_getDirectChannelSet();
      if (dcs != this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.channelSet)
        this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.channelSet = dcs;
    }
    if (mx.netmon.NetworkMonitor.isMonitoring()) {
      message.recordHeaders = true;
    }
    message.url = urlToUse;
  }
  message.contentType = ctype;
  message.method = this.method.toUpperCase();
  if (ctype == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__CONTENT_TYPE_XML && message.method == mx.messaging.messages.HTTPRequestMessage.GET_METHOD)
    message.method = mx.messaging.messages.HTTPRequestMessage.POST_METHOD;
  message.body = paramsToSend;
  message.httpHeaders = this.getHeaders();
  return this.http_$$www_adobe_com$2006$flex$mx$internal__invoke(message);
};


/**
 *  Returns the HTTP request headers.
 *  Subclasses can override this method to control 
 *  the retrieval of the HTTP request headers. 
 *
 *  @asreturn The HTTP request headers.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {Object}
 */
mx.rpc.http.AbstractOperation.prototype.getHeaders = function() {
  return this.headers;
};


/**
 *  @asprivate
 * @export
 * @override
 */
mx.rpc.http.AbstractOperation.prototype.http_$$www_adobe_com$2006$flex$mx$internal__processResult = function(message, token) {
  var /** @type {Object} */ body = message.body;
  this.http_$$www_adobe_com$2006$flex$mx$internal___log.info("Decoding HTTPService response");
  this.http_$$www_adobe_com$2006$flex$mx$internal___log.debug("Processing HTTPService response message:\n{0}", message);
  var /** @type {mx.rpc.http.SerializationFilter} */ filter = this.getSerializationFilter();
  if (filter != null)
    body = filter.deserializeResult(this, body);
  if ((body == null) || ((body != null) && org.apache.royale.utils.Language.is(body, String) && (mx.utils.StringUtil.trim(String(body)) == ""))) {
    this.http_$$www_adobe_com$2006$flex$mx$internal___result = body;
    return true;
  } else if (org.apache.royale.utils.Language.is(body, String)) {
    if (this.resultFormat == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_OBJECT || this.resultFormat == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_ARRAY) {
      var /** @type {Object} */ oldSettings = XML.settings();
      try {
        XML.setSettings(XML.defaultSettings());
        var /** @type {XMLList} */ temp = new XMLList(String(body));
        var /** @type {XML} */ tmp = new XML('<root>' + temp.toXMLString() + '</root>');
      } catch (parseError) {
        XML.setSettings(oldSettings);
        var /** @type {mx.rpc.Fault} */ fault = new mx.rpc.Fault(mx.rpc.http.AbstractOperation.ERROR_DECODING, parseError.message);
        this.http_$$www_adobe_com$2006$flex$mx$internal__dispatchRpcEvent(mx.rpc.events.FaultEvent.createEvent(fault, token, message));
        return false;
      }
      XML.setSettings(oldSettings);
      if (this.resultFormat == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_OBJECT || this.resultFormat == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_ARRAY) {
        var /** @type {Object} */ decoded;
        var /** @type {string} */ msg;
        if (this.xmlDecode != null) {
          decoded = this.xmlDecode(tmp);
          if (decoded == null) {
            msg = 'XMLDecode returned null';
            var /** @type {mx.rpc.Fault} */ fault1 = new mx.rpc.Fault(mx.rpc.http.AbstractOperation.ERROR_DECODING, msg);
            this.http_$$www_adobe_com$2006$flex$mx$internal__dispatchRpcEvent(mx.rpc.events.FaultEvent.createEvent(fault1, token, message));
          }
        } else {
          var /** @type {mx.rpc.xml.SimpleXMLDecoder} */ decoder = new mx.rpc.xml.SimpleXMLDecoder(this.makeObjectsBindable);
          decoded = decoder.decodeXML(tmp);
          if (decoded == null) {
            msg = "defaultDecoderFailed";
            var /** @type {mx.rpc.Fault} */ fault2 = new mx.rpc.Fault(mx.rpc.http.AbstractOperation.ERROR_DECODING, msg);
            this.http_$$www_adobe_com$2006$flex$mx$internal__dispatchRpcEvent(mx.rpc.events.FaultEvent.createEvent(fault2, token, message));
          }
        }
        if (decoded == null) {
          return false;
        }
        if (this.makeObjectsBindable && false) {
          decoded = new mx.utils.ObjectProxy(decoded);
        } else {
          decoded = decoded;
        }
        if (this.resultFormat == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_ARRAY) {
          decoded = this.mx_rpc_http_AbstractOperation_decodeArray(decoded);
        }
        this.http_$$www_adobe_com$2006$flex$mx$internal___result = decoded;
      }
    } else if (this.resultFormat == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_E4X) {
      try {
        this.http_$$www_adobe_com$2006$flex$mx$internal___result = new XML(String(body));
      } catch (error) {
        var /** @type {mx.rpc.Fault} */ fault3 = new mx.rpc.Fault(mx.rpc.http.AbstractOperation.ERROR_DECODING, error.message);
        this.http_$$www_adobe_com$2006$flex$mx$internal__dispatchRpcEvent(mx.rpc.events.FaultEvent.createEvent(fault3, token, message));
        return false;
      }
    } else if (this.resultFormat == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_FLASHVARS) {
      this.http_$$www_adobe_com$2006$flex$mx$internal___result = this.mx_rpc_http_AbstractOperation_decodeParameterString(String(body));
    } else {
      this.http_$$www_adobe_com$2006$flex$mx$internal___result = body;
    }
  } else {
    if (this.resultFormat == mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_ARRAY) {
      body = this.mx_rpc_http_AbstractOperation_decodeArray(body);
    }
    this.http_$$www_adobe_com$2006$flex$mx$internal___result = body;
  }
  return true;
};


/**
 * @export
 * @override
 */
mx.rpc.http.AbstractOperation.prototype.http_$$www_adobe_com$2006$flex$mx$internal__invoke = function(message, token) {
  token = typeof token !== 'undefined' ? token : null;
  return mx.rpc.http.AbstractOperation.superClass_.http_$$www_adobe_com$2006$flex$mx$internal__invoke.apply(this, [ message, token] );
};


/**
 * @export
 * @override
 */
mx.rpc.http.AbstractOperation.prototype.http_$$www_adobe_com$2006$flex$mx$internal__preHandle = function(event) {
  var /** @type {boolean} */ wasLastCall = this.http_$$www_adobe_com$2006$flex$mx$internal__activeCalls.wasLastCall(org.apache.royale.utils.Language.as(event.message, mx.messaging.messages.AsyncMessage, true).correlationId);
  var /** @type {mx.rpc.AsyncToken} */ token = mx.rpc.http.AbstractOperation.superClass_.http_$$www_adobe_com$2006$flex$mx$internal__preHandle.apply(this, [ event] );
  if (mx.rpc.mxml.Concurrency.LAST == this.concurrency && !wasLastCall) {
    return null;
  }
  return token;
};


/**
 * @private
 * @param {Object} o
 * @return {Object}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation_decodeArray = function(o) {
  var /** @type {Array} */ a;
  if (org.apache.royale.utils.Language.is(o, Array)) {
    a = org.apache.royale.utils.Language.as(o, Array);
  } else if (org.apache.royale.utils.Language.is(o, mx.collections.ArrayCollection)) {
    return o;
  } else {
    a = [];
    a.push(o);
  }
  if (this.makeObjectsBindable) {
    return new mx.collections.ArrayCollection(a);
  } else {
    return a;
  }
};


/**
 * @private
 * @param {string} source
 * @return {Object}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation_decodeParameterString = function(source) {
  var /** @type {string} */ trimmed = mx.utils.StringUtil.trim(source);
  var /** @type {Array} */ params = trimmed.split('&');
  var /** @type {Object} */ decoded = {};
  for (var /** @type {number} */ i = 0; i < params.length; i++) {
    var /** @type {string} */ param = org.apache.royale.utils.Language.string(params[i]);
    var /** @type {number} */ equalsIndex = (param.indexOf('=')) >> 0;
    if (equalsIndex != -1) {
      var /** @type {string} */ name = param.substr(0, equalsIndex);
      name = name.split('+').join(' ');
      name = unescape(name);
      var /** @type {string} */ value = param.substr(equalsIndex + 1);
      value = value.split('+').join(' ');
      value = unescape(value);
      decoded[name] = value;
    }
  }
  return decoded;
};


/**
 * @private
 * @return {mx.messaging.ChannelSet}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation_getDirectChannelSet = function() {
  if (mx.rpc.http.AbstractOperation._directChannelSet == null) {
    var /** @type {mx.messaging.ChannelSet} */ dcs = new mx.messaging.ChannelSet();
    var /** @type {mx.messaging.channels.DirectHTTPChannel} */ dhc = new mx.messaging.channels.DirectHTTPChannel("direct_http_channel");
    dhc.requestTimeout = this.requestTimeout;
    dcs.addChannel(dhc);
    mx.rpc.http.AbstractOperation._directChannelSet = dcs;
  }
  return mx.rpc.http.AbstractOperation._directChannelSet;
};


/**
 * @type {mx.logging.ILogger}
 */
mx.rpc.http.AbstractOperation.prototype.http_$$www_adobe_com$2006$flex$mx$internal___log;


/**
 * @type {mx.resources.IResourceManager}
 */
mx.rpc.http.AbstractOperation.prototype.http_$$www_adobe_com$2006$flex$mx$internal__resourceManager;


/**
 * @private
 * @type {mx.messaging.ChannelSet}
 */
mx.rpc.http.AbstractOperation._directChannelSet;


/**
 * @private
 * @type {string}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__concurrency;


/**
 * @private
 * @type {string}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__method;


/**
 * @private
 * @type {boolean}
 */
mx.rpc.http.AbstractOperation.prototype.mx_rpc_http_AbstractOperation__showBusyCursor = false;


mx.rpc.http.AbstractOperation.prototype.get__argumentNames = function() {
  return this.mx_rpc_http_AbstractOperation__argumentNames;
};


mx.rpc.http.AbstractOperation.prototype.set__argumentNames = function(value) {
  this.mx_rpc_http_AbstractOperation__argumentNames = value;
};


mx.rpc.http.AbstractOperation.prototype.get__method = function() {
  return this.mx_rpc_http_AbstractOperation__method;
};


mx.rpc.http.AbstractOperation.prototype.set__method = function(m) {
  this.mx_rpc_http_AbstractOperation__method = m;
};


mx.rpc.http.AbstractOperation.prototype.get__concurrency = function() {
  return this.mx_rpc_http_AbstractOperation__concurrency;
};


mx.rpc.http.AbstractOperation.prototype.set__concurrency = function(c) {
  this.mx_rpc_http_AbstractOperation__concurrency = c;
};


mx.rpc.http.AbstractOperation.prototype.get__requestTimeout = function() {
  return this.mx_rpc_http_AbstractOperation__requestTimeout;
};


mx.rpc.http.AbstractOperation.prototype.set__requestTimeout = function(value) {
  if (this.mx_rpc_http_AbstractOperation__requestTimeout != value)
    this.mx_rpc_http_AbstractOperation__requestTimeout = value;
};


mx.rpc.http.AbstractOperation.prototype.get__resultFormat = function() {
  return this.mx_rpc_http_AbstractOperation__resultFormat;
};


mx.rpc.http.AbstractOperation.prototype.set__resultFormat = function(value) {
  switch (value) {
    case mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_OBJECT:
    
    case mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_ARRAY:
    
    case mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_E4X:
    
    case mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_TEXT:
    
    case mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_FLASHVARS:
      break;
    default:
      var /** @type {mx.rpc.http.SerializationFilter} */ sf;
      if (value != null && (sf = mx.rpc.http.SerializationFilter.http_$$www_adobe_com$2006$flex$mx$internal__filterForResultFormatTable[value]) == null) {
        var /** @type {string} */ message = this.http_$$www_adobe_com$2006$flex$mx$internal__resourceManager.getString("rpc", "invalidResultFormat", [value, mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_OBJECT, mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_ARRAY, mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_E4X, mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_TEXT, mx.rpc.http.AbstractOperation.http_$$www_adobe_com$2006$flex$mx$internal__RESULT_FORMAT_FLASHVARS]);
        throw new mx.messaging.errors.ArgumentError(message);
      }
      this.serializationFilter = sf;
  }
  this.mx_rpc_http_AbstractOperation__resultFormat = value;
};


mx.rpc.http.AbstractOperation.prototype.get__serializationFilter = function() {
  return this.mx_rpc_http_AbstractOperation__serializationFilter;
};


mx.rpc.http.AbstractOperation.prototype.set__serializationFilter = function(value) {
  this.mx_rpc_http_AbstractOperation__serializationFilter = value;
};


mx.rpc.http.AbstractOperation.prototype.get__request = function() {
  return this.mx_rpc_http_AbstractOperation__request;
};


mx.rpc.http.AbstractOperation.prototype.set__request = function(value) {
  this.mx_rpc_http_AbstractOperation__request = value;
};


mx.rpc.http.AbstractOperation.prototype.get__url = function() {
  return this.mx_rpc_http_AbstractOperation__url;
};


mx.rpc.http.AbstractOperation.prototype.set__url = function(value) {
  this.mx_rpc_http_AbstractOperation__url = value;
};


mx.rpc.http.AbstractOperation.prototype.get__useProxy = function() {
  return this.mx_rpc_http_AbstractOperation__useProxy;
};


mx.rpc.http.AbstractOperation.prototype.set__useProxy = function(value) {
  if (value != this.mx_rpc_http_AbstractOperation__useProxy) {
    this.mx_rpc_http_AbstractOperation__useProxy = value;
    var /** @type {mx.messaging.ChannelSet} */ dcs = this.mx_rpc_http_AbstractOperation_getDirectChannelSet();
    if (!this.useProxy) {
      if (dcs != this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.channelSet)
        this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.channelSet = dcs;
    } else {
      if (this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.channelSet == dcs)
        this.http_$$www_adobe_com$2006$flex$mx$internal__asyncRequest.channelSet = null;
    }
  }
};


mx.rpc.http.AbstractOperation.prototype.get__xmlDecode = function() {
  return this.mx_rpc_http_AbstractOperation__xmlDecode;
};


mx.rpc.http.AbstractOperation.prototype.set__xmlDecode = function(value) {
  this.mx_rpc_http_AbstractOperation__xmlDecode = value;
};


mx.rpc.http.AbstractOperation.prototype.get__xmlEncode = function() {
  return this.mx_rpc_http_AbstractOperation__xmlEncode;
};


mx.rpc.http.AbstractOperation.prototype.set__xmlEncode = function(value) {
  this.mx_rpc_http_AbstractOperation__xmlEncode = value;
};


mx.rpc.http.AbstractOperation.prototype.get__headers = function() {
  return this.mx_rpc_http_AbstractOperation__headers;
};


mx.rpc.http.AbstractOperation.prototype.set__headers = function(value) {
  this.mx_rpc_http_AbstractOperation__headers = value;
};


mx.rpc.http.AbstractOperation.prototype.get__contentType = function() {
  return this.mx_rpc_http_AbstractOperation__contentType;
};


mx.rpc.http.AbstractOperation.prototype.set__contentType = function(ct) {
  this.mx_rpc_http_AbstractOperation__contentType = ct;
};


mx.rpc.http.AbstractOperation.prototype.get__showBusyCursor = function() {
  return this.mx_rpc_http_AbstractOperation__showBusyCursor;
};


mx.rpc.http.AbstractOperation.prototype.set__showBusyCursor = function(sbc) {
  this.mx_rpc_http_AbstractOperation__showBusyCursor = sbc;
};


mx.rpc.http.AbstractOperation.prototype.get__rootURL = function() {
  if (this.http_$$www_adobe_com$2006$flex$mx$internal___rootURL == null) {
    this.http_$$www_adobe_com$2006$flex$mx$internal___rootURL = mx.messaging.config.LoaderConfig["url"];
  }
  return this.http_$$www_adobe_com$2006$flex$mx$internal___rootURL;
};


mx.rpc.http.AbstractOperation.prototype.set__rootURL = function(value) {
  this.http_$$www_adobe_com$2006$flex$mx$internal___rootURL = value;
};


Object.defineProperties(mx.rpc.http.AbstractOperation.prototype, /** @lends {mx.rpc.http.AbstractOperation.prototype} */ {
/**
  * @export
  * @type {Array} */
argumentNames: {
get: mx.rpc.http.AbstractOperation.prototype.get__argumentNames,
set: mx.rpc.http.AbstractOperation.prototype.set__argumentNames},
/**
  * @export
  * @type {string} */
method: {
get: mx.rpc.http.AbstractOperation.prototype.get__method,
set: mx.rpc.http.AbstractOperation.prototype.set__method},
/**
  * @export
  * @type {string} */
concurrency: {
get: mx.rpc.http.AbstractOperation.prototype.get__concurrency,
set: mx.rpc.http.AbstractOperation.prototype.set__concurrency},
/**
  * @export
  * @type {number} */
requestTimeout: {
get: mx.rpc.http.AbstractOperation.prototype.get__requestTimeout,
set: mx.rpc.http.AbstractOperation.prototype.set__requestTimeout},
/**
  * @export
  * @type {string} */
resultFormat: {
get: mx.rpc.http.AbstractOperation.prototype.get__resultFormat,
set: mx.rpc.http.AbstractOperation.prototype.set__resultFormat},
/**
  * @export
  * @type {mx.rpc.http.SerializationFilter} */
serializationFilter: {
get: mx.rpc.http.AbstractOperation.prototype.get__serializationFilter,
set: mx.rpc.http.AbstractOperation.prototype.set__serializationFilter},
/**
  * @export
  * @type {Object} */
request: {
get: mx.rpc.http.AbstractOperation.prototype.get__request,
set: mx.rpc.http.AbstractOperation.prototype.set__request},
/**
  * @export
  * @type {string} */
url: {
get: mx.rpc.http.AbstractOperation.prototype.get__url,
set: mx.rpc.http.AbstractOperation.prototype.set__url},
/**
  * @export
  * @type {boolean} */
useProxy: {
get: mx.rpc.http.AbstractOperation.prototype.get__useProxy,
set: mx.rpc.http.AbstractOperation.prototype.set__useProxy},
/**
  * @export
  * @type {Function} */
xmlDecode: {
get: mx.rpc.http.AbstractOperation.prototype.get__xmlDecode,
set: mx.rpc.http.AbstractOperation.prototype.set__xmlDecode},
/**
  * @export
  * @type {Function} */
xmlEncode: {
get: mx.rpc.http.AbstractOperation.prototype.get__xmlEncode,
set: mx.rpc.http.AbstractOperation.prototype.set__xmlEncode},
/**
  * @export
  * @type {Object} */
headers: {
get: mx.rpc.http.AbstractOperation.prototype.get__headers,
set: mx.rpc.http.AbstractOperation.prototype.set__headers},
/**
  * @export
  * @type {string} */
contentType: {
get: mx.rpc.http.AbstractOperation.prototype.get__contentType,
set: mx.rpc.http.AbstractOperation.prototype.set__contentType},
/**
  * @export
  * @type {boolean} */
showBusyCursor: {
get: mx.rpc.http.AbstractOperation.prototype.get__showBusyCursor,
set: mx.rpc.http.AbstractOperation.prototype.set__showBusyCursor},
/**
  * @export
  * @type {string} */
rootURL: {
get: mx.rpc.http.AbstractOperation.prototype.get__rootURL,
set: mx.rpc.http.AbstractOperation.prototype.set__rootURL}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.http.AbstractOperation.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AbstractOperation', qName: 'mx.rpc.http.AbstractOperation', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.http.AbstractOperation.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::_rootURL': { type: 'String', get_set: function (/** mx.rpc.http.AbstractOperation */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___rootURL = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___rootURL;}},
        'http://www.adobe.com/2006/flex/mx/internal::_log': { type: 'mx.logging.ILogger', get_set: function (/** mx.rpc.http.AbstractOperation */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___log = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___log;}},
        'http://www.adobe.com/2006/flex/mx/internal::resourceManager': { type: 'mx.resources.IResourceManager', get_set: function (/** mx.rpc.http.AbstractOperation */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal__resourceManager = v : inst.http_$$www_adobe_com$2006$flex$mx$internal__resourceManager;}}
      };
    },
    accessors: function () {
      return {
        'argumentNames': { type: 'Array', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'method': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'concurrency': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'requestTimeout': { type: 'int', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'resultFormat': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'serializationFilter': { type: 'mx.rpc.http.SerializationFilter', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'request': { type: 'Object', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'url': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'useProxy': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'xmlDecode': { type: 'Function', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'xmlEncode': { type: 'Function', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'headers': { type: 'Object', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'contentType': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'showBusyCursor': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'},
        'rootURL': { type: 'String', access: 'readwrite', declaredBy: 'mx.rpc.http.AbstractOperation'}
      };
    },
    methods: function () {
      return {
        'AbstractOperation': { type: '', declaredBy: 'mx.rpc.http.AbstractOperation', parameters: function () { return [ 'mx.rpc.AbstractService', true ,'String', true ]; }},
        'cancel': { type: 'mx.rpc.AsyncToken', declaredBy: 'mx.rpc.http.AbstractOperation', parameters: function () { return [ 'String', true ]; }},
        'sendBody': { type: 'mx.rpc.AsyncToken', declaredBy: 'mx.rpc.http.AbstractOperation', parameters: function () { return [ 'Object', false ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::processResult': { type: 'Boolean', declaredBy: 'mx.rpc.http.AbstractOperation', parameters: function () { return [ 'mx.messaging.messages.IMessage', false ,'mx.rpc.AsyncToken', false ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::invoke': { type: 'mx.rpc.AsyncToken', declaredBy: 'mx.rpc.http.AbstractOperation', parameters: function () { return [ 'mx.messaging.messages.IMessage', false ,'mx.rpc.AsyncToken', true ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::preHandle': { type: 'mx.rpc.AsyncToken', declaredBy: 'mx.rpc.http.AbstractOperation', parameters: function () { return [ 'mx.messaging.events.MessageEvent', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.http.AbstractOperation.prototype.ROYALE_COMPILE_FLAGS = 26;
