import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Display the full content of the blog post identified by id */}
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default BlogPost;
