import React from 'react'
import { A } from 'hookrouter'

import { Jumbotron } from "react-bootstrap"

const Home = props => {
  const { boardList } = props
  const boardLinks = () => {
    return Object.keys(boardList).map(board=>{
      return <div key={`${board}-link`}><A  href={`/${board}`}>{ boardList[board].name }</A></div>
    })
  }
  return (
    <>
      <Jumbotron>
        <h1>
          Welcome to CloudChan!
        </h1>
        <p>
          Where the facts are made up and the up-votes don't matter.
        </p>
        <p>
          We are working very hard to get this site off the ground. Check back again soon!
        </p>
      </Jumbotron>
      {boardLinks()}
    </>
  )
}

export default Home
