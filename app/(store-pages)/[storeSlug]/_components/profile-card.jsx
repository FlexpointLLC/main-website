import FacebookIcon from "@/public/assets/icon/facebook";
import InstagramIcon from "@/public/assets/icon/instagram";
import TiktokIcon from "@/public/assets/icon/tiktok";
import YoutubeIcon from "@/public/assets/icon/youtube";
import VerifiedBadge from "@/public/assets/icon/varified_badge.svg";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard({ store }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <Image
          src={store?.user?.avatar}
          alt={store?.user?.name}
          width={100}
          height={100}
          className="size-16 rounded-full object-cover shadow-sm"
          loading="lazy"
        />

        <div>
          <h1 className="w-full break-all text-2xl font-medium text-[#111928]">
            <span className="inline">{store?.user?.name}</span>{" "}
            {store?.user?.is_verified ? (
              <Image
                src={VerifiedBadge}
                alt="Verified Badge "
                width={50}
                height={50}
                className="-ml-1 inline size-6"
                loading="lazy"
              />
            ) : null}
          </h1>
          {store?.user?.details?.occupation && (
            <p className="text-sm text-[#6B7280]">
              {store?.user?.details?.occupation}
            </p>
          )}

          {store?.user?.details?.social_links && (
            <div className="mt-1 flex items-center gap-2 leading-none">
              {Object.keys(store?.user?.details?.social_links).length !== 0 &&
                store?.user?.details?.social_links?.tiktok && (
                  <Link
                    aria-label="Visit TikTok"
                    target="_blank"
                    href={store?.user?.details?.social_links?.tiktok}
                  >
                    <TiktokIcon className="size-4 cursor-pointer text-[#525866]" />
                  </Link>
                )}
              {Object.keys(store?.user?.details?.social_links).length !== 0 &&
                store?.user?.details?.social_links?.instagram && (
                  <Link
                    aria-label="Visit Instagram"
                    target="_blank"
                    href={store?.user?.details?.social_links?.instagram}
                  >
                    <InstagramIcon className="size-4 cursor-pointer text-[#525866]" />
                  </Link>
                )}
              {Object.keys(store?.user?.details?.social_links).length !== 0 &&
                store?.user?.details?.social_links?.facebook && (
                  <Link
                    aria-label="Visit Facebook"
                    target="_blank"
                    href={store?.user?.details?.social_links?.facebook}
                  >
                    <FacebookIcon className="size-4 cursor-pointer text-[#525866]" />
                  </Link>
                )}
              {Object.keys(store?.user?.details?.social_links).length !== 0 &&
                store?.user?.details?.social_links?.youtube && (
                  <Link
                    aria-label="Visit YouTube"
                    target="_blank"
                    href={store?.user?.details?.social_links?.youtube}
                  >
                    <YoutubeIcon className="size-4 cursor-pointer text-[#525866]" />
                  </Link>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
