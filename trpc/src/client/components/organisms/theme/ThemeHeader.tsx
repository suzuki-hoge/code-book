import Link from 'next/link'
import { FC, useState } from 'react'
import { Button } from 'client/components/atoms/Button'
import { DeleteIcon } from 'client/components/atoms/DeleteIcon'
import { DiscussionIcon } from 'client/components/atoms/DiscussionIcon'
import { EditIcon } from 'client/components/atoms/EditIcon'
import { ImageIcon } from 'client/components/atoms/ImageIcon'
import { SubmitButton } from 'client/components/atoms/SubmitButton'
import styles from 'client/styles/components/organisms/theme/ThemeHeader.module.scss'
import { ThemeCore } from 'domain/Theme'

type Props = {
  theme: ThemeCore

  editable: boolean
}

export const ThemeHeader: FC<Props> = (props) => {
  const [writing, setWriting] = useState(false)

  const View: FC<Props> = (props) => {
    return (
      <div className={styles.view}>
        <Link href={`/theme/${props.theme.id}`}>
          <span className={styles.title}>{props.theme.title}</span>
        </Link>
        <div>
          {props.editable && <EditIcon variant={'small'} onClick={() => setWriting(true)} />}
          {props.editable && <DeleteIcon variant={'small'} />}
          <DiscussionIcon count={props.theme.commentCount} variant={'small'} />
        </div>
      </div>
    )
  }

  const Write: FC<Props> = (props) => {
    return (
      <div className={styles.write}>
        <input className={styles.input} type="text" placeholder="Theme Title" value={props.theme.title} />
        <div>
          <Button value={'Cancel'} onClick={() => setWriting(false)} />
          <SubmitButton value={'Update'} enabled={true} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.component}>
      {!writing && <View {...props} />}
      {writing && <Write {...props} />}
      <div className={styles.row2}>
        <ImageIcon path={props.theme.author.icon} variant={'small'} />
        <div>
          <span>{props.theme.author.name}</span>
          <span>{props.theme.created}</span>
        </div>
      </div>
    </div>
  )
}
