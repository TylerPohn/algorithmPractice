/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time?

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(nums, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/
var twoSum = function (arr, target) {
  var cache = {};
  for (var i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) return true;
    var compliment = target - arr[i];
    cache[compliment] = true;
  }
  return false;
};
console.log(twoSum([2, 5, 11, 15], 7));
