import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

const Slug = (props) => {
  function createMarkup(c){
    return {__html: c}
  }
  const [blog, setBlog] = useState(props.myblog); // Initialize with null for clarity
  const router = useRouter();

 
  if (!blog) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>{blog.title}</h2>
        <hr />
        <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context){
    const { slug} = context.query;

    let data = await fetch(`http://localhost:3000/api/blogdata?slug=${slug}`)
    let myblog = await data.json()

    return {
        props: {myblog}
}
}
export default Slug;
