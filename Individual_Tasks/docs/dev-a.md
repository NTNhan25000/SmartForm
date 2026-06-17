# Dev A — Frontend Core & State

[← Docs index](./README.md) · [Dev B →](./dev-b.md)

---

## Vai trò

Quản lý state toàn cục, action dispatcher, và persistence cho form.

## Deliverables

| File | Mô tả |
|------|-------|
| `src/App.tsx` | State + action dispatcher hoàn chỉnh |
| `src/types.ts` | Interfaces: `Form`, `Question`, `FormAction` |
| `src/services/storage.ts` | `saveForm()`, `loadForm()`, `clearForm()` |
| `src/__tests__/actions.test.ts` | Unit tests cho ≥ 3 action chính |

## Nhiệm vụ

1. Định nghĩa types trong `src/types.ts`.
2. Implement `applyAction(action: FormAction)` và các helper thuần túy: `addQuestion`, `updateQuestion`, `moveQuestion`, `deleteQuestion`.
3. Implement `services/storage.ts` — lưu/khôi phục từ `localStorage`.
4. Kết nối AI action executor với dispatcher.
5. Viết unit tests (happy path + edge cases).

## Acceptance Criteria

- [ ] Mọi action cập nhật UI ngay lập tức và persist vào `localStorage`.
- [ ] Load form phục hồi đầy đủ trạng thái editor và preview.
- [ ] `npx tsc --noEmit` pass không lỗi.
- [ ] Unit tests pass cho `addQuestion`, `deleteQuestion`, `moveQuestion`.

## Ước lượng: 2–3 ngày

## Chức năng chính phát triển

- **State toàn cục** — quản lý `form.title`, `form.description`, `form.questions[]`, `form.settings` trong `App.tsx`
- **Action dispatcher** — `applyAction(action: FormAction)` xử lý add / update / delete / move question
- **Undo / Redo** — lưu lịch sử 50 bước, hoạt động với mọi `FormAction`
- **localStorage persistence** — `saveForm()` / `loadForm()` / `clearForm()` trong `services/storage.ts`
- **Export / Import JSON** — serialize form state ra file `.json` và parse ngược lại
- **Kết nối AI** — nhận `FormAction[]` từ AI service và đưa vào dispatcher

## Ghi chú

- Ưu tiên pure functions trong reducer, tránh side-effects không kiểm soát.
- `FormAction` phải idempotent để tương thích với undo/redo.
