import './globals.css'

export const metadata = {
  title: 'Aniket Sutrawe | Portfolio',
  description: 'Developed and Designed By Aniket Sutrawe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
