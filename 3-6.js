var K = 20;
var N = 9;

var X = 0;
var Y = 0;
var Z = 0;

var arr = new Array();

for (var i = 0; i < K; i++) {
  X = i;
  var test = N - X;
  if (test < 0) {
    break;
  }
  for (var j = 0; j < test; j++){
    Y = j;
    Z = test - Y;
  }
  arr.push(X, Y, Z);
}
console.log(arr)
