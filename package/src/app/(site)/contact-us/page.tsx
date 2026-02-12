import ContactUs from "@/app/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact-us | BlogForge",
};

const Contact = () => {
  return (
    <ContactUs/>
  )
}

export default Contact