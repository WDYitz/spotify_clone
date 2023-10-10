import styles from '@/app/home/home.module.scss'
import { Library } from '@/components/Library'
import { NavHome } from '@/components/navHome'
import { NavWrapper } from '@/components/navWrapper'

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
    </main>
  )
}
