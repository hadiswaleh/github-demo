import Image from 'next/image';
import Link from 'next/link';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand">Z2C Replica</div>
          <nav>
            <ul className="nav-list">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="kicker">Next.js WordPress Replica</p>
              <h1>Responsive multi-page foundation is now in place</h1>
              <p className="lead">
                Placeholder images are now used so we can continue building structure
                and responsiveness even when real assets cannot be extracted.
              </p>
              <div className="cta-row">
                <Link href="/services" className="button primary">View Services Page</Link>
                <Link href="/about" className="button">About This Build</Link>
              </div>
            </div>
            <Image
              src="/placeholder-hero.svg"
              alt="Placeholder hero visual"
              width={1600}
              height={900}
              className="hero-image"
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}
