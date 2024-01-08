import { ChildrenProp } from '@/types/Children'
import styles from './main.module.scss'

export function MainRoot({ children }: ChildrenProp) {
    return (
        <div className={styles.MainRoot}>
            {children}
        </div>
    )
}