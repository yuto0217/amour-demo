/**
 * ★宿の設定ファイル（営業用の見本は、このファイルだけを書き換えて作る）
 *
 * 営業用の見本は「ヒーロー＋タブだけ」。ヒーローの下に宿の魅力（points、写真の枠つき）・お部屋（rooms）・料理（cuisine、強みのときだけ）・温泉・お風呂（bath、強みのときだけ）・アクセス（access と address の地図）・予約ボタン（電話で予約／空室を見る）を出す
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
  description: '八ヶ岳南麓・甲斐大泉のペンション「ペンション アムール」。',
  intro: null,
  catchcopy: ['八ヶ岳の南麓、標高約1,150mに位置する自然に囲まれたペンションです。', '朝食の焼きたて手作りパンが好評です。'],
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
    { label: '八ヶ岳南麓の木々に囲まれた庭の写真', alt: '木々に囲まれた庭', tone: 'sky' },
  ],
  points: [
    {
      text: '八ヶ岳 標高約1,150mの自然を感じられる',
      description: '八ヶ岳南麓、標高約1,150m。庭は木々の緑に囲まれ、屋根付きのデッキもございます。',
      photos: [
        { label: '木々に囲まれた庭の写真', alt: '八ヶ岳南麓の木々に囲まれた庭', tone: 'moss' },
        { label: '屋根付きのデッキの写真', alt: '屋根付きのデッキ', tone: 'sky' },
      ],
    },
    {
      text: '手作りの焼きたてパン',
      description: '朝食のパンは、毎朝仕込んで焼き上げています。朝食後には、パン作りの体験もご用意しています。',
      photos: [
        { label: '焼きたてパンの写真', alt: '手作りの焼きたてパン', tone: 'wood' },
        { label: '朝食の写真', alt: '焼きたてパンの朝食', tone: 'kaki' },
        { label: 'パン作り体験の写真', alt: 'パン作り体験', tone: 'moss' },
      ],
    },
    {
      text: 'あたたかいおもてなし',
      description: 'また泊まりに来たいと思っていただけるような、あたたかいおもてなしを目指しています。',
      photos: [
        { label: 'リビングでくつろぐ様子の写真', alt: '薪ストーブのあるリビング', tone: 'kaki' },
        { label: '食堂の写真', alt: '食堂', tone: 'wood' },
      ],
    },
  ],
  pointsTitle: 'アムールの特徴',
  // お部屋はどの宿でも書く。料理・温泉は宿の強みのときだけ書き、そうでなければ null
  rooms: {
    title: 'お部屋',
    lead: 'ツイン・トリプルの洋室と、ベッドの洋室に和室が続く和洋室があります。',
    features: [
      { title: '広さ', text: '洋室は6〜7畳。和洋室は5〜6畳の洋室に、6〜8畳の和室が続きます。' },
      { title: 'ベッドタイプ', text: 'ダブル・ツイン・トリプル（シングル3台）' },
      { title: '定員', text: 'お部屋により2〜4名' },
      { title: 'アメニティ', text: null, items: ['Wi-Fi 無料', '館内は全面禁煙', 'トイレ・お風呂は共用', 'エアコン・テレビ', '羽毛布団・バスタオル'] },
    ],
    photos: [
      { label: '和洋室の写真', alt: 'ベッドの洋室と和室が続く和洋室', tone: 'wood' },
      { label: 'ツインのお部屋の写真', alt: 'ベッドが2つの洋室', tone: 'sky' },
    ],
  },
  cuisine: {
    title: 'お料理',
    lead: '夕食は、高原野菜をたくさん使った手作りの洋食のフルコースです。',
    features: [
      { title: '朝食', text: null, items: ['内容：手作りの焼きたてパン', '開始時間：8:00'] },
      { title: '夕食', text: null, items: ['内容：高原野菜を使った、スープからデザートまでの洋食のフルコース', '開始時間：18:30'] },
    ],
    photos: [
      { label: '夕食のコース料理の写真', alt: '高原野菜を使った洋食のコース', tone: 'kaki' },
      { label: '食堂の写真', alt: '食堂', tone: 'wood' },
    ],
  },
  bath: null,
  access: '中央道 長坂ICから車で約10分。JR小海線 甲斐大泉駅から歩いて8分',
  address: '山梨県北杜市大泉町西井出8240-1548',
  bookingUrl: null,
  bookingLabel: '空室を見る',
  heroBooking: true,
  en: null,
}
