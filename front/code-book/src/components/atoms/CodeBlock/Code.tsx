import React from 'react'
import { CodeComponent, CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styled from 'styled-components'

const CodeBlockWrapper = styled.div`
  position: relative;
`

const CodeBlockTitle = styled.div`
  display: inline-block;
  position: absolute;
  top: -1.8em;
  left: 0;
  background-color: #2d2d2d;
  padding: 0.2em 1em;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const Code: CodeComponent = ({ className, children }: CodeProps) => {
  const match = /language-(\w+)(:.+)/.exec(className || '')
  const lang = match && match[1] ? match[1] : ''
  const name = match && match[2] ? match[2].slice(1) : ''

  return (
    <CodeBlockWrapper>
      <CodeBlockTitle>{name}</CodeBlockTitle>
      <SyntaxHighlighter style={tomorrow} language={lang}>
        {String(children).trim()}
      </SyntaxHighlighter>
    </CodeBlockWrapper>
  )
}
