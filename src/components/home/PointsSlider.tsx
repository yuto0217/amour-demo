import type { SiteImage } from '../../content/images'
import { Photo } from '../ui/Photo'
import { useAutoSlide } from '../ui/useAutoSlide'

/** 魅力1つ分の写真を、画面の横幅いっぱいでヒーローのように流す */
export function PointsSlider({ photos, label }: { photos: SiteImage[]; label: string }) {
  const current = useAutoSlide(photos.length)
  if (photos.length === 0) return null

  return (
    <div
      role="region"
      aria-roledescription="カルーセル"
      aria-label={`${label}の写真`}
      aria-live="off"
      className="relative aspect-[4/3] w-full overflow-hidden bg-mori-dark sm:aspect-[16/9] lg:aspect-auto lg:h-[min(70svh,640px)]"
    >
      {photos.map((photo, i) => (
        <div
          key={photo.label}
          role="group"
          aria-roledescription="スライド"
          aria-label={`${i + 1}枚目（全${photos.length}枚）`}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Photo image={photo} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
