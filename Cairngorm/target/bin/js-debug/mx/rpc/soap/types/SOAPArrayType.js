/**
 * Generated by Apache Royale Compiler from mx/rpc/soap/types/SOAPArrayType.as
 * mx.rpc.soap.types.SOAPArrayType
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.soap.types.SOAPArrayType');
/* Royale Dependency List: Namespace,QName,XML,XMLList,mx.collections.IList,mx.rpc.soap.SOAPConstants,mx.rpc.soap.SOAPDecoder,mx.rpc.soap.SOAPEncoder,mx.rpc.wsdl.WSDLConstants,mx.rpc.xml.ContentProxy,mx.rpc.xml.SchemaConstants,mx.rpc.xml.SchemaManager,mx.rpc.xml.SchemaProcessor,mx.rpc.xml.TypeIterator,mx.utils.ObjectUtil,mx.utils.StringUtil,mx.utils.object_proxy,org.apache.royale.utils.Language*/

goog.require('mx.rpc.soap.types.ICustomSOAPType');



/**
 * @constructor
 * @implements {mx.rpc.soap.types.ICustomSOAPType}
 */
mx.rpc.soap.types.SOAPArrayType = function() {
  ;
  this.mx_rpc_soap_types_SOAPArrayType_itemName = new QName("", "item");
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.soap.types.SOAPArrayType', mx.rpc.soap.types.SOAPArrayType);


/**
 * Encode an ActionScript Array as a SOAP encoded Array in XML.
 * 
 * TODO: Support soap array offset and item position attributes?
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.rpc.soap.SOAPEncoder} encoder
 * @param {XML} parent
 * @param {QName} name
 * @param {*} value
 * @param {XML=} restriction
 */
mx.rpc.soap.types.SOAPArrayType.prototype.encode = function(encoder, parent, name, value, restriction) {
  restriction = typeof restriction !== 'undefined' ? restriction : null;
  this.mx_rpc_soap_types_SOAPArrayType_processor = encoder;
  this.mx_rpc_soap_types_SOAPArrayType_soapConstants = encoder.soapConstants;
  this.mx_rpc_soap_types_SOAPArrayType_schemaManager = encoder.schemaManager;
  this.mx_rpc_soap_types_SOAPArrayType_schemaConstants = this.mx_rpc_soap_types_SOAPArrayType_schemaManager.schemaConstants;
  value = this.mx_rpc_soap_types_SOAPArrayType_unwrapMXMLArray(value);
  if (restriction != null) {
    var /** @type {string} */ wsdlArrayType = this.mx_rpc_soap_types_SOAPArrayType_determineWSDLArrayType(restriction, encoder.wsdlOperation.wsdlConstants);
    this.mx_rpc_soap_types_SOAPArrayType_parseWSDLArrayType(wsdlArrayType);
  }
  this.mx_rpc_soap_types_SOAPArrayType_schemaType = this.mx_rpc_soap_types_SOAPArrayType_schemaManager.getQNameForPrefixedName(this.mx_rpc_soap_types_SOAPArrayType_schemaTypeName, restriction);
  parent.addNamespace(this.mx_rpc_soap_types_SOAPArrayType_soapConstants.encodingNamespace);
  this.mx_rpc_soap_types_SOAPArrayType_encodeDimensionInformation(parent, this.mx_rpc_soap_types_SOAPArrayType_dimensionString);
  this.mx_rpc_soap_types_SOAPArrayType_encodeArray(parent, this.mx_rpc_soap_types_SOAPArrayType_dimensions, value);
};


/**
 * Decodes a SOAP encoded array assuming the XML Schema type definiton
 * uses a complexType restriction base to declare the array type, e.g.
 * 
 * <pre>
 * &lt;xsd:complexType name="Example"&gt;
 *   &lt;xsd:complexContent mixed="false"&gt;
 *     &lt;xsd:restriction base="soapenc:Array"&gt;
 *       &lt;xsd:attribute wsdl:arrayType="tns:Example[]" ref="soapenc:arrayType" 
 *           xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" /&gt;
 *      &lt;/xsd:restriction&gt;
 *   &lt;/xsd:complexContent&gt;
 * &lt;/xsd:complexType&gt;
 * </pre>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.rpc.soap.SOAPDecoder} decoder
 * @param {*} parent
 * @param {*} name
 * @param {*} value
 * @param {XML=} restriction
 */
mx.rpc.soap.types.SOAPArrayType.prototype.decode = function(decoder, parent, name, value, restriction) {
  restriction = typeof restriction !== 'undefined' ? restriction : null;
  this.mx_rpc_soap_types_SOAPArrayType_processor = decoder;
  this.mx_rpc_soap_types_SOAPArrayType_soapConstants = decoder.soapConstants;
  this.mx_rpc_soap_types_SOAPArrayType_schemaManager = decoder.schemaManager;
  this.mx_rpc_soap_types_SOAPArrayType_schemaConstants = this.mx_rpc_soap_types_SOAPArrayType_schemaManager.schemaConstants;
  var /** @type {XML} */ valueXML = org.apache.royale.utils.Language.as(value, XML);
  if (valueXML != null) {
    var /** @type {string} */ arrayTypeString = org.apache.royale.utils.Language.string(valueXML.attribute(this.mx_rpc_soap_types_SOAPArrayType_soapConstants.soapencArrayTypeQName));
    if (arrayTypeString != null && arrayTypeString != "") {
      this.mx_rpc_soap_types_SOAPArrayType_parseWSDLArrayType(arrayTypeString);
      this.mx_rpc_soap_types_SOAPArrayType_schemaType = this.mx_rpc_soap_types_SOAPArrayType_schemaManager.getQNameForPrefixedName(this.mx_rpc_soap_types_SOAPArrayType_schemaTypeName, valueXML);
    }
  }
  if (this.mx_rpc_soap_types_SOAPArrayType_schemaType == null && restriction != null) {
    var /** @type {string} */ wsdlArrayType = this.mx_rpc_soap_types_SOAPArrayType_determineWSDLArrayType(restriction, decoder.wsdlOperation.wsdlConstants);
    this.mx_rpc_soap_types_SOAPArrayType_parseWSDLArrayType(wsdlArrayType);
    this.mx_rpc_soap_types_SOAPArrayType_schemaType = this.mx_rpc_soap_types_SOAPArrayType_schemaManager.getQNameForPrefixedName(this.mx_rpc_soap_types_SOAPArrayType_schemaTypeName, restriction);
  }
  if (this.mx_rpc_soap_types_SOAPArrayType_schemaType != null) {
    if (org.apache.royale.utils.Language.is(parent, mx.rpc.xml.ContentProxy)) {
      var /** @type {mx.rpc.xml.ContentProxy} */ proxy = org.apache.royale.utils.Language.as(parent, mx.rpc.xml.ContentProxy);
      proxy.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__isSimple = false;
      if (!org.apache.royale.utils.Language.is(proxy.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__content, mx.collections.IList) && !org.apache.royale.utils.Language.is(proxy.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__content, Array))
        proxy.http_$$www_adobe_com$2006$actionscript$flash$objectproxy__content = decoder.createIterableValue();
    }
    this.mx_rpc_soap_types_SOAPArrayType_decodeArray(parent, this.mx_rpc_soap_types_SOAPArrayType_dimensions, value, decoder.makeObjectsBindable);
  }
};


/**
 * Recursively called to encode a set of dimensions at a particular level
 * (potentially many of a jagged/nested array) of an Array.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @private
 * @param {XML} parent
 * @param {Array} dimensions
 * @param {*} value
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_encodeArray = function(parent, dimensions, value) {
  var /** @type {string} */ typeAttr = this.mx_rpc_soap_types_SOAPArrayType_schemaConstants.getXSIToken(this.mx_rpc_soap_types_SOAPArrayType_schemaConstants.typeAttrQName);
  parent.setAttribute(typeAttr, this.mx_rpc_soap_types_SOAPArrayType_soapConstants.getSOAPEncodingToken(this.mx_rpc_soap_types_SOAPArrayType_soapConstants.soapencArrayQName));
  if (!mx.rpc.xml.TypeIterator.isIterable(value))
    value = [value];
  var /** @type {mx.rpc.xml.TypeIterator} */ iter = new mx.rpc.xml.TypeIterator(value);
  var /** @type {number} */ d = 0;
  if (dimensions.length > 0) {
    var /** @type {*} */ entry = dimensions[0];
    if (!org.apache.royale.utils.Language.is(entry, Array))
      entry = [entry];
    var foreachiter0_target = entry;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var dimensionSize = foreachiter0_target[foreachiter0];
    {
      var /** @type {*} */ itemValue;
      var /** @type {Array} */ nestedDimension;
      var /** @type {string} */ nestedDimensionString;
      var /** @type {XML} */ nestedArray;
      d++;
      if (dimensionSize < 0) {
        if (dimensions.length == 1) {
          while (iter.hasNext()) {
            itemValue = iter.next();
            nestedArray = new XML( '<' + this.mx_rpc_soap_types_SOAPArrayType_itemName.localName + '/>');
            this.mx_rpc_soap_types_SOAPArrayType_encodeArrayItem(nestedArray, itemValue);
            parent.appendChild(nestedArray);
          }
        } else if (dimensions.length > 1) {
          nestedDimensionString = "[]";
          while (iter.hasNext()) {
            itemValue = iter.next();
            nestedDimension = dimensions[d];
            nestedArray = new XML( '<' + this.mx_rpc_soap_types_SOAPArrayType_itemName.localName + '/>');
            this.mx_rpc_soap_types_SOAPArrayType_encodeDimensionInformation(nestedArray, nestedDimensionString);
            this.mx_rpc_soap_types_SOAPArrayType_encodeArray(nestedArray, nestedDimension, itemValue);
            parent.appendChild(nestedArray);
          }
        }
      } else {
        for (var /** @type {number} */ i = 0; i < dimensionSize; i++) {
          itemValue = mx.rpc.xml.TypeIterator.getItemAt(iter.value, i);
          if (dimensions.length == 1) {
            nestedArray = new XML( '<' + this.mx_rpc_soap_types_SOAPArrayType_itemName.localName + '/>');
            this.mx_rpc_soap_types_SOAPArrayType_encodeArrayItem(nestedArray, itemValue);
            parent.appendChild(nestedArray);
          } else if (dimensions.length > 1) {
            nestedDimensionString = "[" + dimensionSize + "]";
            nestedDimension = dimensions[d];
            nestedArray = new XML( '<' + this.mx_rpc_soap_types_SOAPArrayType_itemName.localName + '/>');
            this.mx_rpc_soap_types_SOAPArrayType_encodeDimensionInformation(nestedArray, nestedDimensionString);
            this.mx_rpc_soap_types_SOAPArrayType_encodeArray(nestedArray, nestedDimension, itemValue);
            parent.appendChild(nestedArray);
          }
        }
      }
    }}
    
  }
};


