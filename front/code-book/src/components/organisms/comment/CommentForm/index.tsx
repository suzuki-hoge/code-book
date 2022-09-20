import { useRouter } from 'next/router'
import styled from 'styled-components'
import { User } from '../../../../types/user'
import { Button } from '../../../atoms/Button'
import { VerticalItems } from '../../../molecules/VerticalItems'

type Props = {
  user: User
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

export const CommentForm = ({ user, codeId }: Props) => {
  const router = useRouter()

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
