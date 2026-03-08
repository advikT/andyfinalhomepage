import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section (✅ centered in remaining viewport below navbar) */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: 'calc(100vh - var(--nav-h))' }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <span className="text-xs tracking-widest uppercase text-blue-600 font-semibold mb-6">
            Our Mission
          </span>

          <h1 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
            Transforming
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-light">
              Neurological Care
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
            We're building the future of epilepsy diagnosis and treatment through
            advanced EEG analytics that empower clinicians with precision insights.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-xs tracking-widest uppercase text-blue-600 font-semibold">
                The Challenge
              </span>
              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6 leading-tight">
                A Critical Gap in Care
              </h2>
              <p className="text-lg text-gray-600 font-light mb-6 leading-relaxed">
                Epilepsy diagnosis remains one of the most challenging tasks in neurology.
                Clinicians spend hours analyzing EEG data manually, often relying on limited
                insights that can lead to delayed diagnoses and suboptimal treatment plans.
              </p>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                This gap costs patients precious time they don't have. Every delayed diagnosis
                is another day without proper treatment.
              </p>
              <div className="flex items-center space-x-3 text-blue-600 font-light">
                <span>Learn more about our impact</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-extralight text-red-600 mb-4">40%</div>
                  <p className="text-gray-700 font-light">
                    of epilepsy cases are initially misdiagnosed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-widest uppercase text-blue-300 font-semibold">
              Our Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
              Advanced EEG Analytics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4">EpiScalp</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Rapid EEG-based epilepsy risk assessment that provides clinicians with
                actionable insights in minutes, not hours.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4">EZTrack</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Simplified EEG fragility assessment for optimized surgical planning and
                better patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-widest uppercase text-blue-600 font-semibold">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Patient-Centric',
                description:
                  "Everything we do starts with the patient. Better diagnosis means better lives.",
              },
              {
                icon: Users,
                title: 'Clinician Empowerment',
                description:
                  'We partner with healthcare providers to give them tools they actually need.',
              },
              {
                icon: Zap,
                title: 'Precision Innovation',
                description:
                  'Advanced AI and machine learning designed for the real world of clinical practice.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-widest uppercase text-blue-600 font-semibold">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
              Building the Future
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                year: '2016',
                title: 'Founded',
                description:
                  'Neurologic Solutions established with a mission to revolutionize EEG analysis in order to empower clinicians for more accurate diagnosis and optimal treatment.',
              },
              {
                year: '2020',
                title: 'EZTrack Clearance',
                description:
                  'Received FDA 510(k) clearance for our first product, EZTrack.',
              },
              {
                year: '2021',
                title: 'EpiScalp Funding',
                description:
                  'Secured over $3M in research funding to begin development of EpiScalp and complete Retrospective studies.',
              },
              {
                year: '2023',
                title: ' Translation/Clinical Validation',
                description:
                  'Received SBIR Phase 2 Grant ($3M) to perform clinical validation study and begin commercialization effort.',
              },
              {
                year: '2025',
                title: 'Preparation for Commercialization',
                description:
                  'Received Blueprint Medtech grant to support early stage commercialization activities, including regulatory clearance, reimbursement strategy and QMS implementation.',
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 md:gap-12 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full"></div>
                  {index < 1000000 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-blue-600 to-transparent mt-4"></div>
                  )}
                </div>

                <div className="pb-8">
                  <span className="text-sm font-semibold text-blue-600">{milestone.year}</span>
                  <h3 className="text-2xl font-light mt-2 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 font-light max-w-xl">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            Join us in transforming neurological care
          </h2>
          <p className="text-xl text-gray-600 font-light mb-12">
            We're hiring exceptional people who believe in the power of precision medicine.
          </p>

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2 group">
            <span>Explore Careers</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
