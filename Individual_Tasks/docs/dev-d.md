# Dev D — Styling & Accessibility

[← Dev C](./dev-c.md) · [Docs index](./README.md) · [Dev E →](./dev-e.md)

---

## Vai trò

Hoàn thiện theme tokens, đảm bảo accessibility, và chạy Lighthouse audit.

## Deliverables

| File | Mô tả |
|------|-------|
| `src/index.css` | Theme tokens, utility classes hoàn chỉnh |
| `docs/a11y-report.md` | Kết quả Lighthouse + danh sách issues đã fix |

## Nhiệm vụ

1. Hoàn thiện CSS variables: palette, spacing, card styles, focus rings trong `index.css`.
2. Thêm ARIA labels cho: question controls, AI toggle button, modal dialogs.
3. Kiểm tra color contrast — sửa nếu không đạt WCAG AA (ratio ≥ 4.5:1).
4. Chạy Lighthouse accessibility audit và tạo báo cáo.
5. Fix các keyboard navigation issues quan trọng.

## Acceptance Criteria

- [ ] Mọi interactive element có focus ring rõ ràng và reachable bằng Tab.
- [ ] Lighthouse accessibility score ≥ 90 (hoặc document các vấn đề còn lại).
- [ ] Không có màu sắc nào vi phạm WCAG AA contrast ratio.
- [ ] Modal và dropdown đóng được bằng `Escape`.

## Ước lượng: 2 ngày

## Chức năng chính phát triển

- **Theme tokens** — CSS variables cho palette (12 màu đơn + 6 gradient), spacing, card styles trong `index.css`
- **ThemePicker** — bảng chọn màu realtime, custom color picker, xem trước ngay trên header
- **Trạng thái tương tác** — styles cho hover, focus, active, disabled đồng bộ toàn bộ UI
- **Focus rings** — viền focus rõ ràng cho mọi interactive element, keyboard navigable
- **ARIA labels** — gán nhãn cho question controls, AI toggle, modal dialogs
- **Contrast audit** — kiểm tra và sửa màu sắc đạt WCAG AA (ratio ≥ 4.5:1)

## Ghi chú

- Ưu tiên fix pragmatic: keyboard, labels, contrast — không cần perfect score.
- Giao diện **không** được giống Google Forms quá; giữ bản sắc riêng.
