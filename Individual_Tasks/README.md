# GG Form - Individual Tasks

`Individual_Tasks` là bản chia nhỏ giao diện GG Form thành 5 phần việc độc lập, kèm một folder `demo` là khung ghép hoàn chỉnh để trình bày nhanh trên GitHub.

![Demo preview](assets/demo-preview.svg)

## Mục tiêu

- Chia rõ trách nhiệm cho từng người.
- Mỗi folder có thể mở và chạy độc lập.
- Có một trang `demo` mô phỏng khung giao diện sau khi ghép 5 phần lại với nhau.

## Cấu trúc thư mục

```text
Individual_Tasks/
├── assets/
│   └── demo-preview.svg
├── demo/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── README.md
│   └── open_demo.ps1
├── Person_1_Layout_TopBar/
├── Person_2_FormHeader_QuestionCard/
├── Person_3_Sidebar_ThemePicker/
├── Person_4_ShareModal_Preview/
└── Person_5_ChatBox_Responsive/
```

## Demo

Mở [folder demo](demo/index.html) để xem bản trình bày gọn, đẹp và dễ đưa lên GitHub.

Trong demo có:

- Top bar, sidebar, form header, question cards, preview/share và AI chatbox trong cùng một màn hình.
- Các khu vực thể hiện đúng vai trò của từng task sau khi combine.
- Hướng dẫn chạy local và lệnh đẩy repo lên GitHub.

## Các phần việc

### 1. Layout & Top Bar

- File: [Person_1_Layout_TopBar/README.md](Person_1_Layout_TopBar/README.md)
- Vai trò: xương sống của editor, top bar, trạng thái lưu, các nút hành động.

### 2. Form Header & Question Card

- File: [Person_2_FormHeader_QuestionCard/README.md](Person_2_FormHeader_QuestionCard/README.md)
- Vai trò: header form, question cards, thao tác copy/delete/add.

### 3. Sidebar & Theme Picker

- File: [Person_3_Sidebar_ThemePicker/README.md](Person_3_Sidebar_ThemePicker/README.md)
- Vai trò: sidebar thêm câu hỏi nhanh, chọn theme, preview theme.

### 4. Share Modal & Preview

- File: [Person_4_ShareModal_Preview/README.md](Person_4_ShareModal_Preview/README.md)
- Vai trò: preview mode, share modal, copy link/embed, confirmation.

### 5. AI Chatbox & Responsive

- File: [Person_5_ChatBox_Responsive/README.md](Person_5_ChatBox_Responsive/README.md)
- Vai trò: AI chatbox floating, quick actions, toast, responsive polish.

## Cách chạy demo

### Cách 1: Mở trực tiếp

1. Vào folder `Individual_Tasks/demo`.
2. Mở `index.html` bằng trình duyệt.

### Cách 2: Dùng PowerShell trên Windows

Chạy file:

```powershell
Individual_Tasks/demo/open_demo.ps1
```

## Cách đẩy lên GitHub

```powershell
cd d:\cmc\HTML
git init
git add .
git commit -m "Add GG Form individual tasks demo"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Ghi chú

- `demo` được thiết kế để làm trang giới thiệu, không phụ thuộc chéo sang các folder khác.
- Các folder task vẫn chạy độc lập.
- Preview ở trên là file SVG nên hiển thị tốt trên GitHub.
