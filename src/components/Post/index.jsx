/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment/index';
import {
  formatPublishedDate,
  formatPublishedDateRelativeToNow,
} from '../Utils';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content, id }) {
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState('');
  // eslint-disable-next-line no-unused-vars
  const formattedDate = formatPublishedDate(publishedAt);
  const relativeDate = formatPublishedDateRelativeToNow(publishedAt);

  const handleCreateNewComment = (e) => {
    e.preventDefault();

    const newCommentText = newComment.trim();
    if (newCommentText) {
      setComment([...comment, newCommentText]);
      setNewComment('');
    }
  };

  const handleNewCommentChange = (e) => {
    e.target.setCustomValidity('');
    setNewComment(e.target.value);
  };

  const handleNewCommentInvalid = (e) => {
    e.target.setCustomValidity('Esse campo é obrigatorio');
  };

  const deleteComment = (commentToDelete) => {
    const updatedComments = comment.filter(
      (comment) => comment !== commentToDelete
    );
    setComment(updatedComments);
  };

  return (
    <article className={styles.wrapper}>
      <header>
        <div className={styles.post}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title=" publicado em 22 de outubro de 2024 ">{relativeDate}</time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={id}>{item.content}</p>;
          } else if (item.type === 'link') {
            return (
              <p key={index}>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.formComent}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button name="button" type="submit" disabled={newComment === ''}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map((item, index) => {
          return (
            <Comment
              key={index}
              deleteComment={() => deleteComment(item)}
              comment={item}
            />
          );
        })}
      </div>
    </article>
  );
}
