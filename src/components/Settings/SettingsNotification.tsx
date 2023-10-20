'use client'
import { useState } from 'react'
import styles from './settings.module.scss'

export function SettingsRoot() {
    const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false);
    
    return (
        <div className={styles.SettingsNotification}>
       
        </div>
    )
}