
var a = [4, 2, 12, 7, 11];
var v = 7
var foundId = -1;
var N = a.length;
for (var i = 0; i < N; ++i){
  if (a[i] == v) {
    foundId = i;
  }
}
console.log(foundId)