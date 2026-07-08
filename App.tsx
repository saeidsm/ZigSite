import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';

// Lazy-loaded pages (one section each, mirroring the reference prototype)
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const RoiPage = lazy(() => import('./pages/RoiPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const NAV_LINKS = [
  { path: '/', label: 'خانه' },
  { path: '/products', label: 'محصولات' },
  { path: '/technology', label: 'تکنولوژی' },
  { path: '/roi', label: 'توجیه اقتصادی' },
  { path: '/articles', label: 'مقالات' },
  { path: '/about', label: 'درباره ما' },
  { path: '/contact', label: 'تماس با ما' },
] as const;

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  const t = document.documentElement.getAttribute('data-theme');
  return t === 'dark' ? 'dark' : 'light';
};

const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: 44, height: 44, border: '3px solid var(--rule)', borderTopColor: 'var(--accent)', borderRadius: '100px', animation: 'zzSpin .7s linear infinite' }} />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch { window.scrollTo(0, 0); }
  }, [pathname]);
  return null;
};

const ZigLogo = ({ fill = 'var(--accent)' }: { fill?: string }) => (
  <svg width="30" height="26" viewBox="0 0 28 24" fill="none" aria-hidden="true">
    <rect x="2" y="16" width="24" height="5.2" rx="1.4" fill={fill} />
    <rect x="6.5" y="8.7" width="15" height="5.2" rx="1.4" fill={fill} />
    <rect x="10.5" y="1.5" width="7" height="5.2" rx="1.4" fill={fill} />
  </svg>
);

const Navigation = ({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) => (
  <header
    style={{
      position: 'sticky', top: 0, zIndex: 60,
      background: 'color-mix(in srgb, var(--bg) 88%, transparent)',
      backdropFilter: 'saturate(1.4) blur(14px)', WebkitBackdropFilter: 'saturate(1.4) blur(14px)',
      borderBottom: '1px solid var(--rule)',
    }}
  >
    <div style={{ maxWidth: 1200, marginInline: 'auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 11, flexShrink: 0 }} aria-label="زیگورات — خانه">
        <ZigLogo />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: '.01em', color: 'var(--ink)' }}>زیگورات</span>
          <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '.06em', color: 'var(--accent)' }}>طیف‌گزین · SUSTAINABLE</span>
        </div>
      </Link>

      <nav className="zz-nav-links zz-scroll" style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--surface)', border: '1px solid var(--rule)', borderRadius: 100, padding: 6 }}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            style={({ isActive }) => ({
              fontFamily: 'inherit', fontSize: 13.5, fontWeight: 500, padding: '8px 14px',
              borderRadius: 100, whiteSpace: 'nowrap',
              color: isActive ? 'var(--accent)' : 'var(--muted)', transition: 'color .2s',
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <button
          onClick={toggleTheme}
          aria-label="تغییر تم روشن و تیره"
          style={{ width: 40, height: 40, borderRadius: 100, border: '1px solid var(--rule)', background: 'var(--surface)', color: 'var(--ink)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" style={{ transform: theme === 'dark' ? 'rotate(180deg)' : 'none', transition: 'transform .4s ease' }}>
            <circle cx="9" cy="9" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M9 1.5 A7.5 7.5 0 0 1 9 16.5 Z" fill="currentColor" />
          </svg>
        </button>
        <Link to="/contact" className="zz-btn" style={{ fontSize: 14, padding: '11px 20px' }}>مشاوره رایگان</Link>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer style={{ background: 'var(--onyx)', color: '#cfd4cb', borderTop: '1px solid rgba(255,255,255,.06)' }}>
    <div className="zz-grid-3" style={{ maxWidth: 1200, marginInline: 'auto', padding: '64px 24px 32px', display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr) minmax(0,1.2fr)', gap: 44 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 18 }}>
          <ZigLogo fill="#64c23f" />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span style={{ fontWeight: 800, fontSize: 19, color: '#f0efe9' }}>زیگورات</span>
            <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '.06em', color: '#64c23f' }}>طیف‌گزین · SUSTAINABLE</span>
          </div>
        </div>
        <p style={{ fontSize: 14, lineHeight: 2, color: '#9aa295', margin: 0, maxWidth: '42ch', textAlign: 'justify' }}>
          استارتاپی زایشی از آلومینیوم شیشهٔ تهران، مشاور تخصصی نما با بیش از ۳۰ سال تجربه در مهندسی نما، فیزیک ساختمان و مدیریت مصرف انرژی در پوستهٔ ساختمان. متعهد به آینده‌ای سبزتر برای ایران.
        </p>
      </div>
      <div>
        <h3 style={{ fontSize: 12, letterSpacing: '.1em', color: '#64c23f', fontWeight: 700, margin: '0 0 16px' }}>دسترسی سریع</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14 }}>
          <Link to="/products" style={{ color: '#cfd4cb' }}>محصولات</Link>
          <Link to="/technology" style={{ color: '#cfd4cb' }}>تکنولوژی</Link>
          <Link to="/roi" style={{ color: '#cfd4cb' }}>توجیه اقتصادی</Link>
          <Link to="/articles" style={{ color: '#cfd4cb' }}>مقالات</Link>
          <Link to="/about" style={{ color: '#cfd4cb' }}>درباره ما</Link>
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: 12, letterSpacing: '.1em', color: '#64c23f', fontWeight: 700, margin: '0 0 16px' }}>تماس با ما</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13.5, lineHeight: 1.8, color: '#9aa295' }}>
          <span>تهران، اشرفی اصفهانی، مجتمع اداری تجاری ونوس، طبقه ۱۲، واحد ۱۲</span>
          <a href="tel:+989120901530" dir="ltr" style={{ color: '#cfd4cb', textAlign: 'right' }}>+98 912 090 1530</a>
          <a href="mailto:info@zigguratsolutions.com" style={{ color: '#cfd4cb' }}>info@zigguratsolutions.com</a>
        </div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}>
      <div style={{ maxWidth: 1200, marginInline: 'auto', padding: '22px 24px', fontSize: 12.5, color: '#7f867a', textAlign: 'center' }}>
        © ۱۴۰۴ راهکارهای پایدار زیگورات — تمام حقوق محفوظ است
      </div>
    </div>
  </footer>
);

const App = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('zz-theme', theme); } catch { /* storage disabled */ }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ScrollToTop />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <main style={{ flexGrow: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/roi" element={<RoiPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
