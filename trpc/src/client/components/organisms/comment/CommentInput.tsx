import {FC, useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import {Button} from '../../atoms/Button'
import {SelectLabel} from 'client/components/atoms/SelectLabel'
import {SubmitButton} from 'client/components/atoms/SubmitButton'
import {IconBalloon} from 'client/components/molecules/IconBalloon'
import {MarkdownInput} from 'client/components/molecules/MarkdownInput'
import styles from 'client/styles/components/organisms/comment/CommentInput.module.scss'
import {User} from 'domain/User'
import {clientTrpc} from "../../../client_trpc";

type Props = {
  commentId: string
  themeId: string
  text: string
  user: User
  variant: 'create' | 'update'
  onCancel: () => void
}

export const CommentInput: FC<Props> = (props) => {
  const [writing, setWriting] = useState(true)

  const [text, setText] = useState(props.text)
  const [enabled, setEnabled] = useState(false)

  const input = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    setEnabled(e.target.value !== '')
  }

  const commentCreate = clientTrpc.comment.create.useMutation()
  const create = () => {
    setEnabled(false)
    const id = uuidv4()
    commentCreate.mutate({id: id, themeId: props.themeId, body: text, authorId: props.user.id})
    window.location.reload()
  }

  const commentUpdate = clientTrpc.comment.update.useMutation()
  const update = () => {
    setEnabled(false)
    commentUpdate.mutate({id: props.commentId, body: text})
    window.location.reload()
  }

  return (
    <IconBalloon icon={props.user.icon}>
      <div className={styles.component}>
        <div className={styles.header}>
          <SelectLabel value="Write" selected={writing} onClick={() => setWriting(true)}/>
          <SelectLabel value="Preview" selected={!writing} onClick={() => setWriting(false)}/>
        </div>
        <hr className={styles.sep}/>
        <div className={styles.body}>
          <MarkdownInput text={text} isWriting={writing} onChange={input}/>
          <div className={styles.buttons}>
            {props.variant === 'create' && <SubmitButton value="Add Comment" enabled={enabled} onClick={create}/>}
            {props.variant === 'update' && <Button value="Cancel" onClick={props.onCancel}/>}
            {props.variant === 'update' && <SubmitButton value="Update Comment" enabled={enabled} onClick={update}/>}
          </div>
        </div>
      </div>
    </IconBalloon>
  )
}
