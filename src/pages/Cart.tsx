import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, ArrowLeft, Shield, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    // Implement checkout logic
    alert('Fitur checkout akan diimplementasikan di sini');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <ShoppingBag className="w-16 h-16 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Keranjang Kosong</h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            Belum ada produk digital yang ditambahkan ke keranjang Anda. Mari mulai berbelanja!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Mulai Berbelanja</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link
              to="/products"
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-white">Keranjang Belanja</h1>
              <p className="text-gray-400 text-lg">{cartItems.length} item dalam keranjang Anda</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="xl:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="flex items-center space-x-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white mb-2 text-lg group-hover:text-cyan-300 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-cyan-300 font-bold text-xl mb-2">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Shield className="w-4 h-4" />
                      <span>Download instan setelah pembayaran</span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 bg-slate-700/50 rounded-xl p-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-white font-bold text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-300 hover:scale-110 transform"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="xl:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <CreditCard className="w-6 h-6 text-cyan-400" />
                <span>Ringkasan Pesanan</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({cartItems.length} item)</span>
                  <span className="font-semibold">{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Biaya Admin</span>
                  <span className="font-semibold">{formatPrice(5000)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Diskon</span>
                  <span className="font-semibold text-green-400">-{formatPrice(0)}</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-cyan-300">{formatPrice(getCartTotal() + 5000)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Kode promo"
                    className="flex-1 px-4 py-3 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors duration-300">
                    Terapkan
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2 text-lg transform hover:scale-105"
                >
                  <CreditCard className="w-6 h-6" />
                  <span>Lanjutkan Pembayaran</span>
                </button>
                
                <Link
                  to="/products"
                  className="w-full py-4 bg-transparent border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Lanjutkan Belanja</span>
                </Link>
              </div>

              {/* Security & Features */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span>Pembayaran aman dengan enkripsi SSL 256-bit</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Download instan setelah pembayaran berhasil</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <CreditCard className="w-5 h-5 text-purple-400" />
                    <span>Berbagai metode pembayaran tersedia</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-3">Metode Pembayaran:</p>
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-2 bg-slate-700/50 rounded-lg text-xs font-medium text-gray-300">
                    Bank Transfer
                  </div>
                  <div className="px-3 py-2 bg-slate-700/50 rounded-lg text-xs font-medium text-gray-300">
                    E-Wallet
                  </div>
                  <div className="px-3 py-2 bg-slate-700/50 rounded-lg text-xs font-medium text-gray-300">
                    QRIS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;