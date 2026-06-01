# 📝 AI Forms — Smart Form Builder

<div align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)

**Một ứng dụng tạo biểu mẫu trực tuyến với giao diện Google Forms, tích hợp AI Assistant giúp tạo câu hỏi thông minh.**

[🚀 Demo](#) · [✨ Tính năng](#-tính-năng) · [🛠 Cài đặt](#-cài-đặt) · [⌨️ Phím tắt](#️-phím-tắt)

</div>

---

## 📸 Screenshots

> *Thêm screenshot vào đây*

| Giao diện chỉnh sửa | AI Chatbox | Xem trước |
|:---:|:---:|:---:|
| ![Editor](https://via.placeholder.com/400x250?text=Form+Editor) | ![AI Chat](https://via.placeholder.com/400x250?text=AI+Assistant) | ![Preview](https://via.placeholder.com/400x250?text=Form+Preview) |

---

## ✨ Tính năng

### 📋 Trình tạo biểu mẫu (giống Google Forms)
- **Tiêu đề & mô tả** — Chỉnh sửa trực tiếp, tự động điều chỉnh chiều cao
- **8 loại câu hỏi**:
  - ✏️ Câu trả lời ngắn
  - 📄 Đoạn văn
  - ⭕ Trắc nghiệm (Multiple choice)
  - ☑️ Hộp kiểm (Checkboxes)
  - 📋 Menu thả xuống (Dropdown)
  - 📊 Thang tuyến tính (Linear scale 1-5)
  - 📅 Ngày
  - 🕐 Thời gian
- **Thêm / Xóa / Nhân đôi** câu hỏi
- **Di chuyển câu hỏi** lên/xuống
- **Bật/tắt bắt buộc** cho từng câu hỏi
- **Đánh số thứ tự** tự động
- **Thanh công cụ bên** nhanh — thêm loại câu hỏi bất kỳ

### 🤖 AI Assistant (Chatbox)
- 💬 **Chatbox ở góc dưới bên phải** — giao diện chat hiện đại
- **Gợi ý câu hỏi thông minh** dựa trên chủ đề biểu mẫu
- **Tạo biểu mẫu mẫu** chỉ với 1 câu lệnh:
  - `"Tạo biểu mẫu khảo sát"` → Satisfaction survey
  - `"Tạo biểu mẫu đăng ký sự kiện"` → Event registration
  - `"Tạo biểu mẫu phản hồi sản phẩm"` → Product feedback
- **Tạo lựa chọn** cho câu hỏi trắc nghiệm
- **Cải thiện nội dung** — mẹo tối ưu biểu mẫu
- **Quick actions** — nút bấm nhanh: Gợi ý, Biểu mẫu mẫu, Cải thiện
- **Thêm từng câu hoặc tất cả** từ gợi ý AI
- **Typing animation** — hiệu ứng AI đang suy nghĩ

### 🎨 Tùy chỉnh giao diện
- **12 màu đơn** — Tím, Xanh dương, Xanh lá, Đỏ, Cam, Vàng...
- **6 gradient** — Xanh-Tím, Hồng-Đỏ, Ocean, Mint, Hồng-Vàng, Ombre
- **Custom color picker** — chọn màu bất kỳ
- **Xem trước** theme trong real-time
- Stripe màu trên header thay đổi theo theme

### 🔗 Gửi & Chia sẻ (Share Modal)
- **Tab Liên kết** — Sao chép link + chia sẻ mạng xã hội
- **Tab Email** — Nhập email & gửi trực tiếp
- **Tab Nhúng** — Copy embed code `<iframe>`

### 👁 Xem trước tương tác (Preview Mode)
- **Inputs hoạt động thật** — radio, checkbox, dropdown, date, time
- **Nút "Gửi"** → trang xác nhận với thông báo tùy chỉnh
- **Thu thập email** (nếu bật trong Settings)
- **Thanh tiến trình** (nếu bật trong Settings)
- **In biểu mẫu** ngay từ preview

### ⚙️ Cài đặt (Settings Tab)
- Thu thập địa chỉ email
- Giới hạn 1 phản hồi / người
- Cho phép chỉnh sửa sau khi gửi
- Hiển thị thanh tiến trình
- Xáo trộn thứ tự câu hỏi
- Tùy chỉnh thông báo xác nhận

### ⏪ Undo / Redo
- **Lịch sử 50 bước** — hoàn tác mọi thay đổi
- Hoạt động với mọi thao tác: sửa tiêu đề, thêm/xóa câu hỏi, đổi theme...

### 📤 Export / Import
- **Export JSON** — Tải biểu mẫu xuống file `.json`
- **Import JSON** — Nạp biểu mẫu từ file `.json`

### 🔔 Toast Notifications
- Thông báo cho mọi hành động
- 4 loại: ✅ Success | ℹ️ Info | ⚠️ Warning | ❌ Error
- Tự động biến mất sau 3 giây

### 💾 Auto-save
- Hiển thị trạng thái **"✓ Đã lưu"** / **"Đang lưu..."** trên thanh tiêu đề

---

## ⌨️ Phím tắt

| Phím | Hành động |
|------|-----------|
| `Ctrl + Z` | Hoàn tác (Undo) |
| `Ctrl + Shift + Z` | Làm lại (Redo) |
| `Ctrl + D` | Nhân đôi câu hỏi đang chọn |
| `Ctrl + S` | Lưu biểu mẫu |
| `Ctrl + P` | Bật/tắt xem trước |
| `Delete` / `Backspace` | Xóa câu hỏi đang chọn |
| `Alt + ↑` | Di chuyển câu hỏi lên |
| `Alt + ↓` | Di chuyển câu hỏi xuống |
| `?` | Mở bảng phím tắt |

---

## 🛠 Công nghệ

| Tech | Mô tả |
|------|--------|
| **React 19** | UI Library |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Utility-first CSS |
| **Vite 7** | Build tool siêu nhanh |
| **Lucide React** | Icon library |
| **Vite Plugin Singlefile** | Build thành 1 file HTML duy nhất |

---

## 🎯 Cách sử dụng

### Tạo biểu mẫu cơ bản
1. Nhập **tiêu đề** và **mô tả** ở phần đầu
2. Nhấn **"Thêm câu hỏi"** hoặc dùng sidebar bên phải
3. Chọn **loại câu hỏi** từ dropdown
4. Nhập nội dung câu hỏi và các lựa chọn
5. Bật **"Bắt buộc"** nếu cần

### Dùng AI tạo biểu mẫu nhanh
1. Nhấn biểu tượng ✨ ở góc dưới bên phải
2. Gõ `"Tạo biểu mẫu khảo sát"` hoặc nhấn nút **"Biểu mẫu mẫu"**
3. Xem gợi ý → nhấn **"Thêm tất cả"** hoặc thêm từng câu
4. Chỉnh sửa lại theo ý muốn

### Tùy chỉnh & gửi
1. Nhấn 🎨 để **đổi màu** chủ đề
2. Nhấn **Gửi** → chọn **Liên kết / Email / Nhúng**
3. Nhấn 👁 để **xem trước** trước khi gửi

---

## 📜 License

MIT License — thoải mái sử dụng và chỉnh sửa.

---

<div align="center">

**Được tạo với ❤️ bằng React + TypeScript + Tailwind CSS**

</div>
