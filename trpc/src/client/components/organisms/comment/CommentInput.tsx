import { FC, useState } from 'react'
import { SelectLabel } from 'client/components/atoms/SelectLabel'
import { SubmitButton } from 'client/components/atoms/SubmitButton'
import { IconBalloon } from 'client/components/molecules/IconBalloon'
import { MarkdownInput } from 'client/components/molecules/MarkdownInput'
import styles from 'client/styles/components/organisms/comment/CommentInput.module.scss'
import { User } from 'domain/User'

type Props = {
  user: User
}

export const CommentInput: FC<Props> = (props) => {
  const [writing, setWriting] = useState(true)

  return (
    <IconBalloon icon={props.user.icon}>
      <div className={styles.component}>
        <div className={styles.header}>
          <SelectLabel value="Write" selected={writing} onClick={() => setWriting(!writing)} />
          <SelectLabel value="Preview" selected={!writing} onClick={() => setWriting(!writing)} />
        </div>
        <hr className={styles.sep} />
        <div className={styles.body}>
          <div>
            <MarkdownInput text={''} isWriting={writing} />
          </div>
          <SubmitButton value="Add Comment" enabled={false} />
        </div>
      </div>
    </IconBalloon>
  )
}
