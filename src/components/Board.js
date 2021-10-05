import React, {useState} from 'react'
import Square from './Square'

function Board() {

    const [status, setStatus] = useState('Playing');
    const [player, setPlayer] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));
    const winner = calculateWinner(squares);

    function getStatus() {
        if (winner) {
          return "Winner: " + winner;
        } else if (isBoardFull(squares)) {
          return "Draw!";
        } else {
          return "Player: " + player;
        }
      }

    function isBoardFull(squares) {
        for (let i = 0; i < squares.length; i++) {
          if (squares[i] == null) {
            return false;
          }
        }
        return true;
      }

    function calculateWinner(squares) {
        const possibleLines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        // go over all possibly winning lines and check if they consist of only X's/only O's
        for (let i = 0; i < possibleLines.length; i++) {
          const [a, b, c] = possibleLines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    function renderSquare(squareNumber) {
        
            return <Square player = {player}
                            updateBoard={() => {
                                let nextSquares = squares.slice();
                                nextSquares[squareNumber] = player;
                                setSquares(nextSquares);
                                player === 'X' ? setPlayer('Y') : setPlayer('X');
            }}
          />
    };

    return (
            <div className="game">  
                 <div className="game-board">
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                    <div className="game-info">{getStatus()}</div>
                </div>
            </div>
    )
}

export default Board;