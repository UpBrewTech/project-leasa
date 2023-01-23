import Link from 'next/link'
import { Button } from 'ui/components/Button'
import { Typography } from 'ui/components/Typography'
import { PanelLayout } from 'ui/Layouts/Panel'
import { AppPage } from './_app'

const B2B: AppPage = () => {
  return (
    <div className="w-full bg-white p-8 shadow-sm sm:w-96">
      <div className="mb-6 text-center">
        <Typography as="h1" variant="title-page">
          Leasa Portal
        </Typography>
      </div>

      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>
    </div>
  )
}

B2B.getLayout = PanelLayout
export default B2B
