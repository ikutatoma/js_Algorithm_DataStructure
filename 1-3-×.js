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


//topを求める
for (var i = 0; i < 10; i++) { //times1の一の位
  times1Right = i;
  times1 = 20 + times1Right
  for (var j = 1; j < 10; j++) {
    //times2Rightの値
    times2Right = j;
    top = times1 * times2Right;
    if (Math.floor(top / 10 % 10) == 3 && top >= 100 && top < 1000) {
      selectArrayTop.push(times1Right, times2Right); //times1Right　と times2Right の組み合わせ
    }
  }
}
//bottomを求める
selectArrayTop.map(function (index, value) { //
  if (index % 2 == 0) {
    times1Right = value;
    times2Right = selectArrayTop[index + 1];
  } else {
    times1Right = selectArrayTop[index - 1];
    times2Right = value;
  }
  for (var j = 1; j < 10; j++) { //times2Left
    times2Left = j; //ほんとは*10
    times1 = 20 + times1Right;
    bottom = times1 * (times2Left * 10);
    if (bottom >= 100 && bottom < 1000 && Math.floor(bottom / 10 % 10) == 1) {
      selectArrayBottom.push(20 + times1Right, times2Left * 10 + times2Right);
    }
  }
})

selectArrayBottom.map(function (value, index) {
  if (index % 2 == 0) {
    result = value * selectArrayBottom[index + 1];
  } else {
  }

  if (result >= 100 && result < 1000 && Math.floor(result / 10 % 10) == 4) {
      console.log(result)
  }
})


console.log(selectArrayBottom)



/*
var times1Right; //times1Right = 0 ~ 9
var times2Left; //times2Left = 01 = 9
var times2Rigth; // times2Right = 0 ~ 9
var times1; //times1
var times2; //times2

var testTop; //厳選したものをtopArrayに入れる。
//testTop >= 100 && testTop < 1000 である
//Math.floor(testTop / 10 % 10 == 3)

var testBottom; //厳選したものをtestBottomに入れる。
//Math.floor(testBottom / 10 % 10 == 1)が条件
//testBottom >= 100 && testTop < 1000 である

var testResult; //条件に当てはまる1組のみresultに入れる。
//Math.floor(testBottom / 10 % 10 == 4)が条件
//testResult >= 100 && testResult < 1000 である

var topArray = new Array(); // この中にtestBottom と times2Rightを入れる。
var topArrayRight = new Array();
var bottomArray = new Array(); //testBottomを入れる。


/*
手順
testTop -> topArray
testTopの条件にあうものをtopArrayに入れる。
times1Right と times2Right 場合を全て考える。forを使う


testBottom -> bottomArray
topArray.mapを使い参照する。


result
topArray.map と bottomArray.map を用いて resultを求める。
resultは一つと決まっているので、constで定義。
*/
