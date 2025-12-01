
import React from 'react';
import { Microscope, Sun, Thermometer, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const TechnologyPage = () => {
  return (
    <div className="bg-white pb-20">
      <SEO 
        title="تکنولوژی طیف‌گزین (Spectrally Selective) - فناوری نانو"
        description="آشنایی با فناوری نانو ذرات در پوشش‌های شیشه زیگورات. تکنولوژی Spectrally Selective چگونه گرما (IR) را حذف می‌کند اما نور مرئی را عبور می‌دهد؟ تفاوت SHGC و U-Value."
        keywords={['تکنولوژی نانو شیشه', 'Spectrally Selective', 'ضریب بهره خورشیدی SHGC', 'رزونانس پلاسمون سطحی', 'فیلتر اشعه UV']}
      />

      <div className="bg-brand-navy py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-cyan opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-6">فناوری طیف‌گزین (Spectrally Selective)</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            جادوی ذرات نانو: چگونه گرما را متوقف می‌کنیم اما نور را دعوت می‌کنیم؟
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 sm:px-6 lg:px-8">
        
        {/* Core Mechanism */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">مکانیزم عملکرد نانو ذرات</h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-justify">
              راز کارایی نانو شیلد زیگورات در ذرات نانوی فلزات کمیاب (Rare Metal Nano Particles) نهفته است. این ذرات هوشمند که بر اساس پدیده فیزیکی <strong>رزونانس پلاسمون سطحی (LSPR)</strong> عمل می‌کنند، مانند یک الک بسیار دقیق رفتار می‌کنند.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg h-fit">
                  <Sun className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">۱. عبور نور مرئی</h3>
                  <p className="text-sm text-slate-600">به امواج نور مرئی (۴۰۰ تا ۷۰۰ نانومتر) اجازه عبور می‌دهد تا روشنایی طبیعی خانه تامین شود.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-100 p-3 rounded-lg h-fit">
                  <Thermometer className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">۲. شکار گرما (NIR)</h3>
                  <p className="text-sm text-slate-600">امواج فروسرخ نزدیک (۷۰۰ تا ۲۵۰۰ نانومتر) که عامل اصلی گرما هستند را جذب و مسدود می‌کند.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-purple-100 p-3 rounded-lg h-fit">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">۳. سد کردن اشعه UV</h3>
                  <p className="text-sm text-slate-600">تا ۹۹٪ از اشعه فرابنفش جلوگیری کرده و مانع از پوسیدگی و تغییر رنگ وسایل داخلی می‌شود.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner">
             {/* Schematic Illustration placeholder */}
             <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-y-0 left-1/2 w-4 bg-blue-200/50 backdrop-blur-sm z-10"></div> {/* The Glass */}
                
                {/* Sun Rays */}
                <div className="absolute top-1/4 right-0 w-1/2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 left-0 w-1/2 h-2 bg-yellow-400/80 rounded-full"></div> {/* Visible Light Passes */}
                
                {/* Heat Rays */}
                <div className="absolute top-1/2 right-0 w-1/2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute top-1/2 right-1/2 w-2 h-8 bg-red-500/50 rounded-full transform rotate-45"></div> {/* Heat Blocked/Absorbed */}

                {/* UV Rays */}
                <div className="absolute top-3/4 right-0 w-1/2 h-2 bg-purple-500 rounded-full"></div>
                <div className="absolute top-3/4 right-1/2 w-2 h-8 bg-purple-500/50 rounded-full transform -rotate-45"></div> {/* UV Blocked */}

                <div className="absolute bottom-4 text-center w-full text-xs text-slate-400">شماتیک عملکرد فیلتراسیون انتخابی</div>
             </div>
          </div>
        </div>

        {/* Technical Data Comparison */}
        <div className="bg-slate-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">چرا SHGC مهم‌تر از U-Value است؟</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold text-slate-700 mb-2">U-Value (عایق حرارتی)</h3>
                    <p className="text-slate-500 text-sm mb-4">نشان‌دهنده میزان انتقال حرارت ناشی از اختلاف دمای بیرون و داخل.</p>
                    <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded">
                        کاربرد اصلی: <span className="font-bold text-blue-600">اقلیم‌های سرد</span> (حفظ گرمای بخاری در زمستان)
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm ring-2 ring-brand-cyan/20">
                    <h3 className="text-lg font-bold text-brand-navy mb-2">SHGC (ضریب بهره خورشیدی)</h3>
                    <p className="text-slate-500 text-sm mb-4">نشان‌دهنده میزان ورود گرمای خورشید به داخل ساختمان.</p>
                    <div className="text-sm text-slate-600 bg-brand-light p-3 rounded">
                        کاربرد اصلی: <span className="font-bold text-red-600">اقلیم‌های گرم و آفتابی ایران</span> (جلوگیری از ورود گرمای خورشید)
                    </div>
                </div>
            </div>
            <p className="mt-8 text-center text-slate-600 max-w-2xl mx-auto">
                در ایران، بیشترین هزینه انرژی صرف <strong>سرمایش</strong> می‌شود. تکنولوژی زیگورات مستقیماً SHGC را هدف قرار می‌دهد و دمای داخل را تا ۱۰ درجه خنک‌تر می‌کند.
            </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
