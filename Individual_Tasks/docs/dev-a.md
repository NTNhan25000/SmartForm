# Dev A — Lõi Frontend & Quản lý State

[← Mục lục tài liệu](./README.md) · [Dev B →](./dev-b.md)

---

![State Flow](https://placehold.co/860x320/0ea5a4/white?text=State+%26+Action+Dispatcher+Flow)

## Vai trò

Quản lý state toàn cục, action dispatcher, và persistence cho form.

## Sản phẩm bàn giao

| Tệp | Mô tả |
|-----|-------|
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

## Tiêu chí nghiệm thu

- [ ] Mọi action cập nhật UI ngay lập tức và persist vào `localStorage`.
- [ ] Load form phục hồi đầy đủ trạng thái editor và preview.
- [ ] `npx tsc --noEmit` pass không lỗi.
- [ ] Unit tests pass cho `addQuestion`, `deleteQuestion`, `moveQuestion`.

## Ước lượng: 2–3 ngày

## Chức năng chính phát triển

### 🗂 Quản lý state toàn cục
Toàn bộ dữ liệu form (`title`, `description`, `questions[]`, `settings`) được lưu trong một state duy nhất ở `App.tsx` và truyền xuống các component qua props. Không dùng thư viện state management ngoài — chỉ dùng `useState` + `useReducer`.

![Action Flow](https://placehold.co/860x200/0b8f89/white?text=applyAction+%E2%86%92+addQuestion+%7C+updateQuestion+%7C+deleteQuestion+%7C+moveQuestion)

### ⚡ Action dispatcher
Hàm `applyAction(action: FormAction)` là trung tâm xử lý mọi thay đổi của form. Các helper thuần túy:
- `addQuestion(questions, newQ)` — thêm câu hỏi vào cuối danh sách
- `updateQuestion(questions, id, changes)` — cập nhật một trường bất kỳ của câu hỏi
- `deleteQuestion(questions, id)` — xóa câu hỏi theo id
- `moveQuestion(questions, id, direction)` — đổi vị trí câu hỏi lên/xuống

![Undo Redo](https://placehold.co/860x160/f2fbfa/0ea5a4?text=Undo+Stack+%E2%86%90+snapshot+%5B0%5D+...+snapshot+%5B49%5D+%E2%86%92+Redo+Stack)

### ↩️ Undo / Redo
Mỗi khi `applyAction` được gọi, snapshot state hiện tại được đẩy vào stack lịch sử (tối đa 50 bước). `Ctrl+Z` lấy snapshot trước đó, `Ctrl+Shift+Z` lấy snapshot kế tiếp. Hoạt động với mọi loại `FormAction` bao gồm cả thay đổi tiêu đề, theme, và cài đặt.

![LocalStorage](https://placehold.co/860x160/fff7ed/ff6b35?text=saveForm()+%7C+loadForm()+%7C+clearForm()+%E2%80%94+Auto-save+debounce+500ms)

### 💾 Lưu trữ localStorage
`services/storage.ts` cung cấp 3 hàm:
- `saveForm(form)` — serialize form state thành JSON và ghi vào `localStorage`
- `loadForm()` — đọc và parse lại, trả về `Form | null`
- `clearForm()` — xóa dữ liệu đã lưu

Auto-save được kích hoạt mỗi khi state thay đổi (debounce 500ms), hiển thị trạng thái "Đang lưu..." / "✓ Đã lưu" trên TopBar.

### 📤 Export / Import JSON
- **Export**: `JSON.stringify(form, null, 2)` → tạo Blob → trigger download file `.json`
- **Import**: đọc file `.json` từ input, parse, validate schema cơ bản rồi load vào state

### 🤖 Kết nối AI
Khi `AIChatBox` gọi `chatWithAI()` và nhận về `FormAction[]`, mảng action này được đưa thẳng vào `applyAction` theo thứ tự. Đảm bảo mỗi action từ AI cũng được ghi vào lịch sử undo/redo.

## Ghi chú

- Ưu tiên pure functions trong reducer, tránh side-effects không kiểm soát.
- `FormAction` phải idempotent để tương thích với undo/redo.
