
import styles from './styles/Footer.module.css'

// import Container from 'src/app/Container';


export default function Footer(){
    return(
<div className={styles.footBody} > 
            <footer className={styles.bgimageFoot}>
            <br/>
            <br/>
            <h1 className={styles.h1Foot}> Address: ABC Street, Sharah e Faisal, Karachi. </h1>
            <h2 className={styles.h2Foot}> PO Box: 12345 </h2>
            <h3 className={styles.h3Foot}> Email: engr.umer.ali@gmail.com </h3>
            </footer>    
</div>

    )
}



