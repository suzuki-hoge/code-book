import { FC } from 'react'
import styles from 'client/styles/components/atoms/Button.module.scss'

type Props = {
  value: string
  onClick: () => void
}

export const Button: FC<Props> = (props) => {
  return <input type="button" className={styles.component} value={props.value} onClick={props.onClick} />
}
