import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { twitterUsername, defaultImage } from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateMetadata({
  title,
  keywords,
  description,
  image = defaultImage,
}: {
  title: string;
  keywords?: string[];
  description: string;
  image?: string;
  twitterUsername?: string;
}): Metadata {
  return {
    metadataBase: new URL("http://manual.co"),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [image],
      type: "website",
    },
    ...(twitterUsername && {
      twitter: {
        card: "summary_large_image",
        creator: twitterUsername,
      },
    }),
  };
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};
