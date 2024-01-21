export const metadata = {
  title: 'Finance App',
  description: 'idk',
}
import '../styles/globals.css'
import Navbar from "./navbar"

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="bg-neutral-900">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
