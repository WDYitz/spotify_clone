import styles from './yourLibrary.module.scss'

export function LibraryFilter() {
    return (
        <div className={styles.libraryFilter}>
            <button>Playlists</button>
            <button>Downloaded</button>
        </div>
    )
}
