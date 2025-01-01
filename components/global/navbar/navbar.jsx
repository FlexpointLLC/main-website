import { Button } from "@/components/ui/button";
import vectorLeft from "@/public/assets/img/vector-left.svg";
import vectorRight from "@/public/assets/img/vector-right.svg";
import navLogo from "@/public/assets/img/navbar-logo.svg";
import logoIcon from "@/public/assets/img/logo-icon.svg";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";

const navOptions = [
  {
    name: "Features",
    href: "/#features",
  },
  {
    name: "Pricing",
    href: "/#pricing",
  },
  {
    name: "How it works",
    href: "/#how-it-works",
  },
  {
    name: "FAQ",
    href: "/#faq",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[1000]" role="banner">
      <div className="relative max-md:p-4 md:mx-auto md:w-full md:max-w-5xl">
        <div className="max-md:border-[rgba(255, 255, 255, 0.30)] grid w-full grid-cols-12 items-center justify-between rounded-bl-[20px] rounded-br-[20px] px-4 py-3 max-md:rounded-bl-[12px] max-md:rounded-br-[12px] max-md:rounded-tl-[12px] max-md:rounded-tr-[12px] max-md:border max-md:bg-[#D6EDFE] max-md:shadow max-md:backdrop-blur-[20px] md:bg-white">
          <div className="col-span-2">
            <Link href="/" aria-label="Homepage" className="max-md:hidden">
              <Image
                src={navLogo}
                alt="Flexpoint Logo"
                priority
                loading="eager"
              />
            </Link>
            <Link href="/" aria-label="Homepage" className="md:hidden">
              <Image
                src={logoIcon}
                alt="Flexpoint Logo Icon"
                priority
                loading="eager"
              />
            </Link>
          </div>

          <nav
            aria-label="Main navigation"
            className="col-span-8 hidden items-center justify-center md:flex"
          >
            <ul className="flex items-center space-x-10">
              {navOptions.map((option, index) => (
                <li key={index}>
                  <Link
                    href={option.href}
                    className="text-center text-sm font-medium text-para hover:text-primary"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-8 md:hidden"></div>

          <div className="col-span-2 flex justify-end">
            <MobileMenu />
            <Link href="https://dev-admin.flexpoint.store/lookup">
              <Button
                variant="secondary"
                aria-label="Login button"
                className={"px-6 font-normal text-para max-md:hidden"}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src={vectorLeft}
          alt="Decorative graphic on the left"
          className="absolute left-[-45px] top-0 hidden xl:block"
          role="presentation"
        />
        <Image
          src={vectorRight}
          alt="Decorative graphic on the right"
          className="absolute right-[-45px] top-0 hidden xl:block"
          role="presentation"
        />
      </div>
    </header>
  );
}
