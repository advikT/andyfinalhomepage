import { BookOpen, ExternalLink, Filter, Download } from 'lucide-react';
import { useState } from 'react';

const publications = [
  {
    year: 2014,
    title:
      'Fragility in Dynamic Networks: Application to Neural Networks in the Epileptic Cortex',
    authors: 'Sridevi S.',
    journal: 'Neural Computation',
    category: 'Peer-Reviewed',
    doi: 'https://direct.mit.edu/neco/article-abstract/26/10/2294/8025',
  },
  {
    year: 2017,
    title:
      'Linear time-varying model characterizes invasive EEG signals generated from complex epileptic networks',
    authors: 'Adam L.',
    journal: 'IEEE Transactions on Biomedical Engineering',
    category: 'Peer-Reviewed',
    doi: 'https://ieeexplore.ieee.org/document/8037439',
  },
  {
    year: 2021,
    title: 'Neural fragility as an EEG marker of the seizure onset zone',
    authors: 'Adam L.',
    journal: 'Nature Neuroscience',
    category: 'Peer-Reviewed',
    doi: 'https://www.nature.com/articles/s41593-021-00901-w.epdf',
  },
  {
    year: 2022,
    title:
      'Source-sink connectivity: a novel interictal EEG marker for seizure localization',
    authors: 'Kristin M.',
    journal: 'Brain',
    category: 'Peer-Reviewed',
    doi: 'https://academic.oup.com/brain/article/145/11/3901/6835751?login=false',
  },
];


const years = ['All', '2025', '2024', '2023', '2022'];
const categories = ['All', 'Peer-Reviewed', 'White Paper'];

export default function PublicationsPage() {
  const [activeYear, setActiveYear] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPubs = publications.filter((pub) => {
    const yearMatch = activeYear === 'All' || pub.year.toString() === activeYear;
    const catMatch =
      activeCategory === 'All' || pub.category === activeCategory;
    return yearMatch && catMatch;
  });

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <span className="text-xs tracking-widest uppercase text-emerald-600 font-semibold">
              Research
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Scientific Publications
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            Peer-reviewed research and technical papers advancing the field of
            epilepsy diagnosis and treatment.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-24 bg-white border-b border-gray-100 py-6 px-6 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-gray-700" />
              <h3 className="text-sm font-semibold text-gray-700">Filter by Year</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-light transition-all ${
                    activeYear === year
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-gray-700" />
              <h3 className="text-sm font-semibold text-gray-700">Filter by Type</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-light transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredPubs.reverse().map((pub, index) => (
            <div
              key={index}
              className="group opacity-0 animate-fade-in bg-white border border-gray-200 rounded-xl p-8 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                      {pub.category}
                    </span>
                    <span className="text-sm text-gray-500 font-light">
                      {pub.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-light mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-gray-500 font-light italic text-sm">
                    {pub.journal}
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <a
                    href={pub.doi}
                    className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                    title="View DOI"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredPubs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 font-light text-lg">
                No publications found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Featured Research</h2>
          <p className="text-lg text-gray-600 font-light mb-12">
            Check out our latest peer-reviewed publication on automated seizure
            detection.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all font-light">
            View Featured Paper
          </button>
        </div>
      </section>
    </div>
  );
}
