import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'
import { UserContext } from '../../../../pages/_app'
import { SubmitButton } from '../../../atoms/SubmitButton'
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

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: #f99;
`

type Form = {
  title: string
  url: string
  tags: string
}

const schema = yup.object().shape({
  title: yup.string().required('必須項目です'),
  url: yup.string().required('必須項目です'),
  tags: yup.string().required('必須項目です').matches(/^[a-z]+(,[a-z]+)*$/, {message: '入力内容が正しくありません'}),
})

export const UrlCodeForm = ({ bookId }: Props) => {
  const router = useRouter()

  const user = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ resolver: yupResolver(schema) })

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const _data = {
          ...data,
          ...{
            authorId: user.id,
            bookId: bookId,
            kind: 'url',
            vals: [data.url],
            tags: data.tags.split(',').map((s) => s.trim()),
          },
        }

        axios.post('/api/codes/create', _data).then((response) => {
          router.push(`/codes/${response.data.codeId}`)
        })
      })}
    >
      <Div>
        <VerticalItems>
          <>
            <div>
              <Label>タイトル</Label>
              <Text type="text" {...register('title')} maxLength={250} />
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </div>

            <div>
              <Label>URL</Label>
              <Text type="text" {...register('url')} maxLength={4000} />
              <ErrorMessage>{errors.url?.message}</ErrorMessage>
            </div>

            <div>
              <Label>タグ</Label>
              <Text type="text" {...register('tags')} maxLength={200} />
              <p style={{ margin: '0', color: '#666', fontSize: '0.8em', width: '80%' }}>
                関係ファイルの拡張子を . なしで入力してください ( , 区切りで 5 つまで )
              </p>
              <ErrorMessage>{errors.tags?.message}</ErrorMessage>
            </div>
          </>
        </VerticalItems>

        <ButtonArea>
          <SubmitButton value="New Code" enabled={true} />
        </ButtonArea>
      </Div>
    </form>
  )
}
