import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'
import { UserContext } from '../../../../pages/_app'
import { SubmitButton } from '../../../atoms/SubmitButton'
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

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: #f99;
`

type Form = {
  emoji: string
  title: string
  description: string
}

const schema = yup.object().shape({
  emoji: yup.string().required('必須項目です'),
  title: yup.string().required('必須項目です'),
  description: yup.string().required('必須項目です'),
})

export const BookForm = () => {
  const router = useRouter()

  const user = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ resolver: yupResolver(schema) })

  return (
    <form
      onSubmit={handleSubmit((data) =>
        axios.post('/api/books/create', { ...data, ...{ authorId: user.id } }).then((response) => {
          router.push(`/books/${response.data.bookId}`)
        }),
      )}
    >
      <Div>
        <VerticalItems>
          <div>
            <Label>絵文字</Label>
            <Emoji type="text" {...register('emoji')} maxLength={4} />
            <ErrorMessage>{errors.emoji?.message}</ErrorMessage>
          </div>

          <div>
            <Label>タイトル</Label>
            <Title type="text" {...register('title')} maxLength={250} />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </div>

          <div>
            <Label>説明</Label>
            <Description rows={8} {...register('description')} maxLength={4000} />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </div>
        </VerticalItems>

        <ButtonArea>
          <SubmitButton value="New Book" enabled={true} />
        </ButtonArea>
      </Div>
    </form>
  )
}
