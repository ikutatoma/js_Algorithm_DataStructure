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

let N = 6;
let W = 15; //maxの重さ
let weight = [2, 1, 3, 2, 1, 5];
let value = [3, 2, 6, 1, 3, 85];



let dp = new Array(N + 1);
for (var i = 0; i < dp.length; i++) {
  dp[i] = new Array(W + 1).fill(0);
}

for (var i = 0; i < N; ++i) {1
  console.log(`i..${i}`);
  for (var w = 0; w <= W; w++) {
    if (w - weight[i] >= 0) {
      console.log(` w..${w} weight..${weight[i]}  w-weight..${w-weight[i]}   dp[i][w - weight[i]]..${dp[i][w - weight[i]]}  value..${value[i]}`);
      dp[i + 1][w] = chmax(dp[i + 1][w], dp[i][w - weight[i]] + value[i]);
    }
    dp[i + 1][w] = chmax(dp[i + 1][w], dp[i][w]);
  }
   outPut(w);
}
