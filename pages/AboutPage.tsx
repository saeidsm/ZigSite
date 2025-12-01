
import React from 'react';
import { History, Target, Users } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="درباره ما - مهندسی نمای ساختمان"
        description="زیگورات؛ حاصل ۳۰ سال تجربه مهندسی نما و آلومینیوم شیشه تهران. پیشگام در ارائه راهکارهای نوین کاهش مصرف انرژی در ساختمان‌های ایران."
        keywords={['مهندسی نما', 'آلومینیوم شیشه تهران', 'شرکت مهندسی نما', 'مجری نمای کرتین وال', 'مشاوره انرژی ساختمان']}
      />

      {/* Header */}
      <div className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">درباره زیگورات</h1>
          <p className="text-brand-cyan text-lg">تلفیق ۳۰ سال تجربه مهندسی نما با لبه‌های دانش نانو</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
              <History className="text-brand-cyan" />
              داستان ما
            </h2>
            <p className="text-slate-600 leading-relaxed text-justify">
              زیگورات یک استارتاپ نوظهور نیست؛ بلکه ثمره سه دهه تجربه درخشان <a href="https://alumglass.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:underline">"آلومینیوم شیشه تهران"</a> در صنعت ساختمان است. شرکت مادر ما، پیشگام نوآوری‌هایی همچون اجرای اولین شیشه‌های پرفورمنس در برج اداری وزارت علوم (شهرک غرب)، اولین نمای کلمپ، و اولین اجرای کامپوزیت پنل در ایران بوده است.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              سعید مادرشاهی از سهامداران ومدیران <a href="https://alumglass.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:underline">آلومینیوم شیشه تهران</a> با درک عمیق از چالش‌های اقلیمی ایران و محدودیت‌های شیشه‌های موجود در بازار (مانند Sunergy و Low-E)، پس از ۳ سال تحقیق و توسعه متمرکز، زیگورات را با هدف ارائه محصولی "جایگزین، ارزان‌تر و با کیفیت‌تر" با همراهی جمعی از کارشناسان صنعت رنگ و رزین و متخصصین انرژی و فیزیک ساختمان تأسیس کرد.
            </p>
            <div className="mt-8">
              <img 
                src="/pic/910.jpg" 
                alt="شیشه عایق دوجداره" 
                className="w-full h-auto rounded-2xl shadow-lg border border-slate-100 object-cover"
                width="1280"
                height="714"
                loading="lazy"
              />
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 border-r-4 border-brand-cyan h-fit">
            <h3 className="text-xl font-bold text-brand-navy mb-4">ارزش‌های ما</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-brand-blue rounded-full"></span>
                <span className="text-slate-700">نوآوری در بهره‌وری انرژی</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-brand-blue rounded-full"></span>
                <span className="text-slate-700">تعهد به محیط زیست پایدار</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-brand-blue rounded-full"></span>
                <span className="text-slate-700">کیفیت مهندسی ایرانی</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-brand-blue rounded-full"></span>
                <span className="text-slate-700">شفافیت و صداقت با مشتری</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-3xl p-10 md:p-16 text-white text-center">
            <Target size={48} className="mx-auto text-brand-cyan mb-6" />
            <h2 className="text-3xl font-bold mb-6">ماموریت ما</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
              ما اینجا هستیم تا با استفاده از فناوری "Spectrally Selective" (طیف‌گزین)، معادله قدیمی "یا نور یا گرما" را بشکنیم. هدف ما توانمندسازی ساختمان‌های ایران برای مقابله با گرمایش جهانی، بدون قربانی کردن نور طبیعی و زیبایی معماری است.
            </p>
          </div>
        </div>

        {/* Team Teaser */}
        <div className="mt-20 text-center">
            <Users className="mx-auto text-brand-blue mb-4" size={40} />
            <h2 className="text-3xl font-bold text-brand-navy mb-4">تیم متخصص</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                متشکل از مهندسین باتجربه نما، متخصصین نانو شیمی و مشاوران انرژی که همگی برای یک هدف مشترک تلاش می‌کنند: ساختمانی خنک‌تر برای آینده.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
