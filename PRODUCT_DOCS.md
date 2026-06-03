# 📋 SmartForm — Product Documentation

> **Product Vision · Personas · Scenarios · User Stories · Features · Backlog**

---

## 1. 🎯 Product Vision

### Vision Statement

> **"SmartForm là công cụ tạo biểu mẫu trực tuyến thông minh, kết hợp giao diện trực quan kiểu Google Forms với sức mạnh AI, giúp bất kỳ ai cũng có thể tạo form chuyên nghiệp chỉ trong vài phút — không cần kỹ thuật, không cần thiết kế."**

### Vision Board

| Thành phần | Mô tả |
|------------|--------|
| **Target Market** | Sinh viên, giáo viên, nhân viên văn phòng, chủ doanh nghiệp nhỏ, nhà tổ chức sự kiện — bất kỳ ai cần thu thập thông tin qua biểu mẫu trực tuyến |
| **Problem** | Tạo biểu mẫu thủ công tốn thời gian, khó viết câu hỏi hay, thiếu ý tưởng về cấu trúc form phù hợp cho từng mục đích |
| **Solution** | AI Assistant tích hợp sẵn giúp gợi ý câu hỏi, tạo form mẫu, cải thiện nội dung — kết hợp editor kéo-thả trực quan |
| **Unique Value** | Chỉ có AI Forms kết hợp được 3 yếu tố: (1) Giao diện quen thuộc Google Forms, (2) AI gợi ý thông minh theo ngữ cảnh, (3) Hoàn toàn miễn phí, chạy client-side |
| **Key Metrics** | Số form tạo / tuần, tỷ lệ user quay lại, % form dùng AI gợi ý, thời gian trung bình tạo 1 form |


---

## 2. 👥 Personas

### Persona 1: Lan — Giáo viên trường THPT

| Thuộc tính | Chi tiết |
|------------|----------|
| **Tên** | Nguyễn Thị Lan |
| **Tuổi** | 34 |
| **Nghề nghiệp** | Giáo viên Tiếng Anh, trường THPT |
| **Nơi sống** | TP. Hồ Chí Minh |
| **Tech level** | Trung bình — dùng Google Workspace, Word, Excel |
| **Thiết bị** | Laptop Windows + iPhone |

**📝 Background:**
- Dạy 4 lớp, ~160 học sinh
- Thường xuyên cần khảo sát ý kiến phụ huynh, đánh giá bài giảng, thu thập thông tin đăng ký hoạt động
- Hiện đang dùng Google Forms nhưng thấy việc nghĩ câu hỏi rất tốn thời gian

**😤 Pain Points:**
- Phải tạo 4-5 forms mỗi tháng, mỗi form mất 30-45 phút
- Hay bị "bí ý tưởng" khi viết câu hỏi khảo sát
- Không biết cách chọn loại câu hỏi phù hợp
- Muốn form đẹp hơn nhưng không biết thiết kế

**🎯 Goals:**
- Tạo form khảo sát nhanh trong vòng 5 phút
- Có sẵn bộ câu hỏi mẫu cho giáo dục
- Form trông chuyên nghiệp, phụ huynh thích điền

---

### Persona 2: Minh — Startup Founder

| Thuộc tính | Chi tiết |
|------------|----------|
| **Tên** | Trần Đức Minh |
| **Tuổi** | 28 |
| **Nghề nghiệp** | Founder / CEO startup EdTech |
| **Nơi sống** | Hà Nội |
| **Tech level** | Cao — code React, dùng Figma, Notion |
| **Thiết bị** | MacBook Pro + iPad |

**📝 Background:**
- Vừa ra mắt sản phẩm e-learning mới
- Cần thu thập feedback user liên tục để cải thiện product
- Team nhỏ (5 người), ai cũng phải làm nhiều việc

