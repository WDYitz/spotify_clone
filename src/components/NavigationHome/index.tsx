'use client'
import styles from './navHome.module.scss'
import { GoHome as HomeIcon } from 'react-icons/go'
import { FiSearch as SearchIcon } from 'react-icons/fi'
import { useNavigation } from '@/contexts/NavigationContext'

export function NavHome() {
    const Pagination = useNavigation();

    return (
        <section className={styles.navHome}>
            <div className={styles.homeLinkWrapper}>
                <span className={styles.HomeLink} onClick={() => Pagination?.handleCurrentPage('home')}>
                    <HomeIcon size={25} />
                </span>
                <span className={styles.SearchLink} onClick={() => Pagination?.handleCurrentPage('search')}>
                    <SearchIcon size={25} />
                </span>
            </div>
        </section>
    )
}