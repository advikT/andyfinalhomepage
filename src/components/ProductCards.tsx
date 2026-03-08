import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'EzTrack',
    description: 'EZTrack is a software analytics tool that can be used to assist in Neurosurgical planning of Epilepsy cases.',
    price: 'From $349',
    gradient: 'from-slate-900 to-slate-700',
    image: '/eztrack-sz.jpg',
    link: './eztrack',
  },
  {
    title: 'EpiScalp',
    description: 'EpiScalp is a software analytics tool that can be used to assist in diagnosing new seizure onset cases.',
    price: 'From $499',
    gradient: 'from-gray-100 to-gray-300',
    dark: false,
    image: '/Episcalp.jpg',
    link: './episcalp',
  },
];

export default function ProductCards() {
  return (
    <section className="py-24 px-6 bg-[#F2F6FA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${product.gradient} p-12 min-h-[500px] flex flex-col justify-between group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 no-underline`}
            >
              <div className="relative z-10">
                <h3
                  className={`text-4xl font-light mb-4 ${
                    product.dark === false ? 'text-black' : 'text-white'
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`text-lg font-light mb-6 ${
                    product.dark === false ? 'text-gray-700' : 'text-gray-300'
                  }`}
                >
                  {product.description}
                </p>
                <p
                  className={`text-2xl font-light ${
                    product.dark === false ? 'text-black' : 'text-white'
                  }`}
                >
                 
                </p>
              </div>
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center space-x-2 ${
                    product.dark === false ? 'text-black' : 'text-white'
                  } group-hover:translate-x-2 transition-transform duration-300`}
                >
                  <span className="font-light">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-64 h-64 object-cover rounded-full shadow-2xl"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}