# Dev C — AI & Services

[← Dev B](./dev-b.md) · [Docs index](./README.md) · [Dev D →](./dev-d.md)

---

## Vai trò

Implement local AI adapter (rule-based, offline) và các service nội bộ.

## Deliverables

| File | Mô tả |
|------|-------|
| `src/services/ai.ts` | Rule-based AI — không gọi API ngoài |
| `src/__tests__/ai.test.ts` | Unit tests cho parser và autonomous runner |
| `docs/ai-commands.md` | Danh sách lệnh tiếng Việt được hỗ trợ |

## Nhiệm vụ

1. Định nghĩa contract: `chatWithAI(input, history, form): Promise<AIResponse>`.
2. Implement parser rule-based cho các lệnh phổ biến (xem bảng bên dưới).
3. Implement `startAutonomousAI(onActions, intervalMs)` và `stopAutonomousAI()`.
4. Viết unit tests cho parser và autonomous runner.

## Lệnh được hỗ trợ (MVP)

| Lệnh mẫu | FormAction trả về |
|----------|------------------|
| `"thêm câu hỏi trắc nghiệm"` | `add_question` (type: multiple_choice) |
| `"xóa câu hỏi cuối"` | `delete_question` |
| `"đổi tiêu đề thành X"` | `set_title` |
| `"thêm lựa chọn A"` | `update_question` (thêm option) |
| `"đánh dấu bắt buộc"` | `update_question` (required: true) |

## Acceptance Criteria

- [ ] AI không gọi bất kỳ external API nào.
- [ ] Parser trả về `FormAction[]` chính xác cho tất cả lệnh mẫu ở bảng trên.
- [ ] Autonomous mode chỉ hoạt động khi người dùng bật và dừng được khi unmount.
- [ ] Unit tests pass.

## Ước lượng: 1–2 ngày

## Chức năng chính phát triển

- **`chatWithAI()`** — nhận lệnh tiếng Việt, trả về `FormAction[]` và message phản hồi
- **Chatbox UI** — giao diện chat góc dưới phải, typing animation, quick action buttons (Gợi ý / Biểu mẫu mẫu / Cải thiện)
- **Rule-based parser** — xử lý các lệnh: thêm câu hỏi, xóa, đổi tiêu đề, thêm lựa chọn, đánh dấu bắt buộc
- **Tạo biểu mẫu mẫu** — 1 lệnh sinh ra toàn bộ form mẫu (khảo sát / đăng ký sự kiện / phản hồi sản phẩm)
- **Autonomous mode** — `startAutonomousAI(onActions, intervalMs)` phát action định kỳ khi bật, dừng được khi unmount
- **Thêm từng câu / tất cả** — UI cho phép chọn thêm riêng lẻ hoặc đồng loạt từ gợi ý AI

## Ghi chú

- Không commit API keys. AI phải chạy 100% offline cho MVP.
- Autonomous mode cần safeguard: rate limit, chỉ emit ≤ 1 action/interval.
