var a = [4, 2.2, 12, 7, 11];
var V = 0;
a.map(function (value) {
  if (Number.isInteger(value) == true) {
    V++
  }
})
console.log(V);