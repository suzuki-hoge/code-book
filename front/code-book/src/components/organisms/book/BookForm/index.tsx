import { useRouter } from 'next/router'
import { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../../pages/_app'
import { Button } from '../../../atoms/Button'
import { VerticalItems } from '../../../molecules/VerticalItems'

const Div = styled.div`
  padding: 0.5em 0 1em 0;
`

const Label = styled.p`
  margin: 0 0 0.5em 0;
`

const Emoji = styled.input`
  width: 3em;
`

const Title = styled.input`
  width: 80%;
`

const Description = styled.textarea`
  width: 80%;
  padding: 4px;
`

const ButtonArea = styled.div`
  margin-top: 1em;
  position: relative;
`

export const BookForm = () => {
  const router = useRouter()

  const user = useContext(UserContext)

  return (
    <Div>
      <VerticalItems>
        <div>
          <Label>絵文字</Label>
          <Emoji type="text" name="emoji" />
        </div>

        <div>
          <Label>タイトル</Label>
          <Title type="text" name="title" />
        </div>

        <div>
          <Label>説明</Label>
          <Description name="description" rows={8} />
        </div>
      </VerticalItems>

      <ButtonArea>
        <Button
          value="New Book"
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
