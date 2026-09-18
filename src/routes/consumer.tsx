import { createFileRoute } from "@tanstack/react-router";
import { Gift } from "lucide-react";
import { AudiencePage } from "@/components/queed/AudiencePage";

export const Route = createFileRoute("/consumer")({
  head: () => ({ meta: [
    { title: "Consumer Rewards — Queed" },
    { name: "description", content: "Save electricity with the Queed Meter, earn reward points automatically, and redeem or gift your rewards." },
    { property: "og:title", content: "Save Electricity. Earn Rewards. — Queed" },
    { property: "og:description", content: "Turn verified home electricity savings into useful rewards with Queed." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ConsumerPage,
});

function ConsumerPage() {
  return <AudiencePage
    eyebrow="For consumers"
    title="Save Electricity. Earn Rewards."
    intro="Every kilowatt you save with your Queed Meter adds up — turn your energy savings into real rewards."
    action="Register & Start Earning"
    processTitle="Save. Earn. Redeem. Gift."
    steps={[
      { title: "Use Your Queed Meter", text: "Install your Queed Meter and start tracking your home's electricity in real time." },
      { title: "Save Electricity", text: "Follow Kahrabai's tips to cut consumption on the appliances driving up your bill." },
      { title: "Earn Reward Points", text: "Every verified unit of electricity you save is automatically converted into reward points." },
      { title: "Redeem Your Rewards", text: "Use your accumulated points for benefits directly through the Queed app." },
      { title: "Gift Your Loved Ones", text: "Share the savings by gifting Queed devices or rewards to family and friends." },
    ]}
    benefitsTitle="Saving pays you back."
    benefits={[
      { title: "Earn while saving", text: "The less electricity you use, the more you earn." },
      { title: "Automatic rewards", text: "Points accumulate without manual tracking and update as savings are verified." },
      { title: "Share the benefit", text: "Gift devices or rewards to loved ones and extend the savings to their homes." },
      { title: "Simple registration", text: "Get started in minutes with an easy-to-understand rewards journey." },
    ]}
    feature={{
      eyebrow: "Your rewards",
      title: "Every saving becomes progress.",
      intro: "Queed measures your verified electricity savings against your baseline use, then turns that progress into points in your account.",
      items: [
        { title: "Earn automatically", text: "The more you reduce consumption below your baseline, the more points you accumulate." },
        { title: "Watch points grow", text: "See your balance directly in the app as savings are verified each billing cycle." },
        { title: "Redeem in the app", text: "Use your points for available Queed rewards once you reach the required balance." },
      ],
    }}
    icon={Gift}
  />;
}