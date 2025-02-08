/** product: calculate the product of an array of numbers. */

function product(nums) {
 if (nums.length === 0) return 1;
 return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) { 
  // Base Case: this ensures that the recursion stops
    if(words.length === 0) return 0;
    const longestWord = longest(words.slice(1));

    if (words[0].length > longestWord) {
      return words[0].length;
    } else {
      return longestWord;
    }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

    if(str === "") return "";
    return str[0] + everyOther(str.slice(2));
}
 
/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length <= 1){
    return true;
  }
   if (str[0] !==str[str.length - 1]){
    return false;
   }
   return isPalindrome(str.substring(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(array, val, index = 0) {
     
    if (index >= array.length) {
      return -1;
    }
  
    if (array[index] === val) {
      return index;
    }
  
    return findIndex(array, val, index + 1);
  }

//   function findIndex(array, val) {
  
//     if (array.length === 0) {
//         return -1;
//     }

//     if (array[0] === val) {
//         return 0;
//     }

//     const result = findIndex(array.slice(1), val);

//     if (result === -1) {
//         return -1;
//     }

//     return result + 1;
// }


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
 if (str.length <= 1) return str;
 return revString(str.substring(1)) + str.charAt(0);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let result = [];

for (let key in obj) {
  if (typeof obj[key] === 'string'){
    result.push(obj[key]);
  } else if (typeof obj[key] === 'object' && obj[key] !== null){
    result = result.concat(gatherStrings(obj[key]));
  }
}
return result
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // Base case: If the start index is greater than the end, target is not in the array
  if (start > end) {
    return -1;
  }

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // If the target is found, return the index
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is smaller than the middle element, search the left half
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }

  // If the target is larger than the middle element, search the right half
  return binarySearch(arr, target, mid + 1, end);
}

// function binarySearch(arr, val) {
//   function search(start, end) {
//     // Base case: If the start index is greater than the end, target is not in the array
//     if (start > end) {
//       return -1;
//     }

//     // Find the middle index
//     let mid = Math.floor((start + end) / 2);

//     // If the target is found, return the index
//     if (arr[mid] === val) {
//       return mid;
//     }

//     // If the target is smaller than the middle element, search the left half
//     if (arr[mid] > val) {
//       return search(start, mid - 1);
//     }

//     // If the target is larger than the middle element, search the right half
//     return search(mid + 1, end);
//   }

//   return search(0, arr.length - 1);
// }


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
