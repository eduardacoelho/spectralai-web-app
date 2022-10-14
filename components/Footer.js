import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.left}>
                    <div className={styles.button}>
                    <Link href="https://github.com/hugogontijomachado/spectral-ai-web-app">
                        <a>Click here to see the<br/>code on GitHub</a>
                    </Link>
                    </div>
                </li>  
                <li className={styles.right}>
                    <div className={styles.name}>Spectral<span>AI</span> &copy; 2022</div>
                </li>
            </ul>
        </footer>            
    )
}