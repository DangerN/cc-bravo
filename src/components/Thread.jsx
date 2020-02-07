import React from 'react'

import Post from './Post'

const Thread = props => {
  const displayPosts = postData => {
    return (
      <Post image={postData.image} id="0000000000" subject={postData.subject} name={postData.name}/>
    )
  }
  return (
    <div>
      {displayPosts({image: "https://i.ytimg.com/vi/-NMPLAZ5JBI/maxresdefault.jpg"})}
      {displayPosts({name: 'Sneed', subject:'Sneed around the world.'})}
      {displayPosts({})}
      {displayPosts({})}
      {displayPosts({})}
      {displayPosts({})}
      {displayPosts({})}
    </div>
  )
}

export default Thread
