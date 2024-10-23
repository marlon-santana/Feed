import styles from './Avatar.module.css'

export  function Avatar({hasBorder= true, src}) {
    return(
        <div className={hasBorder ? styles.wrapper : styles.hasNotBorder}>
            <img
                src={src}
            />
        </div>

    );
}