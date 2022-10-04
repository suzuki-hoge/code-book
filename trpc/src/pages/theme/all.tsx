import {NextPage} from "next";
import {Frame} from "../../client/components/templates/Frame";
import {userFixture} from "../../client/storybook/fixtures/User";
import {markdownTextThemeFixture, plainTextThemeFixture} from "../../client/storybook/fixtures/Theme";
import styles from 'client/styles/components/pages/ThemeDetail.module.scss'
import {ThemeList} from "../../client/components/templates/theme/ThemeList";

const Page: NextPage = () => {
  const user = userFixture
  const themes = [markdownTextThemeFixture, plainTextThemeFixture]

  return <Frame user={user}>
    <div className={styles.component}>
      <ThemeList themes={themes}/>
    </div>
  </Frame>
}

export default Page
