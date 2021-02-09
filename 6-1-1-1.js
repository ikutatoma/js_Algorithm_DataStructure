let N = 5;
var a = [12, 43, 7, 15, 9]; //sort済
let b = new Array(); //そのまま
let c = new Array(); //最後
for (var i = 0; i < a.length; i++) {
  b[i] = a[i];
}
a.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
});

for (var i = 0; i < b.length; i++) {
  c.push(a.indexOf(b[i]));
}
console.log(c);