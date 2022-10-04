import { FC } from 'react'
import { SubmitButton } from 'client/components/atoms/SubmitButton'
import { IconBalloon } from 'client/components/molecules/IconBalloon'
import styles from 'client/styles/components/organisms/theme/ThemeInput.module.scss'
import { User } from 'domain/User'

type Props = {
  user: User
}

export const ThemeInput: FC<Props> = (props) => {
  return (
    <IconBalloon icon={props.user.icon}>
      <div className={styles.component}>
        <div>
          <input className={styles.input} type="text" placeholder="Title" />
        </div>
        <SubmitButton value="New Theme" enabled={false} />
      </div>
    </IconBalloon>
  )
}
