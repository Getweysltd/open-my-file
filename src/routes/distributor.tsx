import { createFileRoute } from "@tanstack/react-router";
import { Network } from "lucide-react";
import { AudiencePage } from "@/components/queed/AudiencePage";

export const Route = createFileRoute("/distributor")({
  head: () => ({ meta: [
    { title: "Distributor Partnership — Queed" },
    { name: "description", content: "Partner with Queed to bring smart home energy management to homes across Saudi Arabia." },
    { property: "og:title", content: "Grow Your Business with Queed" },
    { property: "og:description", content: "Product, marketing, and network support for Queed distributors across Saudi Arabia." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DistributorPage,
});

function DistributorPage() {
  return <AudiencePage
    eyebrow="For distributors"
    title="Grow Your Business with Queed."
    intro="Bring smart home energy management to homes across Saudi Arabia, backed by real incentives and a connected partner network."
    action="Become a Queed Distributor"
    processTitle="From registration to growth."
    steps={[
      { title: "Register", text: "Submit your interest through the Queed distributor portal." },
      { title: "Get Approved", text: "The Queed team reviews your application and confirms your onboarding." },
      { title: "Start Selling", text: "Use product training, documentation, and marketing resources to enter your market." },
      { title: "Earn Incentives", text: "Build performance benefits around sales volume, targets, and growth." },
      { title: "Grow", text: "Expand your market coverage with support from the Queed ecosystem." },
    ]}
    benefitsTitle="Built for shared growth."
    benefits={[
      { title: "Business opportunity", text: "Meet rising demand for smart home energy solutions across Saudi Arabia." },
      { title: "Performance incentives", text: "Earn based on sales, targets, and growth — not only a flat margin." },
      { title: "Product support", text: "Receive full product training, documentation, and technical assistance." },
      { title: "Marketing support", text: "Use co-branded materials and campaign support to help you sell." },
      { title: "A connected network", text: "Work with certified installers and the wider Queed ecosystem in your region." },
      { title: "Easy onboarding", text: "Follow a straightforward path from approval to your first sale." },
    ]}
    feature={{
      eyebrow: "Distributor incentives",
      title: "Performance unlocks more.",
      intro: "Queed's distributor program is designed to reward consistent sales, ambitious targets, and long-term market growth.",
      items: [
        { title: "Sales incentives", text: "Per-unit rewards recognize each successful sale." },
        { title: "Target-based rewards", text: "Additional benefits support progress toward agreed targets." },
        { title: "Volume benefits", text: "Higher order volumes can unlock improved commercial terms." },
        { title: "Performance recognition", text: "Top distributors can access special promotions and recognition." },
      ],
    }}
    faqs={[
      { question: "What does it take to become a Queed distributor?", answer: "Register through the distributor portal. The Queed team reviews your application and approves you to start selling." },
      { question: "Is there a minimum order size?", answer: "Minimums are confirmed during onboarding and scale with your market size. Your Queed account manager will guide you." },
      { question: "How are performance incentives calculated?", answer: "Incentives are built around sales volume, targets, and growth rather than a flat margin. Full details are shared after approval." },
      { question: "Can I get exclusivity in my region?", answer: "Regional arrangements are evaluated case by case based on distributor performance and market coverage." },
      { question: "What support do I get?", answer: "You receive product training, documentation, co-branded marketing materials, and access to the certified installer network in your region." },
    ]}
    icon={Network}
  />;
}