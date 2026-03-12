import styles from './Header.module.css'
import Link from "next/link"

const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <li>
                    <Link className={styles.link} href='/' >Inicio</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/servicos' >Serviços</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/galeria' >Galeria</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header