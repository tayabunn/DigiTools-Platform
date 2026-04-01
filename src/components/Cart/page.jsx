import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm max-w-4xl mx-auto mt-6">
      <div className="card-body p-10 space-y-6">
        <h3 className="card-title text-xl font-bold text-slate-900">Your Cart</h3>
        
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-8 text-center text-base-content/60 font-medium">Your cart is empty. Please add some products.</div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-5 bg-base-200/50 rounded-2xl border border-base-100">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl border border-base-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[15px]">{item.name}</h4>
                    <p className="text-sm font-semibold text-base-content/50">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="btn btn-ghost btn-sm text-[#e83d84] hover:bg-transparent hover:text-pink-700 font-bold tracking-wide"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="divider my-2"></div>

        <div className="flex justify-between items-center text-slate-900">
          <span className="text-sm font-semibold text-base-content/60">Total:</span>
          <span className="text-3xl font-bold">${totalPrice}</span>
        </div>

        <button 
          className="btn btn-primary btn-block rounded-full font-bold h-14 text-[15px]"
          onClick={() => {
             if(cartItems.length > 0) {
                 setCartItems([]);
                 alert("Checkout successful!");
             }
          }}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
