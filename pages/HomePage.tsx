import React from 'react';
import SEO from '../components/SEO';
import { Label, Btn } from '../components/ui';

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'راهکارهای پایدار زیگورات',
      alternateName: 'Ziggurat Sustainable Solutions',
      url: 'https://zigguratsolutions.com',
      logo: 'https://zigguratsolutions.com/assets/logo.png',
      description: 'استارتاپ زایشی از آلومینیوم شیشهٔ تهران؛ توسعه‌دهندهٔ نانوپوشش طیف‌گزین برای عایق حرارتی شیشهٔ ساختمان.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'اشرفی اصفهانی، مجتمع اداری تجاری ونوس، طبقه ۱۲، واحد ۱۲',
        addressLocality: 'تهران',
        addressCountry: 'IR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+98-912-090-1530',
        email: 'info@zigguratsolutions.com',
        contactType: 'sales',
      },
    },
    {
      '@type': 'Product',
      name: 'شیشهٔ طیف‌گزین زیگورات',
      description: 'نانوپوشش طیف‌گزین با فناوری رزونانس پلاسمون سطحی؛ سد مادون‌قرمز و فرابنفش با حفظ عبور نور مرئی و کاهش تا ۳۰٪ مصرف انرژی.',
      brand: { '@type': 'Brand', name: 'زیگورات' },
      image: 'https://zigguratsolutions.com/assets/clarity.jpg',
    },
  ],
};

const S: React.CSSProperties = { maxWidth: 1200, marginInline: 'auto' };

