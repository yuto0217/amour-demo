# CLAUDE.md — {{種別}}「{{宿名}}」サイト

{{地域}}の{{種別}}「{{宿名}}」のホームページ。
現在は **{{提案}}の営業用の見本サイト**（{{作成日}}にテンプレート `inn-demo-template` から作成）。提案が通ったら、このリポジトリを本番サイトに育てる。

## 営業用の見本のルール（最重要）

- **作るのはトップのヒーロー（写真のスライド＋宿名、宿の魅力・アクセス・予約ボタン）だけ**。タブ（客室・お料理・アクセス）はメニューに出すだけで、中身は作らない。タブを開くと「見本サイトのため表示されません。」を出す
- 書き換えるのは `src/inn.config.ts` だけ。ページ・部品（`src/components/`・`src/pages/`）は触らない
- 写真は使わない。ヒーローと宿の魅力の写真はラベル付きの色の枠（`hero` と `points` の `photo` の `label` にどんな写真を入れるかを書く）。予約サイト・口コミサイト・Google マップ・SNS など他サイトの写真は使わない
- ヒーローに出すのは次の3つ（Yuto の指示、2026年11月21日）。紹介文・キャッチコピーは書き足さない（例外は操作に必要な最小限の文言と見本の注記）
  1. 宿の魅力（`points`、2〜3個。それぞれ写真の枠つき）：口コミで多く褒められている点から選ぶ。口コミの文は写さず、宿の立場の短い言葉にする。評価の点数や件数は載せない。「絶品」「最高級」のような誇張はしない
  2. アクセス（`access`）：地名と最寄り駅・バス停・IC からの時間
     アクセスの下には住所（`address`）から Google マップを埋め込む（API キー不要の埋め込み。住所が分からない間は `null` で地図を出さない）
     宿名の下の紹介文（`intro`）、魅力の見出し（`pointsTitle`、例「太郎の魅力」）、魅力ごとの説明（`description`）は、公開情報で確かめた事実だけで書く。誇張はしない
  3. 予約ボタン（ヘッダーと、スマホの画面下。名前は `bookingLabel`、ふつうは「空室を見る」）：「電話で予約」（`phone`。`phoneButton: false` でボタンを出さない）と「空室を見る」（`bookingUrl`。予約サイトの宿のページなど。未設定の間は「見本サイトのため表示されません。」のページ）
- 宿名・地名・電話番号・アクセスは、出典をたどれる公開情報の事実だけを書き、出典を下の「宿の基本情報」に残す。分からないものは書かない（電話は `null` のままにすれば電話ボタンが出ない）
- 1件30分以内が目安。調べものは宿名・住所・電話・宿の雰囲気（色の組み合わせとヒーローのラベルを決めるため）まで
- デプロイは Yuto の指示があるときだけ行う

## 見本を作る手順

```bash
npm ci
npm run setup -- --slug <ローマ字> --name "<宿名>" --kind 民宿 --area "<地名>" --pref "<都道府県・市町村>" --theme <色> --phone <電話> --new \
  --point "<魅力1>" --point "<魅力2>" --access "<最寄り駅からの時間>" --address "<住所>"
# src/inn.config.ts の hero と points の写真の枠のラベル、address（地図）を宿に合わせる
npm run check     # 色のコントラスト・型チェック・ビルド・書き忘れ
npm run dev       # 画面を見る（スマホの幅でも）
npm run deploy    # Yuto の指示があるときだけ
```

色の組み合わせ（`theme`）：`umi` 海の紺×夕日の朱／`nagisa` 海の青緑×砂浜の茶／`mori` 森の緑×柿色／`yama` 山の緑×炭の茶／`sora` 空色×花の色

## 宿の基本情報

| 項目 | 内容 | 出典 | 宿に確認 |
|---|---|---|---|
| 宿名 | {{宿名}} | | 未 |
| 住所 | | | 未 |
| 電話 | | | 未 |
| 今のサイト | | | 未 |

## 成約後にすること

- ページの中身を作る：一般的な宿泊施設のサイトにならった8ページ構成（トップ・客室・お料理・お風呂・温泉・宿泊プラン・料金・アクセス・よくあるご質問・ご予約・お問い合わせ）。完成形の例は `taro-demo`
- 宿からいただいた写真を `src/assets/photos/` に置いて import し、`hero` の `src` に設定する。置く前に撮影情報（Exif・GPS）を消す（`ffmpeg -i 元.jpg -map_metadata -1 -vf "scale='min(2400,iw)':-2:flags=lanczos" -q:v 2 新.jpg`）。`alt` を写真の内容に合わせて書き直す
- 本番公開時に外すもの：`index.html` の `noindex`、`public/_headers` の `X-Robots-Tag`、`worker/index.ts` の `NOINDEX_HEADERS`、`DemoBanner` とフッターの見本の注記、タブの「見本サイトのため表示されません。」
- 独自ドメイン、予約（`yado-booking` につなぐ）、SEO のためのプリレンダリング

## 技術構成

- React 19 + TypeScript + Vite + Tailwind CSS v4（設定は `src/index.css` の `@theme`）＋ React Router（データモード）
- Cloudflare Workers（静的アセット＋ `worker/index.ts`）。`wrangler.jsonc` の `name` は `{{リポジトリ}}`
- Cloudflare Workers で動かないライブラリ（`node:*` に依存するもの）は `src/`・`worker/` に入れない。新しい依存関係は必要最小限にする
- `vite.config.ts` が `inn.config.ts` の `theme` と `logoChar` を読み、`<html data-theme>` とブラウザのアイコンを書き込む

```
src/
  inn.config.ts  ★宿の設定（ここだけ書き換える）
  content/       schema.ts（設定の型）, site.ts（宿名・電話・タブ）, images.ts（ヒーローの写真）
  components/    layout（Header：宿名・タブ・電話, Footer, DemoBanner, MobileCtaBar）, home（HeroSlider：写真と宿名, HeroInfo：宿の魅力・アクセス・予約ボタン）, sections（MapEmbed：住所と地図）, ui
  pages/         HomePage（ヒーローだけ）, TabPage（タブの先・空室を見るの仮のページ）, NotFoundPage
scripts/         setup-inn.mjs（宿名などの書き込み）, check-inn.mjs, contrast.mjs
```

## アクセシビリティ

- 背景は白（`cream`・`paper` とも #ffffff。Yuto の指示）
- 本文は 15px 基準（`html { font-size: 93.75% }`）。ボタン・リンクの高さは 48px 以上（主要ボタンは 56px）
- 文字のコントラスト比は AA（4.5:1）以上。色の組み合わせを足したら `npm run contrast`
- ヒーローのスライドは `prefers-reduced-motion` のときは自動で切り替えない
  - 停止ボタンと「何枚目か」の印は Yuto の指示で置いていない（2026年11月21日）。WCAG 2.2.2（5秒以上動くものは止められること）を満たさないので、本番公開前に再相談する
- フォーカス枠を消さない。「本文へスキップ」リンクあり。見出しは h1 → h2 → h3 の順
