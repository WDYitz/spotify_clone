import { ReactNode } from 'react'
import styles from './yourLibrary.module.scss'

type LibraryRootProp = {
    children: ReactNode
}

export function LibraryRoot({ children }: LibraryRootProp) {
    return (
        <section className={styles.libraryRoot}>
            {children}
        </section>
    )
}