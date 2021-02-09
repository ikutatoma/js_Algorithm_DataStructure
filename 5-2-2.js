let N = 6;
let W = 15;
let weight = new Array(N);
let value = new Array(N);

let dp = new Array(N + 1);
for (var i = 0; i < dp.length; i++){
  dp[i] = new Array(W + 1).fill(0);
}

for (var i = 0; i < N; i++){
  for (var w = 0; w <= W; w++) {
    if (w - weight[i] >= 0) {
      dp[i][j] = chmax(dp[i][j], dp[i][w - weight[i]] + value[i]);
    }
  }
}