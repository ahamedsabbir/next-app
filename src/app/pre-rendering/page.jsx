import React from 'react'
export default function page({ posts }) {
  return (
    <>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </>
  );
}
/* export async function getStaticProps() {
  const posts = {
    title: "Pre Rendering",
    description: "Pre Rendering",
  }
  return {
    props: {
      posts,
    },
  };
} */

