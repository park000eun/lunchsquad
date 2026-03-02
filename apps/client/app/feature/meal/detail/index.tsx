type MealDetailContentProps = { mealId: string };

export function MealDetailContent({ mealId }: MealDetailContentProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-4xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          식사 메뉴 상세
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          식사 메뉴 ID: {mealId} — 식사 메뉴 상세 페이지입니다.
        </p>
      </main>
    </div>
  );
}
