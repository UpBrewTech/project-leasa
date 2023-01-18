import { PropsWithChildren } from 'react'

export const PanelLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex min-h-screen sm:items-center sm:justify-center">
      {children}
    </main>
  )
}
