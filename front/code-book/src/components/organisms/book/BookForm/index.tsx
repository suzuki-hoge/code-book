import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
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

  const [emoji, setEmoji] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Div>
      <VerticalItems>
        <div>
          <Label>絵文字</Label>
          <Emoji type="text" value={emoji} onChange={(e) => setEmoji(e.target.value)} />
        </div>

        <div>
          <Label>タイトル</Label>
          <Title type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <Label>説明</Label>
          <Description rows={8} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
      </VerticalItems>

      <ButtonArea>
        <Button
          value="New Book"
          variant="primary"
          enabled={true}
          onclick={() => {
            axios
              .post('/api/books/create', {
                authorId: user.id,
                emoji: emoji,
                title: title,
                description: description,
              })
              .then((response) => {
                router.push(`/books/${response.data.bookId}`)
              })
          }}
        />
      </ButtonArea>
    </Div>
  )
}
