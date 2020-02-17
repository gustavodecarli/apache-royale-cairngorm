/**
 * Generated by Apache Royale Compiler from mx/containers/utilityClasses/Flex.as
 * mx.containers.utilityClasses.Flex
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.containers.utilityClasses.Flex');
/* Royale Dependency List: mx.containers.utilityClasses.FlexChildInfo,mx.core.IUIComponent,org.apache.royale.core.ILayoutView,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
mx.containers.utilityClasses.Flex = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.containers.utilityClasses.Flex', mx.containers.utilityClasses.Flex);


/**
 *  This function sets the width of each child
 *  so that the widths add up to spaceForChildren.
 *  Each child is set to its preferred width
 *  if its percentWidth is zero.
 *  If it's percentWidth is a positive number
 *  the child grows depending on the size of its parent
 *  The height of each child is set to its preferred height.
 *  The return value is any extra space that's left over
 *  after growing all children to their maxWidth.
 *
 *  @asparam parent The parent container of the children.
 *
 *  @asparam spaceForChildren The space that is to be
 *  distributed across all the children.
 *
 *  @asparam h height for all children.
 *
 *  @asreturn Any extra space that's left over
 *  after growing all children to their maxWidth.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {org.apache.royale.core.ILayoutView} parent
 * @param {number} spaceForChildren
 * @param {number} h
 * @return {number}
 */
mx.containers.utilityClasses.Flex.flexChildWidthsProportionally = function(parent, spaceForChildren, h) {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ spaceToDistribute = spaceForChildren;
  var /** @type {number} */ totalPercentWidth = 0;
  var /** @type {Array} */ childInfoArray = [];
  var /** @type {mx.containers.utilityClasses.FlexChildInfo} */ childInfo;
  var /** @type {mx.core.IUIComponent} */ child;
  //var /** @type {number} */ i = 0;
  var /** @type {number} */ n = parent.numElements;
  for (i = 0; i < n; i++) {
    child = org.apache.royale.utils.Language.as(parent.getElementAt(i), mx.core.IUIComponent, true);
    var /** @type {number} */ percentWidth = child.percentWidth;
    var /** @type {number} */ percentHeight = child.percentHeight;
    var /** @type {number} */ height;
    if (!isNaN(percentHeight) && child.includeInLayout) {
      height = Math.max(child.minHeight, Math.min(child.maxHeight, ((percentHeight >= 100) ? h : h * percentHeight / 100)));
    } else {
      height = child.getExplicitOrMeasuredHeight();
    }
    if (!isNaN(percentWidth) && child.includeInLayout) {
      totalPercentWidth += percentWidth;
      childInfo = new mx.containers.utilityClasses.FlexChildInfo();
      childInfo.percent = percentWidth;
      childInfo.min = child.minWidth;
      childInfo.max = child.maxWidth;
      childInfo.height = height;
      childInfo.child = child;
      childInfoArray.push(childInfo);
    } else {
      var /** @type {number} */ width = child.getExplicitOrMeasuredWidth();
      if (child.scaleX == 1 && child.scaleY == 1) {
        child.setActualSize(Math.floor(width), Math.floor(height));
      } else {
        child.setActualSize(width, height);
      }
      if (child.includeInLayout) {
        spaceToDistribute -= child.width;
      }
    }
  }
  if (totalPercentWidth) {
    spaceToDistribute = mx.containers.utilityClasses.Flex.flexChildrenProportionally(spaceForChildren, spaceToDistribute, totalPercentWidth, childInfoArray);
    n = (childInfoArray.length) >> 0;
    for (i = 0; i < n; i++) {
      childInfo = childInfoArray[i];
      child = childInfo.child;
      if (child.scaleX == 1 && child.scaleY == 1) {
        child.setActualSize(Math.floor(childInfo.size), Math.floor(childInfo.height));
      } else {
        child.setActualSize(childInfo.size, childInfo.height);
      }
    }
    mx.containers.utilityClasses.Flex.distributeExtraWidth(parent, spaceForChildren);
  }
  return spaceToDistribute;
};


