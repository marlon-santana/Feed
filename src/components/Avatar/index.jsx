/* eslint-disable react/prop-types */
import styles from './Avatar.module.css'

export  function Avatar({hasBorder= true, src = 'https://as2.ftcdn.net/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'}) {
    return(
        <div className={hasBorder ? styles.wrapper : styles.hasNotBorder}>
            <img
                src={src}
                
            />
        </div>

    );
}