import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CommentForm } from '../../components/organisms/comment/CommentForm'
import { FootSlider } from '../../components/templates/FootSlider'
import { Frame } from '../../components/templates/Frame'
import { CodeDetail } from '../../components/templates/code/CodeDetail'
import { Code } from '../../types/code'
import { fileCode, snippetCode, urlCode } from '../../types/fixture/code'
import { cat } from '../../types/fixture/user'

const Page = () => {
  const codeId = useRouter().query.id as string
  const [code, setCode] = useState<Code>()

  useEffect(() => {
    if (codeId == fileCode.id) {
      setCode(fileCode)
    }
    if (codeId == urlCode.id) {
      setCode(urlCode)
    }
    if (codeId == snippetCode.id) {
      setCode(snippetCode)
    }
  }, [codeId])

  return (
    <Frame user={cat}>
      {code && <CodeDetail code={code} />}
      <FootSlider title="New Comment">
        <CommentForm user={cat} codeId={codeId} />
      </FootSlider>
    </Frame>
  )
}

export default Page
