import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import { LiaTelegram } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const contactPage = () => {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub className="h-6 w-6" />,
      link: "https://github.com/fahriddin0822",
      handle: "@fahriddin0822"
    },
    {
      name: "Telegram",
      icon: <LiaTelegram className="h-6 w-6" />,
      link: "https://t.me/mavlonov_fakhriddin",
      handle: "@mavlonov_fakhriddin"
    },
    {
      name: "Email",
      icon: <MdEmail className="h-6 w-6" />,
      link: "mailto:mavlonovfahriddin0822@gmail.com",
      handle: "mavlonovfahriddin0822@gmail.com"
    }
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Phone className="h-4 w-4" />
        Contact Us
      </Badge>

      <div className="flex flex-col gap-3 w-full">
        <Heading>{`Contact Me!`}</Heading>

        <FramerWrapper
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8"
        >
          {contacts.map((contact, index) => (
            <Link
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-card rounded-xl border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <span className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                {contact.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{contact.name}</span>
                <span className="text-primary/80 text-[15px]">{contact.handle}</span>
              </div>
            </Link>
          ))}
        </FramerWrapper>

        <p className="font-poppins text-lg w-full text-primary max-sm:text-base mt-8">
          {`Let's connect! Whether you have a question, opportunity, or just want to chat tech,
          I'm always open to interesting conversations.`}
        </p>
      </div>
    </div>
  );
};

export default contactPage;