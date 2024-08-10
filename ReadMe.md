  
 // Function to create a translation closure
function translate2d(dx, dy) {
    return function(x, y) {
      return [x + dx, y + dy];
    };
  }
  
  // Function to create a scaling closure
  function scale2d(sx, sy) {
    return function(x, y) {
      return [x * sx, y * sy];
    };
  }
  
  // Function to compose two transformations
  function composeTransform(f, g) {
    return function(x, y) {
      const [x1, y1] = f(x, y);
      return g(x1, y1);
    };
  }
  
  // Function to memoize a transformation
  function memoizeTransform(fn) {
    let lastArgs = null;
    let lastResult = null;
    return function(x, y) {
      if (lastArgs && lastArgs[0] === x && lastArgs[1] === y) {
        return lastResult;
      }
      lastArgs = [x, y];
      lastResult = fn(x, y);
      return lastResult;
    };
  }
  
 
  
  
  // Example usage
  const moveCoordinatesRight2Px = translate2d(2, 0);
  const doubleScale = scale2d(2, 2);
  const composedTransformations = composeTransform(
    moveCoordinatesRight2Px,
    doubleScale,
  );
  
  const tripleScale = scale2d(3, 3);
  const memoizedScale = memoizeTransform(tripleScale);
 
 // Test the functions
  console.log(moveCoordinatesRight2Px(4, 8)); // [6, 8]
  console.log(doubleScale(6, -3)); // [12, -6]
  console.log(composedTransformations(0, 1)); // [4, 2]
  console.log(memoizedScale(4, 3)); // [12, 9]
  console.log(memoizedScale(4, 3)); // [12, 9] (from memoized cache)