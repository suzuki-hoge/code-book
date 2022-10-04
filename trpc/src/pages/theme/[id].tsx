import {NextPage} from "next";
import {Frame} from "../../client/components/templates/Frame";
import {userFixture} from "../../client/storybook/fixtures/User";
import {ThemeHeader} from "../../client/components/organisms/theme/ThemeHeader";
import {markdownTextThemeFixture} from "../../client/storybook/fixtures/Theme";
import {markdownTextCommentFixture, plainTextCommentFixture} from "../../client/storybook/fixtures/Comment";
import styles from 'client/styles/components/pages/ThemeDetail.module.scss'
import {CommentList} from "../../client/components/templates/comment/CommentList";

const Page: NextPage = () => {
  const user = userFixture
  const theme = markdownTextThemeFixture
  const comments = [markdownTextCommentFixture, plainTextCommentFixture]

  return <Frame user={user}>
    <div className={styles.component}>
      <ThemeHeader theme={theme}/>
      <CommentList comments={comments}/>
    </div>
  </Frame>
}

export default Page
