import Image from "next/image";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

const textReviews = [
  {
    name: "Google rating",
    service: "5.0 out of 5",
    image: "/assets/new/person1.jpeg",
    text: "Dr Samia Skin Clinic has a 5.0 average rating across 30 public reviews.",
  },
  {
    name: "Patient feedback",
    service: "30 public reviews",
    image: "/assets/new/person2.jpeg",
    text: "The clinic’s public review profile reflects consistently positive patient experiences.",
  },
  {
    name: "Local skin clinic",
    service: "Garden Town, Gujranwala",
    image: "/assets/new/person4.jpeg",
    text: "Consultation-led skin, hair, laser, and aesthetic care is available close to home in Gujranwala.",
  },
  {
    name: "Book with Dr Samia",
    service: "WhatsApp appointments",
    image: "/assets/new/person3.jpeg",
    text: "Message +92 339 2006332 to ask about a treatment, confirm availability, or arrange your visit.",
  },
];

const imageCards = [
  { name: "Acne & Scar Care", service: "Treatment highlight", image: "/assets/new/review1.jpeg" },
  { name: "HydraFacial", service: "Treatment highlight", image: "/assets/new/review3.jpeg" },
  { name: "Melasma Care", service: "Treatment highlight", image: "/assets/new/review_4.jpeg" },
  { name: "Laser Hair Removal", service: "Treatment highlight", image: "/assets/new/review_2.jpeg" },
];

function ReviewCard({ name, service, image, text }: { name: string; service: string; image: string; text: string }) {
  return (
    <article className="rounded-[8px] border border-[rgba(223,89,107,0.18)] bg-[linear-gradient(135deg,#fff9f7_0%,#fbe9e6_48%,#f8dfe0_100%)] p-5 shadow-[0_14px_34px_rgba(156,49,70,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(156,49,70,0.14)]">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[var(--color-primary-3)]">
          <Image src={image} alt={`${name} portrait`} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <p className="text-[13px] font-extrabold text-[var(--color-foreground)]">{name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">{service}</p>
        </div>
      </div>
      <div className="mt-5 flex gap-1 text-[var(--color-primary-1)]" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <p className="mt-5 text-[12px] leading-[1.7] text-[var(--color-ink-2)]">{text}</p>
    </article>
  );
}

function ImageReviewCard({ name, service, image, tall = false }: { name: string; service: string; image: string; tall?: boolean }) {
  return (
    <article className={`relative overflow-hidden rounded-[8px] bg-[var(--color-primary-3)] shadow-[0_14px_34px_rgba(156,49,70,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(156,49,70,0.18)] ${tall ? "min-h-[410px]" : "min-h-[280px]"}`}>
      <Image src={image} alt={`${name} at Dr Samia Skin Clinic`} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(48,37,31,0)_38%,rgba(48,37,31,0.68)_100%)]" />
      <div className="absolute bottom-5 left-5 right-5 text-white">
        <p className="text-[14px] font-extrabold">{name}</p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em] text-white/74">
          {service}
        </p>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[var(--warm-cream)] py-14 text-[var(--color-foreground)] lg:py-20">
      <div className="container">
        <div className="mx-auto mb-9 max-w-[760px] text-center">
          <p className="eyebrow">Reviews</p>
          <div className="mt-3">
            <Reveal>
              <h2 className="heading-h2 mx-auto max-w-[660px]">
                Rated 5.0 by Gujranwala patients seeking{" "}
                <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
                  clearer guidance
                </span>
                .
              </h2>
            </Reveal>
            
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-3">
            <ReviewCard {...textReviews[3]} />
            <ImageReviewCard {...imageCards[0]} tall />
          </div>
          <div className="grid gap-3">
            <ImageReviewCard {...imageCards[1]} tall />
            <ReviewCard {...textReviews[1]} />
          </div>
          <div className="grid gap-3">
            <ReviewCard {...textReviews[2]} />
            <ImageReviewCard {...imageCards[2]} tall />
          </div>
          <div className="grid gap-3">
            <ImageReviewCard {...imageCards[3]} tall />
            <ReviewCard {...textReviews[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}
