import styles from './yourLibrary.module.scss'
import { LuLibrary as LibraryIcon } from 'react-icons/lu'
import { LibraryActionsButton } from './LibraryActionButtons'

export function LibraryWidget() {

    return (
        <div className={styles.libraryWidget}>
            <div className={styles.libraryHeaderText}>
                <LibraryIcon size={25} />
                <h2>Your Library</h2>
            </div>
            <LibraryActionsButton />
        </div>
    )
}