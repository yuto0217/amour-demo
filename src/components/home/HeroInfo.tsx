import { site } from '../../content/site'
import { ButtonLink } from '../ui/Button'
import { Icon } from '../ui/Icon'

/** ヒーローの下に続く、宿の魅力・アクセス・予約ボタン（営業用の見本の中心） */
export function HeroInfo() {
  return (
    <section aria-label="宿の魅力とご予約" className="bg-cream">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-6 sm:px-8 sm:py-12 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-12">
        <div className="grid gap-6">
          {site.points.length > 0 && (
            <ul className="grid gap-3">
              {site.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-lg leading-relaxed font-bold text-mori-dark sm:text-2xl">
                  <Icon name="star" className="mt-1 size-6 shrink-0 text-kaki sm:mt-1.5" />
                  {point}
                </li>
              ))}
            </ul>
          )}
          {site.access && (
            <p className="flex items-start gap-3 text-lg leading-relaxed">
              <Icon name="train" className="mt-1 size-6 shrink-0 text-mori" />
              <span>
                <span className="mr-2 font-bold text-wood-dark">アクセス</span>
                {site.access}
              </span>
            </p>
          )}
        </div>

        <div className="grid gap-3">
          {site.phone && (
            <ButtonLink to={site.phoneHref} icon="phone" className="w-full text-lg">
              電話で予約 <span className="ml-1 tracking-wider whitespace-nowrap">{site.phone}</span>
            </ButtonLink>
          )}
          <ButtonLink to={site.bookingHref} icon="calendar" variant="outline" className="w-full text-lg">
            空室を見る
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