**😤 Pain Points:**
- Phải tạo nhiều loại form khác nhau: onboarding, NPS, bug report, feature request
- Cần form có logic phân nhánh (chưa có trong tool hiện tại)
- Muốn embed form vào trang web sản phẩm
- Cần export data để phân tích

**🎯 Goals:**
- Tạo form nhanh cho nhiều mục đích khác nhau
- Embed form vào landing page
- Export dữ liệu JSON/CSV
- Có AI gợi ý câu hỏi theo best practices UX research

---

### Persona 3: Hạnh — Sinh viên năm 3

| Thuộc tính | Chi tiết |
|------------|----------|
| **Tên** | Lê Thu Hạnh |
| **Tuổi** | 21 |
| **Nghề nghiệp** | Sinh viên Marketing, ĐHBK |
| **Nơi sống** | Đà Nẵng |
| **Tech level** | Trung bình — dùng Canva, Google Docs, Facebook |
| **Thiết bị** | Laptop Acer + Samsung Galaxy |

**📝 Background:**
- Phụ trách truyền thông CLB trường
- Thường tổ chức sự kiện, cần form đăng ký thành viên, đăng ký tham gia event
- Làm assignment môn học cần khảo sát thị trường

**😤 Pain Points:**
- Không biết viết câu hỏi khảo sát chuyên nghiệp
- Bạn bè lười điền form vì form trông nhàm chán
- Deadline gần thì không có thời gian nghĩ form từ đầu
- Muốn form trông đẹp, bắt mắt

**🎯 Goals:**
- Tạo form nhanh gọn trước deadline
- Có mẫu form sẵn để dùng luôn
- Form đẹp, bạn bè thích điền
- Dễ chia sẻ qua link, QR code

---

### Persona 4: Tuấn — HR Manager

| Thuộc tính | Chi tiết |
|------------|----------|
| **Tên** | Phạm Anh Tuấn |
| **Tuổi** | 38 |
| **Nghề nghiệp** | HR Manager, công ty logistics 200 nhân viên |
| **Nơi sống** | Bình Dương |
| **Tech level** | Trung bình — dùng Excel, email, Zalo |
| **Thiết bị** | Desktop PC công ty + Oppo |

**📝 Background:**
- Quản lý toàn bộ quy trình tuyển dụng và đào tạo
- Thường xuyên cần form: ứng tuyển, đánh giá đào tạo, khảo sát nhân viên, feedback sự kiện công ty
- Đã dùng Google Forms nhưng muốn cái gì đó "xịn hơn"

**😤 Pain Points:**
- Form ứng tuyển hiện tại quá đơn giản, không chuyên nghiệp
- Phải copy/paste lại từ form cũ mỗi lần tuyển — dễ sót câu hỏi
- Quản lý nhiều form lộn xộn
- Muốn thu thập CV, file đính kèm

**🎯 Goals:**
- Tạo form tuyển dụng chuyên nghiệp
- Lưu template để tái sử dụng
- Quản lý phản hồi tập trung
- Branding công ty trên form (logo, màu sắc)

---

## 3. 🎬 Scenarios

### Scenario 1: Lan tạo form đánh giá học kỳ

```
📌 Context: Cuối học kỳ, Lan cần khảo sát ý kiến 160 học sinh về chất lượng bài giảng.

1. Lan mở AI Forms trên laptop
2. Nhấn "Tạo biểu mẫu mới"
3. Gõ tiêu đề: "Khảo sát chất lượng bài giảng — Học kỳ 1"
4. Thêm mô tả: "Học sinh thân mến, hãy chia sẻ ý kiến..."
5. Nhấn biểu tượng ✨ AI Assistant
6. Gõ: "Tạo biểu mẫu khảo sát满意度"
7. AI gợi ý 4 câu hỏi: đánh giá tổng thể, thang 1-10, góp ý mở
8. Lan nhấn "Thêm tất cả" → 4 câu hỏi xuất hiện
9. Chỉnh sửa lại câu hỏi cho phù hợp lớp mình
10. Đổi theme màu xanh lá — màu trường
11. Nhấn "Xem trước" → kiểm tra form
12. Nhấn "Gửi" → Copy link → Gửi qua Zalo group lớp
13. Tổng thời gian: 5 phút ✅
```

