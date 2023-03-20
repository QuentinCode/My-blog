import React from 'react'
import styles from './Utilisateurs.module.css'
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'


export default function index(props) {

  return (
    <div className={styles.users}>
        <h1>La liste des utilisateurs</h1>
        <div>
            {props.users.map((user) => (
                <div key={uuidv4()} className={styles.user}>
                    <h3>{user.name}</h3>
                    <Link href={`/utilisateurs/${user.id}`}>
                        Contacter
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users
    }
  }
}