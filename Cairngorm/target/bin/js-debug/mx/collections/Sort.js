/**
 * Generated by Apache Royale Compiler from mx/collections/Sort.as
 * mx.collections.Sort
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.collections.Sort');
/* Royale Dependency List: mx.collections.ISortField,mx.collections.SortField,mx.collections.errors.SortError,mx.core.mx_internal,org.apache.royale.events.Event,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('mx.collections.ISort');



/**
 *  Constructor.
 *
 *  <p>Creates a new Sort with no fields set and no custom comparator.</p>
 *
 *  @asparam fields An <code>Array</code> of <code>ISortField</code> objects that
 *  specifies the fields to compare.
 *  @asparam customCompareFunction Use a custom function to compare the
 *  objects in the collection to which this sort will be applied.
 *  @asparam unique Indicates if the sort should be unique.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {mx.collections.ISort}
 * @param {Array=} fields
 * @param {Function=} customCompareFunction
 * @param {boolean=} unique
 */
mx.collections.Sort = function(fields, customCompareFunction, unique) {
  fields = typeof fields !== 'undefined' ? fields : null;
  customCompareFunction = typeof customCompareFunction !== 'undefined' ? customCompareFunction : null;
  unique = typeof unique !== 'undefined' ? unique : false;
  mx.collections.Sort.base(this, 'constructor');
  this.fields = fields;
  this.compareFunction = customCompareFunction;
  this.unique = unique;
};
goog.inherits(mx.collections.Sort, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.collections.Sort', mx.collections.Sort);


/**
 * @export
 * @const
 * @type {string}
 */
mx.collections.Sort.ANY_INDEX_MODE = "any";


/**
 * @export
 * @const
 * @type {string}
 */
mx.collections.Sort.FIRST_INDEX_MODE = "first";


/**
 * @export
 * @const
 * @type {string}
 */
mx.collections.Sort.LAST_INDEX_MODE = "last";


/**
 * @type {boolean}
 */
mx.collections.Sort.prototype.http_$$www_adobe_com$2006$flex$mx$internal__useSortOn = true;


/**
 * @private
 * @type {Function}
 */
mx.collections.Sort.prototype.mx_collections_Sort__compareFunction;


/**
 * @private
 * @type {boolean}
 */
mx.collections.Sort.prototype.mx_collections_Sort_usingCustomCompareFunction;


/**
 * @private
 * @type {Array}
 */
mx.collections.Sort.prototype.mx_collections_Sort__fields;


/**
 * @private
 * @type {boolean}
 */
mx.collections.Sort.prototype.mx_collections_Sort__unique;


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Array} items
 * @param {Object} values
 * @param {string} mode
 * @param {boolean=} returnInsertionIndex
 * @param {Function=} compareFunction
 * @return {number}
 */