### Scenario 2: Minh tạo NPS survey và embed vào product

```
📌 Context: Minh cần tạo Net Promoter Score survey đặt trong app.

1. Minh mở AI Forms
2. Nhập tiêu đề: "Bạn đánh giá trải nghiệm của mình thế nào?"
3. Nhấn AI → gõ "Tạo biểu mẫu phản hồi sản phẩm"
4. AI gợi ý: Đánh giá chất lượng (1-5), Điểm thích nhất (checkboxes), Góp ý (paragraph)
5. Minh thêm câu hỏi NPS linear scale 0-10
6. Bật Settings: "Giới hạn 1 phản hồi"
7. Nhấn "Gửi" → Tab "Nhúng" → Copy <iframe> code
8. Paste vào React app của mình
9. Export JSON backup form
10. Tạo thêm 2 form khác: Bug Report, Feature Request
```

### Scenario 3: Hạnh tạo form đăng ký sự kiện lúc nửa đêm

```
📌 Context: 23:30 tối, Hạnh vừa nhận task tổ chức workshop ngày mai.

1. Hạnh mở AI Forms trên điện thoại
2. Nhấn AI → "Tạo biểu mẫu đăng ký sự kiện"
3. AI gợi ý: Họ tên, Email, SĐT, Hình thức tham gia, Câu hỏi đặc biệt
4. Nhấn "Thêm tất cả" → Xong trong 30 giây
5. Sửa tiêu đề: "Đăng ký Workshop Digital Marketing 2025"
6. Chọn gradient theme hồng-vàng — tone CLB
7. Nhấn "Gửi" → Copy link → Đăng Facebook + gửi group Zalo
8. Thở phào. Chỉ mất 3 phút 🎉
```

### Scenario 4: Tuấn tạo form tuyển dụng với branding công ty

```
📌 Context: Tuấn cần tuyển 10 tài xế mới.

1. Mở AI Forms, tạo form mới
2. Tiêu đề: "Tuyển dụng Tài xế Lái xe — Công ty ABC Logistics"
3. Nhấn AI → "Gợi ý câu hỏi cho form tuyển dụng"
4. AI gợi ý: Họ tên, SĐT, Kinh nghiệm, Loại bằng lái, Khu vực
5. Tuấn thêm: Upload CV (file), Năm kinh nghiệm (dropdown)
6. Vào Theme → chọn Custom color → nhập mã màu brand công ty (#1a3c6e)
7. Bật: Thu thập email, Giới hạn 1 phản hồi
8. Xem trước → hài lòng → Gửi link qua Zalo HR group
9. Export template JSON để dùng lại lần sau
```

---

## 4. 📖 User Stories

### Epic 1: Form Editor

| ID | User Story | Priority | Points |
|----|-----------|----------|--------|
| US-01 | Là **người dùng**, tôi muốn **tạo biểu mẫu mới** với tiêu đề và mô tả, để **bắt đầu thu thập thông tin** | P0 | 2 |
| US-02 | Là **người dùng**, tôi muốn **thêm câu hỏi nhiều loại** (trắc nghiệm, điền đáp án, thang đánh giá, ngày...), để **thu thập nhiều loại dữ liệu khác nhau** | P0 | 5 |
| US-03 | Là **người dùng**, tôi muốn **chỉnh sửa nội dung câu hỏi** trực tiếp, để **điều chỉnh cho phù hợp** | P0 | 2 |
| US-04 | Là **người dùng**, tôi muốn **xóa/nhân đôi câu hỏi**, để **quản lý form linh hoạt** | P0 | 2 |
| US-05 | Là **người dùng**, tôi muốn **sắp xếp lại thứ tự câu hỏi** (lên/xuống), để **tạo luồng logic** | P1 | 3 |
| US-06 | Là **người dùng**, tôi muốn **đánh dấu câu hỏi bắt buộc**, để **buộc người điền trả lời câu quan trọng** | P0 | 1 |
| US-07 | Là **người dùng**, tôi muốn **thêm/xóa lựa chọn** cho câu hỏi trắc nghiệm, để **tuỳ chỉnh đáp án** | P0 | 2 |
| US-08 | Là **Lan**, tôi muốn **thêm hình ảnh** vào câu hỏi hoặc lựa chọn, để **tạo form sinh động hơn** | P2 | 3 |

