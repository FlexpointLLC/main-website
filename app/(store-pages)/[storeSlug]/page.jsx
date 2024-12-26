import { redirect } from "next/navigation";
import ProductList from "./_components/product-list";
import ProfileCard from "./_components/profile-card";
import Image from "next/image";
import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";

const base_url = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata({ params }) {
  const storeSlug = params.storeSlug;
  const response = await fetch(`${base_url}/${storeSlug}`, {
    cache: "no-store",
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch((err) => {
      console.error("Error fetching store data:", err);
      return null;
    });

  if (!response || response?.message === "Store not found") {
    return redirect("/");
  }

  const store = response?.data || {};
  const user = store?.user || {};

  return {
    title: `${user?.name}'s Store | Flexpoint`,
    description: "The All-in-one Creator Platform.",
    openGraph: {
      title: `${user?.name}'s Store | Flexpoint`,
      description: "The All-in-one Creator Platform.",
      images: [
        {
          url: user?.avatar || "/default-og-image.png",
          alt: `${user?.name} Logo`,
        },
      ],
      url: `https://flexpoint.store/${user?.store_name}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${user?.name}'s Store | Flexpoint`,
      description: "The All-in-one Creator Platform.",
      image: user?.avatar || "/default-avatar.png",
    },
  };
}

export default async function StorePage({ params }) {
  const storeSlug = params.storeSlug;

  const response = await fetch(`${base_url}/${storeSlug}`, {
    cache: "no-store",
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch((err) => {
      console.error("Error fetching store data:", err);
      return null;
    });

  if (!response || response?.message === "Store not found") {
    return redirect("/");
  }

  const store = response?.data;

  return (
    <div className="mx-auto max-w-[375px] px-4 py-12">
      <ProfileCard store={store} />
      <ProductList store={store} />

      <footer className="mt-6 flex items-center justify-center gap-[7px]">
        <p className="pl-4 text-xs font-medium text-para">Powered by</p>
        <Image src={storeFooterLogo} alt="store footer logo" />
      </footer>

      <div className="text-center">
        {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </div>
    </div>
  );
}
