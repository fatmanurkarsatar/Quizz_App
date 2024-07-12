import React, { useEffect, useState } from 'react';

function dataMap() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
    
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title} by {post.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default dataMap;

