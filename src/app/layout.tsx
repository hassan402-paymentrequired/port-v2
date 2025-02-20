import { type Metadata } from 'next'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Hassan Lateef',
    default:
      'Hassan Lateef - Software developer, founder',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-gray-100 dark:bg-black">

          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>

      </body>
    </html>
  )
}
