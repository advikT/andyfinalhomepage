const technology = [
  {
    title:
      'Source-sink connectivity: a novel interictal EEG marker for seizure localization',
    author: 'Kristin M.',
    date: '21 November 2022',
    link: 'https://academic.oup.com/brain/article/145/11/3901/6835751?login=false',
  },
  {
    title:
      'Neural fragility as an EEG marker of the seizure onset zone',
    author: 'Adam L.',
    date: '1 October 2021',
    link: 'https://www.nature.com/articles/s41593-021-00901-w.epdf',
  },
  {
    title:
      'Linear time-varying model characterizes invasive EEG signals generated from complex epileptic networks',
    author: 'Adam L.',
    date: '14 September 2017',
    link: 'https://ieeexplore.ieee.org/document/8037439',
  },
  {
    title:
      'Fragility in Dynamic Networks: Application to Neural Networks in the Epileptic Cortex',
    author: 'Sridevi S.',
    date: '1 October 2014',
    link: 'https://direct.mit.edu/neco/article-abstract/26/10/2294/8025',
  },
];

export default function Technology() {
  return (
    <section className="py-24 px-6 bg-[#F2F6FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Built on <span className="text-blue-700"> <strong>research</strong></span>.
            <br />
            Proven in <span className="text-orange-600"> <strong>practice</strong></span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technology.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                bg-[#F7F9FC]
                rounded-3xl
                p-10
                border-l-4
                border-blue-700
                hover:bg-[#EEF3F8]
                transition-colors
                duration-300
              "
            >
              <p className="text-xl font-light mb-8 leading-relaxed text-gray-900">
                “{tech.title}”
              </p>

              <div>
                <p className="text-gray-900">{tech.author}</p>
                <p className="text-sm text-orange-600">
                  {tech.date}
                </p>
              </div>
            </a>
          ))}
        </div>
         <div className="text-center mt-12">
          <a
            href="./publications"
            className="text-xl text-blue-700 hover:text-orange-600 underline transition-colors duration-300"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
}
