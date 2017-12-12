import React from 'react'
import PropTypes from 'prop-types'
import SquareRow from './SquareRow'

const Board = ({ squares, onClick, winner }) => {

  let board;
  board = squares.map((row, idx) => {
    let k = "r" + idx;
    return (
      <SquareRow winner={winner} rowIdx={idx} row={row} onClick={onClick} key={k}/>
    )
  })
  return (
    <div>
      {board}
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  winner: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

export default Board
