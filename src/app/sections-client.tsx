/* eslint-disable react/display-name */
'use client'

import nextDynamic from 'next/dynamic'

const Placeholder = () => <div className="h-16" />

const PainPointsSection = nextDynamic(() => import('@/components/sections/pain-points'), {
  loading: Placeholder,
  ssr: false,
})
const DifferentialSection = nextDynamic(() => import('@/components/sections/differential'), {
  loading: Placeholder,
  ssr: false,
})
const SolutionSection = nextDynamic(() => import('@/components/sections/solution'), {
  loading: Placeholder,
  ssr: false,
})
const MethodologySection = nextDynamic(() => import('@/components/sections/methodology'), {
  loading: Placeholder,
  ssr: false,
})
const SocialProofSection = nextDynamic(() => import('@/components/sections/social-proof'), {
  loading: Placeholder,
  ssr: false,
})
const AboutSection = nextDynamic(() => import('@/components/sections/about'), {
  loading: Placeholder,
  ssr: false,
})
const FaqSection = nextDynamic(() => import('@/components/sections/faq'), {
  loading: Placeholder,
  ssr: false,
})

export default function SectionsClient() {
  return (
    <>
      <PainPointsSection />
      <DifferentialSection />
      <SolutionSection />
      <MethodologySection />
      <SocialProofSection />
      <AboutSection />
      <FaqSection />
    </>
  )
}
