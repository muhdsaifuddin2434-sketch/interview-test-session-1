function symmetricDifference(list1, list2) {
let result = [];
for (let i = 0; i < list1.length; i++) {
let found = false;
for (let j = 0; j < list2.length; j++) {
if (list1[i] === list2[j]) {
found = true;
break;
}
}
if (!found) {
result.push(list1[i]);
}
}
for (let i = 0; i < list2.length; i++) {
let found = false;
for (let j = 0; j < list1.length; j++) {
if (list2[i] === list1[j]) {
found = true;
break;
}
}
if (!found) {
result.push(list2[i]);}
}
return result;
}
let list1 = [4, 5, 2, 3, 1, 6];
let list2 = [8, 7, 6, 9, 4, 5];
// Output
console.log(symmetricDifference(list1, list2));