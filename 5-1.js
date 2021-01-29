let N = Math.floor(Math.random() * (4 + 1 - 1)) + 1;
let a = new Array(N);
for (var i = 0; i < a.length; i++) {
  a[i] = new Array(3);
  for (var j = 0; j < 3; j++) {
    a[i][j] = Math.floor(Math.random() * (5 + 1 - 1)) + 1;
  }
}
let dp = new Array(N + 1);
for (var i = 0; i < dp.length; i++) {
  dp[i] = new Array(3);
  for (var j = 0; j < 3; j++) {
    dp[i][j] = 0;
  }
}
for (var i = 0; i < N; ++i) {
  for (var j = 0; j < 3; ++j) {
    for (var k = 0; k < 3; ++k) {
      if (j == k) {
        continue;
      }
      if (dp[i + 1][k] < dp[i][j] + a[i][k]) {
        dp[i + 1][k] = dp[i][j] + a[i][k];
      }
    }
  }
}
var res = 0;
for (var j = 0; j < 3; ++j) {
  if (res < dp[N][j]) {
    res = dp[N][j];
  }
}
console.log(res);