
'use client'
import { useNavigation } from '@/contexts/NavigationContext'
import styles from './pageContent.module.scss'
import { Main } from '@/app/main/index'

export function PageContent() {
  const navigation = useNavigation();
  const HomePage = navigation?.currentPage === 'home';

  return (
    <div className={styles.PageContent}>
      {
        HomePage ?
          <Main.Root>
            <Main.Settings />
            <Main.Playlists />
            <Main.Songs />
          </Main.Root>
          :
          <p>Search Component not yet implemented.</p>
      }
    </div>
  )
}