/**
 * @private
 * @param {*} parent
 * @param {Array} dimensions
 * @param {*} value
 * @param {boolean} makeObjectsBindable
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_decodeArray = function(parent, dimensions, value, makeObjectsBindable) {
  if (org.apache.royale.utils.Language.is(value, XML)) {
    var /** @type {XML} */ dataXML = org.apache.royale.utils.Language.as(value, XML);
    value = dataXML.elements();
  }
  if (!mx.rpc.xml.TypeIterator.isIterable(value) && value != "")
    value = [value];
  var /** @type {mx.rpc.xml.TypeIterator} */ iter = new mx.rpc.xml.TypeIterator(value);
  var /** @type {number} */ d = 0;
  if (dimensions.length > 0) {
    var /** @type {*} */ entry = dimensions[0];
    if (!org.apache.royale.utils.Language.is(entry, Array))
      entry = [entry];
    var foreachiter1_target = entry;
    for (var foreachiter1 in foreachiter1_target) 
    {
    var dimensionSize = foreachiter1_target[foreachiter1];
    {
      var /** @type {*} */ itemValue;
      var /** @type {Array} */ nestedDimension;
      var /** @type {*} */ nestedArray;
      d++;
      if (dimensionSize < 0) {
        if (dimensions.length == 1) {
          while (iter.hasNext()) {
            itemValue = iter.next();
            this.mx_rpc_soap_types_SOAPArrayType_decodeArrayItem(parent, itemValue);
          }
        } else if (dimensions.length > 1) {
          while (iter.hasNext()) {
            itemValue = iter.next();
            nestedDimension = dimensions[d];
            nestedArray = org.apache.royale.utils.Language.as(this.mx_rpc_soap_types_SOAPArrayType_processor, mx.rpc.soap.SOAPDecoder, true).createIterableValue(this.mx_rpc_soap_types_SOAPArrayType_schemaType);
            this.mx_rpc_soap_types_SOAPArrayType_decodeArray(nestedArray, nestedDimension, itemValue, makeObjectsBindable);
            mx.rpc.xml.TypeIterator.push(parent, nestedArray);
          }
        }
      } else {
        for (var /** @type {number} */ i = 0; i < dimensionSize; i++) {
          itemValue = mx.rpc.xml.TypeIterator.getItemAt(iter.value, i);
          if (dimensions.length == 1) {
            this.mx_rpc_soap_types_SOAPArrayType_decodeArrayItem(parent, itemValue);
          } else if (dimensions.length > 1) {
            nestedDimension = dimensions[d];
            nestedArray = org.apache.royale.utils.Language.as(this.mx_rpc_soap_types_SOAPArrayType_processor, mx.rpc.soap.SOAPDecoder, true).createIterableValue(this.mx_rpc_soap_types_SOAPArrayType_schemaType);
            this.mx_rpc_soap_types_SOAPArrayType_decodeArray(nestedArray, nestedDimension, itemValue, makeObjectsBindable);
            mx.rpc.xml.TypeIterator.push(parent, nestedArray);
          }
        }
      }
    }}
    
  }
};


