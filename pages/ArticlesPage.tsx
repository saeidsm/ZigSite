
import React from 'react';
import { ExternalLink, Calendar, User, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  date: string;
  author: string;
  category: string;
  alt: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "نقش تهویه طبیعی و نماهای دوپوسته در کاهش مصرف انرژی",
    excerpt: "در معماری پایدار، استفاده از جریان هوای طبیعی یکی از موثرترین راهکارهاست. نماهای دوپوسته با ایجاد یک لایه هوا بین محیط داخل و خارج، مانند یک عایق دینامیک عمل می‌کنند. این مقاله به بررسی چگونگی کاهش بار سیستم‌های تهویه مطبوع (HVAC) از طریق طراحی هوشمند نما و استفاده از کوران هوا می‌پردازد که می‌تواند تا حد زیادی هزینه‌های انرژی ساختمان را تعدیل کند.",
    image: "/pic/301.jpg",
    link: "https://virgool.io/FacadeForum/ventilation-energysaving-gf5adklk2xn8",
    date: "۱۴۰۲/۰۵/۱۰",
    author: "سعید صمدی",
    category: "معماری پایدار",
    alt: "نانو پوشش عایق"
  },
  {
    id: 2,
    title: "چالش‌های شیشه‌های پوشش‌دار (Coated Glass) در اقلیم ایران",
    excerpt: "شیشه‌های Low-E و کنترل‌کننده انرژی در سال‌های اخیر وارد بازار ایران شده‌اند، اما آیا برای همه اقلیم‌ها مناسب هستند؟ بسیاری از شیشه‌های وارداتی یا تولید شده با تکنولوژی‌های قدیمی (Soft-coat)، در برابر شرایط اکسیداسیون ضعیف بوده و طول عمر کوتاهی دارند. در این نوشتار به بررسی مشکلات فنی شیشه‌های پوشش‌دار سنتی و نیاز بازار ایران به تکنولوژی‌های مقاوم‌تر مانند نانو پوشش‌های سخت (Hard-coat) می‌پردازیم.",
    image: "/pic/302.jpg",
    link: "https://virgool.io/@saeedsm/coatedglassiniran-q2xlsxx42w7r",
    date: "۱۴۰۲/۰۶/۱۵",
    author: "سعید صمدی",
    category: "تکنولوژی شیشه",
    alt: "شیشه سافت کوت"
  },
  {
    id: 3,
    title: "تحلیل اقتصادی و صرفه‌جویی انرژی با راهکارهای زیگورات",
    excerpt: "هزینه اجرای نمای شیشه‌ای تنها بخش کوچکی از هزینه‌های طول عمر ساختمان است. با افزایش تعرفه‌های انرژی، استفاده از شیشه‌های معمولی یک اشتباه اقتصادی بزرگ است. در این مطلب با اعداد و ارقام واقعی نشان می‌دهیم که چگونه استفاده از محصولات زیگورات، با کاهش ۳۰ درصدی مصرف برق چیلرها، بازگشت سرمایه‌ای کمتر از ۳ سال را برای مالکین به ارمغان می‌آورد.",
    image: "/pic/303.jpg",
    link: "https://virgool.io/@saeedsm/ziggurat-saving-dpwotgvca0ts",
    date: "۱۴۰۲/۰۷/۲۰",
    author: "تیم فنی زیگورات",
    category: "مدیریت انرژی",
    alt: "صنعت ساختمان ایران"
  },
  {
    id: 4,
    title: "گزارش فنی: عملکرد نانو پوشش‌ها در برابر اشعه UV و IR",
    excerpt: "فناوری نانو چگونه کار می‌کند؟ گزارش‌های آزمایشگاهی نشان می‌دهد که نانو ذرات استفاده شده در محصولات ما، قادرند به صورت گزینشی (Spectrally Selective) عمل کنند. این یعنی عبور نور مرئی (نور سرد) و مسدود کردن ۹۵ درصد از امواج مادون قرمز (گرما). این گزارش فنی، نتایج تست‌های استاندارد و مکانیزم جذب انرژی توسط ذرات پلاسمونیک را تشریح می‌کند.",
    image: "/pic/304.jpg",
    link: "https://virgool.io/@saeedsm/nano-report-1-n9awf9yv1ejq",
    date: "۱۴۰۲/۰۸/۰۵",
    author: "واحد تحقیق و توسعه",
    category: "دانش فنی",
    alt: "شیشه هارد کوت"
  },
  {
    id: 5,
    title: "نانو شیلد زیگورات؛ انقلابی در صنعت پوشش‌های ساختمانی",
    excerpt: "زیگورات تنها یک محصول نیست، بلکه پاسخی به نیاز ۳۰ ساله صنعت ساختمان است. معرفی جامع خانواده محصولات زیگورات شامل محلول‌های رتروفیت (اجرا در محل) و پوشش‌های صنعتی IGU. بررسی ویژگی‌هایی نظیر سختی سطح 6H، شفافیت بالا و عدم ایجاد اعوجاج نوری که این محصول را از رقبای خارجی و برچسب‌های شیشه متمایز می‌کند.",
    image: "/pic/305.jpg",
    link: "https://virgool.io/@saeedsm/ziggurat-nano-coat-y6v7aek3cpja",
    date: "۱۴۰۲/۰۹/۱۲",
    author: "سعید صمدی",
    category: "معرفی محصول",
    alt: "شیشه عایق دوجداره"
  },
  {
    id: 6,
    title: "ارتقای بهره‌وری انرژی ساختمان با راهکار نانو شیلد",
    excerpt: "ناترازی انرژی در ایران به مرز هشدار رسیده است. ساختمان‌ها به عنوان بزرگترین مصرف‌کننده انرژی، پتانسیل عظیمی برای بهینه‌سازی دارند. نانو شیلد زیگورات به عنوان یک راهکار سریع‌الاجرا (Retrofit)، امکان ارتقای رتبه انرژی ساختمان‌های موجود را بدون نیاز به تعویض پنجره‌ها فراهم می‌کند. راهکاری ملی برای عبور از پیک مصرف تابستان.",
    image: "/pic/306.jpg",
    link: "https://virgool.io/@saeedsm/%D9%86%D8%A7%D9%86%D9%88-%D8%B4%DB%8C%D9%84%D8%AF-%D8%B2%DB%8C%DA%AF%D9%88%D8%B1%D8%A7%D8%AA-%D8%B1%D8%A7%D9%87%DA%A9%D8%A7%D8%B1%DB%8C-%D8%A7%D8%B1%D8%AA%D9%82%D8%A7%DB%8C-%D8%A8%D9%87%D8%B1%D9%87-%D9%88%D8%B1%DB%8C-%D8%A7%D9%86%D8%B1%DA%98%DB%8C-%D8%AF%D8%B1-%D8%B3%D8%A7%D8%AE%D8%AA%D9%85%D8%A7%D9%86-xyolq1jbbc1f",
    date: "۱۴۰۲/۱۰/۰۱",
    author: "تحریریه زیگورات",
    category: "توسعه پایدار",
    alt: "مبحث 19 مقررات ملی"
  }
];

const ArticlesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="مقالات و دانش فنی - زیگورات"
        description="مجموعه مقالات تخصصی در زمینه بهینه‌سازی انرژی ساختمان، تکنولوژی شیشه، نانو پوشش‌ها و راهکارهای نوین مهندسی نما."
        keywords={['مقالات مهندسی نما', 'تکنولوژی شیشه', 'صرفه جویی انرژی', 'نانو تکنولوژی در ساختمان', 'اخبار زیگورات']}
      />

      {/* Header */}
      <div className="bg-brand-navy py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">مرکز دانش و مقالات</h1>
        <p className="text-slate-300">تازه‌ترین تحلیل‌ها و گزارش‌های فنی صنعت ساختمان و انرژی</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-brand-cyan/90 backdrop-blur-sm text-brand-navy text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Clickable Title */}
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h2 className="text-lg font-bold text-brand-navy mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                    {article.title}
                  </h2>
                </a>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 text-justify flex-grow line-clamp-4">
                  {article.excerpt}
                </p>

                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 text-brand-blue font-bold text-sm border border-brand-blue/20 hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                  <BookOpen size={16} />
                  مطالعه کامل مقاله
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
