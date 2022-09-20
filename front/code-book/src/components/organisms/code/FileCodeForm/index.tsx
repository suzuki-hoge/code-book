import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import { User } from '../../../../types/user'
import { Button } from '../../../atoms/Button'
import { HorizonItems } from '../../../molecules/HorizonItems'
import { VerticalItems } from '../../../molecules/VerticalItems'

type Props = {
  user: User
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

export const FileCodeForm = ({ user }: Props) => {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [files, setFiles] = useState<{ name: string; text: string }[]>([{ name: '', text: '' }])

  return (
    <Div>
      <VerticalItems>
        <>
          <div>
            <Label>タイトル</Label>
            <Text type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          {files.map((file, i) => (
            <VerticalItems key={i}>
              <div>
                <Label>ファイル名</Label>
                <Text
                  type="text"
                  value={file.name}
                  onChange={(e) => {
                    const fs = [...files]
                    fs[i].name = e.target.value
                    setFiles(fs)
                  }}
                />
              </div>

              <div>
                <Label>コード</Label>
                <FileText
                  rows={8}
                  value={file.text}
                  onChange={(e) => {
                    const fs = [...files]
                    fs[i].text = e.target.value
                    setFiles(fs)
                  }}
                />
                <div style={{ marginTop: '1em' }}>
                  <HorizonItems>
                    <Button
                      value="-"
                      variant="sub"
                      enabled={files.length != 1}
                      onclick={() => {
                        const fs = [...files]
                        fs.splice(i, 1)
                        setFiles(fs)
                      }}
                    />
                    <Button
                      value="+"
                      variant="sub"
                      enabled={true}
                      onclick={() => {
                        const fs = [...files]
                        fs.push({ name: '', text: '' })
                        setFiles(fs)
                      }}
                    />
                  </HorizonItems>
                </div>
              </div>
            </VerticalItems>
          ))}
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
