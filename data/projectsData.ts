interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GMOクリック FXneo-Android',
    description: `https://www.click-sec.com/corp/tool/fxneo_app/`,
    imgSrc: '/static/images/android-fx.png',
    href: 'https://play.google.com/store/apps/details?id=com.click_sec.fxneo',
  },
  {
    title: 'GMOクリック FXneo-iOS',
    description: `https://www.click-sec.com/corp/tool/fxneo_app/`,
    imgSrc: '/static/images/ios-fx.png',
    href: 'https://apps.apple.com/jp/app/gmo%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF-fxneo/id1436251478',
  },
]

export default projectsData
