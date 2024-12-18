import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import coachingProduct from "@/public/assets/products/coaching.svg";
import Image from "next/image";

export default function ProductList({ store }) {
  const products =
    store?.products && store?.products.length > 0 ? store?.products : [];

  return (
    <div className="mt-6 space-y-3">
      {products?.length > 0 &&
        products?.map((product, index) => {
          const acutalPrice = parseFloat(product?.discount_price)
            ? parseFloat(product?.discount_price).toFixed(2)
            : !parseFloat(product?.discount_price) && parseFloat(product?.price)
              ? parseFloat(product?.price).toFixed(2)
              : "Free";

          const hasDiscount = parseFloat(product?.discount_price)
            ? true
            : false;

          return (
            // <Link
            //   href={`/${store?.user?.store_name}/${product?.slug}`}
            //   aria-label="View Product"
            //   className="block rounded-[12px] bg-white p-3 shadow-md"
            //   key={product?.product_id}
            // >
            <div
              className="block rounded-[12px] bg-white p-3 shadow-md"
              key={product?.product_id}
            >
              <div className="flex items-center gap-1">
                <Image
                  src={product?.thumbnail || coachingProduct}
                  alt={product?.title}
                  className="size-12 object-cover p-1"
                  height={48}
                  width={48}
                  loading="lazy"
                />

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#0E121B]">
                    {product?.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-sm ${acutalPrice === "Free" ? "font-medium text-[#FF8447]" : "font-semibold text-[#1FC16B]"}`}
                    >
                      {acutalPrice === "Free"
                        ? null
                        : store?.user?.currency_symbol}{" "}
                      {acutalPrice}
                    </p>
                    {hasDiscount && (
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm text-[#99A0AE] line-through">
                          {store?.user?.currency_symbol}{" "}
                          {parseFloat(product?.price).toFixed(2)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <Button
                  variant={index === 0 ? "primaryDefault" : "secondaryDefault"}
                  size={"sm"}
                  className="flex h-7 w-full items-center justify-between"
                >
                  <p className="text-xs">{product?.button_text}</p>
                  <div>
                    <ArrowRight size={16} />
                  </div>
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
