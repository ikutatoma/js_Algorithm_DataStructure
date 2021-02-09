let N = 7;
let a = [{
  first: 1,
  second: 3
},
{
  first: 10,
  second: 15
},
{
  first: 0,
  second: 8
},
{
  first: 2,
  second: 6
},
{
  first: 4,
  second: 10
},
{
  first: 6,
  second: 9
},
{
  first: 13,
  second: 16
}
];
var inter = a.sort(function (a, b) {
  if (a.second < b.second) {
    return -1;
  }
  if (a.second > b.second) {
    return 1;
  }
  return 0;
});
console.log(inter);
//node 7-2.js 5 2 4 1 9 1 8 4 9 3 12

var res = 0;
var currentEndTime = 0;
for (var i = 0; i < inter.length; i++){
  if (inter[i].first < currentEndTime) {
    continue;
  }
  ++res;
  currentEndTime = inter[i].second;
}

console.log(res);
