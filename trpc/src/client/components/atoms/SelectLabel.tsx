import { FC } from 'react'
import styles from 'client/styles/components/atoms/SelectLabel.module.scss'

type Props = {
  value: string

  selected: boolean

  onClick: () => void
}

export const SelectLabel: FC<Props> = (props) => {
  return (
    <button className={styles[props.selected ? 'selected' : 'unselected']} onClick={props.onClick}>
      {props.value}
    </button>
  )
}
