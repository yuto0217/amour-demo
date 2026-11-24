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
  slug: 'amour',
  kind: 'ペンション',
  name: 'ペンション アムール',
  area: '八ヶ岳・大泉',
  description: '八ヶ岳・大泉のペンション「ペンション アムール」。',
  intro: null,
  catchcopy: null,
  theme: 'mori',
  tabs: [
    { to: '/rooms', label: '客室' },
    { to: '/cuisine', label: 'お料理' },
    { to: '/access', label: 'アクセス' },
  ],
  logoChar: 'ア',
  phone: '0551-38-3475',
  phoneButton: true,
  hero: [
    { label: '八ヶ岳南麓の木々に囲まれた宿の外観の写真', alt: '木々に囲まれたペンション アムールの外観', tone: 'moss' },
    { label: '朝食の焼きたてパンの写真', alt: '手作りの焼きたてパンの朝食', tone: 'wood' },
    { label: '夜の甲府盆地の夜景の写真', alt: '宿から見える甲府の夜景', tone: 'sky' },
  ],
  points: [
    {
      text: '手作りの焼きたてパンの朝食',
      description: '朝食には、手作りの焼きたてパンをお出ししています。パン作りの体験もご用意しています。',
      photos: [
        { label: '焼きたてパンの写真', alt: '手作りの焼きたてパン', tone: 'wood' },
        { label: '朝食の写真', alt: '焼きたてパンの朝食', tone: 'kaki' },
        { label: 'パン作り体験の写真', alt: 'パン作り体験', tone: 'moss' },
      ],
    },
    {
      text: '高原野菜を使った手作りの夕食',
      description: '夕食は、高原野菜を使ったスープ・サラダ・メインからデザートまで、手作りでお出ししています。',
      photos: [
        { label: '夕食の写真', alt: '高原野菜を使った手作りの夕食', tone: 'kaki' },
        { label: '食堂の写真', alt: '食堂', tone: 'wood' },
      ],
    },
    {
      text: '鍵付きの貸切風呂',
      description: '鍵をかけて使える貸切のお風呂が2つあります。ご家族やご夫婦でゆっくりお入りいただけます。',
      photos: [
        { label: '貸切風呂の写真', alt: '鍵付きの貸切風呂', tone: 'sky' },
      ],
    },
  ],
  pointsTitle: 'アムールの魅力',
  access: 'JR小海線 甲斐大泉駅から徒歩8分',
  address: '山梨県北杜市大泉町西井出8240-1548',
  bookingUrl: null,
  bookingLabel: '空室を見る',
  heroBooking: true,
  en: null,
}
