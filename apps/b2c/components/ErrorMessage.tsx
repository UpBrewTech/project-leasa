import { Typography } from 'ui/components/Typography'

interface Props {
  message?: string
}

const ErrorMessage = ({ message }: Props) => {
  if (!message) return null

  return (
    <Typography variant="label-small" className="mt-1 block text-red-600">
      {message}
    </Typography>
  )
}

export default ErrorMessage