mx.collections.Sort.prototype.findItem = function(items, values, mode, returnInsertionIndex, compareFunction) {
  returnInsertionIndex = typeof returnInsertionIndex !== 'undefined' ? returnInsertionIndex : false;
  compareFunction = typeof compareFunction !== 'undefined' ? compareFunction : null;
  var /** @type {Function} */ compareForFind;
  var /** @type {Array} */ fieldsForCompare;
  var /** @type {string} */ message;
  if (items.length == 0) {
    return (returnInsertionIndex ? 1 : -1) >> 0;
  }
  if (compareFunction == null) {
    compareForFind = this.compareFunction;
    if (values && this.fields && this.fields.length > 0) {
      fieldsForCompare = [];
      var /** @type {mx.collections.ISortField} */ field;
      var /** @type {boolean} */ hadPreviousFieldName = true;
      for (var /** @type {number} */ i = 0; i < this.fields.length; i++) {
        field = org.apache.royale.utils.Language.as(this.fields[i], mx.collections.ISortField);
        if (field.name) {
          if (field.objectHasSortField(values)) {
            if (!hadPreviousFieldName) {
              message = "findCondition";
              throw new mx.collections.errors.SortError(message);
            } else {
              fieldsForCompare.push(field.name);
            }
          } else {
            hadPreviousFieldName = false;
          }
        } else {
          fieldsForCompare.push(null);
        }
      }
      if (fieldsForCompare.length == 0) {
        message = "findRestriction";
        throw new mx.collections.errors.SortError(message);
      } else {
        try {
          this.mx_collections_Sort_initSortFields(items[0]);
        } catch (initSortError) {
        }
      }
    }
  } else {
    compareForFind = compareFunction;
  }
  var /** @type {boolean} */ found = false;
  var /** @type {boolean} */ objFound = false;
  var /** @type {number} */ index = 0;
  var /** @type {number} */ lowerBound = 0;
  var /** @type {number} */ upperBound = (items.length - 1) >> 0;
  var /** @type {Object} */ obj = null;
  var /** @type {number} */ direction = 1;
  while (!objFound && (lowerBound <= upperBound)) {
    index = (Math.round((lowerBound + upperBound) / 2)) >> 0;
    obj = items[index];
    direction = (fieldsForCompare ? compareForFind(values, obj, fieldsForCompare) : compareForFind(values, obj)) >> 0;
    switch (direction) {
      case -1:
        upperBound = (index - 1) >> 0;
        break;
      case 0:
        objFound = true;
        switch (mode) {
          case mx.collections.Sort.ANY_INDEX_MODE:
            found = true;
            break;
          case mx.collections.Sort.FIRST_INDEX_MODE:
            found = (index == lowerBound);
            var /** @type {number} */ objIndex = (index - 1) >> 0;
            var /** @type {boolean} */ match = true;
            while (match && !found && (objIndex >= lowerBound)) {
              obj = items[objIndex];
              var /** @type {number} */ prevCompare = (fieldsForCompare ? compareForFind(values, obj, fieldsForCompare) : compareForFind(values, obj)) >> 0;
              match = (prevCompare == 0);
              if (!match || (match && (objIndex == lowerBound))) {
                found = true;
                index = (objIndex + (match ? 0 : 1)) >> 0;
              }
              objIndex--;
            }
            break;
          case mx.collections.Sort.LAST_INDEX_MODE:
            found = (index == upperBound);
            objIndex = (index + 1) >> 0;
            match = true;
            while (match && !found && (objIndex <= upperBound)) {
              obj = items[objIndex];
              var /** @type {number} */ nextCompare = (fieldsForCompare ? compareForFind(values, obj, fieldsForCompare) : compareForFind(values, obj)) >> 0;
              match = (nextCompare == 0);
              if (!match || (match && (objIndex == upperBound))) {
                found = true;
                index = (objIndex - (match ? 0 : 1)) >> 0;
              }
              objIndex++;
            }
            break;
          default:
            message = "unknownMode";
            throw new mx.collections.errors.SortError(message);
        }
        break;
      case 1:
        lowerBound = (index + 1) >> 0;
        break;
    }
  }
  if (!found && !returnInsertionIndex) {
    return -1;
  } else {
    return ((direction > 0) ? index + 1 : index) >> 0;
  }
};


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {string} property
 * @return {boolean}
 */
mx.collections.Sort.prototype.propertyAffectsSort = function(property) {
  if (this.mx_collections_Sort_usingCustomCompareFunction || !this.fields)
    return true;
  for (var /** @type {number} */ i = 0; i < this.fields.length; i++) {
    var /** @type {mx.collections.ISortField} */ field = this.fields[i];
    if (field.name == property || field.usingCustomCompareFunction) {
      return true;
    }
  }
  return false;
};


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
mx.collections.Sort.prototype.reverse = function() {
  if (this.fields) {
    for (var /** @type {number} */ i = 0; i < this.fields.length; i++) {
      org.apache.royale.utils.Language.as(this.fields[i], mx.collections.ISortField, true).reverse();
    }
  }
  this.mx_collections_Sort_noFieldsDescending = !this.mx_collections_Sort_noFieldsDescending;
};


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Array} items
 */
