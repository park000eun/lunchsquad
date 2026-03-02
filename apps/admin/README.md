# LunchSquad Admin

관리자용 웹 앱입니다. Next.js(App Router), TanStack Query, React Hook Form, Zustand를 사용합니다.

## 개발 서버

```bash
# 루트에서
pnpm dev:admin

# 또는 admin 디렉터리에서
pnpm dev
```

[http://localhost:3001](http://localhost:3001) 에서 확인할 수 있습니다.

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `pnpm dev` | 개발 서버 (포트 3001) |
| `pnpm build` | 프로덕션 빌드 |
| `pnpm start` | 빌드 후 서버 실행 (포트 3001) |
| `pnpm lint` | ESLint 실행 |

## 기술 스택

- **Next.js** 16 (App Router)
- **React** 19
- **TanStack Query** v5
- **React Hook Form**
- **Zustand**
- **Tailwind CSS** v4
- **TypeScript**

## 의존성

- `@lunchsquad/shared` — 공유 UI 컴포넌트 (workspace 패키지)
