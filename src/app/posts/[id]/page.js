import React from "react";

const getPostById = async id => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error("error");
  }
  return response.json();
};

const PostDetail = async ({ params }) => {
  const { id } = params;
  const post = await getPostById(id);
  console.log("msg vindo do pages do posts");

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </section>
  );
};

export default PostDetail;
