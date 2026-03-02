import { SquadCreateContent } from "@/app/feature/squad/create";
import { squadCreateMetadata } from "@/app/feature/squad/create/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = squadCreateMetadata;

export default function SquadCreatePage() {
  return <SquadCreateContent />;
}
