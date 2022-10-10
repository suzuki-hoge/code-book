import { FC } from 'react'
import styles from 'client/styles/components/atoms/SubmitButton.module.scss'

type Props = {
  value: string
  enabled: boolean
  onClick: () => void
}

export const SubmitButton: FC<Props> = (props) => {
  return (
    <input
      type="input"
      className={styles.component}
      value={props.value}
      disabled={!props.enabled}
      onClick={props.onClick}
    />
  )
}
