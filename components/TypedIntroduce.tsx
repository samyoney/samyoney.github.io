'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function TypedIntroduce() {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'Bridge SE & Tech Lead at VTI Japan',
        '9+ years across mobile, cloud, IoT and POS',
        'Deep engineering from architecture to delivery',
        'Bridging Japanese customers and offshore teams',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return <span className="text-xl leading-7 text-gray-500 dark:text-gray-300" ref={typedRef}></span>
}
