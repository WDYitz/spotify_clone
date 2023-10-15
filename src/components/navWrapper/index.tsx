'use client'
import { ReactNode } from "react";
import styles from './navWrapper.module.scss'
import { useWidget } from "@/contexts/LibraryWidgetContext";

type NavWrapperType = {
    children: ReactNode
}

export function NavWrapper({ children }: NavWrapperType) {
    const WidgetContext = useWidget();

    return (
        <aside className={`${styles.navWrapper} ${WidgetContext?.handleShowMoreBtn ? styles.open : null}`}>
            {children}
        </aside>
    )
}