import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { formatPublishedDate, formatPublishedDateRelativeToNow  } from './Utils';

import styles from  './Post.module.css';


export function Post ({author, publishedAt, content}) {
const [comment, setComment] = useState([])
const [newComment, setNewComment] = useState('');
const formattedDate = formatPublishedDate(publishedAt);
const relativeDate = formatPublishedDateRelativeToNow(publishedAt);

const handleCreateNewComment = (e) => {
  e.preventDefault();

   const commentToAdd = e.target.comment.value;
  setComment([...comment, commentToAdd]);
  setNewComment('');
  
}


    return (
        <article  className={styles.wrapper}>
          <header>
            <div className={styles.post}>
               <Avatar src={author.avatarUrl}  />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time  title=" publicado em 22 de outubro de 2024 "datetime={publishedAt.toISOString()}>
            {relativeDate}
            </time>
          </header>


          <div className={styles.content}>
            {content.map((item) => {
              if (item.type === 'paragraph') {
                return <p key={item.id}>{item.content}</p>;
              }else if (item.type === 'link') {
                return <p><a key={item.id} href="">{item.content}</a></p>;
              }
            })}
            
          </div>


          <form onSubmit={handleCreateNewComment} className={styles.formComent}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            name='comment' 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} 
            placeholder='Nossa, adorei amigo! Parabéns'
            />

            <footer>
            <button name='buton' type='submit'>Publicar</button>
            </footer>
          </form>

          <div className={styles.commentList}>
          <Comment content={content} />
          </div>
        </article>

    );
}