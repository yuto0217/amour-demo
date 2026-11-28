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
  catchcopy: ['八ヶ岳の南麓、標高約1,150mに位置する自然に囲まれたペンションです。'],
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
      text: '八ヶ岳南麓、標高約1,150mの豊かな自然',
      description: '豊かな自然に囲まれて、ゆったりとした時間をお過ごしいただけます。夏は避暑地としてもおすすめです。澄んだ空気の中、緑に囲まれた庭や屋根付きのデッキで、気持ちのよいひとときをお楽しみください。',
      photos: [
        { label: '木々に囲まれた庭の写真', alt: '八ヶ岳南麓の木々に囲まれた庭', tone: 'moss' },
        { label: '屋根付きのデッキの写真', alt: '屋根付きのデッキ', tone: 'sky' },
      ],
    },
    {
      text: '手作りの焼きたてパン',
      description: '朝食のパンは、毎朝仕込んで焼き上げています。焼きたてのおいしさは、ご宿泊のお客様からご好評をいただいています。朝食後には、パン作りの体験もご用意しています。',
      photos: [
        { label: '焼きたてパンの写真', alt: '手作りの焼きたてパン', tone: 'wood' },
        { label: '朝食の写真', alt: '焼きたてパンの朝食', tone: 'kaki' },
        { label: 'パン作り体験の写真', alt: 'パン作り体験', tone: 'moss' },
      ],
    },
    {
      text: '駅から徒歩8分、温泉も近い好立地',
      description: 'JR小海線の甲斐大泉駅から歩いて8分。露天風呂のある日帰り温泉「パノラマの湯」へも歩いて9分で行けます。パノラマの湯の入浴券は、宿でお得にお求めいただけます。',
      photos: [
        { label: '甲斐大泉駅の写真', alt: 'JR小海線の甲斐大泉駅', tone: 'sky' },
        { label: '近くの日帰り温泉の写真', alt: '露天風呂のある日帰り温泉', tone: 'kaki' },
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
      { title: 'アメニティ', text: null, items: ['Wi-Fi あり', '館内は全面禁煙', 'トイレ・お風呂は共用', 'エアコン・テレビ'] },
    ],
    photos: [
      { label: '和洋室の写真', alt: 'ベッドの洋室と和室が続く和洋室', tone: 'wood' },
      { label: 'ツインのお部屋の写真', alt: 'ベッドが2つの洋室', tone: 'sky' },
    ],
  },
  cuisine: {
    title: 'お料理',
    lead: '朝食は洋食と手作りの焼きたてパン、夕食は、高原野菜をたくさん使った手作りの洋食のフルコースです。',
    features: [
      { title: '朝食', text: null, items: ['内容：洋食と手作りの焼きたてパン', '開始時間：8:00'] },
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
  en: {
    name: 'Pension Amour',
    area: 'Yatsugatake / Oizumi',
    description: 'Pension Amour, a pension in Kai-Oizumi at the southern foot of the Yatsugatake Mountains.',
    intro: null,
    catchcopy: ['A pension surrounded by nature, about 1,150 m above sea level at the southern foot of the Yatsugatake Mountains.'],
    tabs: {
      '/rooms': 'Rooms',
      '/cuisine': 'Cuisine',
      '/access': 'Access',
    },
    hero: [
      { label: 'Photo of the pension surrounded by the trees of southern Yatsugatake', alt: 'Pension Amour surrounded by trees' },
      { label: 'Photo of freshly baked bread at breakfast', alt: 'A breakfast of freshly baked homemade bread' },
      { label: 'Photo of the garden surrounded by the trees of southern Yatsugatake', alt: 'A garden surrounded by trees' },
    ],
    points: [
      {
        text: 'Rich nature at about 1,150 m in southern Yatsugatake',
        description:
          'Surrounded by rich nature, you can spend your time at a relaxed pace. In summer, it is also a good place to escape the heat. Enjoy a pleasant time in the clear air, in the green garden or on the covered deck.',
        photos: [
          { label: 'Photo of the garden surrounded by trees', alt: 'A garden surrounded by the trees of southern Yatsugatake' },
          { label: 'Photo of the covered deck', alt: 'A covered deck' },
        ],
      },
      {
        text: 'Freshly baked homemade bread',
        description:
          'The bread for breakfast is prepared and baked every morning. Our guests enjoy how good it tastes fresh from the oven. After breakfast, you can also try making bread yourself.',
        photos: [
          { label: 'Photo of freshly baked bread', alt: 'Freshly baked homemade bread' },
          { label: 'Photo of breakfast', alt: 'A breakfast with freshly baked bread' },
          { label: 'Photo of the bread-making experience', alt: 'Bread-making experience' },
        ],
      },
      {
        text: '8 minutes from the station, near a hot spring',
        description:
          'The pension is an 8-minute walk from Kai-Oizumi Station on the JR Koumi Line. The day-trip hot spring "Panorama no Yu", which has an open-air bath, is a 9-minute walk away. Discounted bath tickets for Panorama no Yu are available at the pension.',
        photos: [
          { label: 'Photo of Kai-Oizumi Station', alt: 'Kai-Oizumi Station on the JR Koumi Line' },
          { label: 'Photo of the nearby day-trip hot spring', alt: 'A day-trip hot spring with an open-air bath' },
        ],
      },
    ],
    pointsTitle: 'Features of Amour',
    access: 'About 10 minutes by car from Nagasaka IC on the Chuo Expressway. An 8-minute walk from Kai-Oizumi Station on the JR Koumi Line',
    bookingLabel: 'Check Availability',
    rooms: {
      title: 'Rooms',
      lead: 'We have Western-style twin and triple rooms, and Japanese-Western rooms where a bedroom opens onto a tatami room.',
      features: [
        { title: 'Size', text: 'Western-style rooms are 6 to 7 tatami mats. Japanese-Western rooms have a 5 to 6 mat bedroom joined to a 6 to 8 mat tatami room.' },
        { title: 'Beds', text: 'Double, twin, or triple (three single beds)' },
        { title: 'Capacity', text: '2 to 4 guests, depending on the room' },
        { title: 'Amenities', text: null, items: ['Wi-Fi available', 'Non-smoking throughout the building', 'Shared toilets and baths', 'Air conditioning and TV'] },
      ],
      photos: [
        { label: 'Photo of a Japanese-Western room', alt: 'A Western-style bedroom joined to a tatami room' },
        { label: 'Photo of a twin room', alt: 'A Western-style room with two beds' },
      ],
    },
    cuisine: {
      title: 'Cuisine',
      lead: 'Breakfast is Western-style with freshly baked homemade bread. Dinner is a homemade Western full-course meal made with plenty of highland vegetables.',
      features: [
        { title: 'Breakfast', text: null, items: ['Menu: Western-style breakfast with freshly baked homemade bread', 'Starts at: 8:00'] },
        { title: 'Dinner', text: null, items: ['Menu: A Western full-course meal from soup to dessert, made with highland vegetables', 'Starts at: 18:30'] },
      ],
      photos: [
        { label: 'Photo of the dinner course', alt: 'A Western course made with highland vegetables' },
        { label: 'Photo of the dining room', alt: 'The dining room' },
      ],
    },
  },
}
