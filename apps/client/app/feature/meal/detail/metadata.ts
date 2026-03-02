import type { Metadata } from "next";

const defaultMetadata: Metadata = {
  title: "식사 메뉴 상세",
  description: "LunchSquad 식사 메뉴 상세 페이지입니다.",
};

export function getMealDetailMetadata(title?: string): Metadata {
  return title
    ? { title: `식사 메뉴: ${title}`, description: defaultMetadata.description }
    : defaultMetadata;
}

export const mealDetailMetadata = defaultMetadata;
