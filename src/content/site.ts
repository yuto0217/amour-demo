/** 宿の基本情報（src/inn.config.ts から作る。ここは書き換えない） */
import { inn } from '../inn.config'
import type { NavItem } from './schema'

export const site = {
  name: inn.name,
  area: inn.area,
  description: inn.description,
  intro: inn.intro,
  phone: inn.phone,
  phoneHref: inn.phone ? `tel:${inn.phone.replace(/[^\d+]/g, '')}` : '',
  /** 「電話で予約」のボタンを出すか（電話番号があり、phoneButton が true のとき） */
  showPhoneButton: Boolean(inn.phone) && inn.phoneButton,
  points: inn.points.slice(0, 3),
  pointsTitle: inn.pointsTitle,
  access: inn.access,
  address: inn.address,
  /** 「空室を見る」の行き先。未設定の間は見本の注記のページ */
  bookingHref: inn.bookingUrl ?? '/booking',
  bookingLabel: inn.bookingLabel,
  /** 「空室を見る」が外のサイト（予約サイトなど）か */
  bookingIsExternal: Boolean(inn.bookingUrl && /^https?:/.test(inn.bookingUrl)),
  copyright: `© ${inn.name}`,
}

/** タブ（メニュー）。営業用の見本では中身を作らず、開くと「見本サイトのため表示されません。」を出す */
export const navItems: readonly NavItem[] = inn.tabs
