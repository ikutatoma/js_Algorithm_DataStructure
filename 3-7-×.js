var N = 3;//文字列の長さ
var S = "145";//文字列
var indiArr = S.split('');
var twoArr = new Array();
var result = 0;



for (var i = 0; i < indiArr.length; i++){
  for (var j = i + 1; j < indiArr.length; j++){
    twoArr.push(indiArr[i] + indiArr[j]);
  }
}

for (var i = 0; i < indiArr.length; i++){
  result += Number(indiArr[i]) + Number(twoArr[i]);
}

result += Number(S);
