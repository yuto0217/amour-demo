import { Link } from 'react-router'
import { navItems, site } from '../../content/site'
import { Icon } from '../ui/Icon'
import { Logo } from './Header'

export function Footer() {
  return (
    <footer className="surface-dark bg-mori-dark text-cream">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2">
        <div>
          <Logo tone="light" />
          {site.phone && (
          <a
            href={site.phoneHref}
            className="mt-5 flex min-h-[48px] w-fit items-center gap-2 text-2xl font-bold tracking-wider text-paper no-underline"
          >
            <Icon name="phone" className="size-6" />
            <span className="text-base tracking-normal">ご予約</span>
            {site.phone}
          </a>
          )}
        </div>

        <nav aria-label="フッターメニュー">
          <ul className="grid gap-x-6 sm:grid-cols-2">
            <li>
              <Link to="/" className="inline-flex min-h-[48px] items-center text-cream underline-offset-4 hover:underline">
                トップページ
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-[48px] items-center text-cream underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15 px-5 py-5 text-center text-sm text-kaki-light">
        <p>このサイトはホームページのご提案用の見本です。</p>
        <p className="mt-2">{site.copyright}</p>
      </div>
    </footer>
  )
}
