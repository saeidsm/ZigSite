import React from 'react';
import SEO from '../components/SEO';
import { Label } from '../components/ui';

const S: React.CSSProperties = { maxWidth: 1200, marginInline: 'auto' };

const COMPARE_ROWS: [string, string, string, string][] = [
  ['اجرا بدون تعویض شیشه', '✓', '✕', '✕'],
  ['دفع مادون‌قرمز', 'تا ۹۰٪', 'بالا', 'کم'],
  ['تولید داخل / ارز‌بری', 'داخلی', 'وارداتی', '—'],
  ['مناسب بهسازی بنای موجود', '✓', 'محدود', '✕'],
];

const TechnologyPage = () => (
  <>
    <SEO
      title="تکنولوژی — فیزیکِ پشتِ طیف‌گزینی"
      description="مکانیزم نانوپوشش طیف‌گزین زیگورات: عبور نور مرئی، شکار گرمای مادون‌قرمز نزدیک با رزونانس پلاسمون سطحی (LSPR)، و سد اشعهٔ فرابنفش تا ۹۰٪."
      keywords={['رزونانس پلاسمون سطحی', 'LSPR', 'نانوذرات', 'طیف‌گزینی', 'Low-E', 'فیزیک ساختمان']}
      image="/assets/nano-mechanism.png"
    />

    <section style={{ ...S, padding: '72px 24px 44px' }}>
      <Label>دانش فنی</Label>
      <h1 className="zz-h1" style={{ fontSize: 'clamp(34px,4.2vw,58px)', margin: '0 0 20px', maxWidth: '22ch' }}>فیزیکِ پشتِ <span className="em">طیف‌گزینی</span></h1>
      <p style={{ fontSize: 18, lineHeight: 2, color: 'var(--muted)', margin: 0, maxWidth: '62ch', textAlign: 'justify' }}>نور خورشید طیف گسترده‌ای دارد: نور مرئی که آن را می‌بینیم، مادون‌قرمز که گرمای آن را حس می‌کنیم، و فرابنفش که به پوست و مبلمان آسیب می‌زند. نانوپوشش طیف‌گزین این طیف‌ها را از هم تفکیک می‌کند.</p>
    </section>

    <section style={{ ...S, padding: '0 24px 40px' }}>
      <div style={{ borderRadius: 40, overflow: 'hidden', border: '1px solid var(--rule)', background: '#fff' }}>
        <img src="/assets/nano-mechanism.png" alt="مکانیزم عملکرد نانوذرات در نانوپوشش طیف‌گزین زیگورات: عبور نور مرئی، شکار گرمای مادون‌قرمز، و سد اشعه فرابنفش" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      </div>
    </section>

    <section style={{ ...S, padding: '72px 24px' }}>
      <div className="zz-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {[
          { n: '۰۱', t: 'عبور نور مرئی', d: 'طیف مرئی آزادانه عبور می‌کند؛ فضا روشن و منظره شفاف می‌ماند و به نور مصنوعی کمتری نیاز است.' },
          { n: '۰۲', t: 'شکار گرما (NIR)', d: 'نانوذرات فلزات کمیاب با رزونانس پلاسمون سطحی (LSPR)، مادون‌قرمز نزدیک را جذب و بازتاب می‌کنند.' },
          { n: '۰۳', t: 'سد اشعهٔ UV', d: 'تا ۹۰٪ از اشعهٔ فرابنفش مسدود می‌شود؛ محافظت از سلامت ساکنان و جلوگیری از رنگ‌پریدگی مبلمان.' },
        ].map((c) => (
          <div key={c.n} className="zz-card" style={{ padding: 30 }}>
            <div style={{ fontWeight: 300, fontSize: 34, color: 'var(--accent)', marginBottom: 18 }}>{c.n}</div>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 10px', color: 'var(--ink)' }}>{c.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.95, color: 'var(--muted)', margin: 0 }}>{c.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* PRODUCTION */}
    <section style={{ background: 'var(--bg2)', borderBlock: '1px solid var(--rule)' }}>
      <div className="zz-grid-2" style={{ ...S, padding: '88px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div style={{ aspectRatio: '4 / 3', borderRadius: 40, overflow: 'hidden', border: '1px solid var(--rule)' }}>
          <img src="/assets/factory.jpg" alt="خط تولید نانوپوشش طیف‌گزین در اتاق تمیز" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <Label>تولید صادرات‌محور</Label>
          <h2 className="zz-h2" style={{ fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.25, margin: '0 0 20px' }}>از آزمایشگاه تا خط تولید</h2>
          <p style={{ fontSize: 16, lineHeight: 2.05, color: 'var(--muted)', margin: '0 0 16px', textAlign: 'justify' }}>فرمولاسیون نانوپوشش در اتاق تمیز و تحت کنترل دقیق کیفیت تولید می‌شود. هر بچ پیش از عرضه با طیف‌سنج LS182 آزمون می‌شود تا مقادیر عبور نور، دفع گرما و دفع UV مطابق استاندارد باشد.</p>
          <p style={{ fontSize: 16, lineHeight: 2.05, color: 'var(--muted)', margin: 0, textAlign: 'justify' }}>این ظرفیت، وابستگی کشور به واردات شیشه‌های های‌پرفورمنس گران‌قیمت را کاهش می‌دهد.</p>
        </div>
      </div>
    </section>

    {/* COMPARISON */}
    <section style={{ ...S, padding: '88px 24px' }}>
      <Label>مقایسهٔ فناوری‌ها</Label>
      <div className="zz-scroll" style={{ overflowX: 'auto' }}>
        <div className="zz-card" style={{ minWidth: 640, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', background: 'var(--accent-soft)' }}>
            <div style={{ padding: '18px 22px', fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>ویژگی</div>
            <div style={{ padding: '18px 22px', fontWeight: 700, fontSize: 14, color: 'var(--accent)' }}>طیف‌گزین زیگورات</div>
            <div style={{ padding: '18px 22px', fontWeight: 700, fontSize: 14, color: 'var(--muted)' }}>Low-E وارداتی</div>
            <div style={{ padding: '18px 22px', fontWeight: 700, fontSize: 14, color: 'var(--muted)' }}>شیشهٔ معمولی</div>
          </div>
          {COMPARE_ROWS.map(([feat, zig, lowe, plain]) => (
            <div key={feat} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', borderTop: '1px solid var(--rule)' }}>
              <div style={{ padding: '16px 22px', fontSize: 13.5, color: 'var(--muted)' }}>{feat}</div>
              <div style={{ padding: '16px 22px', fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{zig}</div>
              <div style={{ padding: '16px 22px', fontSize: 14, color: 'var(--muted)' }}>{lowe}</div>
              <div style={{ padding: '16px 22px', fontSize: 14, color: 'var(--muted)' }}>{plain}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default TechnologyPage;
