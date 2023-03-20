import React, { useRef } from 'react'
import styles from './add.module.css'

export default function index() {


  const title = useRef()
  const body = useRef()

    const handleSubmit = e => {

      e.preventDefault()
      const newPost = {
        title: title.current.value,
        body: body.current.value
      }

      fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      title.current.value = "";
      body.current.value = "";
    }


  return (
    <div className={styles.addPage}>
        <h1>Add</h1>
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input ref={title} type="text" name="title" id="title" />
              <label htmlFor="content">Content</label>
              <input ref={body} type="text" name="content" id="content" />
              <button type="submit">Add</button>
            </form>    
        </div>
    </div>
  )
}
