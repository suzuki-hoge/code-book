import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'
import { UserContext } from '../../../../pages/_app'
import { SubmitButton } from '../../../atoms/SubmitButton'
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

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: #f99;
`

type Form = {
  body: string
}

const schema = yup.object().shape({
  body: yup.string().required('必須項目です'),
})

export const CommentForm = ({ codeId }: Props) => {
  const user = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ resolver: yupResolver(schema) })

  return (
    <form
      onSubmit={handleSubmit((data) =>
        axios
          .post('/api/comments/create', { ...data, ...{ authorId: user.id, codeId: codeId } })
          .then(() => (location.href = `/codes/${codeId}`)),
      )}
    >
      <Div>
        <VerticalItems>
          <div>
            <Label>本文</Label>
            <Body rows={8} {...register('body')} maxLength={4000} />
            <ErrorMessage>{errors.body?.message}</ErrorMessage>
          </div>
        </VerticalItems>

        <ButtonArea>
          <SubmitButton value="New Comment" enabled={true} />
        </ButtonArea>
      </Div>
    </form>
  )
}
