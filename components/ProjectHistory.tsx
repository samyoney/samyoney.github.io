import projectsData from '@/data/projectsData'

type Locale = 'en' | 'ja'

interface Props {
  locale?: Locale
}

export const japaneseProjects: Record<string, { title: string; summary: string }> = {
  'アイテック 法人向けクラウド電話サービス': {
    title: 'アイテック 法人向けクラウド電話サービス',
    summary:
      '顧客・関連会社との調整、設計レビュー、障害・セキュリティ対応、受入、本番移行、リリース後の安定化を主導。',
  },
  'Next-generation KS-POS': {
    title: '次世代KS-POS',
    summary:
      '顧客調整、全体設計、周辺機器連携、状態保存、監視、設計資料、試験方針まで一貫してリード。',
  },
  'EDION Business Web Systems': {
    title: 'エディオン向け業務Webシステム',
    summary:
      '複数の業務システムを対象に、要件確認、障害・影響調査、実装レビュー、進捗・リスク管理、安定運用を推進。',
  },
  'Sharp Mobile Application Maintenance': {
    title: 'Sharp向けモバイルアプリ保守',
    summary:
      '大規模Flutterアプリの顧客窓口、コード調査、修正方針、実装レビュー、優先順位調整、品質改善を担当。',
  },
  'Ticketing and Payment Cloud Platform': {
    title: 'チケット・決済クラウド基盤',
    summary:
      '要件整理、API、非機能設計、外部決済連携、チケット確認、QR読取、印刷を含む開発計画を推進。',
  },
  'S-Point Shared Loyalty Platform': {
    title: 'Sポイント共通ポイント基盤',
    summary:
      '要件確認、API・バッチ連携レビュー、日越調整、共通仕様、例外処理を含む複数社連携をリード。',
  },
  'Sharp Field Service Support System': {
    title: 'Sharp向けフィールドサービス支援システム',
    summary:
      '顧客調整、日越開発管理、モバイル・Web改修、端末連携、印刷、運用障害の原因調査を主導。',
  },
  'Seikyo Digital Edition': {
    title: '聖教電子版',
    summary:
      'Android・iOS向けの閲覧・配信機能を設計、実装し、両プラットフォームの画面仕様と動作を統一。',
  },
  'Paris Miki iPad Inventory Application': {
    title: 'パリミキ iPad在庫管理アプリ',
    summary: '店舗向けiPadアプリの在庫検索、確認、更新、リアルタイム同期を設計・実装。',
  },
  'Fatigue Measurement Application': {
    title: '疲労測定アプリ',
    summary:
      'まぶた・瞳孔データによる疲労判定アプリで、立上げ、画像解析、機械学習連携、開発推進を担当。',
  },
  'e-Orico Mobile Security Enhancement': {
    title: 'eオリコ モバイルセキュリティ強化',
    summary:
      '金融モバイルアプリの認証、暗号化、データ保護、自動テストを強化し、安全性と品質を改善。',
  },
  'GMO Click CFD': {
    title: 'GMOクリック CFD',
    summary:
      'リアルタイム価格、チャート、注文、ニュースを扱うCFDアプリの技術方針、設計レビュー、品質、リリースを主導。',
  },
  'Adam byGMO NFT Viewer': {
    title: 'Adam byGMO NFTビューア',
    summary:
      'FlutterによるNFT閲覧アプリの立上げ、画面・画像処理設計、タスク管理、クロスプラットフォーム開発を主導。',
  },
  'GMO Click FXneo for Apple Watch': {
    title: 'GMOクリック FXneo Apple Watch版',
    summary: '価格、建玉、注文、通知を設計・実装し、小型画面に合わせた操作性と性能を最適化。',
  },
  'GMO Financial Mobile Test Automation Platform': {
    title: 'GMOフィナンシャル モバイル自動テスト基盤',
    summary:
      '複数のAndroid・iOS金融アプリ向けに自動テスト基盤を構築・標準化し、手動確認を削減して品質を安定化。',
  },
  'GMO Coin': {
    title: 'GMOコイン',
    summary: '取引、チャート、入出金、通知、二要素認証、暗号化データ管理を設計・実装・改善。',
  },
  'GMO Click FXneo': {
    title: 'GMOクリック FXneo',
    summary: '主要画面、取引機能、API連携、金融データ管理、例外設計、継続的な品質改善を担当。',
  },
  'Regional Pharmacy Search Application': {
    title: '地域薬局検索アプリ',
    summary: '現在地周辺の薬局検索、地図、経路、評価、外部API連携、端末内データ管理を実装。',
  },
  'Viettel Smart Home IoT Platform': {
    title: 'Viettel スマートホームIoT基盤',
    summary:
      '住宅設備を制御するハードウェア回路、MQTTサービス、Androidアプリ、認証、暗号化を開発。',
  },
}

export const japaneseRoles: Record<string, string> = {
  'Bridge SE / Tech Lead': 'ブリッジSE／テックリード',
  'Bridge SE / Senior SE': 'ブリッジSE／シニアSE',
  'Bridge SE': 'ブリッジSE',
  'Senior SE': 'シニアSE',
  'Tech Lead': 'テックリード',
  'Software Engineer': 'ソフトウェアエンジニア',
}

const japaneseMonths: Record<string, number> = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
}

export function japanesePeriod(period: string) {
  return period
    .split(' – ')
    .map((value) => {
      if (value === 'Present') return '現在'
      const [month, year] = value.split(' ')
      return `${year}年${japaneseMonths[month]}月`
    })
    .join('～')
}

export default function ProjectHistory({ locale = 'en' }: Props) {
  return (
    <div className="not-prose mt-6 space-y-4">
      {projectsData.map((project, index) => {
        const japanese = japaneseProjects[project.title]
        const title = locale === 'ja' ? japanese.title : project.title
        const summary = locale === 'ja' ? japanese.summary : project.description
        const period = locale === 'ja' ? japanesePeriod(project.period) : project.period
        const role = locale === 'ja' ? japaneseRoles[project.role] : project.role

        return (
          <article
            key={project.title}
            className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900/70"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-500">
                  {period}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900 dark:text-gray-100">
                  {title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {role}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{summary}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-gray-200/80 px-2 py-1 text-[11px] font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        )
      })}
    </div>
  )
}
