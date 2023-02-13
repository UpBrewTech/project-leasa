type AppPage = NextPage & {
  getLayout?: React.FC<PropsWithChildren>
  allowedRoles?: Role[]
}
