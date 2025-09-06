import React, { useState, useEffect } from 'react';
import ScrollingBanner from '../components/ScrollingBanner';
import ProductCard from '../components/ProductCard';
import { ChevronRight, TrendingUp, Crown, Zap, Star, Users, Download, ArrowRight, Play, Shield, Award } from 'lucide-react';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { name: 'Semua', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { name: 'Template Premium', icon: Crown, color: 'from-purple-500 to-pink-500' },
    { name: 'UI Kit', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { name: 'Ikon & Grafis', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { name: 'Font', icon: TrendingUp, color: 'from-red-500 to-rose-500' },
    { name: 'Foto Stok', icon: Zap, color: 'from-indigo-500 to-blue-500' },
  ];

  const heroSlides = [
    {
      title: "Koleksi Template Premium",
      subtitle: "Dapatkan template website terbaik dengan desain modern",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Jelajahi Template"
    },
    {
      title: "UI Kit Profesional",
      subtitle: "Komponen UI lengkap untuk aplikasi dan website Anda",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Lihat UI Kit"
    },
    {
      title: "Grafis & Ikon Premium",
      subtitle: "Ribuan ikon dan grafis berkualitas tinggi",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Download Sekarang"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Dashboard Admin Premium",
      price: 750000,
      originalPrice: 1500000,
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      downloads: 1200,
      category: "UI Kit",
      description: "Dashboard admin modern dan bersih dengan 50+ layar dan komponen lengkap"
    },
    {
      id: 2,
      name: "Template E-commerce Lengkap",
      price: 1200000,
      originalPrice: 2000000,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      downloads: 890,
      category: "Template Premium",
      description: "Solusi e-commerce lengkap dengan desain modern dan fungsionalitas penuh"
    },
    {
      id: 3,
      name: "Koleksi Ikon Premium",
      price: 450000,
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      downloads: 2100,
      category: "Ikon & Grafis",
      description: "1000+ ikon premium dalam berbagai format dan gaya"
    },
    {
      id: 4,
      name: "UI Mobile App Design",
      price: 900000,
      originalPrice: 1350000,
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      downloads: 750,
      category: "UI Kit",
      description: "Desain UI aplikasi mobile lengkap dengan 40+ layar dan komponen"
    },
    {
      id: 5,
      name: "Bundle Font Typography",
      price: 600000,
      image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      downloads: 1580,
      category: "Font",
      description: "Koleksi font profesional dengan 20 jenis huruf unik"
    },
    {
      id: 6,
      name: "Bundle Foto Stok Premium",
      price: 1050000,
      originalPrice: 1800000,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      downloads: 920,
      category: "Foto Stok",
      description: "Foto stok berkualitas tinggi untuk penggunaan komersial - 500+ gambar"
    }
  ];

  const stats = [
    { number: "50K+", label: "Pengguna Aktif", icon: Users },
    { number: "10K+", label: "Produk Digital", icon: Download },
    { number: "4.9", label: "Rating Rata-rata", icon: Star },
    { number: "99%", label: "Kepuasan Pelanggan", icon: Award },
  ];

  const filteredProducts = selectedCategory === 'Semua' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Scrolling Banner */}
      <ScrollingBanner />
      
      {/* Hero Section with Carousel */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="relative h-96 rounded-3xl overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="max-w-2xl">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                          <span>{slide.cta}</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                          <Play className="w-5 h-5" />
                          <span>Tonton Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Jelajahi Kategori</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Temukan koleksi produk digital terbaik yang telah dikurasi khusus untuk Anda
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25 scale-105`
                    : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500'
                }`}
              >
                <div className={`p-2 rounded-lg ${selectedCategory === category.name ? 'bg-white/20' : 'bg-slate-700'} group-hover:bg-white/20 transition-colors duration-300`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Produk Unggulan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Produk premium pilihan yang disukai ribuan pelanggan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>Lihat Semua Produk</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 text-center group hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Download Instan</h3>
              <p className="text-gray-400 leading-relaxed">
                Dapatkan akses langsung ke semua file setelah pembelian. Tidak perlu menunggu!
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 text-center group hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Pembayaran Aman</h3>
              <p className="text-gray-400 leading-relaxed">
                Sistem pembayaran terenkripsi dengan berbagai metode pembayaran yang aman.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 text-center group hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Kualitas Premium</h3>
              <p className="text-gray-400 leading-relaxed">
                Semua produk telah melalui kurasi ketat untuk memastikan kualitas terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">Tetap Update</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Berlangganan untuk mendapatkan notifikasi produk baru, penawaran eksklusif, dan promo spesial
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-6 py-4 bg-slate-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105">
                  Berlangganan
                </button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;