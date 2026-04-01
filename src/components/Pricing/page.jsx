const Pricing = () => {
  return (
    <section id="pricing" className="bg-base-100 py-24">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-base-content/70 font-semibold text-lg max-w-xl mx-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          <div className="card bg-base-200 shadow-sm border border-base-200 h-full">
            <div className="card-body p-10 justify-between">
              <div>
                <h3 className="card-title text-2xl font-bold text-slate-900 mb-2 tracking-tight">Starter</h3>
                <p className="text-sm font-semibold text-base-content/60 mb-8">Perfect for getting started</p>
                <div className="mb-8 p-0">
                  <span className="text-5xl font-bold text-slate-900 tracking-tight">$0</span>
                  <span className="text-sm font-semibold text-base-content/60">/month</span>
                </div>
                <ul className="space-y-4 mb-10 text-[15px]">
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> Access to 10 free tools
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> Basic templates
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> Community support
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> 1 project per month
                  </li>
                </ul>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-block rounded-full font-bold h-12">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-linear-to-b from-blue-600 to-primary text-primary-content shadow-2xl h-[105%] md:z-10 md:-mx-4 group border-none">
            <div className="card-body p-12 justify-between relative">
              <div className="badge badge-warning text-warning-content text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 border-none">
                Most Popular
              </div>
              <div>
                <h3 className="card-title text-2xl font-bold text-white mb-2 tracking-tight">Pro</h3>
                <p className="text-sm font-medium opacity-80 mb-8">Best for professionals</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white tracking-tight">$29</span>
                  <span className="text-sm font-medium opacity-80">/month</span>
                </div>
                <ul className="space-y-4 mb-10 text-[15px]">
                  <li className="flex items-center gap-3 font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">✓</div> Access to all premium tools
                  </li>
                  <li className="flex items-center gap-3 font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">✓</div> Unlimited templates
                  </li>
                  <li className="flex items-center gap-3 font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">✓</div> Priority support
                  </li>
                  <li className="flex items-center gap-3 font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">✓</div> Unlimited projects
                  </li>
                  <li className="flex items-center gap-3 font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">✓</div> Custom branding
                  </li>
                </ul>
              </div>
              <div className="card-actions">
                <button className="btn bg-white border-white hover:bg-base-200 hover:border-base-200 text-primary btn-block rounded-full font-bold h-14 text-base shadow-xl">
                  Start Pro Trial
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm border border-base-200 h-full">
            <div className="card-body p-10 justify-between">
              <div>
                <h3 className="card-title text-2xl font-bold text-slate-900 mb-2 tracking-tight">Enterprise</h3>
                <p className="text-sm font-semibold text-base-content/60 mb-8">For teams and businesses</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-slate-900 tracking-tight">$99</span>
                  <span className="text-sm font-semibold text-base-content/60">/month</span>
                </div>
                <ul className="space-y-4 mb-10 text-[15px]">
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> Everything in Pro
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> Team collaboration
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> Custom integrations
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> Dedicated support
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="text-success text-xl font-bold">✓</span> SLA Guarantee
                  </li>
                </ul>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-block rounded-full font-bold h-12">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;