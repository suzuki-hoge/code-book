import { FC } from 'react'
import styles from 'client/styles/components/atoms/ImageIcon.module.scss'

type Props = {
  path: string

  variant: 'small' | 'medium'
}

export const ImageIcon: FC<Props> = (props) => {
  return (
    <picture>
      <img className={styles[props.variant]} src={props.path} alt="user-icon" />
    </picture>
  )
}
