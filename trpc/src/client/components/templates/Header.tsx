import Link from 'next/link'
import { FC } from 'react'
import { User } from '../../../domain/User'
import { ImageIcon } from '../atoms/ImageIcon'
import { Logo } from '../atoms/Logo'
import styles from 'client/styles/components/templates/Header.module.scss'

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
