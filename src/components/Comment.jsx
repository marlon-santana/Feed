import styles from './Comment.module.css'
import Img from '../../src/trash.svg'
import { ThumbsUp, Trash} from '@phosphor-icons/react'
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Comment({comment, deleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeComment = () => {
        setLikeCount(state => state + 1);
    }
    
    return (
        <div className={styles.comment}>

            <div className={styles.commentBox}>
                <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0" />
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marlon santana</strong>
                            <time  title=" publicado em 22 de outubro de 2024" dateTime='2024-22-10 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={deleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                        </button>
                        
                    </header>
                    <p>{comment}</p>
                </div>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp size={16} />
                    <p>Aplaudir</p>
                    <span>{likeCount}</span>
                </button>
            </footer>

        </div>
    );
}