import React, { useState } from 'react'
import styled from 'styled-components'
import { FileCodeForm } from '../FileCodeForm'
import { SnippetCodeForm } from '../SnippetCodeForm'
import { UrlCodeForm } from '../UrlCodeForm'
import { device } from 'components/device'

type Props = {
  bookId: string
}

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;

  @media ${device.sp} {
    width: 82%;
  }

  @media ${device.pc} {
    width: 26em;
  }
`

const Button = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#fff' : '#ddd')};
  text-align: center;
  border-radius: 8px;
  border: #aaa 1px solid;
  box-shadow: 2px 2px 2px #ddd;
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: translateY(1px);
  }

  @media ${device.sp} {
    font-weight: 600;
    width: 4em;
    padding: 0.5em 0.5em;
  }

  @media ${device.pc} {
    font-size: 1.2em;
    font-weight: 600;
    width: 4.5em;
    padding: 0.5em 1em;
  }
`

const codeForm = (active: 'file' | 'url' | 'snippet', bookId: string) => {
  switch (active) {
    case 'file':
      return <FileCodeForm bookId={bookId} />
    case 'url':
      return <UrlCodeForm bookId={bookId} />
    case 'snippet':
      return <SnippetCodeForm bookId={bookId} />
  }
}

export const CodeForm = ({ bookId }: Props) => {
  const [active, setActive] = useState<'file' | 'url' | 'snippet'>('file')

  return (
    <>
      <ButtonArea>
        <Button active={active == 'file'} onClick={() => setActive('file')}>
          File
        </Button>
        <Button active={active == 'url'} onClick={() => setActive('url')}>
          Url
        </Button>
        <Button active={active == 'snippet'} onClick={() => setActive('snippet')}>
          Snippet
        </Button>
      </ButtonArea>
      {codeForm(active, bookId)}
    </>
  )
}
