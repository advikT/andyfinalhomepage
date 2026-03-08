import { Newspaper } from 'lucide-react';

const pressItems = [
  {
    date: '3 November 2024',
    headline: 'Sri Sarma wins inaugural Pitch It On! competition',
    link: 'https://hub.jhu.edu/2020/11/03/sri-sarma-wins-accelherator-pitch-competition/',
  },
  {
    date: '1 April 2021',
    headline:
      'Neurologic Solutions Granted FDA 510K Clearance for its Seizure Onset Zone Detection Software',
    link: 'https://neurologicsolutions.net/neurologic-solutions-granted-fda-510k-clearance-for-its-seizure-onset-zone-detection-software/',
  },
  {
    date: '17 June 2021',
    headline:
      'Neurologic Solutions Awarded A Phase 1 Small Business Innovation Research Grant from the National Science Foundation',
    link: 'https://time.com/collection/best-inventions-2024/7083065/oura-ring-gen3/',
  },
  {
    date: '31 August 2021',
    headline: 'Sarma named a recipient of Thalheimer Fund Grant',
    link: 'https://www.bme.jhu.edu/news-events/news/sarma-named-a-recipient-of-thalheimer-fund-grant/',
  },
  {
    date: '15 June 2024',
    headline: 'Neurologic Solutions Hires Andrew Gotshalk',
    link: 'https://neurologicsolutions.net/neurologic-solutions-hires-andrew-gotshalk/',
  },
  {
    date: '15 August 2024',
    headline: 'Neurologic Solutions Receives the SBIR Phase 2 Award',
    link: 'https://www.sbir.gov/awards/213755',
  },
  {
    date: '15 September 2024',
    headline:
      'Neurologic Solutions Hires Mark Hays and Golnoosh Kamali',
    link: 'https://neurologicsolutions.net/neurologic-solutions-hires-mark-hays-and-golnoosh-kamali/',
  },
  {
    date: '22 January 2025',
    headline:
      'New epilepsy tool could cut misdiagnoses by nearly 70% using routine EEGs',
    link: 'https://hub.jhu.edu/2025/01/22/episcalp-epilepsy-diagnosis/',
  },
  {
    date: '25 September 2025',
    headline:
      'Baltimore biotech researchers court investors at Johns Hopkins showcase',
    link: 'https://technical.ly/entrepreneurship/johns-hopkins-innovation-summit-2025/?nab=1',
  },
  {
    date: '7 December 2025',
    headline:
      'Neurologic Solutions Gets the Maryland Innovation Initiative Technology Assessment Award',
    link: 'https://www.tedcomd.com/mii-universityprojects',
  },
];

export default function PressSection() {
  const lastThreeItems = pressItems.slice(-3);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Newspaper className="w-6 h-6 text-blue-700" />
            <h2 className="text-3xl font-light text-gray-900">
              In the <span className="text-blue-700"> <strong>Press</strong> </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lastThreeItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="
                  bg-[#F7F9FC]
                  rounded-2xl
                  p-8
                  border-l-4
                  border-blue-700
                  hover:bg-[#EEF3F8]
                  transition-colors
                  duration-300
                "
              >
                <p className="text-sm text-orange-600 mb-4 uppercase tracking-wide">
                  {item.date}
                </p>
                <h3 className="text-xl font-light leading-relaxed text-gray-900">
                  {item.headline}
                </h3>
              </div>
            </a>
          ))}
        </div>
         <div className="text-center mt-12">
          <a
            href="./blog-news"
            className="text-xl text-blue-700 hover:text-orange-600 underline transition-colors duration-300"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
}
