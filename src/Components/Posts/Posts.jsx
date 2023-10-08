import React from "react";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <li>
        {posts.map((post) => {
          return (
            <div>
              <li>{post.userId}</li>
              <li>{post.id}</li>
              <li>{post.title}</li>
              <li>{post.body}</li>
            </div>
          );
        })}
      </li>
    </div>
  );
}

export default Posts;
