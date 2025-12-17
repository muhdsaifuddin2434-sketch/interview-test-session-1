function maxOccurringCharacter(str) {
let frequency = {};
let maxChar = null;
let maxCount = 0;
for (let char of str) {
if (!char.match(/\p{L}|\p{N}/u)) {
continue;
}
if (frequency[char] === undefined) {
frequency[char] = 1;
} else {
frequency[char]++;
}
if (frequency[char] > maxCount) {
maxCount = frequency[char];
maxChar = char;
}}
return {
character: maxChar,
occurrence: maxCount
};
}
// Input
let input = "Hello, world!";
// Output
let result = maxOccurringCharacter(input);
console.log("Character:", result.character);
console.log("Occurrence:", result.occurrence);