import { redirect } from "next/navigation";
import Image from "next/image";
import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";
import ProductDetails from ".";

const base_url = process.env.NEXT_PUBLIC_API_URL;

export default async function ProductPage({ params }) {
  const storeSlug = params.storeSlug;
  const productSlug = params.productSlug;

  const response = await fetch(
    `${base_url}/${storeSlug}/product/${productSlug}`,
    {
      cache: "no-store",
    },
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch((err) => {
      console.error("Error fetching product data:", err);
      return null;
    });

  if (!response || response?.message === "Product not found") {
    return redirect("/");
  }

  const product = response?.data || {};

  return (
    <div className="mx-auto max-w-[375px] px-4">
      <ProductDetails product={product} storeSlug={storeSlug} />
      <footer className="mt-6 flex items-center justify-center gap-[7px]">
        <p className="pl-4 text-xs font-medium text-para">Powered by</p>
        <Image src={storeFooterLogo} alt="store footer logo" />
      </footer>
    </div>
  );
}
