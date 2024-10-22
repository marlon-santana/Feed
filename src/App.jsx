import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'


function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
        author="marlon" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus expedita natus modi placeat tempora nam similique voluptatibus cumque."
      />
      <Post 
        author="Diego" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus expedita natus modi placeat tempora nam similique voluptatibus cumque."
      />
      </main>

    </div>
    </>
  
  )
}

export default App
