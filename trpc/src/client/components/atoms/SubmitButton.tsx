import { FC, useState } from 'react'
import styles from 'client/styles/components/atoms/SubmitButton.module.scss'

type Props = {
  value: string
  enabled: boolean
}

export const SubmitButton: FC<Props> = (props) => {
  const [enabled, setEnabled] = useState(props.enabled)

  return (
    <input
      type="submit"
      className={styles.component}
      value={props.value}
      disabled={!enabled}
      onClick={() => setEnabled(false)}
    />
  )
}
