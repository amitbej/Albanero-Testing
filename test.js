// --------------- Question 1 ---------------


function reverseAndCheckPrimeFactors(x) {
  let reversed = parseInt(x.toString().split("").reverse().join(""));

  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  }

  const primeFactors = [];
  for (let i = 2; i <= reversed; i++) {
    while (isPrime(i) && reversed % i === 0) {
      primeFactors.push(i);
      reversed /= i;
    }
  }

  return {
    result: primeFactors.length > 0 ? "Yes" : "No",
    factors: primeFactors,
  };
}

const result1 = reverseAndCheckPrimeFactors(123);
console.log(result1.result, "-", result1.factors);

const result2 = reverseAndCheckPrimeFactors(1000);
console.log(result2.result);

// --------------- Question 2 ---------------

function groupAnagrams(strs) {
  const anagrams = {};

  for (const word of strs) {
    const signature = word.split("").sort().join("");

    if (anagrams[signature]) {
      anagrams[signature].push(word);
    } else {
      anagrams[signature] = [word];
    }
  }

  const result = Object.values(anagrams);

  return result;
}

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1));

const strs2 = [""];
console.log(groupAnagrams(strs2));

const strs3 = ["a"];
console.log(groupAnagrams(strs3));

// --------------- Question 3 ---------------

function wordBreak(s, wordArray) {
  const n = s.length;

  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (const word of wordArray) {
      if (
        word.length <= i &&
        dp[i - word.length] &&
        s.substring(i - word.length, i) === word
      ) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}

const example1 = wordBreak("leetcode", ["leet", "code"]);
console.log(example1);

const example2 = wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
console.log(example2);

// --------------- Question 4 ---------------

function largestNumber(nums) {
  const compare = (a, b) => {
    const order1 = a.toString() + b.toString();
    const order2 = b.toString() + a.toString();
    return order2.localeCompare(order1);
  };

  nums.sort(compare);

  const result = nums.join("");

  return result[0] === "0" ? "0" : result;
}

const Output1 = largestNumber([10, 2]);
console.log(Output1);

const Output2 = largestNumber([3, 30, 34, 5, 9]);
console.log(Output2);

// --------------- Question 5 ---------------

function findKthLargest(nums, k) {
  if (k < 1 || k > nums.length) {
    return null;
  }

  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

const nums = [10, 4, 12, 9, 87, 34];
const k = 2;
const result = findKthLargest(nums, k);
console.log(result);
