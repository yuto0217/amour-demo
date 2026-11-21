import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
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

/** ヘッダー（宿名・タブ・空室を見る・電話）。スマホではタブを「メニュー」にしまう */
export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const [lastPath, setLastPath] = useState(pathname)

  // ページが変わったらメニューを閉じる
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
        <Logo />

        <nav aria-label="メインメニュー" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex min-h-[48px] items-center rounded-md px-2.5 font-medium whitespace-nowrap no-underline hover:bg-mori-light ${
                      isActive ? 'text-mori-dark underline decoration-kaki decoration-2 underline-offset-8' : 'text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link
            to={site.bookingHref}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-mori px-3 py-1 font-bold whitespace-nowrap text-paper no-underline hover:bg-mori-dark"
          >
            <Icon name="calendar" className="size-5" />
            <span className="text-sm">空室を見る</span>
          </Link>
          {site.phone && (
            <a
              href={site.phoneHref}
              aria-label={`電話で予約 ${site.phone}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-kaki px-3 py-1 font-bold whitespace-nowrap text-paper no-underline hover:bg-kaki-dark"
            >
              <Icon name="phone" className="size-5" />
              <span className="tracking-wider">{site.phone}</span>
            </a>
          )}
        </div>

        <button
          type="button"
          className="inline-flex min-h-[48px] min-w-[48px] shrink-0 items-center justify-center gap-1 rounded-lg border-2 border-mori px-3 font-bold whitespace-nowrap text-mori-dark xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="size-6" />
          <span className="text-sm">{open ? '閉じる' : 'メニュー'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="メインメニュー" className="border-t border-line bg-paper xl:hidden">
          <ul className="mx-auto max-w-5xl px-5 py-3 sm:px-8">
            <li>
              <NavLink to="/" end className={mobileLinkClass}>
                トップページ
              </NavLink>
            </li>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={mobileLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

function mobileLinkClass({ isActive }: { isActive: boolean }) {
  return `flex min-h-[56px] items-center border-b border-line px-2 text-lg font-bold no-underline ${
    isActive ? 'bg-mori-light text-mori-dark' : 'text-ink'
  }`
}
