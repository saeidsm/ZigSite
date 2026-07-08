import React from 'react';
import SEO from '../components/SEO';
import { Label, Btn } from '../components/ui';

const S: React.CSSProperties = { maxWidth: 1200, marginInline: 'auto' };

const SPECS: [string, string][] = [
  ['عبور نور مرئی (VLT)', '۵۰٪ تا ۷۵٪ (قابل تنظیم)'],
  ['دفع مادون‌قرمز (IRR)', 'تا ۹۹٪'],
  ['دفع فرابنفش (UVR)', 'تا ۱۰۰٪'],
  ['سختی سطح', '۶H'],
  ['صرفه‌جویی انرژی', 'تا ۳۰٪ در بار سرمایشی'],
];

const ProductsPage = () => (
  <>
    <SEO
      title="محصولات — نانوپوشش و شیشهٔ طیف‌گزین"
      description="خط محصولات طیف‌گزین زیگورات؛ نانوشیلد سوپرکلیر دوجزئی، شیشهٔ طیف‌گزین آمادهٔ نصب و خدمات اجرای در محل. جایگزین داخلی شیشه‌های Low-E و Sunergy."
      keywords={['شیشهٔ طیف‌گزین زیگورات', 'نانوشیلد سوپرکلیر', 'نانوپوشش دوجزئی', 'شیشه های‌پرفورمنس']}
      image="/assets/formula-jar.jpg"
    />

    <section style={{ ...S, padding: '72px 24px 44px' }}>
      <Label>خط محصولات</Label>
      <h1 className="zz-h1" style={{ fontSize: 'clamp(34px,4.2vw,58px)', margin: '0 0 20px', maxWidth: '20ch' }}>نانوپوشش و شیشهٔ <span className="em">طیف‌گزین</span></h1>
      <p style={{ fontSize: 18, lineHeight: 2, color: 'var(--muted)', margin: 0, maxWidth: '60ch', textAlign: 'justify' }}>خانوادهٔ محصولات طیف‌گزین زیگورات؛ از نانوپوشش دوجزئیِ قابل اجرا روی شیشهٔ موجود تا شیشهٔ های‌پرفورمنس آمادهٔ نصب. جایگزینی داخلی برای شیشه‌های وارداتی Low-E و Sunergy، با کنترل هوشمند طیف نور و گرما.</p>
    </section>

    {/* FLAGSHIP */}
    <section className="zz-grid-2" style={{ ...S, padding: '0 24px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center' }}>
      <div style={{ aspectRatio: '1 / 1', borderRadius: 48, overflow: 'hidden', border: '1px solid var(--rule)' }}>
        <img src="/assets/formula-jar.jpg" alt="فرمول نانوپوشش طیف‌گزین زیگورات" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-soft)', padding: '6px 14px', borderRadius: 100, marginBottom: 16 }}>محصول پرچم‌دار</span>
        <h2 className="zz-h2" style={{ fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.25, margin: '0 0 18px' }}>شیشهٔ طیف‌گزین زیگورات</h2>
        <p style={{ fontSize: 16, lineHeight: 2.05, color: 'var(--muted)', margin: '0 0 26px', textAlign: 'justify' }}>نانوذرات فلزات کمیاب با پدیدهٔ رزونانس پلاسمون سطحی (LSPR)، طیف مادون‌قرمز را جذب و بازتاب می‌کنند و اجازهٔ عبور نور مرئی را می‌دهند. نتیجه: خنکیِ محسوس، بدون تیرگی.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {[['۷۵٪', 'عبور نور مرئی'], ['۹۹٪', 'دفع مادون‌قرمز'], ['۱۰۰٪', 'دفع فرابنفش']].map(([v, l]) => (
            <div key={l} className="zz-card" style={{ borderRadius: 18, padding: 18 }}>
              <div style={{ fontSize: 28, fontWeight: 300, color: 'var(--ink)' }}>{v}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* THREE PRODUCTS */}
    <section style={{ background: 'var(--bg2)', borderBlock: '1px solid var(--rule)' }}>
      <div style={{ ...S, padding: '88px 24px' }}>
        <h2 className="zz-h2" style={{ fontSize: 'clamp(26px,3vw,40px)', margin: '0 0 40px' }}>سه محصول، یک فناوری</h2>
        <div className="zz-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[
            { img: '/assets/product-line.jpg', alt: 'نانوشیلد سوپرکلیر دوجزئی', t: 'نانوشیلد سوپرکلیر', d: 'پوشش دوجزئی (A و B)، پخت ۱۲۰ درجه؛ برای اجرا روی شیشهٔ موجود بدون تعویض جداره.' },
            { img: '/assets/clarity.jpg', alt: 'شیشه طیف‌گزین آماده نصب', t: 'شیشهٔ طیف‌گزین آماده', d: 'شیشهٔ های‌پرفورمنس پوشش‌داده‌شده در کارخانه؛ آمادهٔ نصب در پروژه‌های نوساز و کرتین‌وال.' },
            { img: '/assets/application.jpg', alt: 'اجرای پوشش طیف‌گزین در محل', t: 'خدمات اجرای در محل', d: 'اجرای تخصصی پوشش روی نمای ساختمان‌های موجود، توسط تیم آموزش‌دیدهٔ زیگورات.' },
          ].map((c) => (
            <div key={c.t} className="zz-card" style={{ overflow: 'hidden' }}>
              <div style={{ aspectRatio: '5 / 4', overflow: 'hidden' }}><img src={c.img} alt={c.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 8px', color: 'var(--ink)' }}>{c.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.95, color: 'var(--muted)', margin: 0 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TECH SPECS */}
    <section style={{ ...S, padding: '88px 24px' }}>
      <Label>مشخصات فنی</Label>
      <div className="zz-card" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {SPECS.map(([k, v], idx) => (
            <React.Fragment key={k}>
              <div style={{ padding: '22px 26px', borderBottom: idx < SPECS.length - 1 ? '1px solid var(--rule)' : 'none', borderInlineStart: '1px solid var(--rule)' }}>
                <span style={{ fontSize: 13.5, color: 'var(--muted)' }}>{k}</span>
              </div>
              <div style={{ padding: '22px 26px', borderBottom: idx < SPECS.length - 1 ? '1px solid var(--rule)' : 'none' }}>
                <b style={{ fontSize: 15, color: 'var(--ink)' }}>{v}</b>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: 'var(--onyx)', color: '#f0efe9' }}>
      <div style={{ ...S, padding: '80px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
        <h2 className="zz-h2" style={{ fontSize: 'clamp(26px,3.2vw,40px)', margin: 0, maxWidth: '22ch', color: '#f0efe9' }}>محصول مناسب پروژهٔ خود را انتخاب کنیم.</h2>
        <Btn to="/contact" variant="onyx" style={{ fontSize: 16, padding: '17px 34px', flexShrink: 0 }}>درخواست مشاوره</Btn>
      </div>
    </section>
  </>
);

export default ProductsPage;
