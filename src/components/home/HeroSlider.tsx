import { useUi } from '../../content/i18n'
import { useSite } from '../../content/site'
import { Photo } from '../ui/Photo'
import { useAutoSlide } from '../ui/useAutoSlide'

/** トップページ冒頭の写真のスライド（動きを減らす設定のときは自動で切り替えない） */
export function HeroSlider() {
  const site = useSite()
  const ui = useUi()
  const slides = site.heroImages
  const current = useAutoSlide(slides.length)

  return (
    <section aria-labelledby="hero-title" className="surface-dark relative bg-mori-dark text-paper">
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-[min(80svh,720px)]">
        <div role="region" aria-roledescription={ui.carousel} aria-label={site.name} aria-live="off">
          {slides.map((image, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription={ui.slide}
              aria-label={ui.slideOf(i + 1, slides.length)}
              aria-hidden={i !== current}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Photo image={image} labelPosition="top" loading={i === 0 ? 'eager' : 'lazy'} className={image.src ? '' : 'pt-5'} />
            </div>
          ))}
        </div>

        {/* 写真の上の文字が読めるよう下側を暗くする */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/45 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-8 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pb-20">
          <h1 id="hero-title" className="text-[2.25rem] leading-[1.4] font-bold sm:text-6xl">
            <span className={`mb-2 block text-base ${site.lang === 'en' ? 'tracking-wider' : 'tracking-[0.3em]'} text-kaki-light sm:text-lg`}>{site.area}</span>
            {site.name}
          </h1>
          {site.intro && <p className="mt-3 max-w-2xl text-base leading-relaxed text-white sm:text-lg">{site.intro}</p>}
        </div>
      </div>

    </section>
  )
}
