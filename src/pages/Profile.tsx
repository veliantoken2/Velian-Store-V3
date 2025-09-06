import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Download, Star, CreditCard, Settings, Shield, Edit3, Camera, Package, Clock, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();

  const mockUser = {
    name: user?.full_name || 'John Doe',
    email: user?.email || 'john.doe@email.com',
    phone: '+62 812-3456-7890',
    location: 'Jakarta, Indonesia',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: 'Januari 2024',
    totalPurchases: 24,
    totalSpent: 12470000,
    membershipLevel: 'Premium'
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'downloads', label: 'Download', icon: Download },
    { id: 'orders', label: 'Pesanan', icon: Package },
    { id: 'settings', label: 'Pengaturan', icon: Settings },
  ];

  const downloadHistory = [
    {
      id: 1,
      name: 'Premium Dashboard UI Kit',
      downloadDate: '2024-01-15',
      fileSize: '45.2 MB',
      status: 'Available',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'UI Kit'
    },
    {
      id: 2,
      name: 'E-commerce Template',
      downloadDate: '2024-01-10',
      fileSize: '78.5 MB',
      status: 'Available',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Template'
    },
    {
      id: 3,
      name: 'Icon Pack Collection',
      downloadDate: '2024-01-05',
      fileSize: '23.1 MB',
      status: 'Available',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Icons'
    },
    {
      id: 4,
      name: 'Mobile App UI Design',
      downloadDate: '2024-01-02',
      fileSize: '67.3 MB',
      status: 'Available',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'UI Kit'
    },
    {
      id: 5,
      name: 'Typography Font Bundle',
      downloadDate: '2023-12-28',
      fileSize: '156.8 MB',
      status: 'Available',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Font'
    },
    {
      id: 6,
      name: 'Stock Photo Bundle',
      downloadDate: '2023-12-25',
      fileSize: '892.4 MB',
      status: 'Available',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Photos'
    }
  ];

  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      total: 1490000,
      status: 'Completed',
      items: 3,
      products: ['Premium Dashboard UI Kit', 'E-commerce Template', 'Icon Pack']
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      total: 790000,
      status: 'Completed',
      items: 1,
      products: ['Mobile App UI Design']
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      total: 290000,
      status: 'Completed',
      items: 1,
      products: ['Typography Font Bundle']
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Profil Saya</h1>
          <p className="text-gray-400 text-sm sm:text-base">Kelola akun dan lihat riwayat pembelian Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-6">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={mockUser.avatar}
                    alt={mockUser.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 border-4 border-blue-500/20 object-cover"
                  />
                  <button className="absolute bottom-3 right-0 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-lg">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">{mockUser.name}</h2>
                <p className="text-gray-400 text-sm">{mockUser.email}</p>
                <div className="mt-2 inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
                  <Award className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-300 text-sm font-medium">{mockUser.membershipLevel}</span>
                </div>
                <p className="text-sm text-cyan-300 mt-2">Member sejak {mockUser.joinDate}</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-400">Total Pembelian</span>
                  <span className="text-white font-semibold">{mockUser.totalPurchases}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-400">Total Pengeluaran</span>
                  <span className="text-cyan-300 font-semibold">{formatPrice(mockUser.totalSpent)}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400 font-semibold">Aktif</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-800/30 text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              {activeTab === 'profile' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Informasi Profil</h3>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>{isEditing ? 'Simpan' : 'Edit'}</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-700/50 border border-gray-600 rounded-lg">
                        <User className="w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={mockUser.name}
                          disabled={!isEditing}
                          className="flex-1 bg-transparent text-white focus:outline-none disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-700/50 border border-gray-600 rounded-lg">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={mockUser.email}
                          disabled={!isEditing}
                          className="flex-1 bg-transparent text-white focus:outline-none disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nomor Telepon</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-700/50 border border-gray-600 rounded-lg">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          value={mockUser.phone}
                          disabled={!isEditing}
                          className="flex-1 bg-transparent text-white focus:outline-none disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Lokasi</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-700/50 border border-gray-600 rounded-lg">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={mockUser.location}
                          disabled={!isEditing}
                          className="flex-1 bg-transparent text-white focus:outline-none disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'downloads' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Riwayat Download</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {downloadHistory.map((download) => (
                      <div key={download.id} className="bg-slate-700/30 border border-gray-600 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="flex items-start space-x-4 mb-4">
                          <img
                            src={download.image}
                            alt={download.name}
                            className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-white mb-1 line-clamp-2 text-sm">{download.name}</h4>
                            <p className="text-xs text-cyan-300 mb-1">{download.category}</p>
                            <p className="text-xs text-gray-400">{download.downloadDate}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-400">
                            <p>{download.fileSize}</p>
                            <span className={`inline-block px-2 py-1 rounded-full mt-1 ${
                              download.status === 'Available' 
                                ? 'bg-green-500/20 text-green-300' 
                                : 'bg-gray-500/20 text-gray-300'
                            }`}>
                              {download.status}
                            </span>
                          </div>
                          <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Riwayat Pesanan</h3>
                  
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="bg-slate-700/30 border border-gray-600 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-white mb-1">Pesanan {order.id}</h4>
                            <p className="text-sm text-gray-400 flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{order.date} • {order.items} item</span>
                            </p>
                          </div>
                          
                          <div className="text-right mt-2 sm:mt-0">
                            <p className="text-xl font-bold text-cyan-300">{formatPrice(order.total)}</p>
                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                              order.status === 'Completed' 
                                ? 'bg-green-500/20 text-green-300' 
                                : 'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-700 pt-4">
                          <p className="text-sm text-gray-400 mb-2">Produk:</p>
                          <div className="flex flex-wrap gap-2">
                            {order.products.map((product, index) => (
                              <span key={index} className="px-3 py-1 bg-slate-600/50 text-gray-300 text-xs rounded-full">
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Pengaturan Akun</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 border border-gray-600 rounded-xl p-6">
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-blue-400" />
                        Keamanan
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">Kelola pengaturan keamanan akun Anda</p>
                      <div className="space-y-3">
                        <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                          Ubah Kata Sandi
                        </button>
                        <button className="w-full sm:w-auto px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors ml-0 sm:ml-3">
                          Aktifkan 2FA
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 border border-gray-600 rounded-xl p-6">
                      <h4 className="font-semibold text-white mb-4">Notifikasi Email</h4>
                      <div className="space-y-4">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 text-blue-600 focus:ring-blue-500 rounded" defaultChecked />
                          <span className="text-gray-300 text-sm">Produk baru dan penawaran</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 text-blue-600 focus:ring-blue-500 rounded" defaultChecked />
                          <span className="text-gray-300 text-sm">Update pesanan</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 text-blue-600 focus:ring-blue-500 rounded" />
                          <span className="text-gray-300 text-sm">Newsletter dan tips</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 text-blue-600 focus:ring-blue-500 rounded" />
                          <span className="text-gray-300 text-sm">Promosi khusus</span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-slate-700/30 border border-gray-600 rounded-xl p-6">
                      <h4 className="font-semibold text-white mb-4">Preferensi</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Bahasa</label>
                          <select className="w-full px-3 py-2 bg-slate-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Bahasa Indonesia</option>
                            <option>English</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Zona Waktu</label>
                          <select className="w-full px-3 py-2 bg-slate-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>WIB (UTC+7)</option>
                            <option>WITA (UTC+8)</option>
                            <option>WIT (UTC+9)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;