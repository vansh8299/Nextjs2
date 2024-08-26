import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
const blog = () => {
  return (
    <div>
    <h2 className={styles.h2}>Latest Blogs</h2>
    <div>
      <Link href={'/blogpost/learn'}>
      <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3></Link>
      <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit!</p>
      <button className={styles.btn}>Read More</button>
    </div>
    <div>
      <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
      <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
      <button className={styles.btn}>Read More</button>
    </div>
    <div>
      <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
      <p>JavaScript is the language used to design logic for the web</p>
      <button className={styles.btn}>Read More</button>
    </div>
  </div>
  )
}

export default blog