import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import useHash from "@/hooks/useHash";

export default function MobileMenu({ openMenuBar, setOpenMenuBar }) {
  const hash = useHash();

  const mobileNavOptions = [
    {
      name: "Home",
      href: "/#",
    },
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "How it works",
      href: "#how-it-works",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
    {
      name: "Login",
      href: "https://dev-admin.flexpoint.store/lookup",
    },
  ];

  return (
    <>
      <div>
        <Menu
          size="24"
          className="md:hidden"
          aria-label="Open navigation menu"
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenuBar(true);
          }}
        />
      </div>

      <Sheet
        open={openMenuBar}
        onOpenChange={setOpenMenuBar}
        aria-label="Mobile navigation menu"
      >
        <SheetContent
          className="bg-gradient-primary-from-top pt-10"
          role="navigation"
        >
          <ul className="space-y-4">
            {mobileNavOptions.map((option, index) => (
              <li key={index} onClick={() => setOpenMenuBar(false)}>
                <Link
                  href={option.href}
                  className={`text-[40px] font-semibold text-heading ${hash === option.href ? "opacity-30" : "opacity-100"}`}
                  aria-label={`Navigate to ${option.name}`}
                >
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}
