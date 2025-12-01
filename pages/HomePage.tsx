
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sun, DollarSign, Droplets, ChevronLeft, ArrowRight, Star, Quote } from 'lucide-react';
import SEO from '../components/SEO';

const HomePage = () => {
  // Structured Data for Organization (AI Optimization)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ziggurat Sustainable Solutions",
    "alternateName": "راهکارهای پایدار زیگورات",
    "url": "https://zigguratsolutions.com",
    "logo": "https://zigguratsolutions.com/pic/100.png",
    "description": "ارائه دهنده پوشش‌های نانو تکنولوژی برای شیشه‌های ساختمانی، جایگزین هوشمند شیشه Low-e و Sunergy جهت کاهش مصرف انرژی.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-912-090-1530",
      "contactType": "sales",
      "areaServed": "IR",
      "availableLanguage": "Persian"
    },
    "sameAs": [
      "https://www.instagram.com/zigguratsolutions",
      "https://www.linkedin.com/company/zigguratss/"
    ]
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="خانه - نانو پوشش و عایق حرارتی شیشه"
        description="زیگورات؛ سپر نامرئی ساختمان در برابر گرما. با فناوری نانو پوشش شیشه، بدون تعویض پنجره، مصرف انرژی را تا ۳۰٪ کاهش دهید. جایگزین برتر شیشه Low-e و Sunergy."
        keywords={['نانو پوشش شیشه', 'عایق حرارتی پنجره', 'شیشه هوشمند', 'شیشه کنترل کننده انرژی', 'بهینه سازی مصرف انرژی', 'مبحث ۱۹ مقررات ملی']}
        schema={organizationSchema}
      />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0">
          <img 
            src="/pic/101.jpg" 
            alt="صنعت ساختمان ایران" 
            className="w-full h-full object-cover opacity-30 animate-pulse-slow"
            loading="eager" // Load immediately for LCP
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            سپر <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">نامرئی</span> ساختمان<br/>
            در برابر هجوم گرما
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 drop-shadow-md">
            تکنولوژی نانو برای مدیریت هوشمند نور و انرژی. بدون تعویض شیشه، ۳۰٪ در مصرف انرژی صرفه‌جویی کنید و از نور طبیعی لذت ببرید.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-cyan hover:bg-cyan-500 text-brand-navy font-bold rounded-full transition-all shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              مشاوره رایگان دریافت کنید
              <ChevronLeft size={20} />
            </Link>
            <Link 
              to="/products" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium rounded-full transition-all flex items-center justify-center hover:shadow-lg"
            >
              آشنایی با محصولات
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">چرا نانو شیلد زیگورات؟</h2>
            <p className="mt-4 text-slate-600">راهکاری جامع برای چالش‌های انرژی و آسایش در ساختمان‌های مدرن</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={40} className="text-brand-blue" />}
              title="فیلتراسیون قدرتمند"
              description="حذف ۹۵٪ اشعه مادون قرمز (گرما) و ۹۰٪ اشعه فرابنفش (UV) بدون تاریک کردن فضا."
            />
            <FeatureCard 
              icon={<Sun size={40} className="text-brand-blue" />}
              title="حفظ شفافیت"
              description="عبور نور مرئی بین ۶۰ تا ۷۵ درصد، برخلاف شیشه‌های رنگی قدیمی و تیره."
            />
            <FeatureCard 
              icon={<DollarSign size={40} className="text-brand-blue" />}
              title="بازگشت سرمایه"
              description="بازگشت هزینه اجرا در کمتر از ۳ سال از محل صرفه‌جویی چشمگیر در قبض برق."
            />
            <FeatureCard 
              icon={<Droplets size={40} className="text-brand-blue" />}
              title="مقاوم و بادوام"
              description="مقاومت بالا در برابر باران‌های اسیدی و آلودگی با سختی 6H و ماندگاری طولانی."
            />
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">راهکاری ملی برای بحران ناترازی انرژی</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                ساختمان‌ها مسئول ۴۰٪ از مصرف انرژی کشور هستند. بخش عظیمی از این انرژی از طریق پنجره‌های غیراستاندارد هدر می‌رود. 
                <br/><br/>
                با نانو شیلد زیگورات، ما نه تنها آسایش حرارتی ساکنین را تامین می‌کنیم، بلکه گامی بزرگ در جهت کاهش فشار بر شبکه برق کشور در ساعات پیک تابستان و رعایت مبحث ۱۹ مقررات ملی ساختمان برمی‌داریم.
              </p>
              <Link to="/roi" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                مشاهده تحلیل اقتصادی و ملی <ArrowRight size={20} className="rotate-180" />
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-cyan/20 rounded-2xl blur-lg group-hover:bg-brand-cyan/30 transition-all"></div>
              <img 
                src="/pic/102.jpg" 
                alt="مبحث 19 مقررات ملی" 
                className="relative rounded-2xl shadow-2xl w-full transform transition-transform group-hover:scale-[1.02]"
                loading="lazy" // Lazy load for off-screen image
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Sunergy Ziggurat (Import Substitution) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-cyan/5 rounded-full z-0"></div>
                <img 
                    src="/pic/103.jpg" 
                    alt="شیشه سانرژی" 
                    className="relative z-10 rounded-2xl shadow-xl w-full max-w-md mx-auto md:mr-auto md:ml-0 border border-slate-100"
                    loading="lazy"
                    width="700"
                    height="700"
                />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-brand-navy mb-6 leading-tight">شیشه سانرژی زیگورات</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-justify text-lg">
                پوشش زیگورات در کنار بازار ساختمان های قدیمی و نیازمند بهسازی با استفاده از خط پوشش نانو کوتینگ میتواند پاسخگوی نیاز کشور به شیشه های های پرفرمنس بوده و نیاز کشور به واردات این محصولات گرانقیمت را کاهش دهد.
              </p>
              <Link to="/products" className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg">
                آشنایی با خط تولید سانرژی
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">صدای مشتریان ما</h2>
            <p className="mt-4 text-slate-300">تجربه مدیران و متخصصین صنعت ساختمان از زیگورات</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="مهندس اکبریان"
              role="سازه های پایدار رهام"
              text="اجرای پوشش نانو شیلد زیگورات تاثیر چشمگیری در کاهش دمای سقف شیشه ای ما داشت. اجرای آن ساده بود و تیم ما پس از آموزش به خوبی از عهده اجرای ان برآمدند."
              rating={5}
            />
            <TestimonialCard 
              name="دکتر تاجدار"
              role="مهندسی مشاور شارآباد بوم"
              text="یکی از چالش های در پروژه وزارت اقتصاد و دارایی هزینه بالای شیشه خارجی بود که با بهره از نانو پوشش نگرانی ما برطرف شد."
              rating={5}
            />
            <TestimonialCard 
              name="مهندس مرتضی سلیمانی"
              role="دفتر مرکزی پروژه دانشگاه خاتم"
              text="دفتر ما جنوبی است و تابش آفتاب در تابستان و زمستان آزار دهنده بود، با پوشش انجام شده فشار بر تاسیسات کاهش و آسایش ما بهبود یافت."
              rating={5}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100 transform hover:-translate-y-1">
    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 text-brand-blue">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-navy mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ name, role, text, rating }: { name: string, role: string, text: string, rating: number }) => (
  <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative">
    <Quote className="absolute top-6 left-6 text-brand-cyan/20" size={40} />
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"} 
        />
      ))}
    </div>
    <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-[80px]">
      "{text}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center text-brand-navy font-bold text-sm">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="text-white font-bold text-sm">{name}</h4>
        <p className="text-brand-cyan text-xs">{role}</p>
      </div>
    </div>
  </div>
);

export default HomePage;
