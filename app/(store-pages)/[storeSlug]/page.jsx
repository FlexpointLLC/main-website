import { redirect } from "next/navigation";
import ProductList from "./_components/product-list";
import ProfileCard from "./_components/profile-card";
import Image from "next/image";
import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";

export async function generateMetadata({ params }) {
  const storeSlug = params.storeSlug;
  const base_url = process.env.NEXT_PUBLIC_API_URL;

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
    title: `${user?.name || "Unknown Store"} | Flexpoint`,
    description:
      store?.description || "Discover amazing products at unbeatable prices.",
    openGraph: {
      title: `${user?.name || "Unknown"}'s Store | Flexpoint`,
      description:
        store?.description || "Explore a variety of high-quality products.",
      images: [
        {
          url: user?.avatar || "/default-og-image.png",
          alt: `${user?.name || "Default User"} Logo`,
        },
      ],
      url: `https://flexpoint.store/${user?.store_name || ""}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${user?.name || "Unknown"}'s Store | Flexpoint`,
      description:
        store?.description || "Explore a variety of high-quality products.",
      image: user?.avatar || "/default-avatar.png",
    },
  };
}

export default async function StorePage({ params }) {
  const storeSlug = params.storeSlug;
  const base_url = process.env.NEXT_PUBLIC_API_URL;

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
    </div>
  );
}
