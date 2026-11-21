import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { languages, useLang, useUi } from "../../content/i18n";
import { hasEnglish, useSite } from "../../content/site";
import { BookingLink } from "../ui/BookingLink";
import { Icon } from "../ui/Icon";

export function Logo({ tone = "default" }: { tone?: "default" | "light" }) {
  const site = useSite();
  const light = tone === "light";
  return (
    <Link
      to="/"
      className="inline-flex min-h-[48px] flex-col justify-center no-underline"
    >
      <span
        className={`text-xs font-bold whitespace-nowrap ${site.lang === 'en' ? 'tracking-wider' : 'tracking-[0.2em]'} ${light ? "text-kaki-light" : "text-kaki"}`}
      >
        {site.area}
      </span>
      <span
        className={`mt-0.5 leading-tight font-bold whitespace-nowrap ${site.lang === 'en' ? 'text-base max-[359px]:text-sm sm:text-lg' : 'text-lg tracking-wider'} ${light ? "text-paper" : "text-mori-dark"}`}
      >
        {site.name}
      </span>
    </Link>
  );
}

/** ヘッダー（宿名・タブ・空室を見る・電話）。スマホではタブを「メニュー」にしまう */
export function Header() {
  const site = useSite();
  const ui = useUi();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [lastPath, setLastPath] = useState(pathname);

  // ページが変わったらメニューを閉じる
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2 max-[359px]:gap-2 max-[359px]:px-3 sm:px-8">
        <Logo />

        <nav aria-label={ui.mainMenu} className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {site.navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex min-h-[48px] items-center rounded-md px-2.5 font-medium whitespace-nowrap no-underline hover:bg-mori-light ${
                      isActive
                        ? "text-mori-dark underline decoration-kaki decoration-2 underline-offset-8"
                        : "text-ink"
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
          <LangSwitch />
          <BookingLink className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-mori px-3 py-1 font-bold whitespace-nowrap text-paper no-underline hover:bg-mori-dark">
            <Icon name="calendar" className="size-5" />
            <span className="text-sm">{site.bookingLabel}</span>
          </BookingLink>
          {site.showPhoneButton && (
            <a
              href={site.phoneHref}
              aria-label={`${ui.callToBook} ${site.phone}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-kaki px-3 py-1 font-bold whitespace-nowrap text-paper no-underline hover:bg-kaki-dark"
            >
              <Icon name="phone" className="size-5" />
              <span className="tracking-wider">{site.phone}</span>
            </a>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <LangSwitch compact />
          <button
            type="button"
            className="inline-flex min-h-[48px] min-w-[48px] shrink-0 items-center justify-center gap-1 rounded-lg border-2 border-mori px-3 font-bold whitespace-nowrap text-mori-dark "
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
            <span className="sr-only text-sm sm:not-sr-only">{open ? ui.close : ui.menu}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label={ui.mainMenu}
          className="border-t border-line bg-paper xl:hidden"
        >
          <ul className="mx-auto max-w-5xl px-5 py-3 sm:px-8">
            <li>
              <NavLink to="/" end className={mobileLinkClass}>
                {ui.home}
              </NavLink>
            </li>
            {site.navItems.map((item) => (
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
  );
}

function mobileLinkClass({ isActive }: { isActive: boolean }) {
  return `flex min-h-[56px] items-center border-b border-line px-2 text-lg font-bold no-underline ${
    isActive ? "bg-mori-light text-mori-dark" : "text-ink"
  }`;
}

/** 言語の切り替え（英語の表示があるときだけ）。押すと言語の一覧が開き、そこから選ぶ */
function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang()
  const ui = useUi()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        ref.current?.querySelector('button')?.focus()
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!hasEnglish) return null
  const current = languages.find((l) => l.code === lang) ?? languages[0]

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`Language: ${current.label}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-1 rounded-lg border-2 border-line px-2.5 font-bold whitespace-nowrap text-mori-dark hover:bg-mori-light"
      >
        <Icon name="globe" className="size-5 shrink-0" />
        <span className={`text-sm ${compact ? 'hidden min-[360px]:inline' : ''}`}>Language</span>
        <Icon name="chevron" className={`size-4 shrink-0 transition-transform ${compact ? 'hidden sm:block' : ''} ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul
          id={listId}
          aria-label={ui.language}
          className="absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-lg border border-line bg-paper py-1 shadow-lg"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                lang={l.code}
                aria-current={l.code === lang ? 'true' : undefined}
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={`flex min-h-[48px] w-full items-center gap-2 px-4 text-left font-bold hover:bg-mori-light ${
                  l.code === lang ? 'text-mori-dark' : 'text-ink'
                }`}
              >
                <Icon name="check" className={`size-5 shrink-0 ${l.code === lang ? 'text-kaki' : 'invisible'}`} />
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
