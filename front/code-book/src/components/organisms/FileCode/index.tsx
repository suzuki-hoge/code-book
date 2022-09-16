import { FileCode as Code } from '../../../types/code'
import { CodeBlock } from '../../atoms/CodeBlock'
import { IconText } from '../../molecules/IconText'

type Props = {
  code: Code[]
}

export const FileCode = ({ code }: Props) => {
  return (
    <>
      {code.map((c) => (
        <div key={c.id}>
          <IconText href="#" icon={c.tag.icon} text={c.filename} variant={'small'} />
          <CodeBlock body={c.body} />
        </div>
      ))}
    </>
  )
}
