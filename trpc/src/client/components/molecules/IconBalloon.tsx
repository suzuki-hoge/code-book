import { FC, ReactNode } from 'react'
import { ImageIcon } from 'client/components/atoms/ImageIcon'
import { Balloon } from 'client/components/molecules/Balloon'
import styles from 'client/styles/components/molecules/IconBalloon.module.scss'

type Props = {
  icon: string
  children: ReactNode
}

export const IconBalloon: FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      <ImageIcon path={props.icon} variant={'medium'} />

      <div className={styles.balloon}>
        <Balloon>{props.children}</Balloon>
      </div>
    </div>
  )
}
