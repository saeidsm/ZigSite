import React from 'react';
import SEO from '../components/SEO';
import { Label } from '../components/ui';

const S: React.CSSProperties = { maxWidth: 1200, marginInline: 'auto' };

interface Article {
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  link: string;
}

// Real articles, each published on virgool.io — every card links out to its source.
const FEATURED: Article & { image: string; imageAlt: string } = {
  tag: 'دانش فنی',
  title: 'گزارش فنی: عملکرد نانو پوشش‌ها در برابر اشعهٔ UV و IR',
  excerpt: 'نانوذرات به‌صورت گزینشی (Spectrally Selective) عمل می‌کنند: عبور نور مرئی و مسدودکردن بخش عمده‌ای از امواج مادون‌قرمز (گرما) و فرابنفش. این گزارش، نتایج تست‌های استاندارد و مکانیزم جذب انرژی توسط ذرات پلاسمونیک را تشریح می‌کند.',
  author: 'واحد تحقیق و توسعه',
  date: '۱۴۰۲/۰۸/۰۵',
  link: 'https://virgool.io/@saeedsm/nano-report-1-n9awf9yv1ejq',
  image: '/assets/spectral-meter.jpg',
  imageAlt: 'گزارش فنی عملکرد نانو پوشش در برابر UV و IR',
};

const SIDE: Article[] = [
  {
    tag: 'تکنولوژی شیشه',
    title: 'چالش‌های شیشه‌های پوشش‌دار (Coated Glass) در اقلیم ایران',
    excerpt: 'آیا شیشه‌های Low-E وارداتی برای همهٔ اقلیم‌ها مناسب‌اند؟ بسیاری از پوشش‌های Soft-coat در برابر اکسیداسیون ضعیف عمل می‌کنند و نیاز بازار به پوشش‌های سختِ مقاوم‌تر.',
    author: 'سعید صمدی',
    date: '۱۴۰۲/۰۶/۱۵',
    link: 'https://virgool.io/@saeedsm/coatedglassiniran-q2xlsxx42w7r',
  },
  {
    tag: 'معماری پایدار',
    title: 'نقش تهویهٔ طبیعی و نماهای دوپوسته در کاهش مصرف انرژی',
    excerpt: 'نماهای دوپوسته مانند یک عایق دینامیک عمل می‌کنند؛ بررسی چگونگی کاهش بار سیستم‌های تهویهٔ مطبوع (HVAC) با طراحی هوشمند نما و کوران هوا.',
    author: 'سعید صمدی',
    date: '۱۴۰۲/۰۵/۱۰',
    link: 'https://virgool.io/FacadeForum/ventilation-energysaving-gf5adklk2xn8',
  },
];

const GRID: Article[] = [
  {
    tag: 'مدیریت انرژی',
    title: 'تحلیل اقتصادی و صرفه‌جویی انرژی با راهکارهای زیگورات',
    excerpt: 'با اعداد و ارقام واقعی نشان می‌دهیم چگونه کاهش مصرف برق چیلرها، بازگشت سرمایه‌ای کمتر از ۳ سال را برای مالکین به ارمغان می‌آورد.',
    author: 'تیم فنی زیگورات',
    date: '۱۴۰۲/۰۷/۲۰',
    link: 'https://virgool.io/@saeedsm/ziggurat-saving-dpwotgvca0ts',
  },
  {
    tag: 'معرفی محصول',
    title: 'نانو شیلد زیگورات؛ انقلابی در صنعت پوشش‌های ساختمانی',
    excerpt: 'معرفی جامع خانوادهٔ محصولات زیگورات؛ از محلول‌های رتروفیت (اجرا در محل) تا پوشش‌های صنعتی IGU، با سختی سطح بالا و شفافیت بدون اعوجاج نوری.',
    author: 'سعید صمدی',
    date: '۱۴۰۲/۰۹/۱۲',
    link: 'https://virgool.io/@saeedsm/ziggurat-nano-coat-y6v7aek3cpja',
  },
  {
    tag: 'توسعه پایدار',
    title: 'ارتقای بهره‌وری انرژی ساختمان با راهکار نانو شیلد',
    excerpt: 'نانو شیلد به‌عنوان یک راهکار سریع‌الاجرا (Retrofit)، رتبهٔ انرژی ساختمان‌های موجود را بدون تعویض پنجره ارتقا می‌دهد؛ راهکاری ملی برای عبور از پیک تابستان.',
    author: 'تحریریه زیگورات',
    date: '۱۴۰۲/۱۰/۰۱',
    link: 'https://virgool.io/@saeedsm/%D9%86%D8%A7%D9%86%D9%88-%D8%B4%DB%8C%D9%84%D8%AF-%D8%B2%DB%8C%DA%AF%D9%88%D8%B1%D8%A7%D8%AA-%D8%B1%D8%A7%D9%87%DA%A9%D8%A7%D8%B1%DB%8C-%D8%A7%D8%B1%D8%AA%D9%82%D8%A7%DB%8C-%D8%A8%D9%87%D8%B1%D9%87-%D9%88%D8%B1%DB%8C-%D8%A7%D9%86%D8%B1%DA%98%DB%8C-%D8%AF%D8%B1-%D8%B3%D8%A7%D8%AE%D8%AA%D9%85%D8%A7%D9%86-xyolq1jbbc1f',
  },
];

