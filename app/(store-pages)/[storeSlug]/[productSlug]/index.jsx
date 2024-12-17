"use client";

import { Calendar } from "@/components/ui/calendar";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({ product, storeSlug }) {
  console.log(product);

  // Display product price logic
  const acutalPrice = parseFloat(product?.discount_price)
    ? parseFloat(product?.discount_price).toFixed(2)
    : !parseFloat(product?.discount_price) && parseFloat(product?.price)
      ? parseFloat(product?.price).toFixed(2)
      : "Free";

  const hasDiscount = parseFloat(product?.discount_price) ? true : false;

  return (
    <div>
      <div className="relative">
        {product?.get_header_image && (
          <Image
            src={product.get_header_image}
            alt={product?.title || "Product Image"}
            width={375}
            height={250}
            loading="lazy"
            quality={100}
          />
        )}

        <Link
          href={`/${storeSlug}`}
          className="absolute left-2 top-2 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-50"
        >
          <ArrowLeft size={16} className="text-para" />
        </Link>
      </div>

      <div className="pb-4 pt-6">
        <p className="text-xs text-para">Price</p>
        <div className="flex items-center gap-[6px]">
          <h3 className="text-2xl font-semibold text-fl-border">
            {acutalPrice === "Free"
              ? "Free"
              : `${product?.currency} ${acutalPrice}`}
          </h3>
          {hasDiscount && (
            <p className="text-xs text-para line-through">
              {product.currency} {parseFloat(product?.price).toFixed(2)}
            </p>
          )}
        </div>
      </div>

      <hr className="h-[2px] bg-black/5" />

      <div className="py-6">
        <div
          className="prose prose-sm !p-0 text-xs text-para"
          dangerouslySetInnerHTML={{
            __html: product?.description,
          }}
        />
      </div>

      <hr className="h-[2px] bg-black/5" />

      <div className="space-y-4 py-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-fl-border">
            {product?.bottom_title}
          </h3>
          <p className="text-xs text-para">{product?.timezone}</p>
        </div>

        <Calendar mode="single" className="rounded-[16px] border bg-white" />
      </div>
    </div>
  );
}
