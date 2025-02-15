import { ReactNode } from "react";
import { siteName } from "@/config";
import { generateMetadata } from "@/src/lib/utils";

export const metadata = generateMetadata({
  title: siteName,
  description: "Manual Website Design (by Jide)",
});

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
