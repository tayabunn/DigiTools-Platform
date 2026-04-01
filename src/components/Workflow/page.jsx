const Workflow = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-primary py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      <div className="section-container text-center max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-lg text-primary-content/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#products" className="btn bg-white border-white text-primary hover:bg-base-200 hover:border-base-200 font-bold px-10 h-14 rounded-full text-lg shadow-xl">
            Explore Products
          </a>
          <a href="#pricing" className="btn btn-outline text-white hover:bg-white/10 border-2 border-white/30 hover:border-white font-bold px-10 h-14 rounded-full text-lg transition-all">
            View Pricing
          </a>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 text-white text-[15px] font-bold">
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-success text-success-content flex items-center justify-center text-xs font-bold">✓</div>
            14-day free trial
          </span>
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-success text-success-content flex items-center justify-center text-xs font-bold">✓</div>
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-success text-success-content flex items-center justify-center text-xs font-bold">✓</div>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default Workflow;