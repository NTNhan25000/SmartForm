# Person 4 - Share Modal & Preview Mode

## 🎯 Mục tiêu
Xử lý các màn hình cuối cùng: xem trước form, chia sẻ form và hiển thị confirmation.

## 📋 Tiêu chí hoàn thành
- [x] Preview mode hiển thị form như người dùng nhìn thấy
- [x] Share modal có 3 tab rõ ràng (Link, Email, Embed)
- [x] Copy link và embed code dễ dàng
- [x] Trạng thái "đã sao chép" rõ ràng
- [x] Form submission có confirmation page
- [x] Responsive hoạt động tốt

## 📁 Cấu trúc file
- `index.html` - HTML structure
- `style.css` - CSS styling
- `script.js` - JavaScript functionality

## 🚀 Hướng dẫn sử dụng
1. Mở `index.html` trong trình duyệt
2. Click "Xem trước" để xem form từ góc nhìn người dùng
3. Click "Chia sẻ" để mở share modal
4. Chuyển đổi giữa các tab (Link, Email, Embed)
5. Copy link hoặc embed code
6. Gửi email hoặc test submit form

## 📋 Features

### Preview Mode
- Hiển thị form đầy đủ
- 3 loại câu hỏi: short text, multiple choice, paragraph
- Submit button
- Responsive

### Share Modal
- **Link Tab**: Copy link công khai
- **Email Tab**: Gửi form qua email
- **Embed Tab**: Copy embed code cho website

### Confirmation Page
- Hiển thị khi form được submit
- Thông báo cảm ơn người dùng
- Nút quay lại

## 🎨 Design Language
- Primary Color: #4285f4
- Modal Background: rgba(0,0,0,0.5)
- Tab active indicator: #4285f4

## 📝 Ghi chú
- Copy functionality sử dụng document.execCommand
- Có feedback visual khi copy thành công
