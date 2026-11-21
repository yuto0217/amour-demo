import { Link, NavLink } from 'react-router'
import { navItems, site } from '../../content/site'
import { Icon } from '../ui/Icon'

export function Logo({ tone = 'default' }: { tone?: 'default' | 'light' }) {
  const light = tone === 'light'
  return (
    <Link to="/" className="inline-flex min-h-[48px] flex-col justify-center no-underline">
      <span className={`text-xs font-bold whitespace-nowrap tracking-[0.2em] ${light ? 'text-kaki-light' : 'text-kaki'}`}>{site.area}</span>
      <span className={`mt-0.5 text-lg leading-tight font-bold whitespace-nowrap tracking-wider ${light ? 'text-paper' : 'text-mori-dark'}`}>{site.name}</span>
    </Link>
  )
}

function tabClass({ isActive }: { isActive: boolean }) {
  return `inline-flex min-h-[48px] flex-1 items-center justify-center rounded-md px-3 font-bold whitespace-nowrap no-underline hover:bg-mori-light sm:flex-none ${
    isActive ? 'text-mori-dark underline decoration-kaki decoration-2 underline-offset-8' : 'text-ink'
  }`
}

/** ヘッダー（宿名・タブ・ご予約の電話）。タブは3つだけなので、スマホでもメニューにしまわず並べる */
export function Header() {
  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 px-5 py-1 sm:flex-nowrap sm:px-8 sm:py-2">
        <Logo />

        <nav aria-label="メインメニュー" className="order-last w-full sm:order-none sm:ml-auto sm:w-auto">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to} className="flex flex-1 sm:flex-none">
                <NavLink to={item.to} className={tabClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {site.phone && (
          <a
            href={site.phoneHref}
            className="hidden min-h-[48px] flex-col items-center justify-center rounded-lg bg-kaki px-4 py-1 font-bold text-paper no-underline hover:bg-kaki-dark xl:inline-flex"
          >
            <span className="flex items-center gap-2 leading-tight">
              <Icon name="phone" className="size-5" />
              <span className="text-sm">ご予約</span>
              <span className="tracking-wider whitespace-nowrap">{site.phone}</span>
            </span>
          </a>
        )}
      </div>
    </header>
  )
}
