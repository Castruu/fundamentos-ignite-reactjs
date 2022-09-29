import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>

      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit suscipit possimus facilis velit corporis. Reprehenderit officia autem laborum minus officiis corrupti iusto, incidunt velit saepe! A nam ab optio explicabo."
          />

          <Post
            author="Mayk Brito"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </main>
      </div>

    </div>
  )
}

export default App
