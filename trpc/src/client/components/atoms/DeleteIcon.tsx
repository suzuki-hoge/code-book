import { FC } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import styles from 'client/styles/components/atoms/Icon.module.scss'

type Props = {
  variant: 'small' | 'medium'
}

export const DeleteIcon: FC<Props> = (props) => {
  return <AiFillDelete className={styles[props.variant]} />
}
