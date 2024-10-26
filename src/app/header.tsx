
import AboutUS from './AboutUs';
import ContactUS from './ContactUs';
import Link from 'next/link';
import Button from '@/components/button';
import styles from './styles/Header.module.css'


export default function Header(){
return(
      <header className=''>
        <div className={`${styles.header} flex text-lime-500 space-x-10 justify-end font-extrabold text-4xl px-52 `}> 
        Home Automation Solutions
        <Link href="/contact">
            <Button text='Conatct Us'>
            </Button>
        </Link>

        <Link href="/about">
            <Button text= 'About Us'>
            </Button>
        </Link>
 
        <Link href="/help">
            <Button text= 'Help'>
            </Button>
        </Link>
       </div>
   </header>
)
}