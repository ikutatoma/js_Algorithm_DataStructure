function readUserInput(question) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
    });
  });
}
// メイン処理
(async function main() {
  function sarch(i, w, a) {//iはaの配列の個数 wは作りたい総和 aは配列
    /*
    配列の個数が0であり、作りたい総和も0であるときokだが、
    作りたい総和が0じゃない時はだめ。
    trueはok,falseはだめ。
    */
    if (i == 0) {
      if (w == 0) {
        return true;
      } else {
        return false;
      }
    }
    if (sarch(i - 1, w, a) == true) {
      return true;
    }
    if (sarch(i - 1, w - a[i - 1], a) == true) {
      return true;
    }
    return false;
  };

//aの配列の要素からWを作る。
  //3 ~ 7
  var N = Math.floor(Math.random() * (7 + 1 - 3)) + 3;//配列の個数
  var a = new Array();//配列
  for (var i = 0; i < N; i++){
    //5 ~ 15
    a[i] = Math.floor(Math.random() * (15 + 1 - 5)) + 5;
  }
  //10 ~ 70
  var W = Math.floor(Math.random() * (70 + 1 - 10)) + 10;//作りたい総和

  if (sarch(N, W, a) == true) {
    console.log("Yes");
  } else {
    console.log("No");
  }
})()