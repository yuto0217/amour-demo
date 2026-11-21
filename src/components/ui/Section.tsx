import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 lg:max-w-7xl ${className}`}>{children}</div>
}

const toneClass = {
  cream: 'bg-cream',
  paper: 'bg-paper',
  wood: 'bg-wood-light',
  kaki: 'bg-kaki-light',
} as const

interface SectionProps {
  children: ReactNode
  /** 見出しの id（aria-labelledby に使う） */
  labelledBy?: string
  tone?: keyof typeof toneClass
  className?: string
}

/** ページ内の区切り（上下の余白と背景色） */
export function Section({ children, labelledBy, tone = 'cream', className = '' }: SectionProps) {
  return (
    <section aria-labelledby={labelledBy} className={`${toneClass[tone]} py-14 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

interface SectionHeadingProps {
  title: ReactNode
  id?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, id, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`mb-8 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : ''}`}>
      <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-kaki" />
      <h2 id={id} className="text-[1.5rem] font-bold text-mori-dark sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
