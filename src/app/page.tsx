"use client";

import Image from "next/image";
import { AnimatedParagraph, AnimatedText } from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col lg:flex-row min-h-screen max-w-screen-2xl mx-auto">
        {/* 左側：T2ロゴエリア */}
        <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col p-8 lg:py-16 lg:pl-16 border-b lg:border-b-0 lg:border-r border-gray-100/0 lg:sticky lg:top-0 lg:h-screen">
          {/* T2ロゴ - 縦中央・横中央 */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="T2"
              width={120}
              height={120}
              className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]"
            />
          </div>
        </div>

        {/* 右側：コンテンツエリア */}
        <div className="flex-1 p-8 lg:py-16 lg:pr-16 lg:pl-12">
          {/* TECH 2ND INC ロゴ */}
          <div className="mb-10 lg:mb-12">
            <Image
              src="/logo_sub.svg"
              alt="TECH 2ND INC"
              width={120}
              height={120}
              priority
              className="w-[100px] h-auto lg:w-[120px]"
            />
          </div>

          {/* キャッチコピー */}
          <h1 className="text-[24px] lg:text-[32px] font-black mb-12 lg:mb-20 tracking-tight leading-snug">
            <AnimatedText delay={200} charDelay={60}>
              技術は、二番目でいい。
            </AnimatedText>
          </h1>

          {/* Concept セクション */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[26px] font-black mb-6 lg:mb-8">
              <AnimatedText delay={800} charDelay={50}>
                Concept
              </AnimatedText>
            </h2>
            <div className="text-[14px] lg:text-[15px] leading-[2.0] lg:leading-[2.2] font-medium text-gray-800">
              <AnimatedParagraph delay={1200} charDelay={25}>
                技術は手段であって、目的ではない。
              </AnimatedParagraph>
              <AnimatedParagraph delay={1700} charDelay={25}>
                一番大切なのは、あなたが実現したいこと。
              </AnimatedParagraph>
              <AnimatedParagraph delay={2200} charDelay={25}>
                その想いを形にするために、技術がある。
              </AnimatedParagraph>
              <AnimatedParagraph delay={2700} charDelay={25}>
                Tech Secondは、そういう考え方で開発をします。
              </AnimatedParagraph>
            </div>
          </section>

          {/* How I Work セクション */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[26px] font-black mb-6 lg:mb-8">
              <AnimatedText delay={3200} charDelay={50}>
                How I Work
              </AnimatedText>
            </h2>
            <div className="text-[14px] lg:text-[15px] leading-[2.0] lg:leading-[2.2] font-medium text-gray-800">
              <AnimatedParagraph delay={3700} charDelay={20}>
                最初に聞きたいのは、仕様ではなく「なぜそれをやりたいのか」です。
              </AnimatedParagraph>
              <AnimatedParagraph delay={4400} charDelay={20}>
                目的が明確になれば、手段は自然と見えてくる。必要な技術だけを選び、シンプルに、
              </AnimatedParagraph>
              <AnimatedParagraph delay={5100} charDelay={20}>
                確実に形にしていきます。
              </AnimatedParagraph>
              <AnimatedParagraph delay={5500} charDelay={20} className="mt-4">
                技術で驚かせることが目的ではなく、
              </AnimatedParagraph>
              <AnimatedParagraph delay={5900} charDelay={20}>
                あなたのやりたいことが実現した時に、一緒に喜べる関係を目指します。
              </AnimatedParagraph>
            </div>
          </section>

          {/* Services セクション */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[26px] font-black mb-6 lg:mb-8">
              <AnimatedText delay={6400} charDelay={50}>
                Services
              </AnimatedText>
            </h2>
            <div className="grid gap-6">
              <div className="border-l-2 border-gray-900 pl-4">
                <h3 className="text-[16px] lg:text-[17px] font-bold mb-2">
                  <AnimatedText delay={6800} charDelay={30}>
                    Webアプリケーション開発
                  </AnimatedText>
                </h3>
                <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
                  <AnimatedText delay={7200} charDelay={15}>
                    業務システム、SaaS、管理画面など、ビジネスの課題を解決するWebアプリを開発します。
                  </AnimatedText>
                </p>
              </div>
              <div className="border-l-2 border-gray-900 pl-4">
                <h3 className="text-[16px] lg:text-[17px] font-bold mb-2">
                  <AnimatedText delay={7600} charDelay={30}>
                    モバイルアプリ開発
                  </AnimatedText>
                </h3>
                <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
                  <AnimatedText delay={8000} charDelay={15}>
                    iOS/Android対応のネイティブ・クロスプラットフォームアプリを設計から実装まで。
                  </AnimatedText>
                </p>
              </div>
              <div className="border-l-2 border-gray-900 pl-4">
                <h3 className="text-[16px] lg:text-[17px] font-bold mb-2">
                  <AnimatedText delay={8400} charDelay={30}>
                    システム開発・API構築
                  </AnimatedText>
                </h3>
                <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
                  <AnimatedText delay={8800} charDelay={15}>
                    バックエンドシステム、API設計・開発、既存システムとの連携を行います。
                  </AnimatedText>
                </p>
              </div>
              <div className="border-l-2 border-gray-900 pl-4">
                <h3 className="text-[16px] lg:text-[17px] font-bold mb-2">
                  <AnimatedText delay={9200} charDelay={30}>
                    AI/ML ソリューション
                  </AnimatedText>
                </h3>
                <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
                  <AnimatedText delay={9600} charDelay={15}>
                    生成AI、機械学習を活用した機能開発。業務効率化からプロダクト組み込みまで対応。
                  </AnimatedText>
                </p>
              </div>
            </div>
          </section>

          {/* About セクション */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[26px] font-black mb-6 lg:mb-8">
              <AnimatedText delay={10000} charDelay={50}>
                About
              </AnimatedText>
            </h2>
            <div className="text-[14px] lg:text-[15px] leading-[2.0] lg:leading-[2.2] font-medium text-gray-800 mb-6">
              <AnimatedParagraph delay={10400} charDelay={20}>
                AIを活用したフルスタック開発を得意とするソフトウェアエンジニアです。
              </AnimatedParagraph>
              <AnimatedParagraph delay={10900} charDelay={20}>
                最新のAI技術を取り入れながら、本当に必要なものを、必要なだけ作る。
              </AnimatedParagraph>
              <AnimatedParagraph delay={11400} charDelay={20}>
                そのシンプルな姿勢で、あなたのプロジェクトに向き合います。
              </AnimatedParagraph>
            </div>
            <dl className="grid gap-3 text-[13px] lg:text-[14px]">
              <div className="flex">
                <dt className="w-24 text-gray-500 flex-shrink-0">会社名</dt>
                <dd className="font-medium">Tech Second Inc.</dd>
              </div>
              <div className="flex">
                <dt className="w-24 text-gray-500 flex-shrink-0">代表</dt>
                <dd className="font-medium">藤田 隼輝 (Fujita Toshiki)</dd>
              </div>
              <div className="flex">
                <dt className="w-24 text-gray-500 flex-shrink-0">設立</dt>
                <dd className="font-medium">2026年1月</dd>
              </div>
              <div className="flex">
                <dt className="w-24 text-gray-500 flex-shrink-0">所在地</dt>
                <dd className="font-medium">東京</dd>
              </div>
              <div className="flex">
                <dt className="w-24 text-gray-500 flex-shrink-0">事業内容</dt>
                <dd className="font-medium">ソフトウェア開発</dd>
              </div>
            </dl>
          </section>

          {/* Contact セクション */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[26px] font-black mb-6 lg:mb-8">
              <AnimatedText delay={12000} charDelay={50}>
                Contact
              </AnimatedText>
            </h2>
            <div className="text-[14px] lg:text-[15px] leading-[2.0] lg:leading-[2.2] font-medium text-gray-800 mb-6">
              <AnimatedParagraph delay={12400} charDelay={20}>
                お仕事のご相談、お見積りなど、お気軽にご連絡ください。
              </AnimatedParagraph>
            </div>
            <a
              href="mailto:contact@tech2nd.com"
              className="inline-flex items-center gap-2 text-[15px] lg:text-[16px] font-bold hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              contact@tech2nd.com
            </a>
          </section>

          {/* フッター */}
          <footer className="pt-8 lg:pt-12 border-t border-gray-200">
            <p className="text-[12px] lg:text-[13px] text-gray-500">
              © 2026 Tech Second Inc.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
