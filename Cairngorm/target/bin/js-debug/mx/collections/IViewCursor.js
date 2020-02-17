/**
 * Generated by Apache Royale Compiler from mx/collections/IViewCursor.as
 * mx.collections.IViewCursor
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.collections.IViewCursor');
/* Royale Dependency List: mx.collections.CursorBookmark,mx.collections.ICollectionView,XML*/

goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
mx.collections.IViewCursor = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.collections.IViewCursor', mx.collections.IViewCursor);
/**  * @type {boolean}
 */mx.collections.IViewCursor.prototype.afterLast;
/**  * @type {boolean}
 */mx.collections.IViewCursor.prototype.beforeFirst;
/**  * @type {mx.collections.CursorBookmark}
 */mx.collections.IViewCursor.prototype.bookmark;
/**  * @type {Object}
 */mx.collections.IViewCursor.prototype.current;
/**  * @type {mx.collections.ICollectionView}
 */mx.collections.IViewCursor.prototype.view;
/**
 *  Finds an item with the specified properties within the collection
 *  and positions the cursor to that item.
 *  If the item cannot be found, the cursor location does not change.
 *
 *  <p>The <code>findAny()</code> method can only be called on sorted views;
 *  if the view isn't sorted, a <code>CursorError</code> is thrown.</p>
 *  
 *  <p>If the associated collection is remote, and not all of the items
 *  have been cached locally, this method begins an asynchronous fetch
 *  from the remote collection. If one is already in progress, this method
 *  waits for it to complete before making another fetch request.</p>
 *
 *  <p>If multiple items can match the search criteria then the item found
 *  is non-deterministic.
 *  If it is important to find the first or last occurrence of an item
 *  in a non-unique index, use the <code>findFirst()</code> or
 *  <code>findLast()</code> method.</p>
 *
 *  <p>If the data is not local and an asynchronous operation must be
 *  performed, an ItemPendingError is thrown.</p>
 *  
 *  @asparam values The search criteria. The values in the Object must be configured as name-value pairs,
 *  as in an associative array (or be the actual object to search for). The values of the names specified must match properties
 *  specified in the sort. For example, if properties <code>x</code>, <code>y</code>, and
 *  <code>z</code> are in the current sort, the values specified should be
 *  <code>{x: <i>x-value</i>, y: <i>y-value</i>, z: <i>z-value</i>}</code>.
 *
 *  @asreturn When all of the data is local this method returns
 *  <code>true</code> if the item can be found and <code>false</code>
 *  otherwise. 
 *
 *  @see #findFirst()
 *  @see #findLast()
 *  @see mx.collections.errors.ItemPendingError
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @param {Object} values
 * @return {boolean}
 */
mx.collections.IViewCursor.prototype.findAny = function(values) {
};
/**
 *  Finds the first item with the specified properties within the collection
 *  and positions the cursor to that item.
 *  If the item cannot be found, no cursor location does not change.
 *
 *  <p>The <code>findFirst()</code> method can only be called on sorted views;
 *  if the view isn't sorted, a <code>CursorError</code> is thrown.</p>
 *  
 *  <p>If the associated collection is remote, and not all of the items
 *  have been cached locally, this method begins an asynchronous fetch
 *  from the remote collection. If one is already in progress, this method
 *  waits for it to complete before making another fetch request.</p>
 *
 *  <p>If it is not important to find the first occurrence of an item
 *  in a non-unique index, use <code>findAny()</code>, which may be
 *  a little faster than the <code>findFirst() method</code>.</p>
 *
 *  <p>If the data is not local and an asynchronous operation must be
 *  performed, an ItemPendingError is thrown.</p>
 *
 *  @asparam values The search criteria. The values in the Object must be configured as name-value pairs,
 *  as in an associative array (or be the actual object to search for). The values of the names
 *  specified must match properties specified in the sort. For example, if properties <code>x</code>,
 *  <code>y</code>, and <code>z</code> are in the current sort, the values specified should be
 *  <code>{x: <i>x-value</i>, y: <i>y-value</i>, z: <i>z-value</i>}</code>.
 *
 *  @asreturn When all of the data is local this method returns
 *  <code>true</code> if the item can be found and <code>false</code>
 *  otherwise. 
 *  
 *  @see #findAny()
 *  @see #findLast()
 *  @see mx.collections.errors.ItemPendingError
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @param {Object} values
 * @return {boolean}
 */
