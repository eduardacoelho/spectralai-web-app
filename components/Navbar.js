import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                    src="/images/123-31-9.svg"
                    width="90"
                    height="30"
                    alt="Neural Network Classificator from Spectral Data" 
                />
                <h1>Spectral AI</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/userData"><a>Inserir Dados</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>Sobre</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contato</a></Link>
                </li>
            </ul>
        </nav>

    )
}