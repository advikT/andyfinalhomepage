import { Calendar, ArrowRight, Search, Newspaper, Filter } from 'lucide-react';
import { useMemo, useState } from 'react';

type NewsCategory =
  | 'Product'
  | 'Company'
  | 'Funding'
  | 'Awards'
  | 'Regulatory'
  | 'Media';

type NewsItem = {
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image: string;
  link: string;
};

const BRAND = {
  purple: '#9986bf',
  purpleDark: '#7e6aa7',
  purpleSoft: 'rgba(153, 134, 191, 0.12)',
  purpleBorder: 'rgba(153, 134, 191, 0.28)',
  orange: '#ce7f57',
  orangeDark: '#b96d46',
  orangeSoft: 'rgba(206, 127, 87, 0.12)',
  orangeBorder: 'rgba(206, 127, 87, 0.28)',
  ink: '#2f2738',
  muted: '#6e647b',
  line: 'rgba(47, 39, 56, 0.10)',
  bg: '#fcfaf8',
  card: '#ffffff',
};

const newsItems: NewsItem[] = [
  {
    date: '1 April 2021',
    category: 'Regulatory',
    title:
      'Neurologic Solutions Granted FDA 510K Clearance for its Seizure Onset Zone Detection Software',
    excerpt:
      'Neurologic Solutions receives FDA 510(k) clearance for its seizure onset zone detection software, enabling clinical use.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#7e6aa7]',
    link: 'https://neurologicsolutions.net/neurologic-solutions-granted-fda-510k-clearance-for-its-seizure-onset-zone-detection-software/',
  },
  {
    date: '17 June 2021',
    category: 'Funding',
    title:
      'Neurologic Solutions Awarded A Phase 1 Small Business Innovation Research Grant from the National Science Foundation',
    excerpt:
      'The company secures an NSF Phase 1 SBIR grant to advance its EEG analytics and seizure detection research.',
    image: 'bg-gradient-to-br from-[#ce7f57] to-[#b96d46]',
    link: 'https://neurologicsolutions.net/neurologic-solutions-awarded-a-phase-1-small-business-innovation-research-grant-from-the-national-science-foundation/',
  },
  {
    date: '31 August 2021',
    category: 'Awards',
    title: 'Sarma named a recipient of Thalheimer Fund Grant',
    excerpt:
      'Sri Sarma receives the Thalheimer Fund Grant supporting translational neuroscience research.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#ce7f57]',
    link: 'https://www.bme.jhu.edu/news-events/news/sarma-named-a-recipient-of-thalheimer-fund-grant/',
  },
  {
    date: '3 November 2020',
    category: 'Awards',
    title: 'Sri Sarma wins inaugural Pitch It On! competition',
    excerpt:
      'Sri Sarma wins the inaugural Pitch It On! competition for innovation and commercialization leadership.',
    image: 'bg-gradient-to-br from-[#ce7f57] to-[#9986bf]',
    link: 'https://hub.jhu.edu/2020/11/03/sri-sarma-wins-accelherator-pitch-competition/',
  },
  {
    date: '15 June 2024',
    category: 'Company',
    title: 'Neurologic Solutions Hires Andrew Gotshalk',
    excerpt:
      'Neurologic Solutions expands its leadership team with the hiring of Andrew Gotshalk.',
    image: 'bg-gradient-to-br from-[#ce7f57] to-[#b96d46]',
    link: 'https://www.linkedin.com/posts/andrew-gotshalk-7814433_newbeginnings-neurologicsolutions-leadership-activity-7229653386155941888-701y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjWI0BQYuNDclI86R8h1NsPG3DZ0WYHsM',
  },
  {
    date: '15 August 2024',
    category: 'Funding',
    title: 'Neurologic Solutions Receives the SBIR Phase 2 Award',
    excerpt:
      'Neurologic Solutions receives a Phase 2 SBIR award to scale development and validation of its EEG technology.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#7e6aa7]',
    link: 'https://www.sbir.gov/awards/213755',
  },
  {
    date: '15 September 2024',
    category: 'Company',
    title: 'Neurologic Solutions Hires Mark Hays and Golnoosh Kamali',
    excerpt:
      'The company strengthens its team with the addition of Mark Hays and Golnoosh Kamali.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#ce7f57]',
    link: 'https://www.linkedin.com/posts/golnoosh-kamali_starting-off-the-new-year-with-a-professional-activity-7280311008026353664-cpr2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjWI0BQYuNDclI86R8h1NsPG3DZ0WYHsM',
  },
  {
    date: '22 January 2025',
    category: 'Product',
    title: 'New epilepsy tool could cut misdiagnoses by nearly 70% using routine EEGs',
    excerpt:
      'Johns Hopkins research shows EpiScalp significantly reduces epilepsy misdiagnosis using routine EEG data.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#7e6aa7]',
    link: 'https://hub.jhu.edu/2025/01/22/episcalp-epilepsy-diagnosis/',
  },
  {
    date: '25 September 2025',
    category: 'Media',
    title: 'Baltimore biotech researchers court investors at Johns Hopkins showcase',
    excerpt:
      'Neurologic Solutions presents its technology to investors at the Johns Hopkins innovation showcase.',
      image: 'bg-gradient-to-br from-[#ce7f57] to-[#9986bf]',
    link: 'https://technical.ly/entrepreneurship/johns-hopkins-innovation-summit-2025/?nab=1',
  },
];

const categories: Array<'All' | NewsCategory> = [
  'All',
  'Product',
  'Company',
  'Funding',
  'Awards',
  'Regulatory',
  'Media',
];

