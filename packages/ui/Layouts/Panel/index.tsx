import { PropsWithChildren } from 'react'

export const PanelLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen sm:items-center sm:justify-center">
      {children}
    </main>
  )
}