mx.collections.Sort.prototype.sort = function(items) {
  var self = this;
  if (!items || items.length <= 1) {
    return;
  }
  if (this.mx_collections_Sort_usingCustomCompareFunction) {
    
/**
 * @const
 * @type {Function}
 */
var fixedCompareFunction = function(a, b) {
      return (self.compareFunction(a, b, self.mx_collections_Sort__fields)) >> 0;
    };
    var /** @type {string} */ message;
    if (this.unique) {
      var /** @type {Object} */ uniqueRet1 = org.apache.royale.utils.Language.sort(items, fixedCompareFunction, 4);
      if (uniqueRet1 == 0) {
        message = "nonUnique";
        throw new mx.collections.errors.SortError(message);
      }
    } else {
      items.sort(fixedCompareFunction);
    }
  } else {
    if (this.fields && this.fields.length > 0) {
      var /** @type {Object} */ sortArgs = this.mx_collections_Sort_initSortFields(items[0], true);
      if (this.unique) {
        var /** @type {Object} */ uniqueRet2;
        if (this.http_$$www_adobe_com$2006$flex$mx$internal__useSortOn && sortArgs && this.fields.length == 1) {
          uniqueRet2 = org.apache.royale.utils.Language.sortOn(items, sortArgs.fields[0], sortArgs.options[0] | 4);
        } else {
          uniqueRet2 = org.apache.royale.utils.Language.sort(items, org.apache.royale.utils.Language.closure(this.mx_collections_Sort_internalCompare, this, 'internalCompare'), 4);
        }
        if (uniqueRet2 == 0) {
          message = "nonUnique";
          throw new mx.collections.errors.SortError(message);
        }
      } else {
        if (this.http_$$www_adobe_com$2006$flex$mx$internal__useSortOn && sortArgs) {
          org.apache.royale.utils.Language.sortOn(items, sortArgs.fields, sortArgs.options);
        } else {
          items.sort(org.apache.royale.utils.Language.closure(this.mx_collections_Sort_internalCompare, this, 'internalCompare'));
        }
      }
    } else {
      items.sort(org.apache.royale.utils.Language.closure(this.mx_collections_Sort_internalCompare, this, 'internalCompare'));
    }
  }
};


/**
 *  @asprivate
 *  Make sure all SortFields are ready to execute their comparators.
 * @private
 * @param {Object} item
 * @param {boolean=} buildArraySortArgs
 * @return {Object}
 */
mx.collections.Sort.prototype.mx_collections_Sort_initSortFields = function(item, buildArraySortArgs) {
  buildArraySortArgs = typeof buildArraySortArgs !== 'undefined' ? buildArraySortArgs : false;
  var /** @type {number} */ i = 0;
  var /** @type {Object} */ arraySortArgs = null;
  //var /** @type {number} */ i = 0;
  for (i = 0; i < this.fields.length; i++) {
    org.apache.royale.utils.Language.as(this.fields[i], mx.collections.ISortField, true).initializeDefaultCompareFunction(item);
  }
  if (buildArraySortArgs) {
    arraySortArgs = {fields:[], options:[]};
    for (i = 0; i < this.fields.length; i++) {
      var /** @type {mx.collections.ISortField} */ field = this.fields[i];
      var /** @type {number} */ options = field.arraySortOnOptions;
      if (options == -1) {
        return null;
      } else {
        arraySortArgs.fields.push(field.name);
        arraySortArgs.options.push(options);
      }
    }
  }
  return arraySortArgs;
};


/**
 *  @asprivate
 *  Compares the values specified based on the sort field options specified
 *  for this sort.  The fields parameter is really just used to get the
 *  number of fields to check.  We don't look at the actual values
 *  to see if they match the actual sort.
 * @private
 * @param {Object} a
 * @param {Object} b
 * @param {Array=} fields
 * @return {number}
 */
mx.collections.Sort.prototype.mx_collections_Sort_internalCompare = function(a, b, fields) {
  fields = typeof fields !== 'undefined' ? fields : null;
  var /** @type {number} */ result = 0;
  if (!this.mx_collections_Sort__fields) {
    result = this.mx_collections_Sort_noFieldsCompare(a, b);
  } else {
    var /** @type {number} */ i = 0;
    var /** @type {number} */ len = (fields ? fields.length : this.mx_collections_Sort__fields.length) >> 0;
    while (result == 0 && (i < len)) {
      var /** @type {mx.collections.ISortField} */ sf = org.apache.royale.utils.Language.as(this.mx_collections_Sort__fields[i], mx.collections.ISortField, true);
      result = (sf.compareFunction(a, b)) >> 0;
      if (sf.descending)
        result *= -1;
      i++;
    }
  }
  return result;
};


/**
 * @private
 * @type {mx.collections.ISortField}
 */
mx.collections.Sort.prototype.mx_collections_Sort_defaultEmptyField;


/**
 * @private
 * @type {boolean}
 */
mx.collections.Sort.prototype.mx_collections_Sort_noFieldsDescending = false;


/**
 *  If the sort does not have any sort fields nor a custom comparator
 *  just use an empty SortField object and have it use its default
 *  logic.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @private
 * @param {Object} a
 * @param {Object} b
 * @param {Array=} fields
 * @return {number}
 */
