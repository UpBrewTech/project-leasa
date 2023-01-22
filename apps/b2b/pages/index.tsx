import { PanelLayout, Typography } from 'ui'
import { AppPage } from './_app'

const B2B: AppPage = () => {
  return (
    <Typography as="h1" variant="title-page">
      Leasa Portal
    </Typography>
  )
}

B2B.getLayout = PanelLayout
export default B2B
