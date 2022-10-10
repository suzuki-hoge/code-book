import {NextPage} from 'next'
import {useRouter} from 'next/router'
import {useContext} from 'react'
import {clientTrpc} from '../../client/client_trpc'
import {ThemeHeader} from '../../client/components/organisms/theme/ThemeHeader'
import {Frame} from '../../client/components/templates/Frame'
import {CommentList} from '../../client/components/templates/comment/CommentList'
import {UserContext} from '../_app'
import styles from 'client/styles/components/pages/ThemeDetail.module.scss'
import {CommentInput} from "../../client/components/organisms/comment/CommentInput";

const Page: NextPage = () => {
  const router = useRouter()

  const user = useContext(UserContext)

  const themeId = router.query.id as string
  const theme = clientTrpc.theme.detail.useQuery(themeId, {}).data

  if (!user || !theme) {
    return <p>loading...</p>
  }

  return (
    <Frame user={user}>
      <div className={styles.component}>
        <ThemeHeader theme={theme} editable={true}/>
        <CommentList comments={theme.comments}/>
      </div>
      <div style={{marginTop: '3em'}}>
        <CommentInput commentId={''} themeId={theme.id} user={user} text={''} variant={"create"} onCancel={() => {
        }}/>
      </div>
    </Frame>
  )
}

export default Page
