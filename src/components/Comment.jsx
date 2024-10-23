import styles from './Comment.module.css'
import Img from '../../src/trash.svg'
import { ThumbsUp, Trash} from '@phosphor-icons/react'
import { Avatar } from './Avatar';


export function Comment() {
    return (
        <div className={styles.comment}>

            <div className={styles.commentBox}>
                <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0" />
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marlon santana</strong>
                            <time  title=" publicado em 22 de outubro de 2024 "datetime="2022-07-01">Cerca de 1h atrás</time>
                        </div>
                        <button>
                        <Trash size={24} />
                        </button>
                        
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
            </div>
            <footer>
                <button>
                    <ThumbsUp size={16} />
                    <p>Aplaudir</p>
                    <span>03</span>
                </button>
            </footer>

        </div>
    );
}