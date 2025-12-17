 function areAnagrams(str1, str2) {
// Helper function to normalize strings: remove non-letter characters and lowercase
const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '');
str1 = normalize(str1);
str2 = normalize(str2);
// Quick check: if lengths differ, they cannot be anagrams
if (str1.length !== str2.length) return false;
// Count characters for str1
const charCount = {};
for (let char of str1) {
charCount[char] = (charCount[char] || 0) + 1;
}
// Verify characters in str2 match the counts
for (let char of str2) {
if (!charCount[char]) {
return false; // extra char or too many occurrences
}
charCount[char]--;
}
return true;
}
// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("debit card", "Bad credit")); // true
console.log(areAnagrams("hello", "bye")); // false
console.log(areAnagrams("restful", "fluster")); // true
console.log(areAnagrams("listen", "silentt")); // false
console.log(areAnagrams("Conversation", "Voices, rant on")); //true