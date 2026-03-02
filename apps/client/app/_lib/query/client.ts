import { QueryClient } from "@tanstack/react-query";

const defaultOptions = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1분
      gcTime: 5 * 60 * 1000, // 5분 (구 cacheTime)
    },
  },
} as const;

export function makeQueryClient() {
  return new QueryClient(defaultOptions);
}