const linkProps = (href: string) => ({ href, target: '_blank' as const, rel: 'noopener noreferrer' });
const readMore = <div style={{ fontSize: 12.5 }}><span className="zz-read">مطالعهٔ مقاله ↗</span></div>;

/** Text-only linked article card (side + grid). `grow` stretches it to fill the column. */
const TextCard: React.FC<{ a: Article; titleSize: number; grow?: boolean }> = ({ a, titleSize, grow }) => (
  <a {...linkProps(a.link)} className="zz-card zz-artcard" style={{ padding: 26, ...(grow ? { flex: 1 } : null) }}>
    <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: 'var(--accent)', marginBottom: 12 }}>{a.tag}</span>
    <h3 style={{ fontSize: titleSize, fontWeight: 700, lineHeight: 1.45, margin: '0 0 10px', color: 'var(--ink)' }}>{a.title}</h3>
    <p style={{ fontSize: 13.5, lineHeight: 1.9, color: 'var(--muted)', margin: '0 0 14px', textAlign: 'justify' }}>{a.excerpt}</p>
    <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>{a.author} · {a.date}</div>
    {readMore}
  </a>
);

const ArticlesPage = () => (
  <>
    <SEO
      title="مقالات و تحلیل‌های فنی"
      description="تازه‌ترین گزارش‌ها و تحلیل‌های فنی و اقتصادیِ صنعت ساختمان، انرژی و فناوری نانوپوشش شیشه از مرکز دانش زیگورات."
      keywords={['مقالات نانوپوشش', 'تحلیل فنی شیشه', 'اقتصاد انرژی ساختمان', 'نانو شیلد زیگورات']}
      image="/assets/spectral-meter.jpg"
    />

    <section style={{ ...S, padding: '72px 24px 44px' }}>
      <Label>مرکز دانش</Label>
      <h1 className="zz-h1" style={{ fontSize: 'clamp(34px,4.2vw,58px)', margin: '0 0 20px', maxWidth: '22ch' }}>مقالات و <span className="em">تحلیل‌های فنی</span></h1>
      <p style={{ fontSize: 18, lineHeight: 2, color: 'var(--muted)', margin: 0, maxWidth: '60ch', textAlign: 'justify' }}>تازه‌ترین گزارش‌ها و تحلیل‌های فنی و اقتصادیِ صنعت ساختمان، انرژی و فناوری نانوپوشش شیشه — منتشرشده در ویرگول.</p>
    </section>

    {/* FEATURED */}
    <section style={{ ...S, padding: '0 24px 40px' }}>
      <div className="zz-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 24, alignItems: 'stretch' }}>
        <a {...linkProps(FEATURED.link)} className="zz-card zz-artcard" style={{ borderRadius: 32, overflow: 'hidden' }}>
          <div style={{ aspectRatio: '16 / 9', overflow: 'hidden' }}><img src={FEATURED.image} alt={FEATURED.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          <div style={{ padding: 30 }}>
            <span style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-soft)', padding: '5px 12px', borderRadius: 100, marginBottom: 14 }}>{FEATURED.tag}</span>
            <h2 style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.4, margin: '0 0 12px', color: 'var(--ink)' }}>{FEATURED.title}</h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--muted)', margin: '0 0 18px', textAlign: 'justify' }}>{FEATURED.excerpt}</p>
            <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 10 }}>{FEATURED.author} · {FEATURED.date}</div>
            {readMore}
          </div>
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {SIDE.map((a) => <TextCard key={a.title} a={a} titleSize={19} grow />)}
        </div>
      </div>
    </section>

    {/* MORE ARTICLES */}
    <section style={{ ...S, padding: '24px 24px 88px' }}>
      <div className="zz-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {GRID.map((a) => <TextCard key={a.title} a={a} titleSize={18} />)}
      </div>
    </section>
  </>
);

export default ArticlesPage;
