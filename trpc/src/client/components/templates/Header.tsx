import Link from 'next/link'
import { FC } from 'react'
import { ImageIcon } from 'client/components/atoms/ImageIcon'
import { Logo } from 'client/components/atoms/Logo'
import styles from 'client/styles/components/templates/Header.module.scss'
import { User } from 'domain/User'

type Props = {
  user: User
}

export const Header: FC<Props> = (props) => {
  return (
    <Link href={'/theme/all'}>
      <div className={styles.component}>
        <Logo />
        <ImageIcon path={props.user.icon} variant={'medium'} />
      </div>
    </Link>
  )
}
