function numTFS(n) {
  if (String(n).lastIndexOf(3) != -1 && String(n).lastIndexOf(5) != -1 && String(n).lastIndexOf(7) != -1) {
    memo[x] = n;
    x++;
  }
  if (n < 357) {
    return 0;
  }
  return numTFS(n - 1);
}

memo = new Array();
x = 0;
var N = 1000;
numTFS(N);
console.log(memo);
console.log(x);