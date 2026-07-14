'use client'

import { useLanguage } from './LanguageProvider'

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold tracking-wide text-gray-700 transition hover:border-primary-500 hover:text-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
      aria-label={language === 'en' ? 'Switch to Japanese' : '英語に切り替える'}
    >
      <span className={language === 'en' ? 'text-primary-500' : undefined}>EN</span>
      <span className="px-1 text-gray-400">/</span>
      <span className={language === 'ja' ? 'text-primary-500' : undefined}>日本語</span>
    </button>
  )
}
