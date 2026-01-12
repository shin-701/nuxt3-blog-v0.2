# Nuxt 3 Blog Project

このプロジェクトは、Nuxt 3とNuxt Contentを使用して構築された技術ブログです。
Material Design 3 (M3) のデザインシステムを採用し、シンプルで読みやすいブログを目指しています。

## 🛠 技術スタック

- **フレームワーク**: [Nuxt 3](https://nuxt.com/)
- **CMS**: [Nuxt Content](https://content.nuxt.com/) (Markdownベース)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **デザインシステム**: Material Design 3 (M3)
- **アイコン**: Material Symbols / Nuxt Icon

## ✨ 機能

- **M3デザイン**: Material Design 3に基づいたモダンで美しいUI
- **ダークモード対応**: OSの設定に応じたレスポンシブなテーマ（現在はCSS変数で管理）
- **記事一覧・詳細**: Markdownで記述された記事のレンダリング
- **目次 (Table of Contents)**: 記事詳細ページでの自動目次生成（PCではサイドバー固定）
- **タグ機能**: 記事に関連するタグの表示
- **画像ライトボックス**: 記事内の画像をクリックで拡大表示
- **レスポンシブデザイン**: モバイルからデスクトップまで最適化されたレイアウト

## 🚀 セットアップ

依存関係のインストール:

```bash
npm install
```

開発サーバーの起動:

```bash
npm run dev
```

`http://localhost:3000` でアプリケーションにアクセスできます。

## 📝 記事の作成

`content/blog` ディレクトリにMarkdownファイルを作成することで、新しい記事を追加できます。
ファイル名は `YYYYMMDDHHMMSS.md` などの形式が推奨されますが、スラッグとしても機能します。

フロントマターの例:

```yaml
---
title: "記事のタイトル"
description: "記事の概要"
date: 2025-01-01
tags: ["Nuxt", "Vue"]
image: "/images/ogp.png" # オプション
---
```

## 🏗 今後の実装予定

- [x] 記事詳細ページの目次表示
- [x] 記事詳細ページのタグ表示
- [ ] ダークモード切り替えトグル
- [ ] タグによる記事フィルタリング/検索ページ
- [ ] 自己紹介ページ
- [ ] ページネーション
