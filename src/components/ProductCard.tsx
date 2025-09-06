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
      className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Gallery */}
      <div className="relative overflow-hidden">
        {/* Main Image */}
        <div className="relative h-48 sm:h-56">
          <img
            src={images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        {/* Image Gallery Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-xl backdrop-blur-sm transition-all duration-300 ${isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-red-500'}`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-blue-500 transition-all duration-300">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-green-500 transition-all duration-300">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-cyan-500/20 backdrop-blur-sm text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30 shadow-lg">
            {product.category}
          </span>
        </div>

        {/* Discount Badge */}
        {currentOriginalPrice && (
          <div className="absolute bottom-12 left-3">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
              HEMAT {Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100)}%
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-base sm:text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Product Variants */}
        {product.variants && product.variants.length > 0 && (
          <div className="mb-3">
            <div className="relative">
              <button
                onClick={() => setShowVariants(!showVariants)}
                className="w-full flex items-center justify-between p-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white text-sm hover:bg-slate-700 transition-colors"
              >
                <span>{selectedVariant?.name || 'Pilih Jenis'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showVariants ? 'rotate-180' : ''}`} />
              </button>
              
              {showVariants && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-10 max-h-32 overflow-y-auto">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => {
                        setSelectedVariant(variant);
                        setShowVariants(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-white hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                    >
                      <div className="flex justify-between items-center">
                        <span>{variant.name}</span>
                        <span className="text-cyan-300 font-semibold">{formatPrice(variant.price)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between mb-3 text-sm">
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium">{product.rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <Download className="w-4 h-4" />
            <span>{formatDownloads(product.downloads)}</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl font-bold text-cyan-300">
                {formatPrice(currentPrice)}
              </span>
              {currentOriginalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(currentOriginalPrice)}
                </span>
              )}
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 text-sm"
          >
            + Keranjang
          </button>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default ProductCard;