import { Link, useParams } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { teamProfilesBySlug } from "../data/teamProfiles";

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

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${BRAND.purpleSoft}, rgba(255,255,255,0.7))`,
      }}
    >
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full border bg-white shadow-sm"
        style={{ borderColor: BRAND.line }}
      >
        <span className="text-2xl font-semibold" style={{ color: BRAND.ink }}>
          {initials}
        </span>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { person } = useParams();
  const profile = person ? teamProfilesBySlug[person] : undefined;

  if (!profile || profile.bio.length === 0) {
    return (
      <div
        className="min-h-screen pt-20"
        style={{
          backgroundColor: BRAND.bg,
          fontFamily:
            '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
        }}
      >
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className="text-4xl font-light tracking-tight"
              style={{ color: BRAND.ink }}
            >
              Bio not available
            </h1>
            <p className="mt-4" style={{ color: BRAND.muted }}>
              This person does not currently have a published bio page.
            </p>
            <Link
              to="/team"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition"
              style={{ backgroundColor: BRAND.purple }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Team
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-20"
      style={{
        backgroundColor: BRAND.bg,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      <section className="relative overflow-hidden px-6 pt-10 pb-12 md:pt-12 md:pb-14">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute left-10 top-8 h-72 w-72 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
          <div
            className="absolute right-10 top-16 h-72 w-72 rounded-full blur-3xl"
            style={{ background: BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link
            to="/team"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium transition"
            style={{ color: BRAND.muted }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
            <div
              className="self-start overflow-hidden rounded-3xl border bg-white shadow-sm"
              style={{ borderColor: BRAND.line }}
            >
              <div
                className="h-[380px] w-full overflow-hidden"
                style={{ backgroundColor: "rgba(47, 39, 56, 0.04)" }}
              >
                {profile.image ? (
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-full w-full object-cover object-[center_top]"
                  />
                ) : (
                  <InitialsAvatar name={profile.name} />
                )}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <User className="h-6 w-6" style={{ color: BRAND.purpleDark }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: BRAND.purpleDark }}
                >
                  Background
                </span>
              </div>

              <h1
                className="text-4xl font-light leading-tight tracking-tight md:text-5xl"
                style={{ color: BRAND.ink }}
              >
                {profile.name}
              </h1>

              <p
                className="mt-4 text-lg font-medium"
                style={{ color: BRAND.muted }}
              >
                {profile.role}
              </p>

              <div
                className="mt-8 space-y-5 text-base leading-8"
                style={{ color: BRAND.ink }}
              >
                {profile.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}