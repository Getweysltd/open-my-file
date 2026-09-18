import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BellRing,
  Bot,
  ChevronDown,
  ChevronRight,
  CircleGauge,
  Clock3,
  Menu,
  PlugZap,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingDown,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import queedProduct from "@/assets/queed-product.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Queed — Smart Home Energy Monitor" },
      { name: "description", content: "Queed shows what is using electricity in your home, appliance by appliance, and helps lower your bill by up to 26%." },
      { property: "og:title", content: "Queed — Understand Every Watt" },
      { property: "og:description", content: "Live appliance-level electricity insights and practical guidance for a more efficient home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QueedPage,
});

type Language = "en" | "ar";

const content = {
  en: {
    nav: [
      ["What is Queed", "#what-it-is"],
      ["How it works", "#how-it-works"],
      ["Benefits", "#benefits"],
      ["Ask Kahrabai", "#kahrabai"],
    ],
    navLabel: "Main navigation",
    menuLabel: "Toggle navigation",
    languageLabel: "Switch to Arabic",
    announcement: "One device. Your whole home, understood.",
    announcementLink: "See how it works",
    productLabel: "Queed Home Energy",
    heroTitle: <>Your electricity bill<br />has been a black box.<br /><em>Queed opens it.</em></>,
    heroBody: "Queed is a smart meter and AI energy app that shows exactly what is running up your electricity bill — down to the appliance — so you can cut it by up to 26%.",
    getQueed: "Get Queed",
    seeHow: "See how it works",
    whatKicker: "What it is",
    whatTitle: <>One device.<br />A complete picture.</>,
    whatBody: "Queed is a smart energy monitor that connects to your home's electricity supply and tells you, in real time, exactly how much power you're using and what's using it.",
    whatCompare: "Unlike a standard electricity meter that only shows one number once a month, Queed gives you continuous, appliance-level visibility powered by an AI assistant that learns your home's unique electrical signature.",
    whatStatement: "No sensors on every appliance. No guesswork. One device, installed once, watching everything.",
    stepsKicker: "How it works",
    stepsTitle: <>From one signal<br />to a clear answer.</>,
    steps: [
      ["Install", "A licensed electrician wires Queed into your home's meter or distribution panel — a single, one-time install."],
      ["Learn", "Queed's AI reads your home's electrical signal and recognizes appliances by their unique power signature. No manual setup required."],
      ["See", "Open the app for live appliance-by-appliance consumption, daily and monthly trends, and clear next steps to lower your bill."],
    ],
    monitoringKicker: "Continuous monitoring",
    monitoringTitle: <>See your home<br />as it happens.</>,
    monitoringBody: "Queed monitors your home continuously — not just once a month like a standard bill.",
    monitoring: [
      ["Whole-home, real-time tracking", "See consumption update live as appliances turn on and off."],
      ["Appliance-level breakdown", "AI separates one electrical signal into your AC, water heater, refrigerator, and more — without extra sensors."],
      ["Anomaly detection", "Get notified when an appliance draws more power than usual, often before an inefficiency becomes expensive."],
      ["Historical trends", "Follow how consumption changes week to week and month to month, not only at billing time."],
    ],
    liveNow: "Live now",
    benefitsKicker: "What you get",
    benefitsTitle: <>Less uncertainty.<br />More control.</>,
    benefits: [
      ["Lower bills", "Queed users see an average reduction of up to 26% on their monthly electricity bill."],
      ["No more guessing", "Know exactly which appliance is driving usage instead of guessing between the AC, fridge, or water heater."],
      ["Peace of mind", "Catch a failing or inefficient appliance early, before it appears as a surprise on your bill."],
      ["One simple install", "A single device covers your whole home. No sensors to install or maintain on every appliance."],
      ["Clear guidance", "Get specific actions in plain language, ranked by how much they can actually save you."],
    ],
    kahrabaiKicker: "Ask Kahrabai",
    kahrabaiTitle: <>Meet your home's<br />energy assistant.</>,
    kahrabaiBody: "Kahrabai is the AI at the center of Queed. It doesn't just show you data — it explains it. Ask why your bill changed, what is costing you most, or what to change today, and get a plain-language answer.",
    prompts: ["Why was my bill higher this month?", "Which appliance uses the most electricity?", "What's one thing I can change today?", "Is my AC running normally?"],
    ask: "Ask Kahrabai",
    faqKicker: "Understand the essentials",
    faqTitle: "Related topics.",
    faqs: [
      ["What is a smart meter?", "A smart meter measures your home's electricity use and communicates that data digitally. Unlike a traditional meter, it does not need to be read manually."],
      ["How do smart meters work?", "A smart meter measures the electrical current flowing into your home and sends that data continuously — in Queed's case, directly to your app."],
      ["What is a watt, and why does it matter?", "A watt is a unit of power: how much energy something uses at a given moment. Your bill is based on watts used over time, measured in kilowatt-hours."],
      ["Smart meter or energy monitor — what's the difference?", "A smart meter typically reports total usage. An energy monitor like Queed goes further by breaking that total down by appliance and turning it into actionable insight."],
    ],
    closeKicker: "Every watt, understood",
    closeTitle: <>Take control<br />of your energy.</>,
    closeBody: "One smart meter. One intelligent app. A clear path to a more efficient home.",
    footer: "Smart energy management for Saudi homes.",
    source: "Product information provided by Queed",
    copyright: "© 2026 Queed",
  },
  ar: {
    nav: [
      ["ما هو كيد", "#what-it-is"],
      ["كيف يعمل", "#how-it-works"],
      ["الفوائد", "#benefits"],
      ["اسأل كهربائي", "#kahrabai"],
    ],
    navLabel: "التنقل الرئيسي",
    menuLabel: "فتح قائمة التنقل",
    languageLabel: "التبديل إلى الإنجليزية",
    announcement: "جهاز واحد. رؤية متكاملة لكل منزلك.",
    announcementLink: "تعرّف على كيفية العمل",
    productLabel: "كيد للطاقة المنزلية",
    heroTitle: <>فاتورة الكهرباء<br />لم تعد لغزًا.<br /><em>كيد يكشف التفاصيل.</em></>,
    heroBody: "كيد عداد ذكي وتطبيق يعمل بالذكاء الاصطناعي، يوضح لك بالتحديد ما الذي يستهلك الكهرباء في منزلك حتى مستوى كل جهاز، ليساعدك على خفض فاتورتك بنسبة تصل إلى 26٪.",
    getQueed: "احصل على كيد",
    seeHow: "تعرّف على كيفية العمل",
    whatKicker: "ما هو كيد",
    whatTitle: <>جهاز واحد.<br />صورة متكاملة.</>,
    whatBody: "كيد جهاز ذكي لمراقبة استهلاك الكهرباء، يتصل بمنظومة الكهرباء في منزلك ليخبرك، لحظة بلحظة، بمقدار الطاقة التي تستهلكها وما الذي يستهلكها.",
    whatCompare: "على عكس العداد التقليدي الذي يعرض رقمًا واحدًا كل شهر، يمنحك كيد رؤية مستمرة على مستوى كل جهاز كهربائي، بفضل مساعد ذكاء اصطناعي يتعرّف تلقائيًا على البصمة الكهربائية الفريدة لمنزلك.",
    whatStatement: "لا حاجة لتركيب أجهزة استشعار على كل جهاز. لا تخمين. جهاز واحد، يُركّب مرة واحدة، ويراقب كل شيء.",
    stepsKicker: "كيف يعمل",
    stepsTitle: <>من إشارة واحدة<br />إلى إجابة واضحة.</>,
    steps: [
      ["التركيب", "يقوم كهربائي مرخّص بتوصيل كيد بعداد الكهرباء أو لوحة التوزيع في منزلك — تركيب واحد ولمرة واحدة."],
      ["التعلّم", "يقرأ الذكاء الاصطناعي في كيد الإشارة الكهربائية لمنزلك ويتعرّف على كل جهاز من خلال بصمته الفريدة، دون أي إعداد يدوي."],
      ["المشاهدة", "افتح التطبيق لترى استهلاك كل جهاز لحظة بلحظة، والاتجاهات اليومية والشهرية، وخطوات واضحة لخفض فاتورتك."],
    ],
    monitoringKicker: "مراقبة مستمرة",
    monitoringTitle: <>شاهد منزلك<br />لحظة بلحظة.</>,
    monitoringBody: "يراقب كيد منزلك باستمرار — وليس مرة واحدة في الشهر كما في الفاتورة التقليدية.",
    monitoring: [
      ["مراقبة فورية لكامل المنزل", "شاهد الاستهلاك يتحدّث لحظيًا مع تشغيل الأجهزة وإيقافها."],
      ["تفصيل على مستوى كل جهاز", "يفصل الذكاء الاصطناعي إشارة المنزل إلى المكيف وسخان المياه والثلاجة وغيرها، دون أجهزة استشعار إضافية."],
      ["كشف الاستهلاك غير الطبيعي", "احصل على تنبيه عندما يستهلك جهاز طاقة أكبر من المعتاد، قبل أن يتحول الخلل إلى تكلفة مرتفعة."],
      ["اتجاهات تاريخية", "تابع تغير استهلاكك أسبوعيًا وشهريًا، وليس فقط عند وصول الفاتورة."],
    ],
    liveNow: "الاستهلاك الآن",
    benefitsKicker: "ماذا تحصل عليه",
    benefitsTitle: <>حيرة أقل.<br />تحكّم أكبر.</>,
    benefits: [
      ["فواتير أقل", "يشهد مستخدمو كيد انخفاضًا يصل إلى 26٪ في فاتورة الكهرباء الشهرية."],
      ["لا مزيد من التخمين", "اعرف بالتحديد أي جهاز يرفع استهلاكك بدلًا من التخمين بين المكيف والثلاجة وسخان المياه."],
      ["راحة بال", "اكتشف الجهاز المتعطل أو غير الفعّال مبكرًا، قبل أن يظهر كمفاجأة في فاتورتك."],
      ["تركيب بسيط", "جهاز واحد يغطي منزلك بالكامل، دون تركيب أو صيانة أجهزة استشعار على كل جهاز."],
      ["إرشادات واضحة", "احصل على خطوات محددة وسهلة الفهم، مرتبة حسب مقدار التوفير الذي يمكن أن تحققه."],
    ],
    kahrabaiKicker: "اسأل كهربائي",
    kahrabaiTitle: <>تعرّف على مساعد<br />الطاقة الذكي لمنزلك.</>,
    kahrabaiBody: "كهربائي هو الذكاء الاصطناعي في قلب كيد. لا يكتفي بعرض البيانات، بل يشرحها. اسأله لماذا ارتفعت فاتورتك، أو أي جهاز يكلفك أكثر، أو ما الذي يمكنك تغييره اليوم، واحصل على إجابة واضحة وسهلة الفهم.",
    prompts: ["لماذا كانت فاتورتي أعلى هذا الشهر؟", "ما الجهاز الأكثر استهلاكًا للكهرباء؟", "ما الشيء الذي يمكنني تغييره اليوم؟", "هل يعمل المكيف بشكل طبيعي؟"],
    ask: "اسأل كهربائي",
    faqKicker: "افهم الأساسيات",
    faqTitle: "مواضيع ذات صلة.",
    faqs: [
      ["ما هو العداد الذكي؟", "العداد الذكي جهاز يقيس استهلاك الكهرباء في منزلك وينقل البيانات رقميًا. وعلى عكس العداد التقليدي، لا يحتاج إلى قراءة يدوية."],
      ["كيف تعمل العدادات الذكية؟", "يقيس العداد الذكي التيار الكهربائي المتدفق إلى منزلك ويرسل البيانات باستمرار — وفي حالة كيد، يرسلها مباشرة إلى تطبيقك."],
      ["ما هو الواط، ولماذا يهم فاتورتي؟", "الواط وحدة قياس القدرة، أي مقدار الطاقة التي يستهلكها جهاز في لحظة معينة. وتُحسب فاتورتك بناءً على الاستهلاك عبر الزمن بالكيلوواط/ساعة."],
      ["ما الفرق بين العداد الذكي وجهاز مراقبة الطاقة؟", "يعرض العداد الذكي عادةً إجمالي الاستهلاك فقط. أما كيد فيفصّل هذا الإجمالي حسب كل جهاز ويحوّله إلى معلومات فورية قابلة للتنفيذ."],
    ],
    closeKicker: "كل واط أصبح مفهومًا",
    closeTitle: <>تحكّم في<br />طاقة منزلك.</>,
    closeBody: "عداد ذكي واحد. تطبيق ذكي واحد. طريق واضح نحو منزل أكثر كفاءة.",
    footer: "إدارة ذكية للطاقة في المنازل السعودية.",
    source: "معلومات المنتج مقدمة من كيد",
    copyright: "© 2026 كيد",
  },
} as const;

