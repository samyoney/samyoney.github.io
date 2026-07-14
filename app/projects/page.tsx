import ProjectsPageContent from '@/components/ProjectsPageContent'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return <ProjectsPageContent />
}
