import Link from 'next/link'
//import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useState } from 'react'

export default function Navbar() {
    const [clicked, setClicked] = useState(false)

    return (
        <nav className={styles.navbar}>
            <ul >
                <li className={styles.navbar_logo}><Link href='/'><a>Spectral<span>AI</span></a></Link></li>
                <li className={styles.navbar_toggle} onClick={() => setClicked(current => !current)}><i className="fas fa-bars"></i></li>
                <li className={`${styles.navbar_links} ${clicked ? styles.active : styles.inactive}`}><Link href="/"><a>Home</a></Link></li>
                <li className={`${styles.navbar_links} ${clicked ? styles.active : styles.inactive}`}><Link href="/userData"><a>Inserir Dados</a></Link></li>
                <li className={`${styles.navbar_links} ${clicked ? styles.active : styles.inactive}`}><Link href="/about"><a>Sobre</a></Link></li>
                <li className={`${styles.navbar_links} ${clicked ? styles.active : styles.inactive}`}><Link href="/contact"><a>Contato</a></Link></li>
            </ul>
        </nav>
    )
}