import React from 'react';
import SEO from '../components/SEO';
import { Label } from '../components/ui';

const S: React.CSSProperties = { maxWidth: 1200, marginInline: 'auto' };

const MORE: { tag: string; title: string; text: string; meta: string }[] = [
  { tag: 'اقتصاد انرژی', title: 'تحلیل صرفه‌جویی انرژی با راهکارهای زیگورات', text: 'با اعداد و ارقام واقعی نشان می‌دهیم چرا اجرای نانوپوشش یک تصمیم اقتصادی هوشمندانه است.', meta: 'تیم فنی زیگورات · ۱۴۰۲/۰۷/۲۰' },
  { tag: 'مبحث ۱۹', title: 'راهنمای انطباق نما با مقررات ملی ساختمان', text: 'چگونه پوستهٔ ساختمان را با الزامات مبحث ۱۹ هم‌راستا کنیم، بدون بازسازی سنگین.', meta: 'واحد فنی · ۱۴۰۲/۰۹/۰۲' },
  { tag: 'جایگزینی واردات', title: 'طیف‌گزین؛ جایگزین داخلی شیشهٔ Sunergy', text: 'چطور تولید داخلی نانوپوشش، ارز‌بری واردات شیشه‌های های‌پرفورمنس را کاهش می‌دهد.', meta: 'تیم فنی زیگورات · ۱۴۰۲/۱۰/۱۱' },
];

const ArticlesPage = () => (
  <>
    <SEO
      title="مقالات و تحلیل‌های فنی"
      description="تازه‌ترین گزارش‌ها و تحلیل‌های فنی و اقتصادیِ صنعت ساختمان، انرژی و فناوری نانوپوشش شیشه از مرکز دانش زیگورات."
      keywords={['مقالات نانوپوشش', 'تحلیل فنی شیشه', 'اقتصاد انرژی ساختمان', 'مبحث ۱۹']}
      image="/assets/spectral-meter.jpg"
    />

    <section style={{ ...S, padding: '72px 24px 44px' }}>
      <Label>مرکز دانش</Label>
      <h1 className="zz-h1" style={{ fontSize: 'clamp(34px,4.2vw,58px)', margin: '0 0 20px', maxWidth: '22ch' }}>مقالات و <span className="em">تحلیل‌های فنی</span></h1>
      <p style={{ fontSize: 18, lineHeight: 2, color: 'var(--muted)', margin: 0, maxWidth: '60ch', textAlign: 'justify' }}>تازه‌ترین گزارش‌ها و تحلیل‌های فنی و اقتصادیِ صنعت ساختمان، انرژی و فناوری نانوپوشش شیشه.</p>
    </section>

    {/* FEATURED */}
    <section style={{ ...S, padding: '0 24px 40px' }}>
      <div className="zz-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 24, alignItems: 'stretch' }}>
        <div className="zz-card" style={{ borderRadius: 32, overflow: 'hidden' }}>
          <div style={{ aspectRatio: '16 / 9', overflow: 'hidden' }}><img src="/assets/spectral-meter.jpg" alt="گزارش فنی عملکرد نانو پوشش در برابر UV و IR" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          <div style={{ padding: 30 }}>
            <span style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-soft)', padding: '5px 12px', borderRadius: 100, marginBottom: 14 }}>گزارش فنی</span>
            <h2 style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.4, margin: '0 0 12px', color: 'var(--ink)' }}>عملکرد نانو پوشش‌ها در برابر اشعهٔ UV و IR</h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--muted)', margin: '0 0 18px', textAlign: 'justify' }}>گزارش‌های آزمایشگاهی نشان می‌دهند نانوذرات به‌صورت گزینشی (Spectrally Selective) عمل می‌کنند: عبور نور مرئی و مسدودکردن تا ۹۵٪ از امواج گرمایی و فرابنفش.</p>
            <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>واحد تحقیق و توسعهٔ زیگورات · ۱۴۰۲/۰۸/۰۵</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[
            { tag: 'تکنولوژی شیشه', title: 'چالش‌های شیشه‌های پوشش‌دار (Coated Glass) در اقلیم ایران', text: 'آیا شیشه‌های Low-E وارداتی برای همهٔ اقلیم‌ها مناسب‌اند؟ بسیاری از پوشش‌های Soft-coat در برابر اکسیداسیون ضعیف عمل می‌کنند.', meta: 'سعید صمدی · ۱۴۰۲/۰۶/۱۵' },
            { tag: 'معماری پایدار', title: 'نقش تهویهٔ طبیعی و نماهای دوپوسته در کاهش مصرف انرژی', text: 'نماهای دوپوسته مانند یک عایق دینامیک عمل می‌کنند؛ بررسی چگونگی کاهش بار سیستم‌های سرمایشی.', meta: 'سعید صمدی · ۱۴۰۲/۰۵/۱۰' },
          ].map((a) => (
            <div key={a.title} className="zz-card" style={{ padding: 26, flex: 1 }}>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: 'var(--accent)', marginBottom: 12 }}>{a.tag}</span>
              <h3 style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.45, margin: '0 0 10px', color: 'var(--ink)' }}>{a.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.9, color: 'var(--muted)', margin: '0 0 14px', textAlign: 'justify' }}>{a.text}</p>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{a.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MORE ARTICLES */}
    <section style={{ ...S, padding: '24px 24px 88px' }}>
      <div className="zz-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {MORE.map((a) => (
          <div key={a.title} className="zz-card" style={{ padding: 26 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: 'var(--accent)', marginBottom: 12 }}>{a.tag}</span>
            <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.45, margin: '0 0 10px', color: 'var(--ink)' }}>{a.title}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: 'var(--muted)', margin: '0 0 14px', textAlign: 'justify' }}>{a.text}</p>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>{a.meta}</div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default ArticlesPage;