/**
 * @private
 * @param {XML} item
 * @param {*} value
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_encodeArrayItem = function(item, value) {
  var /** @type {mx.rpc.soap.SOAPEncoder} */ encoder = org.apache.royale.utils.Language.as(this.mx_rpc_soap_types_SOAPArrayType_processor, mx.rpc.soap.SOAPEncoder);
  encoder.encodeType(this.mx_rpc_soap_types_SOAPArrayType_schemaType, item, this.mx_rpc_soap_types_SOAPArrayType_itemName, value);
};


/**
 * @private
 * @param {*} parent
 * @param {*} value
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_decodeArrayItem = function(parent, value) {
  var /** @type {mx.rpc.soap.SOAPDecoder} */ decoder = org.apache.royale.utils.Language.as(this.mx_rpc_soap_types_SOAPArrayType_processor, mx.rpc.soap.SOAPDecoder);
  var /** @type {*} */ item = decoder.createContent(this.mx_rpc_soap_types_SOAPArrayType_schemaType);
  decoder.decodeType(this.mx_rpc_soap_types_SOAPArrayType_schemaType, item, this.mx_rpc_soap_types_SOAPArrayType_itemName, value);
  decoder.setValue(parent, this.mx_rpc_soap_types_SOAPArrayType_itemName, item, this.mx_rpc_soap_types_SOAPArrayType_schemaType);
};


