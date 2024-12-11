import Image from "next/image";
import Link from "next/link";

import footerBg from "@/public/assets/img/footer-bg.svg";

const footerLinks = [
  { label: "Blogs", href: "/#" },
  { label: "Terms of service", href: "/terms" },
  { label: "Privacy & policy", href: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-secondary-from-bottom text-para relative">
      <div className="max-w-5xl mx-auto px-4 lg:px-0 flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between items-center">
        <figure>
          <Image
            src="/assets/img/flexpoint-logo.svg"
            width={250}
            height={50}
            alt="Logo of Flexpoint"
            className="h-12 w-32"
          />
        </figure>
        <ul className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 z-10">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="hover:underline underline-offset-2"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
      <Image
        src={footerBg}
        alt=""
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />
    </footer>
  );
};

export default Footer;
