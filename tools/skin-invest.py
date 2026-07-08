#!/usr/bin/env python3
# Applies the Ziggurat site skin (head meta+font+theme, token skin <style>,
# site header, absolute config path, theme-toggle script) to a RAW invest tool
# HTML in place. Idempotent-safe: asserts each anchor matches exactly once.
import sys

p = sys.argv[1]
s = open(p, encoding="utf-8").read()

def repl(old, new, s):
    n = s.count(old)
    assert n == 1, f"anchor count {n} != 1 for: {old[:60]!r}"
    return s.replace(old, new)

# ---- 1) HEAD: noindex + font + shared theme-before-paint ----
OLD1 = '''  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>شبیه‌ساز بیزنس‌پلن شیشه طیف‌گزین — نسخه ۳ دوارزی</title>
  <style>'''
NEW1 = '''  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- Unlisted tool: reachable by URL only, never indexed. -->
  <meta name="robots" content="noindex,nofollow,noarchive,noimageindex" />
  <title>شبیه‌ساز بیزنس‌پلن شیشه طیف‌گزین — زیگورات</title>
  <!-- Site font + shared light/dark theme (same zz-theme key as the main SPA) -->
  <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
  <script>
    (function () {
      try {
        var t = localStorage.getItem('zz-theme');
        if (t !== 'dark' && t !== 'light') {
          t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', t);
      } catch (e) { document.documentElement.setAttribute('data-theme', 'light'); }
    })();
  </script>
  <style>'''
s = repl(OLD1, NEW1, s)

