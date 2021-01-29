function fib(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  else if (n == 2) {
    return 2;
  }
  if (memo[n] != -1) {
    return memo[n];
  }
  return memo[n] = fib(n - 1) + fib(n - 2) + fib(n -3);
}
memo = new Array(50);
memo.fill(-1);
fib(49);


for (var n = 3; n < memo.length; ++n){
  console.log(`${n + 1}項目: ${memo[n]}`);
}
