
import React from 'react';
import { Layers, Zap, Building, Factory, Settings, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ProductsPage = () => {
  // Product Schema for Google Shopping/Search
  const productSchema = {
    "@context": "https://schema.org/", 
    "@type": "Product", 
    "name": "پوشش نانو محافظ شیشه زیگورات",
    "image": "https://zigguratsolutions.com/pic/201.jpg",
    "description": "پوشش نانو تکنولوژی دوجزئی جهت کاهش عبور گرما (IR) و UV تا 95 درصد، قابل اجرا روی شیشه‌های نصب شده و خط تولید.",
    "brand": {
      "@type": "Brand",
      "name": "Ziggurat"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IRR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="محصولات - جایگزین شیشه Low-e و Sunergy"
        description="مقایسه و خرید پوشش نانو زیگورات (IGU و Retrofit). بهترین جایگزین برای شیشه Low-e و شیشه سانرژی با قیمت کمتر و کارایی بالاتر در دفع گرما."
        keywords={['شیشه Low-e', 'شیشه سانرژی', 'شیشه Sunergy', 'شیشه دوجداره صنعتی', 'پوشش نانو شیشه', 'قیمت شیشه رفلکس']}
        schema={productSchema}
      />

      <div className="bg-brand-navy py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">خانواده محصولات زیگورات</h1>
          <p className="text-slate-300">دو راهکار تخصصی برای نیازهای متفاوت ساختمانی</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Product 1: Retrofit */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-brand-blue">
                  <Building size={32} />
                </div>
                <h1 className="text-3xl font-bold text-brand-navy">زیگورات رتروفیت (Outdoor)</h1>
              </div>
              <p className="text-slate-600 mb-6 text-justify leading-relaxed">
                این پوشش نانو دوجزئی، مخصوص اجرا روی ساختمان‌های موجود است. با تم رنگی زیبا (Navi Blue) و شفافیت بالا، پوسته‌ای محافظ روی شیشه ایجاد می‌کند که بدون نیاز به تعویض پنجره‌ها، عملکرد انرژی ساختمان را متحول می‌کند.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">محل اجرا</span>
                  <span className="text-brand-navy font-bold">نمای بیرونی ساختمان‌های ساخته شده</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">میزان دفع گرما (IR)</span>
                  <span className="text-green-600 font-bold">۸۵٪ تا ۹۵٪</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">سختی سطح</span>
                  <span className="text-brand-navy font-bold">6H (بسیار مقاوم)</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">مقاومت جوی</span>
                  <span className="text-brand-navy font-bold">ضد باران اسیدی و گرد و غبار</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-900 mb-6">
                <strong>مزیت رقابتی:</strong> برخلاف ویندو فیلم‌ها (برچسب)، این پوشش پوسته نمی‌شود، حباب نمی‌زند و به طور یکپارچه با شیشه پیوند می‌خورد.
              </div>

              <Link to="/contact" className="w-full text-center bg-brand-blue text-white py-3 rounded-lg font-bold hover:bg-brand-navy transition-colors">
                استعلام قیمت رتروفیت
              </Link>
            </div>
            <div className="relative bg-slate-200 min-h-[400px]">
              <img 
                src="/pic/201.jpg" 
                alt="نانو پوشش عایق" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="800"
              />
              <div className="absolute inset-0 bg-brand-navy/20"></div>
            </div>
          </div>
        </div>

        {/* Product 2: Sunergy Ziggurat */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="relative bg-slate-200 min-h-[400px] order-2 md:order-1">
              <img 
                src="/pic/202.jpg" 
                alt="شیشه هارد کوت" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="800"
              />
              <div className="absolute inset-0 bg-brand-navy/20"></div>
            </div>
            <div className="p-10 flex flex-col justify-center order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-100 rounded-lg text-brand-cyan">
                  <Factory size={32} />
                </div>
                <h2 className="text-3xl font-bold text-brand-navy">سانرژی زیگورات (Hard coated)</h2>
              </div>
              <p className="text-slate-600 mb-6 text-justify leading-relaxed">
                مخصوص کارخانجات پروسس شیشه. این پوشش پس از برش و سکوریت شدن شیشه اعمال شده و در دمای ۲۰۰ درجه سانتیگراد پخت می‌شود. این فرآیند شیشه معمولی را به یک شیشه Super Performance تبدیل می‌کند.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">محل اجرا</span>
                  <span className="text-brand-navy font-bold">خط تولید کارخانه (کوره ای)</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">میزان دفع گرما (IR) و UV</span>
                  <span className="text-green-600 font-bold">۸۵٪ تا ۹۵٪</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">ماندگاری</span>
                  <span className="text-green-600 font-bold">دائمی (پخت شده در ساختار شیشه)</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">سختی سطح</span>
                  <span className="text-brand-navy font-bold">3H+</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">قابلیت انبارش</span>
                  <span className="text-brand-navy font-bold">امکان انبارش تک‌لایه به مدت طولانی</span>
                </div>
              </div>

              <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-100 text-sm text-cyan-900 mb-6">
                <strong>مزیت رقابتی:</strong> برخلاف شیشه‌های Soft-Coated که سریع اکسید می‌شوند، این محصول پایداری بسیار بالایی قبل از دوجداره شدن دارد.
              </div>

              <Link to="/contact" className="w-full text-center bg-brand-navy text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                درخواست همکاری صنعتی
              </Link>
            </div>
          </div>
        </div>

        {/* Comparison Section (Optimized for SEO Keywords) */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-10">چرا زیگورات بهتر از رقباست؟</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <Zap size={20}/>
                مشکلات شیشه‌های Low-E
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>مسدود کردن امواج موبایل و رادیویی (ایجاد نقطه کور).</li>
                <li>بازتاب شدید گرما به بیرون و ایجاد "جزیره گرمایی" برای همسایگان.</li>
                <li>قیمت بسیار بالا و وارداتی بودن تکنولوژی.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                <Layers size={20}/>
                مشکلات شیشه‌های Sunergy
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>عملکرد حرارتی محدود (نهایتا ۸۵٪ دفع گرما).</li>
                <li>پرت و ضایعات بالا در هنگام برش و سکوریت.</li>
                <li>نیاز به خرید شیشه پایه گران‌قیمت.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Production Line Section (New) */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-brand-navy rounded-3xl p-8 md:p-12 text-white overflow-hidden relative border border-slate-700 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                    <div className="p-3 bg-brand-cyan/20 rounded-xl">
                        <Settings size={32} className="text-brand-cyan animate-spin-slow" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">خط تولید شیشه سانرژی زیگورات</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-slate-300 leading-relaxed text-justify text-lg">
                            این خط تولید متشکل از بخش شستشو، کلین روم، دستگاه پوشش غلطکی نانو ذرات تولید شرکت SENREN چین، خط پخت حرارتی و نهایتا کاهش دما و دوجداره سازی است.
                        </p>
                        <p className="text-slate-300 leading-relaxed text-justify">
                            این خط قابل اجرا در همه کارخانه های پروسس شیشه بوده و مناسب نانوپوشش "سانرژی زیگورات (Hard coated)" میباشد.
                        </p>
                        
                        <div className="pt-4">
                             <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-cyan text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-lg hover:shadow-cyan-500/50">
                                مشاوره تامین خط تولید
                                <Factory size={20} />
                             </Link>
                        </div>
                    </div>
                    
                    <div className="bg-black/50 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                        <div className="relative aspect-video">
                            <video 
                                controls 
                                className="w-full h-full object-cover"
                                width="1280"
                                height="720"
                                poster="/pic/202.jpg"
                            >
                                <source src="/pic/Mashin.mp4" type="video/mp4" />
                                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                            </video>
                        </div>
                        <div className="p-4 bg-white/5 backdrop-blur-sm text-center">
                            <span className="text-sm text-slate-400">خط تولید SENREN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
