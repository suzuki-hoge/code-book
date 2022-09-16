import { theme } from '../../../themes'
import { UrlCode as Code } from '../../../types/code'
import { Icon } from '../../atoms/Icon'
import { Horizon } from '../../utils/Horizon'

type Props = {
  code: Code
}

export const UrlCode = ({ code }: Props) => {
  return (
    <>
      <p>
        <Horizon>
          {code.tags.map((t) => (
            <Icon key={t.id} src={t.icon} size={theme.iconSizes.is3} />
          ))}
          <a href={code.url} target="_blank" rel="noreferrer">
            {code.url}
          </a>
        </Horizon>
      </p>
    </>
  )
}
