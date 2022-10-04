import { FC } from 'react'
import styles from 'client/styles/components/atoms/Logo.module.scss'

type Props = {

}

export const Logo: FC<Props> = (props) => {
  return <span className={styles.component}>Code Book</span>
}
