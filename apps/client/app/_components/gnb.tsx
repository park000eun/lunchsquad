"use client";

import Link from "next/link";

export function Gnb() {
  const navItems = [
    {
      label: "메인",
      href: "/",
    },
    {
      label: "회원가입",
      href: "/signup",
    },
    {
      label: "파티 생성",
      href: "/squad/create",
    },
    {
      label: "식사 메뉴 생성",
      href: "/meal/create",
    },
    {
      label: "식사 메뉴 상세",
      href: "/meal/1",
    },
  ];

  return (
    <nav
      className="flex h-12 shrink-0 items-center gap-6 border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-950"
      aria-label="메인 네비게이션"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
