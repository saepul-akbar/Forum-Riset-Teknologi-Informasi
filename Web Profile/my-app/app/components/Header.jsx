import Link from "next/link"

function Header() {
  return (
    <header className="header">
        <nav>
            <div className="logo"><Link href="/">Logo</Link></div>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
          </div>
        </nav>
    </header>
  )
}

export default Header