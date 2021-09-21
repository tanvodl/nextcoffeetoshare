import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Chia sẻ kiến thức Digital Marketing và Kiếm tiền online</span>
              <span>COFFEE TO SHARE</span>
            </h1>            
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Coffee To Share</p>
      </footer>
    </div>
  )
}