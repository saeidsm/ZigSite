import React from 'react';
import SEO from '../components/SEO';
import { Label } from '../components/ui';

const S: React.CSSProperties = { maxWidth: 1200, marginInline: 'auto' };

const AboutPage = () => (
  <>
    <SEO
      title="درباره ما — مهندسی نما در خدمت آینده‌ای سبزتر"
      description="زیگورات استارتاپی زایشی از آلومینیوم شیشهٔ تهران؛ مشاور تخصصی نما با بیش از ۳۰ سال تجربه در مهندسی نما، فیزیک ساختمان و مدیریت مصرف انرژی پوستهٔ ساختمان."
      keywords={['درباره زیگورات', 'آلومینیوم شیشه تهران', 'مهندسی نما', 'دانش‌بنیان', 'شیشهٔ طیف‌گزین']}
      image="/assets/logo.png"
    />

    <section style={{ ...S, padding: '72px 24px 44px' }}>
      <Label>درباره ما</Label>
      <h1 className="zz-h1" style={{ fontSize: 'clamp(34px,4.2vw,58px)', margin: '0 0 20px', maxWidth: '24ch' }}>مهندسی نما، در خدمت <span className="em">آینده‌ای سبزتر</span></h1>
      <p style={{ fontSize: 18, lineHeight: 2, color: 'var(--muted)', margin: 0, maxWidth: '62ch', textAlign: 'justify' }}>زیگورات استارتاپی زایشی از «آلومینیوم شیشهٔ تهران» است؛ مشاور تخصصی نما با بیش از ۳۰ سال تجربه در مهندسی نما، فیزیک ساختمان و مدیریت مصرف انرژی در پوستهٔ ساختمان.</p>
    </section>

    {/* STORY */}
    <section className="zz-grid-2" style={{ ...S, padding: '0 24px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center' }}>
      <div style={{ borderRadius: 40, overflow: 'hidden', border: '1px solid var(--rule)', background: '#fff', padding: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/assets/logo.png" alt="لوگو نانوپوشش طیف‌گزین زیگورات" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      </div>
      <div>
        <h2 className="zz-h2" style={{ fontSize: 'clamp(24px,2.8vw,34px)', lineHeight: 1.3, margin: '0 0 18px' }}>از تجربه، تا فناوری</h2>
        <p style={{ fontSize: 16, lineHeight: 2.05, color: 'var(--muted)', margin: '0 0 16px', textAlign: 'justify' }}>سه دهه کار روی نمای ساختمان‌های بزرگ، ما را با یک مسئلهٔ تکرارشونده روبه‌رو کرد: هدررفت انرژی از جدارهٔ شیشه‌ای. زیگورات با تمرکز بر فناوری نانوپوشش طیف‌گزین متولد شد تا این مسئله را از ریشه حل کند.</p>
        <p style={{ fontSize: 16, lineHeight: 2.05, color: 'var(--muted)', margin: 0, textAlign: 'justify' }}>امروز، محصولات ما در پروژه‌های اداری، مسکونی و سازمانی اجرا می‌شوند و جایگزینی داخلی برای شیشه‌های های‌پرفورمنس وارداتی ارائه می‌دهند.</p>
      </div>
    </section>

    {/* STATS */}
    <section style={{ background: 'var(--bg2)', borderBlock: '1px solid var(--rule)' }}>
      <div className="zz-grid-4" style={{ ...S, padding: '72px 24px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {[
          ['+۳۰', 'سال تجربهٔ مهندسی نما'],
          ['۹۹٪', 'دفع مادون‌قرمز محصولات'],
          ['۳', 'خط محصول طیف‌گزین'],
          ['۱۰۰٪', 'تولید دانش‌بنیان داخلی'],
        ].map(([v, l]) => (
          <div key={l}>
            <div style={{ fontWeight: 300, fontSize: 'clamp(38px,4vw,54px)', lineHeight: 1, color: 'var(--ink)', marginBottom: 8 }}>{v}</div>
            <div style={{ fontSize: 13.5, color: 'var(--muted)' }}>{l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* VALUES */}
    <section style={{ ...S, padding: '88px 24px' }}>
      <div className="zz-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {[
          { t: 'مأموریت', d: 'کاهش مصرف انرژی ساختمان‌های کشور با فناوری بومی و مقرون‌به‌صرفه.' },
          { t: 'پایداری', d: 'هر متر مربع پوشش، گامی به‌سوی کاهش فشار بر شبکهٔ برق و آینده‌ای سبزتر.' },
          { t: 'کیفیت اثبات‌شده', d: 'هر بچ محصول با دستگاه‌های طیف‌سنجی آزمون و کنترل کیفیت می‌شود.' },
        ].map((c) => (
          <div key={c.t} className="zz-card" style={{ padding: 30 }}>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 10px', color: 'var(--ink)' }}>{c.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.95, color: 'var(--muted)', margin: 0 }}>{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default AboutPage;
