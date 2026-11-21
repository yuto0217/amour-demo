/**
 * ★宿の設定ファイル（営業用の見本は、このファイルだけを書き換えて作る）
 *
 * 営業用の見本は「ヒーロー＋タブだけ」。ヒーローの下に宿の魅力（points、写真の枠つき）・アクセス（access と address の地図）・予約ボタン（電話で予約／空室を見る）を出す
 * 客室・お料理・アクセスはタブ（メニュー）だけ出し、中身は作らない
 * - 宿名・地名・電話・アクセスは、出典をたどれる公開情報（予約サイト・観光協会など）の事実だけを書く。出典は CLAUDE.md に残す
 * - 宿の魅力は口コミで多く褒められている点から選ぶ。口コミの文は写さず、宿の立場の短い言葉にする。誇張（絶品・最高級など）はしない
 * - 分からないものは null のまま（仮の値で埋めない）
 * - 写真は使わない。ヒーローはラベル付きの色の枠（label にどんな写真を入れるかを書く）
 * - 書き終えたら npm run check
 */
import type { InnConfig } from './content/schema'

export const inn: InnConfig = {
  slug: 'inn',
  kind: '民宿',
  name: '宿名',
  area: '地域名',
  description: '地域名の民宿「宿名」。',
  intro: null,
  theme: 'mori',
  tabs: [
    { to: '/rooms', label: '客室' },
    { to: '/cuisine', label: 'お料理' },
    { to: '/access', label: 'アクセス' },
  ],
  logoChar: '宿',
  phone: null,
  phoneButton: true,
  hero: [
    { label: '宿の周りの景色の写真', alt: '宿の周りの景色', tone: 'sky' },
    { label: '夕食の写真', alt: '夕食', tone: 'kaki' },
    { label: '宿の外観の写真', alt: '宿の外観', tone: 'wood' },
  ],
  points: [],
  pointsTitle: null,
  access: null,
  address: null,
  bookingUrl: null,
  bookingLabel: '空室を見る',
  en: null,
}
