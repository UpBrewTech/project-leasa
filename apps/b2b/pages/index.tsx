import Link from 'next/link'
import { Button } from 'ui/components/Button'
import { Typography } from 'ui/components/Typography'
import { PanelLayout } from 'ui/Layouts/Panel'
import { AppPage } from './_app'

const B2B: AppPage = () => {
  return (
    <div className="p-md w-full bg-white text-center shadow-sm sm:w-96">
      <Typography as="h1" variant="title-page" className="mb-xs">
        Leasa Portal
      </Typography>

      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>
    </div>
  )
}

B2B.getLayout = PanelLayout
export default B2B
