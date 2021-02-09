function readUserInput(question) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
    });
  });
}
// メイン処理
(async function main() {
  console.log("Start game");
var left = 20;
var right = 36;
while (right - left > 1) {
  var mid = Math.ceil(left + (right - left) / 2);
  var ans = await readUserInput(`Is the age less than ${mid} ? yes / no: `);
  if (ans == "yes") {
    right = mid;
  } else {
    left = mid;
  }
}
console.log("The age is" + left + "!");
})()