'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import LanguageSwitch from './LanguageSwitch'
import { useLanguage } from './LanguageProvider'

const japaneseNavTitles: Record<string, string> = {
  Home: 'ホーム',
  Blog: 'ブログ',
  Projects: 'プロジェクト',
  Resume: '経歴',
}

const Header = () => {
  const { language } = useLanguage()

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="group flex items-center gap-3">
            <Image
              className="h-11 w-11 transition-transform duration-200 group-hover:scale-105"
              src={Logo}
              alt="SAM mascot"
              width={44}
              height={44}
              priority
            />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden text-xl font-bold tracking-[0.16em] text-gray-950 dark:text-white sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {language === 'ja' ? japaneseNavTitles[link.title] : link.title}
            </Link>
          ))}
        <LanguageSwitch />
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
