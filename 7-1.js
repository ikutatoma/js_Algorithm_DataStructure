// N個の整数a0,a1,...,aN－1と，N個の整数b0,b1,...,bN－1が与えられます．a0,...,aN－1から何個かとb0,...,bN－1から何個か選んでペアを作ります，
//ただし各ペア(ai, bj)はai＜bjを満たさなければなりません．最大で何ペア作れるかをO(NlogN)で求めるアルゴリズムを設計してください．

let N = process.argv[2];
var arr = new Array();
var a = new Array();
var b = new Array();
for (var i = 0; i < N * 2; i++) {
  if (i % 2 == 0) {
    a[i / 2] = new Array();
    a[i / 2] = process.argv[i + 3];
  } else {
    b[parseInt(i / 2)] = process.argv[i + 3];
  }
}
a.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
})
b.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
})
console.log(a);
console.log(b);
var res = 0;
var aa = new Array();
loop: for (var i = 0; i < N; i++) {
  for (var j = 0; j < N; j++) {
    if (Number(a[i]) < Number(b[j])) {
      if (aa.indexOf(j) == -1) {
        aa.push(j);
        res++;
        continue loop;
      }
    }
  }
}
console.log("ペア数は" + res + "です。");
