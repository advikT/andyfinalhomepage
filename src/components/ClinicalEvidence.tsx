import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Brain,
  ChevronRight,
  FileText,
  FlaskConical,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const BRAND = {
  purple: "#9986bf",
  purpleDark: "#7e6aa7",
  purpleSoft: "rgba(153, 134, 191, 0.12)",
  purpleBorder: "rgba(153, 134, 191, 0.28)",
  orange: "#ce7f57",
  orangeDark: "#b96d46",
  orangeSoft: "rgba(206, 127, 87, 0.12)",
  orangeBorder: "rgba(206, 127, 87, 0.28)",
  ink: "#2f2738",
  muted: "#6e647b",
  line: "rgba(47, 39, 56, 0.10)",
  bg: "#fcfaf8",
  card: "#ffffff",
};

const episcalpHighlights = [
  {
    label: "Study cohort",
    value: "198 patients",
    note: "Routine scalp EEGs from patients with suspected epilepsy and normal initial EEGs.",
  },
  {
    label: "Accuracy",
    value: "93%",
    note: "For definitive high- and low-risk classifications.",
  },
  {
    label: "Sensitivity / Specificity",
    value: "92% / 95%",
    note: "Reported on the current Technology page.",
  },
  {
    label: "Potential misdiagnosis reduction",
    value: "17%",
    note: "Modeled reduction, described as a 68% reduction while preserving clinician review for mid-range cases.",
  },
];

const eztrackHighlights = [
  {
    label: "Regulatory status",
    value: "FDA 510(k)",
    note: "EZTrack is described by Neurologic Solutions as FDA 510(k) cleared.",
  },
  {
    label: "Retrospective study",
    value: "91 subjects",
    note: "Multicenter retrospective study cited on the site.",
  },
  {
    label: "Prediction accuracy",
    value: "76%",
    note: "Compared with 48% for clinicians, as stated on the Technology page.",
  },
  {
    label: "Use case",
    value: "Surgical planning",
    note: "Designed to assist interpretation of intracranial EEG for seizure onset zone localization.",
  },
];

const evidenceSections = [
  {
    id: "episcalp-evidence",
    eyebrow: "EpiScalp Clinical Evidence",
    title: "Diagnostic support from routine scalp EEG",
    icon: Brain,
    accent: "purple",
    summary:
      "EpiScalp is presented by Neurologic Solutions as a diagnostic aid for epilepsy using routine resting-state scalp EEG, including cases with normal initial EEGs. The current Technology page describes a multicenter study in which EpiScalp generated high- and low-risk scores intended to help clinicians distinguish epilepsy from non-epileptic conditions.",
    bullets: [
      "Analyzes routine scalp EEG rather than relying only on obvious epileptiform discharges.",
      "Uses dynamic network modeling and quantitative biomarkers derived from EEG recordings.",
      "Produces a risk score intended to support, not replace, clinician judgment.",
      "Positioned for earlier, more objective diagnostic support in challenging cases.",
    ],
    cards: episcalpHighlights,
    ctaHref: "/episcalp",
    ctaLabel: "Explore EpiScalp",
  },
  {
    id: "eztrack-evidence",
    eyebrow: "EZTrack Clinical Evidence",
    title: "Interpretable seizure localization support",
    icon: Activity,
    accent: "orange",
    summary:
      "EZTrack is presented by Neurologic Solutions as a software tool for analyzing intracranial EEG in focal or multifocal drug-resistant epilepsy. The current site describes it as FDA 510(k) cleared and highlights retrospective evidence showing improved surgical-outcome prediction compared with clinicians alone.",
    bullets: [
      "Converts intracranial EEG into a spatiotemporal fragility heatmap.",
      "Built to assist neurologists and neurosurgeons in surgical planning.",
      "Emphasizes interpretability through visual output rather than a black-box-only result.",
      "Designed to reduce time spent reviewing complex recordings while preserving clinical context.",
    ],
    cards: eztrackHighlights,
    ctaHref: "/eztrack",
    ctaLabel: "Explore EZTrack",
  },
];

const publications = [
  {
    title:
      "Source-sink connectivity: a novel interictal EEG marker for seizure localization",
    venue: "Brain (2022)",
    href: "https://doi.org/10.1093/brain/awac300",
  },
  {
    title: "Neural fragility as an EEG marker of the seizure onset zone",
    venue: "Nature Neuroscience (2021)",
    href: "https://doi.org/10.1038/s41593-021-00901-w",
  },
  {
    title:
      "Linear time-varying model characterizes invasive EEG signals generated from complex epileptic networks",
    venue: "EMBC (2017)",
    href: "https://doi.org/10.1109/EMBC.2017.8037439",
  },
  {
    title:
      "Fragility in Dynamic Networks: Application to Neural Networks in the Epileptic Cortex",
    venue: "Neural Computation (2014)",
    href: "https://doi.org/10.1162/NECO_a_00644",
  },
];

