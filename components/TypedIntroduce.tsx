'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import type { Language } from './LanguageProvider'

export function TypedIntroduce({ language = 'en' }: { language?: Language }) {
  const typedRef = useRef(null)

  useEffect(() => {
    const strings =
      language === 'ja'
        ? [
            'VTI JapanのブリッジSE／テックリード',
            'モバイル、クラウド、IoT、POSで9年以上の経験',
            '設計からリリースまで現場に近い技術推進',
            '日本のお客様とオフショアチームをつなぐ',
          ]
        : [
            'Bridge SE & Tech Lead at VTI Japan',
            '9+ years across mobile, cloud, IoT and POS',
            'Deep engineering from architecture to delivery',
            'Bridging Japanese customers and offshore teams',
          ]
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [language])

  return <span className="text-xl leading-7 text-gray-500 dark:text-gray-300" ref={typedRef}></span>
}
