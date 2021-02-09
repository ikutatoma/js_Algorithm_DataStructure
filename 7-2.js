/*
AtCoder王国の王立問題工房でABC管理官の座に就いたキザハシ君は、浮かれるあまり仕事を引き受けすぎてしまいました。
現在の時刻は0です。キザハシ君は1からNまでの番号が振られたN件の仕事を持っています。
キザハシ君が仕事iを終えるにはAi単位時間かかります。また、仕事iの〆切は時刻Biであり、これまでに仕事を終わらせる必要があります。時刻Biちょうどに仕事iを終わらせてもかまいません。
キザハシ君は 2 件以上の仕事を同時にすることはできませんが、ある仕事を終わらせた直後に別の仕事を始めることはできます。 キザハシ君はすべての仕事を〆切までに終わらせることができるでしょうか。可能ならば Yes、不可能ならば No を出力してください。
*/
let N = process.argv[2];
// a = [2, 1, 1, 4, 3];
// b = [4, 9, 8, 9, 12];

var arr = new Array();
for (var i = 0; i < N * 2; i++) {
  if (i % 2 == 0) {
    arr[i / 2] = new Array();
    arr[i / 2].time = process.argv[i + 3];
  } else {
    arr[parseInt(i / 2)].endTime = process.argv[i + 3];
  }
}

var arr = arr.sort(function (a, b) {
  if (a.endTime - b.endTime > 0) {
    return 1;
  }
  else if (a.endTime - b.endTime < 0) {
    return -1;
  } else {
    return 0;
  }
});

var res = 0;
var currentEndTime = 0;
for (var i = 0; i < N; i++) {
  if (currentEndTime > Number(arr[i].endTime)) {
    res = -1;
    break;
  }
  if (currentEndTime + Number(arr[i].time) > Number(arr[i].endTime)) {
    res = -1;
    break;
  }
  currentEndTime += Number(arr[i].time);
}
console.log((res == 0) ? "yes" : "no");