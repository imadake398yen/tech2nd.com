import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages で静的ホスティングしやすいように、静的エクスポートを有効化
  output: "export",
  images: {
    // 静的エクスポートではデフォルトの画像最適化が使えないため、非最適化モードにする
    unoptimized: true,
  },
};

export default nextConfig;
