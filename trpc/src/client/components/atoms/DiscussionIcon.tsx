import { FC } from 'react'
import { GoCommentDiscussion } from 'react-icons/go'
import styles from 'client/styles/components/atoms/Icon.module.scss'

type Props = {
  count: number
  variant: 'small' | 'medium'
}

export const DiscussionIcon: FC<Props> = (props) => {
  return (
    <span style={{ display: 'flex', alignItems: 'center', columnGap: '0.25em' }}>
      <GoCommentDiscussion className={styles[props.variant]} />
      <span style={{ fontSize: '0.8em' }}>{props.count}</span>
    </span>
  )
}