/**
 * @private
 * @param {XML} parent
 * @param {string} dimensionString
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_encodeDimensionInformation = function(parent, dimensionString) {
  var /** @type {string} */ uri = this.mx_rpc_soap_types_SOAPArrayType_schemaType.uri;
  var /** @type {string} */ prefix = this.mx_rpc_soap_types_SOAPArrayType_schemaManager.getOrCreatePrefix(uri);
  var /** @type {Namespace} */ ns = new Namespace(prefix, uri);
  var /** @type {string} */ arrayTypeString = prefix + ":" + this.mx_rpc_soap_types_SOAPArrayType_schemaType.localName;
  arrayTypeString = arrayTypeString + dimensionString;
  parent.addNamespace(ns);
  var /** @type {string} */ arrayTypeAttr = this.mx_rpc_soap_types_SOAPArrayType_soapConstants.getSOAPEncodingToken(this.mx_rpc_soap_types_SOAPArrayType_soapConstants.soapencArrayTypeQName);
  parent.setAttribute(arrayTypeAttr, arrayTypeString);
};


/**
 * @private
 * @param {XML} node
 * @param {...} types
 * @return {XML}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_getSingleElementFromNode = function(node, types) {
  types = Array.prototype.slice.call(arguments, 1);
  var /** @type {XMLList} */ elements = node.elements();
  var foreachiter2_target = elements;
  for (var foreachiter2 in foreachiter2_target.elementNames()) 
  {
  var element = foreachiter2_target[foreachiter2];
  {
    if (types != null && types.length > 0) {
      var foreachiter3_target = types;
      for (var foreachiter3 in foreachiter3_target) 
      {
      var type = foreachiter3_target[foreachiter3];
      {
        if (QName.equality(element.name(),type)) {
          return element;
        }
      }}
      
    } else {
      return element;
    }
  }}
  
  return null;
};


