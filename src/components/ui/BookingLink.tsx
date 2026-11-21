import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { site } from '../../content/site'

/** 「空室を見る」のリンク。行き先が予約サイトなど外のサイトなら <a>、見本の注記のページなら <Link> */
export function BookingLink({ className, children }: { className: string; children: ReactNode }) {
  if (site.bookingIsExternal) {
    return (
      <a href={site.bookingHref} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={site.bookingHref} className={className}>
      {children}
    </Link>
  )
}
