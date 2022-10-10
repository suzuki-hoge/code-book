import { NextPage } from 'next'
import { useContext } from 'react'
import { clientTrpc } from '../../client/client_trpc'
import { ThemeInput } from '../../client/components/organisms/theme/ThemeInput'
import { Frame } from '../../client/components/templates/Frame'
import { ThemeList } from '../../client/components/templates/theme/ThemeList'
import { UserContext } from '../_app'
import styles from 'client/styles/components/pages/ThemeDetail.module.scss'

const Page: NextPage = () => {
  const user = useContext(UserContext)

  const themes = clientTrpc.theme.summaries.useQuery(undefined, {})?.data ?? []

  if (!user) {
    return <p>loading...</p>
  }

  return (
    <Frame user={user}>
      <div className={styles.component}>
        <ThemeList themes={themes} />
      </div>
      <div style={{ marginTop: '3em' }}>
        <ThemeInput user={user} />
      </div>
    </Frame>
  )
}

export default Page
