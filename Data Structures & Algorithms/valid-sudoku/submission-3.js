class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        console.log("board", board)
        const row = {}
        const column = {}
        const block = {}
        // let flag = true
        for (let i =0 ; i<9 ; ++i){
            let stringI = String(i)
            for(let j =0 ; j< 9 ; ++j){
                let stringJ = String(j)
                let blockI = Math.floor(i/3)
                let blockJ = Math.floor(j/3)
                let stringBlock = "(" + blockI + "," + blockJ + ")"
                if(board[i][j] === ".") continue ; 

                //check for row
                if (Object.hasOwn(row,stringI)){
                    if(row[stringI].includes(board[i][j])){
                        // flag = true ; 
                        return false
                    }else{
                        row[stringI].push(board[i][j])
                    }
                }else{
                    row[stringI] = []
                    row[stringI].push(board[i][j])
                }

                //check for column

                if (Object.hasOwn(column,stringJ)){
                    if(column[stringJ].includes(board[i][j])){
                        // flag = true ; 
                        return false
                    }else{
                        column[stringJ].push(board[i][j])
                    }
                }else{
                    column[stringJ] = []
                    column[stringJ].push(board[i][j])
                }


                //check for Block

                if (Object.hasOwn(block,stringBlock)){
                    if(block[stringBlock].includes(board[i][j])){
                        // flag = true ; 
                        return false
                    }else{
                        block[stringBlock].push(board[i][j])
                    }
                }else{
                    block[stringBlock] = []
                    block[stringBlock].push(board[i][j])
                }
            }
        }
        return true
    }
}
