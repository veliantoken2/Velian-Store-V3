import React from 'react';
import { Users, Target, Award, Zap, Heart, Shield, Rocket, Globe, Star, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Pengguna Aktif', icon: Users },
    { number: '10K+', label: 'Produk Digital', icon: Zap },
    { number: '4.9/5', label: 'Rating Kepuasan', icon: Star },
    { number: '99.9%', label: 'Uptime Server', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Sistem pembayaran terenkripsi SSL 256-bit dan perlindungan data tingkat enterprise'
    },
    {
      icon: Rocket,
      title: 'Download Instan',
      description: 'Akses langsung ke semua file setelah pembayaran berhasil, tanpa perlu menunggu'
    },
    {
      icon: Globe,
      title: 'Akses Global',
      description: 'Platform dapat diakses dari seluruh dunia dengan server CDN berkecepatan tinggi'
    },
    {
      icon: Heart,
      title: 'Support 24/7',
      description: 'Tim customer service profesional siap membantu Anda kapan saja'
    },
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Semua produk telah melalui kurasi ketat untuk memastikan kualitas terbaik'
    },
    {
      icon: CheckCircle,
      title: 'Garansi Uang Kembali',
      description: 'Jaminan 30 hari uang kembali jika produk tidak sesuai ekspektasi'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Visioner di balik Velian Store dengan pengalaman 10+ tahun di industri digital'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Memimpin tim kreatif untuk menghadirkan produk digital berkualitas tinggi'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Arsitek teknologi yang memastikan platform berjalan optimal dan aman'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Customer Success',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Memastikan setiap pelanggan mendapat pengalaman terbaik di platform kami'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Awal Perjalanan',
      description: 'Velian Store didirikan dengan visi menyediakan produk digital berkualitas tinggi'
    },
    {
      year: '2021',
      title: 'Ekspansi Produk',
      description: 'Menambah kategori UI Kit dan Template dengan lebih dari 1000 produk'
    },
    {
      year: '2022',
      title: 'Milestone 10K Users',
      description: 'Mencapai 10.000 pengguna aktif dan meluncurkan program afiliasi'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Mengintegrasikan AI Assistant untuk memberikan bantuan yang lebih personal'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Ekspansi ke pasar global dengan dukungan multi-bahasa dan mata uang'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Zap className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tentang <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Velian Store</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Platform terdepan untuk produk digital premium yang menghadirkan solusi kreatif terbaik 
            bagi desainer, developer, dan kreator di seluruh dunia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2">
              <span>Mulai Berbelanja</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
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

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Misi & Visi Kami</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Misi
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Menyediakan produk digital berkualitas tinggi yang membantu kreator, desainer, 
                    dan developer untuk mewujudkan visi kreatif mereka dengan mudah dan efisien.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Visi
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Menjadi platform terdepan di dunia untuk produk digital premium, 
                    menciptakan ekosistem yang mendukung inovasi dan kreativitas global.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mengapa Memilih Velian Store?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman terbaik dengan fitur-fitur unggulan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perjalanan Kami</h2>
            <p className="text-xl text-gray-400">
              Melihat kembali milestone penting dalam perjalanan Velian Store
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Bertemu dengan orang-orang hebat di balik kesuksesan Velian Store
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Memulai Perjalanan Kreatif Anda?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan kreator yang telah mempercayai Velian Store 
                untuk kebutuhan produk digital mereka.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2">
                  <span>Jelajahi Produk</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;