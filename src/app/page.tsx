import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col lg:flex-row min-h-screen max-w-screen-2xl mx-auto">
        {/* 左側：T2ロゴエリア */}
        <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col p-8 lg:py-16 lg:pl-16 border-b lg:border-b-0 lg:border-r border-gray-100/0">
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
            技術は、二番目でいい。
          </h1>

          {/* Concept セクション */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[26px] font-black mb-6 lg:mb-8">Concept</h2>
            <div className="text-[14px] lg:text-[15px] leading-[2.0] lg:leading-[2.2] font-medium text-gray-800">
              <p>技術は手段であって、目的ではない。</p>
              <p>一番大切なのは、あなたが実現したいこと。</p>
              <p>その想いを形にするために、技術がある。</p>
              <p>Tech Secondは、そういう考え方で開発をします。</p>
            </div>
          </section>

          {/* How I Work セクション */}
          <section>
            <h2 className="text-[22px] lg:text-[26px] font-black mb-6 lg:mb-8">How I Work</h2>
            <div className="text-[14px] lg:text-[15px] leading-[2.0] lg:leading-[2.2] font-medium text-gray-800">
              <p>最初に聞きたいのは、仕様ではなく「なぜそれをやりたいのか」です。</p>
              <p>目的が明確になれば、手段は自然と見えてくる。必要な技術だけを選び、シンプルに、</p>
              <p>確実に形にしていきます。</p>
              <p className="mt-4">技術で驚かせることが目的ではなく、</p>
              <p>あなたのやりたいことが実現した時に、一緒に喜べる関係を目指します。</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
