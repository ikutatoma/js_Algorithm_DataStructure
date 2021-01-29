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
    process.stdout.write(`${k}  `);
  }
  console.log("\n--------------------------------")

  for (var i = 0; i < dp.length; i++) {
    process.stdout.write(`${i} | `)
    for (var w = 0; w <= a; w++) {
      process.stdout.write(`${dp[i][w]}  `);
    }
    if (i == 0) {
      console.log("     遷移の様子を見ているよ");
    } else {
      process.stdout.write(` |${i} | ${weight[i - 1]}kg  価値..${value[i - 1]}\n`);
    }
    console.log("");
  }
  console.log("  ")
}

let N = 4;
let W = Math.floor(Math.random() * (9 + 1 - 6)) + 6; //maxの重さ
let weight = new Array(N);
let value = new Array(N);
for (var i = 0; i < N; i++) {
  weight[i] = Math.floor(Math.random() * (4 + 1 - 1)) + 1; //重さ
  value[i] = Math.floor(Math.random() * (3 + 1 - 1)) + 1; //価値
}

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
  outPut(w);
}