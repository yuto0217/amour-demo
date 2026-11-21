import { site } from '../../content/site'
import { MapEmbed } from '../sections/MapEmbed'
import { Icon } from '../ui/Icon'
import { Container, Section, SectionHeading } from '../ui/Section'
import { PointsSlider } from './PointsSlider'

/**
 * ヒーローの下に続く、宿の魅力（横幅いっぱいに流れる写真と、番号つきの説明）とアクセス（地図つき）
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
          <PointsSlider />
          <Container>
            <ol className={`mt-10 grid gap-10 sm:mt-14 ${site.points.length > 1 ? 'lg:grid-cols-2' : ''} lg:gap-12`}>
              {site.points.map((point, i) => (
                <li key={point.text} className="border-t-4 border-kaki pt-5">
                  <p className="text-4xl font-bold text-kaki" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-2xl leading-snug font-bold text-mori-dark sm:text-[1.75rem]">{point.text}</h3>
                  {point.description && <p className="mt-4 text-lg leading-loose">{point.description}</p>}
                </li>
              ))}
            </ol>
          </Container>
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
