export const boardDefault = (attempts, ansLength) => {
  let board = [];
  for (let i = 0; i < attempts; i ++) {
    let row = [];
    for (let j = 0; j < ansLength; j++) {
      row.push("");
    }
    board.push(row);
  }
  return board;
}
 

export const keyRow1 = ["Q","W","E","R","T","Y","U","I","O","P"];
export const keyRow2 = ["A","S","D","F","G","H","J","K","L"];
export const keyRow3 = ["Z","X","C","V","B","N","M"];