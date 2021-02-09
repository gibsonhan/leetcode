let matrixData = {
    matrix: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ],
    word: "ABCCED"
}

function searchWord({
    matrix,
    word
}) {
    let startPos = searchStartPos(matrix, word[0])
    let hasWord = explore(startPos, matrix, 1, word, )

    function searchStartPos(matrix, firstLetter) {
        let posFirstLetter = []
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                if (matrix[row][col] === firstLetter) posFirstLetter.push([row, col])
            }
        }
        return posFirstLetter
    }

    function explore(pos, matrix, nextIndex, word) {
        if (nextIndex === word.length) return true
        while (pos.length > 0) {
            let pos = pos.pop()
            let hasNextletter = exploreNeighbors(pos, matrix, word[nextIndex])

            if (!hasNextletter) {
                return false
            }

            explore(pos, matrix, nextIndex + 1, word)
        }
    }

    function exploreNeighbors(pos, matrix, nextLetter) {
        let upBound = 0
        let leftBound = 0
        let rightbound = matrix[0].length
        let bottomBound = matrix.length

        let currRow = pos[0]
        let currCol = pos[1]

        let table = {
            upWord: [],
            rightWord: [],
            bottomWord: [],
            leftWord: []
        } //check up
        let upWord = currRow - 1 >= upBound ? [currRow - 1][currCol] : 'outOfBound'
        table[upWord] = upWord === nextLetter ? : false
        //check right
        let rightWord = currCol + 1 < rightbound ? [currRow][currCol + 1] : 'outOfBound'
        //check down
        let bottomWord = currRow < bottomBound ? [currRow + 1][currCol] : 'outOfBound'
        //check left
        let leftWord = currCol - 1 < leftBound ? [currRow][currCol - 1] : 'outOfBound'

        function isEqual(a, b) {
            return a === b ? true : false
        }

    }

    console.log(startPos)
}

searchWord(matrixData)