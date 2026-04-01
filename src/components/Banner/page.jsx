import React from 'react'

const Banner = () => {
  return (
    <>
      <section className="bg-base-200 py-24">
        <div className="section-container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <div className="badge badge-info bg-blue-50 text-blue-700 border-none px-4 py-4 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              New: AI-Powered Solution
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              Supercharge Your<br />Digital Workflow
            </h1>
            <p className="text-lg text-base-content/70 font-medium leading-relaxed mb-8">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#products" className="btn btn-primary rounded-full font-bold px-8 h-12 text-base shadow-sm">
                Explore Products
              </a>
              <button className="btn btn-outline bg-base-100 rounded-full font-bold px-8 h-12 text-base gap-2 hover:bg-primary hover:text-primary-content hover:border-primary">
                <span className="w-5 h-5 flex items-center justify-center text-xs border-2 rounded-full border-current pl-0.5">▶</span>
                Watch Demo
              </button>
            </div>
          </div>
          

          <div className="flex-1 w-full relative pl-8">
            <div className="absolute inset-0 bg-primary blur-[100px] rounded-full opacity-30 translate-x-12 translate-y-12"></div>
            <img 
              src="/public/banner.png" className="relative rounded-3xl shadow-2xl h-[590px] w-full object-cover aspect-square md:aspect-3/4"
            />
          </div>  
        </div>
      </section>


      <section className="bg-linear-to-r from-blue-600 to-primary py-16">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center flex-1">
            <p className="text-5xl font-bold text-white mb-2 tracking-tight">50K+</p>
            <p className="text-primary-content font-semibold text-lg opacity-90">Active Users</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/20"></div>
          <div className="text-center flex-1">
            <p className="text-5xl font-bold text-white mb-2 tracking-tight">200+</p>
            <p className="text-primary-content font-semibold text-lg opacity-90">Premium Tools</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/20"></div>
          <div className="text-center flex-1">
            <p className="text-5xl font-bold text-white mb-2 tracking-tight">4.9</p>
            <p className="text-primary-content font-semibold text-lg opacity-90">Rating</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;