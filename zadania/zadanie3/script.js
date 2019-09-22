function drawX(num) {
  let line = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (j === i || j === num - 1 - i) {
        line += "X";
      } else {
        line += " ";
      }
    }
    line += "\n";
  }
  console.log(line);
}

drawX(5);
