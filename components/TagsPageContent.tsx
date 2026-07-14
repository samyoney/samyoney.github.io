'use client'

import Link from './Link'
import Tag from './Tag'
import { slug } from 'github-slugger'
import { useLanguage } from './LanguageProvider'

export default function TagsPageContent({ tagCounts }: { tagCounts: Record<string, number> }) {
  const { language } = useLanguage()
  const isJapanese = language === 'ja'
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
          {isJapanese ? 'タグ' : 'Tags'}
        </h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        {sortedTags.length === 0 && (isJapanese ? 'タグがありません。' : 'No tags found.')}
        {sortedTags.map((tag) => (
          <div key={tag} className="mb-2 mr-5 mt-2">
            <Tag text={tag} />
            <Link
              href={`/tags/${slug(tag)}`}
              className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
              aria-label={isJapanese ? `${tag}の記事を見る` : `View posts tagged ${tag}`}
            >
              {` (${tagCounts[tag]})`}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
