import { useEffect, useState } from 'react'
import { heroImages, type SiteImage } from '../../content/images'
import { site } from '../../content/site'
import { Photo } from '../ui/Photo'

const slides: SiteImage[] = heroImages

const INTERVAL_MS = 7000

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** トップページ冒頭の写真のスライド（動きを減らす設定のときは自動で切り替えない） */
export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  // 停止ボタンと「何枚目か」の印は Yuto の指示で置いていない（2026年11月21日）。動きを減らす設定のときは自動で切り替えない
  const [playing] = useState(() => !prefersReducedMotion())

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => setCurrent((i) => (i + 1) % slides.length), INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [playing])

  return (
    <section aria-labelledby="hero-title" className="surface-dark relative bg-mori-dark text-paper">
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-[min(80svh,720px)]">
        <div role="region" aria-roledescription="カルーセル" aria-label={site.name} aria-live="off">
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
              <Photo image={image} labelPosition="top" loading={i === 0 ? 'eager' : 'lazy'} className={image.src ? '' : 'pt-5'} />
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

    </section>
  )
}
