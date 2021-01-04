//年齢当てゲームで，Aさんの年齢が20歳以上36歳未満のそれぞれの場合について，二分探索法によって年齢を当てるまでの流れを求めてください。

var ageMax = 100;
var ageMin = 0;
let age = Math.floor(Math.random() * (ageMax - ageMin)) + ageMin;
var aa = new Array(ageMax - ageMin).fill(ageMin);
var t = 0;
ageArr = aa.map(function (value) {
  return value + t++;
})
var devideArr = ageArr;
var x = 1;
while(true){
  var devideIndex = Math.ceil(devideArr.length / 2); //devideArr.length / 2 => 配列を切るIndex
  if (devideArr[devideIndex] > age) {
    console.log("大きいです。");
    devideArr = devideArr.slice(0, devideIndex);
    console.log(`配列を半分にします。${devideArr}　になりました。\n`);
  } else if (devideArr[devideIndex] < age) {
    console.log("小さいです。")
    devideArr = devideArr.slice(devideIndex);
    console.log(`配列を半分にします。${devideArr}　になりました。\n`);
  } else {
    if (devideArr.length == 1) {
      console.log(`決まりました！年齢は${devideArr[0]}です！`)
      break;
    }
    console.log(`決まりました！年齢は${devideArr[devideIndex]}です！`);
    break;
  }
  x++;
}
console.log((x <= 6) ? "6回以内で当てることができる" : ((x==7) ? "7回で確実に当てることができる"　: "7回でも当てることができない"));