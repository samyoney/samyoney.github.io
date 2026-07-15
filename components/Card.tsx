import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  period: string
  role: string
  category: string
  description: string
  technologies: string[]
  imgSrc?: string
  href?: string
  linkLabel?: string
}

const Card = ({
  title,
  period,
  role,
  category,
  description,
  technologies,
  imgSrc,
  href,
  linkLabel = 'View public product →',
}: CardProps) => (
  <div className="w-full p-4 lg:w-1/2">
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
      {imgSrc ? (
        <div className="relative h-56 overflow-hidden bg-white">
          <Image
            alt={title}
            src={imgSrc}
            className="object-contain p-3"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      ) : (
        <div className="flex h-44 flex-col justify-end bg-gradient-to-br from-slate-900 via-slate-700 to-primary-700 p-6 text-white">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary-200">
            {category}
          </span>
          <span className="mt-3 text-3xl font-black tracking-tight">SYSTEM CASE STUDY</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-primary-600 dark:bg-primary-950 dark:text-primary-300">
            {category}
          </span>
          <span className="text-gray-500 dark:text-gray-400">{period}</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mt-2 font-semibold text-primary-500">{role}</p>
        <p className="mt-4 flex-1 leading-7 text-gray-600 dark:text-gray-400">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>
        {href && (
          <Link
            href={href}
            className="mt-6 inline-flex font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Learn more about ${title}`}
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </article>
  </div>
)

export default Card
