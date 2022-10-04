import { FC } from 'react'
import { MarkdownText } from '../../atoms/MarkdownText'
import { ThemeHeader } from './ThemeHeader'
import styles from 'client/styles/components/organisms/theme/ThemeItem.module.scss'
import { Theme } from 'domain/Theme'

type Props = {
  theme: Theme
}

export const ThemeItem: FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <ThemeHeader theme={props.theme} />
      </div>
      <div className={styles.body}>
        <MarkdownText text={props.theme.description.body.split('\n').slice(0, 5).join('\n')} />
      </div>
    </div>
  )
}