# ---- 2) skin <style> before </head> + site header after <body> ----
OLD2 = '''  </style>
</head>
<body>
<div class="app">'''
NEW2 = '''  </style>
  <style id="zz-skin">
    /* Ziggurat site skin — harmonises this standalone tool with the main SPA
       design tokens (index.css). Loaded AFTER the tool's own style, so wins. */
    :root{
      --bg:#F0EFE9; --bg2:#EAE8E0; --surface:#FFFFFF; --surface-up:#FFFFFF;
      --ink:#322D2A; --muted:#8B857E; --rule:rgba(50,45,42,.14);
      --accent:#2F7A28; --accent-strong:#245E1F; --accent-ink:#FFFFFF; --accent-soft:rgba(47,122,40,.09);
      --onyx:#0F0E12;
      --card:var(--surface); --line:var(--rule); --navy:var(--ink); --green:var(--accent);
      --gold:#B78A35; --red:#C0554F; --blue:#3E6B91;
      --shadow:0 1px 0 var(--rule); --radius:20px; --zz-header-h:66px;
    }
    html[data-theme="dark"]{
      --bg:#0F0E12; --bg2:#151419; --surface:#1B1A20; --surface-up:#232128;
      --ink:#F0EFE9; --muted:#9A968F; --rule:rgba(240,239,233,.12);
      --accent:#64C23F; --accent-strong:#7ED257; --accent-ink:#0E1A08; --accent-soft:rgba(100,194,63,.14);
      --onyx:#08070A; --gold:#D6B15E; --red:#E38C86; --blue:#7FA8CB;
    }
    body{font-family:'Vazirmatn', system-ui, sans-serif;background:var(--bg);color:var(--ink);transition:background .35s ease,color .35s ease}
    ::selection{background:var(--accent);color:#fff}
    aside{background:var(--surface);border-left:1px solid var(--rule)}
    .brand{border-bottom:1px solid var(--rule)} .brand .label{color:var(--accent)}
    .nav button{color:var(--ink)}
    .nav button.active,.nav button:hover{background:var(--accent-soft);color:var(--accent)}
    .actions .btn{background:var(--surface);color:var(--ink);border:1px solid var(--rule)}
    .actions .btn.primary{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
    .actions .btn.gold{background:var(--accent-soft);color:var(--ink);border-color:var(--rule)}
    .curswitch{border:1px solid var(--rule)}
    .curswitch button{background:var(--surface);color:var(--muted)}
    .curswitch button.active{background:var(--accent);color:var(--accent-ink)}
    .hero{background:var(--surface);border:1px solid var(--rule);box-shadow:none;border-radius:24px}
    .hero-title{color:var(--ink)} .pill{background:var(--accent-soft);color:var(--accent)}
    .card{background:var(--surface);border:1px solid var(--rule);box-shadow:none;border-radius:22px}
    h1,h2,h3{color:var(--ink)} .kpi .value{color:var(--ink)}
    .kpi.alert{background:var(--surface);border-color:var(--red)}
    .field label{color:var(--ink)}
    .field input,.field select,.field textarea{background:var(--surface-up);border:1px solid var(--rule);color:var(--ink)}
    .field input:focus,.field textarea:focus,.field select:focus{outline:2px solid var(--accent-soft);border-color:var(--accent)}
    table{background:var(--surface);border:1px solid var(--rule)}
    th{background:var(--bg2);color:var(--ink)} th,td{border-bottom:1px solid var(--rule)}
    .svgbox{background:var(--surface);border:1px solid var(--rule)}
    .note{background:var(--accent-soft);border-right-color:var(--accent);color:var(--ink)}
    .note.danger{background:color-mix(in srgb,var(--red) 16%,var(--surface));border-right-color:var(--red);color:var(--ink)}
    .risk{border-bottom:1px dashed var(--rule)}
    .report-page{background:var(--surface);border:1px solid var(--rule);box-shadow:none;border-radius:24px}
    .report-summary .box{background:var(--bg2);border:1px solid var(--rule)}
    .legal-item{background:var(--surface);border:1px solid var(--rule)} .legal-item b{color:var(--ink)}
    .footer{border-top:1px solid var(--rule)} .good{color:var(--accent)}
    .xmlarea{background:var(--surface-up);border:1px solid var(--rule);color:var(--ink)}
    .heat td.h-good{background:color-mix(in srgb,var(--accent) 16%,var(--surface));color:var(--ink)}
    .heat td.h-mid{background:color-mix(in srgb,var(--gold) 20%,var(--surface));color:var(--ink)}
    .heat td.h-bad{background:color-mix(in srgb,var(--red) 18%,var(--surface));color:var(--ink)}
    /* site header */
    .zz-site-header{position:sticky;top:0;z-index:80;background:color-mix(in srgb,var(--bg) 88%,transparent);
      -webkit-backdrop-filter:saturate(1.4) blur(14px);backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid var(--rule)}
    .zz-hdr-wrap{max-width:1400px;margin-inline:auto;padding:12px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
    .zz-hdr-brand{display:flex;align-items:center;gap:11px;color:var(--ink)}
    .zz-hdr-name{display:flex;flex-direction:column;line-height:1.05}
    .zz-hdr-name b{font-weight:800;font-size:19px;color:var(--ink)}
    .zz-hdr-name small{font-size:9.5px;font-weight:700;letter-spacing:.06em;color:var(--accent)}
    .zz-hdr-nav{display:flex;align-items:center;gap:4px;background:var(--surface);border:1px solid var(--rule);border-radius:100px;padding:6px;max-width:100%;overflow-x:auto}
    .zz-hdr-nav a{font-size:13.5px;font-weight:500;padding:8px 14px;border-radius:100px;white-space:nowrap;color:var(--muted);transition:color .2s}
    .zz-hdr-nav a:hover{color:var(--accent)}
    .zz-hdr-actions{display:flex;align-items:center;gap:10px;flex-shrink:0}
    #zzThemeBtn{width:40px;height:40px;border-radius:100px;border:1px solid var(--rule);background:var(--surface);color:var(--ink);cursor:pointer;font-size:17px;line-height:1;display:flex;align-items:center;justify-content:center}
    .zz-hdr-cta{display:inline-block;background:var(--accent);color:var(--accent-ink);border-radius:100px;padding:11px 20px;font-weight:700;font-size:14px}
    .zz-hdr-cta:hover{background:var(--accent-strong);color:var(--accent-ink)}
    @media(min-width:1051px){aside{top:var(--zz-header-h)!important;height:calc(100vh - var(--zz-header-h))!important}}
    @media(max-width:1050px){.zz-site-header{position:static}.zz-hdr-nav{order:3;width:100%}}
    @media print{.zz-site-header{display:none!important}}
  </style>
</head>
<body>
<header class="zz-site-header no-print">
  <div class="zz-hdr-wrap">
    <a class="zz-hdr-brand" href="/" aria-label="زیگورات — خانه">
      <svg width="30" height="26" viewBox="0 0 28 24" fill="none" aria-hidden="true">
        <rect x="2" y="16" width="24" height="5.2" rx="1.4" fill="var(--accent)"/>
        <rect x="6.5" y="8.7" width="15" height="5.2" rx="1.4" fill="var(--accent)"/>
        <rect x="10.5" y="1.5" width="7" height="5.2" rx="1.4" fill="var(--accent)"/>
      </svg>
      <span class="zz-hdr-name"><b>زیگورات</b><small>طیف‌گزین · SUSTAINABLE</small></span>
    </a>
    <nav class="zz-hdr-nav zz-scroll" aria-label="ناوبری سایت">
      <a href="/#/">خانه</a>
      <a href="/#/products">محصولات</a>
      <a href="/#/technology">تکنولوژی</a>
      <a href="/#/roi">توجیه اقتصادی</a>
      <a href="/#/articles">مقالات</a>
      <a href="/#/about">درباره ما</a>
      <a href="/#/contact">تماس با ما</a>
    </nav>
    <div class="zz-hdr-actions">
      <button id="zzThemeBtn" type="button" aria-label="تغییر تم روشن و تیره">◐</button>
      <a class="zz-hdr-cta" href="/#/contact">مشاوره رایگان</a>
    </div>
  </div>
</header>
<div class="app">'''
s = repl(OLD2, NEW2, s)

# ---- 3) absolute config path (works on /invest and /invest/) ----
OLD3 = '''    const res = await fetch("./ziggurat-config.json", {cache:"no-store"});'''
NEW3 = '''    // Absolute path so config loads on both /invest and /invest/.
    const res = await fetch("/invest/ziggurat-config.json", {cache:"no-store"});'''
s = repl(OLD3, NEW3, s)

# ---- 4) header theme-toggle script before </body> ----
OLD4 = '''initConfig();
</script>
</body>
</html>'''
NEW4 = '''initConfig();
</script>
<script>
  /* Site-header light/dark toggle — mirrors the SPA (localStorage 'zz-theme'). */
  (function () {
    var btn = document.getElementById('zzThemeBtn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('zz-theme', next); } catch (e) {}
    });
  })();
</script>
</body>
</html>'''
s = repl(OLD4, NEW4, s)

# ---- 5) surface the 'glassprocessor' preset as a button in the scenario picker ----
OLD5 = '''      <button class="btn" onclick="loadPreset('kb')">دانش‌بنیان</button>
    </div>'''
NEW5 = '''      <button class="btn" onclick="loadPreset('kb')">دانش‌بنیان</button>
      <button class="btn" onclick="loadPreset('glassprocessor')">کارخانه پروسه شیشه</button>
    </div>'''
s = repl(OLD5, NEW5, s)

open(p, "w", encoding="utf-8").write(s)
print("skin applied OK ->", p)
