let N = Math.floor(Math.random() * (6 + 1 - 1)) + 1;//aの配列の個数
let W = Math.floor(Math.random() * (15 + 1 - 10)) + 10;//重さの総和
let a = new Array(N);

for (var i = 0; i < a.length; i++) {
  a[i] = Math.floor(Math.random() * (5 + 1 - 2)) + 2;//ここの要素からWを作る
}
let dp = new Array(N + 1);
for (var i = 0; i < dp.length; i++) {
  dp[i] = new Array(W + 1).fill(false);
}
dp[0][0] = true;

for (var i = 0; i < N; ++i) {
  for (var j = 0; j <= W; ++j) {
    if (dp[i][j] != true) {
      continue;
    }
    dp[i + 1][j] = true;
    if (j + a[i] <= W) {
      dp[i + 1][j + a[i]] = true;
    }
  }
}


if (dp[N][W] == true) {
  console.log("Yes");
}
else {
  console.log("No");
}