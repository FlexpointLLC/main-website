import Image from "next/image";
import Link from "next/link";

import footerBg from "@/public/assets/img/footer-bg.svg";

const footerLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-secondary-from-bottom py-12 text-para">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 md:flex-row md:justify-between md:gap-0 lg:px-0">
        <figure className="col-span-2">
          <Image
            src="/assets/img/flexpoint-logo.svg"
            width={185.55}
            height={45.9}
            alt="Logo of Flexpoint"
            className="h-12 w-32"
          />
        </figure>
        <ul className="z-10 col-span-8 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="leading-6 tracking-[-0.18px] underline-offset-2 hover:underline"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
              <Link
              target="_blank"
                className="leading-6 tracking-[-0.18px] underline-offset-2 hover:underline"
                href="https://flexpoint.gitbook.io/flexpoint-docs"
              >
                Help
              </Link>
            </li>
        </ul>

        <p className="col-span-2 leading-6 tracking-[-0.18px]">
          Copyright © {new Date().getFullYear()}
        </p>
      </div>
      <Image
        src={footerBg}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
      />
    </footer>
  );
};

export default Footer;
