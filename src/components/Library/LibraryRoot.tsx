import { ReactNode } from 'react'
import styles from './yourLibrary.module.scss'
import { ChildrenProp } from '@/types/Children'

export function LibraryRoot({ children }: ChildrenProp) {
    return (
        <section className={styles.libraryRoot}>
            {children}
        </section>
    )
}