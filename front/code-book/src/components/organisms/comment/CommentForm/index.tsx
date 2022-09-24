import axios from 'axios'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../../pages/_app'
import { Button } from '../../../atoms/Button'
import { VerticalItems } from '../../../molecules/VerticalItems'

type Props = {
  codeId: string
}

const Div = styled.div`
  padding: 0.5em 0 1em 0;
`

const Label = styled.p`
  margin: 0 0 0.5em 0;
`

const Body = styled.textarea`
  width: 80%;
  padding: 4px;
`

const ButtonArea = styled.div`
  margin-top: 1em;
  position: relative;
`

export const CommentForm = ({ codeId }: Props) => {
  const user = useContext(UserContext)

  const [body, setBody] = useState('')

  return (
    <Div>
      <VerticalItems>
        <div>
          <Label>本文</Label>
          <Body rows={8} value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
      </VerticalItems>

      <ButtonArea>
        <Button
          value="Add Comment"
          variant="primary"
          enabled={true}
          onclick={() => {
            axios
              .post('/api/comments/create', {
                codeId: codeId,
                authorId: user.id,
                body: body,
              })
              .then(() => {
                location.href = `/codes/${codeId}`
              })
          }}
        />
      </ButtonArea>
    </Div>
  )
}
