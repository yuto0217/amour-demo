import { site } from '../../content/site'
import { MapEmbed } from '../sections/MapEmbed'
import { Icon } from '../ui/Icon'
import { Photo } from '../ui/Photo'
import { Section, SectionHeading } from '../ui/Section'

/**
 * ヒーローの下に続く、宿の魅力（写真の枠と説明つき）とアクセス（地図つき）
 * 予約のボタンはヘッダー（パソコン）と画面下（スマホ）に出している
 */
export function HeroInfo() {
  return (
    <>
      {site.points.length > 0 && (
        <Section tone="paper" labelledBy="home-points">
          {site.pointsTitle ? (
            <SectionHeading id="home-points" title={site.pointsTitle} />
          ) : (
            <h2 id="home-points" className="sr-only">
              宿の魅力
            </h2>
          )}
          <ol className="grid gap-12 sm:gap-16">
            {site.points.map((point, i) => (
              <li
                key={point.text}
                className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-12 ${i % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <Photo image={point.photo} />
                </div>
                <div>
                  <p className="text-4xl font-bold text-kaki" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-2xl leading-snug font-bold text-mori-dark sm:text-[1.75rem]">{point.text}</h3>
                  {point.description && <p className="mt-4 text-lg leading-loose">{point.description}</p>}
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {(site.access || site.address) && (
        <Section labelledBy="home-access" className={site.points.length > 0 ? 'pt-0 sm:pt-0' : ''}>
          <SectionHeading id="home-access" title="アクセス" />
          <div className="grid gap-6">
            {site.access && (
              <p className="flex items-start gap-3 text-lg leading-relaxed">
                <Icon name="train" className="mt-1 size-6 shrink-0 text-mori" />
                <span>{site.access}</span>
              </p>
            )}
            <MapEmbed />
          </div>
        </Section>
      )}
    </>
  )
}
