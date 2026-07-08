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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: اتصال به بک‌اند / سرویس ایمیل — این فرم فعلاً فقط UI است و درخواستی ارسال نمی‌کند.
    setSubmitted(true);
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
        <h1 className="zz-h1" style={{ fontSize: 'clamp(34px,4.2vw,58px)', margin: '0 0 20px', maxWidth: '22ch' }}>پروژهٔ خود را <span className="em">با ما در میان بگذارید</span></h1>
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

        {/* Form (UI only) */}
        <div className="zz-card" style={{ borderRadius: 28, padding: 34 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 22px', color: 'var(--ink)' }}>درخواست مشاورهٔ رایگان</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>نام و نام خانوادگی</label>
                <input type="text" placeholder="نام شما" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>شمارهٔ تماس</label>
                <input type="tel" placeholder="۰۹۱۲..." style={inputStyle} />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>ایمیل</label>
              <input type="email" placeholder="you@email.com" style={inputStyle} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>نوع پروژه</label>
              <input type="text" placeholder="مسکونی / اداری / کرتین‌وال ..." style={inputStyle} />
            </div>
            <div style={{ marginBottom: 22 }}>
              <label style={labelStyle}>توضیحات</label>
              <textarea rows={4} placeholder="متراژ تقریبی جداره و توضیح کوتاه پروژه..." style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
            <button type="submit" className="zz-btn" style={{ fontSize: 15, padding: '15px 28px', width: '100%' }}>ارسال درخواست</button>
            {submitted && (
              <p style={{ fontSize: 13.5, color: 'var(--accent)', margin: '14px 0 0', textAlign: 'center' }}>
                درخواست شما ثبت شد؛ به‌زودی با شما تماس می‌گیریم. (این فرم هنوز به سرویس ایمیل متصل نیست)
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
