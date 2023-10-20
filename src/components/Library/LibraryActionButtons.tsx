'use client'
import styles from './yourLibrary.module.scss'
import { AiOutlineArrowRight as RightArrowIcon } from 'react-icons/ai'
import { AiOutlinePlus as AddIcon } from 'react-icons/ai'
import { PiMusicNotesPlusDuotone } from 'react-icons/pi';
import { useWidget } from '@/contexts/LibraryWidgetContext';

export function LibraryActionsButton() {
    const WidgetContext = useWidget();
    const invertArrowIcon = WidgetContext?.handleShowMoreBtn ? styles.arrowSide: null;

    return (
        <div className={styles.libraryActionsBtn}>
            <span className={styles.libraryBtn} onClick={WidgetContext?.openAddPlaylistModal}>
                <AddIcon size={30} class={styles.Icon} />
            </span>
            <span className={styles.libraryBtn} onClick={WidgetContext?.isOpenShowMore}>
                <RightArrowIcon size={30} class={`${styles.Icon} ${invertArrowIcon}`} />
            </span>
            {WidgetContext?.handleAddPlaylistModal &&
                <div className={styles.newModal}>
                    <p><PiMusicNotesPlusDuotone size={23} /> Create new Playlist</p>
                </div>
            }
        </div>
    )
}