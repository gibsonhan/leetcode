let matrix1 = {
  row: 2,
  col: 3,
};

let matrix2 = {
  row: 3,
  col: 7,
};

let matrix3 = {
  row: 3,
  col: 3,
};

function uniquePaths(matrixDimension) {
  let { row, col } = matrixDimension;
  let start = [0, 0];
  let end = [row - 1, col - 1];
  let q = [start];
  let pathCount = 0;

  while (q.length > 0) {
    let node = q.pop();
    let { newPath, reachEndCount } = explore(node, row, col, end);
    q = [...q, ...newPath];
    pathCount += reachEndCount;
  }

  console.log("number of unique paths", pathCount);

  function explore(node, rowBound, colBound, endPos) {
    let newPath = [];
    let reachEndCount = 0;
    let nodeRow = node[0];
    let nodeCol = node[1];
    let newRow = nodeRow + 1;
    let newCol = nodeCol + 1;

    //check if down move is possible
    if (newRow < rowBound) {
      let downMove = [newRow, nodeCol];
      isPositionEqual(downMove, endPos) === true
        ? reachEndCount++
        : (newPath = [...newPath, downMove]);
    }

    //check if right move is possible
    if (newCol < colBound) {
      let rightMove = [nodeRow, newCol];
      isPositionEqual(rightMove, endPos) === true
        ? reachEndCount++
        : (newPath = [...newPath, rightMove]);
    }

    return {
      newPath,
      reachEndCount,
    };
  }

  function isPositionEqual(pos1, pos2) {
    let isEndPos = true;
    //compare pos1 row with pos2 row
    if (pos1[0] !== pos2[0]) return false;
    if (pos1[1] !== pos2[1]) return false;
    return isEndPos;
  }
}

uniquePaths(matrix1);
uniquePaths(matrix2);
uniquePaths(matrix3);
