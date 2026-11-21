/**
 * ★宿の設定ファイル（営業用の見本は、このファイルだけを書き換えて作る）
 *
 * 営業用の見本は「ヒーロー＋タブだけ」。客室・お料理・アクセスはタブ（メニュー）だけ出し、中身は作らない
 * - 宿名・地名・電話は、出典をたどれる公開情報（予約サイト・観光協会など）の事実だけを書く。出典は CLAUDE.md に残す
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
  theme: 'mori',
  logoChar: '宿',
  phone: null,
  hero: [
    { label: '宿の周りの景色の写真', alt: '宿の周りの景色', tone: 'sky' },
    { label: '夕食の写真', alt: '夕食', tone: 'kaki' },
    { label: '宿の外観の写真', alt: '宿の外観', tone: 'wood' },
  ],
}
