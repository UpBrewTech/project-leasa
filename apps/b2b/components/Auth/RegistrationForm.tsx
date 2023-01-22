import { gql, useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import ErrorMessage from 'components/ErrorMessage'
import Input from 'components/Input'
import { User } from 'next-auth'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { Button, Typography } from 'ui'

import useToggle from 'utils/useToggle'
import * as yup from 'yup'

type OnSubmitResult = {
  user: User
}

const FormSchema = yup.object({
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password'),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], "Password doesn't match")
    .label('Confirm Password'),
})

type FormInputs = yup.InferType<typeof FormSchema>

const RegistrationForm = () => {
  const { state: isSubmitted, toggle: toggleSubmitted } = useToggle()
  const [registerUser, { loading }] = useMutation(REGISTER_USER)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: yupResolver(FormSchema),
  })

  const onSubmit = handleSubmit((data: FormInputs) => {
    registerUser({
      variables: data,
      onCompleted: (data: OnSubmitResult) => {
        signIn('email', {
          email: data.user.email,
          redirect: false,
          callbackUrl: '/auth',
        })
        toggleSubmitted()
      },
    })
  })

  if (isSubmitted) {
    return (
      <div className="text-center">
        <Typography as="h2" variant="label-large">
          Success!
        </Typography>
        <Button>Login</Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 text-sm">
      <Input
        type="text"
        id="name"
        placeholder="Full Name"
        {...register('name')}
      />
      <ErrorMessage message={errors.name?.message} />
      <Input
        type="email"
        id="email"
        placeholder="Email"
        {...register('email')}
      />
      <Input
        type="password"
        id="password"
        placeholder="Password"
        {...register('password')}
      />
      <ErrorMessage message={errors.password?.message} />
      <Input
        type="password"
        id="confirm_password"
        placeholder="Confirm Password"
        {...register('confirm_password')}
      />
      <ErrorMessage message={errors.confirm_password?.message} />

      <Button wide type="submit" loading={loading || isSubmitting}>
        Register
      </Button>
      <Button wide>Back to Login</Button>
    </form>
  )
}

export default RegistrationForm

const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $name: String!
    $phone: String!
    $username: String!
    $password: String!
  ) {
    user: insert_users_one(
      object: {
        name: $name
        email: $email
        phone: $phone
        user_credential: { data: { username: $username, password: $password } }
      }
    ) {
      id
      email
    }
  }
`
