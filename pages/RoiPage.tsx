import React, { useState, useMemo } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp, Wallet, Zap, Calculator, RotateCcw, Building2, Globe, Leaf, Info, Factory } from 'lucide-react';
import SEO from '../components/SEO';

const RoiPage = () => {
  // State for calculator inputs
  const [area, setArea] = useState(5000);
  const [electricityRate, setElectricityRate] = useState(1000); // Tomans per kWh (Consumer)
  const [productionCost, setProductionCost] = useState(4000); // Tomans per kWh (Gov Cost)
  const [exportPriceCent, setExportPriceCent] = useState(10); // Cents per kWh
  const [exchangeRate, setExchangeRate] = useState(110000); // Tomans per USD
  const [subsidy, setSubsidy] = useState(50); // Percentage

  // Constants
  const costPerM2USD = 8;
  const savingPerM2kWh = 47.6; // Based on estimate
  const electricityInflationRate = 0.20; // 20% annual inflation
  const productionCostInflationRate = 0.20; // 20% annual inflation for production cost
  const carbonFactorKg = 0.6; // 0.6 kg CO2 per kWh (approx for fossil fuel grid)
  const carbonPriceUSDPerTon = 25; // Estimate carbon credit price

  // Derived Calculations
  const calculations = useMemo(() => {
    // 1. Initial Investment
    const totalCostUSD = area * costPerM2USD;
    const totalCostToman = totalCostUSD * exchangeRate;
    
    const govSubsidyAmountToman = totalCostToman * (subsidy / 100);
    const ownerCostToman = totalCostToman - govSubsidyAmountToman;

    // 2. Annual Energy Saving
    const annualEnergySavingkWh = area * savingPerM2kWh;
    
    // 3. Gov Revenue from Export (Initial)
    const annualExportRevenueToman = annualEnergySavingkWh * (exportPriceCent / 100) * exchangeRate;

    // 4. Carbon Savings
    const annualCarbonSavedKg = annualEnergySavingkWh * carbonFactorKg;
    const annualCarbonValueUSD = (annualCarbonSavedKg / 1000) * carbonPriceUSDPerTon;

    // 5. Yearly Projections (10 Years)
    let ownerCumulativeBalance = -ownerCostToman;
    let govCumulativeBalance = -govSubsidyAmountToman;
    
    let ownerPaybackYear = ownerCostToman <= 0 ? 0 : null;
    let govPaybackYear = govSubsidyAmountToman <= 0 ? 0 : null;
    
    let ownerTotalProfit10Y = 0;
    let govTotalProfit10Y = 0;

    const chartData = [];

    // Year 0 (Start)
    chartData.push({
      year: 0,
      name: 'شروع',
      ownerBalance: Math.round(ownerCumulativeBalance / 1000000),
      govBalance: Math.round(govCumulativeBalance / 1000000),
    });

    for (let year = 1; year <= 10; year++) {
      // --- Owner Logic ---
      // Consumer rate increases by inflation (20%)
      const currentYearConsumerRate = electricityRate * Math.pow(1 + electricityInflationRate, year - 1);
      const ownerYearlySavingToman = annualEnergySavingkWh * currentYearConsumerRate;
      
      const prevOwnerBalance = ownerCumulativeBalance;
      ownerCumulativeBalance += ownerYearlySavingToman;
      
      // --- Gov Logic ---
      // Gov Net Benefit = Export Income - Lost Domestic Income
      // Export Income = Saving (kWh) * Export Price (Fixed USD * Exchange Rate)
      // Lost Domestic Income = Saving (kWh) * Consumer Price (Inflated)
      // Note: Production Cost exists in both scenarios (Consumption vs Export), so it cancels out in the "Net Gain" calculation.
      // However, if we wanted to calculate "Total Subsidy Saved", we would use ProductionCost. 
      // Here we focus on the "Profitability of the investment".
      
      const lostDomesticRevenueToman = ownerYearlySavingToman;
      const govNetYearlyGainToman = annualExportRevenueToman - lostDomesticRevenueToman;
      
      const prevGovBalance = govCumulativeBalance;
      govCumulativeBalance += govNetYearlyGainToman;

      // Check Payback (Owner)
      if (ownerPaybackYear === null && prevOwnerBalance < 0 && ownerCumulativeBalance >= 0) {
        const fraction = Math.abs(prevOwnerBalance) / ownerYearlySavingToman;
        ownerPaybackYear = (year - 1) + fraction;
      }

      // Check Payback (Gov)
      if (govPaybackYear === null && prevGovBalance < 0 && govCumulativeBalance >= 0) {
        // Only if gain is positive
        if (govNetYearlyGainToman > 0) {
            const fraction = Math.abs(prevGovBalance) / govNetYearlyGainToman;
            govPaybackYear = (year - 1) + fraction;
        }
      }

      chartData.push({
        year: year,
        name: `سال ${year}`,
        ownerBalance: Math.round(ownerCumulativeBalance / 1000000),
        govBalance: Math.round(govCumulativeBalance / 1000000),
      });
    }

    ownerTotalProfit10Y = ownerCumulativeBalance;
    govTotalProfit10Y = govCumulativeBalance;

    return {
      totalCostToman,
      ownerCostToman,
      govSubsidyAmountToman,
      annualEnergySavingkWh,
      ownerPaybackYear: ownerPaybackYear !== null ? ownerPaybackYear : 10.1,
      govPaybackYear: govPaybackYear !== null ? govPaybackYear : 10.1,
      ownerTotalProfit10Y,
      govTotalProfit10Y,
      annualExportRevenueUSD: (annualExportRevenueToman / exchangeRate),
      totalCarbonSavedTon10Y: (annualCarbonSavedKg * 10) / 1000,
      totalCarbonValueUSD10Y: annualCarbonValueUSD * 10,
      chartData
    };
  }, [area, electricityRate, productionCost, exportPriceCent, exchangeRate, subsidy]);

  // Formatters
  const formatCurrency = (val: number) => new Intl.NumberFormat('fa-IR').format(Math.round(val));
  
  const formatMillions = (val: number) => {
    const absVal = Math.abs(val);
    if (absVal >= 1000000000) return new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 1 }).format(val / 1000000000) + ' میلیارد';
    return new Intl.NumberFormat('fa-IR').format(Math.round(val / 1000000)) + ' میلیون';
  };

  const formatUSD = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="محاسبه بازگشت سرمایه (ROI) - بهینه سازی انرژی"
        description="ماشین حساب آنلاین محاسبه صرفه جویی مصرف برق و بازگشت سرمایه با استفاده از نانو شیلد زیگورات. تحلیل اقتصادی ویژه مبحث ۱۹ مقررات ملی."
        keywords={['بهینه سازی مصرف انرژی ساختمان', 'کاهش هزینه برق', 'سوبسید دولتی انرژی', 'بازگشت سرمایه ساختمان', 'محاسبه صرفه جویی انرژی']}
      />

      <div className="bg-brand-navy py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">تحلیل پیشرفته بازگشت سرمایه (ROI)</h1>
        <p className="text-slate-300">محاسبه سودآوری برای مالک ساختمان و منافع ملی دولت</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 sm:px-6 lg:px-8">
        
        {/* Calculator Inputs */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 mb-8">
          <div className="bg-brand-blue/5 p-6 border-b border-brand-blue/10 flex items-center gap-3">
            <Calculator className="text-brand-blue" />
            <h2 className="text-xl font-bold text-brand-navy">پارامترهای ورودی متغیر</h2>
          </div>
          
          <div className="p-6 md:p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Input: Area */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                مساحت نما (متر مربع): <span className="text-brand-blue font-bold dir-ltr">{formatCurrency(area)}</span>
              </label>
              <input 
                type="range" 
                min="500" 
                max="30000" 
                step="100" 
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>

            {/* Input: Subsidy */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                سهم سوبسید دولتی: <span className="text-green-600 font-bold">{subsidy}%</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="5" 
                value={subsidy}
                onChange={(e) => setSubsidy(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
               <div className="flex justify-between text-xs text-slate-400">
                <span>مالک ۱۰۰٪</span>
                <span>دولت ۱۰۰٪</span>
              </div>
            </div>

            {/* Input: Exchange Rate */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                نرخ ارز (تومان):
              </label>
              <div className="relative">
                <input 
                  type="number" 
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-colors pl-12"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold">تومان</span>
              </div>
            </div>

            {/* Input: Electricity Rate (Consumer) */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                تعرفه برق مصرف‌کننده (سال اول):
              </label>
              <div className="relative">
                <input 
                  type="number" 
                  value={electricityRate}
                  onChange={(e) => setElectricityRate(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-colors pl-12"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold">تومان/kWh</span>
              </div>
              <p className="text-[10px] text-red-500">* با فرض ۲۰٪ افزایش سالانه تورم</p>
            </div>

            {/* Input: Production Cost (Gov) */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                هزینه تولید و انتقال برق (دولت):
              </label>
              <div className="relative">
                <input 
                  type="number" 
                  value={productionCost}
                  onChange={(e) => setProductionCost(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-colors pl-12"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold">تومان/kWh</span>
              </div>
               <p className="text-[10px] text-red-500">* هزینه تولید همگام با تورم افزایش می‌یابد</p>
            </div>

            {/* Input: Export Price */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                قیمت صادرات برق:
              </label>
              <div className="relative">
                <input 
                  type="number" 
                  value={exportPriceCent}
                  onChange={(e) => setExportPriceCent(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-colors pl-12"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold">سنت دلار</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* 1. Owner Metrics */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Building2 size={24}/></div>
                    <h3 className="text-lg font-bold text-slate-800">منافع مالک ساختمان</h3>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-slate-500 text-sm mb-1">بازگشت سرمایه (ROI)</p>
                        <p className="text-3xl font-bold text-blue-600 dir-ltr">
                            {calculations.ownerPaybackYear === 0 
                                ? 'فوری (۰ سال)' 
                                : calculations.ownerPaybackYear < 10 
                                    ? `${calculations.ownerPaybackYear.toFixed(1)} سال` 
                                    : '+10 سال'
                            }
                        </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                        <p className="text-slate-500 text-sm mb-1">سود خالص ۱۰ ساله</p>
                        <p className={`text-2xl font-bold dir-ltr ${calculations.ownerTotalProfit10Y > 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {formatMillions(calculations.ownerTotalProfit10Y)} <span className="text-sm text-slate-400 font-normal">تومان</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. Government Metrics */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600"><Globe size={24}/></div>
                    <h3 className="text-lg font-bold text-slate-800">منافع دولت (سوبسید)</h3>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-slate-500 text-sm mb-1">بازگشت سرمایه سوبسید</p>
                        <p className="text-3xl font-bold text-green-600 dir-ltr">
                             {calculations.govSubsidyAmountToman > 0 
                                ? (calculations.govPaybackYear < 10 ? `${calculations.govPaybackYear.toFixed(1)} سال` : '+10 سال')
                                : 'بدون سوبسید'}
                        </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                        <p className="text-slate-500 text-sm mb-1">سود خالص (صادرات - مصرف)</p>
                        <p className={`text-2xl font-bold dir-ltr ${calculations.govTotalProfit10Y > 0 ? 'text-green-600' : 'text-slate-600'}`}>
                            {formatMillions(calculations.govTotalProfit10Y)} <span className="text-sm text-slate-400 font-normal">تومان</span>
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                            تفاوت درآمد صادراتی و درآمد داخلی از دست رفته
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. Environmental Metrics */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-teal-500"></div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-teal-100 p-2 rounded-lg text-teal-600"><Leaf size={24}/></div>
                    <h3 className="text-lg font-bold text-slate-800">اثرات زیست‌محیطی</h3>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-slate-500 text-sm mb-1">کاهش تولید کربن (۱۰ ساله)</p>
                        <p className="text-3xl font-bold text-teal-600 dir-ltr">
                            {new Intl.NumberFormat('fa-IR').format(Math.round(calculations.totalCarbonSavedTon10Y))} <span className="text-lg">تُن</span>
                        </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                        <p className="text-slate-500 text-sm mb-1">صرفه‌جویی انرژی سالانه</p>
                        <p className="text-2xl font-bold text-teal-600 dir-ltr">
                            {formatCurrency(calculations.annualEnergySavingkWh)} <span className="text-sm font-normal text-slate-400">kWh</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Charts Section */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
             <div>
                <h2 className="text-2xl font-bold text-brand-navy">نمودار تجمعی جریان نقدینگی (۱۰ ساله)</h2>
                <p className="text-sm text-slate-500 mt-1">مقایسه روند سودآوری برای مالک (آبی) و دولت (سبز)</p>
             </div>
             <div className="flex flex-col items-end gap-2 text-right">
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">واحد عمودی: میلیون تومان</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Info size={12} />
                  نمودار نشان‌دهنده تراز مالی تجمعی است (نه سود سالانه)
                </span>
             </div>
          </div>
         
          <div className="h-[400px] w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={calculations.chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{fill: '#64748b'}} />
                <YAxis tick={{fill: '#64748b'}} />
                <Tooltip 
                    formatter={(value) => new Intl.NumberFormat('fa-IR').format(value as number) + ' میلیون تومان'}
                    contentStyle={{ borderRadius: '12px', direction: 'rtl', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="top" height={36}/>
                <Line 
                    type="monotone" 
                    dataKey="ownerBalance" 
                    name="تراز مالی مالک" 
                    stroke="#2563eb" 
                    strokeWidth={3} 
                    dot={{fill: '#2563eb', r: 3}}
                />
                <Line 
                    type="monotone" 
                    dataKey="govBalance" 
                    name="تراز مالی دولت" 
                    stroke="#16a34a" 
                    strokeWidth={3} 
                    dot={{fill: '#16a34a', r: 3}}
                />
                {/* Zero Line */}
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#94a3b8" strokeWidth={1}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Assumptions Box */}
        <div className="bg-slate-100 rounded-xl p-6 border border-slate-200 mb-6">
            <div className="flex items-center gap-2 mb-4 font-bold text-slate-700">
                <Info size={20} className="text-slate-500" />
                <h3>خلاصه فرضیات محاسباتی:</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600">
                <div className="flex flex-col bg-white p-3 rounded-lg">
                    <span className="text-slate-400 mb-1">صرفه‌جویی انرژی هر متر مربع</span>
                    <span className="font-bold text-slate-800 dir-ltr text-right">{savingPerM2kWh} kWh/Year</span>
                </div>
                 <div className="flex flex-col bg-white p-3 rounded-lg">
                    <span className="text-slate-400 mb-1">تورم سالانه انرژی</span>
                    <span className="font-bold text-slate-800 dir-ltr text-right">20%</span>
                </div>
                <div className="flex flex-col bg-white p-3 rounded-lg">
                    <span className="text-slate-400 mb-1">هزینه تولید برق (امسال)</span>
                    <span className="font-bold text-slate-800 dir-ltr text-right">{formatCurrency(productionCost)} T/kWh</span>
                </div>
                <div className="flex flex-col bg-white p-3 rounded-lg">
                    <span className="text-slate-400 mb-1">قیمت صادراتی (ثابت)</span>
                    <span className="font-bold text-slate-800 dir-ltr text-right">{exportPriceCent} Cents/kWh</span>
                </div>
            </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-sm text-yellow-800 leading-relaxed text-justify mb-8">
            <div className="flex items-center gap-2 mb-2 font-bold">
                <AlertIcon />
                <span>توضیحات مدل اقتصادی:</span>
            </div>
            <p>
                محاسبه سود دولت بر اساس «ظرفیت صادراتی ایجاد شده» انجام شده است. به این معنی که هر کیلووات ساعت صرفه‌جویی شده، قابلیت صادرات با قیمت جهانی را پیدا می‌کند. سود دولت از تفاضل درآمد صادراتی و درآمد ریالی از دست رفته (قبض برق مصرف‌کننده) حاصل می‌شود. هزینه تولید و انتقال برق (که با تورم ۲۰٪ افزایش می‌یابد) در هر دو حالت مصرف داخلی یا صادرات وجود دارد، لذا در محاسبه تراز نهایی "تفاوت سود" حذف می‌شود.
            </p>
        </div>

      </div>
    </div>
  );
};

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
);

export default RoiPage;