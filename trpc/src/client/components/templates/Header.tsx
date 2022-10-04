import {FC} from 'react'
import styles from 'client/styles/components/templates/Header.module.scss'
import {User} from "../../../domain/User";
import {Logo} from "../atoms/Logo";
import {ImageIcon} from "../atoms/ImageIcon";

type Props = {
  user: User
}

export const Header: FC<Props> = (props) => {
  return <div className={styles.component}>
    <Logo/>
    <ImageIcon path={props.user.icon} variant={"medium"}/>
  </div>
}
