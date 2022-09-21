import { useRouter } from 'next/router'
import { useContext } from 'react'
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

const Description = styled.textarea`
  width: 80%;
  padding: 4px;
`

const ButtonArea = styled.div`
  margin-top: 1em;
  position: relative;
`

export const CommentForm = ({ codeId }: Props) => {
  const router = useRouter()

  const user = useContext(UserContext)

  return (
    <Div>
      <VerticalItems>
        <div>
          <Label>本文</Label>
          <Description name="description" rows={8} />
        </div>
      </VerticalItems>

      <ButtonArea>
        <Button
          value="Add Comment"
          variant="primary"
          enabled={true}
          onclick={() => {
            console.log(user, codeId)
            router.push('/')
          }}
        />
      </ButtonArea>
    </Div>
  )
}
