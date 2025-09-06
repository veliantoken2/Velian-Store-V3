import React, { useState } from 'react';
import { ShoppingCart, Star, Download, Eye, Heart, Share2, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductVariant {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  rating: number;
  downloads: number;
  category: string;
  description: string;
  variants?: ProductVariant[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants ? product.variants[0] : null
  );
  const [showVariants, setShowVariants] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    const currentProduct = selectedVariant || product;
    addToCart({
      id: selectedVariant ? parseInt(selectedVariant.id) : product.id,
      name: selectedVariant ? `${product.name} - ${selectedVariant.name}` : product.name,
      price: selectedVariant ? selectedVariant.price : product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}k`;
    }
    return downloads.toString();
  };

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentOriginalPrice = selectedVariant ? selectedVariant.originalPrice : product.originalPrice;
  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div 
      className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-700/60 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Gallery */}
      <div className="relative overflow-hidden">
        {/* Main Image */}
        <div className="relative h-40 sm:h-60">
          <img
            src={images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
        
        {/* Image Gallery Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white shadow-lg' : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Quick Actions */}
        <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col space-y-1 sm:space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl backdrop-blur-sm transition-all duration-300 ${isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-red-500'}`}
          >
            <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isLiked ? 'fill-current' : ''} transition-transform duration-300 hover:scale-110`} />
          </button>
          <button className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl hover:bg-blue-500 transition-all duration-300 hover:scale-110">
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300" />
          </button>
          <button className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl hover:bg-green-500 transition-all duration-300 hover:scale-110">
            <Share2 className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm text-cyan-200 text-xs font-bold rounded-full border border-cyan-400/40 shadow-lg">
            {product.category}
          </span>
        </div>

        {/* Discount Badge */}
        {currentOriginalPrice && (
          <div className="absolute bottom-12 sm:bottom-16 left-2 sm:left-3">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-bold shadow-lg animate-pulse">
              HEMAT {Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100)}%
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5">
        <h3 className="font-bold text-sm sm:text-lg text-white mb-2 sm:mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Product Variants */}
        {product.variants && product.variants.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <div className="relative">
              <button
                onClick={() => setShowVariants(!showVariants)}
                className="w-full flex items-center justify-between p-2 sm:p-3 bg-slate-700/50 border border-slate-600/50 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm hover:bg-slate-700 transition-all duration-300 hover:border-blue-500/50"
              >
                <span>{selectedVariant?.name || 'Pilih Jenis'}</span>
                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showVariants ? 'rotate-180' : ''}`} />
              </button>
              
              {showVariants && (
                <div className="absolute top-full left-0 right-0 mt-1 sm:mt-2 bg-slate-800/95 backdrop-blur-xl border border-slate-600/50 rounded-lg sm:rounded-xl shadow-2xl z-10 max-h-32 sm:max-h-36 overflow-y-auto">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => {
                        setSelectedVariant(variant);
                        setShowVariants(false);
                      }}
                      className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-white hover:bg-slate-700/50 transition-colors border-b border-slate-700/50 last:border-b-0 hover:text-cyan-300"
                    >
                      <div className="flex justify-between items-center">
                        <span>{variant.name}</span>
                        <span className="text-cyan-300 font-semibold text-xs sm:text-sm">{formatPrice(variant.price)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between mb-3 sm:mb-4 text-xs sm:text-sm">
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current drop-shadow-sm" />
            <span className="font-semibold">{product.rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">{formatDownloads(product.downloads)} unduhan</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-end justify-between">
          <div className="space-y-1 flex-1">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {formatPrice(currentPrice)}
              </span>
              {currentOriginalPrice && (
                <span className="text-xs sm:text-sm text-gray-500 line-through opacity-75">
                  {formatPrice(currentOriginalPrice)}
                </span>
              )}
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 transform hover:scale-105 text-xs sm:text-sm ml-2 sm:ml-3 flex items-center space-x-1 sm:space-x-2"
          >
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Beli</span>
          </button>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default ProductCard;