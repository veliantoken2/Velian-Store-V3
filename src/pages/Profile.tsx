import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Download, Star, CreditCard, Settings, Shield } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: 'January 2024',
    totalPurchases: 24,
    totalSpent: 1247
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'orders', label: 'Order History', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const downloadHistory = [
    {
      id: 1,
      name: 'Premium Dashboard UI Kit',
      downloadDate: '2024-01-15',
      fileSize: '45.2 MB',
      status: 'Available'
    },
    {
      id: 2,
      name: 'E-commerce Template',
      downloadDate: '2024-01-10',
      fileSize: '78.5 MB',
      status: 'Available'
    },
    {
      id: 3,
      name: 'Icon Pack Collection',
      downloadDate: '2024-01-05',
      fileSize: '23.1 MB',
      status: 'Available'
    }
  ];

  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      total: 149,
      status: 'Completed',
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      total: 79,
      status: 'Completed',
      items: 1
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      total: 29,
      status: 'Completed',
      items: 1
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">My Profile</h1>
          <p className="text-gray-400">Manage your account and view your purchase history</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-6">
              <div className="text-center mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500/20"
                />
                <h2 className="text-xl font-bold text-white">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
                <p className="text-sm text-cyan-300 mt-2">Member since {user.joinDate}</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400">Total Purchases</span>
                  <span className="text-white font-semibold">{user.totalPurchases}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400">Total Spent</span>
                  <span className="text-cyan-300 font-semibold">${user.totalSpent}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
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
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              {activeTab === 'profile' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Profile Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-700/50 border border-gray-600 rounded-lg">
                        <User className="w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={user.name}
                          className="flex-1 bg-transparent text-white focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-700/50 border border-gray-600 rounded-lg">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={user.email}
                          className="flex-1 bg-transparent text-white focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-700/50 border border-gray-600 rounded-lg">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          value={user.phone}
                          className="flex-1 bg-transparent text-white focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                      <div className="flex items-center space-x-3 p-3 bg-slate-700/50 border border-gray-600 rounded-lg">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={user.location}
                          className="flex-1 bg-transparent text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300">
                      Update Profile
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'downloads' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Download History</h3>
                  
                  <div className="space-y-4">
                    {downloadHistory.map((download) => (
                      <div key={download.id} className="bg-slate-700/30 border border-gray-600 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{download.name}</h4>
                            <p className="text-sm text-gray-400">Downloaded on {download.downloadDate}</p>
                            <p className="text-sm text-gray-400">File size: {download.fileSize}</p>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              download.status === 'Available' 
                                ? 'bg-green-500/20 text-green-300' 
                                : 'bg-gray-500/20 text-gray-300'
                            }`}>
                              {download.status}
                            </span>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                              <Download className="w-4 h-4 inline mr-2" />
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Order History</h3>
                  
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="bg-slate-700/30 border border-gray-600 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-white mb-1">Order {order.id}</h4>
                            <p className="text-sm text-gray-400">{order.date} • {order.items} items</p>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-lg font-bold text-cyan-300">${order.total}</p>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              order.status === 'Completed' 
                                ? 'bg-green-500/20 text-green-300' 
                                : 'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Account Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 border border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-blue-400" />
                        Security
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">Manage your account security settings</p>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                        Change Password
                      </button>
                    </div>
                    
                    <div className="bg-slate-700/30 border border-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Email Notifications</h4>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 text-blue-600 focus:ring-blue-500" defaultChecked />
                          <span className="text-gray-300">New product releases</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 text-blue-600 focus:ring-blue-500" defaultChecked />
                          <span className="text-gray-300">Order updates</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 text-blue-600 focus:ring-blue-500" />
                          <span className="text-gray-300">Marketing emails</span>
                        </label>
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