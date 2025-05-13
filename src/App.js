import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  Bars3Icon, 
  XMarkIcon, 
  CheckIcon, 
  FireIcon,
  HeartIcon,
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ChevronDownIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader için 2 saniye bekletiyoruz
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
          <div className="relative">
            <h1 className="text-4xl font-bold text-white mb-2">GYM<span className="text-primary">XL</span></h1>
            <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="h-10 w-auto"
                src="/images/facivon.png"
                alt="GymXL Logo"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link to="home" smooth={true} duration={500} className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Ana Sayfa
              </Link>
              <Link to="about" smooth={true} duration={500} className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Hakkımızda
              </Link>
              <Link to="services" smooth={true} duration={500} className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Hizmetler
              </Link>
              <Link to="trainers" smooth={true} duration={500} className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Eğitmenler
              </Link>
              <Link to="contact" smooth={true} duration={500} className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                İletişim
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Menüyü aç</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-black/95 backdrop-blur-sm border-t border-primary/10 ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Hakkımızda
            </Link>
            <Link 
              to="services" 
              smooth={true} 
              duration={500} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Hizmetler
            </Link>
            <Link 
              to="trainers" 
              smooth={true} 
              duration={500} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Eğitmenler
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              İletişim
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Arka Plan */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/banner.mp4" type="video/mp4" />
          </video>
          {/* Karartma Katmanı */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Hero İçeriği */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
              GÜÇLÜ OL
            </motion.span>
            <motion.span 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-primary"
            >
              BAŞARIYA ULAŞ
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            GYMXL ile hayalinizdeki vücuda kavuşun. Profesyonel eğitmenler ve modern ekipmanlarla sizleri bekliyoruz.
          </motion.p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="rounded-md shadow"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                HEMEN BAŞLA
              </Link>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-3 sm:mt-0 sm:ml-3"
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                DAHA FAZLA BİLGİ
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Aşağı Kaydırma Göstergesi */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <ChevronDownIcon className="h-8 w-8 text-primary animate-bounce" />
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-extrabold text-white sm:text-4xl"
            >
              Hakkımızda
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
            >
              GYMXL, 2024 yılında kurulmuş, modern ekipmanları ve uzman kadrosuyla hizmet veren premium bir spor salonudur. 
              550 metrekarelik alanımızda, en son teknoloji fitness ekipmanları ve özel tasarlanmış antrenman alanları bulunmaktadır.
              Amacımız, her bireyin kendi fitness yolculuğunda en iyi şekilde ilerlemesini sağlamaktır.
            </motion.p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-secondary/50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-xl font-bold text-primary">550m²</h3>
                <p className="text-gray-300">Toplam Alan</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-secondary/50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-xl font-bold text-primary">50+</h3>
                <p className="text-gray-300">Modern Ekipman</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-secondary/50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-xl font-bold text-primary">15+</h3>
                <p className="text-gray-300">Uzman Eğitmen</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-secondary/50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-xl font-bold text-primary">Premium</h3>
                <p className="text-gray-300">Hizmet</p>
              </motion.div>
            </div>
          </motion.div>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-secondary p-8 rounded-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6"
                >
                  <FireIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Modern Ekipman</h3>
                <p className="text-gray-300">En son teknoloji fitness ekipmanlarıyla hizmetinizdeyiz. Tüm ekipmanlarımız düzenli olarak bakımdan geçirilmektedir. Cardio bölümünde 20+ makine, ağırlık bölümünde 30+ makine ve fonksiyonel antrenman alanında özel ekipmanlar bulunmaktadır.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-secondary p-8 rounded-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6"
                >
                  <HeartIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Premium Hizmet</h3>
                <p className="text-gray-300">Size özel hazırlanmış programlar ve profesyonel eğitmenlerle hedeflerinize ulaşmanıza yardımcı oluyoruz.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-secondary p-8 rounded-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6"
                >
                  <BoltIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Uzman Kadro</h3>
                <p className="text-gray-300">Alanında uzman eğitmenlerimizle kişisel gelişiminize destek oluyoruz. Her eğitmenimiz en az 5 yıllık deneyime sahiptir. Spor bilimleri, fizyoterapi ve beslenme alanlarında uzmanlaşmış eğitmenlerimizle hedeflerinize ulaşmanıza yardımcı oluyoruz.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Hizmetlerimiz
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Size özel hazırlanmış programlar ve profesyonel eğitmenlerle hedeflerinize ulaşmanıza yardımcı oluyoruz.
              Modern ekipmanlarımız ve uzman kadromuzla premium bir fitness deneyimi sunuyoruz.
            </p>
          </motion.div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)"
              }}
              className="bg-secondary p-8 rounded-lg"
            >
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                {/* Buraya hizmet resmi gelecek */}
                <div className="w-full h-full bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Kişisel Antrenman</h3>
              <p className="text-gray-300 mb-4">Size özel hazırlanmış programlarla hedeflerinize ulaşın. Kişisel antrenörlerimiz sizinle birebir ilgilenir. Vücut analizi, ölçümler ve düzenli takip ile ilerlemenizi gözlemleriz.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Detaylı vücut analizi ve ölçümler
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Kişiye özel program tasarımı
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Haftalık ilerleme takibi
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Beslenme danışmanlığı
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Mobil uygulama ile takip
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)"
              }}
              className="bg-secondary p-8 rounded-lg"
            >
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                {/* Buraya hizmet resmi gelecek */}
                <div className="w-full h-full bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Grup Dersleri</h3>
              <p className="text-gray-300 mb-4">Yoga, pilates ve grup fitness dersleriyle motivasyonunuzu artırın. Grup derslerimiz maksimum 15 kişiliktir. Özel stüdyolarımızda profesyonel eğitmenler eşliğinde dersler verilmektedir.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Pilates 
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  HIIT ve CrossFit
                </li>
                
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Spinning
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)"
              }}
              className="bg-secondary p-8 rounded-lg"
            >
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                {/* Buraya hizmet resmi gelecek */}
                <div className="w-full h-full bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Beslenme Danışmanlığı</h3>
              <p className="text-gray-300 mb-4">Uzman diyetisyenlerimizle sağlıklı beslenme planınızı oluşturun. Hedeflerinize uygun beslenme programları hazırlıyoruz.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Kişiye özel beslenme planı
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Vücut kompozisyonu analizi
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Supplement danışmanlığı
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Düzenli takip ve raporlama
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Galeri
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              GYMXL'in modern tesisleri, ekipmanları ve etkinliklerinden kareler.
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Galeri Kartları */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-xl overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gradient-to-br from-primary/30 to-secondary/80 relative overflow-hidden">
                <img 
                  src="/images/foto2.jpg" 
                  alt="Modern Ekipmanlar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-xl overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gradient-to-br from-primary/30 to-secondary/80 relative overflow-hidden">
                <img 
                  src="/images/foto3.jpg" 
                  alt="Grup Dersleri" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-xl overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gradient-to-br from-primary/30 to-secondary/80 relative overflow-hidden">
                <img 
                  src="/images/foto6.jpg" 
                  alt="Özel Antrenman Alanları" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-xl overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gradient-to-br from-primary/30 to-secondary/80 relative overflow-hidden">
                <img 
                  src="/images/foto5.jpg" 
                  alt="Yoga ve Pilates Stüdyoları" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-xl overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gradient-to-br from-primary/30 to-secondary/80 relative overflow-hidden">
                <img 
                  src="/images/foto4.jpg" 
                  alt="Dinlenme Alanları" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-xl overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gradient-to-br from-primary/30 to-secondary/80 relative overflow-hidden">
                <img 
                  src="/images/foto1.jpg" 
                  alt="Etkinlikler" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Eğitmenlerimiz
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Alanında uzman eğitmenlerimizle tanışın. Her biri kendi alanında en az 5 yıllık deneyime sahiptir.
            </p>
          </motion.div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary p-6 rounded-lg"
            >
              <div className="w-full h-64 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                {/* Buraya eğitmen resmi gelecek */}
                <div className="w-full h-full bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ahmet Yılmaz</h3>
              <p className="text-primary mb-4">Fitness Eğitmeni</p>
              <p className="text-gray-300">10 yıllık deneyim, CrossFit Level 2 sertifikası, Spor Bilimleri mezunu</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary p-6 rounded-lg"
            >
              <div className="w-full h-64 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                {/* Buraya eğitmen resmi gelecek */}
                <div className="w-full h-full bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ayşe Demir</h3>
              <p className="text-primary mb-4">Yoga ve Pilates Eğitmeni</p>
              <p className="text-gray-300">8 yıllık deneyim, Yoga Alliance RYT-200 sertifikası, Fizyoterapi mezunu</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary p-6 rounded-lg"
            >
              <div className="w-full h-64 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                {/* Buraya eğitmen resmi gelecek */}
                <div className="w-full h-full bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mehmet Kaya</h3>
              <p className="text-primary mb-4">Beslenme Uzmanı</p>
              <p className="text-gray-300">12 yıllık deneyim, Sporcu Beslenmesi sertifikası, Beslenme ve Diyetetik mezunu</p>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Bize Ulaşın
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Size özel hazırlanmış programımızı birlikte belirleyelim.
            </p>
          </motion.div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPinIcon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">Adres</p>
                      <p className="text-gray-300">Yalıkavak, Bodrum Cd. No:13, 48000 Bodrum/Muğla</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <PhoneIcon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">Telefon</p>
                      <p className="text-gray-300">0542 625 89 76</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <EnvelopeIcon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">E-posta</p>
                      <p className="text-gray-300">info@gymxl.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full h-[300px] rounded-lg overflow-hidden"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.2690724483805!2d27.3104943!3d37.098712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be710f97e45859%3A0x8555b9666938cf6a!2sXLarge%20Fitness%20GYM%20Yal%C4%B1kavak!5e0!3m2!1str!2str!4v1747153510967!5m2!1str!2str" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XLarge Fitness GYM Yalıkavak Konum Haritası"
                ></iframe>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary/20 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6">Bize Ulaşın</h3>
              <form className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-black/50 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-black/50 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md bg-black/50 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-black/50 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
                  >
                    Gönder
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/905426258976?text=Bilgi%20almak%20istiyorum"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 md:w-16 md:h-16"
        title="WhatsApp ile Bilgi Al"
      >
        <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </a>

      {/* Footer */}
      <footer className="bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white">GYM<span className="text-primary">XL</span></h2>
              <p className="mt-4 text-gray-300">
                Premium spor salonu deneyimi için doğru adres.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white">Ana Sayfa</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white">Hakkımızda</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Hizmetler</a></li>
                <li><a href="#trainers" className="text-gray-300 hover:text-white">Eğitmenler</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-300 hover:text-white">Kişisel Antrenman</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Grup Dersleri</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Beslenme Danışmanlığı</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Yoga ve Pilates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Atatürk Caddesi No:123</li>
                <li className="text-gray-300">İstanbul, Türkiye</li>
                <li className="text-gray-300">+90 (212) 123 45 67</li>
                <li className="text-gray-300">info@gymxl.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-300">
              © 2024 GYMXL. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 