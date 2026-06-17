# Dev B — Component & Giao diện người dùng

[← Dev A](./dev-a.md) · [Mục lục tài liệu](./README.md) · [Dev C →](./dev-c.md)

---

## Vai trò

Thiết kế và hoàn thiện các UI component chính, layout split editor/preview.

## Sản phẩm bàn giao

| Tệp | Mô tả |
|-----|-------|
| `src/components/QuestionCard.tsx` | Card chỉnh sửa câu hỏi |
| `src/components/PreviewPane.tsx` | Bảng xem trước read-only (mới) |
| `src/components/TopBar.tsx` | Thanh tiêu đề: tabs, undo/redo, menu |
| `src/components/Sidebar.tsx` | Thanh công cụ thêm câu hỏi nhanh |
| `src/components/ShareModal.tsx` | Modal chia sẻ: liên kết / email / nhúng |
| `src/__tests__/components/` | Component tests (React Testing Library) |

## Nhiệm vụ

1. Hoàn thiện `QuestionCard` — edit interaction, focus, keyboard navigation.
2. Tạo `PreviewPane.tsx` — render read-only form từ state hiện tại.
3. Implement split layout (editor trái / preview phải), responsive.
4. Đảm bảo preview đồng bộ realtime khi editor thay đổi.
5. Viết component tests với React Testing Library.

## Tiêu chí nghiệm thu

- [ ] Tất cả components hoạt động bằng bàn phím (Tab, Enter, Arrow keys).
- [ ] Preview cập nhật ngay khi chỉnh sửa, không cần reload.
- [ ] Split layout responsive trên màn hình ≥ 768px.
- [ ] Component tests pass cho `QuestionCard` và `PreviewPane`.

## Ước lượng: 2–3 ngày

## Chức năng chính phát triển

### 🃏 QuestionCard
Mỗi câu hỏi hiển thị trong một card riêng. Người dùng có thể:
- Nhập / sửa tiêu đề câu hỏi trực tiếp (contenteditable hoặc input)
- Chọn loại câu hỏi từ dropdown (8 loại: ngắn, đoạn, trắc nghiệm, checkbox, dropdown, thang, ngày, giờ)
- Thêm / xóa / sửa các lựa chọn cho câu hỏi dạng trắc nghiệm, checkbox, dropdown
- Bật/tắt "Bắt buộc" bằng toggle
- Nhân đôi hoặc xóa câu hỏi qua icon button
- Di chuyển lên/xuống bằng nút mũi tên hoặc phím `Alt + ↑ / ↓`
- Câu hỏi được đánh số thứ tự tự động

### 👁 PreviewPane
Render form ở chế độ read-only, phản ánh đúng state hiện tại của editor:
- Câu hỏi ngắn / đoạn văn: `<input>` / `<textarea>` hoạt động thật
- Trắc nghiệm: `<input type="radio">` nhóm theo câu hỏi
- Checkbox: `<input type="checkbox">`
- Dropdown: `<select>` với các lựa chọn
- Ngày / Giờ: `<input type="date">` / `<input type="time">`
- Hiển thị dấu `*` đỏ cho câu hỏi bắt buộc
- Nút "Gửi" → trang xác nhận với thông báo tùy chỉnh từ settings

### 🔝 TopBar
Thanh tiêu đề cố định ở trên cùng, gồm:
- 3 tab: **Điều chỉnh** / **Câu trả lời** / **Cài đặt**
- Nút Undo (`Ctrl+Z`) và Redo (`Ctrl+Shift+Z`) với icon và trạng thái disabled khi không có lịch sử
- Trạng thái auto-save: "Đang lưu..." / "✓ Đã lưu"
- Menu: nút **Gửi** (mở ShareModal), **Xem trước** (`👁`), **Tùy chỉnh theme** (`🎨`)
- Nút **?** mở bảng phím tắt

### 📌 Sidebar
Thanh công cụ cố định bên phải, cho phép thêm nhanh câu hỏi theo loại:
- 8 nút tương ứng 8 loại câu hỏi, mỗi nút có icon và tooltip
- Nhấn vào bất kỳ nút nào → thêm câu hỏi loại đó vào cuối form và scroll đến câu vừa thêm

### 🔗 ShareModal
Modal chia sẻ với 3 tab:
- **Liên kết**: hiển thị URL, nút sao chép, nút chia sẻ lên Facebook / Twitter / email
- **Email**: nhập danh sách email, nút gửi
- **Nhúng**: hiển thị `<iframe>` embed code, nút sao chép

### 📐 Split layout
- Màn hình chia đôi: editor bên trái, preview bên phải
- Preview đồng bộ realtime — không cần nhấn nút refresh
- Responsive: dưới 768px chỉ hiển thị editor, có nút toggle để xem preview
- (Optional) Thanh kéo giữa để điều chỉnh tỉ lệ, lưu vào `localStorage`

## Ghi chú

- Giữ component nhỏ, props/TypeScript rõ ràng, dễ tái sử dụng.
- Dùng tokens từ `index.css` — không hardcode màu.
