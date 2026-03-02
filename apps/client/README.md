# LunchSquad Client

사용자용 웹 앱입니다. Next.js(App Router), TanStack Query, React Hook Form, Zustand를 사용합니다.

## 개발 서버

```bash
# 루트에서
pnpm dev:client

# 또는 client 디렉터리에서
pnpm dev
```

[http://localhost:4000](http://localhost:4000) 에서 확인할 수 있습니다.

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `pnpm dev` | 개발 서버 (포트 4000) |
| `pnpm build` | 프로덕션 빌드 |
| `pnpm start` | 빌드 후 서버 실행 (포트 4000) |
| `pnpm lint` | ESLint 실행 |

## 기술 스택

- **Next.js** 16 (App Router)
- **React** 19
- **TanStack Query** v5
- **React Hook Form**
- **Zustand**
- **Tailwind CSS** v4
- **TypeScript**

## 주요 구조

- `app/(routes)/` — 라우팅 전용 페이지 (메인, 회원가입, 스쿼드/식사 메뉴 등)
- `app/feature/` — 페이지별 콘텐츠·메타데이터 (home, signup, squad, meal)
- `app/_components/` — 공통 컴포넌트 (GNB 등)
- `app/_lib/` — 쿼리 클라이언트, 쿼리 키 등
- `app/_providers/` — QueryProvider 등 전역 Provider

## 주요 라우트

| 경로 | 설명 |
|------|------|
| `/` | 메인 |
| `/signup` | 회원가입 |
| `/squad/create` | 파티(스쿼드) 생성 |
| `/meal/create` | 식사 메뉴 생성 |
| `/meal/[id]` | 식사 메뉴 상세 |