### Epic 2: AI Assistant

| ID | User Story | Priority | Points |
|----|-----------|----------|--------|
| US-09 | Là **Hạnh**, tôi muốn **mở AI chatbox** và yêu cầu tạo form mẫu, để **tiết kiệm thời gian** thay vì tạo thủ công | P0 | 8 |
| US-10 | Là **Lan**, tôi muốn **AI gợi ý câu hỏi** dựa trên chủ đề, để **không bị "bí ý tưởng"** | P0 | 5 |
| US-11 | Là **Minh**, tôi muốn **AI tạo lựa chọn** cho câu hỏi trắc nghiệm, để **có bộ lựa chọn phù hợp nhanh chóng** | P1 | 3 |
| US-12 | Là **người dùng**, tôi muốn **thêm tất cả hoặc từng câu hỏi** từ gợi ý AI, để **linh hoạt chọn nội dung phù hợp** | P0 | 3 |
| US-13 | Là **Tuấn**, tôi muốn **AI cải thiện nội dung câu hỏi**, để **form chuyên nghiệp hơn** | P1 | 5 |
| US-14 | Là **người dùng**, tôi muốn **xem lịch sử chat** với AI, để **quay lại gợi ý cũ** | P2 | 2 |
| US-15 | Là **người dùng**, tôi muốn **AI phân tích form** và đưa ra điểm chất lượng, để **biết form có tốt không** | P3 | 8 |

### Epic 3: Theme & Customization

| ID | User Story | Priority | Points |
|----|-----------|----------|--------|
| US-16 | Là **Hạnh**, tôi muốn **chọn màu chủ đề** từ bảng màu có sẵn, để **form trông đẹp hơn** | P1 | 3 |
| US-17 | Là **Tuấn**, tôi muốn **chọn màu tùy chỉnh** theo brand công ty, để **form mang dấu ấn thương hiệu** | P1 | 2 |
| US-18 | Là **người dùng**, tôi muốn **chọn gradient theme**, để **form hiện đại, bắt mắt** | P2 | 2 |
| US-19 | Là **người dùng**, tôi muốn **thêm logo** vào header form, để **branding doanh nghiệp** | P3 | 3 |
| US-20 | Là **người dùng**, tôi muốn **chọn font chữ**, để **form cá nhân hóa hơn** | P3 | 3 |

### Epic 4: Sharing & Distribution

| ID | User Story | Priority | Points |
|----|-----------|----------|--------|
| US-21 | Là **người dùng**, tôi muốn **sao chép link form**, để **chia sẻ qua Zalo/Messenger** | P0 | 2 |
| US-22 | Là **Tuấn**, tôi muốn **gửi form qua email** trực tiếp từ ứng dụng, để **đến được ứng viên nhanh** | P1 | 3 |
| US-23 | Là **Minh**, tôi muốn **lấy mã nhúng iframe**, để **đặt form vào landing page** | P1 | 3 |
| US-24 | Là **Hạnh**, tôi muốn **tạo QR code** từ link form, để **in lên poster sự kiện** | P2 | 3 |
| US-25 | Là **người dùng**, tôi muốn **chia sẻ qua mạng xã hội** (Facebook, Twitter), để **đạt thêm người điền** | P2 | 2 |

