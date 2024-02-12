import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Dummy data for blog post content
  const post = {
    id: id,
    title: `Post ${id}`,
    content: `This is the full content of post ${id}.`,
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default BlogPost;
