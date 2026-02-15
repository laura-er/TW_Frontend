import PricingSection from "@/app/components/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing | Read & Swap",
};

const Pricing = () => {
  return (
    <PricingSection/>
  )
}

export default Pricing