import React from 'react';
import SEO from '../components/SEO';
import { Label, Btn } from '../components/ui';

const S: React.CSSProperties = { maxWidth: 1200, marginInline: 'auto' };

const RoiPage = () => (
  <>
    <SEO
      title="توجیه اقتصادی — سرمایه‌ای که بازمی‌گردد"
      description="بازگشت سرمایهٔ نانوپوشش طیف‌گزین زیگورات در کمتر از ۳ سال، کاهش تا ۳۰٪ بار سرمایشی و ابعاد ملیِ بهسازی جداره‌های ساختمان‌های کشور."
      keywords={['بازگشت سرمایه', 'صرفه‌جویی انرژی', 'توجیه اقتصادی', 'ناترازی انرژی', 'نیروگاه مجازی']}
      image="/assets/office-install.jpg"
    />

    <section style={{ ...S, padding: '72px 24px 44px' }}>
      <Label>توجیه اقتصادی</Label>
      <h1 className="zz-h1" style={{ fontSize: 'clamp(34px,4.2vw,58px)', margin: '0 0 20px', maxWidth: '22ch' }}>سرمایه‌ای که <span className="em">بازمی‌گردد</span></h1>
      <p style={{ fontSize: 18, lineHeight: 2, color: 'var(--muted)', margin: 0, maxWidth: '60ch', textAlign: 'justify' }}>هزینهٔ اجرای نانوپوشش، بخش کوچکی از هزینه‌های طول عمر ساختمان است. با افزایش تعرفه‌های انرژی، استفاده از شیشهٔ معمولی یک اشتباه اقتصادی است. با اعداد واقعی نشان می‌دهیم چگونه.</p>
    </section>

    {/* HEADLINE STATS */}
    <section className="zz-grid-3" style={{ ...S, padding: '0 24px 40px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
      <div style={{ background: 'var(--onyx)', color: '#f0efe9', borderRadius: 26, padding: 32 }}>
        <div style={{ fontSize: 13, color: '#64c23f', fontWeight: 700, marginBottom: 14 }}>بازگشت سرمایه</div>
        <div style={{ fontWeight: 300, fontSize: 52, lineHeight: 1, marginBottom: 8 }}>{'< ۳ سال'}</div>
        <p style={{ fontSize: 13.5, color: '#9aa295', margin: 0, lineHeight: 1.8 }}>از محل صرفه‌جویی در قبض برق و کاهش بار سرمایشی.</p>
      </div>
      <div className="zz-card" style={{ padding: 32 }}>
        <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700, marginBottom: 14 }}>کاهش بار سرمایشی</div>
        <div style={{ fontWeight: 300, fontSize: 52, lineHeight: 1, color: 'var(--ink)', marginBottom: 8 }}>تا ۳۰٪</div>
        <p style={{ fontSize: 13.5, color: 'var(--muted)', margin: 0, lineHeight: 1.8 }}>صرفه‌جویی مستقیم در مصرف انرژی سرمایش ساختمان.</p>
      </div>
      <div className="zz-card" style={{ padding: 32 }}>
        <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700, marginBottom: 14 }}>دمای سطح</div>
        <div style={{ fontWeight: 300, fontSize: 52, lineHeight: 1, color: 'var(--ink)', marginBottom: 8 }}>−۱۰°</div>
        <p style={{ fontSize: 13.5, color: 'var(--muted)', margin: 0, lineHeight: 1.8 }}>کاهش دمای سطح داخلی شیشه در اندازه‌گیری میدانی.</p>
      </div>
    </section>

    {/* NATIONAL SCALE */}
    <section style={{ background: 'var(--bg2)', borderBlock: '1px solid var(--rule)' }}>
      <div style={{ ...S, padding: '88px 24px' }}>
        <Label>ابعاد ملی</Label>
        <h2 className="zz-h2" style={{ fontSize: 'clamp(26px,3vw,40px)', margin: '0 0 40px', maxWidth: '24ch' }}>اثر بهسازی سراسری جداره‌ها</h2>
        <div className="zz-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {[
            ['۸٫۹', 'معادل نیروگاه مجازی حرارتی'],
            ['۲۰٫۶', 'میلیون مگاوات‌ساعت صرفه‌جویی سالانه'],
            ['۲٫۸۸', 'میلیارد دلار منافع مالی سالانه'],
            ['۲٫۷۶', 'میلیارد دلار صرفه در ساخت نیروگاه'],
          ].map(([v, l]) => (
            <div key={l} className="zz-card" style={{ borderRadius: 22, padding: 26 }}>
              <div style={{ fontWeight: 300, fontSize: 38, lineHeight: 1, color: 'var(--ink)', marginBottom: 10 }}>{v}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{l}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--muted)', margin: '22px 0 0' }}>* برآورد بر پایهٔ سناریوی بهسازی گستردهٔ پوستهٔ ساختمان‌های کشور.</p>
      </div>
    </section>

    {/* WHY PLAIN GLASS COSTS MORE */}
    <section className="zz-grid-2" style={{ ...S, padding: '88px 24px', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center' }}>
      <div>
        <h2 className="zz-h2" style={{ fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.25, margin: '0 0 20px' }}>چرا شیشهٔ معمولی گران تمام می‌شود؟</h2>
        <p style={{ fontSize: 16, lineHeight: 2.05, color: 'var(--muted)', margin: '0 0 16px', textAlign: 'justify' }}>پنجرهٔ غیراستاندارد در تابستان گرما را به داخل می‌آورد و در زمستان آن را از دست می‌دهد. این یعنی کارکرد دائمی سیستم سرمایش و گرمایش و قبض‌های سنگین.</p>
        <p style={{ fontSize: 16, lineHeight: 2.05, color: 'var(--muted)', margin: '0 0 26px', textAlign: 'justify' }}>نانوپوشش طیف‌گزین با یک‌بار اجرا، سال‌ها این نشتی انرژی را متوقف می‌کند؛ سرمایه‌گذاری‌ای که با گران‌شدن انرژی، هر سال سودآورتر می‌شود.</p>
        <Btn to="/contact" style={{ fontSize: 15, padding: '14px 26px' }}>برآورد صرفه‌جویی پروژهٔ من</Btn>
      </div>
      <div style={{ aspectRatio: '4 / 3', borderRadius: 40, overflow: 'hidden', border: '1px solid var(--rule)' }}>
        <img src="/assets/office-install.jpg" alt="اجرای نانوپوشش طیف‌گزین در ساختمان اداری" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </section>
  </>
);

export default RoiPage;
