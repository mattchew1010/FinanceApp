import '../styles/globals.css'
import Navbar from "./navbar"

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="bg-background-primary">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
