import React from 'react'

import Post from './Post'

const Thread = props => {
  const displayPosts = postData => {
    console.log(postData);
    console.log(postData.image);
    return (
      <Post image={postData.image}/>
    )
  }
  return (
    <div>
      {displayPosts({image: "https://i.ytimg.com/vi/-NMPLAZ5JBI/maxresdefault.jpg"})}
      {displayPosts({})}
      {displayPosts({})}
      {displayPosts({})}
      {displayPosts({})}
      {displayPosts({})}
      {displayPosts({})}
    </div>
  )
}

export default Thread
