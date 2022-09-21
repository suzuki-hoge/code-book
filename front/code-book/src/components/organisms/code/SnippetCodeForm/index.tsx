import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../../pages/_app'
import { Variable } from '../../../../types/code'
import { Button } from '../../../atoms/Button'
import { VerticalItems } from '../../../molecules/VerticalItems'

type Props = {
  bookId: string
}

const Div = styled.div`
  padding: 0.5em 0 1em 0;
`

const Label = styled.p`
  margin: 0 0 0.5em 0;
`

const Text = styled.input`
  width: 80%;
`

const FileText = styled.textarea`
  width: 80%;
  padding: 4px;
`

const ButtonArea = styled.div`
  margin-top: 1em;
  position: relative;
`

export const SnippetCodeForm = ({ bookId }: Props) => {
  const router = useRouter()

  const user = useContext(UserContext)

  const [title, setTitle] = useState('')
  const [file, setFile] = useState<{ name: string; text: string }[]>([{ name: '', text: '' }])
  const [variables, setVariables] = useState<Variable[]>([])

  return (
    <Div>
      <VerticalItems>
        <>
          <div>
            <Label>タイトル</Label>
            <Text type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <Label>ファイル名</Label>
            <Text
              type="text"
              value={file[0].name}
              onChange={(e) => {
                const f = [...file]
                f[0].name = e.target.value
                setFile(f)
              }}
            />
          </div>

          <div>
            <Label>コード</Label>
            <FileText
              rows={8}
              value={file[0].text}
              onChange={(e) => {
                const f = [...file]
                f[0].text = e.target.value
                setFile(f)

                const m = f[0].text.match(/\$[^$]+\$/g)
                if (m != null) {
                  const vs = m.map((varName) => {
                    const v = variables.find((v) => v.name == varName.replaceAll('$', ''))
                    return { name: varName.replaceAll('$', ''), value: v ? v.value : '' }
                  })
                  setVariables(vs)
                } else {
                  setVariables([])
                }
              }}
            />
            <p style={{ margin: '0', color: '#666', fontSize: '0.8em' }}>
              $ で囲った部分は変数埋め込みとなり入力できるようになります
            </p>
          </div>

          <VerticalItems>
            {variables.map((variable, i) => (
              <div key={i}>
                <Label>${variable.name}$</Label>
                <Text
                  type="text"
                  value={variable.value}
                  onChange={(e) => {
                    const vs = [...variables]
                    vs[i].value = e.target.value
                    setVariables(vs)
                  }}
                />
              </div>
            ))}
          </VerticalItems>
        </>
      </VerticalItems>

      <ButtonArea>
        <Button
          value="New Code"
          variant="primary"
          enabled={true}
          onclick={() => {
            console.log(user)
            router.push('/')
          }}
        />
      </ButtonArea>
    </Div>
  )
}
