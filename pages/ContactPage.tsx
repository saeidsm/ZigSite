
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle, ChevronDown, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-brand-blue/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-right focus:outline-none"
      >
        <span className={`font-bold ${isOpen ? 'text-brand-blue' : 'text-slate-700'}`}>{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2 text-justify">
          {answer}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'residential',
    area: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'لطفا نام و نام خانوادگی خود را وارد کنید.';
    } else if (formData.name.length < 3) {
      newErrors.name = 'نام باید حداقل ۳ حرف باشد.';
    }

    // Phone validation (Iranian mobile format check)
    const phoneRegex = /^09[0-9]{9}$/;
    if (!formData.phone) {
      newErrors.phone = 'شماره تماس الزامی است.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'شماره موبایل معتبر نیست (مثال: 09121234567).';
    }

    // Area validation (Optional but must be number)
    if (formData.area && isNaN(Number(formData.area))) {
      newErrors.area = 'متراژ باید یک عدد باشد.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);
    
    if (validateForm()) {
      // Construct Mailto Link
      const subject = encodeURIComponent(`درخواست مشاوره زیگورات: ${formData.name}`);
      const body = encodeURIComponent(`
نام و نام خانوادگی: ${formData.name}
شماره تماس: ${formData.phone}
نوع پروژه: ${formData.projectType}
متراژ تقریبی: ${formData.area} متر مربع
--------------------------------
پیام:
${formData.message}
      `);
      
      // Open Email Client
      window.location.href = `mailto:saeedsm@gmail.com?subject=${subject}&body=${body}`;

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', projectType: 'residential', area: '', message: '' });
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "آیا پوشش نانو شیلد باعث تاریک شدن داخل ساختمان می‌شود؟",
      answer: "خیر. یکی از مزیت‌های اصلی فناوری زیگورات حفظ شفافیت (VLT) بین ۶۰ تا ۷۵ درصد است. این پوشش به صورت هوشمند گرما را حذف می‌کند اما به نور مرئی اجازه عبور می‌دهد، بنابراین دید و روشنایی شما حفظ می‌شود."
    },
    {
      question: "آیا این پوشش روی شیشه‌های قدیمی و نصب شده قابل اجراست؟",
      answer: "بله. محصول 'رتروفیت' (Outdoor) ما دقیقاً برای همین منظور طراحی شده است. تیم اجرایی ما بدون نیاز به تعویض پنجره یا تخریب، پوشش را روی نمای بیرونی شیشه‌های موجود اعمال می‌کنند."
    },
    {
      question: "عمر مفید و گارانتی محصول چقدر است؟",
      answer: "پوشش‌های زیگورات دارای سختی بالا (6H) و مقاوم در برابر شرایط جوی هستند. عمر مفید آنها بالای ۱۰ سال تخمین زده می‌شود و بسته به نوع محصول (رتروفیت یا کارخانه‌ای) بین ۳ تا ۵ سال گارانتی کتبی دارند."
    },
    {
      question: "تفاوت این محصول با برچسب‌های شیشه (Window Film) چیست؟",
      answer: "ویندو فیلم‌ها معمولاً یک لایه پلاستیکی هستند که به مرور زمان حباب می‌زنند، پوسته می‌شوند یا تغییر رنگ می‌دهند. پوشش نانو زیگورات یک پیوند شیمیایی با شیشه برقرار می‌کند، بسیار مقاوم‌تر است و حس شیشه طبیعی را حفظ می‌کند."
    },
    {
      question: "میزان صرفه‌جویی در مصرف برق چقدر خواهد بود؟",
      answer: "با کاهش ورود مادون قرمز تا ۹۵٪ و انرژی کلی تابشی تا 50%، بار سیستم‌های سرمایشی به شدت کاهش می‌یابد. طبق محاسبات ما، این محصول می‌تواند تا ۳۰٪ هزینه‌های سرمایش را در فصل تابستان کاهش دهد. ولی این عدد وابسته به جهت ساختمان، سایه اندازی ها، طبقه، نوع سیستم سرمایشی و کنترلی ان میباشد لذا در کلان پروژه ها توصیه میگردد از مدل سازی و شبیه سازی نرم افزاری استفاده گردد."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="تماس با ما - مشاوره رایگان"
        description="جهت دریافت مشاوره رایگان، استعلام قیمت نانو پوشش و اخذ نمایندگی با ما تماس بگیرید. دفتر مرکزی: تهران، اشرفی اصفهانی."
        keywords={['تماس با زیگورات', 'آدرس شرکت زیگورات', 'مشاوره خرید شیشه', 'نمایندگی شیشه نانو']}
      />

      <div className="bg-brand-navy py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">با ما در تماس باشید</h1>
        <p className="text-slate-300">آماده ارتقای کیفیت و بهره‌وری ساختمان خود هستید؟</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">دفتر مرکزی</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                تیم مهندسی زیگورات آماده ارائه مشاوره فنی به سازندگان، معماران و مدیران کارخانجات شیشه است. برای دریافت کاتالوگ یا تنظیم جلسه حضوری با ما تماس بگیرید.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=مجتمع+اداری+تجاری+ونوس+اشرفی+اصفهانی" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-slate-100"
              >
                <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">آدرس و مسیریابی</h3>
                  <p className="text-slate-600 text-sm">تهران، اشرفی اصفهانی، مجتمع اداری تجاری ونوس، طبقه 12 واحد 12</p>
                </div>
              </a>

              <a 
                href="tel:+989120901530"
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-slate-100"
              >
                <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">تلفن تماس</h3>
                  <p className="text-slate-600 text-sm dir-ltr font-mono">+98 912 090 1530</p>
                  <p className="text-slate-400 text-xs mt-1">شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر</p>
                </div>
              </a>

              <a 
                href="mailto:info@zigguratsolutions.com"
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-slate-100"
              >
                <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">ایمیل</h3>
                  <p className="text-slate-600 text-sm font-mono">info@zigguratsolutions.com</p>
                </div>
              </a>
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl mt-8 border border-slate-200">
              <h3 className="font-bold text-brand-navy mb-2">فرصت‌های همکاری (B2B)</h3>
              <p className="text-sm text-slate-600">
                اگر کارخانه شیشه دارید یا تیم اجرایی نما هستید، برای اخذ نمایندگی یا خرید خط تولید SENREN و تامین نانو پوشش درخواست خود را ثبت کنید.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-2 border border-green-200 animate-fade-in">
                <CheckCircle size={20} />
                <span>اطلاعات در نرم‌افزار ایمیل شما بارگذاری شد. لطفا ایمیل را ارسال کنید.</span>
              </div>
            )}

            <h2 className="text-2xl font-bold text-brand-navy mb-6">فرم درخواست مشاوره</h2>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">نام و نام خانوادگی <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition-colors bg-white text-slate-900 ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-cyan focus:border-brand-cyan'}`}
                  placeholder="مثال: علی محمدی"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    if(errors.name) setErrors({...errors, name: ''});
                  }}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">شماره تماس <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    dir="ltr"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition-colors bg-white text-slate-900 text-left placeholder:text-right ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-cyan focus:border-brand-cyan'}`}
                    placeholder="0912..."
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value});
                      if(errors.phone) setErrors({...errors, phone: ''});
                    }}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">متراژ تقریبی نما</label>
                  <input 
                    type="number" 
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition-colors bg-white text-slate-900 ${errors.area ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-cyan focus:border-brand-cyan'}`}
                    placeholder="متر مربع"
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                  />
                  {errors.area && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.area}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">نوع پروژه</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-colors bg-white text-slate-900"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option value="residential">مسکونی / شخصی</option>
                  <option value="commercial">اداری / تجاری</option>
                  <option value="industrial">کارخانه / صنعتی</option>
                  <option value="partnership">درخواست نمایندگی</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">پیام شما</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-colors bg-white text-slate-900"
                  placeholder="توضیحات بیشتر در مورد پروژه..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-navy text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform active:scale-[0.98]"
              >
                ارسال درخواست (ایمیل)
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <HelpCircle className="text-brand-blue" size={32} />
            <h2 className="text-2xl font-bold text-brand-navy">سوالات متداول</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
