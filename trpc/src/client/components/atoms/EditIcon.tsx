import { FC } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import styles from 'client/styles/components/atoms/Icon.module.scss'

type Props = {
  variant: 'small' | 'medium'

  onClick: () => void
}

export const EditIcon: FC<Props> = (props) => {
  return <BsFillPencilFill className={styles[props.variant]} onClick={props.onClick} />
}
