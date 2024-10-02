import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TNC Resida | Land Transfer Calculator",
  description: "Discover your dream home with TNC Homeland Real Estate.",
};
export default function LandTransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>{children}</>
    </>
  );
}
