import { useRouter } from 'next/router'
import React, { FC, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { clientTrpc } from 'client/client_trpc'
import { SubmitButton } from 'client/components/atoms/SubmitButton'
import { IconBalloon } from 'client/components/molecules/IconBalloon'
import styles from 'client/styles/components/organisms/theme/ThemeInput.module.scss'
import { User } from 'domain/User'
import { UserContext } from 'pages/_app'

type Props = {
  user: User
}

export const ThemeInput: FC<Props> = (props) => {
  const router = useRouter()

  const user = useContext(UserContext)

  const [title, setTitle] = useState('')
  const [enabled, setEnabled] = useState(false)

  const theme = clientTrpc.theme.create.useMutation()

  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setEnabled(e.target.value !== '')
  }

  const create = () => {
    setEnabled(false)
    const id = uuidv4()
    theme.mutate({ id: id, title: title, authorId: user.id })
    router.push(`/theme/${id}`)
  }

  return (
    <IconBalloon icon={props.user.icon}>
      <div className={styles.component}>
        <div>
          <input className={styles.input} type="text" value={title} placeholder="Theme Title" onChange={input} />
        </div>
        <SubmitButton value="New Theme" enabled={enabled} onClick={create} />
      </div>
    </IconBalloon>
  )
}
