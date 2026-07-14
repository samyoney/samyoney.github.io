'use client'

import { ReactNode } from 'react'
import { Language, useLanguage } from './LanguageProvider'

export default function LocalizedContent({
  language: contentLanguage,
  children,
}: {
  language: Language
  children: ReactNode
}) {
  const { language } = useLanguage()
  if (language !== contentLanguage) return null
  return <>{children}</>
}