function parseDate(dateString: string) {
  return new Date(dateString);
}

function getCategoryStyles(category: NewsCategory) {
  switch (category) {
    case 'Product':
      return {
        bg: BRAND.purpleSoft,
        border: BRAND.purpleBorder,
        text: BRAND.purpleDark,
      };
    case 'Funding':
      return {
        bg: BRAND.orangeSoft,
        border: BRAND.orangeBorder,
        text: BRAND.orangeDark,
      };
    case 'Awards':
      return {
        bg: 'rgba(206, 127, 87, 0.10)',
        border: BRAND.orangeBorder,
        text: BRAND.orangeDark,
      };
    case 'Regulatory':
      return {
        bg: 'rgba(153, 134, 191, 0.10)',
        border: BRAND.purpleBorder,
        text: BRAND.purpleDark,
      };
    case 'Company':
    case 'Media':
    default:
      return {
        bg: 'rgba(47, 39, 56, 0.06)',
        border: 'rgba(47, 39, 56, 0.10)',
        text: BRAND.ink,
      };
  }
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | NewsCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = useMemo(() => {
    return newsItems
      .filter((item) => {
        const matchesCategory =
          activeCategory === 'All' || item.category === activeCategory;

        const q = searchTerm.trim().toLowerCase();
        const matchesSearch =
          q.length === 0 ||
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
      })
      .slice()
      .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  }, [activeCategory, searchTerm]);

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
      {/* Header */}
      <section className="relative overflow-hidden px-6 pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-[-4rem] top-4 h-72 w-72 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
          <div
            className="absolute right-[-3rem] bottom-0 h-72 w-72 rounded-full blur-3xl"
            style={{ background: BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  background: BRAND.purpleSoft,
                  border: `1px solid ${BRAND.purpleBorder}`,
                }}
              >
                <Newspaper
                  className="h-5 w-5"
                  style={{ color: BRAND.purpleDark }}
                />
              </div>

              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: BRAND.purpleDark }}
              >
                News & Updates
              </span>
            </div>

            <h1
              className="text-4xl leading-tight md:text-5xl lg:text-6xl"
              style={{ fontWeight: 300 }}
            >
              Latest from
              <span
                className="block"
                style={{ color: BRAND.purpleDark, fontStyle: 'italic' }}
              >
                Neurologic Solutions
              </span>
            </h1>

            <p
              className="mt-5 max-w-2xl text-lg leading-8"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              Product updates, funding news, company milestones, media coverage,
              and announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Filter */}
      <section
        className="sticky z-40 border-y px-6 py-4 backdrop-blur md:top-20"
        style={{
          borderColor: BRAND.line,
          backgroundColor: 'rgba(252, 250, 248, 0.88)',
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-3xl border p-4 shadow-sm"
            style={{
              borderColor: BRAND.line,
              backgroundColor: 'rgba(255,255,255,0.78)',
            }}
          >
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" style={{ color: BRAND.ink }} />
                <h3 className="text-sm font-semibold" style={{ color: BRAND.ink }}>
                  Filter news
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-4 xl:max-w-5xl xl:flex-row xl:items-center xl:justify-end">
                <div className="relative w-full xl:max-w-sm">
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
                    style={{ color: BRAND.muted }}
                  />
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-full border bg-white py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200"
                    style={{
                      borderColor: BRAND.line,
                      color: BRAND.ink,
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const active = activeCategory === category;

                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200"
                        style={{
                          backgroundColor: active
                            ? category === 'Funding'
                              ? BRAND.orange
                              : BRAND.purple
                            : 'white',
                          color: active ? 'white' : BRAND.ink,
                          borderColor: active
                            ? category === 'Funding'
                              ? BRAND.orange
                              : BRAND.purple
                            : BRAND.line,
                          boxShadow: active
                            ? '0 8px 24px rgba(47,39,56,0.10)'
                            : 'none',
                        }}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.purpleDark, fontWeight: 600 }}
            >
              All News
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontWeight: 300 }}>
              Browse updates
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredNews.map((item) => {
              const categoryStyles = getCategoryStyles(item.category);

              return (
                <a
                  key={`${item.title}-${item.date}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <article
                    className="flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ borderColor: BRAND.line }}
                  >
                    <div className={`h-48 w-full ${item.image}`} />

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <span
                          className="rounded-full border px-3 py-1 text-xs font-semibold"
                          style={{
                            background: categoryStyles.bg,
                            borderColor: categoryStyles.border,
                            color: categoryStyles.text,
                          }}
                        >
                          {item.category}
                        </span>

                        <div
                          className="inline-flex items-center gap-1 text-xs"
                          style={{ color: BRAND.muted }}
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      <h3
                        className="text-xl leading-tight transition-colors duration-300"
                        style={{ fontWeight: 300 }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-4 flex-1 text-sm leading-7"
                        style={{ color: BRAND.muted, fontWeight: 300 }}
                      >
                        {item.excerpt}
                      </p>

                      <div
                        className="mt-5 inline-flex items-center gap-2 text-sm transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: BRAND.purpleDark }}
                      >
                        <span>Read more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </a>
              );
            })}
          </div>

          {filteredNews.length === 0 && (
            <div
              className="rounded-3xl border px-6 py-14 text-center"
              style={{
                borderColor: BRAND.line,
                backgroundColor: 'rgba(255,255,255,0.7)',
              }}
            >
              <p className="text-lg" style={{ color: BRAND.muted, fontWeight: 300 }}>
                No news found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}