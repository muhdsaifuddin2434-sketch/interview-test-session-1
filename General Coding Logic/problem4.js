function findIntersection(list1, list2) {
let result = [];
for (let i = 0; i < list1.length; i++) {
for (let j = 0; j < list2.length; j++) {
if (list1[i] === list2[j]) {
// Check if already added (avoid duplicates)
let exists = false;
for (let k = 0; k < result.length; k++) {
if (result[k] === list1[i]) {
exists = true;
break;
}
}
if (!exists) {
result.push(list1[i]);
}
}
}
}
return result;}
let list1 = [4, 5, 2, 3, 1, 6];
let list2 = [8, 7, 6, 9, 4, 5];
console.log(findIntersection(list1, list2));