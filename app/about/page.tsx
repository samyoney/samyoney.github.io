'use client'

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { components } from '@/components/MDXComponents'
import { useLanguage } from '@/components/LanguageProvider'

export default function Page() {
  const { language } = useLanguage()
  const authorSlug = language === 'ja' ? 'default_jp' : 'default'

  const author = allAuthors.find((p) => p.slug === authorSlug) as Authors
  const mainContent = {
    ...coreContent(author),
    avatar: '/static/images/resume-profile.webp',
  }

  return (
    <AuthorLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} components={components} />
    </AuthorLayout>
  )
}
