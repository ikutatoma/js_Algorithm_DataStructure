function chmax(a, b) {
  if (a < b) {
    a = b;
  }
  return a;
}

function outPut(a) {
  console.log(`\nmaxの重さ ${W}`);
  for (var k = 0; k <= W; k++) {
    if (k == 0) {
      process.stdout.write("i/w ");
    }
    var re = ('000' + k).slice(-3);
    process.stdout.write(`${re}  `);
  }
  console.log("\n------------------------------------------------------------")

  for (var i = 0; i < dp.length; i++) {
    process.stdout.write(`${i} | `)
    for (var w = 0; w <= a; w++) {
      var ret = ('000' + dp[i][w]).slice(-3);
      process.stdout.write(`${ret}  `);
    }
    if (i == 0) {
      console.log("          それぞれの重さと価値");
    } else {
      process.stdout.write(`           |${i} | ${weight[i - 1]}kg  価値..${value[i - 1]}\n`);
    }
    console.log("");
  }
  console.log("  ")
}

let N = 6;
let W = 15;
let weight = [2, 1, 3, 2, 1, 5];
let value = [3, 2, 6, 1, 3, 85];

let dp = new Array(N + 1);
for (var i = 0; i < dp.length; i++) {
  dp[i] = new Array(W + 1).fill(0);
}

for (var i = 0; i < N; ++i) {
  for (var w = 0; w <= W; w++) {
    if (w - weight[i] >= 0) {
      dp[i + 1][w] = chmax(dp[i + 1][w], dp[i][w - weight[i]] + value[i]);
    }
    dp[i + 1][w] = chmax(dp[i + 1][w], dp[i][w]);
  }
}
outPut(w);