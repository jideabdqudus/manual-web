import { ReactNode } from "react";
import { generateMetadata } from "@/src/lib/utils";
import { siteName, siteDescription } from "@/config";
import { QuizContextProvider } from "@/src/common/context/QuizContext";

export const metadata = generateMetadata({
  title: siteName,
  description: siteDescription,
});

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <QuizContextProvider>
      <div>{children}</div>
    </QuizContextProvider>
  );
}