const HomePage = () => (
  <>
    <SEO
      title="نانوپوشش طیف‌گزین زیگورات"
      description="نانوپوشش طیف‌گزین زیگورات؛ سپر نامرئی ساختمان در برابر گرما. سد مادون‌قرمز و اشعه فرابنفش، عبور نور مرئی، و کاهش تا ۳۰٪ در مصرف انرژی بدون تعویض شیشه."
      keywords={['نانوپوشش طیف‌گزین', 'شیشهٔ طیف‌گزین زیگورات', 'عایق حرارتی شیشه', 'کاهش مصرف انرژی', 'Low-E', 'نانو پوشش شیشه']}
      image="/assets/hero-comparison.jpg"
      schema={homeSchema}
    />

    {/* HERO */}
    <section className="zz-hero" style={{ ...S, padding: '72px 24px 40px', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center' }}>
      <div style={{ animation: 'zzUp .7s ease both' }}>
        <Label>نانوپوشش طیف‌گزین زیگورات</Label>
        <h1 className="zz-h1" style={{ fontSize: 'clamp(38px,4.6vw,62px)', lineHeight: 1.12, margin: '0 0 22px' }}>
          گرما بیرون می‌مانَد،<br /><span className="em">نور</span> داخل می‌آید.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 2, color: 'var(--muted)', margin: '0 0 30px', maxWidth: '36ch' }}>
          با فناوری نانوی <b style={{ color: 'var(--ink)', fontWeight: 700 }}>طیف‌گزین</b>، بدون تعویض شیشه، اشعهٔ مادون‌قرمز و فرابنفش را سد کنید، نور طبیعی را نگه دارید و تا <b style={{ color: 'var(--ink)', fontWeight: 700 }}>۳۰٪</b> در مصرف انرژی صرفه‌جویی کنید.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Btn to="/contact" style={{ fontSize: 15, padding: '15px 28px' }}>دریافت مشاوره رایگان</Btn>
          <Btn to="/products" variant="outline" style={{ fontSize: 15, padding: '14px 27px' }}>آشنایی با محصولات</Btn>
        </div>
        <div style={{ display: 'flex', gap: 30, marginTop: 38, flexWrap: 'wrap' }}>
          <div><div style={{ fontSize: 30, fontWeight: 300, color: 'var(--ink)' }}>۹۰٪</div><div style={{ fontSize: 12.5, color: 'var(--muted)' }}>دفع مادون‌قرمز (IR)</div></div>
          <div style={{ width: 1, background: 'var(--rule)' }} />
          <div><div style={{ fontSize: 30, fontWeight: 300, color: 'var(--ink)' }}>۹۰٪</div><div style={{ fontSize: 12.5, color: 'var(--muted)' }}>دفع فرابنفش (UV)</div></div>
          <div style={{ width: 1, background: 'var(--rule)' }} />
          <div><div style={{ fontSize: 30, fontWeight: 300, color: 'var(--ink)' }}>۷۵٪</div><div style={{ fontSize: 12.5, color: 'var(--muted)' }}>عبور نور مرئی</div></div>
        </div>
      </div>
      <div style={{ position: 'relative', animation: 'zzUp .9s ease both' }}>
        <div style={{ aspectRatio: '4 / 3', borderRadius: 40, overflow: 'hidden', border: '1px solid var(--rule)' }}>
          <img src="/assets/hero-comparison.jpg" alt="مقایسه پنجره با و بدون نانوپوشش طیف‌گزین؛ کاهش دما از ۴۰ به ۳۰ درجه" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', bottom: -18, insetInlineStart: -18, background: 'var(--onyx)', color: '#f0efe9', borderRadius: 18, padding: '16px 20px', maxWidth: 210 }}>
          <div style={{ fontSize: 11, letterSpacing: '.12em', color: '#64c23f', fontWeight: 700, marginBottom: 6 }}>اندازه‌گیری میدانی</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>اختلاف دمای سطح تا <b style={{ fontWeight: 700 }}>۱۰ درجه</b> پشت شیشهٔ پوشش‌دار</div>
        </div>
      </div>
    </section>

    {/* SPEC STRIP */}
    <section style={{ borderBlock: '1px solid var(--rule)', background: 'var(--bg2)' }}>
      <div style={{ ...S, padding: '26px 24px', display: 'flex', flexWrap: 'wrap', gap: '16px 40px', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>داده‌های واقعی، اندازه‌گیری‌شده روی پروژه‌ها با دستگاه Iran Facade Testing:</span>
        <div style={{ display: 'flex', gap: 34, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, color: 'var(--ink)' }}><b style={{ fontWeight: 700 }}>VLT ۷۴٪</b> عبور نور</span>
          <span style={{ fontSize: 14, color: 'var(--ink)' }}><b style={{ fontWeight: 700 }}>IRR ۹۰٪</b> دفع مادون‌قرمز</span>
          <span style={{ fontSize: 14, color: 'var(--ink)' }}><b style={{ fontWeight: 700 }}>UVR ۹۰٪</b> دفع UV</span>
          <span style={{ fontSize: 14, color: 'var(--ink)' }}><b style={{ fontWeight: 700 }}>۴H</b> سختی سطح</span>
        </div>
      </div>
    </section>

    {/* VALUE PROPS */}
    <section style={{ ...S, padding: '96px 24px' }}>
      <Label>چرا طیف‌گزین؟</Label>
      <h2 className="zz-h2" style={{ fontSize: 'clamp(28px,3.4vw,44px)', margin: '0 0 8px', maxWidth: '20ch' }}>راهکاری جامع برای انرژی و آسایش در پوستهٔ ساختمان</h2>
      <div className="zz-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 48 }}>
        {[
          { n: '۰۱', t: 'فیلتراسیون طیفی', d: 'حذف تا ۹۰٪ گرمای مادون‌قرمز و تا ۹۰٪ اشعهٔ فرابنفش، بدون تیره‌کردن فضا.' },
          { n: '۰۲', t: 'حفظ شفافیت', d: 'عبور نور مرئی تا ۷۵٪؛ منظرهٔ شفاف و روشن، برخلاف شیشه‌های رنگی و تیرهٔ قدیمی.' },
          { n: '۰۳', t: 'بازگشت سرمایه', d: 'بازگشت هزینهٔ اجرا در کمتر از ۳ سال، از محل صرفه‌جویی چشمگیر در قبض برق و سرمایش.' },
          { n: '۰۴', t: 'دوام بالا', d: 'سختی سطح ۴H و مقاومت در برابر باران اسیدی و آلودگی؛ ماندگاری چندین‌ساله.' },
        ].map((c) => (
          <div key={c.n} className="zz-card" style={{ padding: 28 }}>
            <div style={{ fontWeight: 300, fontSize: 34, color: 'var(--accent)', marginBottom: 22 }}>{c.n}</div>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 10px', color: 'var(--ink)' }}>{c.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.95, color: 'var(--muted)', margin: 0 }}>{c.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* NATIONAL CRISIS */}
    <section style={{ background: 'var(--bg2)', borderBlock: '1px solid var(--rule)' }}>
      <div className="zz-grid-2" style={{ ...S, padding: '96px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Label>راهکار ملی</Label>
          <h2 className="zz-h2" style={{ fontSize: 'clamp(28px,3.4vw,44px)', lineHeight: 1.25, margin: '0 0 22px' }}>پاسخی به بحران ناترازی انرژی</h2>
          <p style={{ fontSize: 16.5, lineHeight: 2.05, color: 'var(--muted)', margin: '0 0 18px', textAlign: 'justify' }}>ساختمان‌ها مسئول حدود ۴۰٪ از مصرف انرژی کشورند و بخش بزرگی از این انرژی از پنجره‌های غیراستاندارد هدر می‌رود. نانوپوشش طیف‌گزین با کاهش بار سرمایشی، فشار بر شبکهٔ برق در پیک تابستان را کم می‌کند.</p>
          <p style={{ fontSize: 16.5, lineHeight: 2.05, color: 'var(--muted)', margin: '0 0 28px', textAlign: 'justify' }}>این راهکار در راستای مبحث ۱۹ مقررات ملی ساختمان و بدون نیاز به بازسازی نما اجرا می‌شود.</p>
          <Btn to="/roi" variant="outline" style={{ fontSize: 15, padding: '14px 26px' }}>مشاهدهٔ تحلیل اقتصادی و ملی ←</Btn>
        </div>
        <div style={{ aspectRatio: '1 / 1', borderRadius: 80, overflow: 'hidden', border: '1px solid var(--rule)' }}>
          <img src="/assets/roof-test.jpg" alt="تست میدانی عملکرد حرارتی نانوپوشش زیگورات روی جعبه‌های شیشه‌ای" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>

    {/* PRODUCT INTRO */}
    <section className="zz-grid-2" style={{ ...S, padding: '96px 24px', display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 56, alignItems: 'center' }}>
      <div style={{ aspectRatio: '4 / 3', borderRadius: 40, overflow: 'hidden', border: '1px solid var(--rule)' }}>
        <img src="/assets/clarity.jpg" alt="شفافیت شیشه پوشش‌دار طیف‌گزین زیگورات" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <Label>محصول پرچم‌دار</Label>
        <h2 className="zz-h2" style={{ fontSize: 'clamp(28px,3.4vw,44px)', lineHeight: 1.25, margin: '0 0 22px' }}>شیشهٔ طیف‌گزین زیگورات</h2>
        <p style={{ fontSize: 16.5, lineHeight: 2.05, color: 'var(--muted)', margin: '0 0 28px', textAlign: 'justify' }}>نانوپوشش طیف‌گزین با انتخاب هوشمندانهٔ طیف نور، جایگزینی داخلی و مقرون‌به‌صرفه برای شیشه‌های های‌پرفورمنس وارداتی (Low-E و Sunergy) است. این فناوری نیاز کشور به واردات شیشه‌های گران‌قیمت را کاهش می‌دهد و بازار ساختمان‌های موجود و نیازمند بهسازی را پوشش می‌دهد.</p>
        <Btn to="/products" style={{ fontSize: 15, padding: '14px 26px' }}>خط محصولات طیف‌گزین</Btn>
      </div>
    </section>

    {/* PROOF */}
    <section style={{ background: 'var(--bg2)', borderBlock: '1px solid var(--rule)' }}>
      <div style={{ ...S, padding: '96px 24px' }}>
        <Label>اثبات اندازه‌گیری‌شده</Label>
        <h2 className="zz-h2" style={{ fontSize: 'clamp(28px,3.4vw,44px)', margin: '0 0 40px', maxWidth: '22ch' }}>ادعا نمی‌کنیم؛ اندازه می‌گیریم</h2>
        <div className="zz-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[
            { img: '/assets/meter-65.jpg', alt: 'تست VLT 65 IRR 99 UVR 100', t: 'VLT ۶۵ · IRR ۹۹ · UVR ۱۰۰', d: 'قرائت دستگاه روی یک نمونهٔ آزمایشگاهی خاص (Iran Facade Testing).' },
            { img: '/assets/spectral-meter.jpg', alt: 'اندازه‌گیری طیفی UV 98.3 IR 85.8 VLT 74.3', t: 'UV ۹۸ · IR ۸۶ · VLT ۷۴', d: 'اندازه‌گیری روی خط تولید با دستگاه طیف‌سنج LS182.' },
            { img: '/assets/meter-onsite.jpg', alt: 'تست میدانی روی پنجره پروژه VLT 50 IRR 90 UVR 95', t: 'VLT ۵۰ · IRR ۹۰ · UVR ۹۵', d: 'اجراشده روی پنجرهٔ پروژهٔ واقعی در محل.' },
          ].map((c) => (
            <div key={c.t} className="zz-card" style={{ overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}><img src={c.img} alt={c.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div style={{ padding: '20px 22px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{c.t}</div>
                <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0, lineHeight: 1.8 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section style={{ ...S, padding: '96px 24px' }}>
      <Label>صدای مشتریان</Label>
      <h2 className="zz-h2" style={{ fontSize: 'clamp(28px,3.4vw,44px)', margin: '0 0 40px' }}>تجربهٔ متخصصان صنعت ساختمان</h2>
      <div className="zz-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {[
          { q: '«اجرای پوشش طیف‌گزین تأثیر چشمگیری در کاهش دمای سقف شیشه‌ای ما داشت؛ اجرا ساده بود و تیم ما پس از آموزش به‌خوبی از عهدهٔ آن برآمد.»', i: 'ا', n: 'مهندس اکبریان', o: 'سازه‌های پایدار رهام' },
          { q: '«در پروژهٔ وزارت اقتصاد و دارایی به‌دنبال تنظیم بهینهٔ دمای بنا، شفافیت مطلوب جداره و ظاهری مدرن بودیم؛ به همهٔ این اهداف رسیدیم.»', i: 'ت', n: 'دکتر تاجدار', o: 'مهندسی مشاور شارآباد بوم' },
          { q: '«دفتر ما جنوبی است و تابش آفتاب آزاردهنده بود؛ با پوشش انجام‌شده فشار بر تأسیسات کاهش یافت و آسایش ما بهبود پیدا کرد.»', i: 'س', n: 'مهندس سلیمانی', o: 'پروژهٔ دانشگاه خاتم' },
        ].map((c) => (
          <figure key={c.n} className="zz-card" style={{ margin: 0, padding: 30 }}>
            <blockquote style={{ margin: '0 0 22px', fontSize: 15.5, lineHeight: 2.05, fontWeight: 300, color: 'var(--ink)' }}>{c.q}</blockquote>
            <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 40, height: 40, borderRadius: 100, background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{c.i}</span>
              <span><b style={{ display: 'block', fontSize: 14, color: 'var(--ink)' }}>{c.n}</b><span style={{ fontSize: 12.5, color: 'var(--muted)' }}>{c.o}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>

    {/* CTA BAND */}
    <section style={{ background: 'var(--onyx)', color: '#f0efe9' }}>
      <div style={{ ...S, padding: '80px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
        <div>
          <h2 className="zz-h2" style={{ fontSize: 'clamp(28px,3.4vw,42px)', margin: '0 0 12px', color: '#f0efe9' }}>آمادهٔ کاهش قبض انرژی هستید؟</h2>
          <p style={{ fontSize: 16, color: '#b9c0b5', margin: 0, lineHeight: 1.9 }}>کارشناسان ما رایگان پروژهٔ شما را بررسی و بهترین راهکار طیف‌گزین را پیشنهاد می‌دهند.</p>
        </div>
        <Btn to="/contact" variant="onyx" style={{ fontSize: 16, padding: '17px 34px', flexShrink: 0 }}>درخواست مشاوره رایگان</Btn>
      </div>
    </section>
  </>
);

export default HomePage;
