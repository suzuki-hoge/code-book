import type { NextPage } from 'next'
import { CodeDetail } from '../components/templates/CodeDetail'
import { Frame } from '../components/templates/Frame'
import { fileCode } from '../types/fixture/code'
import { cat } from '../types/fixture/user'

const Home: NextPage = () => {
  return (
    <Frame user={cat}>
      <CodeDetail code={fileCode} />
    </Frame>
  )
}

export default Home
