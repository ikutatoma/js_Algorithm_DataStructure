var a = [1024, 2048, 4096, 512, 512];
var x = 0;
loop: while (true) {
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i] / 2;
    console.log(a[i]);
    if (a[i] % 2 != 0) {
      console.log("============")
      break loop;
    }
  }
  console.log("------------------")
  x++;
}

console.log(x);