# Dev B — Components & UI/UX

[← Dev A](./dev-a.md) · [Docs index](./README.md) · [Dev C →](./dev-c.md)

---

## Vai trò

Thiết kế và hoàn thiện các UI component chính, layout split editor/preview.

## Deliverables

| File | Mô tả |
|------|-------|
| `src/components/QuestionCard.tsx` | Edit interactions, keyboard focus states |
| `src/components/PreviewPane.tsx` | Read-only form render (mới) |
| `src/components/TopBar.tsx` | Tabs, undo/redo, menu |
| `src/components/Sidebar.tsx` | Thêm câu hỏi nhanh |
| `src/components/ShareModal.tsx` | Link / Email / Embed |
| `src/__tests__/components/` | Component tests (RTL) |

## Nhiệm vụ

1. Hoàn thiện `QuestionCard` — edit interaction, focus, keyboard navigation.
2. Tạo `PreviewPane.tsx` — render read-only form từ state hiện tại.
3. Implement split layout (editor trái / preview phải), responsive.
4. Đảm bảo preview đồng bộ realtime khi editor thay đổi.
5. Viết component tests với React Testing Library.

## Acceptance Criteria

- [ ] Tất cả components hoạt động bằng bàn phím (Tab, Enter, Arrow keys).
- [ ] Preview cập nhật ngay khi chỉnh sửa, không cần reload.
- [ ] Split layout responsive trên màn hình ≥ 768px.
- [ ] Component tests pass cho `QuestionCard` và `PreviewPane`.

## Ước lượng: 2–3 ngày

## Chức năng chính phát triển

- **QuestionCard** — tạo / sửa tiêu đề, đổi loại câu hỏi, thêm/xóa lựa chọn cho trắc nghiệm
- **PreviewPane** — render read-only form đúng như người trả lời thấy (radio, checkbox, dropdown, date, time)
- **TopBar** — tabs (Điều chỉnh / Câu trả lời / Cài đặt), nút undo/redo, menu gử & xuất
- **Sidebar** — thanh công cụ bên phải: thêm nhanh từng loại câu hỏi
- **ShareModal** — 3 tab: Liên kết (copy + mạng xã hội) / Email / Nhúng (`<iframe>`)
- **Split layout** — editor trái / preview phải, đồng bộ realtime, responsive ≥ 768px

## Ghi chú

- Giữ component nhỏ, props/TypeScript rõ ràng, dễ tái sử dụng.
- Dùng tokens từ `index.css` — không hardcode màu.
