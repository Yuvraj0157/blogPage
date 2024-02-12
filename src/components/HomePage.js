import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Dummy data for blog posts
  const blogPosts = [
    { id: 1, title: 'First Post', excerpt: 'This is the excerpt of the first post.' },
    { id: 2, title: 'Second Post', excerpt: 'This is the excerpt of the second post.' },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
