import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Gift,
  Menu,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import queedProduct from "@/assets/queed-product.png";
import { Button } from "@/components/ui/button";

export type AudiencePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  action: string;
  processTitle: string;
  steps: Array<{ title: string; text: string }>;
  benefitsTitle: string;
  benefits: Array<{ title: string; text: string }>;
  feature?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; text: string }>;
  };
  faqs?: Array<{ question: string; answer: string }>;
  icon?: LucideIcon;
};

const navigation = [
  { label: "Home", to: "/" },
  { label: "Consumers", to: "/consumer" },
  { label: "Installers", to: "/installer" },
  { label: "Distributors", to: "/distributor" },
] as const;

export function AudiencePage({
  eyebrow,
  title,
  intro,
  action,
  processTitle,
  steps,
  benefitsTitle,
  benefits,
  feature,
  faqs,
  icon: HeroIcon = Gift,
}: AudiencePageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell audience-page">
      <nav className="global-nav" aria-label="Main navigation">
        <Link className="wordmark" to="/" aria-label="Queed home">Queed</Link>
        <div className="nav-links audience-nav">
          {navigation.map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "active" }}>{item.label}</Link>)}
        </div>
        <Button variant="ghost" size="icon" className="nav-menu" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </nav>
      {menuOpen && <div className="mobile-menu">{navigation.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</div>}

      <header className="audience-hero">
        <div className="audience-hero-copy">
          <p className="product-label">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-subtitle">{intro}</p>
          <a className="primary-pill" href="https://queed.sa/">{action} <ArrowRight /></a>
        </div>
        <div className="audience-hero-visual" aria-hidden="true">
          <div className="audience-orbit"><HeroIcon /><span>Queed</span></div>
          <img src={queedProduct} alt="" width={768} height={1152} />
        </div>
      </header>

      <section className="content-section audience-process">
        <div className="section-heading"><p className="section-kicker">How it works</p><h2>{processTitle}</h2></div>
        <div className="process-track">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="audience-benefits">
        <div className="section-heading"><p className="section-kicker">Why Queed</p><h2>{benefitsTitle}</h2></div>
        <div className="audience-benefit-grid">
          {benefits.map((benefit) => <article key={benefit.title}><Check /><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}
        </div>
      </section>

      {feature && (
        <section className="content-section audience-feature">
          <div><p className="section-kicker">{feature.eyebrow}</p><h2>{feature.title}</h2><p className="feature-intro">{feature.intro}</p></div>
          <div className="feature-list">{feature.items.map((item) => <article key={item.title}><Sparkles /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        </section>
      )}

      {faqs && (
        <section className="content-section faq-section audience-faq">
          <div className="section-heading"><p className="section-kicker">Good to know</p><h2>Frequently asked questions.</h2></div>
          <div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><ChevronDown /></summary><p>{faq.answer}</p></details>)}</div>
        </section>
      )}

      <section className="audience-close"><p className="section-kicker">Ready to begin?</p><h2>{title}</h2><a className="primary-pill" href="https://queed.sa/">{action} <ArrowRight /></a></section>
      <footer><div><Link className="wordmark" to="/">Queed</Link><p>Smart energy management for Saudi homes.</p></div><div className="footer-bottom"><span>Every watt, understood.</span><span>© 2026 Queed</span></div></footer>
    </main>
  );
}