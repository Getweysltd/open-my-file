import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { AudiencePage } from "@/components/queed/AudiencePage";

export const Route = createFileRoute("/installer")({
  head: () => ({ meta: [
    { title: "Installer Cashback Program — Queed" },
    { name: "description", content: "Join the Queed installer network and earn cashback on eligible Queed Meter installations." },
    { property: "og:title", content: "Install More. Earn More. — Queed" },
    { property: "og:description", content: "A simple, paperless cashback program for licensed Queed Meter installers." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: InstallerPage,
});

function InstallerPage() {
  return <AudiencePage
    eyebrow="For licensed installers"
    title="Install More. Earn More."
    intro="Get cashback on eligible Queed Meter installations through a fast, paperless verification process."
    action="Become a Queed Installer"
    processTitle="Four steps to cashback."
    steps={[
      { title: "Install", text: "Install the Queed Meter for your customer following the standard installation guidelines." },
      { title: "Take a Photo", text: "Capture a clear picture showing the installed device in place." },
      { title: "Share Details", text: "Send the installation picture and device serial number to Queed's official WhatsApp Business." },
      { title: "Get Cashback", text: "Once the installation is verified, receive your eligible cashback." },
    ]}
    benefitsTitle="A better way to grow your trade."
    benefits={[
      { title: "Cashback per install", text: "Earn cashback on every eligible, verified installation." },
      { title: "No paperwork", text: "Submit a photo and serial number using WhatsApp Business." },
      { title: "Earn more as you install", text: "Grow your earning opportunity with every additional installation." },
      { title: "Join the network", text: "Become part of Queed's growing network of qualified installers." },
    ]}
    feature={{
      eyebrow: "Partner with Queed",
      title: "Backed at every installation.",
      intro: "Build your position in one of the fastest-growing home services categories with practical support from Queed.",
      items: [
        { title: "Growing demand", text: "Smart home energy management is becoming an essential home service." },
        { title: "Fast payouts", text: "Verified cashback is typically released within a few business days." },
        { title: "Training and support", text: "Access installation guidelines, product training, and technical support." },
        { title: "Recognition", text: "Top installers can receive priority leads and featured network status." },
      ],
    }}
    faqs={[
      { question: "What qualifications do I need?", answer: "Installers should be licensed electricians familiar with home distribution panels. Queed provides installation guidelines and product training." },
      { question: "How long does a typical installation take?", answer: "Most installations are completed in a single visit, usually in under an hour." },
      { question: "When will I receive my cashback?", answer: "Once your photo and serial number are verified through WhatsApp Business, cashback is typically released within a few business days." },
      { question: "What happens if verification is rejected?", answer: "You'll be told what is missing and can resubmit at no cost. There is no limit on resubmissions." },
      { question: "Can I install outside my usual service area?", answer: "Yes. Eligibility is based on the installation itself, not your location, provided the standard guidelines are followed." },
    ]}
    icon={Wrench}
  />;
}