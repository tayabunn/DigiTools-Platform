import { useState } from "react";
import Cart from "../Cart/page";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    desc: "Generate high-quality content 10x faster with our advanced AI writing assistant.",
    price: 29,
    tag: "Best Seller",
    tagColor: "badge-warning bg-yellow-100 text-yellow-800 border-none",
    icon: "📝",
    features: ["Unlimited generations", "All writing templates", "Premium support"],
  },
  {
    id: 2,
    name: "Design Templates Pack",
    desc: "10,000+ premium design templates for social media, presentations, and web.",
    price: 49,
    tag: "Popular",
    tagColor: "badge-error bg-orange-100 text-orange-800 border-none",
    icon: "🎨",
    features: ["10,000+ templates", "Weekly updates", "Commercial license"],
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    desc: "Exclusive collection of high-res photos, vectors, and video footage.",
    price: 99,
    tag: "-20%",
    tagColor: "badge-success bg-green-100 text-green-800 border-none",
    icon: "🖼️",
    features: ["1M+ assets", "4K Video clips", "Custom requests"],
  },
  {
    id: 4,
    name: "Automation Toolkit",
    desc: "Connect your favorite apps and automate repetitive tasks painlessly.",
    price: 39,
    tag: "Update",
    tagColor: "badge-primary bg-purple-100 text-purple-800 border-none",
    icon: "⚙️",
    features: ["500+ integrations", "Multi-step zaps", "Custom API access"],
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    desc: "Create professional resumes that beat applicant tracking systems.",
    price: 19,
    tag: "New",
    tagColor: "badge-info bg-blue-100 text-blue-800 border-none",
    icon: "📄",
    features: ["ATS-friendly", "Custom design", "Export to PDF/Word"],
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    desc: "A huge library of ready-to-post graphics and captions for your brand.",
    price: 25,
    tag: "Trending",
    tagColor: "badge-secondary bg-pink-100 text-pink-800 border-none",
    icon: "📱",
    features: ["365-day calendar", "Hooks library", "Engagement boosters"],
  },
];

const DigitalTools = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <section id="products" className="py-24 bg-base-100 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins tracking-tight">Premium Digital Tools</h2>
          <p className="text-base-content/70 font-semibold max-w-xl mx-auto mb-10 text-lg">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>
          
          <div className="flex items-center justify-center">
            <div className="bg-transparent border border-base-200 p-1.5 rounded-full inline-flex shadow-sm gap-1">
              <button 
                onClick={() => setActiveTab("products")}
                className={`btn rounded-full px-8 font-bold border-none h-12 ${activeTab === "products" ? "btn-primary shadow-md" : "btn-ghost text-base-content"}`}
              >
                Products
              </button>
              <button 
                onClick={() => setActiveTab("cart")}
                className={`btn rounded-full px-8 font-bold border-none h-12 ${activeTab === "cart" ? "btn-primary shadow-md" : "btn-ghost text-base-content"}`}
              >
                Cart ({cartItems.length})
              </button>
            </div>
          </div>
        </div>

        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => {
              const isAdded = cartItems.some(item => item.id === p.id);
              return (
                <div key={p.id} className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="card-body p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-base-200 rounded-2xl flex items-center justify-center text-3xl">
                        {p.icon}
                      </div>
                      {p.tag && (
                        <span className={`badge uppercase font-bold text-[10px] tracking-wider py-3 px-3 shadow-none ${p.tagColor}`}>
                          {p.tag}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="card-title text-xl font-bold text-slate-900">{p.name}</h3>
                    <p className="text-sm font-semibold text-base-content/60 mb-4">{p.desc}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-slate-900">${p.price}</span>
                      <span className="text-sm font-semibold text-base-content/60 ml-1">/mo</span>
                    </div>
                    
                    <div className="divider my-0"></div>
                    
                    <ul className="space-y-3 my-6 flex-1">
                      {p.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-[13px] font-bold text-slate-700">
                          <span className="text-success text-lg font-bold">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="card-actions justify-end mt-4">
                      <button 
                        onClick={() => handleAddToCart(p)}
                        disabled={isAdded}
                        className={`btn btn-block rounded-full font-bold shadow-md ${isAdded ? 'btn-success text-white' : 'btn-primary'}`}
                      >
                        {isAdded ? "✓ Added To Cart" : "Get Now"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        )}
      </div>
    </section>
  );
};

export default DigitalTools;