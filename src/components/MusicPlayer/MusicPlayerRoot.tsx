import { ReactNode } from 'react'
import styles from './MusicPlayer.module.scss'

type MusicPlayerRootProp = {
    children: ReactNode
}

export function MusicPlayerRoot({ children }: MusicPlayerRootProp) {
    return (
        <div className={styles.MusicPlayerRoot}>
            {children}
        </div>
    )
}