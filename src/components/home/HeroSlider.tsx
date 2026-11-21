import { useEffect, useState } from 'react'
import { heroImages, type SiteImage } from '../../content/images'
import { site } from '../../content/site'
import { Icon } from '../ui/Icon'
import { Photo } from '../ui/Photo'

const slides: SiteImage[] = heroImages

const INTERVAL_MS = 7000

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** トップページ冒頭の写真のスライド（停止ボタン付き。動きを減らす設定のときは自動で切り替えない） */
export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(() => !prefersReducedMotion())

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => setCurrent((i) => (i + 1) % slides.length), INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [playing])

  return (
    <section aria-labelledby="hero-title" className="surface-dark relative bg-mori-dark text-paper">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-[min(70svh,640px)]">
        <div role="region" aria-roledescription="カルーセル" aria-label={site.name} aria-live={playing ? 'off' : 'polite'}>
          {slides.map((image, i) => (
            <div
              key={image.label}
              role="group"
              aria-roledescription="スライド"
              aria-label={`${i + 1}枚目（全${slides.length}枚）`}
              aria-hidden={i !== current}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Photo image={image} loading={i === 0 ? 'eager' : 'lazy'} className={image.src ? '' : 'pb-24'} />
            </div>
          ))}
        </div>

        {/* 写真の上の文字が読めるよう下側を暗くする */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/45 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-8 lg:left-10 lg:right-auto lg:px-0 lg:pb-20">
          <h1 id="hero-title" className="text-[2.25rem] leading-[1.4] font-bold sm:text-6xl">
            <span className="mb-2 block text-base tracking-[0.3em] text-kaki-light sm:text-lg">{site.area}</span>
            {site.name}
          </h1>
        </div>
      </div>

      <div className="absolute top-2 right-2 flex items-center gap-0.5 rounded-full bg-black/55 px-1 py-0.5 lg:top-auto lg:right-6 lg:bottom-6">
        {slides.map((image, i) => (
          <button
            key={image.label}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`${i + 1}枚目を表示`}
            aria-current={i === current ? 'true' : undefined}
            className="inline-flex size-12 items-center justify-center rounded-full"
          >
            <span className={`block size-3 rounded-full border-2 border-white ${i === current ? 'bg-white' : 'bg-transparent'}`} />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? '自動切り替えを停止' : '自動切り替えを再開'}
          className="ml-1 inline-flex min-h-[48px] items-center gap-1.5 rounded-full px-3 text-sm font-bold whitespace-nowrap"
        >
          <Icon name={playing ? 'pause' : 'play'} className="size-4" />
          {playing ? '停止' : '再生'}
        </button>
      </div>
    </section>
  )
}
