//上の数の変数
var times1Right;
var times1 = 20 + times1Right;

//下の数の変数
var times2Left;
var times2Right;
var times2; //= (times2Left * 10) + times2Right;

//筆算の上段と下段
//上段
var top; // = times1 * times2Right;
//下段
var bottom; // = times1 * times2Left;

//結果
var result; //= top + bottom;

//厳選したものを入れる配列　
var selectArrayTop = new Array();
var selectArrayBottom = new Array();

var x = 0;
//topを求める
for (var i = 0; i < 10; i++) { //times1の一の位
  times1Right = i;
  times1 = 20 + times1Right
  console.log("------------------------");
  console.log(`times1は${times1}です。`)
  for (var j = 1; j < 10; j++) {
    console.log("------------------------");
    //times2Rightの値
    times2Right = j;
    top = times1 * times2Right;
    console.log(`上段は${top}です`);
    if (Math.floor(top / 10 % 10) == 3) {
      console.log("上段は大丈夫そうだね！")
      selectArrayTop.push(top);
    } else if (top < 100) {
      console.log("上段が100未満だよ！")
      console.log("上段の10の位が3じゃないよ!\n");
    } else {
      console.log("上段の10の位が3じゃないよ!\n");
    }
  }
}
console.log("||||||||||||||||||||||||||||||");
console.log("上段終わったよ！");
console.log(selectArrayTop);

//bottomを求める

for (var j = 1; j < 10; j++) {
  times2Left = j;
  times2 = (times2Left * 10) + times2Right;//times2Rightには9しか入ってない。
  bottom = times1 * times2Left * 10;
  console.log("------------------------")
  console.log(`下段は${bottom}なので`);
  if (bottom >= 100 && bottom < 1000 && Math.floor(bottom / 10 % 10) == 1) {
    console.log("bottomは大丈夫そうだね！\n")
    selectArrayBottom.push(bottom);
  } else {
    console.log("bottomが違うよ!\n");
  }
}
console.log("下段終わったよ！");
console.log(selectArrayBottom);

console.log("上段と下段の配列を比べるよ！");
console.log(` 上段 ...${selectArrayTop}`);
console.log(`下段 ...${selectArrayBottom}`);

loop: for (var i = 0; i < selectArrayTop.length; i++) {
  for (var j = 0; j < selectArrayBottom.length; j++) {
    result = selectArrayTop[i] + selectArrayBottom[j];
    if (result / 10 % 10 == 4 && result >= 100 && result < 1000) {
      console.log("あってるよ!\n\n");
      x = 1;
      break loop;
    } else {
      x = 0;
      // console.log(`${result}= ${selectArrayTop[i]}+ ${selectArrayBottom[j]}です。\n\n`);
    }
  }
}


console.log((x == 1) ? `${put()}` : "エラーがまだあるみたい。");

function put() {
  console.log(`   ${times1}`);
  console.log(`×  ${times2}`);
  console.log(`--------`);
  console.log(`  ${top}`);
  console.log(` ${bottom}`);
  console.log(`--------`);
  console.log(` ${result}`)
}