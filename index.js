const threeSum = (arr, target) => {
  const cache = new Map();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (cache.has(arr[j])) {
        return true;
      }
      cache.set(target - arr[i] - arr[j], true);
    }
  }
  return false;
};

console.log(threeSum([4, 6, 8, 2], 14));
