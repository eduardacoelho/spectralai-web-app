import Image from 'next/image'
import styles from "../styles/About.module.css"

import * as dataraw from '../public/data/about.json'
const data = Array.from(dataraw.default)

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            {data.map((item,index) => (
                <p key={index}>{item}</p>
            ))}
            <div className={styles.img}>
                <Image 
                    src="/logo.png"
                    width="600"
                    height="300"
                    alt="Neural Network classificator from molecular spectal data"
                />
            </div>

        </div>
    )
}