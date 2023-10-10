import styles from './yourLibrary.module.scss'
import { FiSearch as SearchIcon } from 'react-icons/fi'

export function LibrarySearch() {
    return (
        <div className={styles.librarySearch}>
            <div className={styles.searchInput}>
                <SearchIcon fontSize={20} />
                <input type="text" placeholder='Search In Your Library'/>
            </div>
        </div>
    )
}