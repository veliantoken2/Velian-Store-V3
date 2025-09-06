import React, { useState } from 'react';
import { BarChart, Users, ShoppingBag, TrendingUp, Plus, Edit, Trash2, Eye, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,567',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      title: 'Total Users',
      value: '1,234',
      change: '+8.2%',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      title: 'Products Sold',
      value: '892',
      change: '+15.3%',
      icon: ShoppingBag,
      color: 'text-purple-400'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'text-cyan-400'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      product: 'UI Kit Bundle',
      amount: '$149',
      status: 'Completed',
      date: '2024-01-15'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      product: 'Icon Pack',
      amount: '$29',
      status: 'Processing',
      date: '2024-01-15'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      product: 'Template Bundle',
      amount: '$79',
      status: 'Completed',
      date: '2024-01-14'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Dashboard UI Kit',
      price: '$49',
      sales: 156,
      status: 'Active',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'E-commerce Template',
      price: '$79',
      sales: 89,
      status: 'Active',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Icon Collection',
      price: '$29',
      sales: 234,
      status: 'Active',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' },
    { id: 'users', label: 'Users' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your store and monitor performance</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg bg-slate-700/50 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Orders</h2>
                <button className="text-cyan-300 hover:text-cyan-200 text-sm font-medium">
                  View all
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left text-gray-400 font-medium py-3">Order ID</th>
                      <th className="text-left text-gray-400 font-medium py-3">Customer</th>
                      <th className="text-left text-gray-400 font-medium py-3">Product</th>
                      <th className="text-left text-gray-400 font-medium py-3">Amount</th>
                      <th className="text-left text-gray-400 font-medium py-3">Status</th>
                      <th className="text-left text-gray-400 font-medium py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-800 hover:bg-slate-700/20">
                        <td className="py-4 text-white font-medium">{order.id}</td>
                        <td className="py-4 text-gray-300">{order.customer}</td>
                        <td className="py-4 text-gray-300">{order.product}</td>
                        <td className="py-4 text-cyan-300 font-semibold">{order.amount}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            order.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-300' 
                              : 'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-gray-400">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Product Management</h2>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Add Product</span>
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-slate-700/30 border border-gray-600 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white truncate">{product.name}</h3>
                        <p className="text-cyan-300 font-bold">{product.price}</p>
                        <p className="text-sm text-gray-400">{product.sales} sales</p>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-2 ${
                          product.status === 'Active' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-gray-500/20 text-gray-300'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end space-x-2 mt-4">
                      <button className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 rounded-lg transition-all duration-300">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Analytics Overview</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BarChart className="w-5 h-5 mr-2 text-blue-400" />
                  Revenue Trends
                </h3>
                <div className="h-64 flex items-center justify-center text-gray-400">
                  <p>Chart visualization would be implemented here</p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Top Selling Products</h3>
                <div className="space-y-4">
                  {products.map((product, index) => (
                    <div key={product.id} className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-400">#{index + 1}</span>
                        <img src={product.image} alt="" className="w-8 h-8 rounded" />
                        <span className="text-white font-medium">{product.name}</span>
                      </div>
                      <span className="text-cyan-300 font-semibold">{product.sales} sales</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;