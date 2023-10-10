'use client'
import { PiShuffle } from 'react-icons/pi'
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5'
import { AiOutlinePause } from 'react-icons/ai'
import { ImPlay3 } from 'react-icons/im'
import { TfiBackLeft } from 'react-icons/tfi'
import styles from './MusicPlayer.module.scss'
import { useEffect, useState } from 'react'

export function MusicPlayerControls() {
    const [playing, setPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalDuration, setTotalDuration] = useState(300);

    const oneSecond = 1 % 60;

    const handleTimeChange = () => {

        setCurrentTime(prevTime => prevTime + oneSecond);
        if (currentTime == totalDuration) {
            setCurrentTime(totalDuration);
        }
    };

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(1, '0')}:${String(seconds).padStart(2, '0')}`;
    };

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
                <p>{formatTime(currentTime)}</p>
                <input
                    type="range"
                    value={currentTime}
                    onChange={handleTimeChange}
                    min={0}
                    max={totalDuration}
                    step={1}
                />
                <p>{formatTime(totalDuration)}</p>
            </div>
        </div>
    )
}