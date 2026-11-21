import { site } from '../../content/site'
import { MapEmbed } from '../sections/MapEmbed'
import { Icon } from '../ui/Icon'
import { Container, Section, SectionHeading } from '../ui/Section'
import { PointsSlider } from './PointsSlider'

/**
 * ヒーローの下に続く、宿の魅力（魅力ごとに番号・見出し・説明と、横幅いっぱいに流れる写真）とアクセス（地図つき）
 * 予約のボタンはヘッダー（パソコン）と画面下（スマホ）に出している
 */
export function HeroInfo() {
  return (
    <>
      {site.points.length > 0 && (
        <section aria-labelledby="home-points" className="bg-paper py-14 sm:py-20">
          <Container>
            {site.pointsTitle ? (
              <SectionHeading id="home-points" title={site.pointsTitle} />
            ) : (
              <h2 id="home-points" className="sr-only">
                宿の魅力
              </h2>
            )}
          </Container>
          <ol className="grid gap-14 sm:gap-20">
            {site.points.map((point, i) => (
              <li key={point.text}>
                <Container>
                  <div>
                    <h3 className="flex items-baseline gap-3 text-2xl leading-snug font-bold text-mori-dark sm:gap-4 sm:text-[1.75rem]">
                      <span className="shrink-0 text-4xl text-kaki sm:text-5xl" aria-hidden="true">
                        {i + 1}
                      </span>
                      <span>{point.text}</span>
                    </h3>
                    {point.description && <p className="mt-4 max-w-3xl text-lg leading-loose">{point.description}</p>}
                  </div>
                </Container>
                <div className="mt-8">
                  <PointsSlider photos={point.photos} label={point.text} />
                </div>
              </li>
            ))}
          </ol>
        </section>
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
