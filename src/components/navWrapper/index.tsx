import { ReactNode } from "react";
import styles from './navWrapper.module.scss'

type NavWrapperType = {
    children: ReactNode
}

export function NavWrapper({ children }: NavWrapperType) {
    return (
        <aside className={styles.navWrapper}>
            {children}
        </aside>
    )
}