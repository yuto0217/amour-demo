import { HeroSlider } from '../components/home/HeroSlider'
import { PageMeta } from '../components/ui/PageMeta'

/** トップページ（営業用の見本はヒーローだけ） */
export function HomePage() {
  return (
    <>
      <PageMeta />
      <HeroSlider />
    </>
  )
}
