import { gql, useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import ErrorMessage from 'components/ErrorMessage'
import Input from 'components/Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button, Typography } from 'ui'
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
  const [registerUser, { loading }] = useMutation(REGISTER_USER)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
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
    })
  })

  if (!errors && isSubmitted) {
    return (
      <div className="text-center">
        <div className="mb-4">
          <Typography as="h2" variant="title-section">
            Success!
          </Typography>
        </div>
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <Input type="text" id="name" placeholder="Name" {...register('name')} />
        <ErrorMessage message={errors.name?.message} />
      </div>
      <div>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          {...register('email')}
        />
        <ErrorMessage message={errors.email?.message} />
      </div>
      <div>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          {...register('password')}
        />
        <ErrorMessage message={errors.password?.message} />
      </div>
      <div>
        <Input
          type="password"
          id="confirm_password"
          placeholder="Confirm Password"
          {...register('confirm_password')}
        />
        <ErrorMessage message={errors.confirm_password?.message} />
      </div>

      <Button wide type="submit" loading={loading || isSubmitting}>
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
  mutation RegisterUser(
    $objects: [users_insert_input!] = {
      email: ""
      name: ""
      user_credential: { data: { identifier: "", password: "" } }
    }
  ) {
    insert_users(objects: $objects) {
      affected_rows
    }
  }
`
