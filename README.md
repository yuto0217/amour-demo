# inn-demo-template — 営業用の見本サイトのテンプレート

小さな宿への営業に使う見本サイトのひな形です。**トップのヒーロー（写真のスライド＋宿名、宿の魅力・アクセス・「電話で予約」「空室を見る」のボタン）とタブ（客室・お料理・アクセス）だけ**を表示し、タブの中身は作りません（開くと「見本サイトのため表示されません。」）。宿ごとに書き換えるのは `src/inn.config.ts` だけです。

## 新しい宿の見本を作る（1件30分以内が目安）

1. GitHub でこのリポジトリの「Use this template」→ `<ローマ字>-demo` を作る（または、このフォルダを `<ローマ字>-demo` に複製する）
2. 宿名などを書き込む

   ```bash
   npm ci
   npm run setup -- --slug banjoya --name "雲見温泉 民宿 番上屋" --kind 民宿 --area "西伊豆・雲見温泉" \
     --pref "静岡県賀茂郡松崎町" --theme nagisa --phone 0558-45-0244 --new \
     --point "<魅力1>" --point "<魅力2>" --access "<最寄り駅からの時間>"
   ```

   `package.json`・`wrangler.jsonc` の名前、`src/inn.config.ts`、宿ごとの `CLAUDE.md`（`docs/CLAUDE.inn.md` から）ができ、この README と docs/ は消えます。
3. `src/inn.config.ts` の `hero` のラベル（どんな写真を入れるか）を宿に合わせる。宿の魅力は口コミで多く褒められている点から選び、口コミの文は写さない
4. `npm run check` → `npm run dev` で確認 → `npm run deploy`

Claude に頼むときは「`<宿名>`（じゃらん等の URL）の営業用の見本を inn-demo-template から作って」と伝えれば、`docs/CLAUDE.inn.md` のルールで作ります。

## 色の組み合わせ（`theme`）

| 名前 | 色 | 合う宿 |
|---|---|---|
| `umi` | 海の紺 × 夕日の朱 | 漁師の宿・海辺の宿 |
| `nagisa` | 海の青緑 × 砂浜の茶 | 海辺の素朴な宿 |
| `mori` | 森の緑 × 柿色 | 高原・森の宿 |
| `yama` | 山の緑 × 炭の茶 | 山あいの宿・温泉郷 |
| `sora` | 空色 × 花の色 | 明るい土地の宿 |

どれも文字のコントラスト比 AA（4.5:1）以上を確認済み（`npm run contrast`）。

## テンプレートを直すとき

- 部品（`src/components/`・`src/pages/`）を直したら、すでに作った見本にも同じ変更を入れる
- 宿の名前や文章を部品に直接書かない（すべて `src/inn.config.ts` から読む）
