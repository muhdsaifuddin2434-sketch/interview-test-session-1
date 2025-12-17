function squareRoot(x) {
if (x === 0 || x === 1) {
return x;
}
let i = 1;
while (i * i <= x) {
if (i * i === x) {
return i;
}
i++;
}
}