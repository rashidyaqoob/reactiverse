import React from 'react'
import TicTacToe from '../components/TickTacToe/TickTacToe'
import Post from '../components/TickTacToe/LikeComp'

const Tictactoe = () => {
  return (
    <div><TicTacToe/>
    <div>
      <h1>My React Social App</h1>
      <Post postText="This is an interesting post!"/>
    </div>
    </div>
  )
}

export default Tictactoe