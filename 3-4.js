var a = [4, 2, 12, 0, 14];
var diff = 0;
var test = 0;
for (var i = 0; i < a.length; i++){
  for (var j = i + 1; j < a.length; j++){
    if (a[i] > a[j]) {
      test = a[i] - a[j]
    } else {
      test = a[j] - a[i];
    }
    if (diff < test) {
      diff = test
    }
  }
}
console.log(diff);