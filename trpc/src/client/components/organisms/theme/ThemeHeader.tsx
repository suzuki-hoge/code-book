import { FC } from 'react'
import { Theme } from '../../../../domain/Theme'
import { DeleteIcon } from '../../atoms/DeleteIcon'
import { EditIcon } from '../../atoms/EditIcon'
import { ImageIcon } from '../../atoms/ImageIcon'
import { DiscussionIcon } from 'client/components/atoms/DiscussionIcon'
import styles from 'client/styles/components/organisms/theme/ThemeHeader.module.scss'

type Props = {
  theme: Theme
}

export const ThemeHeader: FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      <div className={styles.row1}>
        <span>{props.theme.title}</span>
        <div>
          <EditIcon variant={'small'} />
          <DeleteIcon variant={'small'} />
          <DiscussionIcon count={props.theme.comments} variant={'small'} />
        </div>
      </div>
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
