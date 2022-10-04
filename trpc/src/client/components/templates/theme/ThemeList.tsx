import {FC} from 'react'
import styles from 'client/styles/components/templates/theme/ThemeList.module.scss'
import {Theme} from "../../../../domain/Theme";
import {ThemeItem} from "../../organisms/theme/ThemeItem";

type Props = {
  themes: Theme[]
}

export const ThemeList: FC<Props> = (props) => {
  return <div className={styles.component}>
    {props.themes.map(theme => <div key={theme.id}>
      <ThemeItem theme={theme}/>
    </div>)}
  </div>
}
