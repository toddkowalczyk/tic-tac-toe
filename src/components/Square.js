import React, {useState} from 'react'

function Square({player,  updateBoard}) {

    const [square, setSquare] = useState();

    function setValue(e) {
        setSquare(player);
        updateBoard();
    }

    return (
        <div>
            <button className="square" onClick={setValue}>
                 {square}
            </button>
        </div>
    )
}

export default Square;