### Epic 5: Preview & Response

| ID | User Story | Priority | Points |
|----|-----------|----------|--------|
| US-26 | Là **người dùng**, tôi muốn **xem trước form** như người điền sẽ thấy, để **kiểm tra trước khi gửi** | P0 | 3 |
| US-27 | Là **người dùng**, tôi muốn **điền thử form preview** và nhấn Gửi, để **kiểm tra trải nghiệm thực tế** | P0 | 3 |
| US-28 | Là **người dùng**, tôi muốn **in form**, để **lưu bản giấy** | P2 | 1 |
| US-29 | Là **Minh**, tôi muốn **xem trang phản hồi** với thống kê cơ bản, để **theo dõi số lượng phản hồi** | P2 | 5 |
| US-30 | Là **người dùng**, tôi muốn **xuất phản hồi ra CSV/Excel**, để **phân tích dữ liệu** | P3 | 5 |

### Epic 6: Settings & Configuration

| ID | User Story | Priority | Points |
|----|-----------|----------|--------|
| US-31 | Là **Tuấn**, tôi muốn **bật thu thập email**, để **biết ai đã điền form** | P1 | 1 |
| US-32 | Là **Minh**, tôi muốn **giới hạn 1 phản hồi/người**, để **tránh spam** | P1 | 1 |
| US-33 | Là **người dùng**, tôi muốn **cho phép chỉnh sửa sau gửi**, để **người điền sửa lỗi** | P2 | 1 |
| US-34 | Là **người dùng**, tôi muốn **hiển thị thanh tiến trình**, để **người điền biết còn bao xa** | P2 | 2 |
| US-35 | Là **người dùng**, tôi muốn **tùy chỉnh thông báo xác nhận**, để **gửi lời cảm ơn cá nhân hóa** | P2 | 1 |
| US-36 | Là **Lan**, tôi muốn **xáo trộn thứ tự câu hỏi**, để **tránh copy đáp án giữa học sinh** | P2 | 2 |

### Epic 7: Data & Integration

| ID | User Story | Priority | Points |
|----|-----------|----------|--------|
| US-37 | Là **Minh**, tôi muốn **export form ra JSON**, để **backup và tích hợp** | P1 | 2 |
| US-38 | Là **Minh**, tôi muốn **import form từ JSON**, để **khôi phục form đã lưu** | P1 | 2 |
| US-39 | Là **người dùng**, tôi muốn **undo/redo** mọi thao tác, để **sửa sai dễ dàng** | P0 | 3 |
| US-40 | Là **người dùng**, tôi muốn **lưu form tự động**, để **không mất dữ liệu khi tắt tab** | P1 | 3 |
| US-41 | Là **người dùng**, tôi muốn **sử dụng phím tắt**, để **tạo form nhanh hơn** | P2 | 2 |
| US-42 | Là **người dùng**, tôi muốn **xóa tất cả và bắt đầu lại**, để **làm form mới từ đầu** | P2 | 1 |

---

## 5. 🧩 Product Features

### Feature Map

