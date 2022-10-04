import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { CodeComponent, CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from 'client/styles/components/atoms/MarkdownText.module.scss'

type Props = {
  text: string
}

export const MarkdownText: FC<Props> = (props) => {
  return (
    <div className={'markdown-text'}>
      <div className={styles.component}>
        <ReactMarkdown components={{ code: Code }}>{props.text}</ReactMarkdown>
      </div>
    </div>
  )
}

export const Code: CodeComponent = ({ className, children }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || '')
  const lang = match && match[1] ? match[1] : ''

  return (
    <>
      <style>{'.markdown-text pre { border-radius: var(--radius-flame); }'}</style>
      <SyntaxHighlighter style={tomorrow} language={lang}>
        {String(children).trim()}
      </SyntaxHighlighter>
    </>
  )
}
