import { Button } from "@/components/ui/button";
import moment from "moment";
import Image from "next/image";
import TiktokIcon from "./tiktok";
import InstagramIcon from "./instagram";
import FacebookIcon from "./facebook";
import YoutubeIcon from "./youtube";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import DocIcon from "./doc";
import VideoIcon from "./video";
import AudioIcon from "./audio";

export default function Content({ appointment, storeSlug }) {
  const searchParams = useSearchParams();

  const router = useRouter();

  const productType = searchParams.get("type");

  const date = new Date(appointment?.date);

  const user = appointment?.userDetails || {};

  switch (productType) {
    case "coaching": {
      return (
        <>
          <div className="mx-4 my-6 space-y-1 rounded-[8px] bg-[#F5F7FA] px-4 py-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-[#0E121B]">
                {appointment?.title}
              </h2>
              <h2 className="text-sm font-medium text-[#0E121B]">
                {moment(date).format("MMM DD, YYYY")}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#525866]">Purchased</p>
              <p className="text-xs text-[#525866]">{appointment?.time}</p>
            </div>
          </div>
          <hr />
          <div className="px-5 py-4">
            <Button
              onClick={() => router.push(`/${storeSlug}`)}
              className="w-full"
              variant={"outline"}
            >
              Return to home
            </Button>
          </div>
        </>
      );
    }

    case "group-call": {
      return (
        <>
          <div className="mx-4 my-6 space-y-1 rounded-[8px] bg-[#F5F7FA] px-4 py-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-[#0E121B]">
                {appointment?.title}
              </h2>
              <h2 className="text-sm font-medium text-[#0E121B]">
                {moment(date).format("MMM DD, YYYY")}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#525866]">Purchased</p>
              <p className="text-xs text-[#525866]">{appointment?.time}</p>
            </div>
          </div>
          <hr />
          <div className="px-5 py-4">
            <Button
              onClick={() => router.push(`/${storeSlug}`)}
              className="w-full"
              variant={"outline"}
            >
              Return to home
            </Button>
          </div>
        </>
      );
    }

    case "community": {
      return (
        <>
          <div className="mx-4 my-6 space-y-2 rounded-[8px]">
            <div className="rounded-lg text-xs font-medium text-black/40">
              Community Details
            </div>

            <div className="flex items-center gap-2 self-stretch">
              <div className="flex h-16 w-16 items-center justify-center">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-end rounded-full bg-white">
                  <Image
                    src={"/assets/success/community.png"}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="size-16 rounded-full object-cover shadow-sm"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="self-stretch text-lg font-medium leading-6 text-[#111928]">
                  {appointment?.community_name}
                </div>
                <div className="flex flex-col items-start self-stretch overflow-hidden text-sm leading-5 text-gray-500">
                  {appointment?.community_members}
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-between self-stretch rounded-lg border border-[#f2f5f8]"
              style={{ padding: "8px" }}
            >
              <div className="flex flex-wrap content-center items-center gap-2 rounded-lg">
                <div className="flex items-center justify-center rounded-lg">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7449 14.5593C10.862 14.6765 10.9278 14.8354 10.9278 15.0011C10.9278 15.1668 10.862 15.3257 10.7449 15.4429L9.96833 16.2241C9.1471 17.0449 8.03346 17.5057 6.87242 17.5054C5.71138 17.505 4.59804 17.0434 3.77732 16.2222C2.9566 15.401 2.49573 14.2873 2.49609 13.1263C2.49646 11.9652 2.95803 10.8519 3.77927 10.0312L5.66365 8.1468C6.45247 7.35735 7.51315 6.8992 8.62866 6.86609C9.74418 6.83297 10.8302 7.22741 11.6644 7.96868C11.726 8.02326 11.7762 8.08943 11.8122 8.16341C11.8482 8.23739 11.8692 8.31774 11.8742 8.39986C11.8791 8.48198 11.8678 8.56427 11.8409 8.64203C11.8141 8.71979 11.7721 8.7915 11.7176 8.85305C11.663 8.91461 11.5968 8.96481 11.5228 9.0008C11.4488 9.03678 11.3685 9.05784 11.2864 9.06278C11.2042 9.06771 11.122 9.05642 11.0442 9.02955C10.9664 9.00268 10.8947 8.96076 10.8332 8.90618C10.2373 8.37704 9.46185 8.09552 8.66532 8.11919C7.86879 8.14286 7.1114 8.46994 6.54802 9.03352L4.66365 10.9156C4.07748 11.5017 3.74817 12.2967 3.74817 13.1257C3.74817 13.9547 4.07748 14.7497 4.66365 15.3359C5.24982 15.922 6.04483 16.2513 6.8738 16.2513C7.70277 16.2513 8.49779 15.922 9.08396 15.3359L9.86052 14.5593C9.91857 14.5012 9.9875 14.4551 10.0634 14.4236C10.1392 14.3922 10.2206 14.376 10.3027 14.376C10.3848 14.376 10.4662 14.3922 10.542 14.4236C10.6179 14.4551 10.6869 14.5012 10.7449 14.5593ZM16.2199 3.77805C15.3985 2.95854 14.2856 2.49829 13.1254 2.49829C11.9651 2.49829 10.8522 2.95854 10.0308 3.77805L9.25427 4.5554C9.1371 4.67267 9.07131 4.83169 9.07139 4.99747C9.07146 5.16325 9.13739 5.32221 9.25466 5.43938C9.37194 5.55655 9.53096 5.62234 9.69674 5.62226C9.86251 5.62219 10.0215 5.55627 10.1386 5.43899L10.9152 4.66243C11.5014 4.07626 12.2964 3.74695 13.1254 3.74695C13.9543 3.74695 14.7494 4.07626 15.3355 4.66243C15.9217 5.2486 16.251 6.04362 16.251 6.87258C16.251 7.70155 15.9217 8.49657 15.3355 9.08274L13.4511 10.9687C12.8875 11.5319 12.1299 11.8586 11.3334 11.8818C10.5369 11.9051 9.76154 11.6231 9.16599 11.0937C9.10443 11.0391 9.03273 10.9972 8.95497 10.9703C8.87721 10.9434 8.79492 10.9321 8.7128 10.9371C8.54695 10.947 8.39185 11.0225 8.28162 11.1468C8.22704 11.2084 8.18511 11.2801 8.15824 11.3578C8.13138 11.4356 8.12009 11.5179 8.12502 11.6C8.13498 11.7658 8.21042 11.9209 8.33474 12.0312C9.1688 12.7727 10.2547 13.1674 11.3702 13.1345C12.4857 13.1017 13.5465 12.6438 14.3355 11.8546L16.2199 9.97024C17.0399 9.14882 17.5004 8.03559 17.5004 6.87493C17.5004 5.71427 17.0399 4.60104 16.2199 3.77962V3.77805Z"
                      fill="#525866"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start justify-center self-stretch rounded-lg text-sm leading-5 text-[#0e121b]">
                  {appointment?.community_url}
                </div>
              </div>
              <Link
                href={appointment?.community_url}
                target="_blank"
                className="!cursor-pointer"
              >
                <Button
                  variant={"outline"}
                  size="sm"
                  className={"h-8 px-4 py-2 text-xs"}
                >
                  Join
                </Button>
              </Link>
            </div>
          </div>
        </>
      );
    }

    case "service": {
      return (
        <>
          <div className="mx-4 my-6 space-y-2 rounded-[8px]">
            <div className="rounded-lg text-xs font-medium text-black/40">
              Contact Details
            </div>

            <div className="flex items-center gap-2 self-stretch">
              <div className="flex h-16 w-16 items-center justify-center">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-end rounded-full bg-white">
                  <Image
                    src={user?.avatar || "/assets/success/avater.png"}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="size-16 rounded-full object-cover shadow-sm"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="self-stretch text-lg font-medium leading-6 text-[#111928]">
                  {user?.name}
                </div>
                <div className="flex flex-col items-start self-stretch overflow-hidden text-sm leading-5 text-gray-500">
                  {user?.occupation || "Occupation not provided"}
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-between self-stretch rounded-lg border border-[#f2f5f8]"
              style={{ padding: "8px" }}
            >
              <div className="flex flex-wrap content-center items-center gap-2 rounded-lg">
                <div className="flex items-center justify-center rounded-lg">
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 4.02271H2.5C2.33424 4.02271 2.17527 4.08855 2.05806 4.20576C1.94085 4.32297 1.875 4.48194 1.875 4.64771V15.2727C1.875 15.6042 2.0067 15.9222 2.24112 16.1566C2.47554 16.391 2.79348 16.5227 3.125 16.5227H16.875C17.2065 16.5227 17.5245 16.391 17.7589 16.1566C17.9933 15.9222 18.125 15.6042 18.125 15.2727V4.64771C18.125 4.48194 18.0592 4.32297 17.9419 4.20576C17.8247 4.08855 17.6658 4.02271 17.5 4.02271ZM15.893 5.27271L10 10.675L4.10703 5.27271H15.893ZM16.875 15.2727H3.125V6.0688L9.57734 11.9836C9.69265 12.0895 9.84348 12.1482 10 12.1482C10.1565 12.1482 10.3074 12.0895 10.4227 11.9836L16.875 6.0688V15.2727Z"
                      fill="#525866"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start justify-center self-stretch rounded-lg text-sm leading-5 text-[#0e121b]">
                  {user?.email}
                </div>
              </div>
              <Button
                variant={"outline"}
                size="sm"
                className={"h-8 px-4 py-2 text-xs"}
                onClick={() => {
                  navigator.clipboard.writeText(user?.email);
                  toast.success("Copied to clipboard");
                }}
              >
                Copy
              </Button>
            </div>

            {user?.phone && (
              <div
                className="flex items-center justify-between gap-2 self-stretch rounded-lg border border-[#f2f5f8]"
                style={{ padding: "8px" }}
              >
                <div className="flex flex-wrap content-center items-center gap-2 rounded-lg">
                  <div className="flex items-center justify-center rounded-lg">
                    <svg
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6565 11.5883L12.1565 10.3383C12.0581 10.2893 11.9485 10.2671 11.8387 10.2739C11.729 10.2808 11.623 10.3165 11.5315 10.3774L10.3838 11.143C9.85697 10.8534 9.42342 10.4199 9.13381 9.89302L9.89943 8.74536C9.96034 8.65383 9.99603 8.54784 10.0029 8.43811C10.0097 8.32837 9.98753 8.21877 9.93849 8.12036L8.68849 5.62036C8.63668 5.51573 8.5566 5.4277 8.45732 5.36626C8.35804 5.30481 8.24353 5.2724 8.12677 5.27271C7.29797 5.27271 6.50312 5.60195 5.91707 6.188C5.33101 6.77405 5.00177 7.5689 5.00177 8.39771C5.00384 10.2204 5.72883 11.9679 7.0177 13.2568C8.30656 14.5456 10.054 15.2706 11.8768 15.2727C12.2872 15.2727 12.6935 15.1919 13.0727 15.0348C13.4518 14.8778 13.7963 14.6476 14.0865 14.3574C14.3767 14.0672 14.6069 13.7227 14.7639 13.3436C14.9209 12.9644 15.0018 12.5581 15.0018 12.1477C15.0019 12.0316 14.9696 11.9178 14.9086 11.819C14.8476 11.7201 14.7603 11.6403 14.6565 11.5883ZM11.8768 14.0227C10.3854 14.0211 8.95566 13.4279 7.90113 12.3734C6.84659 11.3188 6.25343 9.88904 6.25177 8.39771C6.25165 7.9642 6.40175 7.54405 6.67651 7.20875C6.95127 6.87345 7.33373 6.64372 7.75881 6.55864L8.65568 8.35552L7.8924 9.49146C7.83536 9.57701 7.80032 9.67532 7.79037 9.77767C7.78042 9.88001 7.79588 9.98323 7.83537 10.0782C8.28254 11.141 9.12804 11.9865 10.1908 12.4336C10.2861 12.4749 10.3901 12.4918 10.4935 12.4828C10.5968 12.4738 10.6964 12.4392 10.783 12.3821L11.9244 11.6211L13.7213 12.518C13.6356 12.9436 13.4048 13.3262 13.0684 13.6006C12.7321 13.875 12.3109 14.0242 11.8768 14.0227ZM10.0018 2.14771C8.59901 2.1474 7.22007 2.51027 5.99916 3.20101C4.77825 3.89174 3.75697 4.88681 3.03472 6.08935C2.31247 7.29188 1.91387 8.66093 1.8777 10.0632C1.84153 11.4655 2.16904 12.8533 2.82834 14.0915L1.94162 16.7516C1.86817 16.9719 1.85751 17.2082 1.91083 17.4342C1.96416 17.6601 2.07936 17.8668 2.24353 18.0309C2.4077 18.1951 2.61435 18.3103 2.84031 18.3636C3.06627 18.417 3.30262 18.4063 3.52287 18.3329L6.18302 17.4461C7.27269 18.0257 8.48007 18.3494 9.71351 18.3927C10.947 18.436 12.1741 18.1977 13.3017 17.6959C14.4293 17.1942 15.4278 16.4421 16.2213 15.4968C17.0149 14.5516 17.5827 13.4379 17.8816 12.2405C18.1805 11.043 18.2026 9.79317 17.9464 8.58586C17.6902 7.37854 17.1623 6.24547 16.4027 5.27264C15.6432 4.29981 14.672 3.5128 13.563 2.97134C12.4539 2.42988 11.236 2.14821 10.0018 2.14771ZM10.0018 17.1477C8.79316 17.1485 7.60576 16.8303 6.55959 16.225C6.48299 16.1806 6.39783 16.153 6.30974 16.144C6.22166 16.1349 6.13266 16.1447 6.04865 16.1727L3.12677 17.1477L4.10099 14.2258C4.12908 14.1419 4.139 14.0529 4.13011 13.9648C4.12122 13.8767 4.09372 13.7915 4.04943 13.7149C3.29159 12.4047 2.98733 10.881 3.18383 9.38017C3.38033 7.87938 4.06661 6.48537 5.13622 5.41442C6.20582 4.34346 7.59896 3.65542 9.0995 3.45702C10.6001 3.25862 12.1241 3.56097 13.4353 4.31715C14.7465 5.07333 15.7715 6.24107 16.3513 7.63923C16.9311 9.03739 17.0332 10.5878 16.642 12.05C16.2507 13.5121 15.3878 14.8043 14.1872 15.726C12.9866 16.6477 11.5154 17.1475 10.0018 17.1477Z"
                        fill="#525866"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center self-stretch rounded-lg text-sm leading-5 text-[#0e121b]">
                    {user?.phone}
                  </div>
                </div>
                <Button
                  variant={"outline"}
                  size="sm"
                  className={"h-8 px-4 py-2 text-xs"}
                  onClick={() => {
                    navigator.clipboard.writeText(user?.phone);
                    toast.success("Copied to clipboard");
                  }}
                >
                  Copy
                </Button>
              </div>
            )}

            {user?.social_links && (
              <div className="flex items-center justify-center gap-2 p-0">
                {user?.social_links?.tiktok && (
                  <Link
                    href={user?.social_links?.tiktok}
                    target="_blank"
                    className="flex cursor-pointer items-center justify-center rounded-[0.625rem]"
                  >
                    <TiktokIcon />
                  </Link>
                )}

                {user?.social_links?.instagram && (
                  <Link
                    href={user?.social_links?.instagram}
                    target="_blank"
                    className="flex cursor-pointer items-center justify-center rounded-[0.625rem]"
                  >
                    <InstagramIcon />
                  </Link>
                )}

                {user?.social_links?.facebook && (
                  <Link
                    href={user?.social_links?.facebook}
                    target="_blank"
                    className="flex cursor-pointer items-center justify-center rounded-[0.625rem]"
                  >
                    <FacebookIcon />
                  </Link>
                )}

                {user?.social_links?.youtube && (
                  <Link
                    href={user?.social_links?.youtube}
                    target="_blank"
                    className="flex cursor-pointer items-center justify-center rounded-[0.625rem]"
                  >
                    <YoutubeIcon />
                  </Link>
                )}
              </div>
            )}
          </div>
        </>
      );
    }

    case "digital": {
      return (
        <>
          <div className="mx-4 my-6 space-y-1 rounded-[8px] bg-[#F5F7FA] px-4 py-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm font-medium text-[#0e121b]">
                My premium course for beginners - Week 1
              </div>
              <div className="text-1 flex items-center justify-between text-xs text-[#525866]">
                Purchased
              </div>
            </div>
          </div>
          <hr />
          <div className="space-y-2 px-5 py-4">
            <div className="text-xs font-medium text-[#1c1c1c]/[.40]">
              4 assets
            </div>

            <div
              className="flex items-center justify-between self-stretch rounded-lg border border-[#f2f5f8]"
              style={{ padding: "8px" }}
            >
              <div className="flex flex-wrap content-center items-center gap-2 rounded-lg">
                <div className="flex items-center justify-center rounded-lg">
                  <DocIcon />
                </div>
                <div className="flex flex-col items-start justify-center self-stretch rounded-lg text-sm leading-5 text-[#0e121b]">
                  Differentiation and Integration...isn.pdf
                </div>
              </div>
              <Button
                variant={"outline"}
                size="sm"
                className={"h-8 px-4 py-2 text-xs"}
              >
                Download
              </Button>
            </div>

            <div
              className="flex items-center justify-between self-stretch rounded-lg border border-[#f2f5f8]"
              style={{ padding: "8px" }}
            >
              <div className="flex flex-wrap content-center items-center gap-2 rounded-lg">
                <div className="flex items-center justify-center rounded-lg">
                  <VideoIcon />
                </div>
                <div className="flex flex-col items-start justify-center self-stretch rounded-lg text-sm leading-5 text-[#0e121b]">
                  Tutorial.mp4
                </div>
              </div>
              <Button
                variant={"outline"}
                size="sm"
                className={"h-8 px-4 py-2 text-xs"}
              >
                Download
              </Button>
            </div>

            <div
              className="flex items-center justify-between self-stretch rounded-lg border border-[#f2f5f8]"
              style={{ padding: "8px" }}
            >
              <div className="flex flex-wrap content-center items-center gap-2 rounded-lg">
                <div className="flex items-center justify-center rounded-lg">
                  <DocIcon />
                </div>
                <div className="flex flex-col items-start justify-center self-stretch rounded-lg text-sm leading-5 text-[#0e121b]">
                  Differentiation and Integration...isn.pdf
                </div>
              </div>
              <Button
                variant={"outline"}
                size="sm"
                className={"h-8 px-4 py-2 text-xs"}
              >
                Download
              </Button>
            </div>

            <div
              className="flex items-center justify-between self-stretch rounded-lg border border-[#f2f5f8]"
              style={{ padding: "8px" }}
            >
              <div className="flex flex-wrap content-center items-center gap-2 rounded-lg">
                <div className="flex items-center justify-center rounded-lg">
                  <AudioIcon />
                </div>
                <div className="flex flex-col items-start justify-center self-stretch rounded-lg text-sm leading-5 text-[#0e121b]">
                  Welcome Voice.mp3
                </div>
              </div>
              <Button
                variant={"outline"}
                size="sm"
                className={"h-8 px-4 py-2 text-xs"}
              >
                Download
              </Button>
            </div>
          </div>
        </>
      );
    }

    default:
      break;
  }
}
