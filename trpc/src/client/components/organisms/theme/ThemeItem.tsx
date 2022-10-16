import { FC } from 'react'
import { MarkdownText } from 'client/components/atoms/MarkdownText'
import { ThemeHeader } from 'client/components/organisms/theme/ThemeHeader'
import styles from 'client/styles/components/organisms/theme/ThemeItem.module.scss'
import { ThemeSummary } from 'domain/Theme'

type Props = {
  theme: ThemeSummary
  editable: boolean
}

export const ThemeItem: FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <ThemeHeader theme={props.theme} editable={props.editable} />
      </div>
      <div className={styles.body}>
        {props.theme.firstComment ? (
          <MarkdownText text={props.theme.firstComment.body.split('\n').slice(0, 5).join('\n')} />
        ) : (
          <span className={styles.message}>no description.</span>
        )}
      </div>
    </div>
  )
}