mx.collections.IViewCursor.prototype.findFirst = function(values) {
};
/**
 *  Finds the last item with the specified properties within the collection
 *  and positions the cursor on that item.
 *  If the item cannot be found, the cursor location does not chanage.
 *
 *  <p>The <code>findLast()</code> method can only be called on sorted views;
 *  if the view isn't sorted, a <code>CursorError</code> is thrown.</p>
 *  
 *  <p>If the associated collection is remote, and not all of the items
 *  have been cached locally, this method begins an asynchronous fetch
 *  from the remote collection. If one is already in progress, this method
 *  waits for it to complete before making another fetch request.</p>
 *
 *  <p>If it is not important to find the last occurrence of an item
 *  in a non-unique index, use the <code>findAny()</code> method, which
 *  may be a little faster.</p>
 *
 *  <p>If the data is not local and an asynchronous operation must be
 *  performed, an ItemPendingError is thrown.</p>
 *
 *  @asparam values The search criteria. The values in the Object must be configured as name-value pairs,
 *  as in an associative array (or be the actual object to search for). The values of the names
 *  specified must match properties specified in the sort. For example, if properties <code>x</code>,
 *  <code>y</code>, and <code>z</code> are in the current sort, the values specified should be
 *  <code>{x: <i>x-value</i>, y: <i>y-value</i>, z: <i>z-value</i>}</code>.
 *
 *  @asreturn When all of the data is local this method returns
 *  <code>true</code> if the item can be found and <code>false</code>
 *  otherwise. 
 *  
 *  @see #findAny()
 *  @see #findFirst()
 *  @see mx.collections.errors.ItemPendingError
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @param {Object} values
 * @return {boolean}
 */
mx.collections.IViewCursor.prototype.findLast = function(values) {
};
/**
 *  Inserts the specified item before the cursor's current position.
 *  If the cursor is <code>afterLast</code>,
 *  the insertion occurs at the end of the view.
 *  If the cursor is <code>beforeFirst</code> on a non-empty view,
 *  an error is thrown.
 *  
 *  @asparam item The item to insert before the cursor's current position.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @param {Object} item
 */
mx.collections.IViewCursor.prototype.insert = function(item) {
};
/**
 *  Moves the cursor to the next item within the collection.
 *  On success the <code>current</code> property is updated
 *  to reference the object at this new location.
 *  Returns <code>true</code> if the resulting <code>current</code> 
 *  property is valid, or <code>false</code> if not 
 *  (the property value is <code>afterLast</code>).
 *
 *  <p>If the data is not local and an asynchronous operation must be performed,
 *  an ItemPendingError is thrown.
 *  See the ItemPendingError documentation and  the collections
 *  documentation for more information on using the ItemPendingError.</p>
 *
 *  @asreturn <code>true</code> if still in the list,
 *  <code>false</code> if the <code>current</code> value initially was
 *  or now is <code>afterLast</code>.
 *
 *  @see #current
 *  @see #movePrevious()
 *  @see mx.collections.errors.ItemPendingError
 *
 *  @example
 *  <pre>
 *  var myArrayCollection:ICollectionView = new ArrayCollection([ "Bobby", "Mark", "Trevor", "Jacey", "Tyler" ]);
 *  var cursor:IViewCursor = myArrayCollection.createCursor();
 *  while (!cursor.afterLast)
 *  {
 *      trace(cursor.current);
 *      cursor.moveNext();
 *  }
 *  </pre>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @return {boolean}
 */
mx.collections.IViewCursor.prototype.moveNext = function() {
};
/**
 *  Moves the cursor to the previous item within the collection.
 *  On success the <code>current</code> property is updated
 *  to reference the object at this new location.
 *  Returns <code>true</code> if the resulting <code>current</code> 
 *  property is valid, or <code>false</code> if not 
 *  (the property value is <code>beforeFirst</code>).
 *
 *  <p>If the data is not local and an asynchronous operation must be performed,
 *  an ItemPendingError is thrown.
 *  See the ItemPendingError documentation and the collections
 *  documentation for more information on using the ItemPendingError.</p>
 *
 *  @asreturn <code>true</code> if still in the list,
 *  <code>false</code> if the <code>current</code> value initially was or
 *  now is <code>beforeFirst</code>.
 *
 *  For example:
 *  <pre>
 *  var myArrayCollection:ICollectionView = new ArrayCollection([ "Bobby", "Mark", "Trevor", "Jacey", "Tyler" ]);
 *  var cursor:IViewCursor = myArrayCollection.createCursor();
 *  cursor.seek(CursorBookmark.last);
 *  while (!cursor.beforeFirst)
 *  {
 *      trace(current);
 *      cursor.movePrevious();
 *  }
 *  </pre>
 *
 *  @see #current
 *  @see #moveNext()
 *  @see mx.collections.errors.ItemPendingError
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @return {boolean}
 */
