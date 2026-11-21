import { ButtonLink } from '../components/ui/Button'
import { PageMeta } from '../components/ui/PageMeta'
import { Section } from '../components/ui/Section'

export function NotFoundPage() {
  return (
    <>
      <PageMeta title="ページが見つかりません" />
      <Section tone="paper" className="!py-24">
        <h1 className="text-[1.75rem] font-bold text-mori-dark sm:text-4xl">ページが見つかりません</h1>
        <ButtonLink to="/" variant="secondary" icon="home" className="mt-8">
          トップページ
        </ButtonLink>
      </Section>
    </>
  )
}
