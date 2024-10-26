import Link from 'next/link';
// import styles from './styles/Header.module.css'
import Button from '@/components/button';

const AboutUS = () => {
    return (
        <Link href="/about">
            <Button text= 'About Us'>
            </Button>
        </Link>
    );
};

export default AboutUS;
