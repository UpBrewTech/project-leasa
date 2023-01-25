import { gql, useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import ErrorMessage from 'components/ErrorMessage'
import Input from 'components/Input'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'ui/components/Button'
import { Typography } from 'ui/components/Typography'
import * as yup from 'yup'

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
  const [isSuccess, setSuccess] = useState(false)
  const [registerUser, { loading }] = useMutation(REGISTER_USER)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(FormSchema),
  })

  const onSubmit = handleSubmit((data: FormInputs) => {
    const { name, email, password } = data

    registerUser({
      variables: {
        objects: [
          {
            name,
            email,
            user_credential: { data: { identifier: email, password } },
          },
        ],
      },
      onCompleted: () => {
        setSuccess(true)
      },
    })
  })

  if (isSuccess) {
    return (
      <div className="text-center">
        <Typography as="h2" variant="title-section" className="mb-xs">
          Success!
        </Typography>
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <Input
          type="text"
          id="name"
          name="name"
          register={register}
          placeholder="Name"
        />
        <ErrorMessage message={errors.name?.message} />
      </div>
      <div>
        <Input
          type="email"
          id="email"
          name="email"
          register={register}
          placeholder="Email"
        />
        <ErrorMessage message={errors.email?.message} />
      </div>
      <div>
        <Input
          type="password"
          id="password"
          name="password"
          register={register}
          placeholder="Password"
        />
        <ErrorMessage message={errors.password?.message} />
      </div>
      <div>
        <Input
          type="password"
          id="confirm_password"
          name="confirm_password"
          register={register}
          placeholder="Confirm Password"
        />
        <ErrorMessage message={errors.confirm_password?.message} />
      </div>

      <Button wide type="submit" loading={loading}>
        Register
      </Button>
      <Link href="/auth/login">
        <Button wide variant="text">
          Back to Login
        </Button>
      </Link>
    </form>
  )
}

export default RegistrationForm

const REGISTER_USER = gql`
  mutation RegisterUser($objects: [users_insert_input!] = {}) {
    insert_users(objects: $objects) {
      affected_rows
    }
  }
`
