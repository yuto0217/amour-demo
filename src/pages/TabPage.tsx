import { ButtonLink } from '../components/ui/Button'
import { PageMeta } from '../components/ui/PageMeta'
import { Section } from '../components/ui/Section'

/** タブの先のページ（営業用の見本では中身を作らない） */
export function TabPage({ title }: { title: string }) {
  return (
    <>
      <PageMeta title={title} />
      <Section tone="paper" className="!py-24">
        <h1 className="text-[1.75rem] font-bold text-mori-dark sm:text-4xl">{title}</h1>
        <p className="mt-6 text-lg">見本サイトのため表示されません。</p>
        <ButtonLink to="/" variant="secondary" icon="home" className="mt-8">
          トップページ
        </ButtonLink>
      </Section>
    </>
  )
}
