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

## Deployment (Cloudflare Pages)

- **Hosting**: Cloudflare Pages 上に静的ホスティング
- **Static Export**: `next.config.ts` で `output: "export"` を指定しているため、`next build` 実行時に `out/` ディレクトリへ静的書き出しされる
- **Images**: 静的エクスポートに対応するため `images.unoptimized: true` を設定済み（`next/image` は最適化なしでそのまま出力）

### Deploy 手順（CLI）

1. 依存関係のインストール（未実施の場合）

   ```bash
   npm install
   ```

2. Cloudflare アカウントへのログイン（初回のみ）

   ```bash
   wrangler login
   ```

3. 本番ビルド & 静的出力

   ```bash
   npm run build  # out/ に静的ファイルが生成される
   ```

4. Cloudflare Pages へのデプロイ

   ```bash
   CLOUDFLARE_ACCOUNT_ID=e7352b491e70ebc3ac91a1614c804acc wrangler pages deploy out --project-name=tech2nd-com
   ```

   - `wrangler.toml` に `pages_build_output_dir = "out"` が設定されているため、Cloudflare Pages 用プロジェクトとして動作する
   - `tech2nd-com` は Pages プロジェクト名（`*.pages.dev` のサブドメインもこの名前に基づく）

### カスタムドメイン `tech2nd.com`

- このリポジトリは Cloudflare 上のドメイン `tech2nd.com` に紐づけて公開する想定
- 現行の Wrangler v4 では、**Pages のカスタムドメイン追加はダッシュボードから行う**
  - Cloudflare Dashboard → Pages → プロジェクト `tech2nd-com`
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
