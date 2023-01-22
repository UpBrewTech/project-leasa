interface Props {
  message?: string
}

const ErrorMessage = ({ message }: Props) => {
  if (!message) return null

  return <span className="mt-1 block text-xs text-red-600">{message}</span>
}

export default ErrorMessage
