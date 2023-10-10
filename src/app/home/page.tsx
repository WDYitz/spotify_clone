'use client'
import styles from '@/app/home/home.module.scss'
import { Library } from '@/components/Library'
import { NavHome } from '@/components/navHome'
import { NavWrapper } from '@/components/navWrapper'
import { useState } from 'react';

export default function Home() {
  const [openPlaylist, setOpenPlaylist] = useState<boolean>(false);

  const handleOpenPlaylist = () => {
    setOpenPlaylist(prev => !prev)
  }

  return (
    <main className={styles.Home}>
      <NavWrapper showMore={openPlaylist}>
        <NavHome />
        <Library.Root>
          <Library.Widget onClick={() => setOpenPlaylist(prev => !prev)} />
          <Library.Filter />
          <Library.Search />
          <Library.Playlist />
        </Library.Root>
      </NavWrapper>
    </main>
  )
}
