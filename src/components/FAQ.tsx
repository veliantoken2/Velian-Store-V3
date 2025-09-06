import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqData = [
    {
      category: 'Pembelian & Pembayaran',
      questions: [
        {
          question: 'Bagaimana cara melakukan pembelian di Velian Store?',
          answer: 'Untuk melakukan pembelian, pilih produk yang diinginkan, klik "Beli", masukkan ke keranjang, lalu lanjutkan ke checkout. Anda dapat membayar menggunakan berbagai metode pembayaran yang tersedia seperti transfer bank, e-wallet, atau QRIS.'
        },
        {
          question: 'Metode pembayaran apa saja yang tersedia?',
          answer: 'Kami menerima berbagai metode pembayaran: Transfer Bank (BCA, Mandiri, BNI, BRI), E-wallet (GoPay, OVO, DANA, ShopeePay), QRIS, dan Virtual Account. Semua transaksi diproses dengan sistem keamanan tinggi.'
        },
        {
          question: 'Apakah pembayaran di Velian Store aman?',
          answer: 'Ya, sangat aman. Kami menggunakan enkripsi SSL 256-bit dan bekerja sama dengan payment gateway terpercaya. Data pembayaran Anda tidak disimpan di server kami dan langsung diproses oleh penyedia layanan pembayaran yang tersertifikasi.'
        },
        {
          question: 'Berapa lama proses verifikasi pembayaran?',
          answer: 'Pembayaran otomatis terverifikasi dalam 1-5 menit untuk e-wallet dan QRIS. Untuk transfer bank, verifikasi membutuhkan waktu 5-15 menit. Anda akan mendapat notifikasi email setelah pembayaran berhasil diverifikasi.'
        }
      ]
    },
    {
      category: 'Download & Lisensi',
      questions: [
        {
          question: 'Bagaimana cara mendownload produk setelah pembelian?',
          answer: 'Setelah pembayaran berhasil, Anda akan menerima email dengan link download. Anda juga dapat mengakses semua produk yang dibeli melalui halaman "Download" di akun Anda. Link download berlaku selamanya.'
        },
        {
          question: 'Apakah ada batasan download?',
          answer: 'Tidak ada batasan download. Setelah membeli, Anda dapat mendownload produk kapan saja dan berapa kali pun. Kami juga menyediakan re-download gratis jika file hilang atau rusak.'
        },
        {
          question: 'Apa perbedaan jenis lisensi yang tersedia?',
          answer: 'Basic License: untuk 1 proyek personal/komersial. Extended License: untuk multiple proyek dan revisi unlimited. Developer License: untuk agency/tim dengan hak distribusi terbatas. Semua lisensi termasuk update gratis selamanya.'
        },
        {
          question: 'Bisakah saya menggunakan produk untuk klien?',
          answer: 'Ya, dengan Extended License atau Developer License Anda dapat menggunakan produk untuk proyek klien. Basic License hanya untuk 1 proyek. Lihat detail lisensi di halaman produk untuk informasi lengkap.'
        }
      ]
    },
    {
      category: 'Produk & Kualitas',
      questions: [
        {
          question: 'Format file apa saja yang tersedia?',
          answer: 'Produk kami tersedia dalam berbagai format: Figma, Sketch, Adobe XD, PSD, AI, SVG, PNG, JPG. Template web tersedia dalam HTML/CSS, React, Vue, atau format lainnya sesuai deskripsi produk.'
        },
        {
          question: 'Apakah produk compatible dengan software lama?',
          answer: 'Kami menyediakan file dalam multiple format untuk kompatibilitas maksimal. Untuk software lama, tersedia format legacy. Jika ada masalah kompatibilitas, tim support kami siap membantu konversi format.'
        },
        {
          question: 'Bagaimana jika produk tidak sesuai ekspektasi?',
          answer: 'Kami menawarkan garansi 30 hari uang kembali tanpa syarat. Jika produk tidak sesuai ekspektasi atau ada masalah teknis, hubungi support untuk refund penuh atau penggantian produk.'
        },
        {
          question: 'Apakah ada update untuk produk yang sudah dibeli?',
          answer: 'Ya! Semua produk mendapat update gratis selamanya. Anda akan mendapat notifikasi email ketika ada update dan dapat mendownload versi terbaru melalui akun Anda.'
        }
      ]
    },
    {
      category: 'Akun & Support',
      questions: [
        {
          question: 'Bagaimana cara membuat akun?',
          answer: 'Klik "Masuk" di header, pilih "Daftar", isi email dan password. Verifikasi email akan dikirim untuk aktivasi akun. Anda juga bisa checkout sebagai guest, tapi kami rekomendasikan membuat akun untuk akses download yang mudah.'
        },
        {
          question: 'Lupa password, bagaimana reset?',
          answer: 'Di halaman login, klik "Lupa Password", masukkan email Anda. Link reset password akan dikirim ke email. Ikuti instruksi untuk membuat password baru. Jika tidak menerima email, cek folder spam.'
        },
        {
          question: 'Bagaimana cara menghubungi customer support?',
          answer: 'Anda dapat menghubungi kami melalui: Live Chat (tersedia 24/7), Email: support@velianstore.com, WhatsApp: +62 812-3456-7890, atau gunakan AI Assistant di website untuk bantuan cepat.'
        },
        {
          question: 'Berapa lama response time support?',
          answer: 'Live Chat: respon instan, Email: maksimal 2 jam di hari kerja, WhatsApp: maksimal 1 jam. Untuk masalah urgent, gunakan live chat atau WhatsApp untuk respon tercepat.'
        }
      ]
    }
  ];

  const allQuestions = faqData.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      id: categoryIndex * 100 + questionIndex,
      category: category.category
    }))
  );

  const filteredQuestions = allQuestions.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang Velian Store
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari pertanyaan atau kata kunci..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {filteredQuestions.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-5 border-t border-slate-700/50">
                  <div className="pt-4 text-gray-300 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredQuestions.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Tidak ada hasil ditemukan</h3>
            <p className="text-gray-400 mb-4">
              Coba gunakan kata kunci yang berbeda atau hubungi support kami
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Hapus Pencarian
            </button>
          </div>
        )}

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Masih ada pertanyaan?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Tim support kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami melalui berbagai channel yang tersedia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="#chat"
              className="flex items-center justify-center space-x-3 p-4 bg-blue-600/20 border border-blue-500/30 rounded-xl hover:bg-blue-600/30 transition-all duration-300 text-blue-300 hover:text-blue-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Live Chat</span>
            </a>
            
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-4 bg-green-600/20 border border-green-500/30 rounded-xl hover:bg-green-600/30 transition-all duration-300 text-green-300 hover:text-green-200"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
            
            <a
              href="mailto:support@velianstore.com"
              className="flex items-center justify-center space-x-3 p-4 bg-purple-600/20 border border-purple-500/30 rounded-xl hover:bg-purple-600/30 transition-all duration-300 text-purple-300 hover:text-purple-200"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;