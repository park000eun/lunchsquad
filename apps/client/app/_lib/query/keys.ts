/**
 * 쿼리 키 팩토리
 * - 키를 한 곳에서 관리해 invalidation·타입 안정성 유지
 * - 예: queryClient.invalidateQueries({ queryKey: queryKeys.user.all })
 */
export const queryKeys = {
  all: ["lunchsquad"] as const,
  // user: {
  //   all: ["lunchsquad", "user"] as const,
  //   detail: (id: string) => ["lunchsquad", "user", id] as const,
  // },
} as const;
