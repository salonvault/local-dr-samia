"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Results", href: "#services" },
  { label: "Clinic", href: "#studio" },
  { label: "Services", href: "#treatments" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const hero = document.querySelector("#hero");
      const threshold = hero instanceof HTMLElement ? hero.offsetTop + hero.offsetHeight - 90 : window.innerHeight - 90;
      setPastHero(window.scrollY >= threshold);
    };

    updateHeaderTheme();
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-4 md:px-6">
      <div
        className={`mx-auto grid max-w-[1320px] grid-cols-[120px_1fr_auto] items-center gap-4 rounded-full border px-1 ps-4 py-1.5 shadow-[0_18px_46px_rgba(104,31,45,0.14)] backdrop-blur-[18px] backdrop-saturate-150 transition-colors duration-300 md:grid-cols-[170px_1fr_238px] md:px-6 ${
          pastHero
            ? "border-[rgba(156,49,70,0.14)] bg-white/86"
            : "border-white/22 bg-white/12"
        }`}
      >
        <a
          href="#"
          aria-label="Dr Samia Skin Clinic home"
          className={`whitespace-nowrap font-heading text-[22px] font-normal uppercase leading-none tracking-[0.06em] transition-colors ${
            pastHero ? "text-[var(--color-foreground)]" : "text-white"
          }`}
        >
          Dr Samia
        </a>

        <nav
          className={`mx-auto hidden h-9 items-center rounded-full p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors lg:flex ${
            pastHero ? "bg-[rgba(48,37,31,0.06)]" : "bg-white/10"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-label flex h-7 items-center rounded-full px-4 transition ${
                index === 0
                  ? "bg-[var(--color-primary-1)] text-white shadow-[0_12px_28px_rgba(104,31,45,0.18)]"
                  : pastHero
                    ? "text-[var(--color-foreground)]/82 hover:bg-[rgba(223,89,107,0.1)] hover:text-[var(--color-foreground)]"
                    : "text-white/88 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
         
          <a
            href="https://wa.me/923392006332"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-label inline-flex h-9 items-center gap-2.5 rounded-full bg-primary-1 py-1 pl-4 pr-1 text-white shadow-[0_16px_34px_rgba(104,31,45,0.18)] transition hover:bg-[var(--color-primary-2)]"
          >
            Book Appointment
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[var(--color-primary-1)]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
            </span>
          </a>
        </div>

        <Sheet>
          <SheetTrigger
            className={`ms-auto inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors lg:hidden ${
              pastHero
                ? "border-[rgba(156,49,70,0.18)] bg-white/70 text-[var(--color-foreground)]"
                : "border-white/30 bg-white/18 text-white"
            }`}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent className="border-[rgba(156,49,70,0.18)] bg-[var(--warm-cream)] p-5 text-[var(--color-foreground)] shadow-[0_20px_70px_rgba(156,49,70,0.18)]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-primary-1)] text-white">
                DS
              </span>
              <span className="heading-h3 uppercase tracking-[0.05em]">Dr Samia</span>
            </div>

            <nav className="mt-6 grid gap-2">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <a href={item.href} className="para-p2 rounded-[8px] border border-transparent bg-white/64 px-4 py-3 transition hover:border-[rgba(223,89,107,0.3)] hover:text-[var(--color-primary-1)]">
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <SheetClose asChild>
              <a href="https://wa.me/923392006332" target="_blank" rel="noopener noreferrer" className="nav-label mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary-1)] px-5 text-white">
                Book Appointment
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