mx.collections.Sort.prototype.mx_collections_Sort_noFieldsCompare = function(a, b, fields) {
  fields = typeof fields !== 'undefined' ? fields : null;
  if (!this.mx_collections_Sort_defaultEmptyField) {
    this.mx_collections_Sort_defaultEmptyField = this.createEmptySortField();
    try {
      this.mx_collections_Sort_defaultEmptyField.initializeDefaultCompareFunction(a);
    } catch (e) {
      var /** @type {string} */ message = "noComparator";
      throw new mx.collections.errors.SortError(message);
    }
  }
  var /** @type {number} */ result = (this.mx_collections_Sort_defaultEmptyField.compareFunction(a, b)) >> 0;
  if (this.mx_collections_Sort_noFieldsDescending) {
    result *= -1;
  }
  return result;
};


/**
 * @export
 * @return {mx.collections.ISortField}
 */
mx.collections.Sort.prototype.createEmptySortField = function() {
  return new mx.collections.SortField();
};


mx.collections.Sort.prototype.get__compareFunction = function() {
  return this.mx_collections_Sort_usingCustomCompareFunction ? this.mx_collections_Sort__compareFunction : org.apache.royale.utils.Language.closure(this.mx_collections_Sort_internalCompare, this, 'internalCompare');
};


mx.collections.Sort.prototype.set__compareFunction = function(value) {
  this.mx_collections_Sort__compareFunction = value;
  this.mx_collections_Sort_usingCustomCompareFunction = this.mx_collections_Sort__compareFunction != null;
};


mx.collections.Sort.prototype.get__fields = function() {
  return this.mx_collections_Sort__fields;
};


mx.collections.Sort.prototype.set__fields = function(value) {
  this.mx_collections_Sort__fields = value;
  this.dispatchEvent(new org.apache.royale.events.Event("fieldsChanged"));
};


mx.collections.Sort.prototype.get__unique = function() {
  return this.mx_collections_Sort__unique;
};


mx.collections.Sort.prototype.set__unique = function(value) {
  this.mx_collections_Sort__unique = value;
};


Object.defineProperties(mx.collections.Sort.prototype, /** @lends {mx.collections.Sort.prototype} */ {
/**
  * @export
  * @type {Function} */
compareFunction: {
get: mx.collections.Sort.prototype.get__compareFunction,
set: mx.collections.Sort.prototype.set__compareFunction},
/**
  * @export
  * @type {Array} */
fields: {
get: mx.collections.Sort.prototype.get__fields,
set: mx.collections.Sort.prototype.set__fields},
/**
  * @export
  * @type {boolean} */
unique: {
get: mx.collections.Sort.prototype.get__unique,
set: mx.collections.Sort.prototype.set__unique}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.collections.Sort.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Sort', qName: 'mx.collections.Sort', kind: 'class' }], interfaces: [mx.collections.ISort] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.collections.Sort.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::useSortOn': { type: 'Boolean', get_set: function (/** mx.collections.Sort */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal__useSortOn = v : inst.http_$$www_adobe_com$2006$flex$mx$internal__useSortOn;}}
      };
    },
    accessors: function () {
      return {
        'compareFunction': { type: 'Function', access: 'readwrite', declaredBy: 'mx.collections.Sort'},
        'fields': { type: 'Array', access: 'readwrite', declaredBy: 'mx.collections.Sort', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'fieldsChanged' } ] } ]; }},
        'unique': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.collections.Sort'}
      };
    },
    methods: function () {
      return {
        'Sort': { type: '', declaredBy: 'mx.collections.Sort', parameters: function () { return [ 'Array', true ,'Function', true ,'Boolean', true ]; }},
        'findItem': { type: 'int', declaredBy: 'mx.collections.Sort', parameters: function () { return [ 'Array', false ,'Object', false ,'String', false ,'Boolean', true ,'Function', true ]; }},
        'propertyAffectsSort': { type: 'Boolean', declaredBy: 'mx.collections.Sort', parameters: function () { return [ 'String', false ]; }},
        'reverse': { type: 'void', declaredBy: 'mx.collections.Sort'},
        'sort': { type: 'void', declaredBy: 'mx.collections.Sort', parameters: function () { return [ 'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.collections.Sort.prototype.ROYALE_COMPILE_FLAGS = 26;
