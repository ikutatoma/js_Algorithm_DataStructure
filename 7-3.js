/*
二次元平面に，赤い点と青い点が N 個ずつあります。 i 個目の赤い点の座標は(a i, b i) で， i 個目の青い点の座標は(c i, d i) です。 赤い点と青い点は，赤い点の x 座標が青い点の x 座標より小さく， また赤い点の y 座標も青い点の y 座標より小さいとき，仲良しペアになれます。 あなたは最大で何個の仲良しペアを作ることができますか？ ただし， 1 つの点が複数のペアに所属することはできません。
*/

var N = process.argv[2];
var red = new Array();
var blue = new Array();
for (var i = 0; i < Number(N * 2); i++) {
  if (i % 2 == 0) {
    red[i / 2] = new Array();
    red[i / 2].x = process.argv[i + 3];
  } else {
    red[parseInt(i / 2)].y = process.argv[i + 3];
  }
}
for (var i = 0; i < Number(N * 2); i++) {
  if (i % 2 == 0) {
    blue[i / 2] = new Array();
    blue[i / 2].x = process.argv[Number(N * 2) + i + 3];
  } else {
    blue[parseInt(i / 2)].y = process.argv[Number(N * 2) + i + 3];
  }
}

var red = red.sort(function (a, b) {
  if (a.y > b.y) {
    return 1;
  } else if (a.y < b.y) {
    return -1;
  } else {
    return 0;
  }
})
var blue = blue.sort(function (a, b) {
  if (a.y > b.y) {
    return 1;
  } else if (a.y < b.y) {
    return -1;
  } else {
    return 0;
  }
})
ind = 0;
var selePair = new Array();
var seleInd = new Array();
loop: for (var i = 0; i < N; i++) {
  for (var j = 0; j < N; j++) {
    if (seleInd.indexOf(j) == -1) {
      if (red[i].x < blue[j].x) {
        selePair[ind] = new Array();
        selePair[ind].red = red[i];
        selePair[ind].blue = blue[j];
        seleInd[ind] = j;
        ind++;
        continue loop;
      }
    }
  }
}
var res = 0;
for (var i = 0; i < selePair.length; i++) {
  if (selePair[i].red.y < selePair[i].blue.y) {
    res++;
  }
}
console.log(res);
