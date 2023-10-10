import { ReactNode } from "react";
import styles from './navWrapper.module.scss'

type NavWrapperType = {
    children: ReactNode
    showMore: boolean;
}

export function NavWrapper({ children, showMore }: NavWrapperType) {
    return (
        <aside className={`${styles.navWrapper} ${showMore ? styles.open : null}`}>
            {children}
        </aside>
    )
}