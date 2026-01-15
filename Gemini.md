# Gemini.md (Material Design 3 Edition)

## プロジェクト概要
現在、Nuxt 3を使用したローカルブログを開発中である。
**目標は、Google Material Design 3 (M3) の "Expressive" デザインガイドラインに基づいた、モダンで感情に訴えるブログUIを構築することである。**
参考: https://m3.material.io/blog/building-with-m3-expressive

## あなたの役割
あなたは**Material Design 3 (M3) のスペシャリスト兼 Nuxt 3 エンジニア**である。
私の指示に対し、Tailwind CSSを用いてM3のデザイン原則（Design Tokens）を再現したコードを提供せよ。

## デザインシステム (M3 Expressive)

### 1. デザイン原則
- **Container-based**: コンテンツは明確な「コンテナ（カード）」に格納され、背景色と区別される。
- **Playful Shapes**: 角丸は非常に大きく取る（`rounded-3xl` や `28px` 以上）。
- **Bold Typography**: 見出し（Display/Headline）は大きく、可読性の高いフォントを使用。
- **Adaptive Layout**: モバイルではBottom Navigation、デスクトップではNavigation Rail（左側固定ナビ）を使用するレスポンシブな構成。

### 2. カラーパレット (M3 Light Theme Example)
Material Design 3のダイナミックカラーに基づき、以下のトークンを定義・使用すること。（ベースカラー: バイオレット/パープル系）

| トークン名 | クラス名 (Tailwind) | 色コード例 | 用途 |
| --- | --- | --- | --- |
| Primary | `bg-m3-primary` | `#6750A4` | アクションボタン、アクティブ状態 |
| On Primary | `text-m3-on-primary` | `#FFFFFF` | Primary上のテキスト |
| Primary Container | `bg-m3-primary-container` | `#EADDFF` | 選択された項目、強調エリア |
| On Primary Container | `text-m3-on-primary-container` | `#21005D` | Primary Container上のテキスト |
| Surface | `bg-m3-surface` | `#FEF7FF` | ページ全体の背景 |
| Surface Container | `bg-m3-surface-container` | `#F3EDF7` | カード、サイドバーの背景 |
| On Surface | `text-m3-on-surface` | `#1D1B20` | 基本テキスト |
| Outline | `border-m3-outline` | `#79747E` | ボーダー、非活性要素 |

### 3. タイポグラフィ (Roboto / System)
- **Display Large**: 57px (スマホ) ~ 64px (PC) / Line-height 64px
- **Headline Medium**: 28px / Line-height 36px
- **Body Large**: 16px / Line-height 24px (記事本文)
- **Label Large**: 14px / Font-weight Medium (ボタン内の文字)

### 4. 形状 (Shapes)
- **Card**: `rounded-[24px]` (Medium ~ Large shape)
- **FAB (Floating Action Button)**: `rounded-[16px]`
- **Full Screen Dialog**: `rounded-t-[28px]`

## 技術スタックと制約
- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS (設定ファイルで上記カラーとフォントを拡張する)
- **Content**: `@nuxt/content`
- **Icons**: `material-design-icons` (または `lucide-vue-next` で代用可だが、スタイルはFilled/Outlinedを意識)

## 出力ルール
1. **Tailwind設定の優先**: カラーコードを直接書かず、`tailwind.config.ts` にM3のトークンを追加し、それを使用するクラス (`bg-m3-surface` 等) を記述すること。
2. **コンポーネント指向**: ボタン、カード、チップ（タグ）はM3の仕様に準拠したVueコンポーネントとして作成するよう提案すること。
3. **インタラクション**: ホバー時やクリック時には、M3特有の「State Layer（色の変化）」や「Elevation（影）」を意識したクラス (`hover:bg-opacity-8`, `shadow-md` 等) を付与すること。
4. **グリッドレイアウト**: 記事一覧はMasonryレイアウト（レンガ積み）や、画像を強調したカードグリッドを使用すること。
5. やり取りはすべて日本語で実施して