/**
 *  This function sets the height of each child
 *  so that the heights add up to spaceForChildren. 
 *  Each child is set to its preferred height
 *  if its percentHeight is zero.
 *  If its percentHeight is a positive number,
 *  the child grows (or shrinks) to consume its share of extra space.
 *  The width of each child is set to its preferred width.
 *  The return value is any extra space that's left over
 *  after growing all children to their maxHeight.
 *
 *  @asparam parent The parent container of the children.
 *
 *  @asparam spaceForChildren The space that is to be 
 *  distributed across all children .
 *
 *  @asparam w width for all children.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {org.apache.royale.core.ILayoutView} parent
 * @param {number} spaceForChildren
 * @param {number} w
 * @return {number}
 */
mx.containers.utilityClasses.Flex.flexChildHeightsProportionally = function(parent, spaceForChildren, w) {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ spaceToDistribute = spaceForChildren;
  var /** @type {number} */ totalPercentHeight = 0;
  var /** @type {Array} */ childInfoArray = [];
  var /** @type {mx.containers.utilityClasses.FlexChildInfo} */ childInfo;
  var /** @type {mx.core.IUIComponent} */ child;
  //var /** @type {number} */ i = 0;
  var /** @type {number} */ n = parent.numElements;
  for (i = 0; i < n; i++) {
    child = org.apache.royale.utils.Language.as(parent.getElementAt(i), mx.core.IUIComponent, true);
    var /** @type {number} */ percentWidth = child.percentWidth;
    var /** @type {number} */ percentHeight = child.percentHeight;
    var /** @type {number} */ width;
    if (!isNaN(percentWidth) && child.includeInLayout) {
      width = Math.max(child.minWidth, Math.min(child.maxWidth, ((percentWidth >= 100) ? w : w * percentWidth / 100)));
    } else {
      width = child.getExplicitOrMeasuredWidth();
    }
    if (!isNaN(percentHeight) && child.includeInLayout) {
      totalPercentHeight += percentHeight;
      childInfo = new mx.containers.utilityClasses.FlexChildInfo();
      childInfo.percent = percentHeight;
      childInfo.min = child.minHeight;
      childInfo.max = child.maxHeight;
      childInfo.width = width;
      childInfo.child = child;
      childInfoArray.push(childInfo);
    } else {
      var /** @type {number} */ height = child.getExplicitOrMeasuredHeight();
      if (child.scaleX == 1 && child.scaleY == 1) {
        child.setActualSize(Math.floor(width), Math.floor(height));
      } else {
        child.setActualSize(width, height);
      }
      if (child.includeInLayout) {
        spaceToDistribute -= child.height;
      }
    }
  }
  if (totalPercentHeight) {
    spaceToDistribute = mx.containers.utilityClasses.Flex.flexChildrenProportionally(spaceForChildren, spaceToDistribute, totalPercentHeight, childInfoArray);
    n = (childInfoArray.length) >> 0;
    for (i = 0; i < n; i++) {
      childInfo = childInfoArray[i];
      child = childInfo.child;
      if (child.scaleX == 1 && child.scaleY == 1) {
        child.setActualSize(Math.floor(childInfo.width), Math.floor(childInfo.size));
      } else {
        child.setActualSize(childInfo.width, childInfo.size);
      }
    }
    mx.containers.utilityClasses.Flex.distributeExtraHeight(parent, spaceForChildren);
  }
  return spaceToDistribute;
};


/**
 *  This function distributes excess space among the flexible children.
 *  It does so with a view to keep the children's overall size
 *  close the ratios specified by their percent.
 *
 *  @asparam spaceForChildren The total space for all children
 *
 *  @asparam spaceToDistribute The space that needs to be distributed
 *  among the flexible children.
 *
 *  @asparam childInfoArray An array of Objects. When this function
 *  is called, each object should define the following properties:
 *  - percent: the percentWidth or percentHeight of the child (depending
 *  on whether we're growing in a horizontal or vertical direction)
 *  - min: the minimum width (or height) for that child
 *  - max: the maximum width (or height) for that child
 *
 *  @asreturn When this function finishes executing, a "size" property
 *  will be defined for each child object. The size property contains
 *  the portion of the spaceToDistribute to be distributed to the child.
 *  Ideally, the sum of all size properties is spaceToDistribute.
 *  If all the children hit their minWidth/maxWidth/minHeight/maxHeight
 *  before the space was distributed, then the remaining unused space
 *  is returned. Otherwise, the return value is zero.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {number} spaceForChildren
 * @param {number} spaceToDistribute
 * @param {number} totalPercent
 * @param {Array} childInfoArray
 * @return {number}
 */
