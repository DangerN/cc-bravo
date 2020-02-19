import React from 'react'

import Post from './Post'

const Thread = props => {
  const { threadData } = props
  console.log(props);
  const displayPosts = postData => {
    return threadData.posts.map(post => <Post key={post.id} {...post} />)
  }

  return (
    <div>
      {displayPosts({})}
    </div>
  )
}

export default Thread
