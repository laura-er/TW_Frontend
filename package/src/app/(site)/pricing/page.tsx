import PricingSection from "@/app/components/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing | BlogForge",
};

const Pricing = () => {
  return (
    <PricingSection/>
  )
}

export default Pricing