```
AI Forms
│
├── 📝 Form Editor
│   ├── Header (title + description + image)
│   ├── Question Card
│   │   ├── 8 question types
│   │   ├── Add/remove options
│   │   ├── Required toggle
│   │   ├── Change type dropdown
│   │   └── Drag handle
│   ├── Question Actions
│   │   ├── Move up/down
│   │   ├── Duplicate
│   │   ├── Delete
│   │   ├── Add image
│   │   └── More menu
│   └── Sidebar (quick add)
│
├── 🤖 AI Assistant
│   ├── Chat interface
│   ├── Smart suggestions
│   │   ├── Survey template
│   │   ├── Event registration template
│   │   ├── Product feedback template
│   │   └── General questions
│   ├── Option generation
│   ├── Form improvement tips
│   └── Quick action buttons
│
├── 🎨 Theme & Branding
│   ├── 12 solid colors
│   ├── 6 gradient themes
│   ├── Custom color picker
│   ├── Live preview
│   └── Header stripe theming
│
├── 🔗 Sharing
│   ├── Copy link
│   ├── Social sharing
│   ├── Email send
│   └── Embed code (iframe)
│
├── 👁 Preview Mode
│   ├── Interactive form fill
│   ├── Submit → Confirmation page
│   ├── Print view
│   └── Conditional UI (email, progress bar)
│
├── 📊 Responses (placeholder)
│   ├── Response count
│   └── Accepting toggle
│
├── ⚙️ Settings
│   ├── Collect email
│   ├── Limit 1 response
│   ├── Allow edit after submit
│   ├── Show progress bar
│   ├── Shuffle questions
│   └── Confirmation message
│
├── 📤 Data Management
│   ├── Export JSON
│   ├── Import JSON
│   ├── Auto-save
│   └── Undo/Redo (50 steps)
│
└── 🛠 UX Features
    ├── Keyboard shortcuts
    ├── Toast notifications
    ├── Question numbering
    └── Responsive design
```

### Feature Priority Matrix

```
                    ┌─────────────────────────────────────┐
                    │           GIÁ TRỊ CAO               │
                    │                                     │
     P0 ───────────│  Form Editor, AI Chat,              │
     (Must Have)   │  Preview, Undo/Redo, Share Link     │
                    │                                     │
                    │                                     │
     P1 ───────────│  Theme, Email Share, Embed,         │── P1
     (Should Have) │  Export/Import, Settings Toggles    │
                    │                                     │
                    │                                     │
     P2 ───────────│  Social Share, Print, QR Code,      │── P2
     (Nice to Have)│  Shortcuts, Progress Bar, Shuffle   │
                    │                                     │
                    │                                     │
     P3 ───────────│  CSV Export, Logo Upload,           │── P3
     (Future)      │  Form Analytics, Custom Fonts       │
                    │                                     │
                    └─────────────────────────────────────┘
                          CỐ GẮNG THỰC HIỆN →
```

---

## 6. 📋 Product Backlog

### Sprint Overview

| Sprint | Theme | Duration | Story Points |
|--------|-------|----------|-------------|
| Sprint 1 | Core Editor | 2 weeks | 18 |
| Sprint 2 | AI Assistant | 2 weeks | 16 |
| Sprint 3 | Theme & Sharing | 1.5 weeks | 13 |
| Sprint 4 | Preview & Settings | 1.5 weeks | 11 |
| Sprint 5 | Data & Polish | 1 week | 8 |
| **Total** | | **8 weeks** | **66** |

---

### Sprint 1 — Core Form Editor (P0)

| # | Story ID | User Story | Points | Status |
|---|----------|-----------|--------|--------|
| 1 | US-01 | Tạo biểu mẫu mới với tiêu đề & mô tả | 2 | ✅ Done |
| 2 | US-02 | Thêm 8 loại câu hỏi (short, paragraph, MC, checkbox, dropdown, scale, date, time) | 5 | ✅ Done |
| 3 | US-03 | Chỉnh sửa nội dung câu hỏi trực tiếp (inline edit) | 2 | ✅ Done |
| 4 | US-04 | Xóa / nhân đôi câu hỏi | 2 | ✅ Done |
| 5 | US-06 | Đánh dấu câu hỏi bắt buộc (required toggle) | 1 | ✅ Done |
| 6 | US-07 | Thêm/xóa lựa chọn cho câu hỏi trắc nghiệm | 2 | ✅ Done |
| 7 | US-05 | Di chuyển câu hỏi lên/xuống | 3 | ✅ Done |
| 8 | US-39 | Undo / Redo mọi thao tác (50 bước) | 3 | ✅ Done |
| | | **Sprint 1 Total** | **20** | |

---

