let N = 8;
let a = [3, 5, 8, 10, 14, 17, 21, 39];


function binarySarch(key) {
  var left = 0;
  var right = a.length - 1;
  while (right >= left) {
    var mid = Math.ceil(left + (right - left) / 2);
    if (a[mid] == key) {
      return mid;
    } else if (a[mid] > key) {
      right = mid - 1;
    } else if (a[mid] < key) {
      left = mid + 1;
    }
  }
    return -1;
}

console.log(binarySarch(10));
console.log(binarySarch(3));
console.log(binarySarch(14));
console.log(binarySarch(17));
console.log(binarySarch(21));
console.log(binarySarch(39));