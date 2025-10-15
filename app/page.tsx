import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhatIDoSection } from "@/components/what-i-do-section"
import { SkillsSection } from "@/components/skills-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
