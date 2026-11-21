import { site } from '../../content/site'

/** React 19 の機能で <title> と <meta> を <head> に出力する */
export function PageMeta({ title, description = site.description }: { title?: string; description?: string }) {
  const fullTitle = title ? `${title}｜${site.area} ${site.name}` : `${site.area} ${site.name}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </>
  )
}
