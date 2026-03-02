import { HomeContent } from "@/app/feature/home";
import { homeMetadata } from "@/app/feature/home/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return <HomeContent />;
}
