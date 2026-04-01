import React from 'react'

const Steps = () => {
  return (
    <section className="bg-base-200 py-24">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Get Started In 3 Steps</h2>
          <p className="text-base-content/70 font-semibold text-lg max-w-xl mx-auto">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-sm border border-base-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="card-body items-center text-center p-12">
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-primary text-primary-content text-xl font-bold rounded-full flex items-center justify-center shadow-md border-[6px] border-base-200">1</div>
              <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 className="card-title text-xl font-bold text-slate-900 mb-2">Create Account</h3>
              <p className="text-sm font-semibold text-base-content/60 leading-relaxed max-w-[220px]">Sign up for free in seconds. No credit card required.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm border border-base-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="card-body items-center text-center p-12">
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-primary text-primary-content text-xl font-bold rounded-full flex items-center justify-center shadow-md border-[6px] border-base-200">2</div>
              <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="card-title text-xl font-bold text-slate-900 mb-2">Choose Products</h3>
              <p className="text-sm font-semibold text-base-content/60 leading-relaxed max-w-14rem">Browse our catalog and select the tools that fit your needs.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm border border-base-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="card-body items-center text-center p-12">
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-primary text-primary-content text-xl font-bold rounded-full flex items-center justify-center shadow-md border-[6px] border-base-200">3</div>
              <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="card-title text-xl font-bold text-slate-900 mb-2">Start Creating</h3>
              <p className="text-sm font-semibold text-base-content/60 leading-relaxed max-w-[220px]">Download and start using your premium tools instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;