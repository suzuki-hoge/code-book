import { FC, ReactNode } from 'react'
import styles from 'client/styles/components/molecules/Balloon.module.scss'

type Props = {
  children: ReactNode
}

export const Balloon: FC<Props> = (props) => {
  return <div className={styles.component}>{props.children}</div>
}
