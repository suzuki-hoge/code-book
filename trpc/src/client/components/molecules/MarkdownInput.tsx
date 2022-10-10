import {ChangeEvent, FC} from 'react'
import {MarkdownText} from '../atoms/MarkdownText'
import styles from 'client/styles/components/molecules/MarkdownInput.module.scss'

type Props = {
  text: string
  isWriting: boolean
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const MarkdownInput: FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      {props.isWriting ? (
        <textarea className={styles.write} value={props.text} rows={6} onChange={props.onChange}/>
      ) : (
        <div className={styles.preview}>
          <MarkdownText text={props.text !== '' ? props.text : '本文がありません'}/>
        </div>
      )}
    </div>
  )
}
