# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tech 2nd Inc.のコーポレートサイト。Next.js 16 + React 19 + Tailwind CSS 4で構築されたシンプルなランディングページ。

## Commands

```bash
npm run dev    # 開発サーバー起動 (localhost:3000)
npm run build  # 本番ビルド
npm run lint   # ESLint実行
```

## Deployment (Cloudflare Pages, Git 連携)

- **Hosting**: Cloudflare Pages 上に静的ホスティング
- **Static Export**: `next.config.ts` で `output: "export"` を指定しているため、`npm run build` 実行時に `out/` ディレクトリへ静的書き出しされる
- **Images**: 静的エクスポートに対応するため `images.unoptimized: true` を設定済み（`next/image` は最適化なしでそのまま出力）

### Deploy フロー（推奨）

- Cloudflare Pages 側で GitHub リポジトリ `imadake398yen/tech2nd.com` の `main` ブランチに接続
- Build command: `npm run build`
- Output directory: `out`
- 以後は **`main` に push → Cloudflare Pages が自動ビルド＆デプロイ** する運用を想定

### カスタムドメイン `tech2nd.com`

- Cloudflare Dashboard → Pages → プロジェクト（Git 連携で作成したもの）を開く
- 「Custom domains」から `tech2nd.com` を追加
- ドメインが同一アカウント管理であれば必要な DNS 設定は自動で作成される

## Architecture

- **App Router**: `src/app/` 配下でルーティング
- **Components**: `src/components/` に再利用可能なコンポーネント
- **Path Alias**: `@/*` → `./src/*`

## Tech Stack

- Next.js 16 (Turbopack)
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
