import React from 'react'
import styles from './Blog.module.css'

export default function posts(props) {
  console.log(props);
  return (
    <div className={styles.postsPage}>
        <h1 className={styles.titleArticle}>{props.post.title}</h1>
        <p className={styles.bodyArticle}>{props.post.body}</p>

    </div>
  )
}
export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.posts}`) 
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { posts: post.id.toString() },
  }))

  return { paths, fallback: false }
}
