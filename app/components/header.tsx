import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="SYIFA home">
          <span className="site-brand__crest">SYIFA&apos;</span>
          <span className="site-brand__subtitle">Portfolio</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <a
            href="/documents/asy syifa-resume.pdf"
            download="Asy Syifa_Resume.pdf"
            className="site-nav__link site-nav__link--accent"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}