import { FC } from 'react'
import { DeleteIcon } from 'client/components/atoms/DeleteIcon'
import { EditIcon } from 'client/components/atoms/EditIcon'
import { MarkdownText } from 'client/components/atoms/MarkdownText'
import { IconBalloon } from 'client/components/molecules/IconBalloon'
import styles from 'client/styles/components/organisms/comment/CommentItem.module.scss'
import { Comment } from 'domain/Comment'

type Props = {
  comment: Comment
}

export const CommentItem: FC<Props> = (props) => {
  return (
    <IconBalloon icon={props.comment.author.icon}>
      <div className={styles.component}>
        <div className={styles.header}>
          <div>
            <span className={styles.name}>{props.comment.author.name}</span>
            <span className={styles.time}>{props.comment.created}</span>
          </div>
          <div>
            <EditIcon variant={'small'} />
            <DeleteIcon variant={'small'} />
          </div>
        </div>
        <hr className={styles.sep} />
        <div className={styles.body}>
          <MarkdownText text={props.comment.body} />
        </div>
      </div>
    </IconBalloon>
  )
}
