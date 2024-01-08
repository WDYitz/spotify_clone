import styles from './home.module.scss'
import { Library } from '@/components/Library'
import { NavHome } from '@/components/NavigationHome'
import { NavWrapper } from '@/components/NavigationWrapper'
import { PageContent } from '@/components/PageContent'

export default function Home() {
  return (
    <main className={styles.Home}>
      <NavWrapper>
        <NavHome />
        <Library.Root>
          <Library.Widget />
          <Library.Filter />
          <Library.Search />
          <Library.Playlist />
        </Library.Root>
      </NavWrapper>
      <PageContent />
    </main>
  )
}
