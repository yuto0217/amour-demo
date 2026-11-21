import { Link } from 'react-router'
import { site } from '../../content/site'
import { Icon } from '../ui/Icon'

/**
 * スマホ・タブレットで画面下部に固定表示する予約のボタン
 * 「空室を見る」と電話を並べる。電話番号が未確認の間は「空室を見る」だけ
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur xl:hidden">
      <div className="mx-auto flex max-w-xl gap-2">
        <Link
          to={site.bookingHref}
          className="flex min-h-[64px] flex-1 items-center justify-center gap-2 rounded-lg bg-mori px-2 py-1.5 font-bold text-paper no-underline"
        >
          <Icon name="calendar" className="size-6 shrink-0" />
          <span className="text-base leading-tight">空室を見る</span>
        </Link>
        {site.phone && (
          <a
            href={site.phoneHref}
            className="flex min-h-[64px] flex-1 flex-col items-center justify-center rounded-lg bg-kaki px-2 py-1.5 font-bold text-paper no-underline"
          >
            <span className="flex items-center gap-1.5 text-base leading-tight">
              <Icon name="phone" className="size-5 shrink-0" />
              電話で予約
            </span>
            <span className="text-sm leading-tight tracking-wider">{site.phone}</span>
          </a>
        )}
      </div>
    </div>
  )
}
