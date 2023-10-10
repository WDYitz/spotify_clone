import Link from 'next/link'
import styles from './navHome.module.scss'
import { GoHome as HomeIcon } from 'react-icons/go'
import { FiSearch as SearchIcon } from 'react-icons/fi'

export function NavHome() {
    return (
        <section className={styles.navHome}>
            <div className={styles.homeLinkWrapper}>
                <Link href={'/'}><HomeIcon size={25} /></Link>
                <Link href={'/search'}><SearchIcon size={25} /></Link>
            </div>
        </section>
    )
}