let N = 8;
let a = [3, 5, 8, 10, 14, 17, 21, 39];

function binary(key) {
  let left = 0;
  let right = a.length - 1;
  while (right >= left) {
    let mid = Math.ceil(left + (right - left) / 2);
    if (a[mid] == key) {
      return mid;
    }
    else if (a[mid] > key) {
      right = mid -1 ;
    }
    else if (a[mid] < key) {
      left = mid + 1;
    }
  }
  return -1;
}
console.log(binary(17));