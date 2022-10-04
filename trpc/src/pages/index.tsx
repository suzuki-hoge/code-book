import { NextPage } from 'next'
import { clientTrpc } from 'client/client_trpc'
import { ImageIcon } from 'client/components/atoms/ImageIcon'
import {ThemeList} from "../client/components/templates/theme/ThemeList";

const Home: NextPage = () => {
  // const trpc = clientTrpc.useContext()

  const _ts = clientTrpc.theme.all.useQuery(undefined, {
    staleTime: 3000,
  })
  const ts = _ts.data ?? []

  return (
    <div>
      {ts.map((t) => (
        <p key={t.id}>
          {t.id}: {t.name}
        </p>
      ))}
      <ImageIcon path={'https://i.pinimg.com/564x/45/e8/1f/45e81f80885bf0fce1d438615c7f33bc.jpg'} variant={'small'} />
    </div>
  )
}

export default Home
