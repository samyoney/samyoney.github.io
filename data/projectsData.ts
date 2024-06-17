interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'ビットコイン・暗号資産（仮想通貨）取引ならGMOコイン for Android',
    description: `Experience seamless cryptocurrency trading with the GMO Coin app, built with Kotlin for Android. Monitor real-time prices, execute trades swiftly, and manage your digital assets securely. Benefit from advanced features and a user-friendly interface to stay ahead in the crypto market.`,
    imgSrc: '/static/images/android-coin.png',
    href: 'https://apps.apple.com/jp/app/%E3%83%93%E3%83%83%E3%83%88%E3%82%B3%E3%82%A4%E3%83%B3-%E6%9A%97%E5%8F%B7%E8%B3%87%E7%94%A3-%E4%BB%AE%E6%83%B3%E9%80%9A%E8%B2%A8-%E5%8F%96%E5%BC%95%E3%81%AA%E3%82%89gmo%E3%82%B3%E3%82%A4%E3%83%B3/id1388836948',
  },
  {
    title: 'ビットコイン・暗号資産（仮想通貨）取引ならGMOコイン for iOS',
    description: `Experience seamless cryptocurrency trading with the GMO Coin app, built with Swift for iOS. Monitor real-time prices, execute trades swiftly, and manage your digital assets securely. Benefit from advanced features and a user-friendly interface to stay ahead in the crypto market.`,
    imgSrc: '/static/images/ios-coin.png',
    href: 'https://play.google.com/store/apps/details?id=com.gmowallet.mobilewallet&hl=en',
  },
  {
    title: 'GMOクリック CFD for Android',
    description: `Trade CFDs effortlessly with the Click Securities app, built natively with Kotlin for Android. Enjoy real-time market data, intuitive trading features, and seamless portfolio management. Stay ahead in the market with secure, reliable, and fast trading on the go.`,
    imgSrc: '/static/images/android-cfd.png',
    href: 'https://play.google.com/store/apps/details?id=com.click_sec.gmoclickcfd&hl=en',
  },
  {
    title: 'GMOクリック CFD for iOS',
    description: `Trade CFDs effortlessly with the Click Securities app, built natively with Swift for iOS. Enjoy real-time market data, intuitive trading features, and seamless portfolio management. Stay ahead in the market with secure, reliable, and fast trading on the go.`,
    imgSrc: '/static/images/ios-cfd.png',
    href: 'https://apps.apple.com/jp/app/gmo%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF-cfd/id1542314599',
  },
  {
    title: 'GMOクリック FXneo for Apple Watch',
    description: `Stay on top of the Forex market with the Click Securities FXWatch app, designed exclusively for Apple Watch. Receive real-time market updates, monitor currency pairs, and set custom alerts for key market movements. Experience the convenience of managing your Forex trading right from your wrist.`,
    imgSrc: '/static/images/fx-watch.png',
    href: 'https://www.click-sec.com/corp/tool/fxwatch_apple/',
  },
  {
    title: 'GMOクリック FXneo for Android',
    description: `Trade Forex with precision using the Click Securities FX Neo app, developed natively with Kotlin for Android. Access real-time market data, execute trades efficiently, and manage your Forex portfolio with ease. Enjoy a secure, user-friendly trading experience on the go.
`,
    imgSrc: '/static/images/android-fx.png',
    href: 'https://play.google.com/store/apps/details?id=com.click_sec.fxneo',
  },
  {
    title: 'GMOクリック FXneo for iOS',
    description: `Trade Forex with precision using the Click Securities FX Neo app, developed natively with Swift for iOS. Access real-time market data, execute trades efficiently, and manage your Forex portfolio with ease. Enjoy a secure, user-friendly trading experience on the go.
`,
    imgSrc: '/static/images/ios-fx.png',
    href: 'https://apps.apple.com/jp/app/gmo%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF-fxneo/id1436251478',
  },
  {
    title: 'Adam byGMO NFTビューアー for Android',
    description: `Explore the world of Adam with our Flutter app, available on both Android and iOS. Access insights, manage your account, and stay updated with personalized content effortlessly. Experience convenience and connectivity, wherever you are.`,
    imgSrc: '/static/images/android-adam.png',
    href: 'https://play.google.com/store/apps/details?id=jp.adam.AdambyGMO&hl=en_US',
  },
  {
    title: 'Adam byGMO NFTビューアー for iOS',
    description: `Explore the world of Adam with our Flutter app, available on both Android and iOS. Access insights, manage your account, and stay updated with personalized content effortlessly. Experience convenience and connectivity, wherever you are.`,
    imgSrc: '/static/images/ios-adam.png',
    href: 'https://apps.apple.com/jp/app/adam-bygmo-nft%E3%83%93%E3%83%A5%E3%83%BC%E3%82%A2%E3%83%BC/id1611494620',
  },
  {
    title: 'アツラエ パリミキ（iPad）',
    description: `Streamline inventory management for Paris Miki stores with this iPad app. Track stock, scan barcodes, and manage eyewear effortlessly. Perfect for maintaining up-to-date records and enhancing store efficiency.`,
    imgSrc: '/static/images/ipad-paris-miki.png',
    href: 'https://www.paris-miki.co.jp/',
  },
  {
    title: 'eオリコアプリ for Android',
    description: `Manage your Orico account effortlessly with our Android app. View balances, track transactions, make payments, and access exclusive offers on the go. Stay connected with your finances anytime, anywhere.
`,
    imgSrc: '/static/images/orico-android.png',
    href: 'https://play.google.com/store/apps/details?id=jp.co.orico.point.appopgw&hl=en',
  },
  {
    title: 'eオリコアプリ for iOS',
    description: `Manage your Orico account effortlessly with our iOS app. View balances, track transactions, make payments, and access exclusive offers on the go. Stay connected with your finances anytime, anywhere.`,
    imgSrc: '/static/images/orico-ios.png',
    href: 'https://apps.apple.com/jp/app/e%E3%82%AA%E3%83%AA%E3%82%B3%E3%82%A2%E3%83%97%E3%83%AA/id998424815',
  },
  {
    title: '痛みアプリ for iOS',
    description: `Monitor your health with 痛みアプリ, available on iOS (Swift). Utilizing Google Tensor technology, the app analyzes facial data to assess your health status and provide personalized advice. Stay informed about your well-being and receive expert recommendations right on your mobile device.`,
    imgSrc: '/static/images/itami-ios.png',
  },
  {
    title: '痛みアプリ for Android',
    description: `Monitor your health with 痛みアプリ, available on Android (Jetpack Compose). Utilizing Google Tensor technology, the app analyzes facial data to assess your health status and provide personalized advice. Stay informed about your well-being and receive expert recommendations right on your mobile device.`,
    imgSrc: '/static/images/itami-android.png',
  },
]

export default projectsData
