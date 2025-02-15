import { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
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
