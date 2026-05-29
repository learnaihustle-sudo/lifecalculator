import './globals.css'

export const metadata = { title: 'The Life Calculator', description: 'Useful and weird calculators for life.' }

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <a className="brand" href="/">The Life Calculator</a>
          <div className="links">
            <a href="/calculators">Calculators</a>
            <a href="/categories">Categories</a>
            <a href="/blog">Blog</a>
          </div>
        </nav>
        {props.children}
        <footer className="footer">
          <div className="wrap">The Life Calculator 2026</div>
        </footer>
      </body>
    </html>
  )
}
