import Image from "next/image";

const pathways = [
  {
    title: "Clearer Skin, Calmer Days",
    image: "/assets/new/care.jpeg",
    alt: "Close-up of skin being assessed for a medical dermatology concern",
  },
  {
    title: "Face Masks & Peels",
    image: "/assets/new/care2.jpeg",
    alt: "Dermatology examination for a mole and skin screening",
  },
  {
    title: "Targeted Laser Treatments",
    image: "/assets/new/care1.jpeg",
    alt: "Laser dermatology treatment performed in a clinical setting",
  },
  
  {
    title: "Subtle, Natural Results",
    image: "/assets/new/care3.jpeg",
    alt: "Consultation for a natural-looking aesthetic dermatology treatment",
  },
];

export default function CarePathwaysSection() {
  return (
    <section id="care" className="bg-[#fff7f4] text-[var(--color-foreground)]">
      <div className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-7">
          <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
            <h2 className="max-w-[620px] font-heading heading-h2 leading-[0.92]">
              Complete{" "}
               <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
              Care
            </span>{" "}
            for<br />Your Skin
            </h2>
            <p className="max-w-[390px] text-[13px] leading-[1.75] text-[var(--color-ink-2)] lg:justify-self-end lg:text-right">
              Explore personalised treatments designed around your comfort, routine, and skin goals—right here in Garden Town Phase 3, Gujranwala.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:h-[min(610px,68vh)] lg:flex-row">
            {pathways.map((pathway) => (
              <article
                key={pathway.title}
                className="group relative min-h-[430px] overflow-hidden rounded-[20px] bg-[#33261f] transition-all duration-[1200ms] ease-in-out lg:min-h-0 lg:min-w-[150px] lg:flex-[1_1_0%] lg:hover:flex-[2.4_1_0%]"
              >
                <Image
                  src={pathway.image}
                  alt={pathway.alt}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-in-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,17,13,0.02)_30%,rgba(23,17,13,0.78)_100%)]" />

                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 lg:p-6">
                  <h3 className="max-w-[290px] font-heading text-[clamp(24px,2vw,32px)] leading-[1] text-white">
                    {pathway.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