mx.containers.utilityClasses.Flex.flexChildrenProportionally = function(spaceForChildren, spaceToDistribute, totalPercent, childInfoArray) {
  var /** @type {number} */ numChildren = (childInfoArray.length) >> 0;
  var /** @type {number} */ flexConsumed;
  var /** @type {boolean} */ done;
  do {
    flexConsumed = 0;
    done = true;
    var /** @type {number} */ unused = spaceToDistribute - (spaceForChildren * totalPercent / 100);
    if (unused > 0)
      spaceToDistribute -= unused;
    else
      unused = 0;
    var /** @type {number} */ spacePerPercent = spaceToDistribute / totalPercent;
    for (var /** @type {number} */ i = 0; i < numChildren; i++) {
      var /** @type {mx.containers.utilityClasses.FlexChildInfo} */ childInfo = childInfoArray[i];
      var /** @type {number} */ size = childInfo.percent * spacePerPercent;
      if (size < childInfo.min) {
        var /** @type {number} */ min = childInfo.min;
        childInfo.size = min;
        childInfoArray[i] = childInfoArray[--numChildren];
        childInfoArray[numChildren] = childInfo;
        totalPercent -= childInfo.percent;
        if (unused >= min) {
          unused -= min;
        } else {
          spaceToDistribute -= min - unused;
          unused = 0;
        }
        done = false;
        break;
      } else if (size > childInfo.max) {
        var /** @type {number} */ max = childInfo.max;
        childInfo.size = max;
        childInfoArray[i] = childInfoArray[--numChildren];
        childInfoArray[numChildren] = childInfo;
        totalPercent -= childInfo.percent;
        if (unused >= max) {
          unused -= max;
        } else {
          spaceToDistribute -= max - unused;
          unused = 0;
        }
        done = false;
        break;
      } else {
        childInfo.size = size;
        flexConsumed += size;
      }
    }
  } while (!done);
  return Math.max(0, Math.floor((spaceToDistribute + unused) - flexConsumed));
};


/**
 *  This function distributes excess space among the flexible children
 *  because of rounding errors where we want to keep children's dimensions 
 *  full pixel amounts.  This only distributes the extra space 
 *  if there was some rounding down and there are still 
 *  flexible children.
 *
 *  @asparam parent The parent container of the children.
 * 
 *  @asparam spaceForChildren The total space for all children
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {org.apache.royale.core.ILayoutView} parent
 * @param {number} spaceForChildren
 */
mx.containers.utilityClasses.Flex.distributeExtraHeight = function(parent, spaceForChildren) {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = parent.numElements;
  var /** @type {boolean} */ wantToGrow = false;
  //var /** @type {number} */ i = 0;
  var /** @type {number} */ percentHeight;
  var /** @type {number} */ spaceToDistribute = spaceForChildren;
  var /** @type {number} */ spaceUsed = 0;
  var /** @type {mx.core.IUIComponent} */ child;
  var /** @type {number} */ childHeight;
  var /** @type {number} */ wantSpace;
  for (i = 0; i < n; i++) {
    child = org.apache.royale.utils.Language.as(parent.getElementAt(i), mx.core.IUIComponent, true);
    if (!child.includeInLayout)
      continue;
    childHeight = child.height;
    percentHeight = child.percentHeight;
    spaceUsed += childHeight;
    if (!isNaN(percentHeight)) {
      wantSpace = Math.ceil(percentHeight / 100 * spaceForChildren);
      if (wantSpace > childHeight)
        wantToGrow = true;
    }
  }
  if (!wantToGrow)
    return;
  spaceToDistribute -= spaceUsed;
  var /** @type {boolean} */ stillFlexibleComponents = true;
  while (stillFlexibleComponents && spaceToDistribute >= 1.0) {
    stillFlexibleComponents = false;
    for (i = 0; i < n; i++) {
      child = org.apache.royale.utils.Language.as(parent.getElementAt(i), mx.core.IUIComponent, true);
      childHeight = child.height;
      percentHeight = child.percentHeight;
      if (!isNaN(percentHeight) && child.includeInLayout && childHeight < child.maxHeight) {
        wantSpace = Math.ceil(percentHeight / 100 * spaceForChildren);
        if (wantSpace > childHeight) {
          child.setActualSize(child.width, childHeight + 1);
          spaceToDistribute--;
          stillFlexibleComponents = true;
          if (spaceToDistribute == 0)
            return;
        }
      }
    }
  }
};


