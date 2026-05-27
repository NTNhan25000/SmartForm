# SmartForm - AI-Powered Form Builder

> Ứng dụng tạo và quản lý biểu mẫu khảo sát thông minh, tích hợp AI để tự động hóa quy trình từ tạo câu hỏi đến phân tích kết quả.

---

## Tính năng

| STT | Chức năng |
|-----|-----------|
| 1 | Tạo tài khoản, đăng nhập và quản lý hồ sơ người dùng |
| 2 | AI Form Generator: Nhập yêu cầu bằng văn bản, AI tự động tạo bộ khung câu hỏi |
| 3 | Trình chỉnh sửa biểu mẫu (Thêm/Sửa/Xóa câu hỏi Trắc nghiệm, Tự luận) |
| 4 | Gửi link chia sẻ biểu mẫu và thu thập câu trả lời |
| 5 | AI Summary: Tự động tóm tắt câu trả lời tự luận và đưa ra đề xuất hành động |
| 6 | Thống kê dữ liệu bằng biểu đồ trực quan (Tròn, Cột) cho câu hỏi trắc nghiệm |
| 7 | Xuất dữ liệu khảo sát ra file Excel / Google Sheets |
| 8 | Kho biểu mẫu mẫu (Templates) theo chủ đề: Học tập, Sự kiện, Khảo sát ý kiến |

---

## Vấn đề Google Form hiện tại giải quyết

- Tạo câu hỏi thủ công, tốn thời gian → **AI tự động sinh câu hỏi**
- Phân tích câu trả lời tự luận thủ công → **AI tóm tắt và đề xuất hành động**
- Không có gợi ý template thông minh → **Kho template đa dạng theo chủ đề**

---

## Tech Stack (đề xuất)

**Frontend:** React + TailwindCSS

**Backend:** Node.js / FastAPI

**Database:** PostgreSQL

**AI:** OpenAI API / Gemini API

**Export:** SheetJS (Excel), Google Sheets API

---

## Luồng sử dụng chính

```
Đăng nhập → Nhập yêu cầu bằng văn bản → AI tạo form → Chỉnh sửa → Chia sẻ link → Thu thập câu trả lời → AI tóm tắt + Biểu đồ thống kê → Xuất Excel
```

---

## Cài đặt & Chạy dự án

```bash
# Clone repo
git clone https://github.com/your-username/smartform.git
cd smartform

# Cài dependencies
npm install

# Chạy dev server
npm run dev
```

---

## Đóng góp

Pull request và issue luôn được chào đón. Vui lòng đọc `CONTRIBUTING.md` trước khi đóng góp.

---

## License

MIT
