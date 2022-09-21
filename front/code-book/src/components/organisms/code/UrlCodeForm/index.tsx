import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../../pages/_app'
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

const ButtonArea = styled.div`
  margin-top: 1em;
  position: relative;
`

export const UrlCodeForm = ({ bookId }: Props) => {
  const router = useRouter()

  const user = useContext(UserContext)

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  return (
    <Div>
      <VerticalItems>
        <>
          <div>
            <Label>タイトル</Label>
            <Text type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <Label>URL</Label>
            <Text type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>
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
