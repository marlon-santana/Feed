import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import { Initial } from "./components/Initial"
import styles from './App.module.css'
import './global.css'


const Mock = [
  {
    id:1,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0",
      name: 'Marlon Santana',
      role: 'Desenvolvedor Front-end'
    },
    content: [
      { type: 'paragraph', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus expedita natus modi placeat tempora nam similique voluptatibus cumque."},
      { type: 'paragraph', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus expedita natus modi placeat tempora nam similique "},
      {type:  'link', content: 'https://www.google.com'}
    ],
    publishedAt: new Date('2024-10-25 06:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0",
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type: 'paragraph', content: "Lorem ipsum, dolor sit expedita natus modi placeat tempora nam similique voluptatibus cumque."},
      { type: 'paragraph', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus expedita natus modi placeat tempora nam similique amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus  "},
      {type:  'link', content: 'https://www.google.com'},
      {type:  'link', content: '#Rocketseat'}
    ],
    publishedAt: new Date('2024-10-25 08:00:00'),
  },
   
   
]

function App() {
  return (
    <>
    <Header />
    <Initial />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {Mock.map((post, index) => {
        return (
          <Post
            key={index}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
           />
        )
      })}
      </main>

    </div>
    </>
  
  )
}

export default App