### Sprint 2 — AI Assistant (P0)

| # | Story ID | User Story | Points | Status |
|---|----------|-----------|--------|--------|
| 1 | US-09 | AI chatbox — giao diện chat, nhận lệnh tạo form mẫu | 8 | ✅ Done |
| 2 | US-10 | AI gợi ý câu hỏi dựa trên chủ đề biểu mẫu | 5 | ✅ Done |
| 3 | US-12 | Thêm tất cả hoặc từng câu hỏi từ gợi ý AI | 3 | ✅ Done |
| | | **Sprint 2 Total** | **16** | |

---

### Sprint 3 — Theme, Sharing & Preview (P0-P1)

| # | Story ID | User Story | Points | Status |
|---|----------|-----------|--------|--------|
| 1 | US-26 | Xem trước form như người điền | 3 | ✅ Done |
| 2 | US-27 | Preview tương tác — điền thử và Gửi | 3 | ✅ Done |
| 3 | US-21 | Sao chép link chia sẻ | 2 | ✅ Done |
| 4 | US-16 | Chọn màu chủ đề từ bảng màu | 3 | ✅ Done |
| 5 | US-17 | Màu tùy chỉnh (color picker) | 2 | ✅ Done |
| 6 | US-23 | Lấy mã nhúng iframe | 3 | ✅ Done |
| | | **Sprint 3 Total** | **16** | |

---

### Sprint 4 — Settings & More Features (P1-P2)

| # | Story ID | User Story | Points | Status |
|---|----------|-----------|--------|--------|
| 1 | US-22 | Gửi form qua email | 3 | ✅ Done |
| 2 | US-18 | Gradient themes | 2 | ✅ Done |
| 3 | US-31 | Thu thập email (settings toggle) | 1 | ✅ Done |
| 4 | US-32 | Giới hạn 1 phản hồi | 1 | ✅ Done |
| 5 | US-33 | Cho phép chỉnh sửa sau gửi | 1 | ✅ Done |
| 6 | US-35 | Tùy chỉnh thông báo xác nhận | 1 | ✅ Done |
| 7 | US-37 | Export JSON | 2 | ✅ Done |
| 8 | US-38 | Import JSON | 2 | ✅ Done |
| 9 | US-41 | Phím tắt (Ctrl+Z, Ctrl+D, Alt+↑↓...) | 2 | ✅ Done |
| | | **Sprint 4 Total** | **15** | |

---

### Sprint 5 — Polish & Extras (P2)

| # | Story ID | User Story | Points | Status |
|---|----------|-----------|--------|--------|
| 1 | US-40 | Auto-save & save indicator | 3 | ✅ Done |
| 2 | US-42 | Xóa tất cả & bắt đầu lại | 1 | ✅ Done |
| 3 | US-28 | In form (print view) | 1 | ✅ Done |
| 4 | US-25 | Chia sẻ qua mạng xã hội | 2 | ✅ Done |
| 5 | US-34 | Hiển thị thanh tiến trình | 2 | ✅ Done |
| 6 | US-36 | Xáo trộn câu hỏi | 2 | ✅ Done |
| 7 | US-11 | AI tạo lựa chọn cho câu hỏi | 3 | ✅ Done |
| 8 | US-13 | AI cải thiện nội dung câu hỏi | 5 | ✅ Done |
| | | **Sprint 5 Total** | **19** | |

---

### 🗓 Backlog — Not Yet Started (P2-P3)

