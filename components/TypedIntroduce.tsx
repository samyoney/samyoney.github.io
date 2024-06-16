'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function TypedIntroduce() {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'Hello, Here is Sam blog!',
        `I've been working as a Mobile developer for 8 years`,
        `I am interested in Flutter, Jetpack, SwiftUI, Kotlin,...`,
        'I am interested in every new technology about IT',
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
