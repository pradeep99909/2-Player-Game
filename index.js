const readline = require("readline");
const minimax = require("./minmax");
const { Console } = require("console");

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
  //taking input from user
  val = val.split(" ").map((d) => {
    return Number(d); // converting space seperated values to array and number
  });
  var player_A = [];
  var player_B = [];
  let player_playing = player; //players turn
  while (val.length !== 0) {
    let values = [val[0], val[val.length - 1]]; //getting two values from
    let minmax = minimax(0, 0, true, values, 1);
    if (player_playing == -1) {
      player_A.push(minmax);
      console.log("Player A picks" + minmax);
    } else {
      player_B.push(minmax);
      console.log("Player B picks" + minmax);
    }

    val = [
      ...val.slice(0, val.indexOf(minmax)),
      ...val.slice(val.indexOf(minmax) + 1, val.length),
    ]; //removing the value from array
    player_playing = selecting_player(player_playing); //changing the turn of the player eg. from Player A to Player B
  }

  var score_A = player_A.reduce((sum, acc) => {
    //adding the score
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