| Priority | Story ID | User Story | Points | Sprint |
|----------|----------|-----------|--------|--------|
| P2 | US-14 | Xem lịch sử chat AI | 2 | Sprint 6 |
| P2 | US-24 | Tạo QR code từ link form | 3 | Sprint 6 |
| P2 | US-29 | Trang phản hồi với thống kê cơ bản | 5 | Sprint 6 |
| P2 | US-08 | Thêm hình ảnh vào câu hỏi/lựa chọn | 3 | Sprint 6 |
| P3 | US-30 | Xuất phản hồi ra CSV/Excel | 5 | Sprint 7 |
| P3 | US-19 | Thêm logo vào header form | 3 | Sprint 7 |
| P3 | US-20 | Chọn font chữ tùy chỉnh | 3 | Sprint 7 |
| P3 | US-15 | AI phân tích chất lượng form & chấm điểm | 8 | Sprint 7 |
| P3 | — | Logic phân nhánh (conditional questions) | 13 | Sprint 8 |
| P3 | — | Collaboration real-time (nhiều người chỉnh sửa) | 21 | Sprint 8 |
| P3 | — | Template marketplace | 13 | Sprint 9 |
| P3 | — | File upload / attachment | 8 | Sprint 9 |
| P3 | — | Multi-page form (phân trang) | 8 | Sprint 9 |
| P3 | — | Biểu đồ thống kê phản hồi | 8 | Sprint 10 |
| P3 | — | Notification email khi có phản hồi mới | 3 | Sprint 10 |

---

### 📊 Velocity & Estimation

| Metric | Value |
|--------|-------|
| **Total Story Points (Done)** | 86 |
| **Total Story Points (Backlog)** | 103 |
| **Sprints Completed** | 5 |
| **Avg. Velocity / Sprint** | 17.2 pts |
| **Estimated Remaining Sprints** | 5 sprints |
| **Total Project Duration** | ~10 sprints (20 weeks) |

---

### 🏗 Technical Debt & Improvement Backlog

| # | Item | Priority | Effort |
|---|------|----------|--------|
| TD-01 | Refactor AI response logic — extract to service layer | Medium | 3 |
| TD-02 | Add unit tests for form state management | High | 5 |
| TD-03 | Add E2E tests (Playwright/Cypress) | Medium | 8 |
| TD-04 | Implement drag-and-drop (dnd-kit) thay vì button up/down | Medium | 5 |
| TD-05 | Persist form state to localStorage | High | 2 |
| TD-06 | Migrate AI to actual API (OpenAI/Gemini) instead of mock | High | 8 |
| TD-07 | Add i18n (đa ngôn ngữ) | Low | 5 |
| TD-08 | Performance: virtualize long form lists | Low | 3 |
| TD-09 | Accessibility audit (WCAG 2.1) | Medium | 5 |
| TD-10 | Mobile responsive optimization | High | 5 |

---

## 📎 Appendix

### A. Acceptance Criteria Template

```
Given: [bối cảnh ban đầu]
When: [hành động của user]
Then: [kết quả mong đợi]

Ví dụ — US-09 AI Chatbox:
Given: User đang ở trang editor
When: Nhấn nút AI ✨ và gõ "Tạo biểu mẫu khảo sát"
Then: 
  - AI trả lời trong < 2 giây
  - Gợi ý ít nhất 3 câu hỏi phù hợp
  - Có nút "Thêm tất cả" và nút thêm từng câu
  - Câu hỏi được thêm vào cuối form
  - Toast "Đã thêm N câu hỏi từ AI" hiển thị
```

### B. Definition of Done (DoD)

- [ ] Code hoàn thành & review
- [ ] Không có TypeScript errors
- [ ] Build thành công (`npm run build`)
- [ ] Responsive trên mobile (375px) & desktop (1440px)
- [ ] Accessibility: keyboard navigable
- [ ] Không có console.error
- [ ] UI khớp design (Google Forms-like)

### C. Definition of Ready (DoR)

- [ ] User story rõ ràng, format chuẩn ("Là... tôi muốn... để...")
- [ ] Acceptance criteria đã định nghĩa
- [ ] Story points đã ước lượng
- [ ] Dependencies đã xác định
- [ ] Mockup / wireframe sẵn (nếu cần UI mới)

---

<div align="center">

**AI Forms — Product Documentation v1.0**

</div>
