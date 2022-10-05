import Image from 'next/image'
import styles from "../styles/About.module.css"
export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>balbablabalb blab lab lab lab lab aba bab ababalb abl a</p>
            <Image 
                src="/logo.png"
                width="600"
                height="300"
                alt="Neural Network classificator from molecular spectal data"
            />
        </div>
    )
}