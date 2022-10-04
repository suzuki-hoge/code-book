import {FC, ReactNode} from 'react'
import styles from 'client/styles/components/templates/Frame.module.scss'
import {User} from "../../../domain/User";
import {Header} from "./Header";


type Props = {
  user: User,
  children: ReactNode
}

export const Frame: FC<Props> = (props) => {
  return <div className={styles.component}>
    <div className={styles.headerRoot}>
      <div className={styles.header}>
        <Header user={props.user}/>
      </div>
    </div>
    <div className={styles.contentRoot}>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  </div>
}
