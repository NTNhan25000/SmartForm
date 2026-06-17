# Dev C — AI Assistant & Dịch vụ

[← Dev B](./dev-b.md) · [Mục lục tài liệu](./README.md) · [Dev D →](./dev-d.md)

---

## Vai trò

Xây dựng AI assistant nội bộ (rule-based, offline) và các service dùng chung.

## Sản phẩm bàn giao

| Tệp | Mô tả |
|-----|-------|
| `src/services/ai.ts` | Rule-based AI — không gọi API ngoài |
| `src/components/AIChatBox.tsx` | Giao diện chatbox góc dưới phải |
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
| `"tạo biểu mẫu khảo sát"` | nhiều `add_question` (satisfaction survey) |
| `"tạo biểu mẫu đăng ký sự kiện"` | nhiều `add_question` (event registration) |
| `"tạo biểu mẫu phản hồi sản phẩm"` | nhiều `add_question` (product feedback) |

## Tiêu chí nghiệm thu

- [ ] AI không gọi bất kỳ external API nào.
- [ ] Parser trả về `FormAction[]` chính xác cho tất cả lệnh mẫu ở bảng trên.
- [ ] Autonomous mode chỉ hoạt động khi người dùng bật và dừng được khi unmount.
- [ ] Unit tests pass.

## Ước lượng: 1–2 ngày

## Chức năng chính phát triển

### 🤖 `chatWithAI()` — Parser rule-based
Hàm nhận vào chuỗi lệnh tiếng Việt từ người dùng, phân tích theo các pattern regex/keyword, rồi trả về:
```ts
interface AIResponse {
  message: string;       // phản hồi hiển thị trong chatbox
  actions: FormAction[]; // danh sách action áp dụng lên form
  suggestions?: string[]; // gợi ý câu hỏi bổ sung (nếu có)
}
```
Logic xử lý theo thứ tự ưu tiên: lệnh tạo biểu mẫu mẫu → lệnh sửa đơn lẻ → lệnh gợi ý → fallback trả về tips chung.

### 💬 Giao diện Chatbox (AIChatBox)
Component nổi ở góc dưới bên phải màn hình:
- Nút mở/đóng với icon ✨, có badge khi có gợi ý mới
- Khung chat hiển thị lịch sử tin nhắn (người dùng + AI), cuộn tự động xuống cuối
- **Typing animation** — hiệu ứng "..." khi AI đang "suy nghĩ" (delay giả 800ms)
- Input nhập lệnh + nút Gửi, hỗ trợ `Enter` để gửi
- **Quick action buttons**: 3 nút tắt — "💡 Gợi ý", "📋 Biểu mẫu mẫu", "✨ Cải thiện"

### 📋 Tạo biểu mẫu mẫu
Khi nhận lệnh như `"tạo biểu mẫu khảo sát"`, AI sinh ra một bộ câu hỏi mẫu hoàn chỉnh và trả về dưới dạng danh sách gợi ý. Người dùng có thể:
- Nhấn **"Thêm tất cả"** → thêm toàn bộ câu hỏi vào form cùng lúc
- Nhấn **"➕"** bên cạnh từng câu → thêm riêng lẻ từng câu một

### 💡 Gợi ý câu hỏi thông minh
Dựa trên tiêu đề form hiện tại, AI đề xuất 3–5 câu hỏi phù hợp với chủ đề. Ví dụ form tiêu đề "Khảo sát nhân viên" → gợi ý các câu hỏi về mức độ hài lòng, môi trường làm việc, phúc lợi...

### 🔄 Chế độ Autonomous (tự động)
- `startAutonomousAI(onActions, intervalMs)` — chạy background, cứ mỗi `intervalMs` ms phát ra 1 `FormAction` gợi ý
- `stopAutonomousAI()` — dừng interval, gọi khi component unmount
- Chỉ bật khi người dùng chủ động kích hoạt, mặc định tắt
- Safeguard: chỉ emit tối đa 1 action/interval, không emit khi form đang được chỉnh sửa

## Ghi chú

- Không commit API keys. AI phải chạy 100% offline cho MVP.
- Autonomous mode cần safeguard: rate limit, chỉ emit ≤ 1 action/interval.
