
import Hero from "@/components/Home/Hero"
import ExperienceSection from "@/components/Home/ExperienceSection"
import ExpertiseStripSection from "@/components/Home/ExpertiseStripSection"
import StepsSection from "@/components/Home/StepsSection"
import ProcessFaqSection from "@/components/Home/ProcessFaqSection"
import TestimonialsSection from "@/components/Home/TestimonialsSection"
import GallerySection from "@/components/Home/GallerySection"
import ServicesSection from "@/components/Home/ServicesSection"
import CarePathwaysSection from "@/components/Home/CarePathwaysSection"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import WhatsAppFloat from "@/components/Layout/WhatsAppFloat"
import { BASE_URL } from "@/app/lib/config"

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${BASE_URL}/#clinic`,
  name: "Dr Samia Skin Clinic",
  url: BASE_URL,
  image: `${BASE_URL}/assets/new/girl_hero.png`,
  telephone: "+92 339 2006332",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Boulevard, Garden Town Phase 3",
    addressLocality: "Gujranwala",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  sameAs: ["https://www.instagram.com/drsamiaskinclinic/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "30",
    bestRating: "5",
  },
}

function page() {
  return (
    <div className="atelier-shell min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clinicJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <ExpertiseStripSection />
        <CarePathwaysSection />
        <ExperienceSection />
        <ServicesSection />
        <GallerySection />
        <StepsSection />
        <ProcessFaqSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default page
