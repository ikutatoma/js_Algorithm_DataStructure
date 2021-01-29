
var a = [4, 2, 12, 7, 11];
var N = a.length;
var min = a[0];
var ind;
a.map(function (value,index) {
  if (min > value) {
    min = value;
    ind = index;
  }
})
a.splice(ind, 1);
var secondMin = a[0];

a.map(function (value) {
  if (secondMin > value) {
    secondMin = value;
  }
})
console.log(secondMin)
