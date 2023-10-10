'use client'
import { PiShuffle } from 'react-icons/pi'
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5'
import { AiOutlinePause } from 'react-icons/ai'
import { ImPlay3 } from 'react-icons/im'
import { TfiBackLeft } from 'react-icons/tfi'
import styles from './MusicPlayer.module.scss'
import { useState } from 'react'

export function MusicPlayerControls() {
    const [playing, setPlaying] = useState<boolean>(false);

    return (
        <div className={styles.MusicPlayerControls}>
            <div className={styles.MusicPlayerMainControls}>
                <span className={styles.ShuffleButton}>
                    <PiShuffle />
                </span>
                <span className={styles.BackButton}>
                    <IoPlaySkipBackSharp />
                </span>
                <span
                    className={styles.PlayButton}
                    onClick={() => setPlaying(prev => !prev)}
                >
                    {playing ?
                        <AiOutlinePause />
                        : <ImPlay3 />
                    }
                </span>
                <span className={styles.Fowardbutton}>
                    < IoPlaySkipForwardSharp />
                </span>
                <span className={styles.RewindButton}>
                    < TfiBackLeft />
                </span>

            </div>
            <div className={styles.MusicPlayerProgress}>
                <p>0:00</p>
                <input type="range" />
                <p>0:00</p>
            </div>
        </div>
    )
}