'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { TypedIntroduce } from '@/components/TypedIntroduce'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'
import SEO from '@/components/SEO'
import { useLanguage } from '@/components/LanguageProvider'

const MAX_DISPLAY = 5

const FEATURED_POST_SLUGS = ['jetpack-compose-clean-base-blog', 'swift-clean-base-blog']

const INTERESTED_TECH_TAGS = [
  'Bridge SE',
  'Tech Lead',
  'Mobile Architecture',
  'Flutter',
  '.NET MAUI',
  'AWS',
]

export default function Home({ posts, author }) {
  const { language } = useLanguage()
  const isJapanese = language === 'ja'
  const featuredPosts = [
    ...FEATURED_POST_SLUGS.map((slug) => posts.find((post) => post.slug === slug)).filter(Boolean),
    ...posts.filter((post) => !FEATURED_POST_SLUGS.includes(post.slug)),
  ]

  return (
    <>
      <SEO />
      <div className="">
        <div className="grid items-center gap-10 py-10 md:grid-cols-[minmax(0,1fr)_280px] md:py-16">
          <div className="flex flex-col items-start">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-primary-500">
              Nguyen Hong Son · Sam
            </p>
            <h1 className="bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent dark:from-gray-100 dark:to-slate-400 sm:text-6xl">
              {isJapanese ? 'ブリッジSE／テックリード' : 'Bridge SE & Tech Lead'}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              {isJapanese
                ? '顧客調整から設計、技術判断、品質・リリース管理まで、モバイル、クラウド、IoT、POS開発を一貫して推進しています。'
                : 'I lead mobile, cloud, IoT, and POS development from customer alignment and architecture to review, quality, and delivery.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {INTERESTED_TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-500 dark:border-gray-700 dark:bg-gray-900"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="min-h-16 py-6">
              <TypedIntroduce language={language} />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-primary-500 px-5 py-2.5 font-semibold text-white transition hover:bg-primary-600"
              >
                {isJapanese ? 'プロフィールを見る' : 'View profile'}
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 transition hover:border-primary-500 hover:text-primary-500 dark:border-gray-700 dark:text-gray-200"
              >
                {isJapanese ? 'プロジェクトを見る' : 'Explore projects'}
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[280px]">
            <div className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-br from-primary-400 via-purple-400 to-sky-400 p-1 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-gray-900">
                <Image
                  src={author.avatar as string}
                  alt="Nguyen Hong Son avatar"
                  fill
                  priority
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 pb-2 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10">
            {isJapanese ? 'おすすめの記事' : 'Featured Articles'}
          </h1>
        </div>

        <ul className=" grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {/* <ul className="flex-col md:flex-row gap-6"> */}
          {!posts.length && (isJapanese ? '記事がありません。' : 'No posts found.')}
          {featuredPosts.slice(0, MAX_DISPLAY).map((post, index) => {
            const { slug, date, title, titleJa, summary, summaryJa, tags, images } = post
            const displayTitle = isJapanese && titleJa ? titleJa : title
            const displaySummary = isJapanese && summaryJa ? summaryJa : summary
            const isLastElement = index === MAX_DISPLAY - 1

            return (
              <li
                key={slug}
                className={`${isLastElement ? 'hidden md:block lg:block xl:hidden' : ''}`}
              >
                <div className="container flex flex-col items-center  justify-center rounded-xl bg-slate-200 p-4 shadow-md dark:bg-slate-700">
                  <div className="relative mb-4 h-72 w-full overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
                    {Array.isArray(images) && (
                      <Link
                        className="relative block h-72 w-auto overflow-hidden rounded-xl bg-clip-border"
                        href={`/blog/${slug}`}
                        aria-label={`${isJapanese ? '読む' : 'Read'} "${displayTitle}"`}
                      >
                        <Image
                          className="h-auto w-full"
                          sizes="auto"
                          src={Array.isArray(images) ? images[0] : ''}
                          alt={slug}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </Link>
                    )}
                  </div>

                  <div className="mt-2 flex min-h-full w-full flex-col items-start justify-start lg:mt-0 lg:h-72">
                    <div className="flex-1">
                      <p className="block text-xl font-semibold text-gray-800 dark:text-white md:text-xl">
                        {displayTitle}
                      </p>
                      <div className="mt-4 flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>

                      <p className=" prose mt-3 max-w-none text-sm text-gray-500 dark:text-gray-400 ">
                        {displaySummary}
                      </p>
                    </div>
                    <button className="btn group mt-3 flex items-center bg-transparent text-base font-medium leading-6 tracking-widest">
                      <span className="relative pb-1 pr-2 text-white after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-500 after:transition-transform after:duration-500 after:ease-out after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 ">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`${isJapanese ? '読む' : 'Read'} "${displayTitle}"`}
                        >
                          {isJapanese ? '続きを読む' : 'Read more'}
                        </Link>
                      </span>
                      <svg
                        viewBox="0 0 46 16"
                        height="8"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                        id="arrow-horizontal"
                        className="group-hover:fill-primary-5000 mb-1 ml-1 -translate-x-2 fill-primary-500 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 dark:fill-primary-400"
                      >
                        <path
                          transform="translate(30)"
                          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                          data-name="Path 10"
                          id="Path_10"
                        ></path>
                      </svg>
                    </button>

                    <div className="my-2 mt-4 flex w-full items-center justify-between">
                      <div className="flex items-center ">
                        <div className="relative h-10 w-10 rounded-full bg-slate-600">
                          <Image
                            sizes="auto"
                            src={author.avatar as string}
                            width={38}
                            height={38}
                            alt="avatar"
                            className="h-10 w-10 rounded-full"
                          />
                        </div>
                        <dl className="ml-2 whitespace-nowrap text-sm font-medium leading-5">
                          <dt className="sr-only">Name</dt>
                          <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                          <dt className="sr-only">Github</dt>
                          <dd>
                            {author.github && (
                              <Link
                                href={author.github as string}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              >
                                {author?.github?.replace('https://github.com/', '@')}
                              </Link>
                            )}
                          </dd>
                        </dl>
                      </div>

                      <div className="flex h-full items-end">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-[10px] font-medium leading-4 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>
                              {formatDate(date, isJapanese ? 'ja-JP' : siteMetadata.locale)}
                            </time>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <button className="btn group mt-3 flex items-center bg-transparent text-base font-medium leading-6 tracking-widest">
            <span className="relative pb-1 pr-2 text-white after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-500 after:transition-transform after:duration-500 after:ease-out after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 ">
              <Link
                href={`/blog`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`All Post`}
              >
                {isJapanese ? 'すべての記事' : 'All Posts'}
              </Link>
            </span>
            <svg
              viewBox="0 0 46 16"
              height="8"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
              className="group-hover:fill-primary-5000 mb-1 ml-1 -translate-x-2 fill-primary-500 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 dark:fill-primary-400"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
