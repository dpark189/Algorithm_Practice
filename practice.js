
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
    let otherVal = target - nums[i];
    let otherId = nums.indexOf(target-nums[i]);
    if ( (otherId !== -1) && (otherId !== i)) {
      return ans.concat([i, otherId]);
    } else {
      continue;
    }
  }
  return ans;
};


// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 // * @param {ListNode} l1
 // * @param {ListNode} l2
 // * @return {ListNode}
 // */

 //  ListNode.prototype.makeArray = function() {
 //     if (!this.next) return [this.val];
 //     let values = [this.val].concat(this.next.makeArray());
 //     return values;
 //  };

 //   ListNode.prototype.join = function (arg) {
 //     // if (!arg.next) return `${arg}`;
 //     const arr = this.makeArray().reverse();
 //     let ans = "";
 //     for (let i = 0; i < arr.length; i++) {
 //       ans = ans + (i === arr.length - 1 ? arg : "") + arr[i];
 //     }
 //     return ans;
 //   };

 // function fullNumber (num) {
 //         let parts = num.toString().split("e+");
 //         let first = parts[0].replace('.', "");
 //         let zeroes = parseInt(parts[1], 10) - (first.length - 1);
 //         for(let i = 0; i < zeroes; i++){ first += "0"; }
 //         num = first;
 // }

 var addTwoNumbers = function(l1, l2) {
     let dummyHead = new ListNode(0);
     let node = dummyHead;
     let carry = 0, a, b, c, val;
     while (l1 !== null || l2 !== null ) {
         a = (l1 === null) ? 0 : l1.val;
         b = (l2 === null) ? 0 : l2.val;
         c = a + b + carry;
         val = c % 10;
         carry = Math.floor(c / 10);
         node.next = new ListNode(val);
         node = node.next;
         if ( l1 !== null ) l1 = l1.next;
         if ( l2 !== null ) l2 = l2.next;
     }
     if (carry !== 0) {
         node.next = new ListNode(carry);
     }
     return dummyHead.next;
 };


// Given a string, find the length of the longest substring without repeating characters.
//
// Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", which the length is 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  const subs = substrings(s);
  return subs.sort((el1, el2) => {return el2.length - el1.length;})[0].length;
};

function substrings(str) {
  const letters = str.split("");
  const subs = [];
  for (let i = 0; i < letters.length; i++) {
    let temp = "";
    temp = temp + letters[i];
    for (let j = i+1; j < letters.length; j++) {
      if (temp.includes(letters[j])) break;
      temp = temp + letters[j];
    }
    subs.push(temp);
  }
  return subs;
}

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// You may assume nums1 and nums2 cannot be both empty.
//
// Example 1:
//
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
//
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5

var findMedianSortedArrays = function(nums1, nums2) {
    const nums = nums1.concat(nums2).sort((el1, el2) => {return el1 - el2;});
    let floorEl, ceilEl, floor = Math.floor(nums.length/2), ceil, ans;
    floorEl = nums[floor];
    if (nums.length % 2 === 0){
        ceil = Math.ceil(nums.length/2);
        ceilEl = nums[ceil];
        floor = ceil - 1;
        floorEl = nums[floor];
        ans = (ceilEl + floorEl)/2;
    } else {
        ans = floorEl;
    }
    return ans;
};


// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
  if (!s) return s;
  if (checkPal(s)) return s;
  const palSubs = subs(s);
  let largest = "";
  let length = 0;
  palSubs.forEach(el => {
    const elLength = el.length;
    if (elLength > length) {
      largest = el;
      length = elLength;
    }
  });
  if (!largest) {
    return s[0];
  } else {
    return largest;
  }
}


function subs (str) {
  const arr = str.split("");
  const subs = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    subs.push(arr[i]);
    for (var j = i + 1; j < arr.length; j++) {
      temp = temp + arr[j];
        if (checkPal(temp)) {
            subs.push(temp);
        }
    }
  }
  return subs;
}

function checkPal (str) {
  const arr = str.split("");
  let bool = true;
  for (var i = 0; i < Math.floor(arr.length/2) && bool === true; i++) {
    if (arr[i] === arr[arr.length - 1 - i]) {
      continue;
    } else {
      bool = false;
      break;
    }
  }
  return bool;
}


// let str = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// let str = "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir";
let str = "jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx";
console.log(longestPalindrome(str));
// console.log(longestPalindrome("babab"));
// console.log(checkPal("babab"));

var longestPalindrome = function(s) {
  if (s == null || s.length < 1) return "";
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const length1 = pal(s, i, i);
    const length2 = pal(s, i, i + 1);
    const length = Math.max(length1, length2);
    if (length > end - start) {
      start = Math.round(i - (length-1)/2);
      end = i + length / 2;
    }
    if (length === 2) {
        console.log(`i: ${i}`);
      console.log(start);
      console.log(end);
    }
  }

  return s.substring(start, end + 1);
};


function pal (str, i, j) {
  let left = i;
  let right = j;
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left --;
    right ++;
  }
  return right - left - 1;
}

console.log(longestPalindrome("cbbd"))
