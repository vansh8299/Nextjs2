import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
const [blogs, setBlogs] = useState(props.allBlogs)

const fetchData = () =>{
  setTimeout(()=>{
    this.setState({
      item: this.state.item.concat(Array.from({length: 20}))
    })
  }, 3000)
}


  return <div className={styles.container}>
   <main className={styles.main}>

<InfiniteScroll
dataLength={blogs.length}
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading....</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  >
     {blogs.map((blogitem)=>{
       return <div key={blogitem.slug}>
        
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h4 className={styles.blogItem}>{blogitem.title}</h4></Link>
        <p>{blogitem.metadesc.substr(0, 400)}</p>
        <p>{blogitem.slug}</p>
       </div>
     })}
    </InfiniteScroll>

     {blogs.map((blogitem)=>{
       return <div key={blogitem.slug}>
        
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h4 className={styles.blogItem}>{blogitem.title}</h4></Link>
        <p>{blogitem.metadesc.substr(0, 400)}</p>
        <p>{blogitem.slug}</p>
       </div>
     })}
   </main>
  </div> 

}

export async function getServerSideProps(context){
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json();

  return {
    props: {allBlogs}
  }
}

export default Blog