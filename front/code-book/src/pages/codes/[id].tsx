import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import { CommentForm } from '../../components/organisms/comment/CommentForm'
import { FootSlider } from '../../components/templates/FootSlider'
import { Frame } from '../../components/templates/Frame'
import { CodeDetail } from '../../components/templates/code/CodeDetail'
import { CodeFindOneResponse } from '../api/codes/[id]'

const Page = () => {
  const router = useRouter()

  const codeId = router.query.id as string

  const { status, data } = useQuery(
    [codeId],
    async () => (await axios.get<CodeFindOneResponse>(`/api/codes/${codeId}`)).data,
  )

  if (status == 'loading') {
    return <p>Loading...</p>
  }

  if (status == 'success') {
    return (
      <Frame>
        {<CodeDetail code={data.code} />}
        <FootSlider title="New Comment">
          <CommentForm codeId={codeId} />
        </FootSlider>
      </Frame>
    )
  }
}

export default Page
