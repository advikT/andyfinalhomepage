import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-start justify-center pt-28 overflow-visible bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/60 via-purple-900/30 to-transparent"
          aria-hidden
        />
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="/images/montage-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/Groupwork-preview.mp4" type="video/mp4" />
          <source src="/Groupwork.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full mx-auto">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white leading-tight md:leading-snug tracking-normal md:tracking-wide mb-6">
              Empowering Providers, Transforming Lives:
              <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-300">
                EEG Analytics for
                <br />
                <span className="whitespace-nowrap">Diagnostic Excellence</span>
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-200 font-light max-w-xl mb-8 leading-relaxed">
              Neurologic Solutions pioneers precision neurodata analysis to help clinicians achieve accurate diagnosis and optimal treatment. We deliver reliable EEG analytics, actionable insights, and quantitative biomarkers that turn brain data into better clinical outcomes across neurological disorders.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <a href="./episcalp" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-shadow shadow-md inline-flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="./Contact-Us" className="text-slate-200 hover:text-white underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        {/* <div className="-mt-16 pb-16 w-full flex justify-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <div className="bg-white/95 rounded-xl shadow-lg p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="2" fill="white" />
                    <circle cx="6" cy="14" r="2" fill="white" />
                    <circle cx="18" cy="14" r="2" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Mission</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Neurologic Solutions is dedicated to pioneering precision in neurodata analysis — empowering clinicians
                    for accurate diagnosis and optimal treatment through reliable EEG analytics and actionable insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 rounded-xl shadow-lg p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="9" r="1.5" fill="white" />
                    <circle cx="16" cy="15" r="1.5" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Vision</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Our goal is to harness analytic power for brain data, creating precise quantitative biomarkers that
                    improve diagnostic accuracy and guide better clinical outcomes across neurological disorders.
                  </p>
                </div>
              </div>
            </div> 
          </div>
        </div> */}
      </div> 
    </section>  
  );
}