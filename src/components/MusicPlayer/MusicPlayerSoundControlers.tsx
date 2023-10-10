import { AiOutlineSound } from 'react-icons/ai'
import styles from './MusicPlayer.module.scss'

export function MusicPlayerSoundControl() {
    return (
        <div className={styles.MusicPlayerSoundControl}>
            <div className={styles.SoundControl}>
                <span className={styles.muteButton}>
                    <AiOutlineSound size={25} />
                </span>
                <input type="range" />
            </div>
        </div>
    )
}