const monitorIcons = [Activity, PlugZap, BellRing, Clock3];
const benefitIcons = [TrendingDown, Search, ShieldCheck, Wrench, Sparkles];

function QueedPage() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content[language];
  const isArabic = language === "ar";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    return () => {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    };
  }, [isArabic, language]);

  const switchLanguage = () => {
    setLanguage(isArabic ? "en" : "ar");
    setMenuOpen(false);
  };

  return (
    <main id="overview" className="site-shell" dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <nav className="global-nav" aria-label={copy.navLabel}>
        <a className="wordmark" href="#overview" aria-label="Queed home">Queed</a>
        <div className="nav-links">{copy.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <div className="nav-tools">
          <Button variant="ghost" size="sm" className="language-switch" onClick={switchLanguage} aria-label={copy.languageLabel}>{isArabic ? "EN" : "العربية"}</Button>
          <Button variant="ghost" size="icon" className="nav-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={copy.menuLabel}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </nav>
      {menuOpen && <div className="mobile-menu">{copy.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>}

      <div className="announcement">{copy.announcement} <a href="#how-it-works">{copy.announcementLink} <ChevronRight /></a></div>

      <header className="queed-hero">
        <div className="hero-visual">
          <div className="hero-halo" aria-hidden="true" />
          <div className="hero-product-wrap">
            <img src={queedProduct} alt={isArabic ? "جهاز كيد الذكي لمراقبة الكهرباء" : "Queed smart electricity monitor with connected sensor cables"} width={768} height={1152} />
            <span className="signal signal-one" /><span className="signal signal-two" /><span className="signal signal-three" />
          </div>
        </div>
        <div className="hero-message">
          <p className="product-label">{copy.productLabel}</p>
          <h1>{copy.heroTitle}</h1>
          <p className="hero-subtitle">{copy.heroBody}</p>
          <div className="hero-actions"><a className="primary-pill" href="https://queed.sa/">{copy.getQueed}</a><a className="text-link" href="#how-it-works">{copy.seeHow} <ChevronRight /></a></div>
        </div>
      </header>

      <section id="what-it-is" className="content-section what-section">
        <div className="section-heading"><p className="section-kicker">{copy.whatKicker}</p><h2>{copy.whatTitle}</h2></div>
        <div className="what-copy"><p>{copy.whatBody}</p><p>{copy.whatCompare}</p><strong>{copy.whatStatement}</strong></div>
      </section>

      <section id="how-it-works" className="content-section steps-section">
        <div className="section-heading"><p className="section-kicker">{copy.stepsKicker}</p><h2>{copy.stepsTitle}</h2></div>
        <div className="steps-grid">{copy.steps.map(([title, body], index) => <article key={title}><div className="step-number">0{index + 1}</div><div className="step-icon">{index === 0 ? <Wrench /> : index === 1 ? <Bot /> : <CircleGauge />}</div><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="monitoring-band">
        <div className="monitor-copy"><p className="section-kicker">{copy.monitoringKicker}</p><h2>{copy.monitoringTitle}</h2><p>{copy.monitoringBody}</p><div className="monitor-list">{copy.monitoring.map(([title, body], index) => { const Icon = monitorIcons[index]; return <article key={title}><Icon /><div><h3>{title}</h3><p>{body}</p></div></article>; })}</div></div>
        <div className="live-dashboard" aria-label={copy.liveNow}><div className="live-status"><span>{copy.liveNow}</span><i /></div><strong>14.05 <small>kW</small></strong><div className="energy-bars" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <b key={index} />)}</div><div className="device-reading"><span>AC</span><strong>5.8 kW</strong></div><div className="device-reading"><span>{isArabic ? "سخان المياه" : "Water heater"}</span><strong>3.2 kW</strong></div></div>
      </section>

      <section id="benefits" className="content-section benefits-section">
        <div className="section-heading"><p className="section-kicker">{copy.benefitsKicker}</p><h2>{copy.benefitsTitle}</h2></div>
        <div className="benefits-grid">{copy.benefits.map(([title, body], index) => { const Icon = benefitIcons[index]; return <article key={title}><Icon /><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>; })}</div>
      </section>

      <section id="kahrabai" className="kahrabai-section">
        <div className="kahrabai-copy"><p className="section-kicker">{copy.kahrabaiKicker}</p><h2>{copy.kahrabaiTitle}</h2><p>{copy.kahrabaiBody}</p><a className="primary-pill" href="https://queed.sa/">{copy.ask} <ArrowRight /></a></div>
        <div className="prompt-stack" aria-label={copy.kahrabaiKicker}><div className="assistant-mark"><Sparkles /><span>Kahrabai AI</span></div>{copy.prompts.map((prompt, index) => <div className="prompt" key={prompt}><span>{prompt}</span>{index === 0 && <strong>{isArabic ? "وجد كيد الإجابة" : "Queed found the answer"}</strong>}</div>)}</div>
      </section>

      <section className="content-section faq-section">
        <div className="section-heading"><p className="section-kicker">{copy.faqKicker}</p><h2>{copy.faqTitle}</h2></div>
        <div className="faq-list">{copy.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><ChevronDown /></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="closing-cta"><img src={queedProduct} alt={isArabic ? "جهاز كيد الذكي" : "Queed smart electricity monitor"} loading="lazy" width={768} height={1152} /><div><p className="section-kicker">{copy.closeKicker}</p><h2>{copy.closeTitle}</h2><p>{copy.closeBody}</p><a className="primary-pill" href="https://queed.sa/">{copy.getQueed} <ArrowRight /></a></div></section>

      <footer><div><a className="wordmark" href="#overview">Queed</a><p>{copy.footer}</p></div><div className="footer-bottom"><span>{copy.source}</span><span>{copy.copyright}</span></div></footer>
    </main>
  );
}