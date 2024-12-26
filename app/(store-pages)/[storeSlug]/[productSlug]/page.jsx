import { redirect } from "next/navigation";
import Image from "next/image";
import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";
import ProductDetails from "./_components";

const base_url = process.env.NEXT_PUBLIC_API_URL;

export default async function ProductPage({ params }) {
  const storeSlug = params.storeSlug;
  const productSlug = params.productSlug;

  let product = {};
  let visitor_timezone = "";
  let calendarData = [];

  try {
    const [productRes, calendarRes] = await Promise.all([
      fetch(`${base_url}/${storeSlug}/product/${productSlug}`, {
        cache: "no-store",
      }),
      fetch(`${base_url}/get-calendar/${productSlug}`, { cache: "no-store" }),
    ]);

    if (!productRes.ok) {
      throw new Error(`Error fetching product: ${productRes.statusText}`);
    }
    const productResponse = await productRes.json();
    if (productResponse?.message === "Product not found") {
      return redirect("/");
    }

    product = productResponse?.data?.productDetails || {};
    visitor_timezone = productResponse?.data?.visitor_timezone || "";

    if (!calendarRes.ok) {
      throw new Error(`Error fetching calendar: ${calendarRes.statusText}`);
    }
    const calendarResponse = await calendarRes.json();
    calendarData = calendarResponse?.data?.calendar || [];
  } catch (err) {
    console.error("Error fetching data:", err.message);
    return redirect("/");
  }

  return (
    <div className="mx-auto max-w-[375px] px-4">
      <ProductDetails
        product={product}
        visitor_timezone={visitor_timezone}
        storeSlug={storeSlug}
        calendarData={calendarData}
      />
      <footer className="my-6 flex items-center justify-center gap-[7px]">
        <p className="pl-4 text-xs font-medium text-para">Powered by</p>
        <Image src={storeFooterLogo} alt="store footer logo" />
      </footer>
    </div>
  );
}
