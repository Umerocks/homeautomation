// import Image from "next/image";
// import Link from 'next/link';
import styles from './styles/Hero.module.css'

export default function Home() {
    return (
        <div>
        <h1 className="mt-5 flex justify-stretch">
            <h2 className={`${styles.bgimageHero1}`}> </h2>
            <h3 className="text-wrap text-white font-serif text-4xl italic">
                <br/> We offer smart home and smart<br/>
                office solutions. You can buy all <br/>
                kinds of home automation products<br/> 
                for your smart home. With our sensors<br/>
                and smart devices, you can achieve energy <br/>
                efficiency and bring convenience into your life.
            </h3>
        </h1>

        <h4 className="flex space-x-10 justify-center my-10">
        <h5 className={`${styles.product01} text-center font-semibold `}>Price: Pkr 4,000/</h5>
        <image className={`${styles.product02} text-center font-semibold `}>Price: Pkr 5,000/</image>
        <image className={`${styles.product03} text-center font-semibold`}>Price: Pkr 45,000</image>
        <image className={`${styles.product04} text-center font-semibold`}>Price: Pkr 4,000</image>
        <image className={`${styles.product05} text-center font-semibold`}>Price: Pkr 12,000</image>
        {/* <h7 className={`${styles.product01} text-center font-semibold `}>Price: Pkr 12,000/</h7>
        <h8 className={`${styles.product01} text-center font-semibold `}>Price: Pkr 12,000/</h8> */}
        </h4>
        </div>
    );
}

{/* <div className="mt-5 flex justify-stretch">
<h1 className={`${styles.bgimageHero1}`}> </h1>
<h2 className="text-wrap text-white font-serif text-4xl italic">
    <br/> We offer smart home and smart<br/>
    office solutions. You can buy all <br/>
    kinds of home automation products<br/> 
    for your smart home. With our sensors<br/>
    and smart devices, you can achieve energy <br/>
    efficiency and bring convenience into your life.
</h2>
</div> */}
