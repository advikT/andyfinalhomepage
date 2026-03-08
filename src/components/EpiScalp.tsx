import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
  accent?: string;
};

export default function EpiScalpSnapSteps() {
  // ✅ Auto-measure navbar height
  const [NAV_OFFSET, setNavOffset] = useState(96);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const update = () => setNavOffset((nav as HTMLElement).offsetHeight);
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const steps: Step[] = [
    {
      number: "01",
      title: "Capture EEG and preprocess",
      description:
        "Import EEG recordings and run a short preprocessing pipeline to produce clean, analysis-ready signals for fragility computation.",
      image:
        "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1600",
      accent: "rgba(0,0,0,0.10)",
    },
    {
      number: "02",
      title: "Compute neural fragility",
      description:
        "EpiScalp generates interpretable spatio-temporal heatmaps and summary overlays to highlight regions of potential surgical interest.",
      image:
        "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1600",
      accent: "rgba(0,0,0,0.10)",
    },
    {
      number: "03",
      title: "Review, export, and collaborate",
      description:
        "Review outputs quickly, export figures and summaries, and bring results into clinical discussion and planning workflows.",
      image:
        "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1600",
      accent: "rgba(0,0,0,0.10)",
    },
  ];

  // ✅ 5 cards total: hero (1) + steps (3) + final CTA (1)
  const totalSections = 1 + steps.length + 1;

  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (!visible) return;

        const idx = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { root, threshold: [0.6, 0.75, 0.9] }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();

      const next =
        e.key === "ArrowDown"
          ? Math.min(activeIndex + 1, totalSections - 1)
          : Math.max(activeIndex - 1, 0);

      sectionRefs.current[next]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, totalSections]);

  const motionBase =
    "will-change-transform will-change-opacity transition-[transform,opacity] duration-[1150ms] ease-[cubic-bezier(.22,1,.36,1)]";

  const containerClass = "max-w-7xl mx-auto h-full";
  const gridClass =
    "h-full grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-16 lg:gap-24 items-center py-12";

  // ✅ REAL FIX:
  // - scroller fills the viewport (100dvh)
  // - each snap section is viewport minus nav height
  const viewportHeight = "100dvh";
  const sectionHeight = `calc(${viewportHeight} - ${NAV_OFFSET}px)`;

  return (
    <main className="text-black bg-[#fbfbf8]">
      <div
        ref={scrollerRef}
        className="w-full overflow-y-auto overscroll-y-contain scroll-smooth snap-y snap-mandatory bg-[#fbfbf8]"
        style={{ height: viewportHeight }} // ✅ fill screen => no white bar
      >
        {/* =========================
            0) HERO / TITLE SLIDE (SWAPPED)
           ========================= */}
        <section
          data-index={0}
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="snap-start"
          style={{ height: sectionHeight }}
        >
          <div className="relative h-full">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(900px 520px at 20% 25%, rgba(0,0,0,0.07), transparent 60%), radial-gradient(900px 520px at 85% 70%, rgba(0,0,0,0.06), transparent 60%)",
              }}
            />

            <div className="h-full px-6 lg:px-10">
              <div className={`${containerClass} flex items-center h-full`}>
                <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* ✅ SWAPPED: image LEFT on lg */}
                  <div
                    className={[
                      motionBase,
                      "lg:order-1",
                      activeIndex === 0
                        ? "opacity-100 translate-y-0"
                        : "opacity-60 -translate-y-6",
                    ].join(" ")}
                  >
                    <div className="rounded-3xl overflow-hidden border border-black/10 bg-white/70 backdrop-blur shadow-sm">
                      <div className="relative aspect-[16/10] w-full">
                        <img
                          src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt="EpiScalp preview"
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute left-6 bottom-5 right-6">
                          <div className="text-white text-lg font-semibold">
                            Clear, interpretable outputs
                          </div>
                          <div className="mt-1 text-white/80 text-sm">
                            Visuals built for fast scanning and discussion.
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="text-sm font-semibold">
                          What EpiScalp produces
                        </div>
                        <div className="mt-2 text-sm text-black/70 leading-relaxed">
                          Spatio-temporal heatmaps, overlays, and summaries that
                          help highlight regions of potential interest.
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-black/45">
                      Tip: scroll / trackpad to snap through sections.
                    </div>
                  </div>

                  {/* ✅ SWAPPED: text RIGHT on lg */}
                  <div
                    className={[
                      motionBase,
                      "lg:order-2",
                      activeIndex === 0
                        ? "opacity-100 translate-y-0"
                        : "opacity-60 translate-y-6",
                    ].join(" ")}
                  >
                    <div className="text-[11px] tracking-[0.22em] uppercase text-black/55">
                      Product
                    </div>

                    <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
                      EpiScalp
                    </h1>

                    <p className="mt-5 text-black/70 text-lg leading-relaxed max-w-xl">
                      Simplified EEG fragility insights to support epilepsy
                      surgical planning with clear, interpretable spatio-temporal
                      visuals.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                      <Link
                        to="/request-demo"
                        className="inline-flex items-center rounded-full px-6 py-3 bg-black text-white text-sm hover:opacity-90 transition"
                      >
                        Request demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>

                      <button
                        onClick={() =>
                          sectionRefs.current[1]?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                        className="inline-flex items-center rounded-full px-6 py-3 border border-black/15 text-sm hover:bg-black/5 transition"
                      >
                        How it works
                      </button>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2">
                      {[
                        "Minutes to results",
                        "Heatmaps + overlays",
                        "Designed for review",
                        "FDA 510(k) cleared",
                      ].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-black/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10 flex items-center gap-2">
                      {Array.from({ length: totalSections }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            sectionRefs.current[i]?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                          }
                          className={[
                            "h-2 rounded-full transition-all duration-300",
                            i === activeIndex
                              ? "w-10 bg-black/70"
                              : "w-2 bg-black/25 hover:bg-black/35",
                          ].join(" ")}
                          aria-label={`Go to section ${i + 1}`}
                        />
                      ))}
                      <div className="ml-3 text-xs text-black/45 font-mono">
                        {activeIndex + 1}/{totalSections}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            1..N) STEP SECTIONS (SWAPPED)
           ========================= */}
        {steps.map((step, idx) => {
          const sectionIndex = idx + 1;
          const isActive = sectionIndex === activeIndex;

          return (
            <section
              key={step.number}
              data-index={sectionIndex}
              ref={(el) => {
                sectionRefs.current[sectionIndex] = el;
              }}
              className="snap-start"
              style={{ height: sectionHeight }}
            >
              <div className="relative h-full">
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{
                    background:
                      idx % 2 === 0
                        ? "radial-gradient(900px 500px at 12% 22%, rgba(0,0,0,0.06), transparent 60%)"
                        : "radial-gradient(900px 500px at 88% 24%, rgba(0,0,0,0.06), transparent 60%)",
                  }}
                />

                <div className="h-full px-6 lg:px-10">
                  <div className={containerClass}>
                    <div className={gridClass}>
                      {/* ✅ SWAPPED: IMAGE → LEFT */}
                      <div
                        className={[
                          motionBase,
                          "lg:order-1 lg:pr-6",
                          isActive
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-60 -translate-y-6 scale-[0.985]",
                        ].join(" ")}
                      >
                        <div className="rounded-3xl overflow-hidden border border-black/10 bg-white/70 backdrop-blur shadow-sm">
                          <div className="relative aspect-[16/10] w-full">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="absolute inset-0 h-full w-full object-cover"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                background:
                                  step.accent ?? "rgba(0,0,0,0.08)",
                              }}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />

                            <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/80 backdrop-blur px-3 py-1">
                              <div className="text-xs font-mono text-black/60">
                                {step.number}
                              </div>
                            </div>

                            <div className="absolute left-6 bottom-5 right-6">
                              <div className="text-white text-lg font-semibold">
                                {step.title}
                              </div>
                              <div className="mt-1 text-white/80 text-sm">
                                Interpretable visuals for quick review.
                              </div>
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="text-sm font-semibold">
                              What you see
                            </div>
                            <div className="mt-2 text-sm text-black/70 leading-relaxed">
                              Clean, consistent output that’s easy to scan and
                              share in clinical discussion.
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 text-xs text-black/45">
                          Tip: use mouse wheel / trackpad, or Arrow Up / Arrow
                          Down.
                        </div>
                      </div>

                      {/* ✅ SWAPPED: TEXT → RIGHT */}
                      <div
                        className={[
                          motionBase,
                          "lg:order-2 lg:pl-6",
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-45 translate-y-6",
                        ].join(" ")}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-[11px] tracking-[0.22em] uppercase text-black/55">
                            How it works
                          </div>
                          <span className="h-px flex-1 bg-black/10" />
                        </div>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1">
                          <div className="text-xs font-mono text-black/60">
                            Step {step.number}
                          </div>
                        </div>

                        <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                          {step.title}
                        </h2>

                        <p className="mt-5 text-black/70 text-lg leading-relaxed max-w-xl">
                          {step.description}
                        </p>

                        <div className="mt-9 flex items-center gap-4">
                          <Link
                            to="/request-demo"
                            className="inline-flex items-center rounded-full px-5 py-2.5 bg-black text-white text-sm hover:opacity-90 transition"
                          >
                            Request demo <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>

                          <Link
                            to="/support"
                            className="inline-flex items-center rounded-full px-5 py-2.5 border border-black/15 text-sm hover:bg-black/5 transition"
                          >
                            Learn more
                          </Link>
                        </div>

                        <div className="mt-10 flex items-center gap-2">
                          {Array.from({ length: totalSections }).map((_, i) => (
                            <button
                              key={i}
                              onClick={() =>
                                sectionRefs.current[i]?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                })
                              }
                              className={[
                                "h-2 rounded-full transition-all duration-300",
                                i === activeIndex
                                  ? "w-10 bg-black/70"
                                  : "w-2 bg-black/25 hover:bg-black/35",
                              ].join(" ")}
                              aria-label={`Go to section ${i + 1}`}
                            />
                          ))}
                          <div className="ml-3 text-xs text-black/45 font-mono">
                            {activeIndex + 1}/{totalSections}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* =========================
            FINAL CTA (NOT swapped) + Footer inside (NOT a snap)
           ========================= */}
        <section
          data-index={steps.length + 1}
          ref={(el) => {
            sectionRefs.current[steps.length + 1] = el;
          }}
          className="snap-start"
          style={{ height: sectionHeight }}
        >
          <div className="h-full flex flex-col bg-[#fbfbf8]">
            {/* content area */}
            <div className="flex-1 px-6 lg:px-10">
              <div className={`${containerClass} h-full flex items-center py-12`}>
                <div className="w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <div
                    className={[
                      motionBase,
                      activeIndex === steps.length + 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-60 translate-y-6",
                    ].join(" ")}
                  >
                    <div className="text-[11px] tracking-[0.22em] uppercase text-black/55">
                      Next
                    </div>
                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                      See EpiScalp in action.
                    </h2>
                    <p className="mt-4 text-black/70 text-lg leading-relaxed max-w-xl">
                      Request a demo or browse clinical evidence and publications.
                    </p>
                    <div className="mt-9 flex gap-4">
                      <Link
                        to="/request-demo"
                        className="inline-flex items-center rounded-full px-5 py-2.5 bg-black text-white text-sm hover:opacity-90 transition"
                      >
                        Request demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        to="/clinical-evidence"
                        className="inline-flex items-center rounded-full px-5 py-2.5 border border-black/15 text-sm hover:bg-black/5 transition"
                      >
                        Clinical evidence
                      </Link>
                    </div>

                    <div className="mt-10 flex items-center gap-2">
                      {Array.from({ length: totalSections }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            sectionRefs.current[i]?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                          }
                          className={[
                            "h-2 rounded-full transition-all duration-300",
                            i === activeIndex
                              ? "w-10 bg-black/70"
                              : "w-2 bg-black/25 hover:bg-black/35",
                          ].join(" ")}
                          aria-label={`Go to section ${i + 1}`}
                        />
                      ))}
                      <div className="ml-3 text-xs text-black/45 font-mono">
                        {activeIndex + 1}/{totalSections}
                      </div>
                    </div>
                  </div>

                  <div
                    className={[
                      motionBase,
                      activeIndex === steps.length + 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-60 -translate-y-6",
                    ].join(" ")}
                  >
                    <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-7">
                      <div className="text-sm font-semibold">What you’ll get</div>
                      <div className="mt-4 space-y-3 text-sm text-black/70">
                        <div>• Walkthrough of the workflow</div>
                        <div>• Example outputs and overlays</div>
                        <div>• Deployment + support discussion</div>
                      </div>
                      <div className="mt-6 pt-5 border-t border-black/10">
                        <div className="text-xs uppercase tracking-[0.18em] text-black/55">
                          Resources
                        </div>
                        <div className="mt-2 flex gap-4 text-sm">
                          <Link
                            to="/publications"
                            className="underline underline-offset-4 hover:opacity-80"
                          >
                            Publications
                          </Link>
                          <Link
                            to="/support"
                            className="underline underline-offset-4 hover:opacity-80"
                          >
                            Support
                          </Link>
                          <Link
                            to="/contact"
                            className="underline underline-offset-4 hover:opacity-80"
                          >
                            Contact
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* footer is part of last snap, not its own snap */}
            <Footer />
          </div>
        </section>
      </div>
    </main>
  );
}
