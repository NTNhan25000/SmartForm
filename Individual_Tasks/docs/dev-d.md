# Dev D — Giao diện & Khả năng tiếp cận

[← Dev C](./dev-c.md) · [Mục lục tài liệu](./README.md) · [Dev E →](./dev-e.md)

---

## Vai trò

Hoàn thiện hệ thống theme, đảm bảo khả năng tiếp cận (accessibility), và kiểm tra chất lượng giao diện.

## Sản phẩm bàn giao

| Tệp | Mô tả |
|-----|-------|
| `src/index.css` | Theme tokens, utility classes hoàn chỉnh |
| `src/components/ThemePicker.tsx` | Bảng chọn màu chủ đề |
| `docs/a11y-report.md` | Kết quả Lighthouse + danh sách issues đã fix |

## Nhiệm vụ

1. Hoàn thiện CSS variables: palette, spacing, card styles, focus rings trong `index.css`.
2. Xây dựng component `ThemePicker` với preview realtime.
3. Thêm ARIA labels cho: question controls, AI toggle button, modal dialogs.
4. Kiểm tra color contrast — sửa nếu không đạt WCAG AA (ratio ≥ 4.5:1).
5. Chạy Lighthouse accessibility audit và tạo báo cáo.
6. Fix các keyboard navigation issues quan trọng.

## Tiêu chí nghiệm thu

- [ ] Mọi interactive element có focus ring rõ ràng và reachable bằng Tab.
- [ ] Lighthouse accessibility score ≥ 90 (hoặc document các vấn đề còn lại).
- [ ] Không có màu sắc nào vi phạm WCAG AA contrast ratio.
- [ ] Modal và dropdown đóng được bằng `Escape`.

## Ước lượng: 2 ngày

## Chức năng chính phát triển

### 🎨 Hệ thống Theme Tokens
Toàn bộ màu sắc và khoảng cách được định nghĩa bằng CSS custom properties trong `index.css`, các component chỉ dùng biến — không hardcode giá trị:
```css
/* Ví dụ biến theme */
--color-primary: #6c63ff;
--color-header-bg: var(--color-primary);
--card-border-radius: 8px;
--card-shadow: 0 1px 3px rgba(0,0,0,0.12);
```
Hỗ trợ **18 preset**: 12 màu đơn (Tím, Xanh dương, Xanh lá, Đỏ, Cam, Vàng...) + 6 gradient (Xanh-Tím, Hồng-Đỏ, Ocean, Mint, Hồng-Vàng, Ombre). Khi đổi theme, chỉ cần thay giá trị biến CSS — toàn bộ UI cập nhật tức thì.

### 🖌 ThemePicker
Component bảng chọn màu gồm:
- Lưới màu 18 ô (12 đơn sắc + 6 gradient), ô đang chọn có viền highlight
- **Custom color picker** — input `type="color"` cho phép chọn màu bất kỳ
- Preview realtime: stripe màu trên header form thay đổi ngay khi hover qua từng ô
- Lưu lựa chọn vào `localStorage` để giữ theme khi reload

### 🖱 Trạng thái tương tác
Định nghĩa đầy đủ các trạng thái CSS cho mọi interactive element:
- **hover** — nền sáng nhẹ hoặc đổi màu icon
- **focus** — viền focus ring 2px offset, màu primary, không bị clip bởi overflow hidden
- **active** — hiệu ứng nhấn (scale nhẹ hoặc nền tối hơn)
- **disabled** — opacity 0.4, cursor not-allowed, không có focus ring
- Các animation: fade-in cho toast, slide-up cho modal, typing dots cho AI

### ⌨️ Keyboard Navigation & Focus Ring
- Mọi button, input, select, link đều có `:focus-visible` ring rõ ràng (không dùng `outline: none`)
- Thứ tự Tab logic theo luồng đọc: TopBar → FormHeader → QuestionCard[] → Sidebar → AIChatBox
- Bẫy focus (focus trap) trong modal: `Tab` không thoát ra ngoài modal khi đang mở
- `Escape` đóng modal, dropdown, chatbox
- Phím tắt toàn cục (xem bảng trong README): `Ctrl+Z`, `Ctrl+D`, `Alt+↑/↓`, `?`...

### ♿ ARIA & Accessibility
Các thuộc tính ARIA được thêm vào:
- `aria-label` cho icon buttons không có text hiển thị (undo, redo, xóa, nhân đôi...)
- `aria-expanded` cho dropdown loại câu hỏi và chatbox
- `aria-required` cho câu hỏi bắt buộc trong preview
- `role="dialog"` + `aria-modal="true"` cho ShareModal
- `aria-live="polite"` cho vùng thông báo toast
- `aria-describedby` liên kết label với input tương ứng

### 🔍 Kiểm tra Contrast & Báo cáo
- Chạy Lighthouse audit trên trang editor và trang preview
- Ghi lại score và danh sách issues vào `docs/a11y-report.md`
- Fix mọi lỗi contrast ratio < 4.5:1 (WCAG AA) bằng cách điều chỉnh biến màu trong `index.css`

## Ghi chú

- Ưu tiên fix pragmatic: keyboard, labels, contrast — không cần perfect score.
- Giao diện **không** được giống Google Forms quá; giữ bản sắc riêng.