/**
 * @private
 * @param {XML} restriction
 * @param {mx.rpc.wsdl.WSDLConstants} wsdlConstants
 * @return {string}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_determineWSDLArrayType = function(restriction, wsdlConstants) {
  var /** @type {string} */ arrayTypeString = "";
  var /** @type {XML} */ attribute = this.mx_rpc_soap_types_SOAPArrayType_getSingleElementFromNode(restriction, this.mx_rpc_soap_types_SOAPArrayType_schemaConstants.attributeQName);
  if (attribute != null) {
    var /** @type {string} */ soapencArrayTypeRef = org.apache.royale.utils.Language.string(attribute.attribute('ref'));
    var /** @type {QName} */ soapencArrayType = this.mx_rpc_soap_types_SOAPArrayType_schemaManager.getQNameForPrefixedName(soapencArrayTypeRef, attribute, true);
    if (QName.equality(soapencArrayType,this.mx_rpc_soap_types_SOAPArrayType_soapConstants.soapencArrayTypeQName)) {
      arrayTypeString = attribute.attribute(XML.swfCompatibleQuery(wsdlConstants.wsdlArrayTypeQName)).toString();
    }
  }
  return arrayTypeString;
};


/**
 * Parses the WSDL arrayType to determine the type of the members in a SOAP
 * encoded array, the rank and dimensions of the Array, and potentially
 * the size of the Array (if not unbounded).
 * 
 * TODO: Support SOAP 1.2 syntax for Arrays.
 * 
 * Examples:
 * 1. An unbounded Array of strings:
 * <xsd:attribute ref="soap-enc:arrayType" wsdl:arrayType="xsd:string[]" />
 * 
 * 2. An Array with 5 members of type "Array of integers":
 * <xsd:attribute ref="soap-enc:arrayType" wsdl:arrayType="xsd:int[][5]" />
 * 
 * 3. An Array with 3 members of type "two-dimensional arrays of integers":
 * <xsd:attribute ref="soap-enc:arrayType" wsdl:arrayType="xsd:int[,][3]" />
 * 
 * @asparam wsdlArrayType The value of the wsdl:arrayType attribute that
 * specifies the signature of the SOAP encoded array including the type and
 * the dimensions and size information.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @private
 * @param {string} wsdlArrayType
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_parseWSDLArrayType = function(wsdlArrayType) {
  var /** @type {string} */ typeName;
  var /** @type {number} */ startBracket = (wsdlArrayType.indexOf("[")) >> 0;
  var /** @type {number} */ endBracket = -1;
  if (startBracket > 0) {
    this.mx_rpc_soap_types_SOAPArrayType_dimensionString = wsdlArrayType.substring(startBracket);
    this.mx_rpc_soap_types_SOAPArrayType_schemaTypeName = mx.utils.StringUtil.trim(wsdlArrayType.substring(0, startBracket));
    endBracket = (wsdlArrayType.indexOf("]", startBracket)) >> 0;
  }
  if (startBracket < 0 || endBracket < 0) {
    throw new Error("Invalid SOAP-encoded Array type '" + wsdlArrayType + "'.");
  }
  var /** @type {string} */ rankOrSizeString = mx.utils.StringUtil.trim(wsdlArrayType.substring(startBracket));
  var /** @type {Array} */ dimsArray = rankOrSizeString.split("[");
  var /** @type {Array} */ currentDimension = this.mx_rpc_soap_types_SOAPArrayType_dimensions;
  for (var /** @type {number} */ i = (dimsArray.length - 1) >> 0; i >= 0; i--) {
    var /** @type {string} */ dimsString = org.apache.royale.utils.Language.as(dimsArray[i], String);
    if (dimsString.length > 0) {
      if (currentDimension.length > 0) {
        var /** @type {Array} */ newDimension = [];
        currentDimension.push(newDimension);
        currentDimension = newDimension;
      }
      this.mx_rpc_soap_types_SOAPArrayType_parseDimensions(wsdlArrayType, dimsString, currentDimension);
    }
  }
};


