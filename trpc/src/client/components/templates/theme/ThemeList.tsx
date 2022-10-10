import { FC } from 'react'
import { ThemeSummary } from '../../../../domain/Theme'
import { ThemeItem } from '../../organisms/theme/ThemeItem'
import styles from 'client/styles/components/templates/theme/ThemeList.module.scss'

type Props = {
  themes: ThemeSummary[]
}

export const ThemeList: FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      {props.themes.map((theme) => (
        <div key={theme.id}>
          <ThemeItem theme={theme} editable={false} />
        </div>
      ))}
    </div>
  )
}
