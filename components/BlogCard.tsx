import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { Authors, Blog } from 'contentlayer/generated'
import Image from 'next/image'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'

export default function BlogCard({
  post,
  author,
}: {
  post: Blog | CoreContent<Blog>
  author: Authors
}) {
  const { slug, date, title, summary, tags, images } = post

  return (
    <div className="container">
      <div className="lg:-mx-6 lg:flex lg:items-center">
        <div className="relative h-72 w-full overflow-hidden rounded-xl border-[0.5px] border-gray-300/40 bg-clip-border lg:mx-6 lg:w-1/2">
          <Link
            className="relative block h-72 w-full overflow-hidden rounded-xl bg-white bg-clip-border"
            href={`/blog/${slug}`}
            aria-label={`Read "${title}"`}
          >
            <Image
              className="h-72 w-full"
              sizes="auto"
              src={Array.isArray(images) ? images[0] : '/static/images/banner.jpeg'}
              alt={slug}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </div>

        <div className="mt-2 flex min-h-full flex-col items-start justify-start lg:mt-0 lg:h-72 lg:w-1/2">
          <div className="flex-1">
            <p className="block text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              {title}
            </p>
            <div className="mt-4 flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>

            <p className=" prose mt-3 max-w-none text-sm text-gray-500 dark:text-gray-400 ">
              {summary}
            </p>
            <button className="btn group mt-3 flex items-center bg-transparent text-base font-medium leading-6 tracking-widest">
              <span className="relative pb-1 pr-2 text-white after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-500 after:transition-transform after:duration-500 after:ease-out after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 ">
                <Link
                  href={`/blog/${slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Read "${title}"`}
                >
                  Read more
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

          <div className="my-2 mt-4 flex w-full items-center justify-between">
            <div className="flex items-center ">
              <div className="relative h-10 w-10 rounded-full bg-slate-600">
                <Image
                  className="static h-10 w-10 rounded-full"
                  sizes="auto"
                  src={author.avatar as string}
                  alt={author.name}
                  fill
                  style={{ objectFit: 'cover' }}
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
                <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
