import { site } from '../../content/site'
import { Icon } from '../ui/Icon'

/** スマホ・タブレットで画面下部に固定表示する電話ボタン（電話番号が未確認の間は出さない） */
export function MobileCtaBar() {
  if (!site.phone) return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur xl:hidden">
      <a
        href={site.phoneHref}
        className="mx-auto flex min-h-[56px] max-w-xl flex-col items-center justify-center rounded-lg bg-kaki px-2 py-1.5 font-bold text-paper no-underline"
      >
        <span className="flex items-center gap-2 text-xl leading-tight tracking-wider">
          <Icon name="phone" className="size-6 shrink-0" />
          <span className="text-base tracking-normal">ご予約</span>
          <span>{site.phone}</span>
        </span>
      </a>
    </div>
  )
}
