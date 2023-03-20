import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './Blog.module.css'
import Link from 'next/link'

export default function index(props) {

  return (
    <div className={styles.postsContainer}>
        <h1 className={styles.titleBlog}>Blog</h1>
        <div className={styles.cards}>
            {props.posts.map((post) => (
                <div key={uuidv4()} className={styles.card}>
                    <h2>{post.title}</h2>
                    <p>{post.body.slice(0,20) + "..."}</p>
                    <Link href={`/blog/${post.id.toString()}`}>
                        Read more
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}