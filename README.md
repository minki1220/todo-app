# 📝 Todo List

> 내가 쓰고 싶어서 만든 할 일 관리 애플리케이션

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

</div>

## ✨ 주요 기능

### 📋 할 일 관리

- ✅ **추가/수정/삭제** - 완벽한 CRUD 기능
- ✅ **체크박스** - 완료 상태 토글
- ✅ **인라인 편집** - 클릭 한 번으로 바로 수정
- ✅ **로컬스토리지** - 새로고침해도 데이터 유지

### 📅 날짜별 히스토리

- 오늘, 어제, 그 이전 날짜로 자동 분류
- 작성 시간 기록
- 완료 상태도 히스토리에 반영

### ⏰ 실시간 시계

- 매초 업데이트되는 시간
- 년/월/일/요일 표시
- 깔끔한 디지털 시계 디자인

### 🚀 빠른 링크

자주 가는 사이트로 원클릭 이동:

- 🔍 Google
- **N** Naver
- ▶ YouTube
- 🐙 GitHub
- 🤖 ChatGPT
- 🎓 노마드코더
- 🎬 Netflix

## 🎨 스크린샷

```
┌────────────────────────────────────────────┐
│  ⏰ 오후 02:30:45                          │
│     2024년 10월 17일 금요일                │
├────────────────────────────────────────────┤
│  🚀 빠른 링크                              │
│  [🔍] [N] [▶] [🐙] [🤖] [🎓] [🎬]        │
├────────────────────────────────────────────┤
│         📝 To-Do List                      │
├──────────────────────┬─────────────────────┤
│ Todo 목록 (2/3)      │  📅 기록 (1/3)     │
│ ┌──────────────────┐ │  ▸ 오늘            │
│ │ 새 할 일 추가... │ │    ☑ Todo 1       │
│ └──────────────────┘ │    ☐ Todo 2       │
│                      │  ▸ 어제            │
│ ☑ 운동하기           │    ☑ Todo 3       │
│ ☐ 공부하기           │                    │
│                      │                    │
│ 전체: 2개 완료: 1개  │                    │
└──────────────────────┴─────────────────────┘
```

## 🛠️ 기술 스택

- **Frontend**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Architecture**: Server/Client Component 분리
- **Storage**: LocalStorage API

## 📂 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx           # 서버 컴포넌트 (메인)
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 전역 스타일
├── components/
│   ├── TodoList.tsx       # 할 일 관리 (클라이언트)
│   ├── TodoItem.tsx       # 개별 할 일 (클라이언트)
│   ├── AddTodoForm.tsx    # 추가 폼 (클라이언트)
│   ├── TodoHistory.tsx    # 히스토리 (클라이언트)
│   ├── Clock.tsx          # 실시간 시계 (클라이언트)
│   └── QuickLinks.tsx     # 빠른 링크 (클라이언트)
└── types/
    └── todo.ts            # TypeScript 타입 정의
```

## 🚀 시작하기

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd todo-app

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 빌드

```bash
npm run build
npm start
```

## 💡 주요 설계

### SSR 아키텍처

- `page.tsx`: 서버 컴포넌트로 SEO 최적화
- 클라이언트 컴포넌트: 인터랙션이 필요한 부분만 분리
- Hydration 에러 방지를 위한 마운트 체크

### 데이터 관리

- LocalStorage를 활용한 영구 저장
- 날짜별 히스토리 자동 분류
- 삭제/수정 시 히스토리 동기화

### UI/UX

- 반응형 디자인 (모바일/데스크톱)
- 호버 효과와 부드러운 트랜지션
- 직관적인 인라인 편집 (Enter 저장, Esc 취소)

## 🎯 왜 만들었나요?

> **"내가 쓰고 싶어서"**

기존 할 일 앱들은 너무 복잡하거나 내가 원하는 기능이 없었습니다.
그래서 내가 정말 쓰고 싶은 기능들만 모아서 직접 만들었습니다:

- ⏰ 시간 확인하면서 할 일 체크
- 🚀 자주 가는 사이트로 빠른 이동
- 📅 내가 언제 무엇을 했는지 기록
- 💾 새로고침해도 사라지지 않는 데이터

## 📝 라이센스

이 프로젝트는 개인 사용 목적으로 제작되었습니다.

## 🤝 기여

개선 아이디어나 버그 리포트는 언제나 환영합니다!

---

<div align="center">

**만든 사람이 가장 잘 쓰는 Todo App** ✨

Made with ❤️ and ☕

</div>
