# 📚 Project Docs — GG Form (Custom)

> Tài liệu nội bộ cho team 5 người. Xem [README gốc](../README.md) để biết hướng dẫn cài đặt và sử dụng.

---

## 🗂 Phân công team

| Dev | Vai trò | File |
|-----|---------|------|
| **Dev A** | Frontend Core & State | [dev-a.md](./dev-a.md) |
| **Dev B** | Components & UI/UX | [dev-b.md](./dev-b.md) |
| **Dev C** | AI & Services | [dev-c.md](./dev-c.md) |
| **Dev D** | Styling & Accessibility | [dev-d.md](./dev-d.md) |
| **Dev E** | QA, Testing, CI/CD & Docs | [dev-e.md](./dev-e.md) |

---

## 🏗 Kiến trúc hệ thống

Single-page app — React 19 + TypeScript + Vite, deploy tĩnh (Netlify / Vercel / GitHub Pages).

```
src/
├── App.tsx          # State management & action dispatcher
├── types.ts         # Shared interfaces: Form, Question, FormAction
├── main.tsx
├── index.css        # Tailwind + theme tokens
├── components/      # UI components (TopBar, Sidebar, QuestionCard, ...)
├── services/
│   ├── ai.ts        # Rule-based local AI adapter
│   └── storage.ts   # localStorage persistence
└── utils/cn.ts
```

---

## 📐 Data Contract

```ts
interface Question {
  id: string;
  title: string;
  type: 'short' | 'long' | 'multiple_choice' | 'checkboxes' | 'dropdown' | 'date' | 'time';
  required: boolean;
  options?: string[];
}

interface Form {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  settings: { confirmationMessage: string };
}

interface FormAction {
  type: 'add_question' | 'update_question' | 'delete_question' | 'move_question' | 'set_title';
  payload: unknown;
}
```

---

## 🧪 Chiến lược kiểm thử

| Loại | Tool | Phạm vi |
|------|------|---------|
| Unit | Jest + React Testing Library | Components, services, action reducer |
| E2E | Cypress | Happy path: thêm câu hỏi → xem trước → export |
| Type check | `npx tsc --noEmit` | Toàn bộ `src/` |

---

## 📅 Timeline (Sprint 2 tuần)

**Tuần 1**
- Day 1–2: Core state + storage — Dev A
- Day 2–4: Components + split preview — Dev B
- Day 3–4: Local AI + tests — Dev C
- Day 4–5: Styling + accessibility — Dev D

**Tuần 2**
- Day 6–8: CI + tests + docs — Dev E
- Day 8–10: Polish, bug fixes, merge

---

## 📏 Tiêu chuẩn chung

- **Branching:** `feature/<tên>` → PR → 1 reviewer approve
- **Commits:** Atomic, dùng [Conventional Commits](https://www.conventionalcommits.org/)
- **Type safety:** `npx tsc --noEmit` phải pass trước khi merge
- **Security:** Không commit API keys — dùng biến môi trường
- **Source of truth:** `src/types.ts` cho mọi shared type
