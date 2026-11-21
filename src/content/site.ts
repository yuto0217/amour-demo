/** 宿の基本情報（src/inn.config.ts から作る。ここは書き換えない） */
import { inn } from '../inn.config'

export const site = {
  name: inn.name,
  area: inn.area,
  description: inn.description,
  phone: inn.phone,
  phoneHref: inn.phone ? `tel:${inn.phone.replace(/[^\d+]/g, '')}` : '',
  copyright: `© ${inn.name}`,
}

/** タブ（メニュー）。営業用の見本では中身を作らず、開くと「見本サイトのため表示されません。」を出す */
export const navItems = [
  { to: '/rooms', label: '客室' },
  { to: '/cuisine', label: 'お料理' },
  { to: '/access', label: 'アクセス' },
] as const