mx.collections.IViewCursor.prototype.movePrevious = function() {
};
/**
 *  Removes the current item and returns it.
 *  If the cursor location is <code>beforeFirst</code> or 
 *  <code>afterLast</code>, throws a CursorError. 
 *  If you remove any item other than the last item,
 *  the cursor moves to the next item. If you remove the last item, the
 *  cursor is at the AFTER_LAST bookmark.
 *  
 *  <p>If the item after the removed item is not local and an asynchronous 
 *  operation must be performed, an ItemPendingError is thrown. 
 *  See the ItemPendingError documentation and the collections
 *  documentation  for more information on using the ItemPendingError.</p>
 * 
 *  @asreturn The item that was removed.
 *  
 *  @see mx.collections.errors.ItemPendingError
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @return {Object}
 */
mx.collections.IViewCursor.prototype.remove = function() {
};
/**
 *  Moves the cursor to a location at an offset from the specified
 *  bookmark.
 *  The offset can be negative, in which case the cursor is positioned
 *  an <code>offset</code> number of items prior to the specified bookmark.
 *
 *  <p>If the associated collection is remote, and not all of the items
 *  have been cached locally, this method begins an asynchronous fetch
 *  from the remote collection.</p>
 *
 *  <p>If the data is not local and an asynchronous operation
 *  must be performed, an ItemPendingError is thrown.
 *  See the ItemPendingError documentation and the collections
 *  documentation for more information on using the ItemPendingError.</p>
 *
 *  @asparam bookmark <code>CursorBookmark</code> reference to marker
 *  information that allows repositioning to a specific location.
 *  You can set this parameter to value returned from the
 *  <code>bookmark</code> property, or to one of the following constant 
 *  bookmark values:
 *  <ul>
 *    <li><code>CursorBookmark.FIRST</code> -
 *    Seek from the start (first element) of the collection</li>
 *    <li><code>CursorBookmark.CURRENT</code> -
 *    Seek from the current position in the collection</li>
 *    <li><code>CursorBookmark.LAST</code> -
 *    Seek from the end (last element) of the collection</li>
 *  </ul>
 *
 *  @asparam offset Indicates how far from the specified bookmark to seek.
 *  If the specified number is negative, the cursor attempts to
 *  move prior to the specified bookmark.
 *  If the offset specified is beyond the end of the collection,
 *  the cursor is be positioned off the end, to the 
 *  <code>beforeFirst</code> or <code>afterLast</code> location.
 *
 *  @asparam prefetch Used for remote data. Indicates an intent to iterate 
 *  in a specific direction once the seek operation completes.
 *  This reduces the number of required network round trips during a seek.
 *  If the iteration direction is known at the time of the request,
 *  the appropriate amount of data can be returned ahead of the request
 *  to iterate it.
 * 
 *  @see mx.collections.errors.ItemPendingError
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @param {mx.collections.CursorBookmark} bookmark
 * @param {number=} offset
 * @param {number=} prefetch
 */
mx.collections.IViewCursor.prototype.seek = function(bookmark, offset, prefetch) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.collections.IViewCursor.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IViewCursor', qName: 'mx.collections.IViewCursor', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.collections.IViewCursor.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'afterLast': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.collections.IViewCursor', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'cursorUpdate' } ] } ]; }},
        'beforeFirst': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.collections.IViewCursor', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'cursorUpdate' } ] } ]; }},
        'bookmark': { type: 'mx.collections.CursorBookmark', access: 'readonly', declaredBy: 'mx.collections.IViewCursor', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'cursorUpdate' } ] } ]; }},
        'current': { type: 'Object', access: 'readonly', declaredBy: 'mx.collections.IViewCursor', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'cursorUpdate' } ] } ]; }},
        'view': { type: 'mx.collections.ICollectionView', access: 'readonly', declaredBy: 'mx.collections.IViewCursor'}
      };
    },
    methods: function () {
      return {
        'findAny': { type: 'Boolean', declaredBy: 'mx.collections.IViewCursor', parameters: function () { return [ 'Object', false ]; }},
        'findFirst': { type: 'Boolean', declaredBy: 'mx.collections.IViewCursor', parameters: function () { return [ 'Object', false ]; }},
        'findLast': { type: 'Boolean', declaredBy: 'mx.collections.IViewCursor', parameters: function () { return [ 'Object', false ]; }},
        'insert': { type: 'void', declaredBy: 'mx.collections.IViewCursor', parameters: function () { return [ 'Object', false ]; }},
        'moveNext': { type: 'Boolean', declaredBy: 'mx.collections.IViewCursor'},
        'movePrevious': { type: 'Boolean', declaredBy: 'mx.collections.IViewCursor'},
        'remove': { type: 'Object', declaredBy: 'mx.collections.IViewCursor'},
        'seek': { type: 'void', declaredBy: 'mx.collections.IViewCursor', parameters: function () { return [ 'mx.collections.CursorBookmark', false ,'int', true ,'int', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.collections.IViewCursor.prototype.ROYALE_COMPILE_FLAGS = 26;
