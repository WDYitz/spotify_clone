'use client'
import styles from './yourLibrary.module.scss'
import { LuLibrary as LibraryIcon } from 'react-icons/lu'
import { AiOutlinePlus as AddIcon } from 'react-icons/ai'
import { AiOutlineArrowRight as RightArrowIcon } from 'react-icons/ai'
import { PiMusicNotesPlusDuotone } from 'react-icons/pi'
import { useState } from 'react'

type WidgetProps = {
    onClick: () => void;
}

export function LibraryWidget({ onClick }: WidgetProps) {
    const [newPlaylist, setNewPlaylist] = useState<boolean>(false);

    const handleNewPlaylist = () => {
        setNewPlaylist(prev => !prev);
    }

    return (
        <div className={styles.libraryWidget}>
            <div className={styles.libraryHeaderText}>
                <LibraryIcon size={25} />
                <h2>Your Library</h2>
            </div>
            {newPlaylist &&
                <div className={styles.newModal}>
                    <p><PiMusicNotesPlusDuotone size={23} /> Create new Playlist</p>
                </div>
            }
            <div className={styles.libraryActionsBtn}>
                <span className={styles.libraryBtn} onClick={handleNewPlaylist}>
                    <AddIcon size={30} class={styles.Icon} />
                </span>
                <span className={styles.libraryBtn} onClick={onClick}>
                    <RightArrowIcon size={30} class={styles.Icon} />
                </span>
            </div>
        </div>
    )
}