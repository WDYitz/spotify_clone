import { ReactNode } from 'react'
import styles from './MusicPlayer.module.scss'
import { ChildrenProp } from '@/types/Children'

export function MusicPlayerRoot({ children }: ChildrenProp) {
    return (
        <div className={styles.MusicPlayerRoot}>
            {children}
        </div>
    )
}