function AccentCard({
  children,
  accent = "purple",
  className = "",
}: {
  children: React.ReactNode;
  accent?: "purple" | "orange";
  className?: string;
}) {
  const isPurple = accent === "purple";

  return (
    <div
      className={`rounded-[2rem] border bg-white ${className}`}
      style={{
        borderColor: isPurple ? BRAND.purpleBorder : BRAND.orangeBorder,
        background: isPurple
          ? "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(153,134,191,0.04) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(206,127,87,0.04) 100%)",
      }}
    >
      {children}
    </div>
  );
}

export default function ClinicalEvidencePage() {
  return (
    <div
      className="min-h-screen pt-24"
      style={{
        backgroundColor: BRAND.bg,
        color: BRAND.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-24 md:pb-18">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-[-4rem] top-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
          <div
            className="absolute right-[-3rem] bottom-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="w-full">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                style={{
                  background: BRAND.purpleSoft,
                  borderColor: BRAND.purpleBorder,
                }}
              >
                <Stethoscope
                  className="h-5 w-5"
                  style={{ color: BRAND.purpleDark }}
                />
              </div>

              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: BRAND.purpleDark }}
              >
                Clinical Evidence
              </span>
            </div>

            <h1
              className="max-w-4xl text-4xl leading-tight md:text-5xl lg:text-6xl"
              style={{ fontWeight: 300 }}
            >
              Evidence supporting
              <span
                className="block italic"
                style={{ color: BRAND.purpleDark }}
              >
                our clinical approach
              </span>
            </h1>

            <p
              className="mt-5 max-w-4xl text-lg leading-8"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              Neurologic Solutions is building quantitative EEG-based tools to
              support epilepsy diagnosis and treatment planning. This page
              summarizes the current evidence presented by the company for
              EpiScalp and EZTrack.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <div
            className="flex flex-wrap gap-3 rounded-[2rem] border p-4"
            style={{
              borderColor: BRAND.line,
              backgroundColor: "rgba(255,255,255,0.78)",
            }}
          >
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: BRAND.purpleBorder,
                background: BRAND.purpleSoft,
                color: BRAND.purpleDark,
              }}
            >
              <BadgeCheck className="h-4 w-4" />
              Overview
            </a>
            <a
              href="#episcalp-evidence"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: BRAND.purpleBorder,
                background: "white",
                color: BRAND.ink,
              }}
            >
              <Brain className="h-4 w-4" />
              EpiScalp
            </a>
            <a
              href="#eztrack-evidence"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: BRAND.orangeBorder,
                background: "white",
                color: BRAND.ink,
              }}
            >
              <Activity className="h-4 w-4" />
              EZTrack
            </a>
            <a
              href="#publications"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: BRAND.line,
                background: "white",
                color: BRAND.ink,
              }}
            >
              <FileText className="h-4 w-4" />
              Publications
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="px-6 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.purpleDark, fontWeight: 600 }}
            >
              Overview
            </div>
            <h2
              className="mt-3 text-3xl leading-tight sm:text-4xl"
              style={{ fontWeight: 300 }}
            >
              Two evidence tracks, two clinical questions
            </h2>
            <p
              className="mt-4 text-base leading-7 sm:text-lg sm:leading-8"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              EpiScalp is positioned around diagnostic support from routine scalp
              EEG. EZTrack is positioned around seizure localization support from
              intracranial EEG for surgical decision-making.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <AccentCard accent="purple" className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: BRAND.purpleSoft }}
                >
                  <Brain className="h-6 w-6" style={{ color: BRAND.purpleDark }} />
                </div>
                <div>
                  <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                    EpiScalp
                  </h3>
                  <p className="text-sm" style={{ color: BRAND.muted }}>
                    Epilepsy diagnosis support
                  </p>
                </div>
              </div>

              <p className="text-base leading-7" style={{ color: BRAND.muted }}>
                Built to turn minutes of routine resting-state scalp EEG into a
                quantitative risk score that may help clinicians identify epilepsy
                even when the initial EEG appears normal.
              </p>
            </AccentCard>

            <AccentCard accent="orange" className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: BRAND.orangeSoft }}
                >
                  <Activity
                    className="h-6 w-6"
                    style={{ color: BRAND.orangeDark }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                    EZTrack
                  </h3>
                  <p className="text-sm" style={{ color: BRAND.muted }}>
                    Seizure localization support
                  </p>
                </div>
              </div>

              <p className="text-base leading-7" style={{ color: BRAND.muted }}>
                Built to help interpret intracranial EEG using neural fragility
                visualizations that support seizure onset zone assessment and
                neurosurgical planning.
              </p>
            </AccentCard>
          </div>
        </div>
      </section>

      {/* Product evidence sections */}
      {evidenceSections.map((section) => {
        const Icon = section.icon;
        const isPurple = section.accent === "purple";

        return (
          <section
            key={section.id}
            id={section.id}
            className="px-6 py-10 sm:py-12"
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        background: isPurple
                          ? BRAND.purpleSoft
                          : BRAND.orangeSoft,
                      }}
                    >
                      <Icon
                        className="h-6 w-6"
                        style={{
                          color: isPurple
                            ? BRAND.purpleDark
                            : BRAND.orangeDark,
                        }}
                      />
                    </div>

                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                      style={{
                        color: isPurple
                          ? BRAND.purpleDark
                          : BRAND.orangeDark,
                      }}
                    >
                      {section.eyebrow}
                    </span>
                  </div>

                  <h2
                    className="text-3xl leading-tight sm:text-4xl"
                    style={{ fontWeight: 300 }}
                  >
                    {section.title}
                  </h2>

                  <p
                    className="mt-5 text-base leading-7 sm:text-lg sm:leading-8"
                    style={{ color: BRAND.muted, fontWeight: 300 }}
                  >
                    {section.summary}
                  </p>

                  <div className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <ShieldCheck
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{
                            color: isPurple
                              ? BRAND.purpleDark
                              : BRAND.orangeDark,
                          }}
                        />
                        <p
                          className="text-sm leading-6 sm:text-base"
                          style={{ color: BRAND.muted }}
                        >
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Link
                      to={section.ctaHref}
                      className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: isPurple
                          ? BRAND.purpleBorder
                          : BRAND.orangeBorder,
                        background: isPurple
                          ? BRAND.purpleSoft
                          : BRAND.orangeSoft,
                        color: isPurple
                          ? BRAND.purpleDark
                          : BRAND.orangeDark,
                      }}
                    >
                      <span>{section.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {section.cards.map((card) => (
                    <AccentCard
                      key={card.label}
                      accent={section.accent as "purple" | "orange"}
                      className="p-6"
                    >
                      <div
                        className="text-[11px] uppercase tracking-[0.18em]"
                        style={{
                          color: isPurple
                            ? BRAND.purpleDark
                            : BRAND.orangeDark,
                          fontWeight: 600,
                        }}
                      >
                        {card.label}
                      </div>
                      <div
                        className="mt-3 text-3xl leading-none"
                        style={{ fontWeight: 300 }}
                      >
                        {card.value}
                      </div>
                      <p
                        className="mt-4 text-sm leading-6"
                        style={{ color: BRAND.muted }}
                      >
                        {card.note}
                      </p>
                    </AccentCard>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Methodology / interpretation */}
      <section className="px-6 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <AccentCard className="p-7">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: BRAND.purpleSoft }}
              >
                <FlaskConical
                  className="h-6 w-6"
                  style={{ color: BRAND.purpleDark }}
                />
              </div>
              <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                Study framing
              </h3>
              <p className="mt-4 text-sm leading-7" style={{ color: BRAND.muted }}>
                This page is written as a clinical-evidence summary, not as an
                independent meta-analysis. The numbers shown are drawn from the
                company’s current public site and related public materials.
              </p>
            </AccentCard>

            <AccentCard className="p-7">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: BRAND.orangeSoft }}
              >
                <BadgeCheck
                  className="h-6 w-6"
                  style={{ color: BRAND.orangeDark }}
                />
              </div>
              <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                Clinical positioning
              </h3>
              <p className="mt-4 text-sm leading-7" style={{ color: BRAND.muted }}>
                The current public language positions both products as decision
                support tools intended to work alongside clinical review, not as
                stand-alone replacements for physician judgment.
              </p>
            </AccentCard>

            <AccentCard className="p-7">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: "rgba(47,39,56,0.06)" }}
              >
                <FileText className="h-6 w-6" style={{ color: BRAND.ink }} />
              </div>
              <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                Next validation layer
              </h3>
              <p className="mt-4 text-sm leading-7" style={{ color: BRAND.muted }}>
                As the site evolves, this section can be extended with prospective
                validation graphics, institution logos, subgroup breakdowns, and
                product-linked publication filters.
              </p>
            </AccentCard>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="px-6 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.purpleDark, fontWeight: 600 }}
            >
              Publications
            </div>
            <h2
              className="mt-3 text-3xl leading-tight sm:text-4xl"
              style={{ fontWeight: 300 }}
            >
              Research behind the technology
            </h2>
            <p
              className="mt-4 text-base leading-7 sm:text-lg sm:leading-8"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              These papers form part of the public research foundation linked from
              the current Neurologic Solutions Technology page.
            </p>
          </div>

          <div className="grid gap-4">
            {publications.map((pub, index) => (
              <a
                key={pub.title}
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="flex flex-col gap-4 rounded-[2rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                  style={{
                    borderColor: BRAND.line,
                    backgroundColor:
                      index % 2 === 0
                        ? "rgba(255,255,255,0.86)"
                        : "rgba(153,134,191,0.03)",
                  }}
                >
                  <div>
                    <h3
                      className="text-xl leading-tight"
                      style={{ color: BRAND.ink, fontWeight: 300 }}
                    >
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm" style={{ color: BRAND.muted }}>
                      {pub.venue}
                    </p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 text-sm"
                    style={{ color: BRAND.purpleDark }}
                  >
                    <span>Open publication</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}