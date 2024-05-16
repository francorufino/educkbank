import React from "react";
import Link from "next/link";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // , {cache:"no-store"} )
  // ou/e para revalidar a cada tempo determinado:
  // ,{ cache: "no-store",
  // next:{
  //   revalidate:3600
  // } }
  // ou/e para revalidar a todo momento:
  // ,{ cache: "no-store",
  // next:{
  //   revalidate:0
  // } }

  if (!response.ok) {
    throw new Error("Failed the data fetch");
  }
  return response.json();
};
const Posts = async () => {
  const posts = await getPosts();

  return (
    <section>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <li key={post.id}>{post.id}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Posts;
