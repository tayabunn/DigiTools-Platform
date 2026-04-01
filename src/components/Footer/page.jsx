const Footer = () => {
  return (
    <footer className="footer bg-slate-900 text-slate-400 py-20 px-6 border-b border-white/10 block">
      <div className="section-container grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 border-b border-white/10 pb-12">
        <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <span className="text-3xl font-bold text-white tracking-tight">Digi</span>
            <span className="text-3xl font-bold text-primary tracking-tight">Tools</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs font-medium">
            Premium digital tools for creators, professionals, and businesses. Work smarter
            with our suite of powerful tools.
          </p>
        </div>

        <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Product</h4>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <a className="link link-hover hover:text-primary">Features</a>
            <a className="link link-hover hover:text-primary">Pricing</a>
            <a className="link link-hover hover:text-primary">Templates</a>
            <a className="link link-hover hover:text-primary">Integrations</a>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Company</h4>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <a className="link link-hover hover:text-primary">About</a>
            <a className="link link-hover hover:text-primary">Blog</a>
            <a className="link link-hover hover:text-primary">Careers</a>
            <a className="link link-hover hover:text-primary">Press</a>
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Resources</h4>
          <div className="flex flex-col gap-4 text-sm font-medium mb-2">
            <a className="link link-hover hover:text-primary">Documentation</a>
            <a className="link link-hover hover:text-primary">Help Center</a>
            <a className="link link-hover hover:text-primary">Community</a>
            <a className="link link-hover hover:text-primary">Contact</a>
          </div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mt-2">Social</h4>
          <div className="flex gap-4">
            <button className="btn btn-circle btn-sm bg-white/5 border-none hover:bg-primary hover:text-white text-lg">f</button>
            <button className="btn btn-circle btn-sm bg-white/5 border-none hover:bg-primary hover:text-white">in</button>
            <button className="btn btn-circle btn-sm bg-white/5 border-none hover:bg-primary hover:text-white">𝕏</button>
          </div>
        </div>
      </div>

      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[13px] font-medium">© 2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-8 text-[13px] font-medium">
          <a className="link link-hover hover:text-primary">Privacy Policy</a>
          <a className="link link-hover hover:text-primary">Terms of Service</a>
          <a className="link link-hover hover:text-primary">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;