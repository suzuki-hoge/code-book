import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { SnippetCode as Code } from '../../../types/code'
import { Button } from '../../atoms/Button'
import { CodeBlock } from '../../atoms/CodeBlock'
import { IconText } from '../../molecules/IconText'

type Props = {
  code: Code
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  margin: 1em 0;
`

export const SnippetCode = ({ code }: Props) => {
  const initBody = code.varVals.reduce(
    (acc, codeVal, i) => (codeVal != '' ? acc.replaceAll(`$${code.varKeys[i]}$`, codeVal) : acc),
    code.body,
  )

  const [body, setBody] = useState(initBody)
  const [placeholders, setPlaceholders] = useState<string[]>([...code.varVals])

  return (
    <>
      <IconText href="#" icon={code.tag.icon} text={code.name} variant={'small'} />
      <CodeBlock body={body} />
      {code.varKeys.map((varKey, i) => (
        <Div key={i}>
          <span>{varKey}</span>
          <input
            type="text"
            placeholder={`$${varKey}$`}
            value={placeholders[i]}
            onInput={(e: ChangeEvent<HTMLInputElement>) => {
              const ps = [...placeholders]
              ps[i] = e.target.value
              setPlaceholders(ps)
              setBody(ps.reduce((acc, p, j) => (p != '' ? acc.replaceAll(`$${code.varKeys[j]}$`, p) : acc), code.body))
            }}
          />
        </Div>
      ))}
      <Button value="Copy" variant="primary" onclick={() => navigator.clipboard.writeText(body)} />
    </>
  )
}
