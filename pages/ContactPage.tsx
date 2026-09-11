import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Label } from '../components/ui';

const S: React.CSSProperties = { maxWidth: 1200, marginInline: 'auto' };

const inputStyle: React.CSSProperties = {
  width: '100%', fontFamily: 'inherit', fontSize: 14, padding: '13px 15px',
  borderRadius: 14, border: '1px solid var(--rule)', background: 'var(--bg)',
  color: 'var(--ink)', outline: 'none',
};
const labelStyle: React.CSSProperties = { display: 'block', fontSize: 13, color: 'var(--muted)', marginBottom: 8 };
const fieldCard: React.CSSProperties = { background: 'var(--surface)', border: '1px solid var(--rule)', borderRadius: 22, padding: 26 };

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // POST به /api/contact — Caddy آن را به FormSubmit پروکسی می‌کند و ایمیل ارسال می‌شود.
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: 'nanoglass', ...data }),
      });
      // FormSubmit حتی در خطا HTTP 200 برمی‌گرداند؛ فیلد success ملاک است.
      const body = await res.json();
      setStatus(res.ok && String(body.success) !== 'false' ? 'ok' : 'err');
    } catch {
      setStatus('err');
    }
  };

  return (
    <>
      <SEO
        title="تماس با ما — درخواست مشاورهٔ رایگان"
        description="کارشناسان زیگورات به‌صورت رایگان شرایط پروژهٔ شما را بررسی و بهترین راهکار طیف‌گزین را پیشنهاد می‌دهند. تهران، اشرفی اصفهانی، مجتمع ونوس."
        keywords={['تماس با زیگورات', 'مشاوره رایگان', 'نانوپوشش شیشه', 'شیشهٔ طیف‌گزین']}
        image="/assets/office-install.jpg"
      />

      <section style={{ ...S, padding: '72px 24px 44px' }}>
        <Label>تماس با ما</Label>
        <h1 className="zz-h1" style={{ fontSize: 'clamp(34px,4.2vw,58px)', margin: '0 0 20px', maxWidth: '22ch' }}><span className="em">پروژهٔ خود</span> را با ما در میان بگذارید</h1>
        <p style={{ fontSize: 18, lineHeight: 2, color: 'var(--muted)', margin: 0, maxWidth: '58ch', textAlign: 'justify' }}>کارشناسان زیگورات به‌صورت رایگان شرایط پروژهٔ شما را بررسی و بهترین راهکار طیف‌گزین را پیشنهاد می‌دهند.</p>
      </section>

      <section className="zz-grid-2" style={{ ...S, padding: '0 24px 88px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 32, alignItems: 'start' }}>
        {/* Contact details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={fieldCard}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', marginBottom: 8 }}>نشانی</div>
            <div style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--ink)' }}>تهران، اشرفی اصفهانی، مجتمع اداری تجاری ونوس، طبقه ۱۲، واحد ۱۲</div>
          </div>
          <div style={fieldCard}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', marginBottom: 8 }}>تلفن</div>
            <a href="tel:+989120901530" dir="ltr" style={{ fontSize: 18, color: 'var(--ink)', display: 'block', textAlign: 'right' }}>+98 912 090 1530</a>
          </div>
          <div style={fieldCard}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', marginBottom: 8 }}>ایمیل</div>
            <a href="mailto:info@zigguratsolutions.com" style={{ fontSize: 15, color: 'var(--ink)' }}>info@zigguratsolutions.com</a>
          </div>
          <div style={{ background: 'var(--onyx)', borderRadius: 22, padding: 26, color: '#f0efe9' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#64c23f', marginBottom: 8 }}>شبکه‌های اجتماعی</div>
            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              <a href="https://www.linkedin.com/company/zigguratss/" target="_blank" rel="noopener" style={{ fontSize: 13.5, color: '#cfd4cb' }}>LinkedIn</a>
              <span style={{ color: '#3a3a3a' }}>·</span>
              <a href="https://www.instagram.com/zigguratsolutions" target="_blank" rel="noopener" style={{ fontSize: 13.5, color: '#cfd4cb' }}>Instagram</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="zz-card" style={{ borderRadius: 28, padding: 34 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 22px', color: 'var(--ink)' }}>درخواست مشاورهٔ رایگان</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>نام و نام خانوادگی</label>
                <input type="text" name="name" required placeholder="نام شما" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>شمارهٔ تماس</label>
                <input type="tel" name="phone" required placeholder="۰۹۱۲..." style={inputStyle} />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>ایمیل</label>
              <input type="email" name="email" placeholder="you@email.com" style={inputStyle} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>نوع پروژه</label>
              <input type="text" name="project_type" placeholder="مسکونی / اداری / کرتین‌وال ..." style={inputStyle} />
            </div>
            <div style={{ marginBottom: 22 }}>
              <label style={labelStyle}>توضیحات</label>
              <textarea rows={4} name="message" placeholder="متراژ تقریبی جداره و توضیح کوتاه پروژه..." style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
            <button type="submit" className="zz-btn" disabled={status === 'sending'} style={{ fontSize: 15, padding: '15px 28px', width: '100%' }}>
              {status === 'sending' ? 'در حال ارسال...' : 'ارسال درخواست'}
            </button>
            {status === 'ok' && (
              <p style={{ fontSize: 13.5, color: 'var(--accent)', margin: '14px 0 0', textAlign: 'center' }}>
                درخواست شما ثبت شد؛ به‌زودی با شما تماس می‌گیریم.
              </p>
            )}
            {status === 'err' && (
              <p style={{ fontSize: 13.5, color: '#c0392b', margin: '14px 0 0', textAlign: 'center' }}>
                ارسال ناموفق بود؛ لطفاً دوباره تلاش کنید یا با شمارهٔ بالا تماس بگیرید.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
