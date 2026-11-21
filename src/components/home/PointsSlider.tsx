import { site } from '../../content/site'
import { Photo } from '../ui/Photo'
import { useAutoSlide } from '../ui/useAutoSlide'

/** 宿の魅力の写真を、画面の横幅いっぱいでヒーローのように流す（写真の上に番号と見出し） */
export function PointsSlider() {
  const points = site.points
  const current = useAutoSlide(points.length)

  return (
    <div
      role="region"
      aria-roledescription="カルーセル"
      aria-label={site.pointsTitle ?? '宿の魅力'}
      aria-live="off"
      className="surface-dark relative aspect-[4/3] w-full overflow-hidden bg-mori-dark text-paper sm:aspect-[16/9] lg:aspect-auto lg:h-[min(70svh,640px)]"
    >
      {points.map((point, i) => (
        <div
          key={point.text}
          role="group"
          aria-roledescription="スライド"
          aria-label={`${i + 1}枚目（全${points.length}枚）`}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Photo image={point.photo} labelPosition="top" loading="lazy" className={point.photo.src ? '' : 'pt-5'} />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/45 to-transparent"
          />
          <p aria-hidden="true" className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-8 lg:left-10 lg:right-auto lg:px-0 lg:pb-14">
            <span className="block text-4xl font-bold text-kaki-light sm:text-5xl">{String(i + 1).padStart(2, '0')}</span>
            <span className="mt-1 block text-2xl leading-snug font-bold sm:text-4xl">{point.text}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
