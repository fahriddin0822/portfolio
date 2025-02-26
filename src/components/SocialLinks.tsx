import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import { LiaTelegram } from "react-icons/lia";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    {
      name: "Telegram",
      link: "https://t.me/mavlonov_fakhriddin",
      icon: <LiaTelegram size={22} /> // Added size prop
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/fakhriddin-mavlonov/",
      icon: <Linkedin size={22} /> // Optional: keep consistent sizing
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
