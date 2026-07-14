import Image from './Image'

type Locale = 'en' | 'ja'

const credentials = [
  {
    image: '/static/images/credentials/vti-best-employee-award-2025.png',
    title: {
      en: 'VTI Japan Best Employee Award',
      ja: 'VTI Japan ベスト・エンプロイー賞',
    },
    detail: {
      en: 'Recognized for outstanding performance and contribution in S1/2025.',
      ja: '2025年上期の高い成果とVTI Japanへの貢献が評価され受賞。',
    },
    date: { en: 'July 2025', ja: '2025年7月' },
  },
  {
    image: '/static/images/credentials/pmp-2025.png',
    title: {
      en: 'Project Management Professional (PMP)',
      ja: 'プロジェクトマネジメント・プロフェッショナル（PMP）',
    },
    detail: {
      en: 'Project leadership, delivery governance, and resource management.',
      ja: 'プロジェクト推進、デリバリー管理、リソース管理の国際資格。',
    },
    date: { en: 'Valid through July 2028', ja: '2028年7月まで有効' },
  },
  {
    image: '/static/images/credentials/aws-solutions-architect-professional-2025.png',
    title: {
      en: 'AWS Solutions Architect – Professional',
      ja: 'AWS ソリューションアーキテクト－プロフェッショナル',
    },
    detail: {
      en: 'Advanced architecture for secure, resilient, and scalable cloud systems.',
      ja: '安全性、可用性、拡張性を備えたクラウド設計の上位資格。',
    },
    date: { en: 'Valid through October 2028', ja: '2028年10月まで有効' },
  },
]

export default function CredentialGallery({ locale = 'en' }: { locale?: Locale }) {
  return (
    <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
      {credentials.map((credential, index) => (
        <article
          key={credential.image}
          className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 ${
            index === 0 ? 'md:col-span-2' : ''
          }`}
        >
          <div
            className={`relative bg-gray-50 dark:bg-gray-800 ${
              index === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'
            }`}
          >
            <Image
              src={credential.image}
              alt={credential.title[locale]}
              fill
              sizes={
                index === 0 ? '(min-width: 768px) 760px, 100vw' : '(min-width: 768px) 380px, 100vw'
              }
              className="object-contain p-3"
            />
          </div>
          <div className="space-y-2 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
              {credential.date[locale]}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {credential.title[locale]}
            </h3>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              {credential.detail[locale]}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
