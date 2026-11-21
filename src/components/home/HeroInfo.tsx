import { site } from '../../content/site'
import { ButtonLink } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Section, SectionHeading } from '../ui/Section'

/** ヒーローの下に続く、宿の魅力・アクセス・予約ボタン（営業用の見本の中心） */
export function HeroInfo() {
  return (
    <>
      {site.points.length > 0 && (
        <Section tone="paper" labelledBy="home-points">
          <h2 id="home-points" className="sr-only">
            宿の魅力
          </h2>
          <ol className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            {site.points.map((point, i) => (
              <li key={point} className="border-t-4 border-kaki pt-5">
                <p className="text-4xl font-bold text-kaki" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 text-2xl leading-snug font-bold text-mori-dark sm:text-[1.75rem]">{point}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {site.access && (
        <Section labelledBy="home-access" className={site.points.length > 0 ? 'pt-0 sm:pt-0' : ''}>
          <SectionHeading id="home-access" title="アクセス" />
          <p className="flex items-start gap-3 text-lg leading-relaxed">
            <Icon name="train" className="mt-1 size-6 shrink-0 text-mori" />
            <span>{site.access}</span>
          </p>
        </Section>
      )}

      <Section tone="wood" labelledBy="home-booking">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="home-booking" className="text-[1.5rem] font-bold text-mori-dark sm:text-3xl">
            ご予約
          </h2>
          <div className="mx-auto mt-6 grid w-full max-w-md gap-3">
            {site.phone && (
              <ButtonLink to={site.phoneHref} icon="phone" className="w-full text-lg">
                電話で予約 <span className="ml-1 tracking-wider whitespace-nowrap">{site.phone}</span>
              </ButtonLink>
            )}
            <ButtonLink to={site.bookingHref} icon="calendar" variant="secondary" className="w-full text-lg">
              空室を見る
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
