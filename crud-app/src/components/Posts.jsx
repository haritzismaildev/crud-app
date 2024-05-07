import React from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  return (
    <div>
      <Link to="postlist">Nested Postlist</Link>
    </div>
  )
}

export default Posts