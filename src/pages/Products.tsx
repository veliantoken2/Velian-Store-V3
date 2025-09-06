import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, Grid, List, Search, SlidersHorizontal, ChevronDown, X } from 'lucide-react';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const categories = ['Semua', 'UI Kit', 'Template', 'Ikon', 'Font', 'Grafis', 'Foto Stok'];
  const ratings = [5, 4, 3, 2, 1];

  const products = [
    {
      id: 1,
      name: "Dashboard Admin Premium",
      price: 750000,
      originalPrice: 1500000,
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      gallery: [
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      rating: 4.9,
      downloads: 1200,
      category: "UI Kit",
      description: "Dashboard admin modern dan bersih dengan 50+ layar dan komponen lengkap",
      variants: [
        { id: "1a", name: "Basic License", price: 750000, originalPrice: 1500000 },
        { id: "1b", name: "Extended License", price: 1200000, originalPrice: 2000000 },
        { id: "1c", name: "Developer License", price: 2500000, originalPrice: 3500000 }
      ]
    },
    {
      id: 2,
      name: "Template E-commerce Website",
      price: 1200000,
      originalPrice: 2000000,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      gallery: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      rating: 4.8,
      downloads: 890,
      category: "Template",
      description: "Solusi e-commerce lengkap dengan desain modern dan fungsionalitas penuh",
      variants: [
        { id: "2a", name: "Single Site", price: 1200000, originalPrice: 2000000 },
        { id: "2b", name: "Multi Site", price: 2000000, originalPrice: 3000000 }
      ]
    },
    {
      id: 3,
      name: "Koleksi Ikon Premium",
      price: 450000,
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
      gallery: [
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      rating: 4.7,
      downloads: 2100,
      category: "Ikon",
      description: "1000+ ikon premium dalam berbagai format dan gaya"
    },
    {
      id: 4,
      name: "UI Mobile App Design",
      price: 900000,
      originalPrice: 1350000,
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
      gallery: [
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      rating: 4.9,
      downloads: 750,
      category: "UI Kit",
      description: "Desain UI aplikasi mobile lengkap dengan 40+ layar dan komponen",
      variants: [
        { id: "4a", name: "iOS Version", price: 900000, originalPrice: 1350000 },
        { id: "4b", name: "Android Version", price: 900000, originalPrice: 1350000 },
        { id: "4c", name: "Complete Bundle", price: 1500000, originalPrice: 2200000 }
      ]
    },
    {
      id: 5,
      name: "Bundle Font Typography",
      price: 600000,
      image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400",
      gallery: [
        "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
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
      gallery: [
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      rating: 4.8,
      downloads: 920,
      category: "Foto Stok",
      description: "Foto stok berkualitas tinggi untuk penggunaan komersial - 500+ gambar"
    },
    {
      id: 7,
      name: "Template Landing Page",
      price: 525000,
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      gallery: [
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      rating: 4.5,
      downloads: 650,
      category: "Template",
      description: "Template landing page modern dengan optimasi konversi"
    },
    {
      id: 8,
      name: "Pack Grafis 3D",
      price: 1350000,
      originalPrice: 2250000,
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
      gallery: [
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      rating: 4.7,
      downloads: 420,
      category: "Grafis",
      description: "Grafis dan ilustrasi 3D berkualitas tinggi untuk desain modern"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesRating = selectedRating === 0 || product.rating >= selectedRating;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloads - a.downloads;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const clearFilters = () => {
    setSelectedCategory('Semua');
    setPriceRange([0, 3000000]);
    setSelectedRating(0);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Semua Produk</h1>
          <p className="text-gray-400 text-lg">Temukan koleksi lengkap produk digital premium kami</p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white w-full justify-center"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filter & Urutkan</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Filter</h3>
                <button
                  onClick={clearFilters}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center space-x-1"
                >
                  <X className="w-4 h-4" />
                  <span>Hapus Filter</span>
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Cari Produk</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full bg-slate-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Kategori</label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                          : 'bg-slate-700/30 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Rentang Harga: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                </label>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="3000000"
                    step="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Rp 0</span>
                    <span>Rp 3.000.000</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Rating Minimum</label>
                <div className="space-y-2">
                  {ratings.map(rating => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                        selectedRating === rating
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                          : 'bg-slate-700/30 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                      }`}
                    >
                      <span>{rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm">& ke atas</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">
                    Menampilkan {sortedProducts.length} dari {products.length} produk
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <option value="featured">Unggulan</option>
                    <option value="newest">Terbaru</option>
                    <option value="price-low">Harga: Rendah ke Tinggi</option>
                    <option value="price-high">Harga: Tinggi ke Rendah</option>
                    <option value="rating">Rating Tertinggi</option>
                    <option value="downloads">Paling Banyak Diunduh</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex bg-slate-700/50 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 sm:gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Produk tidak ditemukan</h3>
                <p className="text-gray-400 mb-6">Coba sesuaikan kriteria pencarian atau filter Anda</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Hapus Semua Filter
                </button>
              </div>
            )}

            {/* Load More */}
            {sortedProducts.length > 0 && sortedProducts.length >= 8 && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-slate-700/50">
                  Muat Lebih Banyak
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;