import Image from "next/image";
import Link from "next/link";

import FacebookIcon from "@/public/assets/icon/facebook";
import InstagramIcon from "@/public/assets/icon/instagram";
import TiktokIcon from "@/public/assets/icon/tiktok";
import YoutubeIcon from "@/public/assets/icon/youtube";
import VerifiedBadge from "@/public/assets/icon/varified_badge.svg";
import { cn } from "@/lib/utils";
import CustomTooltip from "@/components/ui/custom-tooltip";

export default function ProfileCard({ store }) {
  const hasValidSocialLinks =
    store?.user?.details?.social_links &&
    Object.keys(store?.user?.details?.social_links).length !== 0 &&
    Object.values(store?.user?.details?.social_links).some(
      (link) => link !== null,
    );

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

        <div className="pt-1">
          <h1 className="break-all text-2xl font-medium text-[#111928]">
            <span className="inline">{store?.user?.name}</span>{" "}
            {store?.user?.is_verified ? (
              <CustomTooltip
                content="This account is verified"
                className="max-w-[250px] rounded-[8px] bg-[#494949] p-2 text-white"
              >
                <Image
                  src={VerifiedBadge}
                  alt="Verified Badge "
                  width={50}
                  height={50}
                  className="-ml-1 inline size-7"
                  loading="lazy"
                />
              </CustomTooltip>
            ) : null}
          </h1>
          {store?.user?.details?.occupation && (
            <p className="break-all text-sm text-[#6B7280]">
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
      {store.user.details.bio ? (
        <p className="mt-3 text-sm text-[#0E121B]">{store.user.details.bio}</p>
      ) : null}
    </div>
  );
}
