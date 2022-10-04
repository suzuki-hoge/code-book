import {FC} from 'react'
import styles from 'client/styles/components/templates/comment/CommentList.module.scss'
import {Comment} from "../../../../domain/Comment";
import {CommentItem} from "../../organisms/comment/CommentItem";

type Props = {
  comments: Comment[]
}

export const CommentList: FC<Props> = (props) => {
  return <div className={styles.component}>
    {props.comments.map(comment => <div key={comment.id}>
      <CommentItem comment={comment}/>
    </div>)}
  </div>
}
