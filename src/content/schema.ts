/**
 * 宿の設定ファイル（src/inn.config.ts）の型
 * 営業用の見本は「ヒーロー＋タブだけ」。タブの先のページは「見本サイトのため表示されません。」を出す
 */

/** 色の組み合わせ（src/index.css の data-theme と対応。値を変えたら npm run contrast で確認する） */
export type ThemeName =
  | 'umi' //    海の紺 × 夕日の朱（漁師の宿・海辺の宿）
  | 'nagisa' // 海の青緑 × 砂浜の茶（海辺の素朴な宿）
  | 'mori' //   森の緑 × 柿色（高原・森の宿）
  | 'yama' //   山の緑 × 炭の茶（山あいの宿・温泉郷）
  | 'sora' //   空色 × 花の色（南房総など明るい土地の宿）

/** 仮の画像枠の色 */
export type PlaceholderTone = 'mori' | 'wood' | 'kaki' | 'sky' | 'moss'

export interface SiteImage {
  /** 仮の画像枠に表示するラベル（どんな写真を入れるか） */
  label: string
  /** 代替テキスト（写真の内容を説明する文） */
  alt: string
  tone: PlaceholderTone
  /** 本物の写真の URL（src/assets/photos/ に置いて import する）。未設定なら仮の画像枠を表示 */
  src?: string
  /** 枠に合わせて切り抜くときに残したい位置（CSS の object-position） */
  position?: string
}

export interface InnPoint {
  text: string
  photo: SiteImage
}

export interface InnConfig {
  /** 宿名のローマ字（リポジトリ名・Worker 名は `<slug>-demo`）。npm run setup が書き込む */
  slug: string
  /** 種別（民宿・ペンション・旅館など） */
  kind: string
  name: string
  /** ロゴと見出しの上に添える地名 */
  area: string
  /** 検索結果に出る説明文（事実だけで1文） */
  description: string
  theme: ThemeName
  /** ブラウザのアイコンに出す1文字 */
  logoChar: string
  /** 電話番号（分からない間は null。null の間は電話ボタンを出さない） */
  phone: string | null
  /** 「電話で予約」のボタン（ヘッダー・画面下・予約の帯・フッター）を出すか */
  phoneButton: boolean
  /** トップのスライドの写真（3枚まで。見本の間はラベル付きの色の枠） */
  hero: SiteImage[]
  /**
   * 宿の魅力（2〜3個。短い言葉で）。口コミで多く褒められている点から選び、口コミの文は写さず、事実を宿の立場の言葉にする
   * それぞれに写真の枠を1つ付ける（見本の間はラベル付きの色の枠）
   * 例：[{ text: '伊勢海老漁を営む宿の海鮮舟盛り', photo: { label: '舟盛りの写真', alt: '伊勢海老の舟盛り', tone: 'kaki' } }]
   */
  points: InnPoint[]
  /** アクセス（地名と最寄り駅・バス停・IC からの時間）。例：'伊豆急下田駅からバス約90分「雲見温泉」下車、歩いて2分' */
  access: string | null
  /** 住所（アクセスの Google マップに使う。分からない間は null で、地図を出さない） */
  address: string | null
  /** 「空室を見る」の行き先（予約システムや予約サイトの URL）。null の間は「見本サイトのため表示されません。」のページ */
  bookingUrl: string | null
}
