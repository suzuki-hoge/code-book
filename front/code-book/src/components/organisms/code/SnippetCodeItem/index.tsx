import { useState } from 'react'
import styled from 'styled-components'
import { SnippetCode, Variable } from '../../../../types/code'
import { Button } from '../../../atoms/Button'
import { CodeBlock } from '../../../atoms/CodeBlock'

type Props = {
  code: SnippetCode
}

const Div = styled.div`
  margin: 1em 0;
`

const fill = (text: string, variable: Variable) => {
  return variable.value == '' ? text : text.replaceAll(`$${variable.name}$`, variable.value)
}

export const SnippetCodeItem = ({ code }: Props) => {
  console.log(code)
  const initialText = code.variables.reduce(fill, code.file.text)

  const [text, setText] = useState(initialText)
  const [inputVariables, setInputVariables] = useState<Variable[]>(code.variables)

  return (
    <>
      <CodeBlock filename={code.file.name} text={text} />
      {code.variables.map((variable, i) => (
        <Div key={variable.name}>
          <input
            type="text"
            placeholder={`$${variable.name}$`}
            value={inputVariables[i].value}
            onChange={(e) => {
              const variables = [...inputVariables]
              variables[i].value = e.target.value
              setInputVariables(variables)

              setText(variables.reduce(fill, code.file.text))
            }}
          />
        </Div>
      ))}
      <Div>
        <Button value="Copy" variant={'primary'} enabled={true} onclick={() => navigator.clipboard.writeText(text)} />
      </Div>
    </>
  )
}
