import Link from 'next/link';
// import styles from './styles/Header.module.css'
import Button from '@/components/button';

const ContactUS = () => {
    return (
        <Link href="/contact">
            {/* <Button className={styles.Button}> */}
            <Button text='Conatct Us'>
            </Button>
        </Link>
    );
};

export default ContactUS;
