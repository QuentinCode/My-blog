import React from 'react'
import styles from './Utilisateurs.module.css'
export default function user(props) {
    console.log(props);
  return (
    <div className={styles.usersContact}>
        <h1>{props.user.name}</h1>
        <p>{props.user.email}</p>
        <p>{props.user.phone}</p>
        <p>{props.user.website}</p>
    </div>
  )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.user}`)
    const user = await res.json()

    return {
        props: {
            user,
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`) 
    const user = await res.json()

    const paths = user.map((user) => ({
        params: { user: user.id.toString() },
        }))

    return {
        paths,
        fallback: false,
    }
}
