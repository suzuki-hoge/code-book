import { ChangeEvent, FC, useState } from 'react'
import { MarkdownText } from '../atoms/MarkdownText'
import styles from 'client/styles/components/molecules/MarkdownInput.module.scss'

type Props = {
  text: string
  isWriting: boolean
}

export const MarkdownInput: FC<Props> = (props) => {
  const [text, setText] = useState(props.text)

  return (
    <div className={styles.component}>
      {props.isWriting ? (
        <textarea
          className={styles.write}
          value={text}
          rows={6}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        />
      ) : (
        <div className={styles.preview}>
          <MarkdownText text={text !== '' ? text : '本文がありません'} />
        </div>
      )}
    </div>
  )
}
