// 1 - Write a function to reverse a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}


console.log(reverseString("hello")); 

// 2-Write a function that returns the largest number from an array of numbers.

function largestNumber(arr) {
    return Math.max(...arr);
}

console.log(largestNumber([1, 2, 3, 4, 5])); // Output: 5

// 3- Write a function that prints the numbers from 1 to 100. But for 
// multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
//  For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


fizzBuzz();


// 4- Write a function to check if a given string is a palindrome.

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

// 5- Write a function to remove duplicates from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// 6-  Write a function to calculate the factorial of a number.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


console.log(factorial(5)); // Output: 120

// 7- Write a function to calculate the sum of all numbers in an array.
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// 8- Write a function to merge two sorted arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// 9- Write a function to flatten a nested array.

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}


console.log(flattenArray([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]

// 10-  Write a function to find the index of a value in a sorted array using binary search.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2



