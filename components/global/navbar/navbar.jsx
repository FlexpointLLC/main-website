import { Button } from "@/components/ui/button";
import vectorLeft from "@/public/assets/img/vector-left.svg";
import vectorRight from "@/public/assets/img/vector-right.svg";
import navLogo from "@/public/assets/img/navbar-logo.svg";
import logoIcon from "@/public/assets/img/logo-icon.svg";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "./menu-button";

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
    <header className="sticky top-0" role="banner">
      <div className="relative max-md:p-4 md:mx-auto md:w-full md:max-w-5xl">
        <div className="max-md:border-[rgba(255, 255, 255, 0.30)] flex w-full items-center justify-between rounded-bl-[20px] rounded-br-[20px] px-4 py-[13px] max-md:rounded-bl-[12px] max-md:rounded-br-[12px] max-md:rounded-tl-[12px] max-md:rounded-tr-[12px] max-md:border max-md:bg-[#D6EDFE] max-md:shadow max-md:backdrop-blur-[20px] md:bg-white">
          <Link href="/" aria-label="Homepage" className="hidden md:block">
            <Image
              src={navLogo}
              alt="Flexpoint Logo"
              priority
              loading="eager"
              className="h-auto w-auto"
            />
          </Link>
          <Link href="/" aria-label="Homepage" className="md:hidden">
            <Image
              src={logoIcon}
              alt="Flexpoint Logo Icon"
              priority
              loading="eager"
              className="h-auto w-auto"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center space-x-10">
              {navOptions.map((option, index) => (
                <li key={index}>
                  <Link
                    href={option.href}
                    className="text-sm font-medium text-para hover:text-primary"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <MenuButton />
            <Button
              variant="secondary"
              aria-label="Login button"
              className={"max-md:hidden"}
            >
              Login
            </Button>
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
