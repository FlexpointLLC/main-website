import ProductDetails from "./_components";
import { redirect } from "next/navigation";

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
      console.error("Error fetching product details:", err);
      return null;
    });

  const fields = response?.data?.productDetails?.fields || [];

  return (
    <div className="mx-auto max-w-[375px] px-4">
      <ProductDetails
        storeSlug={storeSlug}
        productSlug={productSlug}
        fields={fields}
      />
    </div>
  );
}
