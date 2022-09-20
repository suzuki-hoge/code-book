import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '../../../../themes'
import { Code } from '../../../../types/code'
import { DateText } from '../../../atoms/DateText'
import { Icon } from '../../../atoms/Icon'
import { HeaderItem } from '../../../molecules/HeaderItem'
import { HorizonItems } from '../../../molecules/HorizonItems'
import { IconText } from '../../../molecules/IconText'

type Props = {
  code: Code

  link: boolean
  variant: 'small' | 'medium'
}

const sizes = {
  small: theme.fontSizes.fs3,
  medium: theme.fontSizes.fs5,
}

const Title = styled.div<{ variant: 'small' | 'medium' }>`
  font-size: ${(props) => sizes[props.variant]};
  font-weight: bold;
`

export const CodeHeader = ({ code, link, variant }: Props) => {
  return (
    <>
      <HeaderItem>
        <IconText icon={code.author.icon} text={code.author.name} variant={'small'} />
        <DateText date={code.created} variant={'small'} />
      </HeaderItem>

      <div>
        {link ? (
          <Link href={`/codes/${code.id}`}>
            <a>
              <Title variant={variant}>{code.title}</Title>
            </a>
          </Link>
        ) : (
          <Title variant={variant}>{code.title}</Title>
        )}

        <HorizonItems>
          {code.tags.map((tag) => (
            <Icon key={tag.id} icon={tag.icon} variant={variant} />
          ))}
        </HorizonItems>
      </div>
    </>
  )
}
