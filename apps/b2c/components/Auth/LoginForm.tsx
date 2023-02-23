import { yupResolver } from '@hookform/resolvers/yup'
import ErrorMessage from 'components/ErrorMessage'
import Input from 'components/Input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button } from 'ui/components/Button'
import * as yup from 'yup'

const FormSchema = yup.object({
  identifier: yup.string().required().label('Email'),
  password: yup.string().required().label('Password'),
})

type FormInputs = yup.InferType<typeof FormSchema>

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(FormSchema),
  })

  const onSubmit = handleSubmit((data: FormInputs) => {
    signIn('credentials', { ...data, callbackUrl: '/auth' })
  })

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <Input type="email" placeholder="Email" {...register('identifier')} />
        <ErrorMessage message={errors.identifier?.message} />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <ErrorMessage message={errors.password?.message} />
      </div>

      <Button wide type="submit">
        Login
      </Button>
      <Link href="/auth/register">
        <Button wide variant="text">
          Register
        </Button>
      </Link>
    </form>
  )
}

export default LoginForm
