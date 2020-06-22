const readline = require("readline");
const minimax = require("./minmax");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Initial row ? ", function (val) {
  val = val.split(" ").map((d) => {
    return Number(d);
  });
  var player_A = [];
  var player_B = [];
  while (val.length !== 1) {
    let minmax = minimax(0, 0, true, val, Math.floor(val.length / 2) - 1);
    val = [
      ...val.slice(0, val.indexOf(minmax)),
      ...val.slice(val.indexOf(minmax) + 1, val.length),
    ];
  }
  rl.close();
});
