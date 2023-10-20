'use client'
import { ReactNode } from "react";
import styles from './navWrapper.module.scss'
import { useWidget } from "@/contexts/LibraryWidgetContext";
import { ChildrenProp } from "@/types/Children";

export function NavWrapper({ children }: ChildrenProp) {
    const WidgetContext = useWidget();

    return (
        <aside className={`${styles.navWrapper} ${WidgetContext?.handleShowMoreBtn ? styles.open : null}`}>
            {children}
        </aside>
    )
}