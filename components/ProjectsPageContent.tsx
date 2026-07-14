'use client'

import projectsData from '@/data/projectsData'
import Card from './Card'
import { useLanguage } from './LanguageProvider'
import { japanesePeriod, japaneseProjects, japaneseRoles } from './ProjectHistory'

const japaneseCategories: Record<string, string> = {
  'Cloud Communication': 'クラウド通信',
  'POS Architecture': 'POSアーキテクチャ',
  'Web Operations': 'Web運用',
  'Mobile Platform': 'モバイル基盤',
  'Cloud Platform': 'クラウド基盤',
  'Enterprise Integration': '企業間連携',
  'Field Operations': 'フィールド業務',
  'Digital Publishing': 'デジタル出版',
  'Retail Mobile': '小売モバイル',
  'Computer Vision': '画像認識',
  'Fintech Security': '金融セキュリティ',
  'Fintech Mobile': '金融モバイル',
  'Cross-platform Mobile': 'クロスプラットフォーム',
  'Wearable Fintech': 'ウェアラブル金融',
  'Quality Engineering': '品質エンジニアリング',
  'Crypto Fintech': '暗号資産',
  'FX Trading': 'FX取引',
  'Location Services': '位置情報サービス',
  'IoT Platform': 'IoT基盤',
}

export default function ProjectsPageContent() {
  const { language } = useLanguage()
  const isJapanese = language === 'ja'

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {isJapanese ? 'プロジェクト' : 'Projects'}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {isJapanese
            ? 'モバイル、クラウド、金融、IoT、小売、POSまで、実装からブリッジSE・テックリードとしての推進まで担当した主な案件です。'
            : 'Selected work across mobile, cloud, fintech, IoT, retail, and POS — from hands-on engineering to Bridge SE and Tech Lead ownership.'}
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((project) => {
            const japanese = japaneseProjects[project.title]
            return (
              <Card
                key={project.title}
                title={isJapanese && japanese ? japanese.title : project.title}
                description={isJapanese && japanese ? japanese.summary : project.description}
                period={isJapanese ? japanesePeriod(project.period) : project.period}
                role={isJapanese ? japaneseRoles[project.role] || project.role : project.role}
                category={
                  isJapanese
                    ? japaneseCategories[project.category] || project.category
                    : project.category
                }
                technologies={project.technologies}
                imgSrc={project.imgSrc}
                href={project.href}
                linkLabel={isJapanese ? '公開ページを見る →' : 'View public product →'}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
