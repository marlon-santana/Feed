import styles from  './Post.module.css';

export function Post ({author, content}) {
    return (
        <article>
          <header>
            <div className={styles.post}>
                <img
                    src="https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0" 
                />
                <div className={styles.authorInfo}>
                    <strong >Marlon Santana</strong>
                    <span>Frontend Developer</span>
                </div>

                <time  title=" publicado em 22 de outubro de 2024 "datetime="2022-07-01">Publicado há 1h</time>
            </div>
          </header>

          <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 jane.design/doctorcare</p>

            <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
          </div>
        </article>

    );
}