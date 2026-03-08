import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Person = {
  name: string;
  role: string;
  image?: string;
  profileLink: string;
};

type Section = {
  heading: string;
  people: Person[];
};

const sections: Section[] = [
  {
    heading: "Team",
    people: [
      {
        name: "Andrew Gotshalk",
        role: "CEO",
        image: "/AndrewG.jpg",
        profileLink: "/about/andrew-gotshalk",
      },
      {
        name: "Sridevi Sarma, PhD",
        role: "President and Co-Founder",
        image: "/SrideviS.jpg",
        profileLink: "/about/sridevi-sarma",
      },
      {
        name: "Jorge Gonzelez-Martinez, MD PhD",
        role: "CMO and Co-Founder",
        image: "/JorgeG.jpg",
        profileLink: "/about/jorge-gonzelez-martinez",
      },
      {
        name: "Mark Hays, PhD",
        role: "Director of Product Development",
        image: "/MarkH.jpg",
        profileLink: "/about/mark-hays",
      },
      {
        name: "Golnoosh Kamali, PhD",
        role: "Director of Site Engagement",
        image: "/GolnooshK.jpg",
        profileLink: "/about/golnoosh-kamali",
      },
    ],
  },
  {
    heading: "Consultants",
    people: [
      {
        name: "John Gale, PhD",
        role: "Domain Expert",
        image: "/JohnG.jpg",
        profileLink: "/about/john-gale",
      },
      {
        name: "Kristín Gunnarsdóttir",
        role: "Data Scientist",
        image: "/KristinG.jpg",
        profileLink: "/about/kristin-gunnarsdottir",
      },
      {
        name: "Chas McKhann",
        role: "Business Consultant",
        image: "/ChasM.jpg",
        profileLink: "/about/chas-mckhann",
      },
    ],
  },
  {
    heading: "Board Of Advisors",
    people: [
      {
        name: "William S Anderson, MA, MD, PhD",
        role: "Advisor",
        image: "/WilliamA.jpg",
        profileLink: "/about/william-s-anderson",
      },
      {
        name: "Chuck Montague, PhD",
        role: "Advisor",
        image: "/ChuckM.jpg",
        profileLink: "/about/chuck-montague",
      },
      {
        name: "Ian Tolfree, PhD",
        role: "Advisor",
        image: "/IanT.jpg",
        profileLink: "/about/ian-tolfree",
      },
      {
        name: "Myron Weisfeldt, MD",
        role: "Advisor",
        image: "/MyronW.jpg",
        profileLink: "/about/myron-weisfeldt",
      },
    ],
  },
];

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center">
        <span className="text-lg font-semibold text-gray-700">{initials}</span>
      </div>
    </div>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <Link
      to={person.profileLink}
      className="group block bg-white border border-gray-200 hover:border-blue-300 rounded-none overflow-hidden transition-all hover:shadow-lg"
    >
      <div className="w-full">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
            onError={(e) => {
              // if image missing, fall back to initials
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <InitialsAvatar name={person.name} />
        )}

        {/* If the image fails to load, show initials */}
        {!person.image && <InitialsAvatar name={person.name} />}
      </div>

      <div className="px-5 py-4 text-center">
        <div className="text-[13px] tracking-wide font-semibold text-orange-500 uppercase leading-snug">
          {person.name}
        </div>
        <div className="mt-2 text-sm text-gray-700">{person.role}</div>

        <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View profile</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="px-6 pt-8 pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Leadership
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Team, consultants, and advisors supporting Neurologic Solutions.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.heading} className="px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              {section.heading}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {section.people.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
