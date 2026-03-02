import { MealCreateContent } from "@/app/feature/meal/create";
import { mealCreateMetadata } from "@/app/feature/meal/create/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = mealCreateMetadata;

export default function MealCreatePage() {
  return <MealCreateContent />;
}
