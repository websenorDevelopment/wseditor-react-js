export function getBaseCanvasPercentage(
    parentWidth,
    elementWidth
  ) {
    let base = parentWidth / 100;
    let basePercent = elementWidth / base;
    return parseFloat(basePercent.toFixed(2));
  }
  
  export function getElementDimensionValue(
    basePercentage,
    baseWidth,
    elementWidth
  ) {
    let base = baseWidth / basePercentage;
    let basePercent = elementWidth / base;
    let result = (elementWidth / basePercent) * 100;
    return parseFloat(result.toFixed(2));
  }
  
  export function getDimensionValue(
    basePercentage,
    elementWidth
  ) {
    let result = (elementWidth / basePercentage) * 100;
    return parseFloat(result.toFixed(2));
  }
  
  export function getElementCenterPositionValue(
    parentDimensionsValue,
    elementPositionValue
  ) {
    let positionValue = parentDimensionsValue - elementPositionValue;
  
    return positionValue / 2;
  }