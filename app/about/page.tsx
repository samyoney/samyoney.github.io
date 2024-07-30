'use client'

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { useState } from 'react'
import './about_page.css'

export default function Page() {
  const [authorSlug, setAuthorSlug] = useState('default_jp')

  const author = allAuthors.find((p) => p.slug === authorSlug) as Authors
  const mainContent = coreContent(author)

  const toggleAuthor = () => {
    setAuthorSlug((prevSlug) => (prevSlug === 'default' ? 'default_jp' : 'default'))
  }

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="button-container">
          <button onClick={toggleAuthor} className="toggle-button">
            {authorSlug === 'default' ? '履歴書' : 'English Version'}
          </button>
        </div>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
