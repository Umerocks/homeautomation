"use client"
// import React, { useState } from 'react';
import styles from './button.module.css'

interface IProps{
    text: string
}

 const Button = (props:IProps) => {
    // console.log(props.text);
    // const [fanOn, setFanOn] = useState(false);
    // const toggleButton = () => setFanOn(!fanOn)
    return(
        <button className={styles.button}>
                {/* {fanOn ? 'Turn Off Fan': 'Turn On Fan'} */}
                {props.text}
        </button>
    )
}

export default Button;



