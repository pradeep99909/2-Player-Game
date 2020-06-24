const readline = require("readline");
const minimax = require("./minmax");

var player = +1;

function selecting_player(val) {
  if (val == +1) {
    return -1;
  } else {
    return +1;
  }
}

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
  let player_playing = player;
  while (val.length !== 0) {
    let values = [val[0], val[val.length - 1]];
    let minmax = minimax(0, 0, true, values, 1);
    if (player_playing == -1) {
      player_A.push(minmax);
    } else {
      player_B.push(minmax);
    }

    val = [
      ...val.slice(0, val.indexOf(minmax)),
      ...val.slice(val.indexOf(minmax) + 1, val.length),
    ];
    player_playing = selecting_player(player_playing);
  }

  var score_A = player_A.reduce((sum, acc) => {
    return acc + sum;
  });
  var score_B = player_B.reduce((sum, acc) => {
    return acc + sum;
  });
  console.log("playerA: " + score_A);
  console.log("playerB: " + score_B);

  if (score_A > score_B) {
    console.log("Player A Wins!!");
  } else {
    console.log("Player B Wins!!");
  }

  rl.close();
});
