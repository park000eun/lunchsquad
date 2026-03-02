# LunchSquad

LunchSquad 모노레포입니다. pnpm workspace로 앱과 공유 패키지를 관리합니다.

## 구조

```
lunchsquad/
├── apps/
│   ├── client/   # 사용자용 웹 앱 (Next.js)
│   └── admin/    # 관리자용 웹 앱 (Next.js)
├── packages/
│   └── components/   # @lunchsquad/shared — 공유 UI 컴포넌트
├── package.json
└── pnpm-workspace.yaml
```

## 요구 사항

- [Node.js](https://nodejs.org/) (권장: LTS)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

## 설치

```bash
pnpm install
```

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `pnpm dev` | client, admin 동시 개발 서버 실행 |
| `pnpm dev:client` | client만 개발 서버 (포트 4000) |
| `pnpm dev:admin` | admin만 개발 서버 (포트 3001) |
| `pnpm build` | 모든 앱 빌드 |
| `pnpm build:client` | client만 빌드 |
| `pnpm build:admin` | admin만 빌드 |
| `pnpm lint` | 모든 패키지 린트 실행 |

## 앱별 상세

- **[apps/client](./apps/client/README.md)** — 사용자 클라이언트 (메인 서비스)
- **[apps/admin](./apps/admin/README.md)** — 관리자 대시보드

## 라이선스

Private
