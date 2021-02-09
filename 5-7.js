
/*
+l+o+istic
algo+i+thm
+ +     ++
1010101011
*/
function chmin(a, b) {
  if (a > b) {
    a = b;
  }
  return a;
}

function outPut() {
  for (var i = 0; i < T.length; i++) {
    if (i == 0) {
      process.stdout.write("        ")
    }
    process.stdout.write(`${T[i]}  `);
  }

  console.log("\n-------------------------------------");
  for (var i = 0; i < dp.length; i++) {
    if (i == 0) {
      process.stdout.write(`  |  `)
    } else {
      process.stdout.write(`${S[i - 1]} |  `)
    }
    for (var j = 0; j < dp[i].length; j++) {
      process.stdout.write(`${dp[i][j]}  `);
    }
    console.log("");
  }

  console.log("\n右への移動  : Sへの文字の挿入  \n下への移動  : Sの文字の削除  \n右下への移動: Sの文字の変更");
}
 let S = "logistic";
 let T = "algorithm";

let dp = new Array(S.length + 1);
for (var i = 0; i < dp.length; i++) {
  dp[i] = new Array(T.length + 1).fill(100);
}

dp[0][0] = 0;
for (var i = 0; i <= S.length; ++i) {
  for (var j = 0; j <= T.length; ++j) {
    if (i > 0 && j > 0) {
      if (S[i - 1] == T[j - 1]) {
        dp[i][j] = chmin(dp[i][j], dp[i - 1][j - 1]);
      } else {
        dp[i][j] = chmin(dp[i][j], dp[i - 1][j - 1] + 1);
      }
    }
    if (i > 0) {
      dp[i][j] = chmin(dp[i][j], dp[i - 1][j] + 1);
    }
    if (j > 0) {
      dp[i][j] = chmin(dp[i][j], dp[i][j - 1] + 1);
    }
  }
}
outPut();
//console.log(dp[S.length][T.length]);
