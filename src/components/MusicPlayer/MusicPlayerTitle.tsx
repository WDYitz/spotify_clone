/* eslint-disable @next/next/no-img-element */
'use client'
import 'animate.css'
import { useState } from 'react'
import styles from './MusicPlayer.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'

export function MusicPlayerTitle() {
    const [like, setLike] = useState<boolean>(false);

    return (
        <div className={styles.musicPlayerTitle}>
            <img src="/" alt="" />
            <div className={styles.musicPlayerSongTitle}>
                <h2>Titulo Teste teste</h2>
                <p>Artista Teste</p>
            </div>
            <span
                className={`${styles.heart} 
                ${like && 'animate__animated animate__rubberBand'}`}
                onClick={() => setLike(prev => !prev)}
            >
                <AiOutlineHeart size={25} color={like ? '#1ed760' : '#fff'} />
            </span>
        </div>
    )
}