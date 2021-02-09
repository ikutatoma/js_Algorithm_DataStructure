const value = [500, 100, 50, 10, 5, 1];
let X = 1250;
let a = [2, 3, 2, 10, 2, 10];
let result = 0;
for (var i = 0; i < 6; i++) {
  var add = Math.ceil(X / value[i]);
  if (add > a[i]) {
    add = a[i];
  }
  X -= Math.ceil(value[i] * add);

  result += add;
}
console.log(result);