/**
 * @private
 * @param {string} wsdlArrayType
 * @param {string} dimensionsString
 * @param {Array} currentDimension
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_parseDimensions = function(wsdlArrayType, dimensionsString, currentDimension) {
  if (dimensionsString.charAt(0) == "[")
    dimensionsString = dimensionsString.substring(1);
  if (dimensionsString.charAt(dimensionsString.length - 1) == "]")
    dimensionsString = dimensionsString.substring(0, dimensionsString.length - 1);
  var /** @type {number} */ dim;
  var /** @type {Array} */ dimensions = dimensionsString.split(",");
  if (dimensions.length > 0) {
    var foreachiter4_target = dimensions;
    for (var foreachiter4 in foreachiter4_target) 
    {
    var dimString = foreachiter4_target[foreachiter4];
    {
      if (dimString.length > 0) {
        dim = parseInt(dimString, undefined);
        if (!isNaN(dim) && dim < 2147483648) {
          currentDimension.push(org.apache.royale.utils.Language._int(dim));
        } else {
          throw new Error("Invalid dimension '" + dimString + "' for SOAP encoded Array type '" + wsdlArrayType + "'.");
        }
      } else {
        currentDimension.push(-1);
      }
    }}
    
  }
};


/**
 * Attempts to unwrap MXML Array properties that are wrapped in an Object
 * with a single child element that is an Array itself.
 * 
 * e.g. the following MXML:
 * 
 * <mx:request>
 *     <inputArray>
 *         <item>A</item>
 *         <item>B</item>
 *     </inputArray>
 * </mx:request>
 * 
 * would return an Object for inputArray as {item:[A,B]} instead of
 * simply the Array [A,B].
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @private
 * @param {*} value
 * @return {*}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_unwrapMXMLArray = function(value) {
  var /** @type {*} */ result = value;
  if (!org.apache.royale.utils.Language.is(value, Array)) {
    try {
      var /** @type {Object} */ classInfo = mx.utils.ObjectUtil.getClassInfo(org.apache.royale.utils.Language.as(value, Object));
      var /** @type {Array} */ properties = classInfo["properties"];
      if (properties.length == 1) {
        var /** @type {string} */ property = org.apache.royale.utils.Language.string(properties[0]);
        if (property != null && value.hasOwnProperty(property)) {
          var /** @type {*} */ childValue = value[property];
          if (org.apache.royale.utils.Language.is(childValue, Array)) {
            result = childValue;
          }
        }
      }
    } catch (e) {
    }
  }
  return result;
};


/**
 * @private
 * @type {Array}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType__dimensions;


/**
 * @private
 * @type {string}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_dimensionString;


/**
 * @private
 * @type {QName}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_itemName;


/**
 * @private
 * @type {mx.rpc.xml.SchemaProcessor}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_processor;


/**
 * @private
 * @type {mx.rpc.xml.SchemaConstants}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_schemaConstants;


/**
 * @private
 * @type {mx.rpc.xml.SchemaManager}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_schemaManager;


/**
 * @private
 * @type {string}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_schemaTypeName;


/**
 * @private
 * @type {QName}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_schemaType;


/**
 * @private
 * @type {mx.rpc.soap.SOAPConstants}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.mx_rpc_soap_types_SOAPArrayType_soapConstants;


mx.rpc.soap.types.SOAPArrayType.prototype.get__mx_rpc_soap_types_SOAPArrayType_dimensions = function() {
  if (this.mx_rpc_soap_types_SOAPArrayType__dimensions == null)
    this.mx_rpc_soap_types_SOAPArrayType__dimensions = [];
  return this.mx_rpc_soap_types_SOAPArrayType__dimensions;
};


Object.defineProperties(mx.rpc.soap.types.SOAPArrayType.prototype, /** @lends {mx.rpc.soap.types.SOAPArrayType.prototype} */ {
/**
  * @type {Array} */
mx_rpc_soap_types_SOAPArrayType_dimensions: {
get: mx.rpc.soap.types.SOAPArrayType.prototype.get__mx_rpc_soap_types_SOAPArrayType_dimensions}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SOAPArrayType', qName: 'mx.rpc.soap.types.SOAPArrayType', kind: 'class' }], interfaces: [mx.rpc.soap.types.ICustomSOAPType] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'SOAPArrayType': { type: '', declaredBy: 'mx.rpc.soap.types.SOAPArrayType'},
        'encode': { type: 'void', declaredBy: 'mx.rpc.soap.types.SOAPArrayType', parameters: function () { return [ 'mx.rpc.soap.SOAPEncoder', false ,'XML', false ,'QName', false ,'*', false ,'XML', true ]; }},
        'decode': { type: 'void', declaredBy: 'mx.rpc.soap.types.SOAPArrayType', parameters: function () { return [ 'mx.rpc.soap.SOAPDecoder', false ,'*', false ,'*', false ,'*', false ,'XML', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.soap.types.SOAPArrayType.prototype.ROYALE_COMPILE_FLAGS = 26;
