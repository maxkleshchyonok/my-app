import React from 'react'
import preloader from '../../../assets/images/dualball.svg'
import styles from './preloader.module.css'

let Preloader = (props) => {
    return <div className={styles.location}>
        <img src={preloader} />
    </div>
}

export default Preloader