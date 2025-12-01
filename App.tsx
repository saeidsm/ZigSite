import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Phone, Mail, MapPin, ArrowUp, Instagram } from 'lucide-react';

// Lazy Load Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const RoiPage = lazy(() => import('./pages/RoiPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));

// Loading Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-8 z-50 p-4 rounded-full bg-brand-cyan text-brand-navy shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-cyan-500/50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} strokeWidth={3} />
    </button>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'خانه' },
    { path: '/products', label: 'محصولات' },
    { path: '/technology', label: 'تکنولوژی' },
    { path: '/roi', label: 'توجیه اقتصادی' },
    { path: '/articles', label: 'مقالات' },
    { path: '/about', label: 'درباره ما' },
    { path: '/contact', label: 'تماس با ما' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              {!imageError ? (
                <img 
                  src="/pic/100.png" 
                  alt="Ziggurat Sustainable Solutions" 
                  className="h-12 w-auto object-contain transition-opacity duration-300"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#84cc16] to-[#4d7c0f] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                        Z
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-xl text-brand-navy tracking-tight leading-none">
                            ZIGGURAT
                        </span>
                        <span className="text-[0.6rem] font-bold text-[#84cc16] tracking-widest leading-none">
                            SUSTAINABLE SOLUTIONS
                        </span>
                    </div>
                </div>
              )}
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  isActive(link.path)
                    ? 'text-brand-blue font-bold'
                    : 'text-slate-600 hover:text-brand-blue'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-blue transform origin-right transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-blue hover:bg-brand-navy text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-brand-blue/30 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              مشاوره رایگان
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-navy p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel with Smooth Transition */}
      <div 
        className={`md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-brand-blue/10 text-brand-blue'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-brand-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
             <span className="font-bold text-2xl text-brand-cyan tracking-wider">ZIGGURAT</span>
          </div>
          <p className="text-slate-300 leading-relaxed max-w-md text-sm text-justify">
            زیگورات یک استارتاپ زایشی از آلومینیوم شیشه تهران مشاور تخصصی نما با 30 سال تجربه مهندسی نما ، فیزیک ساختمان و مدیریت مصرف انرژی در پوسته ساختمان میباشد. ما متعهد به ساخت آینده‌ای سبزتر برای ایران هستیم.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 text-brand-cyan">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/products" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">محصولات</Link></li>
            <li><Link to="/technology" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">دانش فنی</Link></li>
            <li><Link to="/roi" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">محاسبه بازگشت سرمایه</Link></li>
            <li><Link to="/articles" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">مقالات و اخبار</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">درباره ما</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-brand-cyan">تماس با ما</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2 group cursor-pointer">
              <MapPin size={16} className="text-brand-cyan group-hover:scale-110 transition-transform" />
              <a href="https://www.google.com/maps/search/?api=1&query=مجتمع+اداری+تجاری+ونوس+اشرفی+اصفهانی" target="_blank" rel="noopener noreferrer" className="hover:text-white">تهران، اشرفی اصفهانی، مجتمع اداری تجاری ونوس، طبقه 12 واحد 12</a>
            </li>
            <li className="flex items-center gap-2 group">
              <Phone size={16} className="text-brand-cyan group-hover:scale-110 transition-transform" />
              <a href="tel:+989120901530" dir="ltr" className="hover:text-white">+98 912 090 1530</a>
            </li>
            <li className="flex items-center gap-2 group">
              <Mail size={16} className="text-brand-cyan group-hover:scale-110 transition-transform" />
              <a href="mailto:info@zigguratsolutions.com" className="hover:text-white">info@zigguratsolutions.com</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/company/zigguratss/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-brand-cyan hover:text-brand-navy transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/zigguratsolutions" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="tel:+989120901530" className="p-2 bg-white/10 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Call Us">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-slate-700 text-center text-xs text-slate-400">
        <p>© 2024 تمام حقوق محفوظ است | راهکارهای پایدار زیگورات</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans">
        <ScrollToTop />
        <Navigation />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/roi" element={<RoiPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;