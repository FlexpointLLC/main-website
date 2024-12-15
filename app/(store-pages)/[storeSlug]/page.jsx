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
    .then((res) => res.json())
    .catch((err) => console.error(err));

  if (response?.message === "Store not found") {
    return redirect("/");
  }

  const store = response?.data;

  return {
    title: `${store?.user?.name} | Flexpoint`,
    openGraph: {
      title: `${store?.user?.name}'s Store | Flexpoint`,
      images: [
        {
          url: store?.user?.avatar,
          alt: store?.user?.name,
        },
      ],
      url: `https://flexpoint.store/${store?.user?.store_name}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${store?.user?.name}'s Store | Flexpoint`,
      image: store?.user?.avatar,
    },
  };
}

export default async function StorePage({ params }) {
  const storeSlug = params.storeSlug;
  const base_url = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${base_url}/${storeSlug}`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  if (response?.message === "Store not found") {
    return redirect("/");
  }

  const store = response?.data;

  return (
    <div className="mx-auto max-w-[375px] px-4 py-12">
      <ProfileCard store={store} />
      <ProductList store={store} />

      <div className="mt-6 flex items-center justify-center gap-[7px]">
        <p className="pl-4 text-xs font-medium text-para">Powered by</p>
        <Image src={storeFooterLogo} alt="logo" />
      </div>
    </div>
  );
}
