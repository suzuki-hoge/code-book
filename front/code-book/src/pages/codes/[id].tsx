import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CodeDetail } from '../../components/templates/CodeDetail'
import { Frame } from '../../components/templates/Frame'
import { Code } from '../../types/code'
import { fileCode, snippetCode, urlCode } from '../../types/fixture/code'
import { cat } from '../../types/fixture/user'

const Page = () => {
  const codeId = useRouter().query.id as string
  const [code, setCode] = useState<Code>()

  useEffect(() => {
    setCode({ '1': fileCode, '2': urlCode, '3': snippetCode }[codeId])
  }, [codeId])

  return <Frame user={cat}>{code && <CodeDetail code={code} />}</Frame>
}

export default Page
