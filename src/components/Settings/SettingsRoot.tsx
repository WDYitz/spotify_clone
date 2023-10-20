import { ReactNode } from "react"
import styles from './settings.module.scss'

type RootProps = {
    children: ReactNode
}

export function SettingsRoot({ children }: RootProps) {
    return (
        <div className={styles.SettingsRoot}>
            {children}
        </div>
    )
}