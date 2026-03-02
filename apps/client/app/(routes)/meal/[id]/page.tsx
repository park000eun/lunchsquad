import { MealDetailContent } from "@/app/feature/meal/detail";
import { mealDetailMetadata } from "@/app/feature/meal/detail/metadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export const metadata: Metadata = mealDetailMetadata;

export default async function MealDetailPage({ params }: Props) {
  const { id } = await params;
  return <MealDetailContent mealId={id} />;
}