/**
 *  This function distributes excess space among the flexible children
 *  because of rounding errors where we want to keep children's dimensions 
 *  full pixel amounts.  This only distributes the extra space 
 *  if there was some rounding down and there are still 
 *  flexible children.
 *
 *  @asparam parent The parent container of the children.
 * 
 *  @asparam spaceForChildren The total space for all children
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {org.apache.royale.core.ILayoutView} parent
 * @param {number} spaceForChildren
 */
mx.containers.utilityClasses.Flex.distributeExtraWidth = function(parent, spaceForChildren) {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = parent.numElements;
  var /** @type {boolean} */ wantToGrow = false;
  //var /** @type {number} */ i = 0;
  var /** @type {number} */ percentWidth;
  var /** @type {number} */ spaceToDistribute = spaceForChildren;
  var /** @type {number} */ spaceUsed = 0;
  var /** @type {mx.core.IUIComponent} */ child;
  var /** @type {number} */ childWidth;
  var /** @type {number} */ wantSpace;
  for (i = 0; i < n; i++) {
    child = org.apache.royale.utils.Language.as(parent.getElementAt(i), mx.core.IUIComponent, true);
    if (!child.includeInLayout)
      continue;
    childWidth = child.width;
    percentWidth = child.percentWidth;
    spaceUsed += childWidth;
    if (!isNaN(percentWidth)) {
      wantSpace = Math.ceil(percentWidth / 100 * spaceForChildren);
      if (wantSpace > childWidth)
        wantToGrow = true;
    }
  }
  if (!wantToGrow)
    return;
  spaceToDistribute -= spaceUsed;
  var /** @type {boolean} */ stillFlexibleComponents = true;
  while (stillFlexibleComponents && spaceToDistribute >= 1.0) {
    stillFlexibleComponents = false;
    for (i = 0; i < n; i++) {
      child = org.apache.royale.utils.Language.as(parent.getElementAt(i), mx.core.IUIComponent, true);
      childWidth = child.width;
      percentWidth = child.percentWidth;
      if (!isNaN(percentWidth) && child.includeInLayout && childWidth < child.maxWidth) {
        wantSpace = Math.ceil(percentWidth / 100 * spaceForChildren);
        if (wantSpace > childWidth) {
          child.setActualSize(childWidth + 1, child.height);
          spaceToDistribute--;
          stillFlexibleComponents = true;
          if (spaceToDistribute == 0)
            return;
        }
      }
    }
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.containers.utilityClasses.Flex.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Flex', qName: 'mx.containers.utilityClasses.Flex', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.containers.utilityClasses.Flex.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|flexChildWidthsProportionally': { type: 'Number', declaredBy: 'mx.containers.utilityClasses.Flex', parameters: function () { return [ 'org.apache.royale.core.ILayoutView', false ,'Number', false ,'Number', false ]; }},
        '|flexChildHeightsProportionally': { type: 'Number', declaredBy: 'mx.containers.utilityClasses.Flex', parameters: function () { return [ 'org.apache.royale.core.ILayoutView', false ,'Number', false ,'Number', false ]; }},
        '|flexChildrenProportionally': { type: 'Number', declaredBy: 'mx.containers.utilityClasses.Flex', parameters: function () { return [ 'Number', false ,'Number', false ,'Number', false ,'Array', false ]; }},
        '|distributeExtraHeight': { type: 'void', declaredBy: 'mx.containers.utilityClasses.Flex', parameters: function () { return [ 'org.apache.royale.core.ILayoutView', false ,'Number', false ]; }},
        '|distributeExtraWidth': { type: 'void', declaredBy: 'mx.containers.utilityClasses.Flex', parameters: function () { return [ 'org.apache.royale.core.ILayoutView', false ,'Number', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.containers.utilityClasses.Flex.prototype.ROYALE_COMPILE_FLAGS = 26;
